/* VicRes — additive strings for the FINAL builds:
   SEO descriptions, theme, FAQ, and the private contact panel.
   Loaded AFTER translations.js; merges into window.VICRES_I18N. */
(function () {
  var I = window.VICRES_I18N;
  if (!I) return;
  function add(lang, obj) { I[lang] = Object.assign(I[lang] || {}, obj); }

  add("en", {
    meta_desc: "Professional Jewish genealogy research in Ukrainian and Polish archives. Trace ancestors, rebuild family branches and retrieve records with 15+ years of experience.",
    nav_faq: "Questions",
    skip_link: "Skip to content",
    theme_toggle: "Switch light / dark theme",
    reassure: "Start with a name, a town, or one old document.",
    proof_jewishgen: "Listed in JewishGen's directory of genealogy researchers for Ukraine",

    faq_eyebrow: "Questions",
    faq_title: "What people usually ask first",
    faq_q1: "Do I need a ready family tree to start?",
    faq_a1: "No. A single name, a town, or one old document is enough to begin. We build outward from whatever you already have.",
    faq_q3: "How long does the research take?",
    faq_a3: "Usually one to three months, depending on the complexity of the case and how much information you can provide at the start.",
    faq_q5: "Is my family information kept private?",
    faq_a5: "Always. Your information and your family's story remain strictly confidential at every stage of the work.",
    faq_q6: "How much does it cost?",
    faq_a6: "Every family is different, so the cost is agreed individually after our first, no-obligation consultation.",

    form_eyebrow: "Consultation",
    form_title: "Start with a private conversation",
    form_lead: "Contact me directly to discuss what you know and what the research may uncover.",
    safe_contact_title: "Contact Victoria directly",
    safe_contact_note: "For your privacy, this site does not collect names, phone numbers or family details.",
    safe_contact_hint: "Open WhatsApp or email and share only what you are comfortable sending."
  });

  add("uk", {
    meta_desc: "Професійні дослідження єврейської генеалогії в українських і польських архівах: пошук предків, відновлення родинних гілок і архівних документів.",
    nav_faq: "Питання",
    skip_link: "Перейти до змісту",
    theme_toggle: "Світла / темна тема",
    reassure: "Почніть з імені, назви містечка чи одного старого документа.",
    proof_jewishgen: "У каталозі JewishGen серед дослідників генеалогії в Україні",

    faq_eyebrow: "Питання",
    faq_title: "Про що зазвичай запитують першим",
    faq_q1: "Чи потрібне готове родинне дерево, щоб почати?",
    faq_a1: "Ні. Для початку достатньо одного імені, назви містечка чи старого документа. Дослідження розвивається від уже відомих вам фактів.",
    faq_q3: "Скільки триває дослідження?",
    faq_a3: "Зазвичай від одного до трьох місяців — залежно від складності справи та обсягу наданої вами інформації.",
    faq_q5: "Чи зберігається конфіденційність моєї родинної інформації?",
    faq_a5: "Завжди. Ваша інформація та історія вашої родини залишаються суворо конфіденційними на кожному етапі роботи.",
    faq_q6: "Скільки це коштує?",
    faq_a6: "Кожна родина унікальна, тому вартість узгоджуємо індивідуально після першої консультації без зобов’язань.",

    form_eyebrow: "Консультація",
    form_title: "Почніть із приватної розмови",
    form_lead: "Зв’яжіться зі мною напряму, щоб обговорити відомі вам факти й можливості дослідження.",
    safe_contact_title: "Зв’язатися напряму",
    safe_contact_note: "З міркувань конфіденційності сайт не збирає імена, номери телефонів чи відомості про родину.",
    safe_contact_hint: "Відкрийте WhatsApp або електронну пошту й надішліть лише те, чим готові поділитися."
  });

  add("pl", {
    meta_desc: "Profesjonalne badania genealogii żydowskiej w archiwach ukraińskich i polskich: poszukiwanie przodków, odtwarzanie gałęzi rodzinnych i dokumentów.",
    nav_faq: "Pytania",
    skip_link: "Przejdź do treści",
    theme_toggle: "Motyw jasny / ciemny",
    reassure: "Zacznij od nazwiska, miejscowości lub jednego starego dokumentu.",
    proof_jewishgen: "W katalogu JewishGen wśród badaczy genealogii dla Ukrainy",

    faq_eyebrow: "Pytania",
    faq_title: "O co pytają najczęściej na początku",
    faq_q1: "Czy potrzebuję gotowego drzewa genealogicznego, aby zacząć?",
    faq_a1: "Nie. Wystarczy jedno nazwisko, miejscowość lub jeden stary dokument. Punktem wyjścia staje się to, co już wiesz.",
    faq_q3: "Jak długo trwają badania?",
    faq_a3: "Zwykle od jednego do trzech miesięcy — zależnie od złożoności sprawy i zakresu informacji dostępnych na początku.",
    faq_q5: "Czy moje informacje rodzinne pozostają poufne?",
    faq_a5: "Zawsze. Twoje informacje i historia rodziny pozostają ściśle poufne na każdym etapie pracy.",
    faq_q6: "Ile to kosztuje?",
    faq_a6: "Każda rodzina jest inna, dlatego koszt ustalamy indywidualnie po pierwszej, niezobowiązującej konsultacji.",

    form_eyebrow: "Konsultacja",
    form_title: "Zacznij od prywatnej rozmowy",
    form_lead: "Skontaktuj się ze mną bezpośrednio, aby omówić posiadane informacje i możliwości badawcze.",
    safe_contact_title: "Skontaktuj się bezpośrednio",
    safe_contact_note: "Dla ochrony prywatności ta strona nie zbiera imion, numerów telefonów ani informacji rodzinnych.",
    safe_contact_hint: "Otwórz WhatsApp lub e-mail i podaj tylko te informacje, które chcesz przekazać."
  });

  add("he", {
    meta_desc: "מחקר גנאלוגיה יהודית מקצועי בארכיונים אוקראיניים ופולניים: איתור אבות משפחה, שחזור ענפים משפחתיים ואיתור מסמכים.",
    nav_faq: "שאלות",
    skip_link: "דלגו לתוכן",
    theme_toggle: "מצב בהיר / כהה",
    reassure: "התחילו משם משפחה, שם עיירה או מסמך ישן אחד.",
    proof_jewishgen: "מופיעה במדריך JewishGen בין חוקרי הגנאלוגיה באוקראינה",

    faq_eyebrow: "שאלות",
    faq_title: "מה שואלים בדרך כלל בהתחלה",
    faq_q1: "האם צריך עץ יוחסין מוכן כדי להתחיל?",
    faq_a1: "לא. שם אחד, שם עיירה או מסמך ישן אחד מספיקים כדי להתחיל. המחקר מתפתח מן העובדות שכבר ידועות לכם.",
    faq_q3: "כמה זמן נמשך המחקר?",
    faq_a3: "בדרך כלל בין חודש לשלושה — בהתאם למורכבות התיק ולכמות המידע שתספקו בהתחלה.",
    faq_q5: "האם המידע המשפחתי שלי נשמר בסודיות?",
    faq_a5: "תמיד. המידע שלכם וסיפור משפחתכם נשמרים בסודיות מוחלטת בכל שלב של העבודה.",
    faq_q6: "כמה זה עולה?",
    faq_a6: "כל משפחה שונה, ולכן העלות נקבעת אישית לאחר הייעוץ הראשון, ללא כל התחייבות.",

    form_eyebrow: "ייעוץ",
    form_title: "התחילו בשיחה פרטית",
    form_lead: "צרו איתי קשר ישירות כדי לשוחח על המידע שבידיכם ועל אפשרויות המחקר.",
    safe_contact_title: "צרו קשר ישירות",
    safe_contact_note: "לשמירה על פרטיותכם, האתר אינו אוסף שמות, מספרי טלפון או פרטים משפחתיים.",
    safe_contact_hint: "פתחו וואטסאפ או אימייל ושתפו רק את המידע שנוח לכם למסור."
  });

  /* ---- "From the archives" gallery — real photos from Victoria's work ---- */
  add("en", {
    archive_eyebrow: "From the archives",
    archive_title: "Real records, real families",
    archive_lead: "A glimpse of what I work with every day — registers, plans, files and documents from Ukrainian and Polish archives.",
    cap_a: "Archive case file · Rivne State Archive",
    cap_b: "Residents' register with family names · Równe",
    cap_c: "House façade design · Rivne",
    cap_d: "Technical blueprint · Rivne",
    cap_e: "Document with revenue stamps · 1938",
    cap_f: "Building project file · ul. 3 Maja, Rivne",
    cap_g: "Property site plan",
    cap_h: "Register stamped by the Magistrate of Równe",
    cap_i: "Architectural ground-floor plan"
  });
  add("uk", {
    archive_eyebrow: "З архіву",
    archive_title: "Справжні записи, справжні родини",
    archive_lead: "Те, з чим я працюю щодня — реєстри, плани, справи та документи українських і польських архівів.",
    cap_a: "Архівна справа · Держархів Рівненщини",
    cap_b: "Реєстр мешканців із прізвищами · Рівне",
    cap_c: "Проєкт фасаду будинку · Рівне",
    cap_d: "Технічне креслення · Рівне",
    cap_e: "Документ із гербовими марками · 1938",
    cap_f: "Справа проєкту будівлі · вул. 3 Травня, Рівне",
    cap_g: "Ситуаційний план ділянки",
    cap_h: "Реєстр із печаткою магістрату Рівного",
    cap_i: "План першого поверху"
  });
  add("pl", {
    archive_eyebrow: "Z archiwum",
    archive_title: "Prawdziwe akta, prawdziwe rodziny",
    archive_lead: "To, z czym pracuję na co dzień — rejestry, plany, akta i dokumenty z archiwów ukraińskich i polskich.",
    cap_a: "Teczka archiwalna · Archiwum Obwodowe w Równem",
    cap_b: "Rejestr mieszkańców z nazwiskami · Równe",
    cap_c: "Projekt elewacji domu · Równe",
    cap_d: "Rysunek techniczny · Równe",
    cap_e: "Dokument ze znaczkami skarbowymi · 1938",
    cap_f: "Teczka projektu budynku · ul. 3 Maja, Równe",
    cap_g: "Plan sytuacyjny działki",
    cap_h: "Rejestr z pieczęcią Magistratu w Równem",
    cap_i: "Rzut parteru budynku"
  });
  add("he", {
    archive_eyebrow: "מהארכיון",
    archive_title: "רשומות אמיתיות, משפחות אמיתיות",
    archive_lead: "הצצה למה שאני עובדת אתו מדי יום — מרשמים, תוכניות, תיקים ומסמכים מארכיונים אוקראיניים ופולניים.",
    cap_a: "תיק ארכיוני · הארכיון המחוזי ברובנה",
    cap_b: "מרשם תושבים עם שמות משפחה · רובנה",
    cap_c: "תכנון חזית בית · רובנה",
    cap_d: "שרטוט טכני · רובנה",
    cap_e: "מסמך עם בולי הכנסה · 1938",
    cap_f: "תיק פרויקט בניין · רחוב 3 במאי, רובנה",
    cap_g: "תוכנית מגרש",
    cap_h: "מרשם עם חותמת המגיסטרט של רובנה",
    cap_i: "תוכנית קומת קרקע"
  });

  /* ---- "Heritage of Rivne" section ---- */
  add("en", {
    heritage_eyebrow: "Heritage of Rivne",
    heritage_title: "The world these records come from",
    heritage_lead: "Behind every document is a living town — the Jewish Rivne of synagogues, families and streets whose memory my research helps recover.",
    her_cap_plan: "Plan of the city of Rivne (Równe)",
    her_cap_couple: "A couple on a Rivne street, 1930s",
    her_cap_community: "The town and its yeshiva, Rivne",
    her_cap_story1: "Synagogue and building records of Rivne",
    her_cap_story2: "Passport, records and city views"
  });
  add("uk", {
    heritage_eyebrow: "Спадщина Рівного",
    heritage_title: "Світ, з якого походять ці записи",
    heritage_lead: "За кожним документом стоїть живе місто — єврейське Рівне із синагогами, родинами та вулицями, пам’ять про яке допомагає відновити моя робота.",
    her_cap_plan: "План міста Рівне (Równe)",
    her_cap_couple: "Пара на вулиці Рівного, 1930-ті",
    her_cap_community: "Місто та його єшива, Рівне",
    her_cap_story1: "Синагога та будівельні документи Рівного",
    her_cap_story2: "Паспорт, записи та види міста"
  });
  add("pl", {
    heritage_eyebrow: "Dziedzictwo Równego",
    heritage_title: "Świat, z którego pochodzą te akta",
    heritage_lead: "Za każdym dokumentem stoi żywe miasto — żydowskie Równe z jego synagogami, rodzinami i ulicami, którego pamięć pomaga przywracać moja praca.",
    her_cap_plan: "Plan miasta Równe",
    her_cap_couple: "Para na ulicy Równego, lata 30.",
    her_cap_community: "Miasto i jego jesziwa, Równe",
    her_cap_story1: "Synagoga i dokumenty budowlane Równego",
    her_cap_story2: "Paszport, akta i widoki miasta"
  });
  add("he", {
    heritage_eyebrow: "מורשת רובנה",
    heritage_title: "העולם שממנו באות הרשומות",
    heritage_lead: "מאחורי כל מסמך יש עיר חיה — רובנה היהודית של בתי כנסת, משפחות ורחובות, שאותה עוזרת עבודתי לשחזר.",
    her_cap_plan: "מפת העיר רובנה (Równe)",
    her_cap_couple: "בני זוג ברחוב ברובנה, שנות ה-30",
    her_cap_community: "העיר והישיבה שלה, רובנה",
    her_cap_story1: "בית הכנסת ומסמכי הבנייה של רובנה",
    her_cap_story2: "דרכון, רשומות ומראות העיר"
  });
})();
