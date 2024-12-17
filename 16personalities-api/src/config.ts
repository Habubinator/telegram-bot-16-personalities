export const BASE_URL = "https://www.16personalities.com";

const routeConfig = {
    "api.user": "/api/user",
    "api.session": "/api/session",
    "api.routes": "/api/routes",
    "api.routes.localized": "/api/routes/localized",
    "api.nav": "/api/nav",
    "api.translations": "/api/translations/{locale}",
    "api.auth.sign-up.manual": "/api/auth/sign-up",
    "api.auth.login": "/api/auth/login",
    "api.auth.sign-up.quiz": "/api/auth/users/profile/create",
    "api.auth.forgot-password": "/api/auth/forgot-password",
    "api.auth.reset-password": "/api/auth/reset-password/{code}",
    "api.auth.send-verification-code": "/api/auth/send-verification-code",
    "api.auth.check-verification-code": "/api/auth/check-verification-code",
    "api.auth.send-results": "/api/send-results",
    "api.community.check-notification-status":
        "/api/community/check-notification-status",
    "api.community.request-notification": "/api/community/request-notification",
    "api.friends.pending": "/api/community/friends/pending",
    "api.friends.active": "/api/community/friends/active",
    "api.friends.send-request": "/api/community/friends/send",
    "api.friends.send-email": "/api/community/friends/send-email",
    "api.friends.accept": "/api/community/friends/accept",
    "api.friends.decline": "/api/community/friends/decline",
    "api.friends.cancel": "/api/community/friends/cancel",
    "api.friends.remove": "/api/community/friends/remove",
    "api.forum.accept-terms": "/api/community/discussions/accept-terms",
    "api.forum.auth-info": "/api/community/discussions/user",
    "api.forum.categories": "/api/community/discussions/categories",
    "api.forum.category": "/api/community/discussions/category",
    "api.forum.starred-posts": "/api/community/discussions/starred-posts",
    "api.forum.hall-of-fame": "/api/community/discussions/hall-of-fame",
    "api.forum.report": "/api/community/discussions/report",
    "api.forum.user-info": "/api/community/discussions/user-info",
    "api.forum.acronym-info": "/api/community/discussions/acronym-info",
    "api.forum.stats": "/api/community/discussions/stats",
    "api.forum.unread-status": "/api/community/discussions/unread-status",
    "api.forum.tags": "/api/community/discussions/tags",
    "api.forum.history.favorite-posters":
        "/api/community/discussions/history/favorite-posters",
    "api.forum.history.posts":
        "/api/community/discussions/history/posts/{profile?}",
    "api.forum.threads.general": "/api/community/discussions/threads/general",
    "api.forum.threads.header": "/api/community/discussions/threads/header",
    "api.forum.threads.related": "/api/community/discussions/threads/related",
    "api.forum.threads.create": "/api/community/discussions/threads/create",
    "api.forum.threads.delete": "/api/community/discussions/threads/delete",
    "api.forum.threads.toggle-bookmark":
        "/api/community/discussions/threads/toggle-bookmark",
    "api.forum.threads.edit": "/api/community/discussions/threads/edit",
    "api.forum.threads.update": "/api/community/discussions/threads/update",
    "api.forum.threads.update-note":
        "/api/community/discussions/threads/update-note",
    "api.forum.threads.bookmarked":
        "/api/community/discussions/threads/bookmarked",
    "api.forum.posts.retrieve": "/api/community/discussions/posts/retrieve",
    "api.forum.posts.retrieve-id":
        "/api/community/discussions/posts/retrieve-id",
    "api.forum.posts.create": "/api/community/discussions/posts/create",
    "api.forum.posts.update": "/api/community/discussions/posts/update",
    "api.forum.posts.delete": "/api/community/discussions/posts/delete",
    "api.forum.posts.bookmarked": "/api/community/discussions/posts/bookmarked",
    "api.forum.posts.toggle-bookmark":
        "/api/community/discussions/posts/toggle-bookmark",
    "api.forum.subcomments.retrieve":
        "/api/community/discussions/subcomments/retrieve",
    "api.forum.subcomments.post": "/api/community/discussions/subcomments/post",
    "api.forum.subcomments.delete":
        "/api/community/discussions/subcomments/delete",
    "api.forum.subcomments.watch-parent":
        "/api/community/discussions/subcomments/watch-parent",
    "api.forum.preferences.load": "/api/community/discussions/preferences/load",
    "api.forum.preferences.acronyms":
        "/api/community/discussions/preferences/acronyms",
    "api.forum.preferences.fancy-excerpts":
        "/api/community/discussions/preferences/fancy-excerpts",
    "api.forum.preferences.history":
        "/api/community/discussions/preferences/history",
    "api.forum.preferences.darkness":
        "/api/community/discussions/preferences/darkness",
    "api.forum.preferences.darkness-colors":
        "/api/community/discussions/preferences/darkness-colors",
    "api.forum.preferences.category-order":
        "/api/community/discussions/preferences/category-order",
    "api.type-descriptions.ratings.check-status":
        "/api/type-descriptions/ratings/check-status",
    "api.type-descriptions.ratings.save": "/api/type-descriptions/ratings/save",
    "api.type-descriptions.ratings.save-comment":
        "/api/type-descriptions/ratings/comment",
    "api.articles.vote-comment": "/api/articles/{article}/vote-comment",
    "api.articles.vote": "/api/articles/{article}/vote",
    "api.articles.search": "/api/articles/search",
    "api.comments.publish": "/api/comments/publish",
    "api.profile.daily-insight": "/api/profile/daily-insight",
    "api.charts.show": "/api/charts/{chart}",
    "api.reviews.index": "/api/reviews/search",
    "api.reviews.vote": "/api/reviews/{id}/vote",
    "api.reviews.type": "/api/reviews/{id}/type",
    "api.insights.surveys.latest": "/api/insights/surveys/latest",
    "api.insights.surveys.active": "/api/insights/surveys/active",
    "api.insights.surveys.get-questions": "/api/insights/surveys/get-questions",
    "api.insights.surveys.save-responses":
        "/api/insights/surveys/save-responses",
    "api.insights.feedback": "/api/insights/feedback",
    "api.country-profiles.fetch-data": "/api/country-profiles/fetch-data",
    "api.product.fetch": "/api/fetch-product",
    "api.orders.stripe-api-key": "/api/orders/stripe-api-key",
    "api.orders.update-card": "/api/orders/update-card",
    "api.orders.tax-country": "/api/orders/confirm-tax-country",
    "api.orders.stripe.create-session": "/api/orders/stripe/create-session",
    "api.orders.stripe.create-quick-session":
        "/api/orders/stripe/create-quick-session",
    "api.orders.stripe.intent.fetch": "/api/orders/stripe/fetch-intent",
    "api.orders.stripe.intent.process": "/api/orders/stripe/process-intent",
    "api.orders.stripe.subscribe": "/api/orders/stripe/subscribe",
    "api.orders.paypal.token": "/api/orders/paypal/token",
    "api.orders.discount-newsletter": "/api/orders/discount-newsletter",
    "api.orders.discount-check": "/api/orders/discount-check",
    "api.orders.retry": "/api/orders/fulfill-order",
    "api.orders.gifts.load": "/api/orders/load",
    "api.orders.gifts.prices": "/api/orders/prices",
    "api.orders.gifts.send": "/api/orders/send",
    "api.orders.gifts.check-code": "/api/orders/check-code",
    "api.orders.gifts.check-email": "/api/orders/check-email",
    "api.orders.gifts.use-code": "/api/orders/use-code",
    "api.orders.exchange-data": "/api/orders/exchange-data",
    "api.orders.exchange-rate": "/api/orders/exchange-rate",
    "api.orders.currencies.alipay": "/api/orders/currencies/alipay",
    "api.orders.currencies.change": "/api/orders/currencies/change",
    "api.orders.testimonials": "/api/orders/testimonials/{type?}",
    "api.support.send-message": "/api/support/send",
    "api.orders.refund-survey": "/api/refund-survey",
    "api.premium-profile.sidebar-items": "/api/premium-profile/sidebar-items",
    "api.premium-profile.content": "/api/premium-profile/content",
    "api.premium-profile.comments.exercise":
        "/api/premium-profile/comments/exercise",
    "api.premium-profile.comments.section":
        "/api/premium-profile/comments/section",
    "api.premium-profile.comments.test": "/api/premium-profile/comments/test",
    "api.premium-profile.comments.publish":
        "/api/premium-profile/comments/publish",
    "api.premium-profile.comments.delete":
        "/api/premium-profile/comments/delete",
    "api.premium-profile.notes.save": "/api/premium-profile/notes/save",
    "api.premium-profile.exercises.notes.get":
        "/api/premium-profile/exercises/{exercise}/get-notes",
    "api.premium-profile.exercises.notes.save":
        "/api/premium-profile/exercises/{exercise}/save-notes",
    "api.premium-profile.feedback.send": "/api/premium-profile/feedback/send",
    "api.newsletters.guest-subscribe": "/api/newsletters/guest-subscribe",
    "api.profile.show": "/api/profiles/{profile}",
    "api.profile.compare": "/api/profiles/{profile}/compare/{comparison?}",
    "api.profile.interaction": "/api/profiles/{profile}/interaction",
    "api.profile.highlights": "/api/profile/highlights/{type?}",
    "api.profile.quick-links": "/api/profile/quick-links/{type?}",
    "api.profile.avatar.get-info": "/api/profile/avatar/get-info",
    "api.profile.avatar.save": "/api/profile/avatar/save",
    "api.profile.bio.load": "/api/profile/bio/load",
    "api.profile.bio.save": "/api/profile/bio/save",
    "api.profile.order-history.load": "/api/profile/order-history/load",
    "api.profile.order-history.save-active-type":
        "/api/profile/order-history/save-active-type",
    "api.profile.traits": "/api/profile/traits",
    "api.profile.result-history": "/api/profile/result-history",
    "api.profile.result-history.delete": "/api/profile/result-history/delete",
    "api.profile.result-history.revert": "/api/profile/result-history/revert",
    "api.profile.update-type": "/api/profile/update-type",
    "api.profile.preferences.load": "/api/profile/preferences/load",
    "api.profile.preferences.resend-results": "/api/profile/preferences/resend",
    "api.profile.preferences.delete-account": "/api/profile/preferences/delete",
    "api.profile.preferences.themes": "/api/profile/preferences/themes",
    "api.profile.preferences.change-password":
        "/api/profile/preferences/change-password",
    "api.profile.preferences.set-visibility":
        "/api/profile/preferences/set-visibility",
    "api.profile.preferences.set-accessibility":
        "/api/profile/preferences/set-accessibility",
    "api.profile.preferences.set-name": "/api/profile/preferences/set-name",
    "api.profile.preferences.set-email": "/api/profile/preferences/set-email",
    "api.profile.preferences.set-gender": "/api/profile/preferences/set-gender",
    "api.profile.preferences.set-notifications":
        "/api/profile/preferences/set-notifications",
    "api.profile.preferences.get": "/api/profile/preferences/get-preference",
    "api.profile.preferences.set": "/api/profile/preferences/set-preference",
    "api.profile.mastery.index": "/api/profile/mastery",
    "api.profile.mastery.claim": "/api/profile/mastery/claim",
    "api.newsletters.subscribe": "/api/newsletters/subscribe",
    "api.messages.index": "/api/messages",
    "api.messages.view": "/api/messages/view",
    "api.messages.settings.load": "/api/messages/settings",
    "api.messages.settings.set": "/api/messages/settings",
    "api.messages.load": "/api/messages/{conversation}",
    "api.messages.load-more": "/api/messages/{conversation}/load-more",
    "api.messages.send-message": "/api/messages/{conversation}/send-message",
    "api.messages.delete-message":
        "/api/messages/{conversation}/delete-message",
    "api.messages.mark-as-read": "/api/messages/{conversation}/mark-as-read",
    "api.messages.block": "/api/messages/{conversation}/block",
    "api.messages.unblock": "/api/messages/{conversation}/unblock",
    "api.messages.report": "/api/messages/{conversation}/report",
    "api.messages.getConversationId": "/api/messages/get-conversation-id",
    "api.messages.initiate": "/api/messages/initiate",
    "api.notifications.fetch": "/api/fetch-notifications",
    "api.updates.fetch": "/api/fetch-updates",
    "api.social-stats.add": "/api/social-stats/add",
    "api.upvote": "/api/upvote",
    "api.tools.category": "/api/tools/category",
    "api.tools.retrieve": "/api/tools/retrieve",
    "api.tools.completed": "/api/tools/completed/{slug}",
    "api.tools.preview": "/api/tools/preview/{slug}",
    "api.tools.access": "/api/tools/check-access/{slug}",
    "api.tools.categories": "/api/tools/categories",
    "api.tools.related": "/api/tools/related/{slug}",
    "api.tools.standard.show": "/api/tools/standard-tests/{slug}",
    "api.tools.standard.show-results":
        "/api/tools/standard-tests/{slug}/results",
    "api.tools.ratings": "/api/tools/ratings/{slug}/rate",
    "api.tools.ratings.comment": "/api/tools/ratings/{slug}/rate-comment",
    "api.tools.ai.get": "/api/tools/ai/{slug}",
    "api.tools.ai.generate": "/api/tools/ai/{slug}/generate",
    "api.tools.stress-relief.index": "/api/tools/stress-relief",
    "api.tools.stress-relief.results": "/api/tools/stress-relief/results",
    "api.tools.career-values.index": "/api/tools/career-values",
    "api.": "/api/tools/career-values/results",
    "api.tools.career-values.results": "/api/tools/career-values/results",
    "api.tools.partner-game": "/api/tools/partner-game",
    "api.tools.partner-game.reload": "/api/tools/partner-game/reload",
    "api.tools.partner-game.new": "/api/tools/partner-game/new",
    "api.tools.partner-game.next": "/api/tools/partner-game/next",
    "api.tools.intertype.index": "/api/tools/intertype",
    "api.tools.intertype.test": "/api/tools/intertype/test",
    "api.tools.intertype.results.save": "/api/tools/intertype/results",
    "api.tools.intertype.results.get": "/api/tools/intertype/results",
    "api.tools.single-styles-explorer.index":
        "/api/tools/single-styles-explorer",
    "api.tools.single-styles-explorer.results":
        "/api/tools/single-styles-explorer/results",
    "api.tools.couples.load-partner": "/api/tools/couples/load-partner",
    "api.tools.couples.load-insights": "/api/tools/couples/load-insights",
    "api.tools.couples.save": "/api/tools/couples/save",
    "api.tools.couples.feedback": "/api/tools/couples/feedback",
    "api.tools.type-guessers.show": "/api/tools/type-guessers/{type}",
    "api.tools.type-guessers.results":
        "/api/tools/type-guessers/{type}/results",
    "api.tools.trait-scholar.index": "/api/tools/trait-scholar",
    "api.tools.trait-scholar.show-assessment":
        "/api/tools/trait-scholar/assessment",
    "api.tools.trait-scholar.submit": "/api/tools/trait-scholar/results",
    "api.tools.trait-scholar.results": "/api/tools/trait-scholar/results",
    "api.tools.trait-scholar.mini-feedback":
        "/api/tools/trait-scholar/mini-feedback",
    "api.tools.trait-scholar.full-feedback":
        "/api/tools/trait-scholar/full-feedback",
    "api.tools.standard.results": "/api/tools/standard-tests/{slug}/results",
    "api.tools.ai-terms.check": "/api/tools/ai-terms",
    "api.tools.ai-terms.accept": "/api/tools/ai-terms",
    "api.tools.npqe.load": "/api/tools/npqe",
    "api.tools.npqe.save": "/api/tools/npqe/save",
    "api.tools.teams.sales": "/api/tools/teams/sales",
    "api.tools.teams.invited.show": "/api/tools/teams/invite/{key}",
    "api.tools.teams.invited.quiz": "/api/tools/teams/quiz",
    "api.tools.teams.invited.register": "/api/tools/teams/register",
    "api.tools.teams.demo-reports": "/api/tools/teams/demo-reports",
    "api.tools.teams.billing": "/api/tools/teams/billing",
    "api.tools.teams.reports.type-interactions":
        "/api/tools/teams/reports/type-interactions/between",
    "api.tools.teams.dynamics-quiz": "/api/tools/teams/dynamics-quiz",
    "api.tools.teams.store": "/api/tools/teams",
    "api.tools.teams.invited.cancel":
        "/api/tools/teams/{team}/invites/{key}/cancel",
    "api.tools.teams.invited.join": "/api/tools/teams/invite/{key}",
    "api.tools.teams.invited.resend":
        "/api/tools/teams/{team}/invites/{key}/resend",
    "api.tools.teams.index": "/api/tools/teams",
    "api.tools.teams.billing.permissions": "/api/tools/teams/permissions",
    "api.tools.teams.billing.history": "/api/tools/teams/billing/history",
    "api.tools.teams.billing.autorenew": "/api/tools/teams/billing/autorenew",
    "api.tools.teams.billing.cancel": "/api/tools/teams/billing/cancel",
    "api.tools.teams.billing.details": "/api/tools/teams/billing/details",
    "api.tools.teams.billing.details.update":
        "/api/tools/teams/billing/details",
    "api.tools.teams.billing.upgrade": "/api/tools/teams/billing/upgrade",
    "api.tools.teams.billing.create-stripe-session":
        "/api/tools/teams/billing/create-session",
    "api.tools.teams.sample-report": "/api/tools/teams/sample-report",
    "api.tools.teams.show": "/api/tools/teams/{team}",
    "api.tools.teams.seats": "/api/tools/teams/{team}/seats",
    "api.tools.teams.update": "/api/tools/teams/{team}",
    "api.tools.teams.observer-status":
        "/api/tools/teams/{team}/observer-status",
    "api.tools.teams.leave": "/api/tools/teams/{team}/leave",
    "api.tools.teams.destroy": "/api/tools/teams/{team}",
    "api.tools.teams.members.index": "/api/tools/teams/{team}/members",
    "api.tools.teams.members.show": "/api/tools/teams/{team}/members/{member}",
    "api.tools.teams.members.compare":
        "/api/tools/teams/{team}/members/{member}/compare/{comparison?}",
    "api.tools.teams.members.invite": "/api/tools/teams/{team}/members",
    "api.tools.teams.members.remove":
        "/api/tools/teams/{team}/members/{user}/remove",
    "api.tools.teams.assessments.index": "/api/tools/teams/{team}/assessments",
    "api.tools.teams.assessments.take":
        "/api/tools/teams/{team}/assessments/{assessment}",
    "api.tools.teams.assessments.save":
        "/api/tools/teams/{team}/assessments/{assessment}",
    "api.tools.teams.reports.show":
        "/api/tools/teams/{team}/reports/{assessment}",
    "api.tools.teams.workshops": "/api/tools/teams/{team}/workshops",
    "api.translations.index": "/api/translations",
    "api.translations.show": "/api/translations/{languageCode}",
    "api.translations.groups.show":
        "/api/translations/{languageCode}/{groupId}",
    "api.translations.suggestions.store": "/api/translations/suggestions/save",
    "api.translations.suggestions.rate": "/api/translations/suggestions/rate",
    "api.translations.suggestions.update":
        "/api/translations/suggestions/{suggestionId}",
    "api.translations.comments.store": "/api/translations/comments/save",
    "auth.login": "/auth/login",
    "auth.logout": "/auth/logout",
    "auth.sign-up": "/auth/sign-up",
    "auth.delete-results": "/auth/delete-results",
    index: "//",
    "free-personality-test": "/free-personality-test/{inviteCode?}",
    "type-descriptions": "/personality-types",
    "type-description.intro": "/{type}-personality",
    "articles.roles": "/articles/roles-{role}s",
    "articles.strategy": "/articles/strategies-{strategy}",
    "articles.index": "/articles",
    "articles.show": "/articles/{article}",
    "contact-us": "/contact-us",
    terms: "/terms/{category?}",
    "terms.privacy": "/terms/privacy",
    "premium.pro-suite": "/premium/pro-suite",
    "profile.index": "/profile",
    "profile.friends": "/profile/friends",
    "profile.import-theme": "/profile/import-theme/{theme}",
    "profile.community.discussions.index": "/profile/community/discussions",
    "profile.community.discussions.guidelines":
        "/profile/community/discussions/guidelines",
    "profile.community.discussions.search":
        "/profile/community/discussions/search",
    "profile.community.discussions.threads.new":
        "/profile/community/discussions/threads/new/{categorySlug}",
    "profile.community.discussions.posters.history":
        "/profile/community/discussions/posters/{url}/history",
    "profile.community.discussions.threads.user":
        "/profile/community/discussions/your-threads",
    "profile.community.discussions.posts.user":
        "/profile/community/discussions/your-posts",
    "profile.community.discussions.stats":
        "/profile/community/discussions/stats",
    "profile.community.discussions.control-panel":
        "/profile/community/discussions/control-panel",
    "profile.community.discussions.favorite-posters":
        "/profile/community/discussions/favorite-posters",
    "profile.community.discussions.show-category":
        "/profile/community/discussions/{categorySlug}",
    "profile.mastery.index": "/profile/mastery",
    "profile.messages.index": "/profile/messages",
    "profile.result-history.view": "/profile/result-history",
    "profile.preferences.index": "/profile/preferences",
    "profile.preferences.avatar": "/profile/preferences/avatar",
    "profile.preferences.bio": "/profile/preferences/bio",
    "profile.notifications.all": "/profile/notifications",
    "profile.updates.all": "/profile/updates",
    "profile.gifts.index": "/profile/gifts",
    "profile.gifts.order": "/profile/gifts/order",
    "profile.gifts.export": "/profile/gifts/export",
    "profile.order-history": "/profile/order-history",
    "users.profile.compare": "/profiles/{profile}/compare",
    "users.profile.view": "/profiles/{profile}",
    "generated::8c9ZsLoV5EkfD96y": "/test-results",
    "test-results": "/test-results",
    "premium-profile.index": "/academy/{personality?}",
    "premium-profile.introduction": "/premium-profile/introduction",
    "tools.teams.index": "/teams",
    "tools.teams.sample-report": "/teams/sample-reports/{report}",
    "tools.teams.competitors": "/teams/competitors/{competitor?}",
    "tools.teams.team-dynamics-quiz": "/teams/team-dynamics-quiz",
    "tools.teams.billing": "/teams/billing",
    "tools.teams.billing.update": "/teams/billing/update",
    "tools.teams.faq": "/teams/faq",
    "tools.teams.show": "/teams/{team}",
    "tools.teams.settings": "/teams/{team}/settings",
    "tools.teams.members.index": "/teams/{team}/members",
    "tools.teams.members.show": "/teams/{team}/members/{member}",
    "tools.teams.members.compare":
        "/teams/{team}/members/{member}/compare/{comparison?}",
    "tools.teams.assessments.show": "/teams/{team}/assessments/{assessment}",
    "tools.teams.reports.show": "/teams/{team}/reports/{assessment}",
    "tools.teams.workshops.show": "/teams/{team}/workshops/{workshop}",
    "tools.index": "/specialized-tests",
    "tools.preview": "/specialized-tests/preview/{slug}",
    "tools.results": "/specialized-tests/results/{slug}",
    "tools.type-guessers.show": "/specialized-tests/type-guessers/{type}",
    "tools.category": "/specialized-tests/{slug}",
    "tools.show": "/specialized-tests/{slug}/{mode?}",
    "insights.surveys.list": "/insights/surveys",
    "country-profiles.index": "/country-profiles",
    "country-profiles.region": "/country-profiles/global/{region}",
    "country-profiles.country": "/country-profiles/{slug}",
    "orders.payments.next_step_return": "/orders/return/card",
    "orders.teams.checkout": "/orders/teams/checkout/{period?}/{quantity?}",
    "orders.ebook-with-toolkits.checkout":
        "/orders/ebook-with-toolkits/checkout/{type?}",
    "orders.campaigner-guide-to-dating.checkout":
        "/orders/campaigner-guide-to-dating/checkout",
    "orders.gifts.redeem-code": "/orders/gifts/redeem-code",
    "orders.testimonials.index": "/orders/testimonials/{type?}",
    languages: "/languages",
    "translations.index": "/translations",
    "ar/personality-test": "/ar/اختبار-الشخصية",
    "az/personality-test": "/az/xarakterlə-bağlı-test",
    "bg/personality-test": "/bg/личностен-тест",
    "bn/personality-test": "/bn/ব্যক্তিত্বের-পরীক্ষা",
    "ch/personality-test": "/ch/人格测试",
    "cs/personality-test": "/cs/osobnostni-test",
    "da/personality-test": "/da/gratis-personlighedstest",
    "de/personality-test": "/de/kostenloser-personlichkeitstest",
    "ee/personality-test": "/ee/isiksuse-test",
    "es/personality-test": "/es/test-de-personalidad",
    "el/personality-test": "/el/δωρεάν-τεστ-προσωπικότητας",
    "fa/personality-test": "/fa/آزمون-شخصیت",
    "fi/personality-test": "/fi/persoonallisuustesti",
    "fr/personality-test": "/fr/test-de-personnalite",
    "he/personality-test": "/he/מבחן-אישיות",
    "hi/personality-test": "/hi/व्यक्तित्व-परीक्षण",
    "hr/personality-test": "/hr/test-osobnosti",
    "hu/personality-test": "/hu/ingyenes-személyiségteszt",
    "hy/personality-test": "/hy/անհատականության-թեստ",
    "id/personality-test": "/id/tes-kepribadian",
    "is/personality-test": "/is/persónuleikapróf",
    "it/personality-test": "/it/test-della-personalita-gratis",
    "ja/personality-test": "/ja/性格診断テスト",
    "ka/personality-test": "/ka/პიროვნების-ტესტი",
    "kk/personality-test": "/kk/тұлға-тесті",
    "ko/personality-test": "/ko/무료-성격-유형-검사",
    "lv/personality-test": "/lv/personības-tests",
    "mn/personality-test": "/mn/зан-чанарыг-тодорхойлох-тест",
    "ms/personality-test": "/ms/ujian-personaliti",
    "nl/personality-test": "/nl/persoonlijkheidstest",
    "no/personality-test": "/no/gratis-personlighetstest",
    "pl/personality-test": "/pl/darmowy-test-osobowosci",
    "pt/personality-test": "/pt/teste-de-personalidade",
    "br/personality-test": "/br/teste-de-personalidade",
    "ro/personality-test": "/ro/test-de-personalitate-gratuit",
    "ru/personality-test": "/ru/test-lichnosti",
    "sk/personality-test": "/sk/bezplatny-test-osobnosti",
    "sl/personality-test": "/sl/brezplacen-test-osebnosti",
    "sr/personality-test": "/sr/besplatan-test-licnosti",
    "sv/personality-test": "/sv/gratis-personlighetstest",
    "sw/personality-test": "/sw/jaribio-la-kibinafsi",
    "th/personality-test": "/th/แบบทดสอบบุคคลิกภาพ",
    "tr/personality-test": "/tr/ücretsiz-kişilik-testi",
    "tw/personality-test": "/tw/性格測試",
    "uk/personality-test": "/uk/bezkoshtovnyy-test-na-vyznachennya-osobystosti",
    "uz/personality-test": "/uz/bepul-shaxsiyat-testi",
    "vi/personality-test": "/vi/bài-kiểm-tra-tính-cách",
    "webhooks.paypal.ipn": "/orders/paypal/ipn",
};

export const routes: typeof routeConfig = routeConfig;

export const PORT = process.env.PORT || 3000;
