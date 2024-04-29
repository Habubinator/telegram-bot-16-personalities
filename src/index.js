const TelegramBot = require("node-telegram-bot-api");
process.env["NTBA_FIX_350"] = 1;
process.env["NTBA_FIX_319"] = 1;

const axios = require("axios");
require("dotenv").config();

const db = new Map();
const gSController = require("./googleSheetsController");
const logger = require("./logger");

// Чтобы бот не падал на бесплатном ресурсе
require("./keep_alive.js");
require("http");
require("https");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: {
        interval: process.env.BOT_POLLING_INTERVAL || 300,
    },
});

function convertToArrays(options, questionId) {
    const result = [
        [
            {
                text: "⬅",
                callback_data: `back`,
            },
        ],
    ];

    options.forEach((option) => {
        result.push([
            {
                text: option.text,
                callback_data: `answer ${questionId} ${option.value}`,
            },
        ]);
    });

    return result;
}

async function postAnswers(answers, retries = 0, maxRetries = 3) {
    let results = (
        await axios.post(
            "https://www.16personalities-api.com/api/personality/submit",
            {
                answers,
                gender: "Other",
            }
        )
    ).data;
    if (results == null) {
        if (retries < maxRetries) {
            return postAnswers(answers, retries + 1);
        }
    }
    return results;
}

async function sendAnswers(answers) {
    console.log(answers);
    let results = await postAnswers(answers);
    const userDataFromTable = await gSController.getTableData(results.fullCode);
    return userDataFromTable;
}

db.set(
    "greeting_ua",
    "Вітаю, мене звуть Анатолій Манолій, я радий бачити твою зацікавленість до гри," +
        " але перед нею будь ласка обери мову спілкування та пройди тест (7хв.) і щоб почати, тисни кнопку нижче 👇"
);
db.set(
    "greeting_en",
    "Hello, my name is Anatoli Manolii, I'm glad to see your interest to the game," +
        " but before we start, please take the test (7 min.) and click the button below 👇 to start."
);
db.set(
    "greeting_ru",
    "Приветствую, меня зовут Анатолий Манолий, я рад видеть твою заинтересованность к игре, " +
        "но перед ней, пожалуйста, пройди тест (7мин.) и чтобы начать, жми кнопку ниже👇"
);

db.set("bye_ua", "Дякую, вашу відповідь було записано, до зустрічі на грі");
db.set("bye_en", "Thank you for your response. See you soon");
db.set("bye_ru", "Благодарю, ответ записан, до встречи на игре");

let cantGoBackText = {
    ua: "Ви вже на першому питанні",
    en: "You are already on first question",
    ru: "Вы уже на первом вопросе",
};

var keyboards = {
    main_menu: {
        ua: {
            inline_keyboard: [
                [
                    {
                        text: "Розпочати",
                        callback_data: "start ua",
                    },
                ],
                [
                    {
                        text: "English",
                        callback_data: "switch en",
                    },
                ],
                [
                    {
                        text: "Русский",
                        callback_data: "switch ru",
                    },
                ],
            ],
        },
        en: {
            inline_keyboard: [
                [
                    {
                        text: "Start",
                        callback_data: "start en",
                    },
                ],
                [
                    {
                        text: "Українська",
                        callback_data: "switch ua",
                    },
                ],
                [
                    {
                        text: "Русский",
                        callback_data: "switch ru",
                    },
                ],
            ],
        },
        ru: {
            inline_keyboard: [
                [
                    {
                        text: "Начать",
                        callback_data: "start ru",
                    },
                ],
                [
                    {
                        text: "Українська",
                        callback_data: "switch ua",
                    },
                ],
                [
                    {
                        text: "English",
                        callback_data: "switch en",
                    },
                ],
            ],
        },
    },
    answer: {
        ua: {},
        en: {},
        ru: {},
    },
};

const languages = {
    en: "en",
    ua: "ua",
    ru: "ru",
};

let questions = {
    ua: require("./test/ua.json"),
    en: require("./test/en.json"),
    ru: require("./test/ru.json"),
};
let questionNumberText = {
    en: "Question",
    ru: "Вопрос",
    ua: "Питання",
};

bot.setMyCommands([{ command: "/start", description: "Запустить тест" }]);

bot.onText(/\/start/, async (msg) => {
    try {
        console.log(msg);
        const chatId = msg.chat.id;
        db.set(chatId, {
            language: languages[msg.from.language_code] || "en",
            progress: 0,
            maxQuestions: 0,
            answers: new Map(),
            from: msg.from,
            chat: msg.chat,
        });

        bot.sendPhoto(chatId, `${__dirname}/img/wide.jpg`, {
            reply_markup: keyboards.main_menu[db.get(chatId).language],
            caption: db.get(`greeting_${db.get(chatId).language}`),
        });
    } catch (error) {
        logger.logError(error, msg);
    }
});

// Handle callback queries
bot.on("callback_query", async function onCallbackQuery(callbackQuery) {
    try {
        const action = callbackQuery.data;
        const msg = callbackQuery.message;
        const action_detail = action.split(" ");
        let user;
        let userProgress;
        let maxUserQuestions;
        let tempQuest;
        switch (action_detail[0]) {
            case "switch":
                bot.editMessageCaption(db.get(`greeting_${action_detail[1]}`), {
                    chat_id: msg.chat.id,
                    message_id: msg.message_id,
                    reply_markup: keyboards.main_menu[`${action_detail[1]}`],
                });
                break;
            case "start":
                bot.deleteMessage(msg.chat.id, msg.message_id);
                user = db.get(msg.chat.id);
                user.language = action_detail[1] || en;
                db.get(msg.chat.id).maxQuestions =
                    questions[`${user.language}`].length;
                userProgress = user.progress;
                maxUserQuestions = user.maxQuestions;
                tempQuest = questions[`${user.language}`][userProgress];
                user.answers.set(userProgress, {
                    id: tempQuest.id,
                });
                bot.sendMessage(
                    msg.chat.id,
                    `${questionNumberText[user.language]} ${
                        userProgress + 1
                    }/${maxUserQuestions} \n${tempQuest.text}`,
                    {
                        reply_markup: {
                            inline_keyboard: convertToArrays(
                                tempQuest.options,
                                userProgress
                            ),
                        },
                    }
                );
                break;
            case "answer":
                console.log(action);
                user = db.get(msg.chat.id);
                user.answers.set(+action_detail[1], {
                    ...db.get(msg.chat.id).answers.get(+action_detail[1]),
                    value: +action_detail[2],
                });
                userProgress = ++db.get(msg.chat.id).progress;
                maxUserQuestions = db.get(msg.chat.id).maxQuestions;
                if (userProgress == maxUserQuestions) {
                    bot.deleteMessage(msg.chat.id, msg.message_id);
                    let userData = await sendAnswers([
                        ...user.answers.values(),
                    ]);
                    bot.sendMessage(
                        msg.chat.id,
                        db.get(`bye_${user.language}`)
                    );
                    bot.sendMessage(
                        process.env.STATS_RECIEVER_ID,
                        JSON.stringify(
                            {
                                "Имя пользователя": `${user.from.first_name} ${
                                    user.from.last_name || ""
                                }`,
                                Никнейм: `${user.from.username || "Нет"}`,
                                ...userData,
                            },
                            null,
                            2
                        )
                    );
                } else {
                    tempQuest = questions[`${user.language}`][userProgress];
                    user.answers.set(userProgress, {
                        id: tempQuest.id,
                    });
                    bot.editMessageText(
                        `${questionNumberText[user.language]} ${
                            userProgress + 1
                        }/${maxUserQuestions} \n${tempQuest.text}`,
                        {
                            chat_id: msg.chat.id,
                            message_id: msg.message_id,
                            reply_markup: {
                                inline_keyboard: convertToArrays(
                                    tempQuest.options,
                                    userProgress
                                ),
                            },
                        }
                    );
                }
                break;
            case "back":
                user = db.get(msg.chat.id);
                userProgress = --user.progress;
                if (userProgress < 0) {
                    userProgress = 0;
                    return bot.sendMessage(
                        msg.chat.id,
                        cantGoBackText[user.language]
                    );
                } else {
                    maxUserQuestions = db.get(msg.chat.id).maxQuestions;
                    tempQuest = questions.en[userProgress];
                    bot.editMessageText(
                        `Question ${userProgress + 1}/${maxUserQuestions} \n${
                            tempQuest.text
                        }`,
                        {
                            chat_id: msg.chat.id,
                            message_id: msg.message_id,
                            reply_markup: {
                                inline_keyboard: convertToArrays(
                                    tempQuest.options,
                                    userProgress
                                ),
                            },
                        }
                    );
                }
                break;
        }
    } catch (error) {
        logger.logError(error);
    }
});

bot.on("polling_error", (error) => {
    if (Math.floor(process.uptime()) <= 60) {
        process.exit(0);
    }
});
