import type { GuideDef } from './types';

/** F · 实用旅游决策（3 页）。儿童与无障碍内容按机电署安全指引作事实软化，不提供保证。 */
export const practicalGuides: GuideDef[] = [
  {
    slug: 'family-guide',
    group: 'practical',
    title: { zh: '親子指南', en: 'Family guide' },
    related: ['accessibility', 'itinerary/30-minutes', 'rainy-day-guide', 'visitor-faq'],
    content: {
      zh: {
        meta: {
          title: '帶小朋友遊覽中環半山扶手電梯｜安全、嬰兒車與休息安排',
          description: '親子遊覽中環半山扶手電梯的路線取捨：出入口安全、嬰兒車與升降機、斜路與樓梯、休息與雨天安排，依機電工程署安全指引整理，不作全線無障礙保證。',
        },
        kicker: 'FAMILY GUIDE',
        h1: '帶小朋友搭扶梯，要先想的三件事',
        lead: '這套系統是公共通勤設施，不是兒童遊樂設施。帶小朋友出遊，重點在出入口安全、嬰兒車的替代路線，以及斜路與樓梯對體力的影響；本站沒有完成全線無障礙實測，不把任何路段寫成「一定適合」。',
        facts: [
          { label: '設施性質', value: '公共行人通勤系統' },
          { label: '嬰兒車', value: '機電署指引建議改用升降機' },
          { label: '街道特性', value: '斜坡與樓梯多' },
          { label: '建議行程', value: '短路線、預留休息' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '一、出入口與乘搭安全',
            bullets: [
              { title: '先離開通道再整理', text: '出入口與踏級是通道，替孩子整理衣物、拿水或看地圖前，先走到街道旁或平台邊。' },
              { title: '牽好同行幼童', text: '扶梯運行時不要讓幼童在出入口奔跑或逆向往返；人多時更要避免停在踏級末端。' },
              { title: '看清方向燈', text: '上午與日間方向相反，先在連接點確認當下方向，避免帶著孩子白走一趟斜路。' },
            ],
          },
          {
            heading: '二、嬰兒車與無障礙',
            paragraphs: [
              '機電工程署的安全指引建議嬰兒車、輪椅使用者及攜帶大件行李者使用合適的升降機，不應直接乘扶手電梯。中環至半山沿線街道也不是連續無階梯通道，部分連接點有樓梯與明顯坡度。',
              '本站沒有逐段實測升降機位置與開放情況，因此不提供「哪一段最適合嬰兒車」的保證。出發前請按目的地街區，向車站、場館與現場指示確認可用的升降機與地面替代動線。',
            ],
          },
          {
            heading: '三、路線與休息安排',
            table: {
              caption: '按同行者狀態分類，非設施或營業保證',
              columns: ['同行情況', '較合適的安排', '須注意'],
              rows: [
                ['嬰兒車或幼童', '30 分鐘短路線，只取下段', '先查升降機與地面動線'],
                ['學齡兒童', '一小時路線，中段轉出逛老街', '斜路與街檔人流'],
                ['需要室內休息', '以中環街市、PMQ、大館為停留點', '各場所開放與入場安排'],
                ['雨天或酷熱', '縮短露天段、增加休息', '濕滑路面與天文台警告'],
              ],
            },
          },
          {
            heading: '家長實用提醒',
            bullets: [
              { title: '不保證設施', text: '本站不列沿途洗手間、育嬰室或特定休息設施的位置與開放時間，請按當日場所資訊查證。' },
              { title: '回程先定', text: '扶梯按時段單向，不能假設可即時反向搭回；帶孩子時先決定步行下坡或路面交通。' },
              { title: '天氣查證', text: '香港夏季炎熱多雨，遇暴雨、颱風信號或酷熱警告請查香港天文台並縮短行程。' },
              { title: '資料日期', text: '本頁資料整理日為 2026-11-09；例行維護與臨時安排見運輸署交通通告與現場告示。' },
            ],
          },
        ],
        faqs: [
          {
            q: '可以推嬰兒車上扶梯嗎？',
            a: '不建議。機電工程署安全指引建議嬰兒車使用升降機而非扶手電梯；沿線街道亦多斜坡與樓梯，請先確認可用的升降機與地面替代動線。',
          },
          {
            q: '帶小朋友適合走完整條路線嗎？',
            a: '本站不建議把「走完全線」當成親子目標。30 分鐘或一小時的短路線較能配合體力與休息需要，也方便中途離開。',
          },
          {
            q: '沿線有洗手間或育嬰室嗎？',
            a: '本站不列具體設施位置或開放時間，也不保證任何路段設有這類設施。建議以中環街市、PMQ、大館等場所為停留點，並向場所查證當日安排。',
          },
          {
            q: '下雨天適合帶孩子去嗎？',
            a: '可以調整但不宜勉強。扶梯街道接口露天且濕滑，遇暴雨或天文台警告時應縮短行程或改期，並以室內場所為主。',
          },
        ],
        mapsQuery: 'Central Market PMQ Tai Kwun family Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Visiting the Mid-Levels Escalators with Children | Safety & Pushchairs',
          description: 'Family planning for the Central–Mid-Levels Escalators: landing safety, pushchairs and lifts, slopes and steps, rest stops and wet-weather plans, following EMSD safety guidance with no step-free guarantee.',
        },
        kicker: 'FAMILY GUIDE',
        h1: 'Three things to settle before riding with children',
        lead: 'This is public commuter infrastructure, not a children’s attraction. With a family, the priorities are landing safety, an alternative to pushchairs, and the effect of slopes and steps on stamina. No section survey is published here, so no part of the route is labelled definitely suitable.',
        facts: [
          { label: 'Facility type', value: 'Public pedestrian commuter system' },
          { label: 'Pushchairs', value: 'EMSD guidance advises using lifts' },
          { label: 'Streets', value: 'Many slopes and steps' },
          { label: 'Suggested plan', value: 'Short route, with rest built in' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: '1. Safety at landings and on the ride',
            bullets: [
              { title: 'Step aside before sorting anything out', text: 'Entry points and steps are passageways. Adjust a child’s clothes, get a drink or check a map only after moving to the side of the street or a landing edge.' },
              { title: 'Keep young children close', text: 'Do not let children run at landings or travel against the flow; when it is busy, avoid stopping at the end of the steps.' },
              { title: 'Read the direction signs', text: 'Morning and daytime directions are opposite. Confirm the current direction at the connection so you do not climb a slope with children for nothing.' },
            ],
          },
          {
            heading: '2. Pushchairs and step-free access',
            paragraphs: [
              'EMSD safety guidance advises pushchairs, wheelchair users and people with bulky luggage to use suitable lifts rather than escalators. Streets between Central and the Mid-Levels are not a continuous step-free route; some connections involve steps and clear gradients.',
              'No section-by-section survey of lift locations or availability is published here, so there is no claim about which part best suits a pushchair. Confirm usable lifts and street-level alternatives with stations, venues and on-site signs for the streets you plan to use.',
            ],
          },
          {
            heading: '3. Route and rest planning',
            table: {
              caption: 'Grouped by your party; no facility or business-hours guarantee',
              columns: ['Your party', 'Sensible arrangement', 'Watch for'],
              rows: [
                ['Pushchair or toddler', 'A 30-minute route using the lower section only', 'Check lifts and street-level routes first'],
                ['School-age children', 'A one-hour route, leaving mid-route for old streets', 'Slopes and market-street crowds'],
                ['Need indoor rest', 'Use Central Market, PMQ or Tai Kwun as stops', 'Each venue’s opening and entry arrangements'],
                ['Rain or heat', 'Shorten exposed segments and add rest', 'Wet surfaces and Observatory warnings'],
              ],
            },
          },
          {
            heading: 'Practical reminders for parents',
            bullets: [
              { title: 'No facility guarantees', text: 'No locations or hours for toilets, baby-care rooms or specific rest facilities are listed here; check venue information on the day.' },
              { title: 'Settle the return', text: 'The escalators run one way by time of day, with no assumed immediate reverse ride; decide between walking downhill and surface transport first.' },
              { title: 'Check the weather', text: 'Hong Kong summers are hot and wet. In heavy rain, typhoon signals or heat warnings, check the Hong Kong Observatory and shorten the visit.' },
              { title: 'Date of information', text: 'Compiled 2026-11-09; routine maintenance and temporary arrangements appear in Transport Department notices and on-site signs.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Can I take a pushchair on the escalators?',
            a: 'It is not advisable. EMSD guidance advises using lifts rather than escalators for pushchairs, and the surrounding streets have slopes and steps. Confirm usable lifts and street-level alternatives first.',
          },
          {
            q: 'Should a family try to cover the whole route?',
            a: 'Covering the full system is not recommended as a family goal here. A 30-minute or one-hour short route better matches stamina and rest needs and is easier to leave mid-way.',
          },
          {
            q: 'Are there toilets or baby-care rooms along the route?',
            a: 'No facility locations or hours are listed, and no section is guaranteed to have them. Use venues such as Central Market, PMQ or Tai Kwun as stops and check their current arrangements.',
          },
          {
            q: 'Is a rainy day suitable with children?',
            a: 'It can be adapted but should not be forced. Street interfaces are exposed and slippery; in heavy rain or Observatory warnings, shorten or postpone and focus on indoor venues.',
          },
        ],
        mapsQuery: 'Central Market PMQ Tai Kwun family Central Hong Kong',
      },
    },
  },
  {
    slug: 'where-to-stay',
    group: 'practical',
    title: { zh: '附近住宿', en: 'Where to stay' },
    related: ['mtr-hong-kong', 'mtr-central', 'itinerary/half-day', 'return-to-central'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯附近住宿攻略｜中環、上環與半山區位比較',
          description: '按中環、上環與半山三個區位比較前往扶梯的動線、坡度、交通與夜間回程考量，協助按行程選住宿範圍；本站不推薦酒店、不列價格或訂房服務。',
        },
        kicker: 'WHERE TO STAY',
        h1: '住哪一區，去扶梯最順？',
        lead: '扶梯連接的是中環核心與半山住宅區，住宿區位會直接影響你每天要走多少斜坡。這頁按區位比較動線與交通特性，不推薦酒店、不列價格，也不提供訂房服務。',
        facts: [
          { label: '比較範圍', value: '中環 · 上環 · 半山' },
          { label: '關鍵差異', value: '坡度、港鐵連接、夜間回程' },
          { label: '規劃方式', value: '按行程重點選區位' },
          { label: '酒店與價格', value: '不列，向住宿方查證' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '三個區位的差別',
            table: {
              caption: '區位特性分類，不含酒店名稱、價格或交通時間保證',
              columns: ['區位', '動線特性', '較適合的行程'],
              rows: [
                ['中環核心', '靠近扶梯下段與港鐵中環站、香港站', '首次到訪、機場快線進出、短時間停留'],
                ['上環一帶', '近荷李活道、文武廟與舊城西側', '舊城步行、文武廟與古物店區'],
                ['半山一帶', '靠近扶梯上段，街道坡度較明顯', '想住在較安靜街區、可接受每日上下坡'],
              ],
            },
          },
          {
            heading: '按行程重點選區位',
            bullets: [
              { title: '以扶梯與交通為主', text: '中環核心最接近下段與兩個車站，減少拖行李穿越斜路的機會；由香港站抵達者尤其要先確認升降機。' },
              { title: '以舊城與歷史建築為主', text: '上環一帶方便把文武廟、荷李活道與中環舊城步行排在早晚時段，不必每天橫跨整段扶梯。' },
              { title: '以安靜與住宅街景為主', text: '半山一帶離上段較近，但要接受明顯坡度；夜間回程應先查路面交通，不能假設可即時反向乘搭扶梯。' },
            ],
          },
          {
            heading: '行李與無障礙考量',
            paragraphs: [
              '由機場快線香港站或港鐵中環站拖行李前往住宿，出口與街道選擇會決定是否要經過樓梯。機電工程署的安全指引建議攜帶大件行李者使用升降機；需要無障礙動線者，應在訂房前向住宿方確認入口、升降機與周邊街道。',
              '本站沒有實測各區位的步行分鐘數、坡度或升降機可用性，也不保證任何酒店具備無障礙設施。',
            ],
          },
          {
            heading: '查證範圍',
            bullets: [
              { title: '不推薦酒店', text: '本站不列酒店名稱、房價、評價、訂房連結或合作資訊，避免過時與商業推薦。' },
              { title: '價格與供應', text: '房價、稅項與空房情況由住宿方與訂房平台決定，請自行查證。' },
              { title: '交通與夜間', text: '港鐵、機場快線班次與路面交通安排以營運方公布為準，本站沒有即時資料。' },
              { title: '資料日期', text: '本頁資料整理日為 2026-11-09，僅提供區位規劃邏輯。' },
            ],
          },
        ],
        faqs: [
          {
            q: '住哪一區去扶梯最方便？',
            a: '若以扶梯與機場快線／港鐵進出為主，中環核心最接近下段與兩個車站；若以舊城步行為主，上環一帶較順；半山一帶靠近上段但街道坡度較大，請按行程重點選擇。',
          },
          {
            q: '有推薦的酒店嗎？',
            a: '本站不推薦酒店、不列價格與評價，也不提供訂房服務。請按區位自行向住宿方與訂房平台查證。',
          },
          {
            q: '從香港站拖行李到住宿會很難走嗎？',
            a: '取決於出口與街道選擇。中環至半山一帶有斜坡與樓梯，機電署指引建議大件行李使用升降機；訂房前先向住宿方確認入口與升降機動線。',
          },
          {
            q: '住半山可以每天搭扶梯下山嗎？',
            a: '上午官方所列為下行往中環，之後轉為上行；但個別路段維護與現場方向會影響實際安排，且不能假設即時反向回程。請以方向燈與交通通告為準。',
          },
        ],
        mapsQuery: 'Central Sheung Wan Mid-Levels Hong Kong hotels area',
      },
      en: {
        meta: {
          title: 'Where to Stay Near the Mid-Levels Escalators | Central, Sheung Wan & Mid-Levels',
          description: 'Compare Central, Sheung Wan and the Mid-Levels as bases by walking routes, gradients, MTR links and evening returns; no hotel names, prices or booking services are listed.',
        },
        kicker: 'WHERE TO STAY',
        h1: 'Which area makes the escalators easiest to reach?',
        lead: 'The escalators link central Central with a residential hillside, so where you stay determines how many slopes you climb each day. This page compares areas by route and transport characteristics, without recommending hotels, quoting prices or handling bookings.',
        facts: [
          { label: 'Areas compared', value: 'Central · Sheung Wan · Mid-Levels' },
          { label: 'Key differences', value: 'Gradient, MTR links, evening return' },
          { label: 'Method', value: 'Choose by itinerary priority' },
          { label: 'Hotels & prices', value: 'Not listed; check with providers' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'How the three areas differ',
            table: {
              caption: 'Grouped by area character; no hotel names, prices or journey-time guarantees',
              columns: ['Area', 'Route character', 'Good for'],
              rows: [
                ['Central core', 'Close to the lower section and MTR Central / Hong Kong Station', 'First visits, Airport Express arrivals, short stays'],
                ['Sheung Wan', 'Near Hollywood Road, Man Mo Temple and the western old town', 'Old-town walks, temple and antiques area'],
                ['Mid-Levels', 'Near the upper section, with steeper streets', 'A quieter residential base, if daily slopes are acceptable'],
              ],
            },
          },
          {
            heading: 'Choose by itinerary priority',
            bullets: [
              { title: 'Escalators and transport first', text: 'Central core is closest to the lower section and both stations, reducing the chance of hauling luggage across slopes. Airport Express arrivals should confirm lifts first.' },
              { title: 'Old town and heritage first', text: 'Sheung Wan makes it easier to place Man Mo Temple, Hollywood Road and old-town walks early or late in the day without crossing the whole route daily.' },
              { title: 'Quiet and residential streets first', text: 'The Mid-Levels sit near the upper end but involve clear gradients. Check surface transport for the evening return; do not assume an immediate reverse escalator ride.' },
            ],
          },
          {
            heading: 'Luggage and step-free considerations',
            paragraphs: [
              'Walking from Hong Kong Station or MTR Central to accommodation with luggage depends on the exit and street you choose. EMSD guidance advises people with bulky luggage to use lifts; anyone needing step-free access should confirm entrances, lifts and surrounding streets with the accommodation before booking.',
              'No measured walking times, gradients or lift availability are published here, and no hotel is guaranteed to have accessible facilities.',
            ],
          },
          {
            heading: 'Scope of verification',
            bullets: [
              { title: 'No hotel recommendations', text: 'No property names, rates, reviews, booking links or partnerships are listed, to avoid stale or commercially biased information.' },
              { title: 'Prices and availability', text: 'Rates, taxes and availability are set by accommodation providers and booking platforms; check them yourself.' },
              { title: 'Transport and night', text: 'MTR, Airport Express and surface transport schedules belong to the operators; no live data is available here.' },
              { title: 'Date of information', text: 'Compiled 2026-11-09; this page provides area-planning logic only.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Which area is most convenient for the escalators?',
            a: 'For the escalators and Airport Express / MTR arrivals, Central core is closest to the lower section and both stations. Sheung Wan suits old-town walks, while the Mid-Levels are near the upper end but steeper. Choose by your itinerary priority.',
          },
          {
            q: 'Do you recommend any hotels?',
            a: 'No hotels, prices or reviews are recommended here, and no bookings are handled. Check with accommodation providers and booking platforms by area.',
          },
          {
            q: 'Is it hard to walk from Hong Kong Station with luggage?',
            a: 'It depends on the exit and streets. The Central-to-Mid-Levels area has slopes and steps, and EMSD guidance advises lifts for bulky luggage. Confirm entrance and lift routes with your accommodation before booking.',
          },
          {
            q: 'If I stay in the Mid-Levels, can I ride downhill every morning?',
            a: 'Published operation is downhill towards Central in the morning and uphill later, but maintenance on individual sections and on-site direction can affect it, and an immediate reverse ride cannot be assumed. Follow direction signs and traffic notices.',
          },
        ],
        mapsQuery: 'Central Sheung Wan Mid-Levels Hong Kong hotels area',
      },
    },
  },
  {
    slug: 'visitor-faq',
    group: 'practical',
    title: { zh: '常見問題完整指南', en: 'Complete visitor FAQ' },
    related: ['uphill-downhill', 'entrances', 'return-to-central', 'family-guide'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯常見問題完整指南｜時間、方向、交通與回程',
          description: '一次整理中環半山扶手電梯的常見問題：是否免費、開放與上落時間、兩個官方來源差異、入口與地圖、無障礙、天氣、維護通告、回程與評分資料來源。',
        },
        kicker: 'VISITOR FAQ',
        h1: '出發前最常被問的十二件事',
        lead: '這頁把散落在各專題的答案集中起來，方便行前一次核對。每題都保留官方來源差異與查證界線；若需要更完整的路段或場所資訊，請點進對應專題。',
        facts: [
          { label: '收費', value: '免費' },
          { label: '上午方向', value: '06:00–10:00 下行往中環' },
          { label: '上行起始', value: '10:00 或 10:20，視官方來源' },
          { label: '範圍', value: '皇后大道中 → 干德道' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '時間、方向與費用',
            bullets: [
              { title: '要門票或拍卡嗎？', text: '不需要，這是免費的公共行人系統；周邊場館、餐飲與山頂纜車的收費與扶梯無關。' },
              { title: '幾點可以搭？', text: '運輸署列 06:00–10:00 下行、10:00 至午夜上行；旅發局列上行 10:20 至午夜。本站並列兩種說法，不推算中間時段。' },
              { title: '10:00–10:20 是全線停運嗎？', text: '本站沒有資料證實存在固定的全線停運區間；請以現場方向燈與管理方告示為準。' },
              { title: '可以來回搭嗎？', text: '不能假設可以。系統按時段單向，回程要用街道步行、路面交通或其他方式。' },
            ],
          },
          {
            heading: '入口、地圖與交通',
            table: {
              caption: '把常見誤解與正確理解並列；連結見各專題',
              columns: ['常見疑問', '正確理解', '延伸專題'],
              rows: [
                ['只有一個入口嗎？', '沿線多條街道都有進出連接點', '入口指南／出口指南'],
                ['Maps 的租庇利街是入口嗎？', '只是地點標記，不是已實測唯一入口', '入口指南'],
                ['終點是太平山頂嗎？', '終點一帶是半山干德道', '完整路線'],
                ['由哪個港鐵出口去？', '按你想加入的路段選街道，再看車站指示', '中環站／香港站'],
                ['有官方路線圖嗎？', '本站以文字街道順序與 Maps 搜尋呈現', '完整路線'],
              ],
            },
          },
          {
            heading: '天氣、維護與特殊需要',
            bullets: [
              { title: '下雨可以搭嗎？', text: '扶梯與部分行人道有上蓋，但街道接口露天；遇暴雨或警告請查香港天文台與現場告示，本站沒有即時營運狀態。' },
              { title: '哪裡查維修？', text: '運輸署交通通告列出個別扶梯段的例行維護與臨時安排；一段開放不代表其餘各段也可用。' },
              { title: '輪椅與嬰兒車呢？', text: '機電工程署指引建議使用升降機，沿線街道不是連續無階梯通道；本站沒有全線無障礙實測。' },
              { title: '評分是哪裡來的？', text: '4.1 分／10,641 則為 2026-11-09 提供的 Google Maps 外部日期快照，不是本站收集的評價，也不會自動更新。' },
            ],
          },
          {
            heading: '回程與行程',
            paragraphs: [
              '由上段返回中環時，請把回程當成獨立行程：沿街道步行下坡、使用路面公共交通或乘的士，都要按當日人流、天氣與體力決定。本站不列路線號碼、車資或固定步行分鐘數。',
              '若時間有限，可參考 30 分鐘、1 小時、半日與夜間行程；各路線有不同的停留點、次序與返回方式，不是只把標題裡的時間數字換掉。',
            ],
          },
        ],
        faqs: [
          { q: '中環半山扶手電梯要收費嗎？', a: '不用。這是免費的公共行人系統，沒有閘機或車票；周邊場所與其他交通工具的收費另計。' },
          { q: '開放時間與上落方向是什麼？', a: '運輸署列 06:00–10:00 下行、10:00 至午夜上行；旅發局列上行由 10:20 開始。兩個官方頁的起始時刻不同，本站並列，並以現場方向燈與通告為準。' },
          { q: '10:00 到 10:20 是不是一定全線停運？', a: '不能這樣說。本站沒有資料證實存在固定的全線停運區間；兩個官方頁對上行起始列示不同，請按現場指示判斷。' },
          { q: '可以在哪裡走進扶梯？', a: '沿線多條街道都有進出連接點。Google Maps 的租庇利街地址只是地點標記，不是已實測的唯一入口；按你身處的街道選連接點，並看現場指示。' },
          { q: '扶梯會到太平山頂嗎？', a: '不會。官方所述的終點一帶是半山干德道，前往山頂需另外規劃交通與票務。' },
          { q: '從港鐵中環站或香港站怎麼去？', a: '先決定要在下段還是中段加入，再按車站街道指示或運輸署 HKeMobility 找路線；本站不指定出口編號或步行分鐘數。' },
          { q: '搭上去之後怎麼回中環？', a: '把回程視為獨立行程：沿街道步行下坡、路面公共交通或的士，按當日情況選擇；不能假設可即時反向乘搭扶梯。' },
          { q: '下雨天適合去嗎？', a: '扶梯與部分行人道有上蓋，但街道接口露天且濕滑；遇暴雨、雷暴或颱風信號，請查香港天文台警告並縮短行程或改期。' },
          { q: '輪椅、嬰兒車或大件行李可以搭嗎？', a: '機電工程署安全指引建議使用升降機而非扶手電梯；沿線街道與樓梯不是連續無階梯通道，須逐段確認升降機與地面替代路線。' },
          { q: '哪裡可以查例行維護？', a: '運輸署交通通告會列出個別扶梯段的例行維護與臨時安排，頁腳與資料來源區塊都有連結；本站沒有即時營運狀態。' },
          { q: '網站上的評分是官方評價嗎？', a: '不是。4.1 分／10,641 則是 2026-11-09 提供的 Google Maps 外部日期快照，非本站收集的評論，也不會自動更新。' },
          { q: '只有半小時值得去嗎？', a: '值得，但應只取下段一小段並搭配中環街市周邊；30 分鐘是行程預算，不是全線乘搭時間的保證。' },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hong Kong visitor information',
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators FAQ | Hours, Direction, Transport & Return',
          description: 'One place for the common questions about the Central–Mid-Levels Escalators: free entry, hours and directions, the two official sources, entrances and maps, accessibility, weather, maintenance, the return trip and the rating source.',
        },
        kicker: 'VISITOR FAQ',
        h1: 'Twelve questions most often asked before a visit',
        lead: 'This page gathers answers spread across the topic guides so you can check everything at once. Each answer keeps the official source differences and the limits of what is verified; follow the linked guides for fuller route or venue detail.',
        facts: [
          { label: 'Fare', value: 'Free' },
          { label: 'Morning direction', value: '06:00–10:00 downhill to Central' },
          { label: 'Uphill start', value: '10:00 or 10:20, by source' },
          { label: 'Route', value: "Queen's Road Central → Conduit Road" },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Hours, direction and cost',
            bullets: [
              { title: 'Is there a ticket or card tap?', text: 'No. It is a free public pedestrian system. Charges at nearby venues, restaurants and the Peak Tram are unrelated to the escalators.' },
              { title: 'When can I ride?', text: 'The Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill from 10:20 to midnight. Both are shown here, with no calculation of the gap.' },
              { title: 'Is 10:00–10:20 a system-wide shutdown?', text: 'No fixed shutdown is evidenced here; follow on-site direction signs and operator notices.' },
              { title: 'Can I ride back and forth?', text: 'Do not assume so. The system runs one way by time of day, so the return needs streets, surface transport or another option.' },
            ],
          },
          {
            heading: 'Entrances, maps and transport',
            table: {
              caption: 'Common misunderstandings beside the accurate reading; see the linked guides for detail',
              columns: ['Common question', 'Accurate reading', 'See also'],
              rows: [
                ['Is there only one entrance?', 'Street connections exist along the route', 'Entrances / Exits'],
                ['Is the Jubilee Street pin an entrance?', 'A location marker, not a verified sole entrance', 'Entrances'],
                ['Does it reach Victoria Peak?', 'The upper end is Conduit Road in the Mid-Levels', 'Route map'],
                ['Which MTR exit should I use?', 'Choose a section, then follow station street signs', 'MTR Central / Hong Kong Station'],
                ['Is there an official route map?', 'This site uses a written street sequence and Maps search', 'Route map'],
              ],
            },
          },
          {
            heading: 'Weather, maintenance and specific needs',
            bullets: [
              { title: 'Can I ride in rain?', text: 'Escalators and some walkways are covered but street interfaces are open. In heavy rain or warnings, check the Hong Kong Observatory and on-site notices; no live status is available here.' },
              { title: 'Where do I check maintenance?', text: 'Transport Department traffic notices list routine maintenance and temporary arrangements for individual sections. One open section does not establish the others.' },
              { title: 'Wheelchairs and pushchairs?', text: 'EMSD guidance advises lifts, and the streets and steps are not a continuous step-free route; no whole-system accessibility survey is published here.' },
              { title: 'Where does the rating come from?', text: 'The 4.1 rating and 10,641 reviews are an external Google Maps snapshot dated 2026-11-09, not reviews collected here, and they do not update automatically.' },
            ],
          },
          {
            heading: 'Return and itineraries',
            paragraphs: [
              'Treat the return from the upper section as a separate leg: walking downhill, surface public transport or a taxi, chosen by the day’s crowds, weather and stamina. No route numbers, fares or fixed walking minutes are listed here.',
              'With limited time, see the 30-minute, one-hour, half-day and evening itineraries. Each has its own stops, order and return plan rather than just a different number in the title.',
            ],
          },
        ],
        faqs: [
          { q: 'Is there a fee for the Central–Mid-Levels Escalators?', a: 'No. It is a free public pedestrian system with no gates or tickets; nearby venues and other transport are charged separately, if at all.' },
          { q: 'What are the hours and directions?', a: 'The Transport Department lists downhill 06:00–10:00 and uphill 10:00–midnight; the Tourism Board lists uphill from 10:20. The official pages differ on the uphill start, so both are shown and on-site signs and notices take priority.' },
          { q: 'Is the whole system closed between 10:00 and 10:20?', a: 'That cannot be stated. No fixed system-wide shutdown is evidenced here; the two official pages list different uphill start times, so follow the signs on site.' },
          { q: 'Where can I join the escalators?', a: 'There are street connections along the route. The Jubilee Street address on Google Maps is a location marker, not a verified sole entrance; choose a connection based on the street you are on and follow on-site signs.' },
          { q: 'Do the escalators reach Victoria Peak?', a: 'No. The published upper end is around Conduit Road in the Mid-Levels; reaching the Peak requires separate transport and ticketing.' },
          { q: 'How do I get there from MTR Central or Hong Kong Station?', a: 'Decide whether to join at the lower or middle section, then use station street signs or HKeMobility. No fixed exit numbers or walking minutes are published here.' },
          { q: 'How do I get back to Central after riding up?', a: 'Treat the return as a separate leg: walk downhill, use surface transport or take a taxi, according to the day. Do not assume an immediate reverse escalator ride.' },
          { q: 'Is it suitable in the rain?', a: 'Escalators and some walkways are covered, but street interfaces are exposed and slippery. In heavy rain, thunderstorms or typhoon signals, check Observatory warnings and shorten or postpone the visit.' },
          { q: 'Can wheelchairs, pushchairs or large luggage use it?', a: 'EMSD safety guidance advises using lifts rather than escalators; surrounding streets and steps are not a continuous step-free route. Confirm lifts and street-level alternatives section by section.' },
          { q: 'Where can I check routine maintenance?', a: 'Transport Department traffic notices list maintenance and temporary arrangements for individual sections; links are in the footer and sources block. This site has no live operating status.' },
          { q: 'Is the rating on this site an official review score?', a: 'No. The 4.1 rating and 10,641 reviews are an external Google Maps snapshot dated 2026-11-09, not reviews collected here, and they do not update automatically.' },
          { q: 'Is it worth visiting with only 30 minutes?', a: 'Yes, but keep to one short lower-section stretch plus the Central Market area. Thirty minutes is an itinerary budget, not a guaranteed full-route ride time.' },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hong Kong visitor information',
      },
    },
  },
];
