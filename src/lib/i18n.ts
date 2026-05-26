export type Lang = "pl" | "en";

export const dict = {
  nav: {
    menu: { pl: "Menu", en: "Menu" },
    origin: { pl: "Pochodzenie", en: "Origin" },
    brewing: { pl: "Parzenie", en: "Brewing" },
    locations: { pl: "Lokale", en: "Locations" },
    contact: { pl: "Kontakt", en: "Contact" },
  },
  hero: {
    eyebrow: { pl: "Specialty coffee · Berlin & Copenhagen", en: "Specialty coffee · Berlin & Copenhagen" },
    bring: { pl: "Dajemy ci", en: "We bring you" },
    rotating: {
      pl: ["poranek", "rytuał", "rzemiosło", "chwilę", "ziarno"],
      en: ["the morning", "the ritual", "the craft", "the moment", "the bean"],
    },
    scroll: { pl: "przewiń", en: "scroll" },
  },
  about: {
    eyebrow: { pl: "01 — O nas", en: "01 — About" },
    title: {
      pl: "Każda filiżanka zaczyna się od jednego ziarna.",
      en: "Every cup begins with a single bean.",
    },
    body: {
      pl: "Ziarno. to więcej niż kawiarnia. To wspólne miejsce dla ludzi którzy szukają momentu wytchnienia w środku miasta. Palimy własną kawę w małych partiach, wybieramy ziarna od konkretnych farm i pijemy je z baristami, którzy je przygotowali. Bez pośpiechu, bez fajerwerków — tylko kawa, czas i Ty.",
      en: "Ziarno. is more than a coffee shop. It's a shared moment for people looking to slow down in the middle of the city. We roast in small batches, source from single-origin farms, and serve alongside the baristas who brewed it. No rush. No theatrics. Just coffee, time, and you.",
    },
    stats: [
      { value: "12", label: { pl: "krajów pochodzenia", en: "origin countries" } },
      { value: "2", label: { pl: "lokalizacje", en: "locations" } },
      { value: { pl: "06:30", en: "6:30 AM" }, label: { pl: "otwarcie", en: "we open" } },
    ],
  },
  menu: {
    eyebrow: { pl: "02 — Menu", en: "02 — Menu" },
    title: { pl: "To, co serwujemy", en: "What we serve" },
    categories: {
      espresso: { pl: "Espresso", en: "Espresso" },
      filter: { pl: "Filter / Brew bar", en: "Filter / Brew bar" },
      food: { pl: "Jedzenie", en: "Food" },
      other: { pl: "Inne", en: "Other" },
    },
  },
  origin: {
    eyebrow: { pl: "03 — Pochodzenie", en: "03 — Origin" },
    title: {
      pl: "Od farmy do filiżanki.",
      en: "From farm to cup.",
    },
    body: {
      pl: "Pracujemy bezpośrednio z farmerami w pięciu krajach. Każdy worek ma swój numer partii, datę zbioru i wysokość uprawy.",
      en: "We work direct-trade with farmers in five countries. Every bag carries a lot number, harvest date, and altitude.",
    },
  },
  brewing: {
    eyebrow: { pl: "04 — Parzenie", en: "04 — Brewing" },
    title: { pl: "Cztery metody. Cztery charaktery.", en: "Four methods. Four characters." },
  },
  gallery: {
    eyebrow: { pl: "05 — Galeria", en: "05 — Gallery" },
    title: { pl: "Wewnątrz Ziarna.", en: "Inside Ziarno." },
  },
  testimonials: {
    eyebrow: { pl: "06 — Opinie", en: "06 — Testimonials" },
    title: { pl: "Co mówią goście", en: "What guests say" },
  },
  locations: {
    eyebrow: { pl: "07 — Lokale", en: "07 — Locations" },
    title: { pl: "Znajdź nas", en: "Find us" },
  },
  contact: {
    eyebrow: { pl: "08 — Kontakt", en: "08 — Contact" },
    title: {
      pl: "Wpadnij. Albo napisz.",
      en: "Drop by. Or drop us a line.",
    },
    cta: { pl: "Napisz do nas", en: "Send a message" },
  },
  footer: {
    rights: { pl: "Wszystkie prawa zastrzeżone", en: "All rights reserved" },
    handcrafted: { pl: "Robione ręcznie w Berlinie", en: "Handcrafted in Berlin" },
  },
} as const;

export const menuData = {
  espresso: [
    { name: { pl: "Espresso", en: "Espresso" }, desc: { pl: "Klasyk. 30ml czystej intensywności.", en: "The classic. 30ml of pure intensity." }, price: "3,50" },
    { name: { pl: "Doppio", en: "Doppio" }, desc: { pl: "Podwójne espresso. 60ml mocy.", en: "Double shot. 60ml of power." }, price: "4,50" },
    { name: { pl: "Macchiato", en: "Macchiato" }, desc: { pl: "Espresso z odrobiną mlecznej piany.", en: "Espresso marked with milk foam." }, price: "4,00" },
    { name: { pl: "Cappuccino", en: "Cappuccino" }, desc: { pl: "1/3 espresso, 1/3 mleko, 1/3 piana.", en: "1/3 espresso, 1/3 milk, 1/3 foam." }, price: "5,00" },
    { name: { pl: "Flat White", en: "Flat White" }, desc: { pl: "Podwójne ristretto i mikropiana.", en: "Double ristretto and microfoam." }, price: "5,50" },
    { name: { pl: "Latte", en: "Latte" }, desc: { pl: "Espresso utopione w mleku.", en: "Espresso drowned in milk." }, price: "5,50" },
  ],
  filter: [
    { name: { pl: "V60", en: "V60" }, desc: { pl: "Czysta, jasna, kwiatowa.", en: "Clean, bright, floral." }, price: "7,00" },
    { name: { pl: "Aeropress", en: "Aeropress" }, desc: { pl: "Pełniejsze ciało, mniej kwasowości.", en: "Fuller body, less acidity." }, price: "6,50" },
    { name: { pl: "Chemex", en: "Chemex" }, desc: { pl: "Elegancka, delikatna, czysta.", en: "Elegant, delicate, clean." }, price: "7,50" },
    { name: { pl: "Cold Brew", en: "Cold Brew" }, desc: { pl: "16h zimnej ekstrakcji. Czekoladowa.", en: "16h cold extraction. Chocolatey." }, price: "6,00" },
  ],
  food: [
    { name: { pl: "Sourdough toast", en: "Sourdough toast" }, desc: { pl: "Avocado, jajko, chili, kolendra.", en: "Avocado, egg, chili, coriander." }, price: "12,00" },
    { name: { pl: "Granola", en: "Granola" }, desc: { pl: "Domowa granola, jogurt, sezonowe owoce.", en: "House granola, yogurt, seasonal fruit." }, price: "10,00" },
    { name: { pl: "Cynamonka", en: "Cinnamon bun" }, desc: { pl: "Drożdżowe ciasto, masło, cynamon.", en: "Yeast dough, butter, cinnamon." }, price: "6,00" },
    { name: { pl: "Banana bread", en: "Banana bread" }, desc: { pl: "Z orzechami i ciemną czekoladą.", en: "With walnuts and dark chocolate." }, price: "6,50" },
    { name: { pl: "Babka", en: "Babka" }, desc: { pl: "Czekoladowa, z chrupiącą skórką.", en: "Chocolate, with crackled top." }, price: "7,00" },
  ],
  other: [
    { name: { pl: "Matcha latte", en: "Matcha latte" }, desc: { pl: "Ceremonialna matcha, mleko owsiane.", en: "Ceremonial matcha, oat milk." }, price: "6,50" },
    { name: { pl: "Hot chocolate", en: "Hot chocolate" }, desc: { pl: "70% ciemna czekolada, mleko, skórka.", en: "70% dark chocolate, milk, peel." }, price: "6,00" },
    { name: { pl: "Chai latte", en: "Chai latte" }, desc: { pl: "Własna mieszanka przypraw.", en: "House chai blend." }, price: "6,00" },
    { name: { pl: "Lemoniada", en: "Lemonade" }, desc: { pl: "Sezonowa. Pytaj baristy.", en: "Seasonal. Ask the barista." }, price: "5,50" },
  ],
} as const;

// coords are [longitude, latitude] in degrees — for proper world-map placement.
export const origins = [
  { country: "Ethiopia",  region: "Yirgacheffe",   notes: { pl: "jaśmin, bergamotka, cytryna",  en: "jasmine, bergamot, lemon" },   coords: [38.2,  6.16]  as [number, number], altitude: "1900-2200m" },
  { country: "Colombia",  region: "Huila",         notes: { pl: "karmel, jabłko, czekolada",    en: "caramel, apple, chocolate" },   coords: [-75.4, 2.5]   as [number, number], altitude: "1700-2000m" },
  { country: "Brazil",    region: "Cerrado",       notes: { pl: "orzech, nugat, miód",          en: "nuts, nougat, honey" },         coords: [-46.6, -15.78] as [number, number], altitude: "900-1200m" },
  { country: "Kenya",     region: "Nyeri",         notes: { pl: "czarna porzeczka, pomidor",    en: "blackcurrant, tomato" },        coords: [36.95, -0.42] as [number, number], altitude: "1700-2000m" },
  { country: "Guatemala", region: "Huehuetenango", notes: { pl: "kakao, brzoskwinia",           en: "cocoa, peach" },                coords: [-91.5, 15.32] as [number, number], altitude: "1500-2000m" },
];

export const brewingMethods = [
  {
    name: "V60",
    time: "3:30",
    body: { pl: "Lekkie", en: "Light" },
    notes: { pl: "Kwiatowe, herbaciane, kryształowa klarowność.", en: "Floral, tea-like, crystal clarity." },
    desc: {
      pl: "Stożek ze żłobkowanymi ścianami. Cienki filtr papierowy. Pojedyncza, ciągła strugą wody. Wynik: kawa, która brzmi jak szept.",
      en: "Cone with ridged walls. Thin paper filter. Single, continuous pour. Result: coffee that whispers.",
    },
  },
  {
    name: "Aeropress",
    time: "1:30",
    body: { pl: "Średnie", en: "Medium" },
    notes: { pl: "Gęste, czekoladowe, syropowate.", en: "Dense, chocolatey, syrupy." },
    desc: {
      pl: "Ciśnienie i czas. Zanurzenie zamiast przelewu. Mniej kwasowości, więcej ciała. Idealne na poranny shot bez espresso.",
      en: "Pressure and time. Immersion instead of pour. Less acidity, more body. Perfect for a morning shot without espresso.",
    },
  },
  {
    name: "Chemex",
    time: "4:30",
    body: { pl: "Bardzo lekkie", en: "Very light" },
    notes: { pl: "Eleganckie, czyste, owocowe.", en: "Elegant, clean, fruity." },
    desc: {
      pl: "Grube filtry papierowe wyłapują oleje. Co zostaje to czysta, krystaliczna ekstrakcja. Naczynie z 1941 roku, które trafiło do MoMA.",
      en: "Thick paper filters catch the oils. What remains is pure, crystalline extraction. A 1941 design that landed in MoMA.",
    },
  },
  {
    name: "Cold Brew",
    time: "16h",
    body: { pl: "Pełne", en: "Full" },
    notes: { pl: "Czekoladowe, niska kwasowość, słodkie.", en: "Chocolatey, low acidity, sweet." },
    desc: {
      pl: "Zimna woda przez kilkanaście godzin. Mniej olejów, mniej goryczy, więcej słodyczy. Lato w szklance, dostępne cały rok.",
      en: "Cold water for sixteen hours. Less oils, less bitterness, more sweetness. Summer in a glass, available year-round.",
    },
  },
];

export const locations = [
  {
    city: "Berlin",
    neighborhood: "Kreuzberg",
    address: "Oranienstraße 42, 10999 Berlin",
    hours: {
      pl: ["Pon-Pią · 06:30 — 19:00", "Sob-Nd · 08:00 — 18:00"],
      en: ["Mon-Fri · 06:30 — 19:00", "Sat-Sun · 08:00 — 18:00"],
    },
    phone: "+49 30 12345678",
    coords: "52.4996° N, 13.4180° E",
  },
  {
    city: "Copenhagen",
    neighborhood: "Nørrebro",
    address: "Jagtvej 100, 2200 København N",
    hours: {
      pl: ["Pon-Pią · 07:00 — 18:00", "Sob-Nd · 08:30 — 17:00"],
      en: ["Mon-Fri · 07:00 — 18:00", "Sat-Sun · 08:30 — 17:00"],
    },
    phone: "+45 32 12 34 56",
    coords: "55.6938° N, 12.5527° E",
  },
];

export const testimonials = [
  {
    quote: {
      pl: "Najlepsza V60 jaką piłam w Berlinie. Atmosfera jak w salonie zaprzyjaźnionego.",
      en: "Best V60 I've had in Berlin. Feels like a friend's living room.",
    },
    author: "Lena M.",
    role: { pl: "stała gość", en: "regular" },
  },
  {
    quote: {
      pl: "Przyjeżdżam tu z drugiego końca miasta. Wiedzą jak nazywam się i jaką kawę piję.",
      en: "I come from across town. They know my name and my order.",
    },
    author: "Tomasz K.",
    role: { pl: "designer", en: "designer" },
  },
  {
    quote: {
      pl: "Każda filiżanka jest jak mała opowieść o farmie, z której pochodzi.",
      en: "Each cup feels like a tiny story about the farm it came from.",
    },
    author: "Anna J.",
    role: { pl: "krytyk kulinarny", en: "food writer" },
  },
  {
    quote: {
      pl: "Cisza, dobra muzyka, kawa która nie jest zbyt fancy żeby się nie napić.",
      en: "Quiet, good music, coffee that isn't too fancy to actually drink.",
    },
    author: "Marek W.",
    role: { pl: "pisarz", en: "writer" },
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80", alt: "barista pouring", h: "tall" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", alt: "latte art", h: "short" },
  { src: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=800&q=80", alt: "coffee beans", h: "short" },
  { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80", alt: "cafe interior", h: "tall" },
  { src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80", alt: "v60 brewing", h: "short" },
  { src: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=1200&q=80", alt: "espresso shot", h: "tall" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80", alt: "pastry", h: "short" },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80", alt: "morning light", h: "short" },
];
