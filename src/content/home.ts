import type { Locale } from '../i18n';

export interface FactCard {
  label: string;
  value: string;
}

export interface Step {
  tag: string;
  title: string;
  body: string;
}

export interface FeatureCard {
  kicker: string;
  title: string;
  body: string;
}

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  facts: FactCard[];
  guide: { kicker: string; title: string; intro: string; steps: Step[] };
  timing: { kicker: string; title: string; items: { title: string; body: string }[] };
  transport: { kicker: string; title: string; intro: string; cards: FeatureCard[] };
  practical: { label: string; value: string; body: string }[];
  food: { kicker: string; title: string; intro: string; cards: FeatureCard[] };
  nearby: { kicker: string; title: string; intro: string; cards: FeatureCard[] };
  faqs: { q: string; a: string }[];
  map: { kicker: string; title: string; body: string };
  closing: { title: string; body: string };
}

const zh: HomeContent = {
  meta: {
    title:
      '中環半山扶手電梯香港旅遊指南｜運作時間、交通路線與周邊美食',
    description:
      '中環半山扶手電梯（中環至半山自動扶梯系統）最新攻略：06:00–10:00 下行、10:20–24:00 上行的運作時間、港鐵中環站出口交通指引、免費乘搭須知，以及大館、中環街市、蘇豪周邊美食與景點地圖。',
  },
  hero: {
    badge: '香港島 · 中環至半山',
    eyebrow: 'Central → Mid-Levels',
    titleTop: '中環半山扶手電梯',
    titleAccent: '沿城市斜坡一路向上。',
    lead:
      '世界最長的戶外有蓋扶手電梯系統，免費乘搭，由皇后大道中一路爬升至半山干德道。它不是單純的交通工具，而是一條穿過中環街巷、餐桌、舊建築與半山日常的城市切面。',
    ctaPrimary: '看運作時間',
    ctaSecondary: '看地圖',
  },
  facts: [
    { label: '全長', value: '逾 800 米' },
    { label: '系統', value: '16 條扶梯 · 3 條行人道' },
    { label: '上行時段', value: '10:20–00:00' },
    { label: '下行時段', value: '06:00–10:00' },
  ],
  guide: {
    kicker: 'THE URBAN RIDE',
    title: '先看方向，再決定怎樣走。',
    intro:
      '系統由有蓋行人道、16 條可轉換方向的單向扶手電梯及 3 條自動行人道組成。早上主要服務下山通勤，上午 10 時 20 分後轉為上行，遊客通常在這個時間之後才開始向半山探索。',
    steps: [
      {
        tag: '01 / 起點',
        title: '皇后大道中 × 中環街市',
        body: '由中環街市一帶接入行人天橋及扶梯系統，先感受中環最密集的商業街景，再逐步向山坡移動。',
      },
      {
        tag: '02 / 荷李活道一帶',
        title: '藝術、老街與大館',
        body: '這一段最適合「跳上跳落」：可隨時轉往荷李活道、奧卑利街及大館一帶，街頭壁畫、古董店與歷史建築都集中在這裡。',
      },
      {
        tag: '03 / 蘇豪區',
        title: '餐廳、酒吧與坡道日常',
        body: '士丹頓街、伊利近街餐飲密集，扶手電梯像一條懸在街上的移動觀景台，適合慢慢看城市細節，也適合安排一頓晚餐。',
      },
      {
        tag: '04 / 半山',
        title: '終點是干德道，不是山頂',
        body: '系統終點在半山干德道，並非太平山頂。若目標是山頂，需另行安排山頂纜車、巴士或其他交通工具。',
      },
    ],
  },
  timing: {
    kicker: 'WHEN TO GO',
    title: '最佳遊覽時段',
    items: [
      {
        title: '上午 10:20 之後',
        body: '想順著扶手電梯一路往半山走，這段時間最直觀，也避開了早晨的下行通勤方向。',
      },
      {
        title: '黃昏至晚上',
        body: '街區燈光亮起，蘇豪一帶的餐飲氣氛最有層次，適合把扶梯行程直接接到晚餐。',
      },
      {
        title: '預留 45–90 分鐘',
        body: '單純乘搭全程約需 20–30 分鐘；若沿途停留大館、中環街市或荷李活道，建議預留 1–2 小時。',
      },
    ],
  },
  transport: {
    kicker: 'GETTING THERE',
    title: '詳細交通',
    intro: '扶手電梯位於中環核心地段，由港鐵中環站或香港站步行前往最為直接，詳細出口與步程請看交通指南頁。',
    cards: [
      {
        kicker: '港鐵',
        title: '中環站／香港站',
        body: '由港鐵中環站步行往皇后大道中、租庇利街方向最方便；由香港站出發亦可經行人天橋系統步行至系統下段。',
      },
      {
        kicker: '電車／巴士',
        title: '德輔道中沿線',
        body: '德輔道中、皇后大道中沿線路面交通密集，下車後以「租庇利街」或「中環街市」作為步行定位最容易。',
      },
      {
        kicker: '步行串連',
        title: '一條城市步行線',
        body: '可與中環街市、大館、荷李活道、PMQ 元創方、文武廟串成一條半日步行路線，回程再沿海味街與摩羅街走回中環。',
      },
    ],
  },
  practical: [
    {
      label: '門票 / 費用',
      value: '免費',
      body: '公共行人交通設施，不設景點門票，全日免費乘搭。',
    },
    {
      label: '停車資訊',
      value: '不建議自駕',
      body: '扶梯本身沒有專用停車場。中環車位緊張、收費浮動大，優先使用港鐵或路面公共交通。',
    },
    {
      label: '無障礙提示',
      value: '分段評估',
      body: '全線涉及扶手電梯、樓梯及斜坡；輪椅或嬰兒車使用者建議先以中環街市、大館的升降機作接駁評估。',
    },
  ],
  food: {
    kicker: 'EAT ALONG THE WAY',
    title: '周邊美食',
    intro: '扶梯沿途最適合「一段路一口吃的」安排：先在皇后大道中一帶補給，走到蘇豪再坐下吃正餐。',
    cards: [
      {
        kicker: '雲吞麵',
        title: '麥奀雲吞麵世家',
        body: '威靈頓街的老字號港式雲吞麵，適合在出發前快速吃一碗再上路。',
      },
      {
        kicker: '燒味',
        title: '一樂燒鵝',
        body: '士丹利街的老牌燒味店，以燒鵝最具代表性；午市與晚市時段通常較為繁忙。',
      },
      {
        kicker: '多選擇',
        title: '中環街市餐飲',
        body: '想要冷氣、座位和多種選擇，可在起點附近的中環街市先補給，再開始爬坡。',
      },
    ],
  },
  nearby: {
    kicker: 'NEARBY',
    title: '周邊景點',
    intro: '以扶手電梯為軸心，中環半山的熱門景點幾乎都在步行 10 分鐘範圍之內。',
    cards: [
      {
        kicker: '歷史 × 藝術',
        title: '大館',
        body: '由前中區警署建築群活化而成，歷史展覽、當代藝術與公共空間集中，是扶梯中段最順路的一站。',
      },
      {
        kicker: '保育活化',
        title: '中環街市',
        body: '扶梯下段的重要入口節點，保留包浩斯風格建築特色，並加入零售、餐飲與公共空間。',
      },
      {
        kicker: '傳統文化',
        title: '文武廟',
        body: '沿荷李活道往上環方向可達，適合與摩羅街、古董街一起排進行程。',
      },
    ],
  },
  faqs: [
    {
      q: '中環半山扶手電梯的運作時間是幾點到幾點？',
      a: '系統每日運作時間約為早上 6 時至午夜 12 時：06:00–10:00 向下行（往中環／皇后大道中方向），10:20–24:00 向上行（往半山／干德道方向）。實際安排以運輸署公布及現場公告為準。',
    },
    {
      q: '中環半山扶手電梯需要門票嗎？多少錢？',
      a: '不需要，也沒有門票或車費。這是運輸署管理的公共行人交通設施，任何人都可以免費乘搭。',
    },
    {
      q: '扶手電梯可以直接到太平山頂嗎？',
      a: '不可以。系統終點在半山干德道，距離太平山頂還有相當距離，需另行轉乘山頂纜車、專線巴士或小巴。',
    },
    {
      q: '搭完全程大概要多久？',
      a: '全程約 800 米，站著不動由上而下或由下而上約需 20–30 分鐘；若沿途停留大館、中環街市、蘇豪一帶，建議預留 1–2 小時。',
    },
    {
      q: '港鐵哪個出口最方便前往扶手電梯？',
      a: '由港鐵中環站步行經皇后大道中、租庇利街方向前往最為直接；從香港站出發亦可經室內行人天橋步行至系統下段。詳細步程請參考本站交通指南頁。',
    },
    {
      q: '如果遇到維修或暫停服務怎麼辦？',
      a: '個別扶手電梯可能因為保養維修而暫停使用，此時通常可改用相鄰樓梯、斜路或沿路行人道繼續步行。出發前應留意運輸署公布及現場告示。',
    },
    {
      q: '雨天適合前往嗎？',
      a: '大部分通道設有上蓋，雨天仍可使用；但各出入口、橫街及步行接駁位置仍可能濕滑，建議穿防滑鞋並留意地面。',
    },
    {
      q: '輪椅或嬰兒車方便使用嗎？',
      a: '扶手電梯本身並非無障礙設施，全線涉及樓梯與斜坡。輪椅或嬰兒車使用者建議先查詢中環街市、大館等節點的升降機位置，並以地面的無障礙路段規劃路線。',
    },
  ],
  map: {
    kicker: 'MAP',
    title: '位置與路線',
    body: '南端入口位於中環皇后大道中／租庇利街一帶，Plus Code 為 75M3+GX 中環 香港。',
  },
  closing: {
    title: '一條扶梯，看見幾個中環。',
    body: '這套系統連接皇后大道中與干德道，是香港中區重要的山坡行人通道。出發前如遇維修、惡劣天氣或特別安排，請以運輸署公布及現場公告為準。',
  },
};

const en: HomeContent = {
  meta: {
    title: 'Central-Mid-Levels Escalators Hong Kong: Hours, Route & Nearby Eats',
    description:
      'Everything you need to ride the Central-Mid-Levels Escalators: downhill 6–10am and uphill 10:20am–midnight, free to use, plus MTR exits, Tai Kwun, SoHo food stops and a Central walking route.',
  },
  hero: {
    badge: 'Hong Kong Island · Central to Mid-Levels',
    eyebrow: 'Central → Mid-Levels',
    titleTop: 'Central-Mid-Levels Escalators',
    titleAccent: 'Ride the slope of the city.',
    lead:
      'The longest covered escalator system in the world, free to ride, climbing from Queen’s Road Central to Conduit Road in the Mid-Levels. It is not just transport — it is a moving cross-section of Central’s lanes, kitchens, old buildings and hillside everyday life.',
    ctaPrimary: 'See operating hours',
    ctaSecondary: 'View map',
  },
  facts: [
    { label: 'Total length', value: 'Over 800 m' },
    { label: 'System', value: '16 escalators · 3 walkways' },
    { label: 'Uphill', value: '10:20 – 00:00' },
    { label: 'Downhill', value: '06:00 – 10:00' },
  ],
  guide: {
    kicker: 'THE URBAN RIDE',
    title: 'Check the direction before you step on.',
    intro:
      'The system combines covered walkways with 16 reversible one-way escalators and 3 reversible walkways. Mornings serve the downhill commute; from 10:20 the whole line reverses uphill, which is when most visitors start heading for the Mid-Levels.',
    steps: [
      {
        tag: '01 / Start',
        title: 'Queen’s Road Central × Central Market',
        body: 'Enter the system near Central Market via the footbridge network: dense Central commerce first, then the slope gradually takes over.',
      },
      {
        tag: '02 / Hollywood Road',
        title: 'Art, old streets and Tai Kwun',
        body: 'The best part for hopping on and off — step out to Hollywood Road, Old Bailey Street and Tai Kwun for murals, antique shops and restored heritage buildings.',
      },
      {
        tag: '03 / SoHo',
        title: 'Dining, bars and hillside routine',
        body: 'Staunton and Elgin Streets are packed with restaurants. The escalator becomes a moving viewpoint suspended above the street — ideal before dinner.',
      },
      {
        tag: '04 / Mid-Levels',
        title: 'It ends on Conduit Road, not The Peak',
        body: 'The top of the system sits on Conduit Road in the Mid-Levels. Victoria Peak is further up: take the Peak Tram, a bus or a minibus from here.',
      },
    ],
  },
  timing: {
    kicker: 'WHEN TO GO',
    title: 'Best time to ride',
    items: [
      {
        title: 'After 10:20 in the morning',
        body: 'The whole line runs uphill, so you can ride it all the way up without fighting the commuter flow.',
      },
      {
        title: 'Dusk into the evening',
        body: 'Street lights come on and SoHo’s dining rooms fill up — perfect for linking the ride straight into dinner.',
      },
      {
        title: 'Allow 45–90 minutes',
        body: 'Riding end to end takes about 20–30 minutes; add stops at Central Market, Tai Kwun or Hollywood Road and it easily becomes 1–2 hours.',
      },
    ],
  },
  transport: {
    kicker: 'GETTING THERE',
    title: 'Getting here',
    intro:
      'The escalators sit in the core of Central. Walking from MTR Central or Hong Kong station is the simplest approach — the step-by-step exit guide has every option.',
    cards: [
      {
        kicker: 'MTR',
        title: 'Central / Hong Kong station',
        body: 'From MTR Central, walk towards Queen’s Road Central and Jubilee Street. Coming from Hong Kong station, the elevated footbridge network leads towards the lower section.',
      },
      {
        kicker: 'Tram / Bus',
        title: 'Along Des Voeux Road Central',
        body: 'Surface transport is dense along Des Voeux Road Central and Queen’s Road Central. Use Jubilee Street or Central Market as your walking landmark.',
      },
      {
        kicker: 'On foot',
        title: 'One continuous walking line',
        body: 'Chain Central Market, Tai Kwun, Hollywood Road, PMQ and Man Mo Temple into a half-day loop, returning via Ladder Street and Lower Lascar Row.',
      },
    ],
  },
  practical: [
    {
      label: 'Tickets / Fare',
      value: 'Free',
      body: 'This is public pedestrian infrastructure — there is no admission ticket and no fare, all day long.',
    },
    {
      label: 'Parking',
      value: 'Skip the car',
      body: 'There is no dedicated car park. Central parking is scarce and expensive by the hour, so take the MTR or surface transport.',
    },
    {
      label: 'Accessibility',
      value: 'Check in sections',
      body: 'The route mixes escalators, stairs and slopes. Wheelchair users and parents with prams should plan around lifts at Central Market and Tai Kwun.',
    },
  ],
  food: {
    kicker: 'EAT ALONG THE WAY',
    title: 'Where to eat nearby',
    intro:
      'The route rewards grazing: refuel around Queen’s Road Central, then sit down properly once you reach SoHo.',
    cards: [
      {
        kicker: 'Wonton noodles',
        title: 'Mak’s Noodle',
        body: 'A long-standing wonton noodle house on Wellington Street — a quick bowl before you start climbing.',
      },
      {
        kicker: 'Roast meat',
        title: 'Yat Lok Roast Goose',
        body: 'Stanley Street institution known for roast goose; expect a queue at lunch and dinner peaks.',
      },
      {
        kicker: 'Easy options',
        title: 'Central Market dining',
        body: 'For air conditioning, seats and plenty of choice, stock up at Central Market right at the lower entrance.',
      },
    ],
  },
  nearby: {
    kicker: 'NEARBY',
    title: 'Nearby attractions',
    intro:
      'Use the escalator as your spine: most Central and Mid-Levels sights sit within a ten-minute walk of it.',
    cards: [
      {
        kicker: 'Heritage × art',
        title: 'Tai Kwun',
        body: 'The former Central Police Station compound, now galleries, heritage stories and open public courtyards — the most natural stop mid-ride.',
      },
      {
        kicker: 'Revival',
        title: 'Central Market',
        body: 'A Bauhaus-influenced landmark at the lower gateway of the system, now home to retail, dining and public space.',
      },
      {
        kicker: 'Tradition',
        title: 'Man Mo Temple',
        body: 'A short walk along Hollywood Road towards Sheung Wan; pair it with Ladder Street and the antique shops of Upper Lascar Row.',
      },
    ],
  },
  faqs: [
    {
      q: 'What are the operating hours of the Central-Mid-Levels Escalators?',
      a: 'The system runs roughly from 6:00 to midnight daily: downhill (towards Central) from 06:00 to 10:00, and uphill (towards the Mid-Levels) from 10:20 to 24:00. Always check Transport Department notices before travelling.',
    },
    {
      q: 'Is there a ticket or fare for the escalators?',
      a: 'No. It is public pedestrian infrastructure managed by the Transport Department, free for everyone to ride at any time during operating hours.',
    },
    {
      q: 'Do the escalators go all the way to Victoria Peak?',
      a: 'No. The system ends on Conduit Road in the Mid-Levels. For Victoria Peak you need the Peak Tram, a bus or a minibus.',
    },
    {
      q: 'How long does the full ride take?',
      a: 'The route covers about 800 metres. Standing still end to end takes roughly 20–30 minutes; with stops for Central Market, Tai Kwun or SoHo, allow one to two hours.',
    },
    {
      q: 'Which MTR exit is best for the escalators?',
      a: 'From MTR Central, walking towards Queen’s Road Central and Jubilee Street is the most direct; from Hong Kong station, follow the indoor footbridge network. See our transport page for step-by-step directions.',
    },
    {
      q: 'What if part of the escalator is closed for maintenance?',
      a: 'Individual escalators are occasionally taken out for servicing. You can continue on foot using adjacent stairs, ramps and covered walkways, and rejoin further up.',
    },
    {
      q: 'Is it worth visiting in the rain?',
      a: 'Yes — most of the route is covered. Do watch out for slick surfaces at entrances, side lanes and street crossings, and wear shoes with grip.',
    },
    {
      q: 'Are the escalators accessible for wheelchairs or prams?',
      a: 'Not entirely: the route mixes escalators, stairs and sloped streets. Plan step-free sections using the lifts at Central Market and Tai Kwun, then rejoin the covered walkways.',
    },
  ],
  map: {
    kicker: 'MAP',
    title: 'Location and route',
    body: 'The southern entrance sits around Queen’s Road Central and Jubilee Street; Plus Code 75M3+GX Central, Hong Kong.',
  },
  closing: {
    title: 'One escalator, several versions of Central.',
    body: 'Linking Queen’s Road Central with Conduit Road, this system is a key hillside pedestrian route for Hong Kong’s Central district. Check Transport Department notices and on-site signs before you travel.',
  },
};

export const home: Record<Locale, HomeContent> = { zh, en };
