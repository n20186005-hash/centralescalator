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
  schedule: {
    path: 'schedule/',
    navLabel: { zh: '運作時間', en: 'Operating hours' },
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯運作時間｜上行下行時段與乘搭攻略',
          description:
            '中環半山扶手電梯（中環至半山自動扶梯系統）每日 06:00–10:00 向下行、10:20–24:00 向上行，免費乘搭。本文整理上行下行時段、切換時間、沿途上下車點與惡劣天氣注意事項。',
        },
        h1: '中環半山扶手電梯運作時間',
        lead:
          '整條系統每天早上先服務下山通勤，上午 10 時後轉換方向，改為一路向半山上行。出發前看清方向，才不會坐錯。',
        blocks: [
          {
            heading: '上行與下行時段一覽',
            paragraphs: [
              '系統每日約由早上 6 時運作至午夜 12 時，並按時段轉換行駛方向：早上主要向下通往中環，其餘時間向上通往半山。',
            ],
            table: {
              caption: '中環至半山自動扶梯系統方向時段（以運輸署公布為準）',
              columns: ['時段', '行駛方向', '適合誰'],
              rows: [
                ['06:00 – 10:00', '向下行（往中環／皇后大道中）', '住在半山、早上要落山返工的人士'],
                ['10:00 – 10:20', '方向轉換時段', '現場短暫調整，建議預留緩衝時間'],
                ['10:20 – 24:00', '向上行（往半山／干德道）', '由中環出發往半山觀光、去蘇豪晚餐的旅客'],
              ],
            },
          },
          {
            heading: '如何配合時段安排行程',
            bullets: [
              {
                title: '上午行程：先往中環，再向上',
                text: '若早上 6 時至 10 時前到達，扶梯是往山下走的；想由中環一路往上，請等到上午 10 時 20 分之後再出發。',
              },
              {
                title: '下午至晚上：蘇豪晚餐路線',
                text: '10:20 之後全線上行，可以邊乘邊看士丹頓街、伊利近街的餐廳；晚餐後步行下山或經斜路返回中環。',
              },
              {
                title: '不想全程乘搭',
                text: '每個出入口都可自由離開系統，轉往荷李活道、嘉咸街、大館一帶，看完再回到扶梯續乘即可。',
              },
            ],
          },
          {
            heading: '票價與收費',
            paragraphs: [
              '扶手電梯為運輸署管理的公共行人交通設施，全程免費，不設車費、不收門票，也不需要八達通或任何票卡。',
            ],
          },
          {
            heading: '維修、暫停與惡劣天氣',
            bullets: [
              {
                title: '日常保養',
                text: '個別扶手電梯可能因定期檢查或保養暫停運作，此時可改用相鄰樓梯、斜坡或有蓋行人道繼續前行。',
              },
              {
                title: '惡劣天氣',
                text: '在颱風或暴雨警告生效期間，現場安排可能調整。出發前請留意運輸署公布及現場告示，並以自身安全為先。',
              },
              {
                title: '公眾假期',
                text: '運輸署未有另行公布假日停運安排，一般而言假期照常運作；確實情況以官方最新公布為準。',
              },
            ],
          },
        ],
        faqs: [
          {
            q: '扶手電梯幾點開始上行？',
            a: '每日約上午 10 時 20 分起轉為上行（往半山／干德道方向），一直運作至午夜 12 時左右。',
          },
          {
            q: '早上 6 時至 10 時是往哪個方向？',
            a: '這段時間是向下行，主要服務由半山往中環上班的人士。若你想上山，請安排在 10:20 之後。',
          },
          {
            q: '乘搭到一半，扶手電梯會中途改變方向嗎？',
            a: '不會。方向只在既定時段整條系統統一轉換，你乘搭期間的方向是固定的。',
          },
          {
            q: '末班車是幾點？錯過了怎麼辦？',
            a: '系統約於午夜 12 時停止運作。錯過後可由半山沿斜路、樓梯步行下山，或改乘的士與專線小巴。',
          },
          {
            q: '搭完全程需要多久？',
            a: '全程約 800 米，站著乘完約需 20–30 分鐘；若沿途停留大館、中環街市或蘇豪，建議預留 1–2 小時。',
          },
          {
            q: '週末和公眾假期的時間會不同嗎？',
            a: '官方並未公布假日另行調整的安排，一般而言週末與假期沿用相同的時段。出行前請以運輸署公布為準。',
          },
          {
            q: '需要買票或用八達通嗎？',
            a: '不需要。這是免費的公共行人設施，沒有閘機，也沒有任何收費。',
          },
          {
            q: '如遇八號或以上熱帶氣旋警告會暫停嗎？',
            a: '極端天氣下現場安排可能調整。請留意運輸署與天文台最新公布，並避免在恶劣天氣期間前往山坡路段。',
          },
        ],
        related: [
          { slug: 'directions', label: '中環半山扶手電梯交通指南' },
          { slug: 'food', label: '沿途美食推薦' },
          { slug: 'attractions', label: '周邊景點推薦' },
        ],
      },
      en: {
        meta: {
          title: 'Central-Mid-Levels Escalator Hours: Uphill & Downhill Times',
          description:
            'Operating hours for Hong Kong’s Central-Mid-Levels Escalators: downhill 6–10am, uphill 10:20am–midnight, free to ride. Includes daily schedule, the reversal window, exit points and bad-weather advice.',
        },
        h1: 'Central-Mid-Levels Escalator operating hours',
        lead:
          'Every morning the system runs downhill for the commute, then reverses around 10am to carry everyone up towards the Mid-Levels. Check the direction before you step on.',
        blocks: [
          {
            heading: 'Daily schedule at a glance',
            paragraphs: [
              'The system runs roughly from 6:00 to midnight, reversing direction once each morning: downhill towards Central early, uphill towards the Mid-Levels afterwards.',
            ],
            table: {
              caption: 'Direction schedule (subject to Transport Department notices)',
              columns: ['Window', 'Direction', 'Best suited for'],
              rows: [
                ['06:00 – 10:00', 'Downhill (towards Central / Queen’s Road Central)', 'Mid-Levels residents commuting down the hill'],
                ['10:00 – 10:20', 'Changeover window', 'Brief reversal — allow buffer time'],
                ['10:20 – 24:00', 'Uphill (towards Mid-Levels / Conduit Road)', 'Visitors heading up from Central and dinner in SoHo'],
              ],
            },
          },
          {
            heading: 'Planning your day around the schedule',
            bullets: [
              {
                title: 'Mornings: downhill first, uphill later',
                text: 'Before 10:00 the escalators run downhill. If you want to ride up from Central, start after 10:20.',
              },
              {
                title: 'Afternoon into evening: SoHo dinner run',
                text: 'From 10:20 everything flows uphill, so you can scout Staunton and Elgin Street restaurants on the way up, then walk back down after dinner.',
              },
              {
                title: 'You never have to ride it all',
                text: 'Every exit lets you step out into Hollywood Road, Graham Street or Tai Kwun, then rejoin the system further along.',
              },
            ],
          },
          {
            heading: 'Fares and tickets',
            paragraphs: [
              'There is nothing to pay. The escalators are public pedestrian infrastructure run by the Transport Department: no fare, no ticket, no Octopus card required.',
            ],
          },
          {
            heading: 'Maintenance, closures and bad weather',
            bullets: [
              {
                title: 'Routine servicing',
                text: 'Individual escalators are occasionally stopped for inspection. Continue on foot via the neighbouring stairs, ramps and covered walkways.',
              },
              {
                title: 'Severe weather',
                text: 'Operations may change while rainstorm or typhoon signals are in force. Check Transport Department notices and put safety first.',
              },
              {
                title: 'Weekends and public holidays',
                text: 'No separate holiday timetable is published: the standard windows normally apply on weekends too, subject to the latest official notice.',
              },
            ],
          },
        ],
        faqs: [
          {
            q: 'What time do the escalators start running uphill?',
            a: 'Around 10:20 each day they reverse uphill towards the Mid-Levels and Conduit Road, and stay that way until roughly midnight.',
          },
          {
            q: 'Which direction do they run between 6am and 10am?',
            a: 'Downhill, mainly for people commuting from the Mid-Levels into Central. To ride up, plan for after 10:20.',
          },
          {
            q: 'Can the direction change while I am riding?',
            a: 'No. The whole system switches direction at the scheduled windows only; the direction stays fixed during your ride.',
          },
          {
            q: 'When is the last "ride"?',
            a: 'The system stops around midnight. Afterwards you can walk down via slopes and stairs, or take a taxi or minibus.',
          },
          {
            q: 'How long is the full ride?',
            a: 'About 800 metres end to end, roughly 20–30 minutes without stopping; allow one to two hours with stops at Central Market, Tai Kwun or SoHo.',
          },
          {
            q: 'Are the hours different at weekends or on public holidays?',
            a: 'Authorities publish no separate holiday timetable, so the same windows normally apply. Check the latest official notice before travelling.',
          },
          {
            q: 'Do I need a ticket or an Octopus card?',
            a: 'No. There are no gates and no fare — it is free public pedestrian infrastructure.',
          },
          {
            q: 'Do they stop when a typhoon signal is raised?',
            a: 'Operations may change in extreme weather. Follow Transport Department and Observatory announcements, and avoid hillside routes during storms.',
          },
        ],
        related: [
          { slug: 'directions', label: 'Getting to the escalators' },
          { slug: 'food', label: 'Where to eat along the route' },
          { slug: 'attractions', label: 'Nearby attractions' },
        ],
      },
    },
  },

  directions: {
    path: 'directions/',
    navLabel: { zh: '交通指南', en: 'Getting here' },
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯交通指南｜港鐵出口、步行路線與地圖',
          description:
            '前往中環半山扶手電梯最簡單的方法是港鐵中環站步行經皇后大道中、租庇利街前往；本文整理港鐵、機場快線、天星小輪、電車巴士與的士的上車點及步程，附 Plus Code 地圖。',
        },
        h1: '中環半山扶手電梯交通指南',
        lead:
          '南端入口位於中環皇后大道中與租庇利街一帶，由港鐵中環站步行前往最直接；從香港站、中環碼頭亦可經行人天橋與街道連接。',
        blocks: [
          {
            heading: '起點位置',
            paragraphs: [
              '扶手電梯的南端入口位於皇后大道中、租庇利街與中環街市一帶，Plus Code 為 75M3+GX 中環 香港。以此作為導航目標最準確。',
              'Google 地圖位置：https://maps.app.goo.gl/kYnouGXP34XBKHnp8',
            ],
          },
          {
            heading: '各種交通方式對照',
            table: {
              caption: '由中環各交通節點前往扶手電梯南端入口',
              columns: ['交通方式', '落車／出發點', '步程', '備註'],
              rows: [
                ['港鐵', '中環站（荃灣線／港島線）', '約 5–10 分鐘', '沿指標往皇后大道中、租庇利街方向步行最為直接'],
                ['港鐵 / 機場快線', '香港站', '約 10–15 分鐘', '經中環行人天橋及商場通道接駁，雨天可少走地面'],
                ['渡輪', '中環碼頭（天星小輪）', '約 10–15 分鐘', '由尖沙咀出發可先搭天星小輪，再步行接駁'],
                ['電車', '德輔道中／皇后大道中沿線車站', '約 3–8 分鐘', '路面電車站點密集，適合由西環或銅鑼灣方向前來'],
                ['巴士 / 專線小巴', '皇后大道中、德輔道中沿線', '約 3–8 分鐘', '以「租庇利街」或「中環街市」為步行定位目標'],
                ['的士', '皇后大道中或租庇利街路邊', '即達', '中環一帶禁止隨意停車，請於法定上落客點下車'],
              ],
            },
          },
          {
            heading: '推薦步行路線',
            bullets: [
              {
                title: '由港鐵中環站出發',
                text: '由車站前往皇后大道中方向，沿皇后大道中西行至租庇利街交界，即可見扶手電梯的下段與中環街市，步程約 5–10 分鐘。',
              },
              {
                title: '由香港站出發（含機場快線）',
                text: '經中環行人天橋系統與商場通道向東南方向步行，接回皇后大道中後再接入扶梯下段，步程約 10–15 分鐘，全程多數路段有上蓋。',
              },
              {
                title: '由中環碼頭出發',
                text: '沿民光街、港景步行區經天橋往皇后大道中方向步行，可順道把國際金融中心、皇后像廣場納入行程。',
              },
            ],
          },
          {
            heading: '實用貼士',
            bullets: [
              {
                title: '先定位再上山',
                text: '中環街道起伏明顯，建議先以「中環街市」或「租庇利街」為步行定位點，確認入口位置後才開始乘搭上行。',
              },
              {
                title: '善用「香港出行易」',
                text: '如需實時公共交通路線與班次，可使用運輸署「香港出行易」（HKeMobility）流動應用程式查詢。',
              },
              {
                title: '自駕不划算',
                text: '扶梯沒有專用停車場，中環車位緊張且收費浮動大，建議優先使用港鐵與路面公共交通。',
              },
            ],
          },
        ],
        faqs: [
          {
            q: '港鐵哪個站最近中環半山扶手電梯？',
            a: '港鐵中環站最近，沿皇后大道中步行至租庇利街約 5–10 分鐘。香港站（含機場快線）亦可經行人天橋步行前往，約 10–15 分鐘。',
          },
          {
            q: '由機場前往扶手電梯要怎麼走？',
            a: '可乘機場快線至香港站，再經中環行人天橋系統步行約 10–15 分鐘；亦可乘機場巴士至中環一帶，然後步行前往皇后大道中、租庇利街入口。',
          },
          {
            q: '扶手電梯的 Plus Code 是什麼？',
            a: '75M3+GX 中環 香港。在 Google 地圖輸入這組 Plus Code 或打開 https://maps.app.goo.gl/kYnouGXP34XBKHnp8 即可導航至入口一帶。',
          },
          {
            q: '扶手電梯附近有停車場嗎？',
            a: '沒有專用停車場。中環一帶商業樓宇設有時租車位，但費用浮動且容易滿位，建議改乘港鐵或公共交通。',
          },
          {
            q: '由尖沙咀出發如何前往？',
            a: '最便捷是先乘天星小輪到中環碼頭（航程約 8 分鐘），再步行約 10–15 分鐘前往皇后大道中入口；整個行程十分適合搭配維港景觀。',
          },
          {
            q: '由中環如何前往山頂？',
            a: '扶手電梯終點只在半山干德道，需另行前往山頂纜車站（花園道）轉乘山頂纜車、巴士或小巴前往太平山頂。',
          },
          {
            q: '下雨天前往會不會很不方便？',
            a: '由香港站或中環站經行人天橋系統步行，大部分路段有上蓋；扶手電梯本身亦有上蓋，是雨天仍適合安排的行程。',
          },
          {
            q: '輪椅使用者可以到達入口嗎？',
            a: '路面段多為平地行人道，中環街市、大館等節點設有升降機；但扶梯本身不適合輪椅，建議另行規劃無障礙路線。',
          },
        ],
        related: [
          { slug: 'schedule', label: '運作時間與乘搭攻略' },
          { slug: 'attractions', label: '周邊景點推薦' },
          { slug: 'food', label: '沿途美食推薦' },
        ],
      },
      en: {
        meta: {
          title: 'Getting to the Central-Mid-Levels Escalators: MTR, Tram & Maps',
          description:
            'How to reach the Central-Mid-Levels Escalators: walk 5–10 minutes from MTR Central via Queen’s Road Central and Jubilee Street, plus options from Hong Kong station, the Star Ferry, trams, buses and taxis. Plus Code included.',
        },
        h1: 'Getting to the Central-Mid-Levels Escalators',
        lead:
          'The southern entrance sits where Queen’s Road Central meets Jubilee Street, a short walk from MTR Central and easy to reach on foot from Hong Kong station and the Central ferry piers.',
        blocks: [
          {
            heading: 'Where to aim for',
            paragraphs: [
              'Head for Queen’s Road Central at Jubilee Street, next to Central Market: Plus Code 75M3+GX Central, Hong Kong.',
              'Google Maps link: https://maps.app.goo.gl/kYnouGXP34XBKHnp8',
            ],
          },
          {
            heading: 'Transport options compared',
            table: {
              caption: 'Reaching the southern entrance from Central transport hubs',
              columns: ['Mode', 'Stop / start point', 'Walking time', 'Notes'],
              rows: [
                ['MTR', 'Central station (Island / Tsuen Wan line)', '5–10 min', 'Follow signs for Queen’s Road Central and Jubilee Street'],
                ['Airport Express / MTR', 'Hong Kong station', '10–15 min', 'Mostly covered via the Central footbridge network'],
                ['Ferry', 'Central Ferry Piers (Star Ferry)', '10–15 min', 'Great approach from Tsim Sha Tsui'],
                ['Tram', 'Des Voeux Road Central / Queen’s Road Central stops', '3–8 min', 'Convenient from Western District or Causeway Bay'],
                ['Bus / minibus', 'Along Queen’s Road Central and Des Voeux Road Central', '3–8 min', 'Use Jubilee Street or Central Market as your landmark'],
                ['Taxi', 'Queen’s Road Central or Jubilee Street', 'Drop-off at entrance area', 'Ask for a legal drop-off point; random stopping is restricted'],
              ],
            },
          },
          {
            heading: 'Suggested walking routes',
            bullets: [
              {
                title: 'From MTR Central station',
                text: 'Head towards Queen’s Road Central and walk west to the Jubilee Street junction, where the lower section meets Central Market — about 5–10 minutes.',
              },
              {
                title: 'From Hong Kong station / Airport Express',
                text: 'Follow the elevated footbridge network and mall passages south-east, return to Queen’s Road Central and join the lower escalators — around 10–15 minutes, mostly under cover.',
              },
              {
                title: 'From the Central ferry piers',
                text: 'Walk inland via the waterfront promenade and footbridges towards Queen’s Road Central, taking in IFC and Statue Square on the way.',
              },
            ],
          },
          {
            heading: 'Practical tips',
            bullets: [
              {
                title: 'Find the entrance first',
                text: 'Central’s streets climb steeply. Walk to Jubilee Street and Central Market before committing to the uphill ride.',
              },
              {
                title: 'Use official journey tools',
                text: 'For live routes and timetables, use the Transport Department’s HKeMobility app or website.',
              },
              {
                title: 'Skip the car',
                text: 'There is no dedicated car park and Central meter rates are high, so rail and surface transport make far more sense.',
              },
            ],
          },
        ],
        faqs: [
          {
            q: 'Which MTR station is closest to the escalators?',
            a: 'MTR Central — walk along Queen’s Road Central to Jubilee Street in 5–10 minutes. Hong Kong station (including Airport Express) is also reachable in 10–15 minutes via the footbridge network.',
          },
          {
            q: 'How do I get here from the airport?',
            a: 'Take the Airport Express to Hong Kong station and walk about 10–15 minutes through the Central footbridge network, or take an airport bus to Central and walk to Queen’s Road Central.',
          },
          {
            q: 'What is the Plus Code for the escalators?',
            a: '75M3+GX Central, Hong Kong. Enter it in Google Maps, or open https://maps.app.goo.gl/kYnouGXP34XBKHnp8 for the entrance area.',
          },
          {
            q: 'Is there parking nearby?',
            a: 'No dedicated car park. Commercial towers around Central offer hourly parking, but it is costly and often full — take the MTR instead.',
          },
          {
            q: 'How do I get here from Tsim Sha Tsui?',
            a: 'Take the Star Ferry to Central (about 8 minutes across the harbour), then walk 10–15 minutes inland — a route that pairs perfectly with the harbour views.',
          },
          {
            q: 'How do I continue to Victoria Peak?',
            a: 'The escalators end on Conduit Road in the Mid-Levels. For The Peak, continue to the Peak Tram terminus on Garden Road or take a bus or minibus.',
          },
          {
            q: 'Is it manageable in the rain?',
            a: 'Yes. The footbridge network covers most of the walk from Central or Hong Kong station, and the escalator itself has a roof the whole way.',
          },
          {
            q: 'Can wheelchair users reach the entrance?',
            a: 'The street approach is largely level, and there are lifts at Central Market and Tai Kwun. The escalators themselves are not wheelchair friendly, so plan step-free street routes instead.',
          },
        ],
        related: [
          { slug: 'schedule', label: 'Operating hours and how to ride' },
          { slug: 'attractions', label: 'Nearby attractions' },
          { slug: 'food', label: 'Where to eat along the route' },
        ],
      },
    },
  },

  attractions: {
    path: 'attractions/',
    navLabel: { zh: '周邊景點', en: 'Nearby' },
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯周邊景點｜大館、中環街市、文武廟半日遊',
          description:
            '以中環半山扶手電梯為軸心，整理大館、中環街市、PMQ 元創方、文武廟、蘭桂坊、香港動植物公園等步行可達景點，附離開扶梯的路段與建議停留時間。',
        },
        h1: '中環半山扶手電梯周邊景點',
        lead:
          '由皇后大道中到半山干德道，這條扶梯把中環最重要的歷史建築、藝術空間與城市綠地串成一條線，幾乎每一段都有值得下車的理由。',
        blocks: [
          {
            heading: '沿途景點一覽',
            table: {
              caption: '扶手電梯沿途主要景點（步行時間為由扶梯出入口起算）',
              columns: ['景點', '離開扶梯的位置', '步行時間', '建議停留'],
              rows: [
                ['中環街市', '下段：皇后大道中／租庇利街', '1–3 分鐘', '30–45 分鐘'],
                ['大館（前中區警署建築群）', '中段：荷李活道／奧卑利街', '3–5 分鐘', '1–2 小時'],
                ['PMQ 元創方', '中段：鴨巴甸街', '5–8 分鐘', '45–60 分鐘'],
                ['文武廟', '中段：荷李活道', '5–8 分鐘', '15–20 分鐘'],
                ['蘭桂坊', '伊利近街／德己立街', '5–8 分鐘', '視行程而定'],
                ['香港動植物公園', '上段：雅賓利道方向', '10–15 分鐘', '45–60 分鐘'],
              ],
            },
          },
          {
            heading: '重點推薦',
            bullets: [
              {
                title: '大館 Tai Kwun',
                text: '由前中區警署、法院與監獄建築群活化而成，免費入場，歷史展覽與當代藝術並陳。建議上午 11 時後前往，並留意週一休館安排與官方網站的最新公布。',
              },
              {
                title: '中環街市 Central Market',
                text: '位於扶梯下段的清水混凝土地標，如今設有零售、餐飲與公共空間，是行程前補給或休息的最佳節點。',
              },
              {
                title: 'PMQ 元創方',
                text: '前荷李活道已婚警察宿舍活化項目，聚集設計工作室與小店，適合慢慢逛；各店營業時間不一，晚間多數會較早休息。',
              },
              {
                title: '文武廟 Man Mo Temple',
                text: '沿荷李活道往西可達，是香港歷史悠久的廟宇之一，適合與摩羅街古董街、樓梯街安排在同一段步行路線。',
              },
              {
                title: '香港動植物公園',
                text: '由扶梯上段往雅賓利道方向步行可達，園區免費開放，是行程尾聲散步與休息的好去處；開放時間請以康文署公布為準。',
              },
            ],
          },
          {
            heading: '半日建議路線',
            paragraphs: [
              '上午 10:20 後由中環街市搭上扶梯，中途在大館與 PMQ 元創方各停留約 1 小時，於蘇豪午餐；下午沿荷李活道步行至文武廟，再經樓梯街回到皇后大道中，全程約 3–4 小時。',
              '若想伸展到綠地，可在扶梯上段轉往雅賓利道，把香港動植物公園加入行程，再步行下山或在花園道轉乘交通工具離開。',
            ],
          },
        ],
        faqs: [
          {
            q: '扶手電梯附近有什麼必去的景點？',
            a: '多數旅人會把中環街市、大館、PMQ 元創方與文武廟串成一條線；喜歡綠地的可加入香港動植物公園，喜歡夜生活則可转往蘭桂坊與蘇豪。',
          },
          {
            q: '大館距離扶手電梯遠嗎？',
            a: '不遠。由扶梯中段經荷李活道或奧卑利街步行約 3–5 分鐘即可抵達，是最順路的一站。',
          },
          {
            q: '參觀這些景點需要門票嗎？',
            a: '中環街市、大館、PMQ 元創方與文武廟一般均可免費入場；個別特展或活動可能另行收費，請以各場地官方公布為準。',
          },
          {
            q: '中環街市和扶手電梯是同一回事嗎？',
            a: '不是。中環街市是扶梯下段的鄰近地標與重要入口節點，扶手電梯則是連接皇后大道中與干德道的山坡行人系統。',
          },
          {
            q: '文武廟的開放時間是？',
            a: '廟宇一般於日間開放，實際時間會因節慶與法事調整；建議出發前向廟方或官方旅遊資訊核實。',
          },
          {
            q: '適合親子同行的景點有哪些？',
            a: '香港動植物公園與中環街市的公共空間較適合小朋友活動；扶梯本身沿途多為斜坡與階梯，推嬰兒車時應預先規劃路線。',
          },
          {
            q: '蘭桂坊應該安排什麼時間去？',
            a: '傍晚之後氣氛最好， restaurants 與酒吧陸續熱鬧起來；若只想安靜逛街，建議安排在白天。',
          },
          {
            q: '一天之內可以走完所有周邊景點嗎？',
            a: '可以。建議上午 10:20 後上路，安排半日至一日，並根據同行者的步伐在中環街市、大館或公園安排休息。',
          },
        ],
        related: [
          { slug: 'directions', label: '交通指南與地圖' },
          { slug: 'schedule', label: '運作時間與乘搭攻略' },
          { slug: 'food', label: '沿途美食推薦' },
        ],
      },
      en: {
        meta: {
          title: 'Near the Central-Mid-Levels Escalators: Tai Kwun, Central Market & SoHo',
          description:
            'What to see around Hong Kong’s Central-Mid-Levels Escalators — Tai Kwun, Central Market, PMQ, Man Mo Temple, Lan Kwai Fong and the Zoological and Botanical Gardens, with walking times and a half-day route.',
        },
        h1: 'Attractions near the Central-Mid-Levels Escalators',
        lead:
          'From Queen’s Road Central to Conduit Road, the escalator threads together Central’s most interesting heritage buildings, art spaces and green corners — almost every landing is a reason to step off.',
        blocks: [
          {
            heading: 'Sights along the line',
            table: {
              caption: 'Walking times measured from the nearest escalator exit',
              columns: ['Sight', 'Where to step off', 'Walking time', 'Suggested stay'],
              rows: [
                ['Central Market', 'Lower section: Queen’s Road Central / Jubilee Street', '1–3 min', '30–45 min'],
                ['Tai Kwun (former Central Police Station compound)', 'Middle: Hollywood Road / Old Bailey Street', '3–5 min', '1–2 hours'],
                ['PMQ', 'Middle: Aberdeen Street', '5–8 min', '45–60 min'],
                ['Man Mo Temple', 'Middle: Hollywood Road', '5–8 min', '15–20 min'],
                ['Lan Kwai Fong', 'Elgin Street / D’Aguilar Street', '5–8 min', 'Evening, flexible'],
                ['Hong Kong Zoological and Botanical Gardens', 'Upper: towards Albany Road', '10–15 min', '45–60 min'],
              ],
            },
          },
          {
            heading: 'Highlights',
            bullets: [
              {
                title: 'Tai Kwun',
                text: 'Restored former police station, courthouse and prison, free to enter, mixing heritage interpretation with contemporary art. Aim for after 11:00, and check the official site — galleries close on Mondays.',
              },
              {
                title: 'Central Market',
                text: 'The streamlined concrete landmark beside the lower escalators, now filled with retail, dining and public space — the best place to regroup before heading up.',
              },
              {
                title: 'PMQ',
                text: 'The former Hollywood Road police married quarters, now design studios and small shops. Individual opening hours vary and many close relatively early.',
              },
              {
                title: 'Man Mo Temple',
                text: 'A short walk west along Hollywood Road. Pair it with Upper Lascar Row’s antique stalls and the steep slope of Ladder Street.',
              },
              {
                title: 'Hong Kong Zoological and Botanical Gardens',
                text: 'Reachable from the upper section via Albany Road. Free entry and a calm finish to the climb; check LCSD announcements for opening hours.',
              },
            ],
          },
          {
            heading: 'A suggested half-day loop',
            paragraphs: [
              'Board after 10:20 near Central Market, spend about an hour each at Tai Kwun and PMQ, and have lunch in SoHo. Walk along Hollywood Road to Man Mo Temple in the afternoon, then return down Ladder Street to Queen’s Road Central — roughly three to four hours in total.',
              'For a greener finish, step off near the top and detour to the Zoological and Botanical Gardens, then either stroll back downhill or pick up transport on Garden Road.',
            ],
          },
        ],
        faqs: [
          {
            q: 'What are the must-see attractions near the escalators?',
            a: 'Most visitors combine Central Market, Tai Kwun, PMQ and Man Mo Temple. Add the Zoological and Botanical Gardens for greenery, or Lan Kwai Fong and SoHo for nightlife.',
          },
          {
            q: 'Is Tai Kwun far from the escalator?',
            a: 'No — about 3–5 minutes on foot from the middle section via Hollywood Road or Old Bailey Street, making it the easiest stop of all.',
          },
          {
            q: 'Do these attractions charge admission?',
            a: 'Central Market, Tai Kwun, PMQ and Man Mo Temple are normally free to enter. Special exhibitions or events may be ticketed, so check each venue’s official page.',
          },
          {
            q: 'Is Central Market part of the escalator system?',
            a: 'No. It is the landmark beside the lower entrance, while the escalator system itself links Queen’s Road Central with Conduit Road up the hill.',
          },
          {
            q: 'When does Man Mo Temple open?',
            a: 'The temple generally opens during daytime hours, though times shift for festivals and ceremonies. Confirm with official sources before visiting.',
          },
          {
            q: 'Which stops suit families with children?',
            a: 'The Zoological and Botanical Gardens and Central Market’s open areas work well. Since the escalator route includes slopes and stairs, plan your route if you are pushing a pram.',
          },
          {
            q: 'When should I visit Lan Kwai Fong?',
            a: 'It comes alive from dusk onwards as restaurants and bars fill up. For a quiet daytime look, visit earlier in the day.',
          },
          {
            q: 'Can I see everything in one day?',
            a: 'Yes. Start after 10:20 and allow half to one full day, building in breaks at Central Market, Tai Kwun or the gardens depending on your pace.',
          },
        ],
        related: [
          { slug: 'directions', label: 'Getting here and maps' },
          { slug: 'schedule', label: 'Operating hours and how to ride' },
          { slug: 'food', label: 'Where to eat along the route' },
        ],
      },
    },
  },

  food: {
    path: 'food/',
    navLabel: { zh: '美食', en: 'Food' },
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯美食｜雲吞麵、蛋撻、大排檔與蘇豪晚餐',
          description:
            '沿中環半山扶手電梯逐段整理美食地圖：由皇后大道中與威靈頓街的雲吞麵、歌賦街牛腩與結志街奶茶，到士丹利街燒味、擺花街蛋撻與蘇豪伊利近街的晚餐選擇。',
        },
        h1: '中環半山扶手電梯美食地圖',
        lead:
          '扶梯沿線是香港密度最高的飲食走廊之一：一端是老字號麵店與大排檔，另一端是斜坡上的酒吧餐廳。以下按路段整理，方便順著行程覓食。',
        blocks: [
          {
            heading: '沿途美食一覽',
            table: {
              caption: '按扶梯分段整理的餐飲推薦（地址以街道為準，營業時間請以店家公布為準）',
              columns: ['路段', '口味', '代表選擇', '備註'],
              rows: [
                ['下段：皇后大道中／租庇利街', '選擇多元', '中環街市餐飲層', '有冷氣與座位，適合出發前補給'],
                ['威靈頓街一帶', '港式雲吞麵', '麥奀雲吞麵世家', '老字號，適合快速一碗再上路'],
                ['歌賦街／嘉咸街一帶', '清湯牛腩', '九記牛腩', '人氣高，午市常需排隊'],
                ['士丹利街一帶', '燒味', '一樂燒鵝', '以燒鵝最具代表性'],
                ['結志街／擺花街一帶', '茶餐廳與餅店', '蘭芳園、泰昌餅家', '絲襪奶茶與蛋撻的老式中環味道'],
                ['中段：荷李活道／美輪街', '大排檔', '勝香園', '地道街頭風味，留意休息日與付款方式'],
                ['伊利近街／士丹頓街（蘇豪）', '各國料理與酒吧', '街區自選', '晚餐首選，價格帶偏高'],
              ],
            },
          },
          {
            heading: '按行程節奏安排',
            bullets: [
              {
                title: '上路前：中環街市',
                text: '想吃個快又穩的一餐，先在起點附近的中環街市解決，有室內座位與空調，選擇也多。',
              },
              {
                title: '中途小食：蛋撻與奶茶',
                text: '結志街、擺花街一帶是傳統餅店與茶餐廳集中地，適合買件蛋撻或喝杯奶茶後再續搭扶梯。',
              },
              {
                title: '晚餐收尾：蘇豪與伊利近街',
                text: '上行到士丹頓街、伊利近街一帶，餐廳與酒吧密集，看完扶梯夜景直接入座，是最順的安排。',
              },
            ],
          },
          {
            heading: '用餐注意事項',
            bullets: [
              {
                title: '熱門時段',
                text: '週末與假日午市多數老字號都需排隊，建議避開 12:30–13:30 的尖峰，或早一點開飯。',
              },
              {
                title: '付款方式',
                text: '老店與大排檔可能只收現金或特定支付方式，出門前請備少量現金，並留意店家公告。',
              },
              {
                title: '休息日變動',
                text: '小店常有臨時休息或節日調整。若專程前往某間店，出發前最好向店家或官方平台確認當日營業情況。',
              },
            ],
          },
        ],
        faqs: [
          {
            q: '扶手電梯附近有什麼在地美食？',
            a: '由下而上包括威靈頓街的雲吞麵、歌賦街的清湯牛腩、士丹利街的燒味、結志街與擺花街的茶餐廳餅店，以及荷李活道一帶的大排檔。',
          },
          {
            q: '沿途有適合快速用餐的選擇嗎？',
            a: '有。中環街市餐飲層與威靈頓街的麵店都適合快速解決；想要坐下慢慢吃，則建議預留時間在蘇豪一帶用餐。',
          },
          {
            q: '九記牛腩要怎麼去？',
            a: '九記位於歌賦街一帶，可由扶梯中段經嘉咸街步行前往；因人氣高，午市與假日通常需排隊等候。',
          },
          {
            q: '蛋撻與奶茶在哪一段？',
            a: '結志街與擺花街一帶距離扶梯不遠，是傳統餅店與茶餐廳的集中地，常常順路就能買到。',
          },
          {
            q: '蘇豪的餐廳需要預約嗎？',
            a: '週末及節日晚餐建議提早訂位，平日若避開 19:00–20:00 高峰，通常仍有機會直接入座。',
          },
          {
            q: '老字號店家營業時間穩定嗎？',
            a: '不少小店會因食材賣完、臨時休息或節慶調整而提早打烊，建議出發前向店家確認，行程也預留備選。',
          },
          {
            q: '是否需要準備現金？',
            a: '建議準備少量現金。部分老店與街頭檔仍以現金或特定支付方式為主，實際請以店家公布為準。',
          },
          {
            q: '有適合素食者的選擇嗎？',
            a: '中環街市餐飲層與蘇豪一帶均有較多國際料理可供選擇，建議到店前先查看菜單或向店家查詢。',
          },
        ],
        related: [
          { slug: 'schedule', label: '運作時間與乘搭攻略' },
          { slug: 'directions', label: '交通指南與地圖' },
          { slug: 'attractions', label: '周邊景點推薦' },
        ],
      },
      en: {
        meta: {
          title: 'Where to Eat Near the Central-Mid-Levels Escalators in Hong Kong',
          description:
            'A food map of the Central-Mid-Levels Escalators: wonton noodles on Wellington Street, beef brisket on Kau U Fong, roast goose on Stanley Street, dai pai dong hawkers off Hollywood Road and dinner in SoHo.',
        },
        h1: 'Eating along the Central-Mid-Levels Escalators',
        lead:
          'The route threads one of Hong Kong’s densest dining corridors: nostalgic noodle houses and street stalls at the bottom, hillside bars and bistros at the top. Here is how to eat section by section.',
        blocks: [
          {
            heading: 'Food by section',
            table: {
              caption: 'Street-level guide; opening hours vary, so check with each venue before travelling',
              columns: ['Section', 'Cuisine', 'Notable stops', 'Notes'],
              rows: [
                ['Lower: Queen’s Road Central / Jubilee Street', 'Many options', 'Central Market dining floor', 'Indoor seating and air conditioning — good warm-up stop'],
                ['Wellington Street area', 'Wonton noodles', 'Mak’s Noodle', 'Long-standing shop, fast bowl before the climb'],
                ['Kau U Fong / Graham Street area', 'Beef brisket', 'Kau Kee Beef Brisket', 'Very popular; expect a queue at lunch'],
                ['Stanley Street area', 'Roast meat', 'Yat Lok Roast Goose', 'Best known for roast goose'],
                ['Gage Street / Lyndhurst Terrace area', 'Cha chaan teng and bakeries', 'Lan Fong Yuen, Tai Cheong Bakery', 'Old-school milk tea and egg tarts'],
                ['Middle: Hollywood Road / Mee Lun Street', 'Dai pai dong hawker stalls', 'Sing Heung Yuen', 'Street-side classic; check rest days and payment methods'],
                ['Elgin / Staunton Street (SoHo)', 'International dining and bars', 'Take your pick', 'Dinner stop of choice; prices run higher'],
              ],
            },
          },
          {
            heading: 'Matching food to your pace',
            bullets: [
              {
                title: 'Before boarding: Central Market',
                text: 'For a quick, dependable meal, eat at Central Market next to the lower entrance — plenty of choice, seats and air conditioning.',
              },
              {
                title: 'Mid-ride snack: egg tarts and milk tea',
                text: 'Gage Street and Lyndhurst Terrace hold the old bakeries and cha chaan tengs; grab a tart and a cup of tea before stepping back on.',
              },
              {
                title: 'Finish with dinner in SoHo',
                text: 'Ride up to Staunton and Elgin Street where restaurants and bars cluster, then take a table after the night views from the escalator.',
              },
            ],
          },
          {
            heading: 'Good to know before you queue',
            bullets: [
              {
                title: 'Peak times',
                text: 'Heritage noodle shops fill up at weekends and holidays. Avoid the 12:30–13:30 lunch rush or eat earlier.',
              },
              {
                title: 'Payment',
                text: 'Some old shops and stalls remain cash-only or accept selected wallets only. Carry some cash and check the notice at the door.',
              },
              {
                title: 'Changing rest days',
                text: 'Small shops take ad hoc breaks and adjust hours during festivals. If you are going out of your way, confirm before you set off.',
              },
            ],
          },
        ],
        faqs: [
          {
            q: 'What local food should I try near the escalators?',
            a: 'From bottom to top: wonton noodles on Wellington Street, beef brisket around Kau U Fong, roast meat on Stanley Street, dai pai dong stalls off Hollywood Road, and egg tarts near Gage Street.',
          },
          {
            q: 'Are there quick places to eat along the way?',
            a: 'Yes — Central Market’s dining floor and the Wellington Street noodle shops are fast. For a relaxed sit-down meal, budget time for SoHo.',
          },
          {
            q: 'How do I reach Kau Kee Beef Brisket?',
            a: 'It sits on Kau U Fong, a short walk from the middle section via Graham Street. Expect queues at lunchtime and weekends.',
          },
          {
            q: 'Where can I find egg tarts and milk tea?',
            a: 'Around Gage Street and Lyndhurst Terrace, just off the escalator, where traditional bakeries and cha chaan tengs cluster.',
          },
          {
            q: 'Should I reserve a table in SoHo?',
            a: 'Yes for weekend and holiday dinners. On weeknights you can often walk in if you avoid the 19:00–20:00 peak.',
          },
          {
            q: 'Are old-school shops reliable opening hours-wise?',
            a: 'Many close early once food sells out, or take breaks during festivals. Confirm ahead and keep a backup option nearby.',
          },
          {
            q: 'Do I need cash?',
            a: 'It helps. Some heritage shops and street stalls remain cash-preferred or accept limited digital payments, so check at the counter.',
          },
          {
            q: 'Are there vegetarian-friendly options?',
            a: 'Central Market’s dining floor and the international restaurants of SoHo usually offer the widest choice — check menus before you go.',
          },
        ],
        related: [
          { slug: 'schedule', label: 'Operating hours and how to ride' },
          { slug: 'directions', label: 'Getting here and maps' },
          { slug: 'attractions', label: 'Nearby attractions' },
        ],
      },
    },
  },
};

export const topicSlugs: TopicSlug[] = ['schedule', 'directions', 'attractions', 'food'];
