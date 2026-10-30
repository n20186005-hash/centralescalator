import type { Locale, PathKey } from '../i18n';
import type { Faq } from '../lib/schema';

export type TopicSlug = 'schedule' | 'directions' | 'attractions' | 'food';

export interface TopicBullet {
  title: string;
  text: string;
}

export interface TopicBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: TopicBullet[];
  table?: { caption?: string; columns: string[]; rows: string[][] };
}

export interface TopicContent {
  meta: { title: string; description: string };
  h1: string;
  lead: string;
  blocks: TopicBlock[];
  faqs: Faq[];
  related: { slug: TopicSlug; label: string }[];
}

export interface TopicEntry {
  path: PathKey;
  navLabel: Record<Locale, string>;
  content: Record<Locale, TopicContent>;
}

export const topics: Record<TopicSlug, TopicEntry> = {
  "schedule": {
    "path": "schedule/",
    "navLabel": {
      "zh": "運作時間",
      "en": "Operating hours"
    },
    "content": {
      "zh": {
        "meta": {
          "title": "中環半山扶手電梯方向時間｜10:00與10:20來源差異",
          "description": "運輸署列06–10下行、10時至午夜上行；旅發局列10:20上行，逐項歸屬並說明現場維修與方向確認。"
        },
        "h1": "中環半山扶手電梯方向與運作時間",
        "lead": "2026-10-30查閱：運輸署列每日06:00–10:00下行、10:00至午夜上行；旅發局則列上行10:20至午夜。兩個官方頁的起始時刻不同，本站不把10:00–10:20寫成已確認全線停運，請依現場方向燈、維修告示及管理方安排。",
        "blocks": [
          {
            "heading": "官方資料怎樣不同？",
            "table": {
              "caption": "2026-10-30查閱；非即時狀態",
              "columns": [
                "來源",
                "下行往中環",
                "上行往半山"
              ],
              "rows": [
                [
                  "運輸署",
                  "06:00–10:00",
                  "10:00–00:00"
                ],
                [
                  "香港旅遊發展局",
                  "06:00–10:00",
                  "10:20–00:00"
                ]
              ]
            }
          },
          {
            "heading": "方向切換不等於固定全線停運",
            "paragraphs": [
              "不要把兩個來源之間20分鐘差異改寫成官方確認停運時段；現場各段狀態和告示才是乘搭依據。單向系統也不提供同時來回乘搭。"
            ]
          },
          {
            "heading": "維修、天候與安全",
            "paragraphs": [
              "本站沒有即時運作狀態；一段開放不代表其餘各段也可用。遇維修或封閉時先查現場替代動線，不把樓梯當作適合所有人的備案。",
              "機電工程署安全指引建議輪椅、嬰兒車及大件行李使用升降機，不應直接乘扶手電梯。沿線街道和樓梯不是連續無階梯通道；需要無障礙路線者應先查合適入口、升降機與地面路線，本次沒有完成全線實測。",
              "本次資料查閱日為2026-10-30，不是即時運作監控。行前重查管理方維修與現場方向，遇惡劣天氣查香港天文台警告；勿靠一般時刻表推論當下安全或開放。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "中環半山扶手電梯上行、下行時間如何查？",
            "a": "2026-10-30查閱：運輸署列每日06:00–10:00下行、10:00至午夜上行；旅發局則列上行10:20至午夜。兩個官方頁的起始時刻不同，本站不把10:00–10:20寫成已確認全線停運，請依現場方向燈、維修告示及管理方安排。"
          },
          {
            "q": "10:00至10:20一定全線停運嗎？",
            "a": "本次來源不足以證實一段固定的全線停運區間。運輸署與旅發局對上行起始有不同列示，應按現場指示確認各段方向與狀態。"
          },
          {
            "q": "輪椅或嬰兒車可以搭扶梯嗎？",
            "a": "機電工程署安全指引建議輪椅、嬰兒車及大件行李使用升降機，不應直接乘扶手電梯。沿線街道和樓梯不是連續無階梯通道；需要無障礙路線者應先查合適入口、升降機與地面路線，本次沒有完成全線實測。"
          }
        ],
        "related": [
          {
            "slug": "directions",
            "label": "交通指南"
          },
          {
            "slug": "attractions",
            "label": "周邊景點"
          },
          {
            "slug": "food",
            "label": "美食"
          }
        ]
      },
      "en": {
        "meta": {
          "title": "Central–Mid-Levels Escalator hours | Official start-time differences",
          "description": "Transport Department: downhill 06–10, uphill 10–midnight. Tourism Board: uphill from 10:20. Read the source difference and check actual section status."
        },
        "h1": "Central–Mid-Levels Escalator direction and hours",
        "lead": "Checked 2026-10-30: the Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill 10:20–midnight. The official pages differ on the uphill start. This guide does not treat 10:00–10:20 as a verified system-wide shutdown; follow direction indicators, maintenance signs and management instructions.",
        "blocks": [
          {
            "heading": "How the official pages differ",
            "table": {
              "caption": "Reviewed 2026-10-30; not live status",
              "columns": [
                "Source",
                "Downhill to Central",
                "Uphill to Mid-Levels"
              ],
              "rows": [
                [
                  "Transport Department",
                  "06:00–10:00",
                  "10:00–00:00"
                ],
                [
                  "Hong Kong Tourism Board",
                  "06:00–10:00",
                  "10:20–00:00"
                ]
              ]
            }
          },
          {
            "heading": "A direction change is not a verified fixed shutdown",
            "paragraphs": [
              "Do not turn the 20-minute difference into an officially confirmed shutdown. Follow each section’s actual indicators and notices. One-way operation does not provide simultaneous return escalators."
            ]
          },
          {
            "heading": "Maintenance, weather and safety",
            "paragraphs": [
              "This site has no live operating-status feed. One open segment does not establish availability elsewhere. Check posted alternatives for maintenance or closures; stairs are not a suitable fallback for everyone.",
              "EMSD safety guidance directs users with wheelchairs, pushchairs or bulky luggage to lifts rather than escalators. Streets and stairs along the system are not a continuous step-free route. Confirm suitable entrances, lifts and street-level alternatives; this review did not survey a complete accessible route.",
              "Reviewed on 2026-10-30, not live operating monitoring. Recheck maintenance and direction signs and consult Hong Kong Observatory warnings for severe weather. A general timetable does not establish current safety or availability."
            ]
          }
        ],
        "faqs": [
          {
            "q": "Where should uphill and downhill times be checked?",
            "a": "Checked 2026-10-30: the Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill 10:20–midnight. The official pages differ on the uphill start. This guide does not treat 10:00–10:20 as a verified system-wide shutdown; follow direction indicators, maintenance signs and management instructions."
          },
          {
            "q": "Is 10:00–10:20 a guaranteed system-wide shutdown?",
            "a": "The reviewed sources do not establish a fixed system-wide shutdown interval. The Transport Department and Tourism Board list differing uphill starts; follow actual indicators and notices for each section."
          },
          {
            "q": "Can wheelchairs or pushchairs use the escalators?",
            "a": "EMSD safety guidance directs users with wheelchairs, pushchairs or bulky luggage to lifts rather than escalators. Streets and stairs along the system are not a continuous step-free route. Confirm suitable entrances, lifts and street-level alternatives; this review did not survey a complete accessible route."
          }
        ],
        "related": [
          {
            "slug": "directions",
            "label": "Getting here"
          },
          {
            "slug": "attractions",
            "label": "Nearby"
          },
          {
            "slug": "food",
            "label": "Food"
          }
        ]
      }
    }
  },
  "directions": {
    "path": "directions/",
    "navLabel": {
      "zh": "交通指南",
      "en": "Getting here"
    },
    "content": {
      "zh": {
        "meta": {
          "title": "中環半山扶手電梯交通｜起點、終點與接駁",
          "description": "皇后大道中至干德道的分段路線、Maps租庇利街定位限制、港鐵與HKeMobility行程規劃及無障礙提醒。"
        },
        "h1": "起點、終點與交通接駁",
        "lead": "先用運輸署HKeMobility比較出發地至所選街道接點的路線；步行距離、出口及升降機可用性須按當日情況確認。",
        "blocks": [
          {
            "heading": "皇后大道中",
            "paragraphs": [
              "旅發局以皇后大道中為起點，連接中環街市天橋。Maps的租庇利街地址只作地點參考，並不是已實測無階梯入口。",
              "Maps列示租庇利街只作位置參考；官方路線由皇后大道中通往干德道。地圖點不是已確認入口，本站不宣稱舊稿座標或Plus Code已實測。"
            ]
          },
          {
            "heading": "先選接點，再查交通",
            "bullets": [
              {
                "title": "先選車站與出口",
                "text": "中環與香港站可作交通規劃起點；本次未逐一實測出入口，不給固定步程或最方便出口保證。請用港鐵資料和即時路線確認。"
              },
              {
                "title": "依街道接點選路",
                "text": "皇后大道中至干德道之間有不同高差與街道接點。Map上某一位置不是整條系統的唯一入口，也不能用來保證無階梯。"
              },
              {
                "title": "不要假設來回同方向",
                "text": "系統分時單向運作，不能把上行乘搭當作同時提供下行。先確認回程公共交通或合適地面路線。"
              }
            ]
          },
          {
            "heading": "無障礙不等於沿扶梯繞行",
            "paragraphs": [
              "機電工程署安全指引建議輪椅、嬰兒車及大件行李使用升降機，不應直接乘扶手電梯。沿線街道和樓梯不是連續無階梯通道；需要無障礙路線者應先查合適入口、升降機與地面路線，本次沒有完成全線實測。",
              "未核實專屬停車場、即時空位或費率。請按實際目的地查官方交通與停車資料，不把沿街位置當作合法上下客點。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "扶梯可以直接去太平山頂嗎？",
            "a": "不可以，旅發局明確提醒終點是干德道而非太平山頂；請另查山頂交通，不把扶梯當作山頂纜車。"
          },
          {
            "q": "輪椅或嬰兒車可以搭扶梯嗎？",
            "a": "機電工程署安全指引建議輪椅、嬰兒車及大件行李使用升降機，不應直接乘扶手電梯。沿線街道和樓梯不是連續無階梯通道；需要無障礙路線者應先查合適入口、升降機與地面路線，本次沒有完成全線實測。"
          },
          {
            "q": "地圖點是唯一入口嗎？",
            "a": "Maps列示租庇利街只作位置參考；官方路線由皇后大道中通往干德道。地圖點不是已確認入口，本站不宣稱舊稿座標或Plus Code已實測。"
          }
        ],
        "related": [
          {
            "slug": "schedule",
            "label": "運作時間"
          },
          {
            "slug": "attractions",
            "label": "周邊景點"
          },
          {
            "slug": "food",
            "label": "美食"
          }
        ]
      },
      "en": {
        "meta": {
          "title": "Getting to the Central–Mid-Levels Escalators | Start and end",
          "description": "Queen’s Road Central to Conduit Road, the limits of the Maps Jubilee Street point, MTR and HKeMobility planning, plus accessibility precautions."
        },
        "h1": "Start, endpoint and transport connections",
        "lead": "Use the Transport Department’s HKeMobility planner to compare routes from your starting point to the street connection you choose. Check exits, walking distance and lift availability for the day.",
        "blocks": [
          {
            "heading": "Queen’s Road Central",
            "paragraphs": [
              "The Tourism Board identifies Queen’s Road Central as the start, linking with the Central Market footbridge. The Maps Jubilee Street address is orientation, not a surveyed step-free entrance.",
              "Maps lists Jubilee Street for orientation, while the official route runs from Queen’s Road Central to Conduit Road. The point is not a verified entrance; the former coordinate and Plus Code were not surveyed here."
            ]
          },
          {
            "heading": "Choose a connection before planning transport",
            "bullets": [
              {
                "title": "Choose a station and exit",
                "text": "Central and Hong Kong stations are planning starting points. Individual exits were not surveyed here; no fixed walking time or universally best exit is promised. Check MTR information and current routes."
              },
              {
                "title": "Choose the section you need",
                "text": "Connections between Queen’s Road Central and Conduit Road involve differing heights and streets. One Maps point is not the only entrance to the whole system and does not establish step-free access."
              },
              {
                "title": "Do not assume two-way operation",
                "text": "The system reverses its one-way direction by time of day. An uphill ride does not mean a downhill escalator is available simultaneously. Plan suitable public transport or a street-level return route."
              }
            ]
          },
          {
            "heading": "An accessible plan needs a separate route",
            "paragraphs": [
              "EMSD safety guidance directs users with wheelchairs, pushchairs or bulky luggage to lifts rather than escalators. Streets and stairs along the system are not a continuous step-free route. Confirm suitable entrances, lifts and street-level alternatives; this review did not survey a complete accessible route.",
              "Dedicated parking, live availability and tariffs were not verified. Check official transport and parking for your actual destination; a street landmark is not permission to stop or drop off."
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does the system go to Victoria Peak?",
            "a": "No. The Tourism Board explicitly identifies Conduit Road as the endpoint, not Victoria Peak. Check separate Peak transport; the escalator is not the Peak Tram."
          },
          {
            "q": "Can wheelchairs or pushchairs use the escalators?",
            "a": "EMSD safety guidance directs users with wheelchairs, pushchairs or bulky luggage to lifts rather than escalators. Streets and stairs along the system are not a continuous step-free route. Confirm suitable entrances, lifts and street-level alternatives; this review did not survey a complete accessible route."
          },
          {
            "q": "Is the map point the only entrance?",
            "a": "Maps lists Jubilee Street for orientation, while the official route runs from Queen’s Road Central to Conduit Road. The point is not a verified entrance; the former coordinate and Plus Code were not surveyed here."
          }
        ],
        "related": [
          {
            "slug": "schedule",
            "label": "Operating hours"
          },
          {
            "slug": "attractions",
            "label": "Nearby"
          },
          {
            "slug": "food",
            "label": "Food"
          }
        ]
      }
    }
  },
  "attractions": {
    "path": "attractions/",
    "navLabel": {
      "zh": "周邊景點",
      "en": "Nearby"
    },
    "content": {
      "zh": {
        "meta": {
          "title": "中環半山扶手電梯附近景點｜中環街市、大館與PMQ",
          "description": "三處可另行規劃的文化場館與官方來源，區分扶梯運作、場館營業和實際步行路線，不保證固定十分鐘圈。"
        },
        "h1": "附近景點與各自的參觀安排",
        "lead": "以下為可另行規劃的目的地，非已實測的十分鐘步行圈；開放、票務與無障礙入口各自核對。",
        "blocks": [
          {
            "heading": "中環街市",
            "paragraphs": [
              "旅發局介紹這座三級歷史建築活化後有餐飲、零售和文化體驗。下段天橋連接並不代表所有商家與扶梯同時營業。"
            ]
          },
          {
            "heading": "大館",
            "paragraphs": [
              "前中區警署建築群的文化藝術場地，官方訪客頁另列場地與各展館安排；不沿用舊稿所有畫廊週一休館的概括。"
            ]
          },
          {
            "heading": "PMQ元創方",
            "paragraphs": [
              "政府資料介紹PMQ由荷李活道前已婚警察宿舍活化，現有創意與設計內容。請另查展覽、店家及交通，不保證固定步行時間。"
            ]
          },
          {
            "heading": "只選合適的一兩站",
            "paragraphs": [
              "先確認場館當日開放、展覽票務與適合的入口，再按體力和坡度選路；沒有已實測全線無階梯或固定半日走完所有景點的保證。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "其他場館和扶梯同時開放嗎？",
            "a": "不會。各場館、展覽與店家有各自安排；請依官方訪客頁確認。"
          },
          {
            "q": "全部都在十分鐘內嗎？",
            "a": "本次沒有驗證這種通用步程，實際需看所選出口、路線、坡度和個人需要。"
          }
        ],
        "related": [
          {
            "slug": "schedule",
            "label": "運作時間"
          },
          {
            "slug": "directions",
            "label": "交通指南"
          },
          {
            "slug": "food",
            "label": "美食"
          }
        ]
      },
      "en": {
        "meta": {
          "title": "Near the Central–Mid-Levels Escalators | Central Market, Tai Kwun, PMQ",
          "description": "Three separate cultural destinations and their official sources, separating escalator operation, venue hours and actual routes without a fixed walking-radius guarantee."
        },
        "h1": "Separate nearby destinations and their visiting arrangements",
        "lead": "These are separate destinations to consider, not a surveyed ten-minute walking circle. Check opening, tickets and accessible entrances separately.",
        "blocks": [
          {
            "heading": "Central Market",
            "paragraphs": [
              "The Tourism Board describes a Grade III historic building revitalised for dining, retail and cultural experiences. The lower footbridge connection does not make shop hours identical to escalator hours."
            ]
          },
          {
            "heading": "Tai Kwun",
            "paragraphs": [
              "A heritage and arts destination in the former Central Police Station compound. Its visitor page distinguishes site and exhibition arrangements; this guide does not repeat a blanket Monday-gallery closure claim."
            ]
          },
          {
            "heading": "PMQ",
            "paragraphs": [
              "Government information describes the former Hollywood Road Police Married Quarters revitalised as PMQ, a creative and design destination. Check exhibitions, shops and transport separately; no fixed walking time is promised."
            ]
          },
          {
            "heading": "Choose one or two suitable stops",
            "paragraphs": [
              "Confirm opening, exhibition tickets and a suitable entrance before choosing routes for your energy and slope tolerance. No complete step-free survey or guaranteed all-sights half-day route is claimed."
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do venues share the escalator’s hours?",
            "a": "No. Venues, exhibitions and shops have separate arrangements; check each official visitor page."
          },
          {
            "q": "Are all the sights within ten minutes?",
            "a": "No universal walking time was verified. It depends on the exit, route, slopes and individual needs."
          }
        ],
        "related": [
          {
            "slug": "schedule",
            "label": "Operating hours"
          },
          {
            "slug": "directions",
            "label": "Getting here"
          },
          {
            "slug": "food",
            "label": "Food"
          }
        ]
      }
    }
  },
  "food": {
    "path": "food/",
    "navLabel": {
      "zh": "美食",
      "en": "Food"
    },
    "content": {
      "zh": {
        "meta": {
          "title": "中環半山扶手電梯附近美食｜店家目錄與用餐規劃",
          "description": "以中環街市及大館官方餐飲目錄查找用餐，不提供未核實的固定排隊時段、分店地址或菜單價格。"
        },
        "h1": "扶梯附近餐飲：先查店，再選路",
        "lead": "以已確認的店家目錄選餐飲，再決定離開哪一段扶梯；本次沒有試吃、逐店核對菜單或排隊時間。",
        "blocks": [
          {
            "heading": "中環街市",
            "paragraphs": [
              "中環街市經營方有商店與餐飲目錄，可先查當日店家、樓層與營業資訊，不保證每家都有座位或同時營業。"
            ]
          },
          {
            "heading": "大館餐飲",
            "paragraphs": [
              "大館官方另有餐飲與商店資料。它不是扶梯營運設施；請另核對場地入口、店家時間及訂位需求。"
            ]
          },
          {
            "heading": "直接向店家確認",
            "paragraphs": [
              "過敏、素食、清真或無障礙座位需求請直接詢問商家；不能由街區類型或Google評分推論符合個人需求。"
            ]
          },
          {
            "heading": "用餐不堵塞乘搭動線",
            "paragraphs": [
              "離開扶梯出入口後再停留用餐、看菜單或等候同伴。商戶的開門、付款方式和最後點餐時間各自核對；本站沒有代訂或合作商店名單。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "有已驗證的店家排隊時間嗎？",
            "a": "沒有。本次不預測哪個鐘點一定少人，也不保證不用預約；直接詢問店家。"
          },
          {
            "q": "如何查飲食限制？",
            "a": "過敏、素食、清真或無障礙座位需求請直接詢問商家；不能由街區類型或Google評分推論符合個人需求。"
          }
        ],
        "related": [
          {
            "slug": "schedule",
            "label": "運作時間"
          },
          {
            "slug": "directions",
            "label": "交通指南"
          },
          {
            "slug": "attractions",
            "label": "周邊景點"
          }
        ]
      },
      "en": {
        "meta": {
          "title": "Food near the Central–Mid-Levels Escalators | Venue directories",
          "description": "Use Central Market and Tai Kwun’s own dining directories, with no unverified queue forecasts, branch addresses or menu prices."
        },
        "h1": "Dining near the escalators: choose a venue, then a route",
        "lead": "Choose a venue from its current directory before selecting an escalator exit. This review did not sample food or verify individual menus or queue times.",
        "blocks": [
          {
            "heading": "Central Market",
            "paragraphs": [
              "The operator maintains a shop and restaurant directory. Check the actual venue, floor and current hours; not every business necessarily has seats or opens at the same time."
            ]
          },
          {
            "heading": "Dining at Tai Kwun",
            "paragraphs": [
              "Tai Kwun maintains its own dining and shopping information. It is not an escalator operating facility; check access, business hours and reservations separately."
            ]
          },
          {
            "heading": "Ask the venue directly",
            "paragraphs": [
              "Ask about allergies, vegetarian or halal requirements and accessible seating. A neighbourhood label or Maps rating does not establish suitability."
            ]
          },
          {
            "heading": "Keep escalator routes clear",
            "paragraphs": [
              "Move away from landings before eating, reading menus or waiting for companions. Verify each business’s hours, payment methods and last orders. This guide has no booking service or claimed partner-restaurant list."
            ]
          }
        ],
        "faqs": [
          {
            "q": "Are queue times verified?",
            "a": "No. This review does not predict a quiet hour or guarantee walk-in tables. Ask the business directly."
          },
          {
            "q": "How should dietary needs be checked?",
            "a": "Ask about allergies, vegetarian or halal requirements and accessible seating. A neighbourhood label or Maps rating does not establish suitability."
          }
        ],
        "related": [
          {
            "slug": "schedule",
            "label": "Operating hours"
          },
          {
            "slug": "directions",
            "label": "Getting here"
          },
          {
            "slug": "attractions",
            "label": "Nearby"
          }
        ]
      }
    }
  }
};

export const topicSlugs: TopicSlug[] = ['schedule', 'directions', 'attractions', 'food'];
