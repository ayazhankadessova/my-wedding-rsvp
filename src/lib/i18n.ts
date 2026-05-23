export type Language = "kk" | "ru" | "en";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "kk", label: "ҚАЗ" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export const DEFAULT_LANGUAGE: Language = "kk";

type Dict = Record<string, string>;

export const translations: Record<Language, Dict> = {
  kk: {
    // Navigation
    "nav.schedule": "Бағдарлама",
    "nav.stay": "Тұру",
    "nav.registry": "Сыйлықтар",
    "nav.rsvp": "Растау",
    "nav.faq": "Сұрақтар",

    // Hero
    "hero.youreInvited": "Сіз шақырыласыз",
    "hero.title": "Аяжанның\nқыз ұзату тойы",
    "hero.date": "7 тамыз, 2026",
    "hero.location": "Өскемен, Қазақстан",
    "hero.cta": "Толығырақ",

    // Schedule
    "schedule.title": "Кеш бағдарламасы",
    "schedule.subtitle": "Күннің реті",
    "schedule.event.arrival": "Қарсы алу, суретке түсу",
    "schedule.event.ceremony": "Салтанатты бөлім",
    "schedule.event.part2": "Екінші бөлім",
    "schedule.event.end": "Аяқталуы",

    // Accommodation
    "accommodation.title": "Тұрғын үй",
    "accommodation.intro": "Қонақтарымыз үшін арнайы тұрғын үй ұйымдастыруды жоспарлап жатырмыз!",
    "accommodation.female.title": "Қыз қонақтарға",
    "accommodation.female.body": "Қыз достарымыздың бірге тұруы үшін бір орын жалдауды ойластырудамыз. Ол шағын бас қосу секілді болады!",
    "accommodation.additional.title": "Қосымша пәтерлер",
    "accommodation.additional.body": "Сондай-ақ басқа қонақтарға бір-екі пәтер дайындауымыз мүмкін (бос орындарға қарай). Толық мәлімет кейінірек хабарланады.",
    "accommodation.note": "Күтіңіз — барлық мәліметпен жақын арада бөлісеміз!",

    // Gift Registry
    "registry.title": "Сыйлықтар",
    "registry.main": "Сіздің қатысуыңыздың өзі — біз үшін ең үлкен сыйлық.",
    "registry.detail": "Дегенмен, бізді сыйлықпен қуантқыңыз келсе, болашақ үйімізге арнап шағын тізім дайындадық. Немесе жаңа отбасылық өміріміздің бастамасына үлес қосу да біз үшін өте қымбат болар еді.",
    "registry.cta": "Тізімді қарау",
    "registry.note": "Сілтеме жақын арада қосылады",
    "registry.alert": "Сілтеме осы жерге қосылады!",

    // RSVP
    "rsvp.title": "Растау",
    "rsvp.subtitle": "Қатысуыңыз біз үшін үлкен мәртебе. Жоспарыңыз өзгерсе, хабарлап қойыңыз.",
    "rsvp.thanks.title": "Рахмет!",
    "rsvp.thanks.body": "Жауабыңыз қабылданды. Сізді көруге асығамыз!",
    "rsvp.name": "Атыңыз",
    "rsvp.name.placeholder": "Толық аты-жөні",
    "rsvp.phone": "Телефон",
    "rsvp.phone.placeholder": "+7 700 000 0000",
    "rsvp.optional": "(міндетті емес)",
    "rsvp.attending": "Қатысасыз ба?",
    "rsvp.attending.yes": "Иә, қуана қатысамын",
    "rsvp.attending.no": "Өкінішке орай, бара алмаймын",
    "rsvp.guests": "Қонақтар саны",
    "rsvp.guest.one": "қонақ",
    "rsvp.guest.many": "қонақ",
    "rsvp.message": "Хабарлама",
    "rsvp.message.placeholder": "Тағамға қатысты тілектер, әнге тапсырыс немесе жылы сөз...",
    "rsvp.error.generic": "Бірдеңе дұрыс болмады. Қайталап көріңіз.",
    "rsvp.error.notConnected": "RSVP әлі қосылмаған. Бізге тікелей хабарласыңыз.",
    "rsvp.send": "Жіберу",
    "rsvp.sending": "Жіберілуде...",

    // FAQ
    "faq.title": "Сұрақтар мен жауаптар",
    "faq.where.q": "Той қайда өтеді?",
    "faq.where.a": "Остров Резиденциясы — ойын-сауық және демалыс орталығы. Қаныш Сәтбаев даңғылы, 173, Өскемен, 070014, Қазақстан.",
    "faq.time.q": "Қашан келу керек?",
    "faq.time.a": "Қонақтарды қарсы алу 17:00-де басталады — 17:00 не 17:30 шамасында келіп, аумақты аралап, суретке түсіп, қазақы әуенді тыңдай аласыз. Салтанатты бөлім 18:00-де басталады. Тойдың екінші бөлімі шамамен 21:00-де басталып, кеш 23:00-де аяқталады.",
    "faq.dress.q": "Не киіп келу керек?",
    "faq.dress.a": "Пастельді түстерді ұнатамыз — нәзік қызғылт, лаванда, жасыл-күміс немесе көк түстер. Бірақ ең бастысы — өзіңізді еркін әрі әдемі сезінетін киім.",
    "faq.viewMap": "Картадан қарау",

    // Footer
    "footer.title": "Сізді көруге асығамыз!",
    "footer.names": "Той иелері: Бауыржан & Гүльмира",
    "footer.withLove": "Сүйіспеншілікпен",

    // Maid of Honour
    "moh.greeting": "Қымбатты Гүлім",
    "moh.title.line1": "Менің бас бойжеткенім",
    "moh.title.line2": "боласың ба?",
    "moh.event": "Аяжанның қыз ұзату тойы — 7 тамыз, 2026",
    "moh.message1": "Түнгі ұзақ әңгімелер, тек екеуміз ғана түсінетін күлкі мен сөз қажет етпейтін үнсіз сәттер арқылы — сен әрқашан менің адамым болдың. Қашанда өзіңдей боп қасымда болғаныңа рахмет.",
    "moh.message2": "Бұл күнді сенсіз елестете де алмаймын.",
    "moh.travel.title": "Жолың — менің мойнымда",
    "moh.travel.body": "Астанадан Өскеменге және кері қарай ұшу билеттерің менен. Сүйікті көйлегіңді алып шық, қалғаны менің мойнымда.",
    "moh.hotel.title": "Демалатын орын",
    "moh.hotel.body": "Өскемендегі қонақ үйің тойдың бар уақытына дайындалған. Бұл — көп жылдық достығымыз үшін кішкене алғыс.",
    "moh.closing": "Өскемендегі кездескенше, жаным.",

    // 404
    "notfound.title": "404",
    "notfound.message": "Кешіріңіз! Бет табылмады",
    "notfound.home": "Басты бетке оралу",
  },

  ru: {
    // Navigation
    "nav.schedule": "Программа",
    "nav.stay": "Проживание",
    "nav.registry": "Подарки",
    "nav.rsvp": "Подтверждение",
    "nav.faq": "Вопросы",

    // Hero
    "hero.youreInvited": "Вы приглашены на",
    "hero.title": "Аяжанның\nқыз ұзату тойы",
    "hero.date": "7 августа 2026",
    "hero.location": "Усть-Каменогорск, Казахстан",
    "hero.cta": "Подробнее",

    // Schedule
    "schedule.title": "Программа вечера",
    "schedule.subtitle": "Расписание дня",
    "schedule.event.arrival": "Сбор гостей, фото",
    "schedule.event.ceremony": "Церемония",
    "schedule.event.part2": "Вторая часть",
    "schedule.event.end": "Окончание",

    // Accommodation
    "accommodation.title": "Проживание",
    "accommodation.intro": "Мы планируем организовать особое проживание для наших гостей!",
    "accommodation.female.title": "Для девушек",
    "accommodation.female.body": "Мы хотим арендовать место, где наши подруги смогут остановиться все вместе. Получится своя маленькая встреча!",
    "accommodation.additional.title": "Дополнительные квартиры",
    "accommodation.additional.body": "Также возможно будет одна-две квартиры для остальных гостей (в зависимости от наличия). Подробности сообщим, как только всё уточним.",
    "accommodation.note": "Оставайтесь на связи — скоро поделимся всеми деталями!",

    // Gift Registry
    "registry.title": "Подарки",
    "registry.main": "Ваше присутствие — это самый дорогой подарок для нас.",
    "registry.detail": "Если же вы хотите порадовать нас подарком, мы составили небольшой список того, что хотелось бы для нашего общего дома. А если предпочитаете поддержать начало нашей семейной жизни — любой вклад в наше будущее будет для нас очень ценен.",
    "registry.cta": "Открыть список",
    "registry.note": "Ссылка появится в ближайшее время",
    "registry.alert": "Ссылка на список будет добавлена здесь!",

    // RSVP
    "rsvp.title": "Подтверждение",
    "rsvp.subtitle": "Мы будем рады видеть вас. Пожалуйста, сообщите, если ваши планы изменятся.",
    "rsvp.thanks.title": "Спасибо!",
    "rsvp.thanks.body": "Ваш ответ получен. Не можем дождаться, когда отпразднуем вместе!",
    "rsvp.name": "Ваше имя",
    "rsvp.name.placeholder": "Имя и фамилия",
    "rsvp.phone": "Телефон",
    "rsvp.phone.placeholder": "+7 700 000 0000",
    "rsvp.optional": "(необязательно)",
    "rsvp.attending": "Сможете прийти?",
    "rsvp.attending.yes": "С радостью приду",
    "rsvp.attending.no": "К сожалению, не смогу",
    "rsvp.guests": "Количество гостей",
    "rsvp.guest.one": "гость",
    "rsvp.guest.many": "гостей",
    "rsvp.message": "Сообщение",
    "rsvp.message.placeholder": "Пожелания по меню, заказ песни или тёплое слово...",
    "rsvp.error.generic": "Что-то пошло не так. Попробуйте ещё раз.",
    "rsvp.error.notConnected": "RSVP пока не подключён. Пожалуйста, свяжитесь с нами напрямую.",
    "rsvp.send": "Отправить",
    "rsvp.sending": "Отправка...",

    // FAQ
    "faq.title": "Вопросы и ответы",
    "faq.where.q": "Где будет проходить свадьба?",
    "faq.where.a": "Резиденция Остров — развлекательно-оздоровительный центр. Проспект Каныша Сатпаева, 173, Усть-Каменогорск, 070014, Казахстан.",
    "faq.time.q": "Во сколько приходить?",
    "faq.time.a": "Сбор гостей с 17:00 — можно прийти к 17:00 или 17:30, прогуляться, сделать фотографии и послушать казахскую музыку. Церемония начнётся в 18:00. Вторая часть праздника начнётся около 21:00, а вечер закончится в 23:00.",
    "faq.dress.q": "Что надеть?",
    "faq.dress.a": "Мы будем рады пастельным тонам — нежно-розовый, лавандовый, мятный или голубой. Но главное — чтобы вы чувствовали себя комфортно и красиво!",
    "faq.viewMap": "Открыть карту",

    // Footer
    "footer.title": "Не можем дождаться встречи!",
    "footer.names": "Той иелері: Бауыржан & Гүльмира",
    "footer.withLove": "С любовью",

    // Maid of Honour
    "moh.greeting": "Дорогая Гүлім",
    "moh.title.line1": "Будешь моей",
    "moh.title.line2": "подругой невесты?",
    "moh.event": "Қыз ұзату Аяжан — 7 августа 2026",
    "moh.message1": "Через все ночные разговоры, наш глупый смех, который понимаем только мы, и тихие моменты, в которых не нужны слова — ты всегда была моим человеком. Спасибо, что всегда рядом, ровно такая, какая есть.",
    "moh.message2": "Не представляю этот день без тебя рядом.",
    "moh.travel.title": "Дорога — за мой счёт",
    "moh.travel.body": "Перелёт Астана — Өскемен и обратно беру на себя. Просто собери любимый наряд, остальное — моя забота.",
    "moh.hotel.title": "Где отдохнуть",
    "moh.hotel.body": "Твой отель в Усть-Каменогорске уже учтён на все дни праздника. Считай это маленьким спасибо за годы нашей дружбы.",
    "moh.closing": "Увидимся в Өскемене, родная.",

    // 404
    "notfound.title": "404",
    "notfound.message": "Упс! Страница не найдена",
    "notfound.home": "Вернуться на главную",
  },

  en: {
    // Navigation
    "nav.schedule": "Schedule",
    "nav.stay": "Stay",
    "nav.registry": "Registry",
    "nav.rsvp": "RSVP",
    "nav.faq": "FAQ",

    // Hero
    "hero.youreInvited": "You're Invited to",
    "hero.title": "Ayazhan's\nQyz Uzatu",
    "hero.date": "August 7, 2026",
    "hero.location": "Oskemen, Kazakhstan",
    "hero.cta": "View Details",

    // Schedule
    "schedule.title": "Schedule of Events",
    "schedule.subtitle": "The Day's Timeline",
    "schedule.event.arrival": "Welcome & Photos",
    "schedule.event.ceremony": "Ceremony",
    "schedule.event.part2": "Part Two",
    "schedule.event.end": "End",

    // Accommodation
    "accommodation.title": "Accommodation",
    "accommodation.intro": "We're planning to arrange special accommodation for our guests!",
    "accommodation.female.title": "For Our Female Guests",
    "accommodation.female.body": "We're looking into renting a place where our female friends can stay together. It'll be like a little gathering of its own!",
    "accommodation.additional.title": "Additional Apartments",
    "accommodation.additional.body": "We may also have one or two apartments available for other guests (depending on availability). More details will follow as we finalize the arrangements.",
    "accommodation.note": "Stay tuned — we'll share all the specifics soon!",

    // Gift Registry
    "registry.title": "Gift Registry",
    "registry.main": "Your presence is truly the greatest gift we could ask for.",
    "registry.detail": "However, if you wish to honor us with a gift, we've created a small registry with some items we'd love for our new home together. Alternatively, if you prefer to support us as we begin our married life, a contribution to our future would mean so much.",
    "registry.cta": "View Our Registry",
    "registry.note": "The registry link will be added soon",
    "registry.alert": "Registry link will be added here!",

    // RSVP
    "rsvp.title": "RSVP",
    "rsvp.subtitle": "We would be honored by your presence. Please let us know if your plans change.",
    "rsvp.thanks.title": "Thank You!",
    "rsvp.thanks.body": "We've received your RSVP. We can't wait to celebrate with you!",
    "rsvp.name": "Your Name",
    "rsvp.name.placeholder": "Full name",
    "rsvp.phone": "Phone",
    "rsvp.phone.placeholder": "+7 700 000 0000",
    "rsvp.optional": "(optional)",
    "rsvp.attending": "Will you be attending?",
    "rsvp.attending.yes": "Joyfully accepts",
    "rsvp.attending.no": "Regretfully declines",
    "rsvp.guests": "Number of Guests",
    "rsvp.guest.one": "guest",
    "rsvp.guest.many": "guests",
    "rsvp.message": "Message",
    "rsvp.message.placeholder": "Dietary restrictions, song requests, or a sweet note...",
    "rsvp.error.generic": "Something went wrong. Please try again.",
    "rsvp.error.notConnected": "RSVP is not yet connected. Please contact us directly.",
    "rsvp.send": "Send RSVP",
    "rsvp.sending": "Sending...",

    // FAQ
    "faq.title": "Questions & Answers",
    "faq.where.q": "Where will the wedding take place?",
    "faq.where.a": "Residence Ostrov — Entertainment & Recreation Center. 173 Kanysh Satpayev Avenue, Ust-Kamenogorsk (Oskemen), 070014, Kazakhstan.",
    "faq.time.q": "What time should I arrive?",
    "faq.time.a": "Doors open at 17:00 (5:00 PM) — feel free to arrive around 5:00 or 5:30, walk around, take photos and enjoy some Kazakh music. The ceremony starts at 18:00 (6:00 PM). Part two of the celebration begins around 21:00 (9:00 PM), and the evening ends at 23:00 (11:00 PM).",
    "faq.dress.q": "What should I wear?",
    "faq.dress.a": "We'd love to see you in pastel colors — think soft pinks, lavenders, mint greens, or baby blues. But honestly, wear whatever makes you feel comfortable and beautiful!",
    "faq.viewMap": "View on Map",

    // Footer
    "footer.title": "We Can't Wait to See You!",
    "footer.names": "Ayazhan & Shokan",
    "footer.withLove": "With love",

    // Maid of Honour
    "moh.greeting": "Dear Gulim",
    "moh.title.line1": "Will you be my",
    "moh.title.line2": "Maid of Honour?",
    "moh.event": "Ayazhan's Qyz Uzatu — August 7, 2026",
    "moh.message1": "Through all the late-night talks, the silly laughter only we understand, and the quiet moments that didn't need any words — you've been my person. Thank you for always showing up, exactly as you are.",
    "moh.message2": "I can't imagine this day without you standing next to me.",
    "moh.travel.title": "Your Journey, Covered",
    "moh.travel.body": "Your round-trip flight from Astana to Oskemen and back is on me. Just pack your favourite outfit and leave the rest to me.",
    "moh.hotel.title": "A Place to Rest",
    "moh.hotel.body": "Your hotel in Oskemen is taken care of for the whole celebration. Consider it a little thank-you for years of friendship.",
    "moh.closing": "See you in Oskemen, love.",

    // 404
    "notfound.title": "404",
    "notfound.message": "Oops! Page not found",
    "notfound.home": "Return to Home",
  },
};
