export type Lesson = {
  slug: string; category: string; title: string; summary: string; minutes: number;
  level: string; body: string[]; keyPoints: string[]; question: string;
  options: string[]; answer: number; explanation: string; source: string; sourceLabel: string;
};

export const lessons: Lesson[] = [
  {
    slug:"wing-structure", category:"Uçak yapısı", title:"Bir uçak kanadı nasıl yük taşır?",
    summary:"Spar, rib ve skin elemanlarının görevleri.", minutes:8, level:"Temel",
    body:[
      "Uçak kanadı yalnızca kaldırma kuvveti oluşturan bir yüzey değildir. Aynı zamanda uçuş sırasında oluşan aerodinamik ve yapısal yükleri gövdeye aktaran taşıyıcı bir sistemdir.",
      "Spar (ana kiriş), kanadın boyuna doğrultudaki ana taşıyıcı elemanıdır. Rib (nervür), kanat kesitinin şeklini korumaya ve kaplamayı desteklemeye yardımcı olur. Skin (kaplama), dış aerodinamik yüzeyi oluşturur ve tasarıma bağlı olarak yapısal yüklerin taşınmasına da katılır.",
      "Bu elemanlar tek başlarına değil, birlikte çalışır. Gerçek tasarımlarda yük dağılımı; malzeme, bağlantılar, geometri ve uçuş koşullarına göre değişir."
    ],
    keyPoints:["Spar: ana boyuna taşıyıcı eleman.","Rib: kanat profilini korumaya yardımcı olur.","Skin: aerodinamik yüzeydir ve yapısal yük taşıyabilir."],
    question:"Kanat kesitinin şeklini korumaya yardımcı olan eleman hangisidir?",
    options:["Rib (nervür)","Rudder (dümen)","Nacelle (motor kaportası)"], answer:0,
    explanation:"Rib, kanat kesitinin şeklini korur ve kaplamayı destekler.",
    source:"https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
    sourceLabel:"FAA — Pilot’s Handbook of Aeronautical Knowledge"
  },
  {
    slug:"turbofan-basics", category:"Motorlar", title:"Turbofan motor nasıl itki üretir?",
    summary:"Fan, kompresör, yanma odası ve türbin.", minutes:10, level:"Temel",
    body:[
      "Turbofan motorda hava girişten alınır ve fan tarafından hızlandırılır. Havanın bir bölümü çekirdek motordan geçerken bir bölümü çekirdeğin çevresinden ilerler.",
      "Çekirdek akışında kompresör havanın basıncını yükseltir. Yanma odasında yakıtın kontrollü yanmasıyla akışa enerji eklenir. Türbin, sıcak gaz akışından enerji alarak mil üzerinden kompresörü ve fanı çalıştırır.",
      "Birçok turbofan motorda bypass akışı toplam itkiye önemli katkı sağlar. Motor mimarisi ve bileşen düzeni motor tipine göre değişebilir."
    ],
    keyPoints:["Fan havayı hızlandırır.","Kompresör çekirdek hava basıncını artırır.","Türbin, kompresör ve fanı döndüren mekanik gücü sağlar."],
    question:"Kompresörü döndürmek için gerekli mekanik gücü temel olarak hangi bölüm sağlar?",
    options:["Türbin","İniş takımı","Flap"], answer:0,
    explanation:"Türbin, sıcak gaz akışından enerji alarak mil üzerinden kompresörü çalıştırır.",
    source:"https://www.faa.gov/regulations_policies/handbooks_manuals/aviation",
    sourceLabel:"FAA — Aviation Handbooks and Manuals"
  },
  {
    slug:"angle-of-attack", category:"Aerodinamik", title:"Hücum açısı ve stall ilişkisi",
    summary:"Stall neden yalnızca düşük hız demek değildir?", minutes:7, level:"Temel",
    body:[
      "Hücum açısı, kanadın referans doğrultusu ile gelen göreli hava akımı arasındaki açıdır. Kanat üzerindeki akış, hücum açısına bağlı olarak değişir.",
      "Hücum açısı kritik değerin üzerine çıktığında akışın önemli bir bölümü yüzeyden ayrılabilir. Bu durum kaldırma kuvvetinde azalmaya ve sürüklemede artışa yol açabilir.",
      "Bu nedenle stall yalnızca düşük hızla açıklanamaz. Kritik hücum açısı; kanat tasarımı, konfigürasyon ve akış koşullarına bağlıdır."
    ],
    keyPoints:["Stall, kritik hücum açısının aşılmasıyla ilişkilidir.","Akış ayrılması kaldırmayı azaltabilir.","Stall belirli tek bir hızın adı değildir."],
    question:"Stall ile en doğrudan ilişkili temel değişken hangisidir?",
    options:["Hücum açısı","Kabin sıcaklığı","Yakıt rengi"], answer:0,
    explanation:"Kritik hücum açısının aşılması, akış ayrılmasına ve stall koşuluna yol açabilir.",
    source:"https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
    sourceLabel:"FAA — Pilot’s Handbook of Aeronautical Knowledge"
  },
  {
    slug:"hydraulic-system", category:"Uçak sistemleri", title:"Uçakta hidrolik sistem neden kullanılır?",
    summary:"Basınçlı sıvı ile kuvvet ve hareket aktarımı.", minutes:9, level:"Temel",
    body:[
      "Hidrolik sistemler, basınçlandırılmış sıvı aracılığıyla enerjiyi ve kuvveti bir noktadan diğerine aktarır. Uçak tasarımına bağlı olarak uçuş kumandaları, iniş takımı ve frenleme sistemlerinde kullanılabilir.",
      "Reservoir sıvıyı depolar; pump sisteme akış sağlar; valfler akışın yönünü veya miktarını kontrol eder. Actuator ise hidrolik enerjiyi mekanik harekete dönüştürür.",
      "Uçak bakımında basınç boşaltma, servis ve kaçak kontrolü gibi işlemler yalnızca ilgili uçak tipi için geçerli onaylı bakım dokümanına göre yapılmalıdır."
    ],
    keyPoints:["Reservoir: sıvı deposu.","Pump: akış ve basınç sağlar.","Actuator: hidrolik enerjiyi mekanik harekete dönüştürür."],
    question:"Hidrolik enerjiyi mekanik harekete dönüştüren eleman hangisidir?",
    options:["Actuator","Reservoir","Filter"], answer:0,
    explanation:"Actuator, hidrolik enerjiyi doğrusal veya dönel mekanik harekete dönüştürür.",
    source:"https://www.faa.gov/regulations_policies/handbooks_manuals/aviation",
    sourceLabel:"FAA — Aviation Maintenance Handbooks"
  }
];

export const vocabulary = [
  {word:"Fuselage", meaning:"Gövde", example:"The fuselage is the main body of the aircraft."},
  {word:"Fatigue", meaning:"Yorulma", example:"Repeated loading may lead to material fatigue."},
  {word:"Leakage", meaning:"Sızıntı / kaçak", example:"Inspect the area for signs of fluid leakage."},
  {word:"Fastener", meaning:"Bağlantı elemanı", example:"Check the fasteners for security."},
  {word:"Inspection", meaning:"Muayene / kontrol", example:"Carry out a visual inspection."},
  {word:"Corrosion", meaning:"Korozyon", example:"Remove corrosion in accordance with approved data."},
  {word:"Clearance", meaning:"Boşluk / açıklık", example:"Measure the clearance using the specified method."}
];

export const cases = [{
  slug:"aloha-243", title:"Aloha Airlines Flight 243", date:"28 Nisan 1988",
  location:"Maui, Hawaii, ABD", aircraft:"Boeing 737-200",
  summary:"Uçuş sırasında gövdenin üst bölümünün büyük kısmı ayrıldı; mürettebat acil iniş yaptı.",
  findings:[
    "NTSB soruşturması, gövde bindirme bağlantısında metal yorulması ve bağ ayrılması (disbonding) bulgularını ortaya koydu.",
    "Bakım ve muayene programının hasarın ilerlemesini tespit edememesi güvenlik açısından önemli bir faktördü.",
    "Olay, tekrarlı basınçlandırma çevrimleri, yapısal yorulma ve yaşlanan uçakların denetimi konularında önemli dersler sundu."
  ],
  sources:[
    {label:"NTSB — Accident Investigation",url:"https://www.ntsb.gov/investigations/pages/dca88ma054.aspx"},
    {label:"FAA — Lessons Learned",url:"https://www.faa.gov/lessons_learned/transport_airplane/accidents/N73711"}
  ],
  note:"Özet, resmî soruşturma kaynaklarına dayalı eğitim amaçlı bir anlatımdır. Operasyonel veya bakım talimatı değildir."
}];
