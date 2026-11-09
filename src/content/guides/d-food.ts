import type { GuideDef } from './types';

/** D · 餐饮、咖啡与购物（6 页）。一律按街区与类型规划，不列未核实的店名、菜单、价格或营业时间。 */
export const foodGuides: GuideDef[] = [
  {
    slug: 'food/soho-restaurants',
    group: 'food',
    title: { zh: 'SoHo 餐廳攻略', en: 'SoHo restaurants' },
    related: ['nearby/soho', 'food/bars-nightlife', 'food/coffee-shops', 'itinerary/soho-evening'],
    content: {
      zh: {
        meta: {
          title: 'SoHo 蘇豪區餐廳攻略｜扶梯沿線餐飲街道與類型',
          description: '按士丹頓街、伊利近街與荷李活道以南的街道分區，整理 SoHo 餐廳的類型、預算考量、用餐時段與由扶梯中段前往的方式，不列未核實店名、價格或營業時間。',
        },
        kicker: 'FOOD · SOHO',
        h1: '在 SoHo 找餐廳：先看街道，再看類型',
        lead: 'SoHo 的餐飲集中在扶梯中段周邊的斜坡街道。與其追逐一份可能過時的「必吃」名單，不如先按街道、菜式類型與用餐時段縮小範圍，再用官方地圖與店家當日資料確認。',
        facts: [
          { label: '主要街區', value: '士丹頓街、伊利近街一帶' },
          { label: '由扶梯前往', value: '中段街道連接點轉出' },
          { label: '規劃方式', value: '按街道 × 菜式 × 時段' },
          { label: '店名與價格', value: '本站不列，向店家查證' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '按街道分區理解 SoHo',
            paragraphs: [
              '荷李活道以南的街道多為斜坡，餐飲沿士丹頓街、伊利近街與相鄰小巷分布。不同街道的氣氛、座位型態與日夜人流差異明顯，選街道比選單一店家更能保證行程順暢。',
              '本站不列具體餐廳名稱、菜單、價錢、營業時間、訂位規則或個人試吃評價；這些資訊變動快，應向店家或官方地圖資料查證。',
            ],
          },
          {
            heading: '類型與預算的規劃方式',
            table: {
              caption: '依類型與情境分類，不含價格數字或推薦店家',
              columns: ['想吃的類型', '適合安排', '出發前確認'],
              rows: [
                ['多國料理與休閒餐館', '午餐或晚餐主餐', '訂位、最後點餐與付款方式'],
                ['輕食與咖啡', '逛街中途休息', '座位與是否適合久坐'],
                ['酒吧與小食', '傍晚至夜間', '年齡限制、營業與噪音'],
                ['特殊飲食需求', '事先向店家說明', '過敏、素食或宗教飲食安排'],
              ],
            },
          },
          {
            heading: '沿途順路怎麼排',
            bullets: [
              { title: '日間上行', text: '由扶梯下段加入，在中段 SoHo 一帶離開用餐，餐後沿荷李活道串連大館、PMQ，或按體力決定是否繼續上行。' },
              { title: '上午下行', text: '先在 SoHo 或中環街市吃早餐，再配合下行方向搭一段扶梯，避免餐後又折返上坡。' },
              { title: '傍晚與夜間', text: '把晚餐排在扶梯行程之後，並事先決定回中環的方式；扶梯按時段單向，不是可靠的回程工具。' },
              { title: '雨天', text: '街道接口露天，先在靠近連接點的街道選室內座位，並縮短在斜路上的步行。' },
            ],
          },
          {
            heading: '實用提醒',
            bullets: [
              { title: '先查當日資料', text: '營業時間、休息日與最後點餐時間以店家公布為準；本站沒有即時資料。' },
              { title: '斜坡與人流', text: '用餐前後會經過斜路與狹窄行人路，攜童或行動不便者先規劃較平緩的路線。' },
              { title: '尊重商戶', text: '拍攝店內、餐點與店員前先徵得同意，不要在門口或通道久留阻礙他人。' },
              { title: '不做推薦', text: '本站不收錄贊助、合作或「保證有位」的資訊，也不代替店家處理訂位。' },
            ],
          },
        ],
        faqs: [
          {
            q: 'SoHo 有哪些推薦餐廳？',
            a: '本站不列具體店名、價格或「必吃」清單，避免過時資訊。建議按街道與菜式類型縮小範圍，再向店家或官方地圖資料確認當日營業與訂位。',
          },
          {
            q: 'SoHo 用餐大概要多少預算？',
            a: '本站不提供價格數字。不同類型與時段差異很大，請直接向店家確認菜單與收費，並留意是否有服務費或最低消費。',
          },
          {
            q: '從扶梯去 SoHo 吃飯要在哪一段離開？',
            a: '中段近士丹頓街、伊利近街一帶的街道連接點較合適；一路搭到上段再回頭會多走斜路。',
          },
          {
            q: '有素食或過敏需求的選擇嗎？',
            a: '本站不保證任何店家能配合特殊飲食。請在點餐前直接向店家說明過敏、素食或宗教飲食需求。',
          },
        ],
        mapsQuery: 'SoHo Staunton Street restaurants Central Hong Kong',
      },
      en: {
        meta: {
          title: 'SoHo Restaurants Guide | Streets & Types Along the Escalators',
          description: 'Plan dining in SoHo by street, cuisine type and time of day around Staunton and Elgin Street, including how to reach it from the middle escalator section, with no unverified venue names, prices or hours.',
        },
        kicker: 'FOOD · SOHO',
        h1: 'Finding a restaurant in SoHo: start with the street',
        lead: 'SoHo dining clusters on the sloping streets beside the middle of the escalator route. Rather than chasing a “must-eat” list that may be stale, narrow things down by street, cuisine and time of day, then confirm with official map listings and the business itself.',
        facts: [
          { label: 'Main streets', value: 'Staunton Street, Elgin Street' },
          { label: 'From the escalators', value: 'Middle-section connection' },
          { label: 'Method', value: 'Street × cuisine × time of day' },
          { label: 'Names & prices', value: 'Not listed; check with businesses' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Understand SoHo by street',
            paragraphs: [
              'Streets south of Hollywood Road are steep, with dining spread along Staunton Street, Elgin Street and adjoining lanes. Atmosphere, seating and day-to-night crowds differ noticeably, so choosing a street is more reliable for an itinerary than choosing one venue.',
              'No restaurant names, menus, prices, opening hours, booking rules or personal tasting notes are listed here; they change quickly and should be confirmed with businesses or official map listings.',
            ],
          },
          {
            heading: 'Planning by type and budget',
            table: {
              caption: 'Grouped by type and situation, with no price figures or recommended venues',
              columns: ['Type of food', 'Good for', 'Confirm first'],
              rows: [
                ['International and casual dining', 'A lunch or dinner main meal', 'Bookings, last orders, payment methods'],
                ['Light meals and coffee', 'A break between sights', 'Seating and whether lingering is welcome'],
                ['Bars and small plates', 'Dusk into the evening', 'Age limits, hours and noise'],
                ['Special dietary needs', 'Explain to the business in advance', 'Allergies, vegetarian or religious requirements'],
              ],
            },
          },
          {
            heading: 'Fitting it into the route',
            bullets: [
              { title: 'Daytime uphill', text: 'Join at the lower section, leave around SoHo for a meal, then continue along Hollywood Road to Tai Kwun or PMQ, or decide whether to keep riding uphill.' },
              { title: 'Morning downhill', text: 'Have breakfast in SoHo or at Central Market first, then ride a section in the downhill direction rather than climbing back after eating.' },
              { title: 'Dusk and evening', text: 'Put dinner after the escalator ride and decide how to return to Central first; the one-way system is not a dependable return service.' },
              { title: 'Rain', text: 'Street interfaces are exposed. Choose indoor seating near a connection and shorten the walk on sloping streets.' },
            ],
          },
          {
            heading: 'Practical reminders',
            bullets: [
              { title: 'Check same-day information', text: 'Hours, rest days and last orders belong to each business; this site has no live data.' },
              { title: 'Slopes and crowds', text: 'You will cross steep streets and narrow pavements before and after a meal. Families and anyone with limited mobility should plan gentler routes.' },
              { title: 'Respect businesses', text: 'Ask before photographing interiors, dishes or staff, and do not block doorways or passages.' },
              { title: 'No promotions', text: 'No sponsored listings, partnerships or guaranteed-seating claims are published here, and no bookings are handled.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Which SoHo restaurants do you recommend?',
            a: 'No venue names, prices or “must-eat” lists are published here to avoid stale information. Narrow by street and cuisine, then confirm hours and bookings with the business or an official map listing.',
          },
          {
            q: 'What should I budget for a meal in SoHo?',
            a: 'No price figures are provided. Costs vary widely by type and time of day; check the menu and charges directly, including any service charge or minimum spend.',
          },
          {
            q: 'Where should I leave the escalators to eat in SoHo?',
            a: 'A middle-section connection near Staunton or Elgin Street is the sensible choice; riding to the upper end and returning adds unnecessary climbing.',
          },
          {
            q: 'Are vegetarian or allergy-friendly options available?',
            a: 'No business is guaranteed to accommodate special diets here. Explain allergies, vegetarian or religious requirements directly before ordering.',
          },
        ],
        mapsQuery: 'SoHo Staunton Street restaurants Central Hong Kong',
      },
    },
  },
  {
    slug: 'food/cha-chaan-teng',
    group: 'food',
    title: { zh: '茶餐廳', en: 'Cha chaan tengs' },
    related: ['nearby/graham-street', 'food/dim-sum', 'shopping', 'itinerary/one-hour'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶梯附近茶餐廳｜港式早餐、午餐與點餐建議',
          description: '按扶梯下段與中段的街區整理茶餐廳的港式早餐、常餐與午餐型態、點餐用語與用餐安排，並說明不列店名、價格與營業時間的原因。',
        },
        kicker: 'FOOD · CHA CHAAN TENG',
        h1: '在扶梯附近吃一頓港式茶餐廳',
        lead: '茶餐廳是香港日常飲食的縮影，常見於扶梯下段與中段的老街區。這頁按用餐時段與餐點類型整理點餐思路，不推薦特定店家，也不提供價格與營業時間。',
        facts: [
          { label: '適合街區', value: '下段嘉咸街、皇后大道中一帶' },
          { label: '常見時段', value: '早餐、午餐、下午茶' },
          { label: '規劃方式', value: '按時段 × 餐點類型' },
          { label: '店名與價格', value: '不列，向店家查證' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '茶餐廳可以點什麼',
            paragraphs: [
              '一般會以早餐、常餐、快餐與下午茶等組合呈現，飲品與餐點可搭配選擇。菜單用語帶有本地縮寫與慣稱，看不懂時直接向店員詢問最可靠。',
              '本站不列具體店名、餐點價格、份量、營業時間或「必點」清單；菜單與供應會變動，請以店家當日資料為準。',
            ],
          },
          {
            heading: '按時段安排',
            table: {
              caption: '類型與情境分類，不含價格、店名或供應保證',
              columns: ['時段', '可以考慮', '出發前確認'],
              rows: [
                ['早餐', '輕量餐點配飲品，配合上午下行行程', '供應時段與是否仍有座位'],
                ['午餐', '較完整的餐點，避開扶梯出入口', '繁忙時段等候與付款方式'],
                ['下午茶', '行程中途休息', '餐點供應與座位安排'],
                ['特殊需求', '先向店員說明', '過敏、素食或飲食限制'],
              ],
            },
          },
          {
            heading: '沿途順路怎麼排',
            bullets: [
              { title: '下段最方便', text: '由扶梯下段近嘉咸街、皇后大道中一帶的街道連接點轉出，容易把茶餐廳與中環街市、石板街排在同一段步行。' },
              { title: '上午下行', text: '先吃早餐再配合下行方向搭扶梯，動線較順；若當日為上行，可把茶餐廳排在中段離開之後。' },
              { title: '避開出入口', text: '不要在扶梯踏級或出入口邊看菜單、邊吃東西；先走入街道再停留。' },
              { title: '與其他餐飲主題分開', text: '點心、咖啡與酒吧各有不同時段與街區，需要時參考對應專題，不必擠在同一餐。' },
            ],
          },
          {
            heading: '實用提醒',
            bullets: [
              { title: '先看當日營業', text: '休息日、供應時段與最後點餐時間以店家公布為準，本站沒有即時資料。' },
              { title: '點餐直接問店員', text: '菜單縮寫與套餐組合各地不同，向店員確認內容比按字面猜測可靠。' },
              { title: '座位與人流', text: '繁忙時段可能需要搭枱或等候；攜童與大件行李者宜選較寬敞的時段。' },
              { title: '不代為推薦', text: '本站不列店名、價格或試吃評價，也不接受商戶合作或訂位服務。' },
            ],
          },
        ],
        faqs: [
          {
            q: '扶梯附近有哪些茶餐廳？',
            a: '本站不列具體店名或價格，避免資訊過時。下段嘉咸街、皇后大道中一帶與中段老街區都有這類餐飲，請按街道範圍向官方地圖與店家確認。',
          },
          {
            q: '茶餐廳幾點有早餐？',
            a: '各店供應時段不同，本站沒有即時營業資料；請直接向店家確認供應時間與休息日。',
          },
          {
            q: '看不懂菜單怎麼辦？',
            a: '菜單常有本地縮寫與套餐用語，直接向店員詢問餐點內容、份量與飲品搭配最可靠，也方便說明過敏或飲食限制。',
          },
          {
            q: '可以在扶梯上邊走邊吃嗎？',
            a: '不建議。出入口與踏級是通道，飲食容易造成阻塞與危險；請先離開扶梯範圍，在街道或店內用餐。',
          },
        ],
        mapsQuery: 'Cha chaan teng Graham Street Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Cha Chaan Tengs Near the Mid-Levels Escalators | Breakfast & Lunch',
          description: 'Plan a Hong Kong-style cha chaan teng meal near the lower and middle escalator sections by time of day and menu type, with ordering tips and a clear note that no venue names, prices or hours are listed.',
        },
        kicker: 'FOOD · CHA CHAAN TENG',
        h1: 'A Hong Kong-style diner meal near the route',
        lead: 'Cha chaan tengs are a snapshot of everyday Hong Kong eating and are common in the older streets near the lower and middle escalator sections. This page organises the choice by time of day and menu type, without naming venues or quoting prices.',
        facts: [
          { label: 'Best areas', value: "Graham Street, Queen's Road Central" },
          { label: 'Typical times', value: 'Breakfast, lunch, afternoon tea' },
          { label: 'Method', value: 'Time of day × menu type' },
          { label: 'Names & prices', value: 'Not listed; check with businesses' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'What a cha chaan teng serves',
            paragraphs: [
              'Menus are often organised into breakfast, set meals, quick meals and afternoon tea combinations, with drinks paired to the food. Local shorthand and abbreviations are common, so asking staff is the most reliable way to understand a dish.',
              'No venue names, dish prices, portions, opening hours or “must-order” lists are given here; menus and availability change, and the business’s same-day information is authoritative.',
            ],
          },
          {
            heading: 'Plan by time of day',
            table: {
              caption: 'Grouped by type and situation, with no prices, names or availability guarantees',
              columns: ['Time', 'Consider', 'Confirm first'],
              rows: [
                ['Breakfast', 'A light meal with a drink, before a morning downhill ride', 'Serving hours and seating'],
                ['Lunch', 'A fuller meal, away from escalator landings', 'Busy-period waits and payment methods'],
                ['Afternoon tea', 'A break in the middle of a walk', 'What is served and seating'],
                ['Special needs', 'Explain to staff before ordering', 'Allergies, vegetarian or dietary limits'],
              ],
            },
          },
          {
            heading: 'Fitting it into the route',
            bullets: [
              { title: 'The lower section is easiest', text: 'Leave at a lower-section connection near Graham Street or Queen’s Road Central to combine a diner with Central Market and Pottinger Street in one walk.' },
              { title: 'Morning downhill', text: 'Have breakfast first and then ride in the downhill direction. On an uphill day, place the meal after leaving at a middle-section connection.' },
              { title: 'Keep landings clear', text: 'Do not read menus or eat at escalator steps or entry points; move into the street first.' },
              { title: 'Separate the food themes', text: 'Dim sum, coffee and bars suit different times and streets; use the matching guides rather than squeezing them into one meal.' },
            ],
          },
          {
            heading: 'Practical reminders',
            bullets: [
              { title: 'Check same-day hours', text: 'Rest days, serving windows and last orders are set by each business; no live data is available here.' },
              { title: 'Ask directly when ordering', text: 'Local abbreviations and set-meal combinations vary. Ask staff about contents and portions, and mention allergies or dietary needs.' },
              { title: 'Seating and crowds', text: 'Shared tables or queues are possible at busy times; families and those with luggage may prefer quieter hours.' },
              { title: 'No endorsements', text: 'No business names, prices or tasting reviews are published, and no bookings or partnerships are handled here.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Which cha chaan tengs are near the escalators?',
            a: 'No business names or prices are listed here to avoid stale information. The lower Graham Street and Queen’s Road Central area and the middle old-town streets have diners of this kind; confirm with official map listings and the businesses.',
          },
          {
            q: 'When is breakfast served?',
            a: 'Hours differ by business and no live opening data is available here; confirm serving times and rest days directly with the business.',
          },
          {
            q: 'What if I cannot read the menu?',
            a: 'Local abbreviations and set-meal terms are common. Ask staff about the dish, portion and drink pairing; it is also the right moment to mention allergies or dietary limits.',
          },
          {
            q: 'Can I eat while riding the escalators?',
            a: 'It is not advisable. Landings and steps are passageways; eating there is obstructive and unsafe. Finish your food on the street or inside the business.',
          },
        ],
        mapsQuery: 'Cha chaan teng Graham Street Central Hong Kong',
      },
    },
  },
  {
    slug: 'food/dim-sum',
    group: 'food',
    title: { zh: '飲茶與點心', en: 'Dim sum' },
    related: ['food/cha-chaan-teng', 'itinerary/half-day', 'food/coffee-shops', 'entrances'],
    content: {
      zh: {
        meta: {
          title: '半山扶梯附近飲茶與點心｜時段、點餐與行程安排',
          description: '按飲茶時段、點心類型與同行人數規劃中環半山扶手電梯附近的飲茶行程，並說明如何由下段與上環方向串連，本站不列未核實的酒樓名稱、價格或營業時間。',
        },
        kicker: 'FOOD · DIM SUM',
        h1: '把飲茶排進扶梯行程',
        lead: '飲茶通常比一頓快餐花更多時間，也需要配合供應時段與同行人數。若你想在中環半山扶梯附近安排一趟飲茶，先決定它排在扶梯之前還是之後，動線會差很多。',
        facts: [
          { label: '適合安排', value: '早上至午間、行程前段為主' },
          { label: '由扶梯前往', value: '下段轉往中環與上環方向' },
          { label: '規劃重點', value: '時段 × 人數 × 供應' },
          { label: '店名與價格', value: '不列，向店家查證' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '飲茶與一般快餐的分別',
            paragraphs: [
              '飲茶以點心與茶水搭配，點餐方式、上菜節奏與用餐時間都和茶餐廳不同；人數較少時選擇與等候方式也可能不同。安排行程時，應把它視為一個完整停留點，而不是順路買一份小食。',
              '本站不列酒樓名稱、點心價格、茶位收費、供應時段或訂位規則；這些會變動，請向店家或官方地圖資料確認。',
            ],
          },
          {
            heading: '按情境規劃',
            table: {
              caption: '類型與情境分類，不含店名、價格或供應保證',
              columns: ['情境', '較合適的安排', '事先確認'],
              rows: [
                ['兩人短暫停留', '選供應穩定的時段，減少等候', '是否接受少人數點餐與搭枱'],
                ['家庭或多人', '把飲茶排在行程前段', '訂位、座位與最後點餐時間'],
                ['想接上扶梯', '用餐後由下段加入', '當日方向燈與連接點'],
                ['特殊飲食', '先向店員說明', '過敏、素食與食材內容'],
              ],
            },
          },
          {
            heading: '沿途順路怎麼排',
            bullets: [
              { title: '先吃再上行', text: '飲茶多安排在早上至午間，吃完後由扶梯下段加入上行行程，比餐後再折返找餐廳省時。' },
              { title: '上午下行', text: '若當日為上午下行，可先由半山方向搭下來，再在中環或上環一帶飲茶，把餐點接在扶梯之後。' },
              { title: '與舊城步行串連', text: '飲茶之後可接中環街市、石板街、文武廟與荷李活道，形成一條下段至中段的步行線。' },
              { title: '回程', text: '飲茶後若要去上段，先確認方向；單向系統不提供可靠的即時反向回程。' },
            ],
          },
          {
            heading: '實用提醒',
            bullets: [
              { title: '先查供應', text: '點心供應時段、休息日與最後點餐時間以店家公布為準，本站沒有即時資料。' },
              { title: '預留時間', text: '飲茶不宜壓進 30 分鐘行程；半日行程較能容納用餐與之後的步行。' },
              { title: '不代為推薦', text: '本站不列店名、價格、試吃評價或「必點」清單，也不處理訂位。' },
              { title: '入口禮儀', text: '不要在扶梯出入口查看菜單或等候同行者，先退到街道旁。' },
            ],
          },
        ],
        faqs: [
          {
            q: '扶梯附近有推薦的飲茶酒樓嗎？',
            a: '本站不列具體店名、價格或訂位資訊，避免過時。建議按中環與上環一帶的街區範圍，用官方地圖資料與店家當日資訊確認。',
          },
          {
            q: '飲茶要預留多少時間？',
            a: '本站不提供固定分鐘數。飲茶通常比快餐耗時，建議排在半日行程而非 30 分鐘短停，並向店家確認繁忙時段的等候安排。',
          },
          {
            q: '飲茶要訂位嗎？',
            a: '各店規則不同，本站沒有即時訂位資料；人數較多或假日出行時，請直接向店家確認。',
          },
          {
            q: '吃飽後可以直接搭扶梯上行嗎？',
            a: '要先確認當日方向燈。官方列上午下行、其後上行，且個別路段可能因維護受影響；若方向不符，先逛附近街道更省時。',
          },
        ],
        mapsQuery: 'Dim sum Central Sheung Wan Hong Kong',
      },
      en: {
        meta: {
          title: 'Dim Sum Near the Mid-Levels Escalators | Timing & Trip Planning',
          description: 'Plan a dim sum meal around the escalator route by serving window, group size and order of stops, with links towards Central and Sheung Wan, and no unverified restaurant names, prices or hours.',
        },
        kicker: 'FOOD · DIM SUM',
        h1: 'Fitting dim sum into an escalator itinerary',
        lead: 'Dim sum usually takes longer than a quick meal and depends on serving windows and group size. If you want it near the escalators, decide first whether it comes before or after the ride — the walking route changes significantly.',
        facts: [
          { label: 'Best placed', value: 'Morning to midday, early in the itinerary' },
          { label: 'From the route', value: 'Lower section towards Central / Sheung Wan' },
          { label: 'Key factors', value: 'Timing × group size × availability' },
          { label: 'Names & prices', value: 'Not listed; check with businesses' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'How dim sum differs from a quick meal',
            paragraphs: [
              'Dim sum pairs small dishes with tea, and the ordering style, pacing and time needed differ from a cha chaan teng. Smaller groups may face different choices and waits. Treat it as a full stop in the itinerary rather than a snack on the way.',
              'No restaurant names, dish prices, tea charges, serving hours or booking rules are listed here; they change and should be confirmed with the business or official map listings.',
            ],
          },
          {
            heading: 'Plan by situation',
            table: {
              caption: 'Grouped by type and situation, with no names, prices or availability guarantees',
              columns: ['Situation', 'Sensible arrangement', 'Confirm first'],
              rows: [
                ['Two people, short stop', 'Pick a reliably served window to cut waiting', 'Small-group ordering and shared tables'],
                ['Family or larger group', 'Place the meal early in the itinerary', 'Bookings, seating and last orders'],
                ['Continuing to the escalators', 'Join at the lower section afterwards', 'Direction signs and connection points'],
                ['Special diets', 'Explain to staff in advance', 'Allergies, vegetarian needs and ingredients'],
              ],
            },
          },
          {
            heading: 'Fitting it into the route',
            bullets: [
              { title: 'Eat first, then ride uphill', text: 'Dim sum is commonly a morning-to-midday meal. Joining the lower section afterwards avoids backtracking to find a restaurant later.' },
              { title: 'Morning downhill', text: 'On a downhill morning, ride down from the Mid-Levels first and have dim sum in Central or Sheung Wan afterwards.' },
              { title: 'Combine with an old-town walk', text: 'After the meal, link Central Market, Pottinger Street, Man Mo Temple and Hollywood Road into one lower-to-middle-section walk.' },
              { title: 'Plan the return', text: 'If you want the upper section after eating, check the direction; a one-way system offers no reliable immediate reverse ride.' },
            ],
          },
          {
            heading: 'Practical reminders',
            bullets: [
              { title: 'Check availability', text: 'Serving windows, rest days and last orders belong to each business; no live data is available here.' },
              { title: 'Allow enough time', text: 'Dim sum does not fit a 30-minute stop; a half-day plan accommodates the meal and the walk afterwards.' },
              { title: 'No endorsements', text: 'No venue names, prices, tasting reviews or “must-order” lists are published, and no bookings are handled.' },
              { title: 'Landing etiquette', text: 'Do not read menus or wait for companions at escalator entry points; step aside onto the street.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Which dim sum restaurants near the escalators do you recommend?',
            a: 'No business names, prices or booking details are listed here to avoid stale information. Search the Central and Sheung Wan area with official map listings and confirm with the business.',
          },
          {
            q: 'How much time should I allow for dim sum?',
            a: 'No fixed minutes are given. It usually takes longer than a quick meal, so place it in a half-day plan rather than a 30-minute stop, and check busy-period waits with the business.',
          },
          {
            q: 'Do I need a reservation?',
            a: 'Rules differ by business and no live booking data is available here. Confirm directly, especially for larger groups or weekends.',
          },
          {
            q: 'Can I ride uphill straight after the meal?',
            a: 'Check the direction signs first. Published operation is downhill in the morning and uphill afterwards, and individual sections may be affected by maintenance; explore nearby streets first if the direction does not fit.',
          },
        ],
        mapsQuery: 'Dim sum Central Sheung Wan Hong Kong',
      },
    },
  },
  {
    slug: 'food/coffee-shops',
    group: 'food',
    title: { zh: '咖啡店與休息', en: 'Coffee & breaks' },
    related: ['food/soho-restaurants', 'nearby/pmq', 'nearby/tai-kwun', 'rainy-day-guide'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯附近咖啡店與休息地點｜街區規劃',
          description: '按 SoHo、PMQ、大館與中環街市等街區整理扶梯沿線的咖啡與休息安排，說明座位、久坐與雨天考量，不列未核實的店名、價格與營業時間。',
        },
        kicker: 'FOOD · COFFEE',
        h1: '在扶梯沿線找一個可以停下來的角落',
        lead: '中環半山一帶街斜坡多，走一段就想休息很正常。與其找一份咖啡店名單，不如按「在哪一段扶梯附近」與「需要什麼樣的休息」來選街區，再到官方地圖與店家確認當日資料。',
        facts: [
          { label: '常見街區', value: 'SoHo、PMQ、大館、中環街市' },
          { label: '由扶梯前往', value: '下段與中段街道連接點' },
          { label: '規劃重點', value: '休息長度 × 座位 × 天氣' },
          { label: '店名與價格', value: '不列，向店家查證' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '按街區選休息點',
            table: {
              caption: '街區特性分類，不含店名、價格與座位保證',
              columns: ['街區', '適合的休息型態', '順路段落'],
              rows: [
                ['中環街市一帶', '下段行程前後的室內停留', '下段、皇后大道中'],
                ['SoHo 斜坡街道', '午餐或晚餐前後的短暫停留', '中段、士丹頓街一帶'],
                ['PMQ 與大館', '配合展覽與建築參觀的休息', '中段、荷李活道方向'],
                ['嘉咸街一帶', '街市步行途中的短停', '下段至中段之間'],
              ],
            },
          },
          {
            heading: '休息前先確認的事',
            bullets: [
              { title: '座位與久坐', text: '不同場所對座位、使用時間與是否適合工作的安排不同，本站不保證任何店家提供久坐或插座。' },
              { title: '營業與付款', text: '休息日、營業時間、最低消費與付款方式以店家當日公布為準。' },
              { title: '雨天動線', text: '扶梯有蓋路段以外的街道接口會淋雨；雨天宜選靠近連接點、免走太多斜路的室內位置。' },
              { title: '同行者需要', text: '推嬰兒車、輪椅或長者同行時，先確認入口是否有階梯與是否有升降機。' },
            ],
          },
          {
            heading: '沿途順路怎麼排',
            paragraphs: [
              '把休息點放在「兩段扶梯之間」最實用：由下段加入，在中段 SoHo 或荷李活道一帶轉出休息，再決定要繼續上行、逛大館與 PMQ，或沿街道下行回中環。這樣不會為了找一杯咖啡而重複上下坡。',
              '若當日為上午下行，可先在中段街區停留，再配合下行方向搭回中環核心，並把中環街市排在最尾。',
            ],
          },
          {
            heading: '實用提醒',
            bullets: [
              { title: '不列店家名單', text: '本站不推薦特定咖啡店、不列價格與試喝評價，避免過時或帶有商業推薦的資訊。' },
              { title: '保持通道暢通', text: '等候同行者或查看地圖時不要在扶梯出入口停留；街道狹窄處也應靠邊。' },
              { title: '尊重場所規定', text: '拍攝店內、商品與店員前先徵得同意，並遵守場所對攝影與器材的規定。' },
              { title: '資料日期', text: '本頁資料整理日為 2026-11-09，沒有即時營業或座位狀態。' },
            ],
          },
        ],
        faqs: [
          {
            q: '扶梯附近有推薦的咖啡店嗎？',
            a: '本站不列具體店名、價格或評價。建議按 SoHo、PMQ、大館與中環街市等街區選擇，再向官方地圖與店家確認當日營業與座位安排。',
          },
          {
            q: '有適合久坐或用電腦的咖啡店嗎？',
            a: '本站不保證任何場所適合久坐、提供插座或允許工作；這類安排由各店家決定，請直接向店家查詢。',
          },
          {
            q: '下雨天在哪裡休息比較好？',
            a: '可優先考慮中環街市、大館或 PMQ 等有室內空間的場所，並確認當日開放；扶梯街道接口仍會淋雨，移動時要留意濕滑。',
          },
          {
            q: '休息後可以直接回到扶梯嗎？',
            a: '要先看當日方向燈與該路段是否開放。若方向與行程不符，先把附近街道與場所逛完，再重新安排乘搭時段。',
          },
        ],
        mapsQuery: 'Coffee shops SoHo Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Coffee & Rest Stops Near the Mid-Levels Escalators | Area Guide',
          description: 'Plan a coffee or rest stop by neighbourhood — SoHo, PMQ, Tai Kwun and Central Market — with seating, lingering and wet-weather considerations, and no unverified venue names, prices or hours.',
        },
        kicker: 'FOOD · COFFEE',
        h1: 'Finding a place to pause along the route',
        lead: 'Central’s slopes mean a short break is welcome after a while. Rather than a list of cafés, choose the neighbourhood by which escalator section you are on and what kind of break you need, then confirm same-day details with official map listings and the business.',
        facts: [
          { label: 'Common areas', value: 'SoHo, PMQ, Tai Kwun, Central Market' },
          { label: 'From the route', value: 'Lower and middle street connections' },
          { label: 'Key factors', value: 'Length of break × seating × weather' },
          { label: 'Names & prices', value: 'Not listed; check with businesses' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Choose the area for your break',
            table: {
              caption: 'Grouped by neighbourhood character; no names, prices or seating guarantees',
              columns: ['Area', 'Kind of break', 'Along the route'],
              rows: [
                ['Central Market area', 'An indoor stop before or after the lower section', 'Lower section, Queen’s Road Central'],
                ['SoHo slopes', 'A short pause around lunch or dinner', 'Middle section, Staunton Street'],
                ['PMQ and Tai Kwun', 'A break combined with exhibitions and buildings', 'Middle section, towards Hollywood Road'],
                ['Graham Street area', 'A quick stop during a market-street walk', 'Between lower and middle sections'],
              ],
            },
          },
          {
            heading: 'Check before you settle in',
            bullets: [
              { title: 'Seating and lingering', text: 'Policies on seating, time limits and working on a laptop differ; no venue is guaranteed here to offer long stays or power sockets.' },
              { title: 'Hours and payment', text: 'Rest days, opening hours, minimum spend and payment methods are set by each business on the day.' },
              { title: 'Wet-weather route', text: 'Street interfaces outside the covered sections get wet; choose an indoor spot near a connection and avoid extra climbing in rain.' },
              { title: 'Companions’ needs', text: 'With a pushchair, wheelchair or older visitors, check whether the entrance has steps and whether a lift is available.' },
            ],
          },
          {
            heading: 'Fitting the break into the route',
            paragraphs: [
              'A break works best between two escalator sections: join at the lower end, leave around SoHo or Hollywood Road for a pause, then decide whether to keep riding uphill, visit Tai Kwun and PMQ, or descend towards Central. That avoids climbing twice just for a coffee.',
              'On a morning downhill day, pause in a middle-section neighbourhood first, then ride down in the current direction and finish at Central Market.',
            ],
          },
          {
            heading: 'Practical reminders',
            bullets: [
              { title: 'No venue lists', text: 'No specific cafés, prices or tasting notes are published, avoiding stale or commercially biased information.' },
              { title: 'Keep routes clear', text: 'Do not wait for companions or check maps at escalator entry points; step aside on narrow streets too.' },
              { title: 'Follow venue rules', text: 'Ask before photographing interiors, products or staff and follow any rules on photography and equipment.' },
              { title: 'Date of information', text: 'This page was compiled on 2026-11-09 and carries no live business or seating status.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Which cafés near the escalators do you recommend?',
            a: 'No venue names, prices or reviews are listed here. Choose among SoHo, PMQ, Tai Kwun and Central Market, then confirm hours and seating with official map listings and the business.',
          },
          {
            q: 'Are there cafés suitable for working on a laptop?',
            a: 'No venue is guaranteed here to suit long stays, provide sockets or allow laptop work; those policies belong to each business, so ask directly.',
          },
          {
            q: 'Where is a good wet-weather break?',
            a: 'Consider places with indoor space such as Central Market, Tai Kwun or PMQ, checking opening arrangements. Escalator street interfaces still get wet, so take care on slippery surfaces.',
          },
          {
            q: 'Can I rejoin the escalators after a break?',
            a: 'Check the direction signs and whether that section is open. If the direction does not fit, finish the nearby streets and venues first, then plan the ride for later.',
          },
        ],
        mapsQuery: 'Coffee shops SoHo Central Hong Kong',
      },
    },
  },
  {
    slug: 'food/bars-nightlife',
    group: 'food',
    title: { zh: '酒吧與夜生活', en: 'Bars & nightlife' },
    related: ['nearby/lan-kwai-fong', 'nearby/soho', 'itinerary/soho-evening', 'return-to-central'],
    content: {
      zh: {
        meta: {
          title: 'SoHo 與蘭桂坊酒吧夜生活｜夜間路線與返回交通',
          description: '整理 SoHo 與蘭桂坊的夜間街區特性、由扶梯中段與下段前往的順序、安全與噪音考量，以及不能把單向扶梯當作回程工具的規劃提醒。',
        },
        kicker: 'FOOD · NIGHTLIFE',
        h1: '把夜間行程排在扶梯之後',
        lead: 'SoHo 與蘭桂坊都是中環常見的夜間街區，但位置與節奏不同：前者貼近扶梯中段，後者靠近下段與中環核心。把兩者排在同一晚之前，先想好次序與回程，因為扶梯不能即時反向搭回。',
        facts: [
          { label: '主要街區', value: 'SoHo · 蘭桂坊' },
          { label: '適合時段', value: '傍晚至夜間' },
          { label: '由扶梯前往', value: '中段與下段連接點' },
          { label: '營業與活動', value: '以店家與主辦方公布為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '兩個街區的分別',
            paragraphs: [
              'SoHo 是沿扶梯中段斜坡街道分布的餐飲區，蘭桂坊則是中環核心一帶較集中的娛樂街區。兩者相鄰，但晚餐、散步與夜生活可以分開安排，不必全部擠在同一條街。',
              '本站不列具體酒吧名稱、價格、營業時間、活動日期、音樂類型或人流統計；節慶與特別安排請向店家或主辦方查證。',
            ],
          },
          {
            heading: '夜間路線的決策點',
            table: {
              caption: '規劃順序參考，非營業或人流保證',
              columns: ['決策', '可以考慮', '須注意'],
              rows: [
                ['先 SoHo 還是先蘭桂坊', '按當日扶梯方向與街道坡度決定', '避免重複上下坡'],
                ['在哪一段離開扶梯', '中段對應 SoHo、下段對應中環核心', '出站前先看方向燈'],
                ['回程方式', '步行回港鐵方向或路面交通', '不假設扶梯可即時反向'],
                ['同行者需要', '先約定集合點與較平緩路線', '夜間人流與噪音'],
              ],
            },
          },
          {
            heading: '沿途順路怎麼排',
            bullets: [
              { title: '傍晚出發', text: '可由扶梯下段加入，在中段 SoHo 轉出用餐，再沿街道往中環核心方向下行，把蘭桂坊排在同一晚的後段。' },
              { title: '只去一個街區', text: '若時間有限，選與你住宿或回程方向最接近的一個，減少夜間在斜路上來回。' },
              { title: '節慶與特別日子', text: '可能有臨時封路或人流管制，請按現場指示改道，不要依賴固定路線。' },
              { title: '雨後與濕滑', text: '街道接口露天，夜間視線較差；穿防滑鞋並避免為了拍照在斜路中央停留。' },
            ],
          },
          {
            heading: '安全與禮儀',
            bullets: [
              { title: '尊重住戶', text: '兩個街區周邊都有住宅與其他商戶，夜間請降低聲量，不在樓宇入口與通道逗留。' },
              { title: '保管物品', text: '人多時留意隨身物品，並與同行者約定集合點；遇特別活動按現場指示改道。' },
              { title: '不代為推薦', text: '本站不列店名、價格、評價或「必去」清單，也不處理訂位或票務。' },
              { title: '先定回程', text: '出發前決定步行或路面交通返回中環或住宿，並確認夜間交通安排。' },
            ],
          },
        ],
        faqs: [
          {
            q: 'SoHo 和蘭桂坊哪個先去？',
            a: '沒有固定答案。按當日扶梯方向、街道坡度與住宿位置決定，原則是避免重複上下坡；傍晚由下段加入、中段 SoHo 用餐、再下行往中環核心是一個可行框架。',
          },
          {
            q: '晚上可以搭扶梯回去嗎？',
            a: '不應假設可以。扶梯按時段單向，兩個官方來源列上行至午夜，但不保證即時反向服務；回程請用街道步行或路面交通。',
          },
          {
            q: '有推薦的酒吧嗎？',
            a: '本站不列具體店名、價格或營業時間。請按街區範圍用官方地圖資料與店家當日資訊確認。',
          },
          {
            q: '節慶日子會封路嗎？',
            a: '特別活動與節慶可能有臨時交通或人流安排，本站沒有即時資訊；請按現場指示與主辦方公布改道。',
          },
        ],
        mapsQuery: 'Lan Kwai Fong SoHo Central Hong Kong nightlife',
      },
      en: {
        meta: {
          title: 'SoHo & Lan Kwai Fong Nightlife | Evening Routes and Getting Back',
          description: 'Compare SoHo and Lan Kwai Fong as evening areas, plan the order from the middle and lower escalator sections, cover noise and safety, and explain why the one-way escalators are not a return option.',
        },
        kicker: 'FOOD · NIGHTLIFE',
        h1: 'Put the evening plan after the escalator ride',
        lead: 'SoHo and Lan Kwai Fong are both well-known Central evening areas, but they sit differently: SoHo follows the middle escalator section, while Lan Kwai Fong is closer to the lower section and central Central. Decide the order and the return before you go, because the escalators do not offer an immediate reverse ride.',
        facts: [
          { label: 'Main areas', value: 'SoHo · Lan Kwai Fong' },
          { label: 'Best time', value: 'Dusk into the evening' },
          { label: 'From the route', value: 'Middle and lower connections' },
          { label: 'Hours & events', value: 'Check businesses and organisers' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'How the two areas differ',
            paragraphs: [
              'SoHo is a dining area spread along the sloping streets at the middle of the route; Lan Kwai Fong is a more concentrated nightlife area in central Central. They are adjacent, but dinner, a walk and nightlife can be planned as separate stops rather than one street.',
              'No bar names, prices, hours, event dates, music styles or crowd figures are given here; check with businesses and organisers, especially around festivals.',
            ],
          },
          {
            heading: 'Evening route decisions',
            table: {
              caption: 'A planning sequence, not a business-hours or crowd guarantee',
              columns: ['Decision', 'Consider', 'Watch for'],
              rows: [
                ['SoHo or Lan Kwai Fong first', 'Decide by the day’s direction and street gradients', 'Avoid climbing up and down twice'],
                ['Where to leave the escalators', 'Middle section for SoHo, lower for central Central', 'Check direction signs before leaving'],
                ['Return method', 'Walk towards the MTR or use surface transport', 'Do not assume a reverse escalator ride'],
                ['Companions’ needs', 'Agree a meeting point and a gentler route', 'Night crowds and noise'],
              ],
            },
          },
          {
            heading: 'Fitting it into the route',
            bullets: [
              { title: 'Start at dusk', text: 'Join at the lower section, leave around SoHo for a meal, then descend towards central Central and place Lan Kwai Fong later in the evening.' },
              { title: 'Choose one area', text: 'With limited time, pick the one closest to your accommodation or return route to reduce night-time climbs.' },
              { title: 'Festivals and special days', text: 'Temporary road closures or crowd controls are possible. Follow on-site diversions rather than a fixed route.' },
              { title: 'After rain', text: 'Street interfaces are exposed and visibility is lower at night; wear grippy shoes and avoid stopping mid-slope for photos.' },
            ],
          },
          {
            heading: 'Safety and etiquette',
            bullets: [
              { title: 'Respect residents', text: 'Homes and other businesses surround both areas. Keep noise down at night and do not linger in building entrances or passages.' },
              { title: 'Look after belongings', text: 'Keep valuables close in crowds, agree a meeting point, and follow on-site diversions during events.' },
              { title: 'No endorsements', text: 'No business names, prices, reviews or “must-visit” lists are published; no bookings or tickets are handled.' },
              { title: 'Settle the return', text: 'Before setting off, decide between walking and surface transport back to Central or your accommodation, and check night transport.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Should I visit SoHo or Lan Kwai Fong first?',
            a: 'There is no fixed order. Decide by the day’s escalator direction, gradients and where you are staying, aiming to avoid repeated climbs. Joining low, eating in SoHo mid-route and descending towards central Central is one workable frame.',
          },
          {
            q: 'Can I ride the escalators back at night?',
            a: 'Do not assume so. The system runs one way by time of day; both official sources list uphill until midnight, not an immediate reverse service. Use streets or surface transport.',
          },
          {
            q: 'Which bars do you recommend?',
            a: 'No business names, prices or opening hours are listed here. Search by neighbourhood with official map listings and confirm with the business on the day.',
          },
          {
            q: 'Are roads closed during festivals?',
            a: 'Special events may bring temporary traffic or crowd arrangements, and no live information is available here. Follow on-site signs and organiser announcements.',
          },
        ],
        mapsQuery: 'Lan Kwai Fong SoHo Central Hong Kong nightlife',
      },
    },
  },
  {
    slug: 'shopping',
    group: 'food',
    title: { zh: '購物攻略', en: 'Shopping guide' },
    related: ['nearby/pmq', 'nearby/central-market', 'nearby/graham-street', 'itinerary/one-hour'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶梯附近購物攻略｜PMQ、中環街市與老街小店',
          description: '按 PMQ 元創方、中環街市、嘉咸街與荷李活道一帶比較購物街區特性、適合找什麼、與扶梯哪一段相鄰，以及手信與價格查證方式，不列未核實店名。',
        },
        kicker: 'SHOPPING',
        h1: '沿著扶梯逛街：由下段走到中段',
        lead: '扶梯沿線的購物不是單一商場，而是一串性質不同的街區：下段有經活化的中環街市與老街檔，中段有 PMQ 的設計小店與荷李活道的古物店。按街區挑，比按店名找更容易安排在步行路線裡。',
        facts: [
          { label: '下段', value: '中環街市、嘉咸街、石板街一帶' },
          { label: '中段', value: 'PMQ、荷李活道、SoHo 邊緣' },
          { label: '規劃方式', value: '按街區 × 商品類型' },
          { label: '店名與價格', value: '不列，向店家查證' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '四類街區比較',
            table: {
              caption: '街區特性分類，不含店名、價格或營業保證',
              columns: ['街區', '適合找', '與扶梯的關係'],
              rows: [
                ['中環街市', '本地品牌、輕食與期間限定市集', '下段、天橋與皇后大道中方向'],
                ['嘉咸街與石板街一帶', '街檔、老舖與街頭小物', '下段至中段的老街斜坡'],
                ['PMQ 元創方', '設計與創意小店、展覽相關商品', '中段、鴨巴甸街方向'],
                ['荷李活道一帶', '古物、設計店與畫廊型店舖', '中段、往文武廟方向'],
              ],
            },
          },
          {
            heading: '沿途順路怎麼排',
            bullets: [
              { title: '由下段往上', text: '先逛中環街市，沿嘉咸街與石板街慢慢上行，再在中段轉往 PMQ 與荷李活道，形成一條不重複的購物步行線。' },
              { title: '上午下行', text: '把順序反過來：由中段街區開始，配合下行方向回到中環街市與皇后大道中一帶。' },
              { title: '手信與攜帶', text: '街道多斜坡與樓梯，購物後攜帶大件物品會較吃力；先想好回程交通或寄存安排。' },
              { title: '雨天', text: '優先考慮有室內空間的場所，並確認當日開放；街道接口與檔口仍會淋雨。' },
            ],
          },
          {
            heading: '查證與消費提醒',
            bullets: [
              { title: '不列店名與價格', text: '本站不推薦特定店家、不列價格、折扣或「必買」清單，避免過時與商業推薦；請向店家直接確認。' },
              { title: '營業與活動', text: '公共空間、市集與各進駐單位的營業時間不同，請查場所官方資訊。' },
              { title: '付款方式', text: '不同店家接受的付款方式各異，本站不保證任何支付方式可用；出發前準備替代方案。' },
              { title: '拍照與搬運', text: '拍攝商品與店員前先徵得同意，並避免在狹窄行人路上整理購物袋阻礙他人。' },
            ],
          },
        ],
        faqs: [
          {
            q: '扶梯附近有什麼好買？',
            a: '按街區看：下段中環街市與嘉咸街有本地品牌、街檔與小物，中段 PMQ 與荷李活道偏向設計與古物類型。本站不列具體店名或價格。',
          },
          {
            q: '可以一次逛完所有購物街區嗎？',
            a: '可以排成半日路線，但街道有坡度與樓梯，建議按當日扶梯方向由下段走到中段或反向，避免重複上下坡。',
          },
          {
            q: '哪裡可以買手信？',
            a: '本站不推薦特定商戶或商品。中環街市與 PMQ 一帶較容易找到本地設計與包裝食品類型，請向店家確認商品內容與價格。',
          },
          {
            q: '購物後可以直接搭扶梯嗎？',
            a: '要先確認當日方向燈與路段狀態；攜帶大件物品時應避免阻塞出入口，並考慮先安置物品或使用路面交通。',
          },
        ],
        mapsQuery: 'PMQ Central Market Hollywood Road shopping Hong Kong',
      },
      en: {
        meta: {
          title: 'Shopping Near the Mid-Levels Escalators | PMQ, Central Market & Old Streets',
          description: 'Compare shopping areas along the route — PMQ, Central Market, Graham Street and Hollywood Road — by what you can find and which escalator section they sit beside, without unverified shop names or prices.',
        },
        kicker: 'SHOPPING',
        h1: 'Shopping along the route: lower to middle section',
        lead: 'Shopping here is not one mall but a chain of different neighbourhoods: a revitalised market and old street stalls near the lower section, design shops at PMQ and antiques on Hollywood Road near the middle. Choosing by area fits a walking route better than chasing shop names.',
        facts: [
          { label: 'Lower section', value: 'Central Market, Graham Street, Pottinger Street' },
          { label: 'Middle section', value: 'PMQ, Hollywood Road, edge of SoHo' },
          { label: 'Method', value: 'Area × product type' },
          { label: 'Names & prices', value: 'Not listed; check with businesses' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Compare the four area types',
            table: {
              caption: 'Grouped by area character, with no shop names, prices or opening guarantees',
              columns: ['Area', 'Look for', 'Relation to the route'],
              rows: [
                ['Central Market', 'Local brands, light food, temporary markets', 'Lower section, footbridge and Queen’s Road Central'],
                ['Graham Street, Pottinger Street', 'Stalls, older shops, street sundries', 'Old sloping streets from lower to middle'],
                ['PMQ', 'Design and creative shops, exhibition-related goods', 'Middle section, towards Aberdeen Street'],
                ['Hollywood Road', 'Antiques, design shops, gallery-style stores', 'Middle section, towards Man Mo Temple'],
              ],
            },
          },
          {
            heading: 'Fitting it into the route',
            bullets: [
              { title: 'Lower to upper', text: 'Start at Central Market, work slowly up Graham Street and Pottinger Street, then turn towards PMQ and Hollywood Road for one continuous shopping walk.' },
              { title: 'Morning downhill', text: 'Reverse the order: begin in the middle-section neighbourhoods and follow the downhill direction back to Central Market and Queen’s Road Central.' },
              { title: 'Souvenirs and carrying', text: 'Steep streets and steps make bulky purchases tiring; plan return transport or storage first.' },
              { title: 'Rain', text: 'Prioritise places with indoor space and check opening arrangements; street interfaces and stalls are still exposed.' },
            ],
          },
          {
            heading: 'Verification and spending notes',
            bullets: [
              { title: 'No names or prices', text: 'No specific shops, prices, discounts or “must-buy” lists are published here, to avoid stale or commercially biased information; confirm directly with businesses.' },
              { title: 'Hours and events', text: 'Public spaces, markets and individual tenants keep different hours; check official venue information.' },
              { title: 'Payment methods', text: 'Accepted payment methods differ and none are guaranteed here; prepare an alternative.' },
              { title: 'Photography and bags', text: 'Ask before photographing products or staff, and avoid repacking bags on narrow pavements where you block others.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'What is worth buying near the escalators?',
            a: 'By area: Central Market and Graham Street offer local brands, stalls and sundries near the lower section, while PMQ and Hollywood Road lean towards design and antiques. No shop names or prices are listed here.',
          },
          {
            q: 'Can I cover all the shopping areas in one outing?',
            a: 'It fits a half-day route, but the streets are steep and stepped. Follow the day’s escalator direction from lower to middle (or in reverse) to avoid repeated climbing.',
          },
          {
            q: 'Where can I buy souvenirs?',
            a: 'No specific business or product is recommended here. Central Market and PMQ are useful areas for local design and packaged food types; check product details and prices with the business.',
          },
          {
            q: 'Can I ride the escalators with my shopping?',
            a: 'Check the direction signs and section status first. With bulky bags, keep landings clear and consider storing items or using surface transport.',
          },
        ],
        mapsQuery: 'PMQ Central Market Hollywood Road shopping Hong Kong',
      },
    },
  },
];
