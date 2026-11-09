import type { GuideDef } from './types';

/** B · 历史、文化与游览体验（6 页）。事实以运输署与旅发局公开资料为界，不补写未核实的年份或工程数字。 */
export const cultureGuides: GuideDef[] = [
  {
    slug: 'history',
    group: 'culture',
    title: { zh: '扶梯歷史', en: 'History' },
    related: ['architecture', 'interesting-facts', 'itinerary/central-walking-tour', 'route-map'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯歷史｜1993 年啟用與城市交通背景',
          description: '依運輸署資料整理中環至半山自動扶梯系統 1993 年啟用的背景、連接皇后大道中與干德道的通勤目的、管理單位，以及系統與中環舊城街區發展的關係。',
        },
        kicker: 'HISTORY',
        h1: '為什麼中環會有一條上山的扶梯？',
        lead: '它原本是為了解決中環與半山之間的高差通勤問題而建，後來才成為遊客眼中的城市景點。運輸署資料記錄系統於 1993 年啟用，連接皇后大道中一帶與半山干德道，現由機電工程署管理。',
        facts: [
          { label: '啟用年份', value: '1993 年（運輸署資料）' },
          { label: '正式名稱', value: '中環至半山自動扶梯系統' },
          { label: '管理單位', value: '機電工程署' },
          { label: '連接範圍', value: '皇后大道中 → 干德道' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '為通勤而建的山坡行人系統',
            paragraphs: [
              '中環商業區與半山住宅區之間有明顯高差，街道又多斜坡與樓梯。扶梯系統的用意，是讓居民在中環與半山之間移動時不必全程攀爬，並把原本分散的街道用有蓋的扶梯、自動行人道與天橋串接起來。',
              '這也是它與一般商場扶梯的根本差別：它是一段公共行人基礎設施，而不是通往某一棟建築的入口。理解這一點，就能明白為什麼沿線有這麼多街道連接點，以及為什麼方向會按通勤時段切換。',
            ],
          },
          {
            heading: '可以確認與不能確認的事',
            table: {
              caption: '以官方公開資料為界；未查證的細節不作補寫',
              columns: ['項目', '本站怎樣表述', '原因'],
              rows: [
                ['啟用年份', '1993 年', '運輸署資料所列'],
                ['系統構成', '16 條扶梯、3 條自動行人道', '運輸署資料所列'],
                ['管理單位', '機電工程署', '運輸署資料所列'],
                ['建設造價、載客量', '不列數字', '本站未取得可核對的官方數字'],
                ['電影取景與城市軼事', '不寫成史實', '屬流行文化敘述，非交通資料'],
              ],
            },
          },
          {
            heading: '由交通設施變成旅遊街區',
            bullets: [
              { title: '沿線街區被重新看見', text: '扶梯把嘉咸街、荷李活道、士丹頓街等街道串成一條可步行的軸線，遊客更容易把街市、古蹟與餐飲安排在同一趟行程。' },
              { title: 'SoHo 與中環舊城', text: '中段附近的餐飲與歷史建築，讓「搭扶梯」逐漸與「逛中環舊城」結合；但這些場所各有自己的開放安排，並不隸屬扶梯系統。' },
              { title: '方向仍保留通勤邏輯', text: '上午下行、其後上行的安排，反映的仍是居民往返中環與半山的通勤型態，而不是專為觀光設計的雙向服務。' },
            ],
          },
          {
            heading: '查證與閱讀建議',
            paragraphs: [
              '想核對年份、構成與管理單位，請直接查閱運輸署的上山扶梯系統頁面；旅發局頁面則較適合理解路線與遊覽角度。兩個官方頁對上行起始時刻的列示不同，本站並列而不代為調和。',
              '本頁資料整理日為 2026-11-09。歷史事實與現時營運狀態是兩回事：例行維護、方向與臨時安排仍須查運輸署交通通告與現場告示。',
            ],
          },
        ],
        faqs: [
          {
            q: '中環半山扶手電梯是哪一年啟用的？',
            a: '運輸署資料記錄系統於 1993 年啟用。這與個別路段後續的翻新、維護或活化工程是不同層次的事件，本站不把它們混為單一日期。',
          },
          {
            q: '扶梯是為了觀光而建嗎？',
            a: '主要目的為改善中環與半山之間的高差通勤，之後才成為遊客常去的城市景點。上午下行、其後上行的方向安排仍反映通勤型態。',
          },
          {
            q: '誰負責管理扶梯？',
            a: '運輸署資料列出機電工程署為管理單位。沿線各場所、商戶與場館則各有自己的管理方，不能一概而論。',
          },
          {
            q: '有沒有官方的建設費用或載客量數字？',
            a: '本站未取得可核對的官方數字，因此不列。需要這類資料時，建議直接向運輸署或相關政府部門查閱原始文件。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalator and Walkway System history Hong Kong',
      },
      en: {
        meta: {
          title: 'History of the Central–Mid-Levels Escalators | Opened 1993',
          description: 'Why Hong Kong built a hillside escalator system: its 1993 opening, the Queen’s Road Central to Conduit Road commuter link, management by EMSD, and how the route became part of an old-town walking area.',
        },
        kicker: 'HISTORY',
        h1: 'Why does Central have an escalator up the hill?',
        lead: 'It was built to solve a height difference between Central and the Mid-Levels, and only later became a visitor attraction. Transport Department material records a 1993 opening, a link from the Queen’s Road Central area to Conduit Road, and management by the Electrical and Mechanical Services Department.',
        facts: [
          { label: 'Opened', value: '1993 (Transport Department)' },
          { label: 'Official name', value: 'Central-Mid-Levels Escalator and Walkway System' },
          { label: 'Managed by', value: 'Electrical and Mechanical Services Department' },
          { label: 'Route', value: "Queen's Road Central → Conduit Road" },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'A pedestrian system built for commuters',
            paragraphs: [
              'There is a substantial height difference between the Central business district and residential Mid-Levels, and the streets between them are steep and stepped. The system lets residents move between the two without climbing the whole way, linking previously separate streets with covered escalators, moving walkways and footbridges.',
              'That is the fundamental difference from a shopping-centre escalator: it is public pedestrian infrastructure, not the entrance to one building. It also explains the many street connections and why the direction changes to match commuting patterns.',
            ],
          },
          {
            heading: 'What can and cannot be stated',
            table: {
              caption: 'Limited to published official material; unverified details are not filled in',
              columns: ['Item', 'How this guide states it', 'Reason'],
              rows: [
                ['Opening year', '1993', 'Listed by the Transport Department'],
                ['Composition', '16 escalators, 3 moving walkways', 'Listed by the Transport Department'],
                ['Management', 'Electrical and Mechanical Services Department', 'Listed by the Transport Department'],
                ['Construction cost, capacity', 'No figures', 'No verifiable official figures obtained'],
                ['Film locations and urban anecdotes', 'Not presented as fact', 'Popular culture, not transport records'],
              ],
            },
          },
          {
            heading: 'From infrastructure to a walking district',
            bullets: [
              { title: 'The streets along it became easier to visit', text: 'The route links Graham Street, Hollywood Road and Staunton Street into a walkable axis, making it simpler to combine a market, heritage buildings and a meal in one outing.' },
              { title: 'SoHo and old-town Central', text: 'Dining and historic buildings near the middle sections turned a ride into a neighbourhood walk. Those places have their own opening arrangements and are not part of the escalator system.' },
              { title: 'Direction still follows commuting', text: 'Downhill in the morning and uphill afterwards reflects residents travelling between Central and the Mid-Levels, rather than a two-way sightseeing service.' },
            ],
          },
          {
            heading: 'Sources and how to read them',
            paragraphs: [
              'For the year, composition and management, use the Transport Department’s hillside escalator page; the Tourism Board page is better for route and visitor context. The two official pages list different uphill start times, so both are shown here rather than reconciling them.',
              'This page was compiled on 2026-11-09. Historical facts and current operations are separate matters: routine maintenance, direction and temporary arrangements still require Transport Department notices and on-site signs.',
            ],
          },
        ],
        faqs: [
          {
            q: 'When did the Central–Mid-Levels Escalators open?',
            a: 'Transport Department material records a 1993 opening. Later refurbishment, maintenance or revitalisation of individual sections are separate events and are not folded into that single date here.',
          },
          {
            q: 'Was it built for tourists?',
            a: 'Its main purpose was to ease movement across the height difference between Central and the Mid-Levels; it became a visitor attraction later. The morning downhill and later uphill pattern still reflects commuting.',
          },
          {
            q: 'Who manages the escalators?',
            a: 'Transport Department material lists the Electrical and Mechanical Services Department. Venues, businesses and heritage sites along the route have their own operators and should not be grouped under one manager.',
          },
          {
            q: 'Are there official construction cost or capacity figures?',
            a: 'None are listed here because no verifiable official figures were obtained. Consult the Transport Department or relevant government departments for primary documents.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalator and Walkway System history Hong Kong',
      },
    },
  },
  {
    slug: 'architecture',
    group: 'culture',
    title: { zh: '建築與工程特色', en: 'Architecture & engineering' },
    related: ['history', 'interesting-facts', 'rainy-day-guide', 'route-map'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯建築與工程特色｜分段扶梯、有蓋步道與地形',
          description: '從地形與街道網絡理解中環半山扶手電梯的工程特色：16 條扶梯與 3 條自動行人道分段串接、有蓋通道與天橋、街道連接點，以及為什麼它不是一條連續單體扶梯。',
        },
        kicker: 'ARCHITECTURE',
        h1: '一套順著山坡與街道生長的行人系統',
        lead: '與其把它想成一件「建築作品」，不如把它看成沿既有街道鋪設的公共交通設施：多段扶梯、自動行人道、天橋與平台，配合中環密集的街巷與高低差連成一條上山的動線。',
        facts: [
          { label: '官方所列構成', value: '16 條扶梯 · 3 條自動行人道' },
          { label: '其他連接', value: '天橋、平台與街道接口' },
          { label: '全長', value: '約 800 米（運輸署資料）' },
          { label: '地形', value: '中環至半山的斜坡與樓梯' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '為什麼要分段，而不是一條到底',
            paragraphs: [
              '中環舊城的街巷並不是一條筆直上山的軸線，沿途還要讓行人能在不同街道進出。若做成單一連續扶梯，就無法兼顧橫向街道的連通與原有樓宇；分段設計讓每一段都可以對接一條街、一個平台或一座天橋。',
              '運輸署所描述的「系統」正包含這些元素：16 條扶手電梯與 3 條自動行人道，輔以行人連接設施，構成全長約 800 米的路線。',
            ],
          },
          {
            heading: '可以實地觀察的特色',
            bullets: [
              { title: '有蓋通道', text: '扶梯與部分行人道設有上蓋，遮擋日曬與雨水；但進出連接點、橫街與街道兩側仍屬露天，不能假設全程不受天氣影響。' },
              { title: '街道交會處的開口', text: '扶梯在穿越橫街時留出街道連接位置，形成「搭一段、走出來、再搭一段」的節奏，這也是出入口指南要按路段說明的原因。' },
              { title: '坡度與平台', text: '由下段往上，街道坡度與樓宇密度逐步改變；平台與自動行人道用來銜接不同高差，而不是把所有落差集中在一條扶梯上。' },
              { title: '與舊城建築並存', text: '沿線既有歷史建築、街市，也有現代商廈與住宅，系統是加在既有城市紋理之上，而非重建一條專用大道。' },
            ],
          },
          {
            heading: '工程描述與誤解對照',
            table: {
              caption: '依官方描述與現場可觀察特徵整理；不列未核實的規格數字',
              columns: ['常見說法', '較準確的理解', '備註'],
              rows: [
                ['「全球最長扶梯」', '系統全長約 800 米，由多段設備組成', '不是單一條扶梯的長度'],
                ['「全程有蓋」', '扶梯與部分行人道有上蓋，街道接口露天', '雨天仍會淋濕'],
                ['「直達山頂」', '終點一帶為干德道、半山住宅區', '山頂另需交通'],
                ['「24 小時雙向」', '按時段單向，官方列至午夜', '以現場方向燈為準'],
              ],
            },
          },
          {
            heading: '查證範圍',
            paragraphs: [
              '本頁不提供扶梯速度、載客量、結構荷載、上蓋物料或施工方法等工程規格，因為本站未取得可核對的官方技術文件。想深入了解者，建議查閱運輸署與機電工程署的公開資料。',
              '同樣地，個別路段的維護、升降機與上蓋狀況會變，應以運輸署交通通告與現場告示為準；本頁資料整理日為 2026-11-09。',
            ],
          },
        ],
        faqs: [
          {
            q: '它是全世界最長的扶手電梯嗎？',
            a: '更準確的說法是「由多段設備組成、全長約 800 米的系統」。運輸署資料列出 16 條扶梯與 3 條自動行人道，因此不應把它當成單一條扶梯的長度紀錄。',
          },
          {
            q: '整套系統都有上蓋嗎？',
            a: '不是。扶梯與部分自動行人道設有上蓋，但街道連接點、橫街與周邊行人路屬露天；遇雨仍需要雨具與防滑安排。',
          },
          {
            q: '為什麼中途要走出來？',
            a: '系統沿既有街道鋪設，需要讓行人能在不同街口進出，也要避開原有樓宇；分段設計配合了橫向街道與高差，而不是把所有路段連成一條直線。',
          },
          {
            q: '有官方的工程規格嗎？',
            a: '本站未取得可核對的技術文件，故不列速度、載客量或結構規格。請向運輸署與機電工程署查閱原始公開資料。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalator Walkway System footbridge Hong Kong',
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators Architecture | Sections, Covered Walkways & Terrain',
          description: 'Why the Central–Mid-Levels Escalators are a system of 16 escalators, 3 moving walkways, footbridges and street connections rather than one continuous escalator, and what is actually covered from the weather.',
        },
        kicker: 'ARCHITECTURE',
        h1: 'A pedestrian system shaped by the hill and its streets',
        lead: 'Rather than a single architectural object, think of it as public transport infrastructure laid over existing streets: separate escalator sections, moving walkways, footbridges and landings that follow Central’s dense lanes and changing levels uphill.',
        facts: [
          { label: 'Published composition', value: '16 escalators · 3 walkways' },
          { label: 'Other links', value: 'Footbridges, landings, street interfaces' },
          { label: 'Length', value: 'About 800 m (Transport Department)' },
          { label: 'Terrain', value: 'Slopes and steps up to the Mid-Levels' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Why it is built in sections',
            paragraphs: [
              'Old-town Central is not a straight axis up the hill, and pedestrians need to enter and leave at different streets. One continuous escalator would not preserve cross-street links or fit the existing buildings; separate sections can each meet a street, a landing or a footbridge.',
              'That is exactly what the Transport Department describes as a system: 16 escalators and 3 moving walkways supported by pedestrian links, forming a route of roughly 800 m.',
            ],
          },
          {
            heading: 'Features you can observe on site',
            bullets: [
              { title: 'Covered sections', text: 'Escalators and some walkways are covered against sun and rain, but street interfaces, cross streets and pavements are open. Do not assume the whole route is weatherproof.' },
              { title: 'Openings at street crossings', text: 'Where the route crosses a street there is a way out, creating a ride–step out–ride again rhythm. That is why the entrance and exit guides are organised by section.' },
              { title: 'Gradients and landings', text: 'Street gradients and building density change as you climb. Landings and moving walkways bridge level differences instead of concentrating them in one escalator.' },
              { title: 'Layered onto the old town', text: 'Historic buildings, a market, modern offices and housing sit alongside the route. The system was added to an existing urban fabric rather than replacing it with a dedicated boulevard.' },
            ],
          },
          {
            heading: 'Common claims and more accurate readings',
            table: {
              caption: 'Based on published descriptions and observable features; no unverified specifications',
              columns: ['Common claim', 'More accurate reading', 'Note'],
              rows: [
                ['“The world’s longest escalator”', 'A system about 800 m long made of separate devices', 'Not one escalator’s length'],
                ['“Covered all the way”', 'Escalators and some walkways are covered; street links are open', 'You can still get wet'],
                ['“Goes to the Peak”', 'The upper end is Conduit Road in the Mid-Levels', 'The Peak needs other transport'],
                ['“24-hour, two-way”', 'One way by time of day, listed until midnight', 'Follow direction signs'],
              ],
            },
          },
          {
            heading: 'Scope of verification',
            paragraphs: [
              'No escalator speed, capacity, structural loading, canopy materials or construction method figures are given here, as no verifiable official technical documents were obtained. Consult Transport Department and EMSD material for engineering detail.',
              'Maintenance, lifts and canopy conditions on individual sections also change; use Transport Department traffic notices and on-site signs. This page was compiled on 2026-11-09.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Is it the longest escalator in the world?',
            a: 'It is more accurate to call it a roughly 800 m system made of separate devices. The Transport Department lists 16 escalators and 3 moving walkways, so it should not be treated as one escalator length record.',
          },
          {
            q: 'Is the whole route covered?',
            a: 'No. Escalators and some moving walkways are covered, but street connections, cross streets and surrounding pavements are open; bring rain protection and take care on wet surfaces.',
          },
          {
            q: 'Why do you have to step out part-way?',
            a: 'The system follows existing streets and must allow people to enter and leave at different junctions while avoiding existing buildings. Separate sections fit the cross streets and level changes rather than forming one straight line.',
          },
          {
            q: 'Are official engineering specifications available?',
            a: 'None are listed here because no verifiable technical documents were obtained. Consult the Transport Department and EMSD for primary published material.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalator Walkway System footbridge Hong Kong',
      },
    },
  },
  {
    slug: 'interesting-facts',
    group: 'culture',
    title: { zh: '十大特色', en: 'Ten facts' },
    related: ['history', 'architecture', 'best-time-to-visit', 'visitor-faq'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯十大特色｜系統結構、方向與城市生活',
          description: '十項可核對的特色：1993 年啟用、16 條扶梯與 3 條自動行人道、約 800 米、按時段單向、免費、連接皇后大道中至干德道、終點不是山頂，以及沿線街區與管理單位。',
        },
        kicker: 'TEN FACTS',
        h1: '關於這套扶梯系統的十件事',
        lead: '以下十點以運輸署與旅發局的公開資料為界，未核實的數字、都市傳說與電影橋段一概不列入。看完可以快速判斷這套系統究竟是什麼、又不是什麼。',
        facts: [
          { label: '啟用', value: '1993 年' },
          { label: '構成', value: '16 扶梯 · 3 自動行人道' },
          { label: '全長', value: '約 800 米' },
          { label: '收費', value: '免費' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '十項特色',
            bullets: [
              { title: '01 · 它是一套「系統」', text: '運輸署稱之為中環至半山自動扶梯系統，由多段設備與行人連接設施組成，不是一條單體扶梯。' },
              { title: '02 · 1993 年啟用', text: '運輸署資料記錄 1993 年啟用，原本為改善中環與半山之間的高差通勤。' },
              { title: '03 · 16 條扶梯、3 條自動行人道', text: '這是官方所列的主要構成，另有天橋、平台與街道連接點。' },
              { title: '04 · 全長約 800 米', text: '指整個系統的路線長度，而非單一條扶梯，也不代表固定的乘搭時間。' },
              { title: '05 · 方向按時段切換', text: '上午下行往中環，其後上行往半山；運輸署與旅發局對上行起始時刻的列示相差 20 分鐘。' },
              { title: '06 · 免費使用', text: '這是公共行人系統，沒有閘機與車票；周邊場館、餐飲與山頂纜車的收費另計。' },
              { title: '07 · 由皇后大道中到干德道', text: '旅發局以皇后大道中描述起點，干德道為官方所述的終點一帶，位於半山住宅區。' },
              { title: '08 · 終點不是太平山頂', text: '要到山頂需另外規劃交通與票務，不應把扶梯當成登山頂纜車的路線。' },
              { title: '09 · 沿線串起中環舊城', text: '嘉咸街、荷李活道、士丹頓街、大館、PMQ、文武廟與 SoHo 都在步行可及的街區範圍，但各有自己的開放安排。' },
              { title: '10 · 由機電工程署管理', text: '運輸署列出管理單位；例行維護與臨時安排則見運輸署交通通告與現場告示。' },
            ],
          },
          {
            heading: '三個「不是」',
            table: {
              caption: '協助遊客快速排除常見誤解',
              columns: ['容易被誤以為', '實際上', '規劃上要注意'],
              rows: [
                ['單一條超長扶梯', '多段設備組成的系統', '按路段選進出點'],
                ['往返觀光纜車', '按時段單向的公共設施', '先安排回程'],
                ['通往太平山頂', '止於半山干德道一帶', '山頂另行規劃'],
              ],
            },
          },
          {
            heading: '資料邊界',
            paragraphs: [
              '本頁不列建設費用、載客量、扶梯速度、電影取景或「全球之最」式的絕對排名。這類說法需要可核對的原始資料，本站未取得時選擇不寫，而不是以推測補足。',
              '評分與評論數屬 Google Maps 的外部日期快照，不是本站收集的評價；本頁所列均為設施與路線事實，兩者性質不同。',
            ],
          },
        ],
        faqs: [
          {
            q: '這套系統有多少條扶梯？',
            a: '運輸署資料列出 16 條扶手電梯與 3 條自動行人道，另有天橋與街道連接設施，合組為全長約 800 米的路線。',
          },
          {
            q: '搭乘需要付費嗎？',
            a: '不需要，這是免費的公共行人系統。周邊場館展覽、餐飲與其他交通工具的收費與扶梯無關。',
          },
          {
            q: '可以一路搭到太平山頂嗎？',
            a: '不可以。系統終點一帶是半山干德道，前往山頂需另行查證交通與票務安排。',
          },
          {
            q: '為什麼兩個官方頁的上行時間不一樣？',
            a: '運輸署列 10:00 起始、旅發局列 10:20，本站並列兩種說法，不把中間 20 分鐘寫成已確認的全線停運；請以現場方向燈與通告為準。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hong Kong facts',
      },
      en: {
        meta: {
          title: '10 Facts About the Central–Mid-Levels Escalators | System, Direction & City Life',
          description: 'Ten verifiable facts: opened 1993, 16 escalators and 3 moving walkways, about 800 m, one-way by time of day, free, Queen’s Road Central to Conduit Road, not reaching Victoria Peak, plus the streets and managing authority.',
        },
        kicker: 'TEN FACTS',
        h1: 'Ten things to know about the escalator system',
        lead: 'These ten points stay within published Transport Department and Tourism Board material. Unverified figures, urban legends and film trivia are left out. Together they show what the system is — and what it is not.',
        facts: [
          { label: 'Opened', value: '1993' },
          { label: 'Composition', value: '16 escalators · 3 walkways' },
          { label: 'Length', value: 'About 800 m' },
          { label: 'Fare', value: 'Free' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'The ten facts',
            bullets: [
              { title: '01 · It is a system', text: 'The Transport Department calls it the Central-Mid-Levels Escalator and Walkway System: separate devices plus pedestrian links, not one escalator.' },
              { title: '02 · Opened in 1993', text: 'Transport Department material records a 1993 opening, intended to ease movement across the height difference between Central and the Mid-Levels.' },
              { title: '03 · 16 escalators, 3 moving walkways', text: 'That is the published main composition, alongside footbridges, landings and street connections.' },
              { title: '04 · About 800 m long', text: 'The length of the whole system, not one escalator, and not a fixed ride duration.' },
              { title: '05 · Direction changes by time of day', text: 'Downhill to Central in the morning, uphill afterwards; the Transport Department and Tourism Board list uphill start times 20 minutes apart.' },
              { title: '06 · Free to use', text: 'It is public pedestrian infrastructure with no gates or tickets. Nearby venues, dining and the Peak Tram are charged separately, if at all.' },
              { title: '07 · Queen’s Road Central to Conduit Road', text: 'The Tourism Board describes Queen’s Road Central as the start; Conduit Road is the published upper end, in a residential Mid-Levels area.' },
              { title: '08 · It does not reach Victoria Peak', text: 'The Peak requires separate transport and ticketing; the escalators are not a route to the Peak Tram.' },
              { title: '09 · It threads through old-town Central', text: 'Graham Street, Hollywood Road, Staunton Street, Tai Kwun, PMQ, Man Mo Temple and SoHo are all in the surrounding walkable area, each with its own opening arrangements.' },
              { title: '10 · Managed by EMSD', text: 'The Transport Department lists the managing authority; routine maintenance and temporary arrangements appear in Transport Department notices and on-site signs.' },
            ],
          },
          {
            heading: 'Three things it is not',
            table: {
              caption: 'Quick checks against common misunderstandings',
              columns: ['Often assumed', 'Actually', 'Planning implication'],
              rows: [
                ['One giant escalator', 'A system of separate sections', 'Choose entry and exit by section'],
                ['A round-trip sightseeing ride', 'One-way public infrastructure', 'Plan the return first'],
                ['A route to Victoria Peak', 'Ends around Conduit Road in the Mid-Levels', 'Plan the Peak separately'],
              ],
            },
          },
          {
            heading: 'Limits of the data',
            paragraphs: [
              'No construction cost, capacity, escalator speed, film locations or absolute “world’s longest” ranking is listed here. Those claims need verifiable primary sources, and this guide leaves them out rather than filling gaps with inference.',
              'Ratings and review counts are a dated external snapshot from Google Maps, not reviews collected here. This page deals only with facility and route facts, which are a different kind of information.',
            ],
          },
        ],
        faqs: [
          {
            q: 'How many escalators are there?',
            a: 'Transport Department material lists 16 escalators and 3 moving walkways, together with footbridges and street links, forming a route of roughly 800 m.',
          },
          {
            q: 'Is there a fare?',
            a: 'No. It is a free public pedestrian system. Charges at nearby venues, restaurants or other transport are unrelated to the escalators.',
          },
          {
            q: 'Can I ride all the way to Victoria Peak?',
            a: 'No. The published upper end is around Conduit Road in the Mid-Levels; reaching the Peak requires separate transport and ticketing.',
          },
          {
            q: 'Why do two official pages give different uphill start times?',
            a: 'The Transport Department lists 10:00 and the Tourism Board 10:20. Both are shown here, and the gap is not described as a confirmed system-wide shutdown; follow direction signs and notices on site.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hong Kong facts',
      },
    },
  },
  {
    slug: 'photography',
    group: 'culture',
    title: { zh: '拍照攻略', en: 'Photography' },
    related: ['best-time-to-visit', 'nearby/graham-street', 'interesting-facts', 'rainy-day-guide'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯拍照攻略｜構圖、時段與安全機位',
          description: '整理扶梯內部構圖、街道交叉口城市景觀、SoHo 沿途建築與夜景拍攝建議，並說明避開出入口、私人住宅與限制範圍的安全與禮儀要點。',
        },
        kicker: 'PHOTOGRAPHY',
        h1: '在扶梯與舊城街巷之間找畫面',
        lead: '這套系統最值得拍的，往往不是扶梯本身，而是它穿過中環街道時形成的層次：有蓋通道的線條、橫街的坡度、舊建築與現代樓宇並置。拍攝前先確認自己站在不阻礙通道的位置。',
        facts: [
          { label: '主要題材', value: '扶梯線條 · 橫街坡度 · 舊城建築' },
          { label: '光線差異', value: '日間街景／夜間燈光各有取捨' },
          { label: '安全底線', value: '不在出入口停留、不進私人範圍' },
          { label: '照片來源', value: '本站僅使用既有已發布圖片' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '四類可以嘗試的構圖',
            bullets: [
              { title: '扶梯內部的線條', text: '扶手、踏級與上蓋形成重複的透視線，適合由通道側邊取景；請靠邊站穩，不要逆向行走或停在踏級中央。' },
              { title: '街道交叉口', text: '扶梯穿越橫街的位置能同時拍到有蓋通道與中環斜路，是最能說明「這是城市設施」的角度；留意來車與其他行人。' },
              { title: 'SoHo 沿途建築', text: '中段附近的士丹頓街、伊利近街一帶有新舊建築並置的街景，適合搭配街道坡度與招牌取景；拍攝商戶外觀時避免妨礙營業。' },
              { title: '夜景與燈光', text: '入夜後街道燈光與扶梯照明形成對比，但光線較暗、人流方向改變，宜先選定站位並縮短停留時間。' },
            ],
          },
          {
            heading: '時段與題材的取捨',
            table: {
              caption: '一般性拍攝建議，非官方開放或人流量保證',
              columns: ['時段特性', '較容易處理的題材', '需要注意'],
              rows: [
                ['上午', '下行方向、通勤街景', '人流較集中，勿在出入口停留'],
                ['日間', '建築細節、橫街坡度', '日曬與反光，注意行人動線'],
                ['傍晚', '街燈亮起前後的層次', '光線變化快，先測好曝光'],
                ['夜間', '燈光、扶梯照明', '留意隨身物品與回程交通'],
              ],
            },
          },
          {
            heading: '安全與禮儀',
            bullets: [
              { title: '離開出入口再拍照', text: '出入口與踏級是通道，停下來舉機或回看照片會擋住後面的人；先走到街道旁或平台邊。' },
              { title: '不進入私人住宅與限制範圍', text: '上段為住宅區，樓宇入口、管理平台與設有圍欄的位置不屬公共拍攝範圍。' },
              { title: '尊重商戶與路人', text: '拍攝店舖外觀、店員或近距離人像前先徵得同意；不要以三腳架或大型器材佔用行人路。' },
              { title: '雨天與濕滑', text: '有蓋路段不等於全程乾爽，街道接口會濕滑；護好器材，避免在斜路上退後取景。' },
            ],
          },
          {
            heading: '關於本站圖片',
            paragraphs: [
              '本站沿用已發布的照片，並在圖說註明為歷史照片裁切與拍攝日期，不用示意圖冒充當日現況。本頁不新增未核實來源的實拍照片，也不對照片版權另作判斷。',
              '如果你要拍的是特定場所（例如大館、PMQ 或中環街市），請以各場所的拍攝規定為準，並參考對應的附近景點專題。',
            ],
          },
        ],
        faqs: [
          {
            q: '可以在扶梯上停下來拍照嗎？',
            a: '不建議。出入口與踏級是通道，停下來會阻礙其他人；請先走出連接點，在街道旁或平台邊取景，並跟從現場指示。',
          },
          {
            q: '什麼時間最適合拍扶梯？',
            a: '沒有單一最佳時段。上午有通勤街景、日間適合建築細節、夜間有燈光層次，但人流、光線與各段狀態會變；本站不保證任何時段的人流或開放情況。',
          },
          {
            q: '可以拍沿線住戶與店舖嗎？',
            a: '拍攝私人住宅、管理平台與商戶內部前須先取得同意；上段為住宅區，請勿進入限制範圍或長時間對着住戶窗口取景。',
          },
          {
            q: '下雨天還能拍嗎？',
            a: '可以，但要留意有蓋路段以外的街道接口會濕滑，並保護器材；遇暴雨或天文台警告時應以安全為先，不要為了取景停留在斜路上。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hollywood Road photography Hong Kong',
      },
      en: {
        meta: {
          title: 'Photographing the Central–Mid-Levels Escalators | Angles, Light & Safety',
          description: 'Composition ideas for the escalator interior, street crossings, SoHo buildings and night scenes, plus the safety and etiquette of keeping landings clear and staying out of private or restricted areas.',
        },
        kicker: 'PHOTOGRAPHY',
        h1: 'Finding frames between the escalators and the old streets',
        lead: 'The strongest images are often not of the escalator itself but of the layers it creates as it crosses Central: covered lines, sloping side streets, old buildings beside modern towers. Before shooting, make sure you are standing where you do not block the flow.',
        facts: [
          { label: 'Main subjects', value: 'Escalator lines · sloping streets · old-town buildings' },
          { label: 'Light', value: 'Daytime streets / night lighting trade-offs' },
          { label: 'Safety baseline', value: 'Keep landings clear; no private areas' },
          { label: 'Site images', value: 'Only existing published photos are used' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Four kinds of composition to try',
            bullets: [
              { title: 'Lines inside the escalator', text: 'Handrails, steps and the canopy create repeating perspective lines. Shoot from the side while standing steady; do not walk against the flow or stop in the middle of the steps.' },
              { title: 'At street crossings', text: 'Where the route crosses a side street you can frame the covered section together with a sloping Central road — the clearest way to show it as urban infrastructure. Watch for traffic and other pedestrians.' },
              { title: 'SoHo buildings along the way', text: 'Around Staunton and Elgin Street, older and newer buildings sit side by side; combine gradients and shopfronts, without obstructing businesses.' },
              { title: 'Night and lighting', text: 'After dark, street lighting contrasts with the escalator lighting, but it is dimmer and crowd patterns change. Pick your position first and keep the stop short.' },
            ],
          },
          {
            heading: 'Trade-offs by time of day',
            table: {
              caption: 'General shooting guidance; not an official opening or crowd guarantee',
              columns: ['Time character', 'Subjects that work well', 'Watch for'],
              rows: [
                ['Morning', 'Downhill direction, commuter streets', 'Busier flow; do not stop at landings'],
                ['Daytime', 'Building details, sloping side streets', 'Sun and reflections; keep pedestrian routes clear'],
                ['Dusk', 'Layers as street lights come on', 'Fast-changing light; set exposure in advance'],
                ['Night', 'Lighting and illuminated sections', 'Belongings and your return transport'],
              ],
            },
          },
          {
            heading: 'Safety and etiquette',
            bullets: [
              { title: 'Step off before shooting', text: 'Entry points and steps are passageways. Move to the side of the street or a landing edge before raising a camera or reviewing shots.' },
              { title: 'Stay out of private and restricted areas', text: 'The upper section is residential; building entrances, management platforms and fenced areas are not public shooting space.' },
              { title: 'Respect businesses and passers-by', text: 'Ask before photographing a shopfront closely, staff or identifiable people, and do not occupy the pavement with tripods or large equipment.' },
              { title: 'Rain and wet surfaces', text: 'Covered sections do not mean a dry route; street interfaces get slippery. Protect your gear and avoid stepping backwards for a frame on a slope.' },
            ],
          },
          {
            heading: 'About this site’s images',
            paragraphs: [
              'This site keeps its existing published photos, captioned as cropped historical images with a shooting date, rather than presenting illustrative shots as current conditions. This page adds no unverified photographs and makes no new copyright claims.',
              'If you plan to shoot a specific venue such as Tai Kwun, PMQ or Central Market, follow that venue’s photography rules and see the matching nearby-attraction guide.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Can I stop on the escalator to take a photo?',
            a: 'It is not advisable. Landings and steps are passageways and stopping blocks others. Step out at a street connection and shoot from the side, following on-site signs.',
          },
          {
            q: 'What is the best time to photograph it?',
            a: 'There is no single best time. Morning offers commuter scenes, daytime suits architectural detail, and night adds lighting — but crowds, light and section status vary, and no conditions are guaranteed here.',
          },
          {
            q: 'Can I photograph residents and shops along the route?',
            a: 'Ask before photographing private homes, management areas, shop interiors or identifiable people. The upper section is residential; do not enter restricted areas or linger at windows.',
          },
          {
            q: 'Is it worth shooting in the rain?',
            a: 'It can be, but street interfaces outside the covered sections become slippery and gear needs protection. In heavy rain or when Observatory warnings are in force, put safety first and avoid lingering on slopes.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hollywood Road photography Hong Kong',
      },
    },
  },
  {
    slug: 'best-time-to-visit',
    group: 'culture',
    title: { zh: '最佳遊覽時間', en: 'Best time to visit' },
    related: ['uphill-downhill', 'photography', 'itinerary/soho-evening', 'rainy-day-guide'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯最佳遊覽時間｜上午、下午與夜晚差別',
          description: '按上午下行、日間上行與夜間三個時段比較中環半山扶手電梯的遊覽差異，包括方向、人流型態、光線與回程考量，並提醒兩個官方頁對上行起始時刻列示不同。',
        },
        kicker: 'BEST TIME',
        h1: '上午、下午還是晚上去？',
        lead: '「最佳時間」主要取決於你想配合哪個方向、想逛哪些街道，以及打算怎麼回中環。本站不保證任何時段的人流或全線可用，只把各時段可預期的差異列出，讓你按自己的行程取捨。',
        facts: [
          { label: '上午', value: '06:00–10:00 下行往中環' },
          { label: '日間至夜間', value: '上行往半山（起始見官方差異）' },
          { label: '官方列示結束', value: '至午夜，以現場告示為準' },
          { label: '不保證', value: '人流量、全線同時可用、天氣' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '三個時段的實際差別',
            table: {
              caption: '依官方方向列示與一般街區特性整理；非人流或營業保證',
              columns: ['時段', '方向與街區狀態', '適合的安排', '要注意'],
              rows: [
                ['上午', '下行往中環，通勤型態較明顯', '由半山往下，接中環街市與早餐', '運輸署與旅發局對何時轉上行有不同列示'],
                ['下午', '上行往半山，沿線街道與餐飲較活躍', '由下段加入、在中段離開逛舊城', '斜路與人流，停留點要預先選定'],
                ['晚上', '上行服務官方列至午夜', 'SoHo 晚餐後散步或看燈光', '先定回程，商戶與交通安排會變'],
              ],
            },
          },
          {
            heading: '按目的選時段',
            bullets: [
              { title: '只想快速搭一段', text: '選與你行程方向一致的時段，在下段進出即可，不必追求走完整條路線；30 分鐘行程專題提供一個可行框架。' },
              { title: '想串連大館、PMQ 與文武廟', text: '日間較容易配合場所開放與街區步行；但各場所開放安排須自行查證，本站不代為保證。' },
              { title: '想拍街景與燈光', text: '日間適合建築細節，傍晚與夜間適合燈光層次；詳細構圖與安全提醒見拍照攻略。' },
              { title: '想避開擁擠', text: '本站沒有實時人流資料，不提供「幾點一定人少」的建議；避開通勤方向與出入口停留，比猜測時段更實際。' },
            ],
          },
          {
            heading: '兩個必須保留的但書',
            paragraphs: [
              '第一，運輸署列上行由 10:00 開始，旅發局列 10:20，兩個官方頁的起始時刻不同。本站並列而不推算，也不把 10:00–10:20 寫成已確認的全線停運；請以現場方向燈與管理方告示為準。',
              '第二，運輸署交通通告可能列出個別扶梯段的例行維護與臨時安排。即使在你選定的時段，一段可用也不代表其餘各段可用；出發前查看通告與資料更新日期，比依賴固定時刻表可靠。',
            ],
          },
          {
            heading: '季節與天氣',
            paragraphs: [
              '香港夏季炎熱多雨，冬季較乾燥；系統有蓋路段能提供遮蔽，但街道接口與周邊行人路仍暴露於天氣。遇暴雨、颱風信號或酷熱警告，請查香港天文台並縮短行程。',
              '本頁不提供氣溫、降雨量或人潮統計數字，因為本站沒有即時氣象與人流監測；季節判斷請以官方氣象資訊為準。',
            ],
          },
        ],
        faqs: [
          {
            q: '幾點去中環半山扶手電梯最好？',
            a: '沒有單一答案。上午為下行、日間至夜間為上行，差別主要在方向與街區狀態；請按你想逛的場所、拍攝需求與回程安排決定。',
          },
          {
            q: '什麼時段人最少？',
            a: '本站沒有實時人流資料，不提供「某時段一定人少」的保證。避開通勤方向與在出入口停留，比猜測時段更實際。',
          },
          {
            q: '晚上去還能搭嗎？',
            a: '兩個官方來源都列上行服務至午夜，但這不是即時保證；個別路段維護、現場告示與周邊交通安排都要另行確認，並先定回程。',
          },
          {
            q: '10:00 到 10:20 去會不會撲空？',
            a: '本站沒有資料證實存在固定的全線停運區間。兩個官方頁對上行起始列示不同，請按現場方向燈與運輸署交通通告判斷，不要按固定分鐘等待。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators opening hours Hong Kong',
      },
      en: {
        meta: {
          title: 'Best Time to Visit the Central–Mid-Levels Escalators | Morning, Afternoon & Night',
          description: 'Compare morning downhill, daytime uphill and evening visits to the Central–Mid-Levels Escalators: direction, street activity, light and return planning, with the official difference in uphill start times kept intact.',
        },
        kicker: 'BEST TIME',
        h1: 'Morning, afternoon or evening?',
        lead: 'The best time depends on the direction you need, the streets you want to visit and how you plan to return to Central. This site does not guarantee crowd levels or that every section is available; it sets out the practical differences so you can choose.',
        facts: [
          { label: 'Morning', value: '06:00–10:00 downhill to Central' },
          { label: 'Day to night', value: 'Uphill (start differs by source)' },
          { label: 'Listed end', value: 'Midnight; check on-site notices' },
          { label: 'Not guaranteed', value: 'Crowds, all sections, weather' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'How the three parts of the day differ',
            table: {
              caption: 'Based on published directions and general neighbourhood character; no crowd or business-hours guarantee',
              columns: ['Time', 'Direction and street character', 'Good for', 'Watch for'],
              rows: [
                ['Morning', 'Downhill to Central, a commuter pattern', 'Starting in the Mid-Levels, then Central Market or breakfast', 'Sources differ on when uphill begins'],
                ['Afternoon', 'Uphill, with active streets and dining', 'Joining low, leaving mid-route for old-town Central', 'Slopes and crowds; choose stops in advance'],
                ['Evening', 'Uphill listed until midnight', 'A walk after dinner in SoHo, or lighting shots', 'Settle the return; business and transport hours change'],
              ],
            },
          },
          {
            heading: 'Choose by purpose',
            bullets: [
              { title: 'A short ride', text: 'Pick a time that matches your direction and simply enter and leave in the lower section; you do not need to cover the whole route. The 30-minute itinerary offers a workable frame.' },
              { title: 'Tai Kwun, PMQ and Man Mo Temple', text: 'Daytime is easier to combine with venue visits and street walking, but each venue’s opening arrangements must be checked separately.' },
              { title: 'Street and lighting photography', text: 'Daytime suits architectural detail; dusk and evening suit lighting. See the photography guide for composition and safety.' },
              { title: 'Avoiding crowds', text: 'There is no live crowd data here and no claim that any hour is reliably quiet. Avoiding commuter flows and landings is more practical than guessing a time.' },
            ],
          },
          {
            heading: 'Two caveats worth keeping',
            paragraphs: [
              'First, the Transport Department lists uphill from 10:00 and the Tourism Board from 10:20. Both are shown without calculation, and the 10:00–10:20 gap is not described as a confirmed system-wide shutdown; follow direction signs and operator notices.',
              'Second, Transport Department notices may list routine maintenance and temporary arrangements for individual sections. Even in your chosen window, one available section does not establish the others; check notices and their dates rather than a fixed timetable.',
            ],
          },
          {
            heading: 'Season and weather',
            paragraphs: [
              'Hong Kong summers are hot and wet, winters drier. Covered sections offer shelter, but street interfaces and surrounding pavements remain exposed. In heavy rain, typhoon signals or extreme heat warnings, check the Hong Kong Observatory and shorten the visit.',
              'No temperature, rainfall or crowd statistics are given here because this site has no live weather or crowd monitoring; use official meteorological information for seasonal judgement.',
            ],
          },
        ],
        faqs: [
          {
            q: 'What is the best time to visit the escalators?',
            a: 'There is no single answer. Morning runs downhill, daytime and evening uphill; the difference is mostly direction and street character. Decide based on the places you want, photography and your return plan.',
          },
          {
            q: 'When is it least crowded?',
            a: 'No live crowd data is available here, so no hour is guaranteed to be quiet. Avoiding commuter flows and not stopping at landings is more practical than guessing a time.',
          },
          {
            q: 'Can I still ride in the evening?',
            a: 'Both official sources list uphill service until midnight, but that is not a live guarantee. Check maintenance on individual sections, on-site notices and nearby transport, and settle the return first.',
          },
          {
            q: 'Will it be closed between 10:00 and 10:20?',
            a: 'No fixed system-wide shutdown is evidenced here. The two official pages list different uphill start times, so follow on-site direction signs and Transport Department notices rather than waiting for a specific minute.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators opening hours Hong Kong',
      },
    },
  },
  {
    slug: 'rainy-day-guide',
    group: 'culture',
    title: { zh: '下雨天指南', en: 'Rainy-day guide' },
    related: ['architecture', 'accessibility', 'itinerary/one-hour', 'best-time-to-visit'],
    content: {
      zh: {
        meta: {
          title: '下雨天可以去中環半山扶手電梯嗎｜有蓋路段與天氣安全',
          description: '說明扶梯有蓋路段與露天街道接口的差別、濕滑與樓梯風險、香港天文台警告查詢、暴雨時的替代安排，以及不保證惡劣天氣下全線可用的原因。',
        },
        kicker: 'RAINY DAY',
        h1: '下雨天還適合去搭扶梯嗎？',
        lead: '扶梯與部分自動行人道設有上蓋，但整套系統不是室內景點：進出連接點、橫街與周邊行人路都暴露在天氣中。小雨可以調整行程，暴雨或警告生效時則應以安全與官方資訊為先。',
        facts: [
          { label: '有蓋範圍', value: '扶梯與部分自動行人道' },
          { label: '露天範圍', value: '街道接口、橫街、周邊行人路' },
          { label: '主要風險', value: '濕滑、樓梯、能見度與強風' },
          { label: '天氣查證', value: '香港天文台警告與預報' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '「有蓋」不等於全程乾爽',
            paragraphs: [
              '上蓋能遮擋扶梯踏級與部分行人道，但你仍要走過街道連接點、橫過斜路，並在出入口進出。這些位置最容易濕滑，也最容易因撐傘、穿雨衣而與其他行人互相碰撞。',
              '周邊街道多有樓梯與坡度，雨水會令踏面變滑。輪椅、嬰兒車與長者在雨天尤其不宜把樓梯當作備案，應先規劃升降機與地面替代路線。',
            ],
          },
          {
            heading: '按雨勢調整行程',
            table: {
              caption: '一般性規劃建議；天氣與路段狀態以當日官方資訊為準',
              columns: ['情況', '可以考慮', '應避免'],
              rows: [
                ['微雨', '縮短為下段一小段，選有蓋商場或街市作停留', '在出入口撐傘停留、逆向走動'],
                ['持續降雨', '改以中環街市、大館與 PMQ 等場所為主', '長時間在斜路與樓梯取景'],
                ['暴雨或警告生效', '取消或延後，留在室內並查天文台', '為拍照而停留在露天連接點'],
                ['雨後', '照常但留意濕滑與積水', '假設樓梯與扶梯出入口已完全乾爽'],
              ],
            },
          },
          {
            heading: '出發前與現場的檢查',
            bullets: [
              { title: '查天文台', text: '暴雨、雷暴、颱風信號與酷熱天氣警告都會影響行程；以香港天文台最新公布為準，本站沒有即時天氣資料。' },
              { title: '查運輸署交通通告', text: '例行維護與臨時安排可能令個別路段不可用；雨天再叠加改道，會讓原定進出點失效。' },
              { title: '穿著與裝備', text: '防滑鞋、輕便雨具比大型雨傘更適合狹窄通道；護好手機與相機，避免在斜路上邊走邊看螢幕。' },
              { title: '同行者需要', text: '攜童、輪椅或長者同行時，先選定有升降機與室內停留點的短路線，並把回程交通一併安排。' },
            ],
          },
          {
            heading: '雨天可以做什麼替代',
            paragraphs: [
              '若只想保留「中環舊城」的體驗，可以把行程重心放在有室內空間的場所，例如中環街市、大館或 PMQ 的公共區域；各場所的開放安排、展覽與餐飲營業時間須自行向場方查證。',
              '本站不提供即時營運狀態，也不保證任何路段在惡劣天氣下可用。若當日警告生效，最可靠的做法是縮短或改期，而不是假設有蓋路段足以應付全程。',
            ],
          },
        ],
        faqs: [
          {
            q: '下雨天扶梯會開放嗎？',
            a: '本站沒有即時營運狀態，不提供開放保證。扶梯與部分行人道有上蓋，但街道接口露天；遇暴雨、雷暴或颱風信號，應按香港天文台警告與現場告示決定是否前往。',
          },
          {
            q: '全程都有上蓋嗎？',
            a: '不是。上蓋主要覆蓋扶梯與部分自動行人道，街道連接點、橫街與周邊行人路仍會淋雨，且斜路與樓梯容易濕滑。',
          },
          {
            q: '雨天適合推嬰兒車或輪椅嗎？',
            a: '需要格外審慎。機電工程署指引建議使用升降機而非扶手電梯，而沿線樓梯不是無障礙通道；雨天應先確認升降機與地面替代路線。',
          },
          {
            q: '暴雨時有什麼替代行程？',
            a: '可把重心放在中環街市、大館、PMQ 等有室內空間的場所，並向場方確認當日開放安排；警告生效時建議縮短或改期，不要停留在露天連接點。',
          },
        ],
        mapsQuery: 'Central Market Tai Kwun PMQ Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Visiting the Central–Mid-Levels Escalators in Rain | Covered Sections & Safety',
          description: 'What is actually covered on the escalator route, why street interfaces and steps get slippery, how to check Hong Kong Observatory warnings and Transport Department notices, and which indoor stops work instead.',
        },
        kicker: 'RAINY DAY',
        h1: 'Is a rainy day a good day to ride?',
        lead: 'Escalators and some moving walkways are covered, but the system is not an indoor attraction: street connections, cross streets and surrounding pavements are exposed. Light rain can be planned around; in heavy rain or when warnings are in force, safety and official information come first.',
        facts: [
          { label: 'Covered', value: 'Escalators and some walkways' },
          { label: 'Exposed', value: 'Street links, cross streets, pavements' },
          { label: 'Main risks', value: 'Slips, steps, visibility, wind' },
          { label: 'Weather check', value: 'Hong Kong Observatory warnings' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Covered does not mean dry throughout',
            paragraphs: [
              'Canopies shelter the steps and some walkways, but you still cross street connections, sloping roads and entry points. Those are the places most likely to be slippery and the most awkward when umbrellas and raincoats meet other pedestrians.',
              'Surrounding streets include steps and gradients that become slick in rain. Wheelchair users, pushchairs and older visitors should not treat steps as a wet-weather fallback; plan lifts and street-level alternatives first.',
            ],
          },
          {
            heading: 'Adjust the plan to the rain',
            table: {
              caption: 'General planning guidance; check official weather and section status on the day',
              columns: ['Conditions', 'Consider', 'Avoid'],
              rows: [
                ['Light rain', 'A short lower-section ride with an indoor stop at a mall or market', 'Holding an umbrella at a landing or walking against the flow'],
                ['Persistent rain', 'Focus on Central Market, Tai Kwun or PMQ', 'Long photo stops on slopes and steps'],
                ['Heavy rain or warnings', 'Postpone, stay indoors, check the Observatory', 'Lingering at open connections for a shot'],
                ['After rain', 'Proceed, but expect wet surfaces and puddles', 'Assuming steps and landings are fully dry'],
              ],
            },
          },
          {
            heading: 'Checks before and during the visit',
            bullets: [
              { title: 'Check the Observatory', text: 'Rainstorm, thunderstorm, typhoon and heat warnings all affect a visit. Use the latest Hong Kong Observatory information; this site has no live weather data.' },
              { title: 'Check transport notices', text: 'Routine maintenance and temporary arrangements can make individual sections unavailable; combined with wet-weather diversions, that can invalidate your intended entry point.' },
              { title: 'Clothing and gear', text: 'Grippy shoes and compact rain protection suit narrow passages better than a large umbrella. Protect phones and cameras, and do not stare at a screen while walking on a slope.' },
              { title: 'Companions’ needs', text: 'With children, a wheelchair or older visitors, choose a short route with lifts and indoor stops, and arrange the return transport at the same time.' },
            ],
          },
          {
            heading: 'Indoor alternatives nearby',
            paragraphs: [
              'To keep an old-town Central experience, shift the focus to places with indoor space, such as the public areas of Central Market, Tai Kwun or PMQ. Check each venue’s opening arrangements, exhibitions and dining hours with the venue itself.',
              'This site has no live operating status and cannot guarantee any section in bad weather. When warnings are in force, shortening or postponing the visit is more reliable than assuming the covered sections are enough.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Do the escalators operate when it rains?',
            a: 'No live operating status is available here, so no guarantee is given. Escalators and some walkways are covered but street connections are open; in heavy rain, thunderstorms or typhoon signals, follow Observatory warnings and on-site notices.',
          },
          {
            q: 'Is the whole route covered?',
            a: 'No. Canopies mainly cover escalators and some moving walkways; street connections, cross streets and pavements are exposed, and slopes and steps get slippery.',
          },
          {
            q: 'Is rain a good time for a pushchair or wheelchair?',
            a: 'Take extra care. EMSD guidance advises using lifts rather than escalators, and steps along the route are not step-free. Confirm lifts and a street-level alternative first.',
          },
          {
            q: 'What can I do instead in heavy rain?',
            a: 'Focus on places with indoor space such as Central Market, Tai Kwun or PMQ, checking opening arrangements with each venue. When warnings are in force, shorten or postpone rather than waiting at exposed connections.',
          },
        ],
        mapsQuery: 'Central Market Tai Kwun PMQ Central Hong Kong',
      },
    },
  },
];
