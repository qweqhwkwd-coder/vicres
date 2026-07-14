/* VicRes — additive strings for the FINAL builds:
   SEO descriptions, theme, FAQ, and the consultation form.
   Loaded AFTER translations.js; merges into window.VICRES_I18N. */
(function () {
  var I = window.VICRES_I18N;
  if (!I) return;
  function add(lang, obj) { I[lang] = Object.assign(I[lang] || {}, obj); }

  add("en", {
    meta_desc: "Professional Jewish genealogy research in Ukrainian and Polish archives. 15+ years, 200+ family studies. Volhynia, Rivne and shtetl ancestry. Request a consultation.",
    nav_faq: "Questions",
    skip_link: "Skip to content",
    theme_toggle: "Switch light / dark theme",
    reassure: "Start with a name, a town, or one old document — you don't need a finished family tree.",
    proof_jewishgen: "Listed among researchers recommended by JewishGen users",

    faq_eyebrow: "Questions",
    faq_title: "What people usually ask first",
    faq_q1: "Do I need a ready family tree to start?",
    faq_a1: "No. A single name, a town, or one old document is enough to begin. We build outward from whatever you already have.",
    faq_q2: "What if records were lost or destroyed in the war?",
    faq_a2: "Volhynia's history is painful, but a great deal still survives across Ukrainian and Polish archives. I search widely and tell you honestly what is realistic before you commit.",
    faq_q3: "How long does the research take?",
    faq_a3: "Usually one to three months, depending on the complexity of the case and how much information you can provide at the start.",
    faq_q4: "Which regions and languages do you cover?",
    faq_a4: "I specialise in Rivne and the Volhynia region and work across Ukraine and Poland, reading records in Ukrainian, Polish and English.",
    faq_q5: "Is my family information kept private?",
    faq_a5: "Always. Your information and your family's story remain strictly confidential, at every stage of the work.",
    faq_q6: "How much does it cost?",
    faq_a6: "Every family is different, so the cost is agreed individually after our first, no-obligation consultation.",

    form_eyebrow: "Consultation",
    form_title: "Tell me about your search",
    form_lead: "Share what you know and how to reach you. I reply personally, and the first consultation carries no obligation.",
    form_name_l: "Your name",
    form_name_ph: "How should I address you?",
    form_contact_l: "Email or phone",
    form_contact_ph: "Where I should reply",
    form_msg_l: "What are you hoping to find?",
    form_msg_ph: "A surname, a town, a date — anything you already know.",
    form_submit: "Send request",
    form_sending: "Preparing your request…",
    form_success_t: "Your request is ready",
    form_success_d: "I've opened WhatsApp with your details — just press send there. Prefer email? Write to",
    form_err_name: "Please enter your name.",
    form_err_contact: "Please leave an email or phone number.",
    form_err_msg: "Please tell me a little about your search.",
    form_or: "or",
    form_direct: "Prefer to write directly?",
    form_wa_intro: "Hello Victoria, I would like a genealogy consultation."
  });

  add("uk", {
    meta_desc: "Професійне дослідження єврейської генеалогії в українських і польських архівах. 15+ років, 200+ родинних досліджень. Волинь, Рівне, походження з містечок.",
    nav_faq: "Питання",
    skip_link: "Перейти до змісту",
    theme_toggle: "Світла / темна тема",
    reassure: "Почніть з імені, назви містечка чи одного старого документа — готове дерево не потрібне.",
    proof_jewishgen: "У переліку дослідників, рекомендованих користувачами JewishGen",

    faq_eyebrow: "Питання",
    faq_title: "Про що зазвичай запитують першим",
    faq_q1: "Чи потрібне вже готове родинне дерево, щоб почати?",
    faq_a1: "Ні. Достатньо одного імені, назви містечка чи одного старого документа. Ми розбудовуємо все від того, що у вас уже є.",
    faq_q2: "А якщо записи втрачені або знищені під час війни?",
    faq_a2: "Історія Волині болюча, але дуже багато вціліло в українських і польських архівах. Я шукаю широко й чесно кажу, що реально знайти, ще до початку роботи.",
    faq_q3: "Скільки триває дослідження?",
    faq_a3: "Зазвичай від одного до трьох місяців — залежно від складності справи та обсягу наданої вами інформації.",
    faq_q4: "Які регіони та мови ви охоплюєте?",
    faq_a4: "Спеціалізуюся на Рівному та Волині, працюю по всій Україні та Польщі, читаю документи українською, польською та англійською.",
    faq_q5: "Чи зберігається конфіденційність моєї родинної інформації?",
    faq_a5: "Завжди. Ваша інформація та історія вашої родини залишаються суворо конфіденційними на кожному етапі роботи.",
    faq_q6: "Скільки це коштує?",
    faq_a6: "Кожна родина унікальна, тому вартість узгоджуємо індивідуально після першої консультації без зобов’язань.",

    form_eyebrow: "Консультація",
    form_title: "Розкажіть про ваш пошук",
    form_lead: "Напишіть, що вам відомо і як з вами зв’язатися. Я відповідаю особисто, перша консультація — без зобов’язань.",
    form_name_l: "Ваше ім’я",
    form_name_ph: "Як до вас звертатися?",
    form_contact_l: "Ел. пошта або телефон",
    form_contact_ph: "Куди мені відповісти",
    form_msg_l: "Що ви хочете знайти?",
    form_msg_ph: "Прізвище, містечко, дата — усе, що вже знаєте.",
    form_submit: "Надіслати запит",
    form_sending: "Готую ваш запит…",
    form_success_t: "Ваш запит готовий",
    form_success_d: "Я відкрила WhatsApp із вашими даними — просто натисніть «надіслати». Зручніше поштою? Напишіть на",
    form_err_name: "Будь ласка, введіть ваше ім’я.",
    form_err_contact: "Будь ласка, залиште пошту або телефон.",
    form_err_msg: "Будь ласка, коротко опишіть ваш пошук.",
    form_or: "або",
    form_direct: "Хочете написати напряму?",
    form_wa_intro: "Вітаю, Вікторіє! Хочу замовити консультацію з генеалогії."
  });

  add("pl", {
    meta_desc: "Profesjonalne badania genealogii żydowskiej w archiwach ukraińskich i polskich. 15+ lat, 200+ badań rodzinnych. Wołyń, Równe, pochodzenie ze sztetli.",
    nav_faq: "Pytania",
    skip_link: "Przejdź do treści",
    theme_toggle: "Motyw jasny / ciemny",
    reassure: "Zacznij od nazwiska, miejscowości lub jednego starego dokumentu — gotowe drzewo nie jest potrzebne.",
    proof_jewishgen: "Na liście badaczy polecanych przez użytkowników JewishGen",

    faq_eyebrow: "Pytania",
    faq_title: "O co pytają najczęściej na początku",
    faq_q1: "Czy potrzebuję gotowego drzewa genealogicznego, aby zacząć?",
    faq_a1: "Nie. Wystarczy jedno nazwisko, miejscowość lub jeden stary dokument. Budujemy dalej na tym, co już masz.",
    faq_q2: "Co, jeśli akta zaginęły lub zostały zniszczone podczas wojny?",
    faq_a2: "Historia Wołynia jest bolesna, ale wiele wciąż zachowało się w archiwach ukraińskich i polskich. Szukam szeroko i uczciwie mówię, co jest realne, zanim podejmiesz decyzję.",
    faq_q3: "Jak długo trwają badania?",
    faq_a3: "Zwykle od jednego do trzech miesięcy — zależnie od złożoności sprawy i ilości informacji na starcie.",
    faq_q4: "Jakie regiony i języki obejmujesz?",
    faq_a4: "Specjalizuję się w Równem i na Wołyniu, pracuję w całej Ukrainie i Polsce, czytam dokumenty po ukraińsku, polsku i angielsku.",
    faq_q5: "Czy moje informacje rodzinne pozostają poufne?",
    faq_a5: "Zawsze. Twoje informacje i historia rodziny pozostają ściśle poufne na każdym etapie pracy.",
    faq_q6: "Ile to kosztuje?",
    faq_a6: "Każda rodzina jest inna, dlatego koszt ustalamy indywidualnie po pierwszej, niezobowiązującej konsultacji.",

    form_eyebrow: "Konsultacja",
    form_title: "Opowiedz o swoim poszukiwaniu",
    form_lead: "Napisz, co wiesz i jak się z Tobą skontaktować. Odpowiadam osobiście, pierwsza konsultacja jest niezobowiązująca.",
    form_name_l: "Imię",
    form_name_ph: "Jak mam się zwracać?",
    form_contact_l: "E-mail lub telefon",
    form_contact_ph: "Gdzie mam odpowiedzieć",
    form_msg_l: "Czego szukasz?",
    form_msg_ph: "Nazwisko, miejscowość, data — cokolwiek już wiesz.",
    form_submit: "Wyślij zapytanie",
    form_sending: "Przygotowuję zapytanie…",
    form_success_t: "Twoje zapytanie jest gotowe",
    form_success_d: "Otworzyłam WhatsApp z Twoimi danymi — wystarczy nacisnąć „wyślij”. Wolisz e-mail? Napisz na",
    form_err_name: "Podaj proszę swoje imię.",
    form_err_contact: "Zostaw proszę e-mail lub telefon.",
    form_err_msg: "Napisz proszę krótko o swoim poszukiwaniu.",
    form_or: "lub",
    form_direct: "Wolisz napisać bezpośrednio?",
    form_wa_intro: "Dzień dobry, Victorio! Chciał(a)bym umówić konsultację genealogiczną."
  });

  add("he", {
    meta_desc: "מחקר גנאלוגיה יהודית מקצועי בארכיונים אוקראיניים ופולניים. 15+ שנים, 200+ מחקרים משפחתיים. ווהלין, רובנה ומוצא מעיירות יהודיות. בקשו ייעוץ.",
    nav_faq: "שאלות",
    skip_link: "דלגו לתוכן",
    theme_toggle: "מצב בהיר / כהה",
    reassure: "התחילו משם משפחה, שם עיירה או מסמך ישן אחד — אין צורך בעץ משפחה מוכן.",
    proof_jewishgen: "מופיעה ברשימת החוקרים המומלצים על ידי משתמשי JewishGen",

    faq_eyebrow: "שאלות",
    faq_title: "מה שואלים בדרך כלל בהתחלה",
    faq_q1: "האם צריך עץ משפחה מוכן כדי להתחיל?",
    faq_a1: "לא. שם אחד, שם עיירה או מסמך ישן אחד מספיקים כדי להתחיל. אנחנו בונים הלאה ממה שכבר יש לכם.",
    faq_q2: "מה אם הרשומות אבדו או נהרסו במלחמה?",
    faq_a2: "ההיסטוריה של ווהלין כואבת, אך הרבה מאוד עדיין שרד בארכיונים אוקראיניים ופולניים. אני מחפשת בהיקף רחב ואומרת בכנות מה ריאלי — עוד לפני שתתחייבו.",
    faq_q3: "כמה זמן נמשך המחקר?",
    faq_a3: "בדרך כלל בין חודש לשלושה — בהתאם למורכבות התיק ולכמות המידע שתספקו בהתחלה.",
    faq_q4: "אילו אזורים ושפות את מכסה?",
    faq_a4: "אני מתמחה ברובנה ובאזור ווהלין, עובדת בכל אוקראינה ופולין, וקוראת מסמכים באוקראינית, פולנית ואנגלית.",
    faq_q5: "האם המידע המשפחתי שלי נשמר בסודיות?",
    faq_a5: "תמיד. המידע שלכם וסיפור משפחתכם נשמרים בסודיות מוחלטת בכל שלב של העבודה.",
    faq_q6: "כמה זה עולה?",
    faq_a6: "כל משפחה שונה, ולכן העלות נקבעת אישית לאחר הייעוץ הראשון, ללא כל התחייבות.",

    form_eyebrow: "ייעוץ",
    form_title: "ספרו לי על החיפוש שלכם",
    form_lead: "כתבו מה ידוע לכם ואיך ליצור אתכם קשר. אני עונה באופן אישי, והייעוץ הראשון ללא כל התחייבות.",
    form_name_l: "השם שלכם",
    form_name_ph: "כיצד לפנות אליכם?",
    form_contact_l: "אימייל או טלפון",
    form_contact_ph: "לאן להשיב לכם",
    form_msg_l: "מה תרצו למצוא?",
    form_msg_ph: "שם משפחה, עיירה, תאריך — כל מה שכבר ידוע לכם.",
    form_submit: "שליחת בקשה",
    form_sending: "מכינה את הבקשה…",
    form_success_t: "הבקשה שלכם מוכנה",
    form_success_d: "פתחתי וואטסאפ עם הפרטים שלכם — פשוט לחצו «שליחה». מעדיפים אימייל? כתבו אל",
    form_err_name: "אנא הזינו את שמכם.",
    form_err_contact: "אנא השאירו אימייל או טלפון.",
    form_err_msg: "אנא ספרו מעט על החיפוש שלכם.",
    form_or: "או",
    form_direct: "מעדיפים לכתוב ישירות?",
    form_wa_intro: "שלום ויקטוריה, אשמח לייעוץ בגנאלוגיה."
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
    heritage_lead: "Behind every document is a living town — the Jewish Rivne of synagogues, families and streets that my research helps to recover.",
    her_cap_plan: "Plan of the city of Rivne (Równe)",
    her_cap_couple: "A couple on a Rivne street, 1930s",
    her_cap_community: "The town and its yeshiva, Rivne",
    her_cap_story1: "Synagogue and building records of Rivne",
    her_cap_story2: "Passport, records and city views"
  });
  add("uk", {
    heritage_eyebrow: "Спадщина Рівного",
    heritage_title: "Світ, з якого походять ці записи",
    heritage_lead: "За кожним документом — живе місто: єврейське Рівне синагог, родин і вулиць, яке допомагає повернути моя робота.",
    her_cap_plan: "План міста Рівне (Równe)",
    her_cap_couple: "Пара на вулиці Рівного, 1930-ті",
    her_cap_community: "Місто та його єшива, Рівне",
    her_cap_story1: "Синагога та будівельні документи Рівного",
    her_cap_story2: "Паспорт, записи та види міста"
  });
  add("pl", {
    heritage_eyebrow: "Dziedzictwo Równego",
    heritage_title: "Świat, z którego pochodzą te akta",
    heritage_lead: "Za każdym dokumentem stoi żywe miasto — żydowskie Równe synagog, rodzin i ulic, które pomaga odzyskać moja praca.",
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
