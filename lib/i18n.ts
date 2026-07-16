// ============================================================
// Bilingual dictionary — all UI copy in English and Slovak
// ============================================================
// To upgrade to locale-routed i18n later, split this into
// /messages/en.json and /messages/sk.json — same key structure.

export type Locale = "en" | "sk";

export const dict = {
  en: {
    // Navigation
    nav: {
      apartments: "Apartments",
      about: "About",
      amenities: "Amenities",
      location: "Location",
      contact: "Contact",
      bookNow: "Book on Booking.com",
    },
    // Hero
    hero: {
      eyebrow: "Podhajska · Slovakia",
      headline: "Where quiet luxury meets\nthe healing warmth of the Thermal Baths.",
      subline:
        "Three beautifully appointed apartments — your private sanctuary in the heart of Slovakia's renowned thermal region.",
      cta1: "Explore apartments",
      cta2: "Book on Booking.com",
    },
    // Welcome
    welcome: {
      heading: "A sanctuary in Podhajska",
      body: `Nestled in the gentle Slovak countryside, Grand Apartman is a place where time slows and well-being takes centre stage. Podhajska is celebrated across Central Europe for its mineral-rich thermal waters — and these three thoughtfully furnished apartments place you moments from them. Whether you arrive for a rejuvenating thermal retreat, a peaceful family escape, or simply a break from the pace of modern life, you'll find everything you need here — and nothing you don't.`,
      stat1: { value: "3", label: "Apartments" },
      stat2: { value: "5 min", label: "Walk to the Thermal Baths" },
      stat3: { value: "9.9", label: "on Booking.com" },
    },
    // Apartments section
    apartments: {
      heading: "Our Apartments",
      subheading: "Each apartment is independently furnished and fully equipped for a self-sufficient, comfortable stay.",
      learnMore: "Learn more",
      bookApartment: "Book this apartment",
      comingSoon: "Coming soon",
      comingSoonDesc: "This apartment is being prepared. Stay tuned — or enquire below.",
      sleeps: "Sleeps",
      size: "Size",
      beds: "Beds",
      bathrooms: "Bathrooms",
    },
    // Amenities section
    amenities: {
      heading: "Every comfort, taken care of",
      subheading: "Property-wide amenities that make every stay effortless.",
    },
    // Location section
    location: {
      heading: "A town built on thermal water",
      body: `Podhajska sits above an extraordinary natural resource: mineral-rich geothermal water that has been flowing to the surface for centuries. Today the town's thermal complex draws visitors from across Slovakia and beyond — and Grand Apartman is just steps away. Beyond the Thermal Baths, you'll find friendly local restaurants, a train station, and easy access to the wider region.`,
      highlights: "Nearby highlights",
      mapComingSoon: "Map coming soon",
    },
    // Contact section
    contact: {
      heading: "Get in touch",
      subheading: "We're always happy to answer a question or help you plan your stay.",
      name: "Name",
      email: "Email address",
      message: "Message",
      phone: "Phone number",
      send: "Send message",
      sending: "Sending…",
      successTitle: "Message received",
      successBody: "Thank you — we'll be in touch shortly.",
      errorTitle: "Something went wrong",
      formNotReady: "Our contact form is being set up. Please reach us directly at",
      honeypot: "Leave this field empty",
      required: "required",
      invalidEmail: "Please enter a valid email address.",
      invalidPhone: "Please enter a valid phone number (at least 7 digits).",
      messageTooShort: "Please write at least 10 characters.",
    },
    // Individual apartment page
    apartmentPage: {
      backToApartments: "← All apartments",
      bookNow: "Book on Booking.com",
      keyFacts: "At a glance",
      amenities: "Amenities",
      houseRules: "House rules",
      contactUs: "Have a question? Get in touch.",
      comingSoonTitle: "Coming soon",
      comingSoonBody:
        "We're putting the finishing touches on this apartment. In the meantime, feel free to reach out — we'd love to hear from you.",
    },
    // Cookie consent
    cookie: {
      message:
        "We use cookies to enable the map embed and improve your experience. Non-essential cookies are off by default.",
      accept: "Accept",
      decline: "Decline",
    },
    // Footer
    footer: {
      tagline: "Private luxury apartments in Podhajska, Slovakia.",
      quickLinks: "Quick links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      bookNow: "Book on Booking.com",
      builtBy: "Website by",
    },
    // Privacy page
    privacy: {
      title: "Privacy Policy",
      templateWarning:
        "This is a template privacy policy. Please review with your legal advisor before publishing.",
    },
    // Terms page
    terms: {
      title: "Terms & Conditions",
      templateWarning:
        "This is a template Terms & Conditions document. Please review with your legal advisor before publishing.",
    },
    // About page
    about: {
      metaTitle: "About Us",
      metaDescription:
        "Meet Simon and Anna — the couple behind Grand Apartman. Learn about our story, our 9.9 Booking.com rating, and what makes our apartments in Podhajska special.",
      heroHeading: "About Us",
      heroIntro:
        "At Grand Apartman, our goal has always been simple: to create a place where every guest can relax, unwind, and enjoy a truly memorable stay.",
      storyHeading: "Our Story",
      storyBody:
        "Two years ago, we followed our dream of opening our own apartments in Podhájska. From the very beginning, we focused on every detail — from comfort and cleanliness to the little luxuries that make a holiday feel special. We wanted to create accommodation that stands out, and we are incredibly proud that our guests have rewarded us with an outstanding 9.9 rating on Booking.com.",
      ratingLabel: "on Booking.com",
      meetHeading: "Meet Simon & Anna",
      meetBody:
        "We are Simon and Anna, a married couple living in a small Slovak village just 15 minutes from Podhájska. Together we have four children and one wonderful granddaughter. Simon is English and speaks Slovak, while Anna is Slovak and also speaks Hungarian, allowing us to welcome guests from a variety of backgrounds.",
      experienceHeading: "Our Experience",
      experienceBody1:
        "Having travelled extensively and lived in several countries, we understand what makes a holiday truly enjoyable. We know that it's not just about a beautiful apartment — it's about feeling welcomed, cared for, and knowing that someone is always there if you need assistance.",
      experienceBody2:
        "Anna brings more than eight years of experience managing holiday apartments and has encountered virtually every situation imaginable. This experience allows us to provide a smooth, stress-free stay for every guest. We believe that excellent communication and personal service are the foundation of great hospitality. Many of our guests return year after year, and we are delighted that so many have become friends along the way.",
      closingHeading: "Our Promise to You",
      closingBody:
        "We are passionate about what we do and take great pride in our apartments. Every guest is important to us, no request is too small, and we look forward to welcoming you to Grand Apartman and helping you create wonderful memories in Podhájska.",
      ctaLabel: "View our apartments",
    },
  },

  sk: {
    nav: {
      apartments: "Apartmány",
      about: "O nás",
      amenities: "Vybavenie",
      location: "Poloha",
      contact: "Kontakt",
      bookNow: "Rezervovať na Booking.com",
    },
    hero: {
      eyebrow: "Podhajská · Slovensko",
      headline: "Kde tichý luxus stretáva\nTermálne Kúpalisko.",
      subline:
        "Tri krásne zariadené apartmány — vaše súkromné útočisko v srdci slovenského termálneho regiónu.",
      cta1: "Preskúmať apartmány",
      cta2: "Rezervovať na Booking.com",
    },
    welcome: {
      heading: "Útočisko v Podhajskej",
      body: `Ukrytý v tichej slovenskej krajine, Grand Apartman je miesto, kde sa čas spomalí a pohoda dostane na prvé miesto. Podhajská je v celej strednej Európe známa svojou minerálnou termálnou vodou — a tieto tri premyslene zariadené apartmány vás umiestňujú priamo v jej blízkosti. Či už prichádzate za regeneračným termálnym pobytom, pokojným rodinným oddychom alebo jednoducho za oddychom od tempa moderného života, tu nájdete všetko, čo potrebujete — a nič navyše.`,
      stat1: { value: "3", label: "Apartmány" },
      stat2: { value: "5 min", label: "Pešo na Termálne Kúpalisko" },
      stat3: { value: "9.9", label: "na Booking.com" },
    },
    apartments: {
      heading: "Naše apartmány",
      subheading: "Každý apartmán je samostatne zariadený a plne vybavený pre pohodlný a sebestačný pobyt.",
      learnMore: "Zistiť viac",
      bookApartment: "Rezervovať apartmán",
      comingSoon: "Čoskoro",
      comingSoonDesc: "Tento apartmán sa pripravuje. Sledujte nás — alebo sa pýtajte nižšie.",
      sleeps: "Počet hostí",
      size: "Rozloha",
      beds: "Postele",
      bathrooms: "Kúpeľňa",
    },
    amenities: {
      heading: "Každý komfort, o ktorý je postarané",
      subheading: "Vybavenie celého objektu, ktoré robí každý pobyt bezstarostným.",
    },
    location: {
      heading: "Mesto postavené na termálnej vode",
      body: `Podhajská leží nad mimoriadnym prírodným zdrojom: minerálne bohatou geotermálnou vodou, ktorá vyviera na povrch po stáročia. Dnes Termálne Kúpalisko priťahuje návštevníkov z celého Slovenska i zo zahraničia — a Grand Apartman je len niekoľko krokov od neho. Okrem Termálneho Kúpaliska nájdete príjemné miestne reštaurácie, železničnú stanicu a ľahký prístup do širšieho regiónu.`,
      highlights: "Atrakcie v okolí",
      mapComingSoon: "Mapa čoskoro",
    },
    contact: {
      heading: "Kontaktujte nás",
      subheading: "Radi odpovieme na vaše otázky alebo vám pomôžeme naplánovať pobyt.",
      name: "Meno",
      email: "E-mailová adresa",
      message: "Správa",
      phone: "Telefónne číslo",
      send: "Odoslať správu",
      sending: "Odosiela sa…",
      successTitle: "Správa prijatá",
      successBody: "Ďakujeme — čoskoro sa vám ozveme.",
      errorTitle: "Niečo sa pokazilo",
      formNotReady: "Kontaktný formulár sa nastavuje. Prosím, kontaktujte nás priamo na",
      honeypot: "Toto pole nechajte prázdne",
      required: "povinné",
      invalidEmail: "Prosím, zadajte platnú e-mailovú adresu.",
      invalidPhone: "Prosím, zadajte platné telefónne číslo (aspoň 7 číslic).",
      messageTooShort: "Prosím, napíšte aspoň 10 znakov.",
    },
    apartmentPage: {
      backToApartments: "← Všetky apartmány",
      bookNow: "Rezervovať na Booking.com",
      keyFacts: "Na prvý pohľad",
      amenities: "Vybavenie",
      houseRules: "Domový poriadok",
      contactUs: "Máte otázku? Napíšte nám.",
      comingSoonTitle: "Čoskoro",
      comingSoonBody:
        "Finalizujeme posledné detaily tohto apartmánu. Medzitým nás neváhajte kontaktovať — radi vás vypočujeme.",
    },
    cookie: {
      message:
        "Používame cookies na zobrazenie mapy a zlepšenie vášho zážitku. Nepodstatné cookies sú predvolene vypnuté.",
      accept: "Prijať",
      decline: "Odmietnuť",
    },
    footer: {
      tagline: "Súkromné luxusné apartmány v Podhajskej, Slovensko.",
      quickLinks: "Rýchle odkazy",
      legal: "Právne informácie",
      privacy: "Ochrana osobných údajov",
      terms: "Obchodné podmienky",
      bookNow: "Rezervovať na Booking.com",
      builtBy: "Web vytvoril",
    },
    privacy: {
      title: "Ochrana osobných údajov",
      templateWarning:
        "Toto je vzorová zásada ochrany osobných údajov. Pred zverejnením ju prosím prekonzultujte s vašim právnym poradcom.",
    },
    terms: {
      title: "Obchodné podmienky",
      templateWarning:
        "Toto je vzorový dokument Obchodných podmienok. Pred zverejnením ho prosím prekonzultujte s vašim právnym poradcom.",
    },
    // About page
    about: {
      metaTitle: "O nás",
      metaDescription:
        "Spoznajte Simona a Annu — manželský pár za Grand Apartmanom. Dozvedzte sa náš príbeh, hodnotenie 9,9 na Booking.com a čo robí naše apartmány v Podhájskej výnimočnými.",
      heroHeading: "O nás",
      heroIntro:
        "V Grand Apartman je naším cieľom vytvoriť miesto, kde si každý hosť môže dokonale oddýchnuť, načerpať nové sily a užiť si nezabudnuteľný pobyt.",
      storyHeading: "Náš príbeh",
      storyBody:
        "Pred dvoma rokmi sme si splnili sen a otvorili vlastné apartmány v Podhájskej. Od samého začiatku sme venovali pozornosť každému detailu – od čistoty a pohodlia až po malé prvky luxusu, ktoré robia dovolenku výnimočnou. Naším cieľom bolo vytvoriť ubytovanie, ktoré sa odlišuje kvalitou a službami. Sme nesmierne hrdí na naše hodnotenie 9,9 na Booking.com, ktoré je pre nás potvrdením spokojnosti našich hostí.",
      ratingLabel: "na Booking.com",
      meetHeading: "Zoznámte sa so Simonom a Annou",
      meetBody:
        "Sme manželia Simon a Anna a žijeme v malej slovenskej dedinke, len 15 minút od Podhájskej. Spoločne máme štyri deti a jednu úžasnú vnučku. Simon pochádza z Anglicka a hovorí po slovensky, Anna je Slovenka a okrem slovenčiny hovorí aj po maďarsky. Vďaka tomu dokážeme privítať hostí z rôznych krajín a zabezpečiť, aby sa u nás cítili ako doma.",
      experienceHeading: "Naše skúsenosti",
      experienceBody1:
        "Počas rokov sme veľa cestovali a žili v niekoľkých krajinách, čo nám pomohlo pochopiť, čo hostia od kvalitného ubytovania očakávajú. Vieme, že skvelá dovolenka nie je len o krásnom apartmáne, ale aj o príjemnej atmosfére, ochote pomôcť a osobnom prístupe.",
      experienceBody2:
        "Anna má viac ako osem rokov skúseností so správou rekreačných apartmánov a počas svojej praxe sa stretla s takmer každou situáciou, ktorá môže nastať. Vďaka týmto skúsenostiam vieme našim hosťom zabezpečiť bezstarostný a pohodlný pobyt. Veríme, že kvalitná komunikácia a individuálny prístup sú základom výnimočných služieb. Mnohí naši hostia sa k nám pravidelne vracajú a veľmi si vážime, že sa z mnohých stali naši priatelia.",
      closingHeading: "Náš sľub pre vás",
      closingBody:
        "Na našu prácu aj na naše apartmány sme veľmi hrdí. Každý hosť je pre nás dôležitý, žiadna požiadavka nie je príliš malá a urobíme všetko pre to, aby bol Váš pobyt v Grand Apartman príjemným zážitkom, na ktorý sa budete radi vracať.",
      ctaLabel: "Naše apartmány",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];
