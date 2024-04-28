const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
require("dotenv").config();

const db = new Map();
const gSController = require("./googleSheetsController");
const logger = require("./logger");

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
    ua: null,
    en: null,
    ru: null,
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
                questions.en = (
                    await axios.get(
                        "https://www.16personalities-api.com/api/personality/questions"
                    )
                ).data;
                db.get(msg.chat.id).maxQuestions = questions.en.length;
                bot.deleteMessage(msg.chat.id, msg.message_id);
                switch (action_detail[1]) {
                    case "en":
                        user = db.get(msg.chat.id);
                        userProgress = user.progress;
                        maxUserQuestions = user.maxQuestions;
                        tempQuest = questions.en[userProgress];
                        user.answers.set(userProgress, {
                            id: tempQuest.id,
                        });
                        bot.sendMessage(
                            msg.chat.id,
                            `Question ${
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
                    case "ru":
                        bot.sendMessage(
                            msg.chat.id,
                            "Функционал пока-то не готов, попробуйте English версию"
                        );
                        break;
                    case "ua":
                        bot.sendMessage(
                            msg.chat.id,
                            "Функціонал ще не готовий, спробуйте English версію"
                        );
                        break;
                }
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
                    console.log("Тест завершено");
                } else {
                    tempQuest = questions.en[userProgress];
                    user.answers.set(userProgress, {
                        id: tempQuest.id,
                    });
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
            case "back":
                user = db.get(msg.chat.id);
                userProgress = --user.progress;
                if (userProgress < 0) {
                    // TODO - перевести системные уведы
                    return bot.sendMessage(
                        msg.chat.id,
                        "You are already on first question"
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
