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

export const home: Record<Locale, HomeContent> = {
  "zh": {
    "meta": {
      "title": "中環半山扶手電梯｜方向時段、起終點與交通指南",
      "description": "核對中環半山扶手電梯06:00–10:00下行及上行10:00／10:20官方差異、皇后大道中至干德道路線、交通與無障礙限制，附2026-10-30地圖快照。"
    },
    "hero": {
      "badge": "香港島 · 中環至半山",
      "eyebrow": "Central → Mid-Levels",
      "titleTop": "中環半山扶手電梯",
      "titleAccent": "先看方向，再安排行程。",
      "lead": "這是由多段扶梯、行人道與天橋組成的山坡行人系統，不是單一條扶梯。運輸署記錄1993年啟用、連接皇后大道中至干德道，現由機電工程署管理；系統不到太平山頂。",
      "ctaPrimary": "看運作時間",
      "ctaSecondary": "看地圖"
    },
    "facts": [
      {
        "label": "官方所列系統",
        "value": "16條扶梯 · 3條行人道"
      },
      {
        "label": "下行時段",
        "value": "06:00–10:00"
      },
      {
        "label": "上行起始",
        "value": "10:00／10:20，見來源"
      },
      {
        "label": "資料查閱",
        "value": "2026-10-30"
      }
    ],
    "guide": {
      "kicker": "THE URBAN RIDE",
      "title": "皇后大道中至干德道，分段前往。",
      "intro": "2026-10-30查閱：運輸署列每日06:00–10:00下行、10:00至午夜上行；旅發局則列上行10:20至午夜。兩個官方頁的起始時刻不同，本站不把10:00–10:20寫成已確認全線停運，請依現場方向燈、維修告示及管理方安排。",
      "steps": [
        {
          "tag": "01 / 下段",
          "title": "皇后大道中",
          "body": "旅發局以皇后大道中為起點，連接中環街市天橋。Maps的租庇利街地址只作地點參考，並不是已實測無階梯入口。"
        },
        {
          "tag": "02 / 行程選擇",
          "title": "沿中環街道分段離開",
          "body": "只能由開放出入口轉往街道；停下拍照先離開扶梯出口區，勿堵塞通道或進入私人住宅。其他場館要另查時間與入場規定。"
        },
        {
          "tag": "03 / 上段",
          "title": "終點是干德道",
          "body": "干德道位於半山，不是太平山頂。若要去山頂，另查山頂交通及票務，不能假定纜車站就在扶梯終點。"
        }
      ]
    },
    "timing": {
      "kicker": "WHEN TO GO",
      "title": "方向、維修與返程",
      "items": [
        {
          "title": "上午先核對方向",
          "body": "2026-10-30查閱：運輸署列每日06:00–10:00下行、10:00至午夜上行；旅發局則列上行10:20至午夜。兩個官方頁的起始時刻不同，本站不把10:00–10:20寫成已確認全線停運，請依現場方向燈、維修告示及管理方安排。"
        },
        {
          "title": "不要保證全線同時可用",
          "body": "本站沒有即時運作狀態；一段開放不代表其餘各段也可用。遇維修或封閉時先查現場替代動線，不把樓梯當作適合所有人的備案。"
        },
        {
          "title": "預留自己的停留與返程時間",
          "body": "未驗證一套適用所有旅客的全程乘搭分鐘數。請依當日人流、停留點、體力與返程車次決定，不因有上蓋就保證惡劣天氣可行。"
        }
      ]
    },
    "transport": {
      "kicker": "GETTING THERE",
      "title": "詳細交通",
      "intro": "先用運輸署HKeMobility比較出發地至所選街道接點的路線；步行距離、出口及升降機可用性須按當日情況確認。",
      "cards": [
        {
          "kicker": "港鐵",
          "title": "先選車站與出口",
          "body": "中環與香港站可作交通規劃起點；本次未逐一實測出入口，不給固定步程或最方便出口保證。請用港鐵資料和即時路線確認。"
        },
        {
          "kicker": "地面接駁",
          "title": "依街道接點選路",
          "body": "皇后大道中至干德道之間有不同高差與街道接點。Map上某一位置不是整條系統的唯一入口，也不能用來保證無階梯。"
        },
        {
          "kicker": "返程",
          "title": "不要假設來回同方向",
          "body": "系統分時單向運作，不能把上行乘搭當作同時提供下行。先確認回程公共交通或合適地面路線。"
        }
      ]
    },
    "practical": [
      {
        "label": "乘搭與票務",
        "value": "公共行人設施",
        "body": "旅發局交通手冊將乘搭列為毋須車費；這不包含沿途餐飲、展覽或其他交通的費用，本站不售票。"
      },
      {
        "label": "停車與接駁",
        "value": "另查當日安排",
        "body": "未核實專屬停車場、即時空位或費率。請按實際目的地查官方交通與停車資料，不把沿街位置當作合法上下客點。"
      },
      {
        "label": "無障礙與推車",
        "value": "不用扶梯代替升降機",
        "body": "機電工程署安全指引建議輪椅、嬰兒車及大件行李使用升降機，不應直接乘扶手電梯。沿線街道和樓梯不是連續無階梯通道；需要無障礙路線者應先查合適入口、升降機與地面路線，本次沒有完成全線實測。"
      }
    ],
    "food": {
      "kicker": "EAT ALONG THE WAY",
      "title": "周邊美食",
      "intro": "以已確認的店家目錄選餐飲，再決定離開哪一段扶梯；本次沒有試吃、逐店核對菜單或排隊時間。",
      "cards": [
        {
          "kicker": "商戶目錄",
          "title": "中環街市",
          "body": "中環街市經營方有商店與餐飲目錄，可先查當日店家、樓層與營業資訊，不保證每家都有座位或同時營業。"
        },
        {
          "kicker": "另一處場館",
          "title": "大館餐飲",
          "body": "大館官方另有餐飲與商店資料。它不是扶梯營運設施；請另核對場地入口、店家時間及訂位需求。"
        },
        {
          "kicker": "飲食需求",
          "title": "直接向店家確認",
          "body": "過敏、素食、清真或無障礙座位需求請直接詢問商家；不能由街區類型或Google評分推論符合個人需求。"
        }
      ]
    },
    "nearby": {
      "kicker": "NEARBY",
      "title": "周邊景點",
      "intro": "以下為可另行規劃的目的地，非已實測的十分鐘步行圈；開放、票務與無障礙入口各自核對。",
      "cards": [
        {
          "kicker": "活化建築",
          "title": "中環街市",
          "body": "旅發局介紹這座三級歷史建築活化後有餐飲、零售和文化體驗。下段天橋連接並不代表所有商家與扶梯同時營業。"
        },
        {
          "kicker": "文化與藝術",
          "title": "大館",
          "body": "前中區警署建築群的文化藝術場地，官方訪客頁另列場地與各展館安排；不沿用舊稿所有畫廊週一休館的概括。"
        },
        {
          "kicker": "設計與歷史",
          "title": "PMQ元創方",
          "body": "政府資料介紹PMQ由荷李活道前已婚警察宿舍活化，現有創意與設計內容。請另查展覽、店家及交通，不保證固定步行時間。"
        }
      ]
    },
    "faqs": [
      {
        "q": "中環半山扶手電梯上行、下行時間如何查？",
        "a": "2026-10-30查閱：運輸署列每日06:00–10:00下行、10:00至午夜上行；旅發局則列上行10:20至午夜。兩個官方頁的起始時刻不同，本站不把10:00–10:20寫成已確認全線停運，請依現場方向燈、維修告示及管理方安排。"
      },
      {
        "q": "扶梯可以直接去太平山頂嗎？",
        "a": "不可以，旅發局明確提醒終點是干德道而非太平山頂；請另查山頂交通，不把扶梯當作山頂纜車。"
      },
      {
        "q": "系統由誰管理？",
        "a": "運輸署介紹頁記述現由機電工程署管理。本站只是獨立、非官方、非營利旅遊及科普資訊指南，不代表管理單位。"
      },
      {
        "q": "輪椅或嬰兒車可以搭扶梯嗎？",
        "a": "機電工程署安全指引建議輪椅、嬰兒車及大件行李使用升降機，不應直接乘扶手電梯。沿線街道和樓梯不是連續無階梯通道；需要無障礙路線者應先查合適入口、升降機與地面路線，本次沒有完成全線實測。"
      },
      {
        "q": "10:00至10:20一定全線停運嗎？",
        "a": "本次來源不足以證實一段固定的全線停運區間。運輸署與旅發局對上行起始有不同列示，應按現場指示確認各段方向與狀態。"
      },
      {
        "q": "Google地圖評價會自動更新嗎？",
        "a": "不會。4.1星、10,604則為2026-10-30手工查閱的日期快照，不是本站收集的評論；Maps當時顯示午夜關閉也不是即時全線運作保證。"
      }
    ],
    "map": {
      "kicker": "MAP",
      "title": "位置與路線",
      "body": "Maps列示租庇利街只作位置參考；官方路線由皇后大道中通往干德道。地圖點不是已確認入口，本站不宣稱舊稿座標或Plus Code已實測。"
    },
    "closing": {
      "title": "一條扶梯，看見幾個中環。",
      "body": "本次資料查閱日為2026-10-30，不是即時運作監控。行前重查管理方維修與現場方向，遇惡劣天氣查香港天文台警告；勿靠一般時刻表推論當下安全或開放。"
    }
  },
  "en": {
    "meta": {
      "title": "Central–Mid-Levels Escalators | Direction, hours and route guide",
      "description": "Plan the Queen’s Road Central–Conduit Road route: downhill 06:00–10:00, differing official uphill start times, transport, access limits and dated Maps facts."
    },
    "hero": {
      "badge": "Hong Kong Island · Central to Mid-Levels",
      "eyebrow": "Central → Mid-Levels",
      "titleTop": "Central-Mid-Levels Escalators",
      "titleAccent": "Check the direction before you ride.",
      "lead": "A hillside pedestrian system of separate escalators, walkways and footbridges, rather than one continuous escalator. The Transport Department records its 1993 opening, Queen’s Road Central–Conduit Road route and EMSD management. It does not reach Victoria Peak.",
      "ctaPrimary": "See operating hours",
      "ctaSecondary": "View map"
    },
    "facts": [
      {
        "label": "Published system",
        "value": "16 escalators · 3 travelators"
      },
      {
        "label": "Downhill",
        "value": "06:00–10:00"
      },
      {
        "label": "Uphill start",
        "value": "10:00 / 10:20; see sources"
      },
      {
        "label": "Reviewed",
        "value": "2026-10-30"
      }
    ],
    "guide": {
      "kicker": "THE URBAN RIDE",
      "title": "Queen’s Road Central to Conduit Road, in sections.",
      "intro": "Checked 2026-10-30: the Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill 10:20–midnight. The official pages differ on the uphill start. This guide does not treat 10:00–10:20 as a verified system-wide shutdown; follow direction indicators, maintenance signs and management instructions.",
      "steps": [
        {
          "tag": "01 / Lower section",
          "title": "Queen’s Road Central",
          "body": "The Tourism Board identifies Queen’s Road Central as the start, linking with the Central Market footbridge. The Maps Jubilee Street address is orientation, not a surveyed step-free entrance."
        },
        {
          "tag": "02 / Choose a stop",
          "title": "Leave at open street connections",
          "body": "Use open exits only. Move clear of escalator landings before stopping for photos; keep routes clear and respect private homes. Separate venues have their own hours and entry terms."
        },
        {
          "tag": "03 / Upper section",
          "title": "The end is Conduit Road",
          "body": "Conduit Road is in the Mid-Levels, not Victoria Peak. Check separate Peak transport and ticket arrangements; do not assume a Peak Tram station is at the escalator endpoint."
        }
      ]
    },
    "timing": {
      "kicker": "WHEN TO GO",
      "title": "Direction, maintenance and return travel",
      "items": [
        {
          "title": "Check the morning direction",
          "body": "Checked 2026-10-30: the Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill 10:20–midnight. The official pages differ on the uphill start. This guide does not treat 10:00–10:20 as a verified system-wide shutdown; follow direction indicators, maintenance signs and management instructions."
        },
        {
          "title": "Do not assume every section is available",
          "body": "This site has no live operating-status feed. One open segment does not establish availability elsewhere. Check posted alternatives for maintenance or closures; stairs are not a suitable fallback for everyone."
        },
        {
          "title": "Allow your own time for stops and return travel",
          "body": "No universal end-to-end journey time was verified. Plan around crowds, stops, energy and return transport. A roof does not establish usability in severe weather."
        }
      ]
    },
    "transport": {
      "kicker": "GETTING THERE",
      "title": "Getting here",
      "intro": "Use the Transport Department’s HKeMobility planner to compare routes from your starting point to the street connection you choose. Check exits, walking distance and lift availability for the day.",
      "cards": [
        {
          "kicker": "MTR",
          "title": "Choose a station and exit",
          "body": "Central and Hong Kong stations are planning starting points. Individual exits were not surveyed here; no fixed walking time or universally best exit is promised. Check MTR information and current routes."
        },
        {
          "kicker": "Street connection",
          "title": "Choose the section you need",
          "body": "Connections between Queen’s Road Central and Conduit Road involve differing heights and streets. One Maps point is not the only entrance to the whole system and does not establish step-free access."
        },
        {
          "kicker": "Return journey",
          "title": "Do not assume two-way operation",
          "body": "The system reverses its one-way direction by time of day. An uphill ride does not mean a downhill escalator is available simultaneously. Plan suitable public transport or a street-level return route."
        }
      ]
    },
    "practical": [
      {
        "label": "Ride and tickets",
        "value": "Public pedestrian system",
        "body": "The Tourism Board’s transport handbook describes the ride as fare-free. That does not cover food, exhibitions or separate transport. This site does not sell tickets."
      },
      {
        "label": "Parking and connections",
        "value": "Check the day’s arrangements",
        "body": "Dedicated parking, live availability and tariffs were not verified. Check official transport and parking for your actual destination; a street landmark is not permission to stop or drop off."
      },
      {
        "label": "Accessibility and pushchairs",
        "value": "Use suitable lifts, not escalators",
        "body": "EMSD safety guidance directs users with wheelchairs, pushchairs or bulky luggage to lifts rather than escalators. Streets and stairs along the system are not a continuous step-free route. Confirm suitable entrances, lifts and street-level alternatives; this review did not survey a complete accessible route."
      }
    ],
    "food": {
      "kicker": "EAT ALONG THE WAY",
      "title": "Where to eat nearby",
      "intro": "Choose a venue from its current directory before selecting an escalator exit. This review did not sample food or verify individual menus or queue times.",
      "cards": [
        {
          "kicker": "Directory",
          "title": "Central Market",
          "body": "The operator maintains a shop and restaurant directory. Check the actual venue, floor and current hours; not every business necessarily has seats or opens at the same time."
        },
        {
          "kicker": "Separate venue",
          "title": "Dining at Tai Kwun",
          "body": "Tai Kwun maintains its own dining and shopping information. It is not an escalator operating facility; check access, business hours and reservations separately."
        },
        {
          "kicker": "Dietary requirements",
          "title": "Ask the venue directly",
          "body": "Ask about allergies, vegetarian or halal requirements and accessible seating. A neighbourhood label or Maps rating does not establish suitability."
        }
      ]
    },
    "nearby": {
      "kicker": "NEARBY",
      "title": "Nearby attractions",
      "intro": "These are separate destinations to consider, not a surveyed ten-minute walking circle. Check opening, tickets and accessible entrances separately.",
      "cards": [
        {
          "kicker": "Revitalised building",
          "title": "Central Market",
          "body": "The Tourism Board describes a Grade III historic building revitalised for dining, retail and cultural experiences. The lower footbridge connection does not make shop hours identical to escalator hours."
        },
        {
          "kicker": "Heritage and art",
          "title": "Tai Kwun",
          "body": "A heritage and arts destination in the former Central Police Station compound. Its visitor page distinguishes site and exhibition arrangements; this guide does not repeat a blanket Monday-gallery closure claim."
        },
        {
          "kicker": "Design and history",
          "title": "PMQ",
          "body": "Government information describes the former Hollywood Road Police Married Quarters revitalised as PMQ, a creative and design destination. Check exhibitions, shops and transport separately; no fixed walking time is promised."
        }
      ]
    },
    "faqs": [
      {
        "q": "Where should uphill and downhill times be checked?",
        "a": "Checked 2026-10-30: the Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill 10:20–midnight. The official pages differ on the uphill start. This guide does not treat 10:00–10:20 as a verified system-wide shutdown; follow direction indicators, maintenance signs and management instructions."
      },
      {
        "q": "Does the system go to Victoria Peak?",
        "a": "No. The Tourism Board explicitly identifies Conduit Road as the endpoint, not Victoria Peak. Check separate Peak transport; the escalator is not the Peak Tram."
      },
      {
        "q": "Who manages the system?",
        "a": "The Transport Department’s introduction identifies EMSD as the current manager. This is an independent, unofficial, nonprofit tourism and educational guide and does not represent management."
      },
      {
        "q": "Can wheelchairs or pushchairs use the escalators?",
        "a": "EMSD safety guidance directs users with wheelchairs, pushchairs or bulky luggage to lifts rather than escalators. Streets and stairs along the system are not a continuous step-free route. Confirm suitable entrances, lifts and street-level alternatives; this review did not survey a complete accessible route."
      },
      {
        "q": "Is 10:00–10:20 a guaranteed system-wide shutdown?",
        "a": "The reviewed sources do not establish a fixed system-wide shutdown interval. The Transport Department and Tourism Board list differing uphill starts; follow actual indicators and notices for each section."
      },
      {
        "q": "Do the Google Maps review figures update automatically?",
        "a": "No. The 4.1 rating and 10,604 reviews are a manual snapshot dated 2026-10-30, not reviews collected here. Maps showing midnight closure did not verify live availability of the whole system."
      }
    ],
    "map": {
      "kicker": "MAP",
      "title": "Location and route",
      "body": "Maps lists Jubilee Street for orientation, while the official route runs from Queen’s Road Central to Conduit Road. The point is not a verified entrance; the former coordinate and Plus Code were not surveyed here."
    },
    "closing": {
      "title": "One escalator, several versions of Central.",
      "body": "Reviewed on 2026-10-30, not live operating monitoring. Recheck maintenance and direction signs and consult Hong Kong Observatory warnings for severe weather. A general timetable does not establish current safety or availability."
    }
  }
};
