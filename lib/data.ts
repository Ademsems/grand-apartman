// ============================================================
// Grand Apartman — typed source of truth for all site content
// ============================================================

export const BRAND_NAME = "Grand Apartman";
export const LOCATION = "Podhajska, Slovakia";

// Main property Booking.com URL
export const MAIN_BOOKING_URL =
  "https://www.booking.com/hotel/sk/grand-apartman-5-star-luxury-podhajska-apartman.en-gb.html?aid=964694&app_hotel_id=13046959";

// PLACEHOLDER — TODO: confirm real email before launch
export const CONTACT_EMAIL = "info@grandapartman.sk";

export const CONTACT_PHONES = [
  { name: "Anka", number: "+421 903 229 180", languages: "Slovak, Hungarian" },
  { name: "Simon", number: "+421 903 229 180", languages: "English" },
];

// Review snapshot — HARDCODED manual snapshot from Booking.com (update periodically)
export const REVIEW_SNAPSHOT = {
  overallScore: 9.9,
  reviewsCount: 38,
  note: "Couples rated the location 9.8",
  source: "Booking.com",
};

// Company legal details
export const COMPANY_LEGAL = {
  name: "Wheeler A&S s. r. o.",
  ico: "57 092 036",
  address: "Medvecké 3, 935 41 Plavé Vozokany, Slovenská republika",
  registry:
    "Zapísaná v Obchodnom registri Okresného súdu Nitra, oddiel Sro, vložka č. 66654/N",
};

export const HOSTS = {
  names: "Simon & Anka Wheeler",
  description:
    "Simon and Anka are a married couple living nearby who will be contactable throughout your stay. Between them they speak English, Slovak, Czech, and Hungarian — so you're always in good hands.",
  languages: ["English", "Slovak", "Czech", "Hungarian"],
};

export type AmenityGroup = {
  label: string;
  labelSk: string;
  items: string[];
  itemsSk: string[];
};

export type Apartment = {
  slug: string;
  nameSuffix: string;   // appended to "Grand Apartman —"
  nameSuffixSk: string;
  size: string;
  sleeps: number;
  beds: string;
  bedsSk: string;
  bathrooms: string;
  bathroomsSk: string;
  shortDesc: string;
  shortDescSk: string;
  description: string;
  descriptionSk: string;
  bookingUrl: string;
  comingSoon?: boolean;
  amenities: AmenityGroup[];
};

// Property-wide house rules
export const HOUSE_RULES = {
  en: [
    "Check-in: 15:00–18:00",
    "Check-out: 10:00–11:00",
    "No smoking",
    "No parties or events",
    "No pets",
    "Children of any age welcome",
    "Minimum check-in age: 18",
  ],
  sk: [
    "Check-in: 15:00–18:00",
    "Check-out: 10:00–11:00",
    "Nefajčiarske priestory",
    "Zákaz večierkov a podujatí",
    "Domáce zvieratá nie sú povolené",
    "Deti všetkých vekových kategórií vítané",
    "Minimálny vek pri check-in: 18 rokov",
  ],
};

export const LOCATION_HIGHLIGHTS = {
  en: [
    "5-minute walk to Termálne kúpalisko Podhajska (thermal spa & wellness)",
    "Cafés & restaurants ~300–350 m away (Penzion 3galeria, Slovenská reštaurácia, La Rossa Podhájska)",
    "Train station & local food store within walking distance",
    "Small cinema in town",
    "Golf course near Nitra",
    "Agrokomplex Nitra ~39 km",
    "Mojmírovce Manor House ~37 km",
  ],
  sk: [
    "5 minút pešo na Termálne kúpalisko Podhajska (termálne kúpele & wellness)",
    "Kaviarne a reštaurácie ~300–350 m (Penzion 3galeria, Slovenská reštaurácia, La Rossa Podhájska)",
    "Vlaková stanica a predajňa potravín v pešej dostupnosti",
    "Malé kino v meste",
    "Golfové ihrisko neďaleko Nitry",
    "Agrokomplex Nitra ~39 km",
    "Kaštieľ Mojmírovce ~37 km",
  ],
};

// ─── APARTMENTS ──────────────────────────────────────────────

const studioAmenities: AmenityGroup[] = [
  {
    label: "Kitchen",
    labelSk: "Kuchyňa",
    items: [
      "Full private kitchen",
      "Stovetop",
      "Refrigerator",
      "Microwave",
      "Kitchenware",
      "Electric kettle",
      "Coffee machine",
      "Dining table",
      "Cleaning products",
    ],
    itemsSk: [
      "Plne vybavená súkromná kuchyňa",
      "Varná doska",
      "Chladnička",
      "Mikrovlnná rúra",
      "Kuchynské náčinie",
      "Elektrická kanvica",
      "Kávovar",
      "Jedálenský stôl",
      "Čistiace prostriedky",
    ],
  },
  {
    label: "Bathroom",
    labelSk: "Kúpeľňa",
    items: [
      "Walk-in shower",
      "Hairdryer",
      "Free toiletries",
      "Towels",
      "Slippers",
      "Toilet paper",
    ],
    itemsSk: [
      "Sprchovací kút",
      "Fén na vlasy",
      "Bezplatné toaletné potreby",
      "Uteráky",
      "Papuče",
      "Toaletný papier",
    ],
  },
  {
    label: "Comfort & General",
    labelSk: "Komfort a všeobecné",
    items: [
      "Air conditioning",
      "Heating",
      "Soundproofing",
      "Hardwood/parquet & tile floors",
      "Hypoallergenic",
      "Linen",
      "Wardrobe/closet",
      "Desk",
      "Seating area",
      "Sofa",
      "Socket near bed",
      "Iron & ironing facilities",
      "Drying rack",
      "Safety deposit box",
      "Board games",
      "Radio",
      "Satellite/cable channels",
      "Smart TV",
      "Streaming services",
    ],
    itemsSk: [
      "Klimatizácia",
      "Kúrenie",
      "Zvuková izolácia",
      "Parkety a dlaždicové podlahy",
      "Hypoalergénne vybavenie",
      "Posteľná bielizeň",
      "Šatník/skriňa",
      "Pracovný stôl",
      "Sedacia súprava",
      "Pohovka",
      "Zásuvka pri posteli",
      "Žehlička a žehliaca doska",
      "Sušiak na bielizeň",
      "Bezpečnostný trezor",
      "Spoločenské hry",
      "Rádio",
      "Satelitné/káblové kanály",
      "Smart TV",
      "Streamingové služby",
    ],
  },
  {
    label: "Outdoor & Views",
    labelSk: "Exteriér a výhľad",
    items: [
      "Balcony",
      "Outdoor furniture",
      "Outdoor dining area",
      "Garden view",
      "Landmark view",
    ],
    itemsSk: [
      "Balkón",
      "Záhradný nábytok",
      "Vonkajšia jedálenská zóna",
      "Výhľad na záhradu",
      "Výhľad na pamätihodnosť",
    ],
  },
  {
    label: "Good to know",
    labelSk: "Dôležité informácie",
    items: [
      "Upper floors accessible by stairs only",
      "Private apartment in building",
      "Non-smoking",
    ],
    itemsSk: [
      "Horné poschodia prístupné len schodiskom",
      "Súkromný apartmán v budove",
      "Nefajčiarske priestory",
    ],
  },
];

const superiorAmenities: AmenityGroup[] = [
  {
    label: "Kitchen",
    labelSk: "Kuchyňa",
    items: [
      "Full private kitchen",
      "Stovetop",
      "Refrigerator",
      "Microwave",
      "Toaster",
      "Kitchenware",
      "Electric kettle",
      "Coffee machine",
      "Dining table",
      "Cleaning products",
    ],
    itemsSk: [
      "Plne vybavená súkromná kuchyňa",
      "Varná doska",
      "Chladnička",
      "Mikrovlnná rúra",
      "Hriankovač",
      "Kuchynské náčinie",
      "Elektrická kanvica",
      "Kávovar",
      "Jedálenský stôl",
      "Čistiace prostriedky",
    ],
  },
  {
    label: "Bathroom",
    labelSk: "Kúpeľňa",
    items: [
      "Walk-in shower",
      "Hairdryer",
      "Free toiletries",
      "Towels",
      "Slippers",
      "Bathrobe",
      "Toilet paper",
    ],
    itemsSk: [
      "Sprchovací kút",
      "Fén na vlasy",
      "Bezplatné toaletné potreby",
      "Uteráky",
      "Papuče",
      "Župan",
      "Toaletný papier",
    ],
  },
  {
    label: "Comfort & General",
    labelSk: "Komfort a všeobecné",
    items: [
      "Air conditioning",
      "Heating",
      "Soundproofing",
      "Hardwood/parquet & tile floors",
      "Hypoallergenic",
      "Linen",
      "Minibar",
      "Wardrobe/closet",
      "Desk",
      "Seating area",
      "Sofa",
      "Socket near bed",
      "Iron & ironing facilities",
      "Drying rack",
      "Safety deposit box",
      "Board games",
      "Radio",
      "Satellite/cable channels",
      "Smart TV",
      "Streaming services",
    ],
    itemsSk: [
      "Klimatizácia",
      "Kúrenie",
      "Zvuková izolácia",
      "Parkety a dlaždicové podlahy",
      "Hypoalergénne vybavenie",
      "Posteľná bielizeň",
      "Minibar",
      "Šatník/skriňa",
      "Pracovný stôl",
      "Sedacia súprava",
      "Pohovka",
      "Zásuvka pri posteli",
      "Žehlička a žehliaca doska",
      "Sušiak na bielizeň",
      "Bezpečnostný trezor",
      "Spoločenské hry",
      "Rádio",
      "Satelitné/káblové kanály",
      "Smart TV",
      "Streamingové služby",
    ],
  },
  {
    label: "Outdoor & Views",
    labelSk: "Exteriér a výhľad",
    items: [
      "Balcony",
      "Outdoor furniture",
      "Outdoor dining area",
      "Garden view",
      "Landmark view",
    ],
    itemsSk: [
      "Balkón",
      "Záhradný nábytok",
      "Vonkajšia jedálenská zóna",
      "Výhľad na záhradu",
      "Výhľad na pamätihodnosť",
    ],
  },
  {
    label: "Good to know",
    labelSk: "Dôležité informácie",
    items: [
      "Upper floors accessible by stairs only",
      "Private apartment in building",
      "Non-smoking",
    ],
    itemsSk: [
      "Horné poschodia prístupné len schodiskom",
      "Súkromný apartmán v budove",
      "Nefajčiarske priestory",
    ],
  },
];

export const APARTMENTS: Apartment[] = [
  {
    slug: "studio-balcony",
    nameSuffix: "Studio Apartment with Balcony",
    nameSuffixSk: "Štúdiový apartmán s balkónom",
    size: "28 m²",
    sleeps: 4,
    beds: "1 large double bed + 1 sofa bed",
    bedsSk: "1 manželská posteľ + 1 rozkladacia pohovka",
    bathrooms: "1 bathroom (walk-in shower)",
    bathroomsSk: "1 kúpeľňa (sprchovací kút)",
    shortDesc: "Airy studio with balcony, fully equipped kitchen & smart TV. Sleeps up to 4.",
    shortDescSk: "Vzdušné štúdio s balkónom, plne vybavenou kuchyňou a smart TV. Kapacita až 4 osoby.",
    description: `Step into this thoughtfully designed studio and feel immediately at ease. At 28 m², the space is compact yet far from ordinary — air-conditioned for year-round comfort, with walls that keep the outside world exactly where it belongs thanks to quality soundproofing.

The fully equipped private kitchen makes self-catering a pleasure rather than a chore: stovetop, refrigerator, microwave, coffee machine, electric kettle, and all the kitchenware you need are ready and waiting. After breakfast, step out onto the private balcony and take in the garden views with a morning coffee in hand.

Evenings are yours to enjoy on the sofa with streaming services on the flat-screen smart TV, or wind down at the dining table with a board game. A large double bed and a sofa bed mean the studio comfortably sleeps up to four — ideal for a young family or two couples travelling together.

Parquet and tile floors, hypoallergenic bedding, a safety deposit box, and iron & ironing facilities round out the practical touches that make longer stays feel like home.`,
    descriptionSk: `Vstúpte do tohto premyslene zaradeného štúdia a okamžite sa uvoľníte. Na 28 m² je priestor kompaktný, no zďaleka nie obyčajný — klimatizovaný pre celoročné pohodlie, s múrmi, ktoré vďaka kvalitnej zvukovej izolácii udržujú vonkajší svet presne tam, kde patrí.

Plne vybavená súkromná kuchyňa robí z varenia radosť, nie povinnosť: varná doska, chladnička, mikrovlnná rúra, kávovar, elektrická kanvica a všetko potrebné kuchynské náčinie sú vždy po ruke. Po raňajkách vyjdite na súkromný balkón a vychutnajte si výhľad na záhradu s rannou kávou v ruke.

Večery môžete stráviť na pohovke so streamingom na flat-screen smart TV, alebo si oddýchnuť pri jedálenskom stole so spoločenskou hrou. Manželská posteľ a rozkladacia pohovka poskytnú pohodlný spánok až pre štyri osoby — ideálne pre mladú rodinu alebo dve páry cestujúce spoločne.

Parkety a dlaždicové podlahy, hypoalergénna posteľná bielizeň, trezor a žehlička s žehliacou doskou dopĺňajú praktické detaily, vďaka ktorým sa aj dlhšie pobyty cítia ako doma.`,
    bookingUrl:
      "https://www.booking.com/hotel/sk/grand-apartman-5-star-luxury-podhajska-apartman.en-gb.html?aid=964694&app_hotel_id=13046959&checkin=2025-11-18&checkout=2025-11-20&group_adults=2&group_children=0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA#room_1304695902",
    amenities: studioAmenities,
  },
  {
    slug: "superior-balcony",
    nameSuffix: "Superior Apartment with Balcony",
    nameSuffixSk: "Superior apartmán s balkónom",
    size: "32 m²",
    sleeps: 2,
    beds: "1 extra-large double bed",
    bedsSk: "1 extra veľká manželská posteľ",
    bathrooms: "1 bathroom (walk-in shower)",
    bathroomsSk: "1 kúpeľňa (sprchovací kút)",
    shortDesc: "Premium apartment for couples — extra-large bed, minibar, balcony & garden views.",
    shortDescSk: "Prémiový apartmán pre páry — extra veľká posteľ, minibar, balkón a výhľad na záhradu.",
    description: `For those who believe a holiday should be nothing short of exceptional, the Superior Apartment is your answer. Four square metres larger than the Studio, it has been finished with couples in mind — generous, calm, and quietly luxurious.

The centrepiece is an extra-large double bed dressed in hypoallergenic linen, positioned to face the garden. Soundproofed walls ensure complete privacy, while air conditioning keeps the room at your ideal temperature regardless of the season.

A fully equipped kitchen — with stovetop, refrigerator, microwave, toaster, coffee machine, and all the essentials — means you can cook to your own rhythm. The minibar is stocked for moments when only something cold will do. Step through to the private balcony for an al fresco breakfast among garden views that feel a world away from the everyday.

In the evenings, the flat-screen smart TV with streaming services, a sofa, and a seating area create a natural retreat. Bespoke details — bathrobe, free toiletries, a safety deposit box, and iron & ironing facilities — complete the picture of a stay designed for absolute comfort.`,
    descriptionSk: `Pre tých, ktorí veria, že dovolenka by mala byť skutočne výnimočná, je Superior apartmán tou správnou voľbou. O štyri metre štvorcové väčší ako štúdio, navrhnutý s ohľadom na páry — veľkorysý, pokojný a nenápadne luxusný.

Centrom je extra veľká manželská posteľ oblečená v hypoalergénnej bielizni, umiestnená s výhľadom do záhrady. Zvukotesné steny zaručujú úplné súkromie, zatiaľ čo klimatizácia udržuje miestnosť na vašej ideálnej teplote bez ohľadu na ročné obdobie.

Plne vybavená kuchyňa — s varnou doskou, chladničkou, mikrovlnnou rúrou, hriankovačom, kávovarom a všetkým potrebným — vám umožní variť vlastným tempom. Minibar je zásobený pre chvíle, keď je potrebné niečo chladné. Vyjdite na súkromný balkón na raňajky al fresco s výhľadom na záhradu, ktorý pôsobí ako iný svet.

Večer flat-screen smart TV so streamingom, pohovka a sedacia zóna vytvárajú prirodzené útočisko. Špeciálne detaily — župan, bezplatné toaletné potreby, trezor a žehlička s žehliacou doskou — dotvárajú obraz pobytu navrhnutého pre absolútny komfort.`,
    bookingUrl:
      "https://www.booking.com/hotel/sk/grand-apartman-5-star-luxury-podhajska-apartman.en-gb.html?aid=964694&app_hotel_id=13046959&checkin=2025-11-18&checkout=2025-11-20&group_adults=2&group_children=0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA#room_1304695901",
    amenities: superiorAmenities,
  },
  {
    slug: "apartment-three",
    nameSuffix: "Apartment Three",
    nameSuffixSk: "Tretí apartmán",
    size: "–",
    sleeps: 0,
    beds: "–",
    bedsSk: "–",
    bathrooms: "–",
    bathroomsSk: "–",
    shortDesc: "Coming soon — a new addition to the Grand Apartman collection.",
    shortDescSk: "Čoskoro — nový prírastok do kolekcie Grand Apartman.",
    description: "Details coming soon.",
    descriptionSk: "Detaily budú čoskoro k dispozícii.",
    bookingUrl: MAIN_BOOKING_URL,
    comingSoon: true,
    amenities: [],
  },
];

export const PROPERTY_AMENITIES = {
  en: [
    { icon: "wifi", label: "Free WiFi" },
    { icon: "car", label: "Free private parking" },
    { icon: "waves", label: "Moments from Podhajska's thermal pools & wellness" },
    { icon: "snowflake", label: "Air conditioning" },
    { icon: "utensils", label: "Fully equipped kitchen" },
    { icon: "key", label: "Self check-in" },
    { icon: "no-smoking", label: "Non-smoking" },
    { icon: "baby", label: "Family friendly" },
    { icon: "tree", label: "Balcony & garden views" },
    { icon: "volume-x", label: "Soundproofed" },
  ],
  sk: [
    { icon: "wifi", label: "Bezplatné WiFi" },
    { icon: "car", label: "Bezplatné súkromné parkovanie" },
    { icon: "waves", label: "Blízko termálnych kúpeľov a wellness v Podhajskej" },
    { icon: "snowflake", label: "Klimatizácia" },
    { icon: "utensils", label: "Plne vybavená kuchyňa" },
    { icon: "key", label: "Samostatný check-in" },
    { icon: "no-smoking", label: "Nefajčiarske priestory" },
    { icon: "baby", label: "Vhodné pre rodiny" },
    { icon: "tree", label: "Balkón a výhľad na záhradu" },
    { icon: "volume-x", label: "Zvuková izolácia" },
  ],
};
