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
      amenities: "Amenities",
      location: "Location",
      contact: "Contact",
      bookNow: "Book on Booking.com",
    },
    // Hero
    hero: {
      eyebrow: "Podhajska · Slovakia",
      headline: "Where quiet luxury meets\nthe healing warmth of the spa.",
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
      stat2: { value: "5 min", label: "Walk to the thermal spa" },
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
      body: `Podhajska sits above an extraordinary natural resource: mineral-rich geothermal water that has been flowing to the surface for centuries. Today the town's thermal complex draws visitors from across Slovakia and beyond — and Grand Apartman is just steps away. Beyond the spa, you'll find friendly local restaurants, a train station, and easy access to the wider region.`,
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
  },

  sk: {
    nav: {
      apartments: "Apartmány",
      amenities: "Vybavenie",
      location: "Poloha",
      contact: "Kontakt",
      bookNow: "Rezervovať na Booking.com",
    },
    hero: {
      eyebrow: "Podhajská · Slovensko",
      headline: "Kde tichý luxus stretáva\nhrejivé kúpele.",
      subline:
        "Tri krásne zariadené apartmány — vaše súkromné útočisko v srdci slovenského termálneho regiónu.",
      cta1: "Preskúmať apartmány",
      cta2: "Rezervovať na Booking.com",
    },
    welcome: {
      heading: "Útočisko v Podhajskej",
      body: `Ukrytý v tichej slovenskej krajine, Grand Apartman je miesto, kde sa čas spomalí a pohoda dostane na prvé miesto. Podhajská je v celej strednej Európe známa svojou minerálnou termálnou vodou — a tieto tri premyslene zariadené apartmány vás umiestňujú priamo v jej blízkosti. Či už prichádzate za regeneračným termálnym pobytom, pokojným rodinným oddychom alebo jednoducho za oddychom od tempa moderného života, tu nájdete všetko, čo potrebujete — a nič navyše.`,
      stat1: { value: "3", label: "Apartmány" },
      stat2: { value: "5 min", label: "Pešo na termálne kúpele" },
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
      body: `Podhajská leží nad mimoriadnym prírodným zdrojom: minerálne bohatou geotermálnou vodou, ktorá vyviera na povrch po stáročia. Dnes termálny komplex mesta priťahuje návštevníkov z celého Slovenska i zo zahraničia — a Grand Apartman je len niekoľko krokov od neho. Okrem kúpeľov nájdete príjemné miestne reštaurácie, železničnú stanicu a ľahký prístup do širšieho regiónu.`,
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
  },
} as const;

export type Dict = (typeof dict)[Locale];
