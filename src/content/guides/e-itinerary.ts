import type { GuideDef } from './types';

/** E · 路线与行程（5 页）。每页有独立的停留点、次序、时间分配、返回方式与适合对象；
 *  30 分钟／1 小时均为行程预算，不是全线乘搭时间的保证。 */
export const itineraryGuides: GuideDef[] = [
  {
    slug: 'itinerary/30-minutes',
    group: 'itinerary',
    title: { zh: '30 分鐘快速遊覽', en: '30-minute visit' },
    related: ['itinerary/one-hour', 'entrances', 'exits', 'nearby/central-market'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯 30 分鐘快速遊覽｜短暫停留路線',
          description: '為短暫停留設計的 30 分鐘行程：在下段加入、搭一小段扶梯、於街道連接點轉出、看中環街市外觀後返回，包含方向確認與回程提醒。',
        },
        kicker: 'ITINERARY · 30 MIN',
        h1: '只有 30 分鐘，扶梯要怎麼搭？',
        lead: '30 分鐘是行程預算，不是「全線乘搭所需時間」。這條路線刻意只取下段：確認方向、搭一小段、在街道轉出、看一眼中環街市周邊，再回到原本的交通動線，不追求走到干德道。',
        facts: [
          { label: '行程性質', value: '短暫停留，非全線' },
          { label: '主要範圍', value: '扶梯下段與皇后大道中一帶' },
          { label: '適合對象', value: '轉機空檔、等車、首次到訪' },
          { label: '回程', value: '沿街道返回原出發方向' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '路線次序',
            steps: [
              { label: '01 · 先確認方向', text: '在下段的街道連接點看方向燈與告示。若當下方向與你想去的一側相反，就改成純街區散步，不要等待「某一分鐘換向」。' },
              { label: '02 · 由下段加入', text: '選皇后大道中、中環街市一帶的連接點進入，只搭一小段，留意沿途街道接口的名稱。' },
              { label: '03 · 在街道轉出', text: '在第一個或第二個適合的街道連接點離開，先看清楚自己身處哪條街，再決定是否續搭。' },
              { label: '04 · 街市周邊短停', text: '把中環街市與周邊街景當作停留點，拍建築線條時先退到路邊，不阻礙扶梯出入口。' },
              { label: '05 · 返回', text: '沿街道回到原本的車站或集合點，不假設可以即時反向乘搭扶梯回到起點。' },
            ],
          },
          {
            heading: '時間怎麼分配',
            table: {
              caption: '相對比例，非實測分鐘保證；現場人流與路段狀態會影響實際時間',
              columns: ['段落', '佔行程', '重點'],
              rows: [
                ['方向與路線確認', '約兩成', '方向燈、維護通告'],
                ['搭一小段扶梯', '約三成', '留意街道接口'],
                ['街道與街市短停', '約三成', '拍照先離開通道'],
                ['返回原動線', '約兩成', '預留回程緩衝'],
              ],
            },
          },
          {
            heading: '適合與不適合',
            bullets: [
              { title: '適合', text: '在中環有短暫空檔、想親眼看一次扶梯、之後要趕港鐵或機場快線的人。' },
              { title: '不適合', text: '想走完整條路線、看大館與 PMQ、或安排用餐的人；這些需要一小時以上與更多上下坡。' },
              { title: '攜童與長者', text: '短路線較省力，但下段周邊仍有斜路與樓梯；推嬰兒車者先確認升降機與地面動線。' },
            ],
          },
          {
            heading: '出發前提醒',
            paragraphs: [
              '運輸署與旅發局對上行起始時刻的列示相差 20 分鐘，本站並列而不推算；個別路段也可能因例行維護受影響。出發前查運輸署交通通告與現場方向燈，比按固定時刻表安排更可靠。',
              '若只有 30 分鐘又碰上方向不合、維護或暴雨，直接改成中環街市與附近街道的短步行，會比勉强搭扶梯更穩妥。',
            ],
          },
        ],
        faqs: [
          {
            q: '30 分鐘可以搭完整條扶梯嗎？',
            a: '本站不保證。30 分鐘是行程預算，不是全線乘搭時間；本路線刻意只取下段一小段，避免趕路與來回折返。',
          },
          {
            q: '30 分鐘路線要去干德道嗎？',
            a: '不需要。干德道在上段，來回會花掉更多時間與體力；短暫停留應把範圍留在下段與中環核心街區。',
          },
          {
            q: '時間不夠又碰上方向相反怎麼辦？',
            a: '改成純街區散步：看中環街市、石板街一帶的街景，把扶梯留到下次。不要為了等待換向而在出入口逗留。',
          },
          {
            q: '這條路線適合推嬰兒車嗎？',
            a: '相對省力但仍要留意斜路與樓梯。機電工程署指引建議嬰兒車使用升降機，請先確認升降機與地面替代動線。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators lower entrance Central Market Hong Kong',
      },
      en: {
        meta: {
          title: '30-Minute Visit to the Central–Mid-Levels Escalators | Short Route',
          description: 'A 30-minute plan for a brief stop: join at the lower section, ride one short stretch, leave at a street connection, see the Central Market area and return, with direction checks and a return reminder.',
        },
        kicker: 'ITINERARY · 30 MIN',
        h1: 'Only 30 minutes: how should you ride?',
        lead: 'Thirty minutes is an itinerary budget, not a guaranteed time to ride the whole system. This route deliberately stays in the lower section: check the direction, ride a short stretch, step out at a street connection, see the Central Market area and return to your original route without trying to reach Conduit Road.',
        facts: [
          { label: 'Type', value: 'Short stop, not the full route' },
          { label: 'Area', value: 'Lower section and Queen’s Road Central' },
          { label: 'Good for', value: 'Transit gaps, waiting time, first visits' },
          { label: 'Return', value: 'Walk back along the streets' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Route order',
            steps: [
              { label: '01 · Check the direction', text: 'At a lower-section connection, read the direction signs and notices. If the direction does not suit you, switch to a street walk rather than waiting for a specific changeover minute.' },
              { label: '02 · Join at the lower section', text: 'Enter via a connection near Queen’s Road Central or Central Market, ride one short stretch, and note the names of the street interfaces you pass.' },
              { label: '03 · Leave at a street', text: 'Step out at the first or second suitable street connection, work out which street you are on, then decide whether to continue.' },
              { label: '04 · A short stop by the market', text: 'Use Central Market and the surrounding streets as the stop; move to the side of the pavement for photos and keep escalator landings clear.' },
              { label: '05 · Return', text: 'Walk back along the streets to your station or meeting point; do not assume an immediate reverse ride to your starting point.' },
            ],
          },
          {
            heading: 'How to divide the time',
            table: {
              caption: 'Relative proportions, not measured minutes; crowds and section status affect the real timing',
              columns: ['Part', 'Share of the visit', 'Focus'],
              rows: [
                ['Direction and route check', 'About 20%', 'Direction signs, maintenance notices'],
                ['One short escalator stretch', 'About 30%', 'Noting street interfaces'],
                ['Street and market stop', 'About 30%', 'Step aside before photos'],
                ['Return to your route', 'About 20%', 'Leave a buffer'],
              ],
            },
          },
          {
            heading: 'Who it suits',
            bullets: [
              { title: 'Good for', text: 'A short gap in Central, a first look at the escalators, or a visit before catching the MTR or Airport Express.' },
              { title: 'Not for', text: 'Covering the whole route, visiting Tai Kwun and PMQ, or sitting down for a meal — those need more than an hour and more climbing.' },
              { title: 'Children and older visitors', text: 'A short route is less demanding, but lower-section streets still have slopes and steps; pushchair users should confirm lifts and street routes.' },
            ],
          },
          {
            heading: 'Before you set off',
            paragraphs: [
              'The Transport Department and Tourism Board list uphill start times 20 minutes apart, shown here without calculation, and individual sections may be affected by routine maintenance. Checking Transport Department notices and on-site signs is more reliable than a fixed timetable.',
              'If you have only 30 minutes and meet the wrong direction, maintenance or heavy rain, a short walk around Central Market and the nearby streets is more dependable than forcing a ride.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Can I ride the whole route in 30 minutes?',
            a: 'No guarantee is given. Thirty minutes is an itinerary budget, not a full-route ride time; this plan deliberately uses one short lower-section stretch to avoid rushing and backtracking.',
          },
          {
            q: 'Does the 30-minute route go to Conduit Road?',
            a: 'No. Conduit Road is at the upper end and getting there and back costs more time and energy. A short stop is best kept to the lower section and central Central.',
          },
          {
            q: 'What if the direction is wrong and I am short on time?',
            a: 'Switch to a street walk around Central Market and Pottinger Street and leave the ride for another visit. Do not linger at landings waiting for a changeover.',
          },
          {
            q: 'Is this route suitable for a pushchair?',
            a: 'It is less demanding but still involves slopes and steps. EMSD guidance advises lifts for pushchairs, so confirm lifts and a street-level alternative first.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators lower entrance Central Market Hong Kong',
      },
    },
  },
  {
    slug: 'itinerary/one-hour',
    group: 'itinerary',
    title: { zh: '1 小時路線', en: 'One-hour route' },
    related: ['itinerary/30-minutes', 'itinerary/half-day', 'nearby/graham-street', 'food/cha-chaan-teng'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯 1 小時路線｜扶梯與老街區體驗',
          description: '一小時行程由下段加入、經嘉咸街老街區、在中段 SoHo 邊緣轉出並返回，包含停留次序、時間分配、適合對象與回程方式。',
        },
        kicker: 'ITINERARY · 1 HOUR',
        h1: '一小時：扶梯加一段老街步行',
        lead: '比 30 分鐘路線多一段街區體驗：由下段加入，沿扶梯上到嘉咸街、荷李活道一帶，在中段 SoHo 邊緣轉出，沿街道慢慢下行回到中環。重點是「搭一段 + 走一段」，而不是把全線走完。',
        facts: [
          { label: '行程性質', value: '扶梯 + 老街步行' },
          { label: '主要範圍', value: '下段至中段' },
          { label: '停留點', value: '嘉咸街、荷李活道、SoHo 邊緣' },
          { label: '回程', value: '沿街道下行回中環' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '路線次序',
            steps: [
              { label: '01 · 下段確認方向', text: '在皇后大道中、中環街市一帶看方向燈與維護告示，再決定由哪個連接點加入。' },
              { label: '02 · 搭至中段', text: '沿途留意嘉咸街、荷李活道一帶的街道接口；在適合的位置轉出，不要一路搭到上段才折返。' },
              { label: '03 · 老街區步行', text: '沿嘉咸街與荷李活道看街市與老舖，拍照時靠邊站，避免阻塞檔口與行人路。' },
              { label: '04 · SoHo 邊緣短停', text: '在士丹頓街、伊利近街一帶稍作停留，可選輕食或咖啡；本站不推薦特定店家，營業與座位請向店家確認。' },
              { label: '05 · 下行返回', text: '沿街道往皇后大道中方向下行，回到原本的車站或集合點；單向扶梯不作回程工具。' },
            ],
          },
          {
            heading: '時間怎麼分配',
            table: {
              caption: '相對比例，非實測分鐘保證',
              columns: ['段落', '佔行程', '重點'],
              rows: [
                ['方向與入口確認', '約一成半', '避開方向不合時硬搭'],
                ['下段至中段扶梯', '約兩成半', '記住街道接口'],
                ['嘉咸街與荷李活道步行', '約三成', '街市與老舖街景'],
                ['SoHo 邊緣短停', '約一成半', '休息與補給'],
                ['下行返回', '約兩成', '預留回程緩衝'],
              ],
            },
          },
          {
            heading: '適合與不適合',
            bullets: [
              { title: '適合', text: '想同時看扶梯與中環舊城、但不打算進場館或吃完整一餐的人。' },
              { title: '不適合', text: '想細看大館與 PMQ 展覽、或安排飲茶的人；這些請用半日行程。' },
              { title: '攜童與長者', text: '步行段包含斜路，可把 SoHo 短停改為較早離開並增加休息；輪椅與嬰兒車先查升降機。' },
            ],
          },
          {
            heading: '調整方式',
            paragraphs: [
              '若當日為上午下行，可把路線反過來：先在中段街區散步，再配合下行方向搭回下段，並以中環街市作結。這樣不需要來回爬坡。',
              '遇雨時把第 03 步縮短，改以有室內空間的場所為停留點；遇例行維護則按現場告示改在較早或較後的連接點轉出。',
            ],
          },
        ],
        faqs: [
          {
            q: '一小時可以走完整條扶梯嗎？',
            a: '本站不提供全線乘搭時間保證。這條路線刻意只取下段至中段，把時間留給街區步行，不追求到干德道。',
          },
          {
            q: '路線包含吃飯嗎？',
            a: '只安排 SoHo 邊緣的短停與補給，不是完整一餐；若要飲茶或坐下用餐，建議改用半日行程。',
          },
          {
            q: '上午去要改路線嗎？',
            a: '要。上午為下行方向，建議先在中段街區散步，再配合方向搭回下段，並以中環街市作結，避免重複爬坡。',
          },
          {
            q: '下雨天還能走嗎？',
            a: '可以但要縮短露天街道段，改以有室內空間的場所停留；扶梯街道接口仍會淋雨，斜路濕滑時請放慢。',
          },
        ],
        mapsQuery: 'Graham Street Hollywood Road SoHo Central Hong Kong walking route',
      },
      en: {
        meta: {
          title: 'One-Hour Route for the Mid-Levels Escalators | Ride & Old Streets',
          description: 'A one-hour plan joining at the lower section, climbing past Graham Street, leaving near the edge of SoHo and walking back down, with stop order, time allocation, who it suits and the return route.',
        },
        kicker: 'ITINERARY · 1 HOUR',
        h1: 'One hour: a ride plus an old-town walk',
        lead: 'This adds a neighbourhood walk to the 30-minute plan: join at the lower section, ride up past Graham Street and Hollywood Road, leave at the edge of SoHo, then descend through the streets to Central. The point is a ride plus a walk, not covering the whole system.',
        facts: [
          { label: 'Type', value: 'Escalators + old-town walk' },
          { label: 'Area', value: 'Lower to middle section' },
          { label: 'Stops', value: 'Graham Street, Hollywood Road, edge of SoHo' },
          { label: 'Return', value: 'Descend through the streets to Central' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Route order',
            steps: [
              { label: '01 · Check the direction low down', text: 'At Queen’s Road Central and Central Market, read the direction signs and maintenance notices before choosing a connection.' },
              { label: '02 · Ride to the middle', text: 'Note the street interfaces around Graham Street and Hollywood Road; leave at a suitable point rather than riding to the upper end and coming back.' },
              { label: '03 · Walk the old streets', text: 'Follow Graham Street and Hollywood Road for market and older-shop scenes. Step aside for photos and keep stalls and pavements clear.' },
              { label: '04 · A short pause at the edge of SoHo', text: 'Stop briefly around Staunton or Elgin Street for a light bite or coffee. No specific business is recommended; confirm hours and seating with the business.' },
              { label: '05 · Descend back', text: 'Walk downhill towards Queen’s Road Central to your station or meeting point. The one-way escalators are not the return transport.' },
            ],
          },
          {
            heading: 'How to divide the time',
            table: {
              caption: 'Relative proportions, not measured minutes',
              columns: ['Part', 'Share of the visit', 'Focus'],
              rows: [
                ['Direction and entry check', 'About 15%', 'Avoid riding against your plan'],
                ['Lower to middle escalators', 'About 25%', 'Remembering street interfaces'],
                ['Graham Street and Hollywood Road', 'About 30%', 'Market and older-shop streets'],
                ['Short SoHo pause', 'About 10%', 'Rest and refreshment'],
                ['Descend back', 'About 20%', 'Leave a buffer'],
              ],
            },
          },
          {
            heading: 'Who it suits',
            bullets: [
              { title: 'Good for', text: 'Seeing both the escalators and old-town Central without entering venues or sitting down for a full meal.' },
              { title: 'Not for', text: 'Exploring Tai Kwun and PMQ exhibitions properly, or having dim sum — use the half-day route for those.' },
              { title: 'Children and older visitors', text: 'The walking part includes slopes. Leave SoHo earlier for extra rest; wheelchair and pushchair users should check lifts first.' },
            ],
          },
          {
            heading: 'Ways to adjust',
            paragraphs: [
              'On a morning downhill day, reverse the route: walk the middle-section streets first, ride down in the current direction, and finish at Central Market. That avoids climbing twice.',
              'In rain, shorten step 03 and use places with indoor space as stops; if maintenance is listed, follow on-site signs and leave at an earlier or later connection.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Can I cover the whole route in an hour?',
            a: 'No full-route time guarantee is given. This plan deliberately uses the lower to middle section and spends the time on a neighbourhood walk rather than reaching Conduit Road.',
          },
          {
            q: 'Does the route include a meal?',
            a: 'Only a short pause and refreshment near SoHo, not a full meal. For dim sum or a sit-down lunch, use the half-day route.',
          },
          {
            q: 'Should I change the route in the morning?',
            a: 'Yes. Morning is downhill: walk the middle-section streets first, ride down in that direction, and finish at Central Market to avoid repeated climbing.',
          },
          {
            q: 'Is it still walkable in the rain?',
            a: 'Yes, but shorten the exposed street segment and use indoor stops. Escalator street interfaces still get wet, so slow down on slippery slopes.',
          },
        ],
        mapsQuery: 'Graham Street Hollywood Road SoHo Central Hong Kong walking route',
      },
    },
  },
  {
    slug: 'itinerary/half-day',
    group: 'itinerary',
    title: { zh: '半日遊', en: 'Half-day itinerary' },
    related: ['itinerary/one-hour', 'itinerary/central-walking-tour', 'nearby/tai-kwun', 'food/dim-sum'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯半日遊｜扶梯、大館、PMQ 與舊城餐飲',
          description: '半日行程由下段加入扶梯、串連中環街市、嘉咸街、大館、PMQ 與 SoHo 餐飲，包含停留次序、時間分配、適合對象與返回中環的方式。',
        },
        kicker: 'ITINERARY · HALF DAY',
        h1: '半日遊：把扶梯變成中環舊城的一條軸線',
        lead: '半日行程的重點不是「搭得最遠」，而是把扶梯、歷史建築、街市與用餐串成一條不走回頭路的步行線。以下次序以日間上行方向為例；上午下行時可反向調整。',
        facts: [
          { label: '行程性質', value: '扶梯 + 場館 + 餐飲' },
          { label: '主要範圍', value: '下段至中段，含舊城街區' },
          { label: '停留點', value: '中環街市、嘉咸街、大館、PMQ、SoHo' },
          { label: '回程', value: '沿街道下行或路面交通' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '路線次序',
            steps: [
              { label: '01 · 下段起點', text: '由皇后大道中、中環街市一帶開始，先逛街市建築與周邊街道，並在連接點確認當日方向燈。' },
              { label: '02 · 扶梯上行至中段', text: '沿下段加入，穿過嘉咸街一帶時留意街道接口；在荷李活道、士丹頓街附近轉出，不必一路到干德道。' },
              { label: '03 · 大館與建築群', text: '由中段步行前往大館，看歷史建築與戶外空間；展覽、入場與開放安排請向場方查證。' },
              { label: '04 · PMQ 與荷李活道', text: '接著往 PMQ 與荷李活道方向，逛設計小店與古物店區；本站不列店名與價格。' },
              { label: '05 · SoHo 用餐或咖啡', text: '在士丹頓街、伊利近街一帶安排較完整的停留；營業、訂位與座位請向店家確認。' },
              { label: '06 · 下行返回', text: '沿街道往中環核心下行，或按體力使用路面交通；不要把單向扶梯當作回程工具。' },
            ],
          },
          {
            heading: '時間怎麼分配',
            table: {
              caption: '相對比例，非實測分鐘保證；場館開放與人流會影響實際安排',
              columns: ['段落', '佔行程', '重點'],
              rows: [
                ['中環街市與下段', '約兩成', '起點辨認與方向確認'],
                ['扶梯與嘉咸街', '約兩成', '分段進出與街景'],
                ['大館與 PMQ', '約三成', '建築、展覽與設計小店'],
                ['SoHo 用餐休息', '約兩成', '補給與體力調整'],
                ['下行返回', '約一成', '預留回程緩衝'],
              ],
            },
          },
          {
            heading: '適合與不適合',
            bullets: [
              { title: '適合', text: '第一次到中環、想把扶梯與舊城景點一次看完，並願意走較多斜路的人。' },
              { title: '不適合', text: '只想快速搭一段、時間少於一小時，或不想進任何場館的人；這些可用 30 分鐘或一小時路線。' },
              { title: '攜童與長者', text: '場館較多且有室內空間，但街道坡度仍在；建議縮短荷李活道段，並先查升降機。' },
            ],
          },
          {
            heading: '查證與調整',
            paragraphs: [
              '大館、PMQ、中環街市與各餐飲場所的開放、展期與營業時間都不同，本站沒有即時資料，出發前請逐一向場方確認。若其中一處當日不開放，直接換成荷李活道與文武廟方向的街區步行，路線仍然完整。',
              '運輸署與旅發局對上行起始時刻的列示不同，個別扶梯段亦可能因維護受影響；以現場方向燈與交通通告為準。若為上午下行，可把次序整體反過來，由中段街區開始，最後回到中環街市。',
            ],
          },
        ],
        faqs: [
          {
            q: '半日遊需要走完整條扶梯嗎？',
            a: '不需要。這條路線以扶梯下段至中段為主，把時間留給大館、PMQ 與舊城街區；走到干德道反而會增加回程與體力負擔。',
          },
          {
            q: '行程中的場館要門票嗎？',
            a: '各場所與展覽安排不同，本站不提供票價或免費保證；請查大館、PMQ 與中環街市的官方資訊。',
          },
          {
            q: '上午出發要怎麼改？',
            a: '上午為下行方向，建議把次序反過來：先走中段舊城街區與場館，再配合方向搭回下段，最後以中環街市作結。',
          },
          {
            q: '下雨天還適合嗎？',
            a: '可以調整：把露天街道段縮短，增加中環街市、大館、PMQ 等有室內空間的停留，並留意扶梯街道接口濕滑。',
          },
        ],
        mapsQuery: 'Central Market Tai Kwun PMQ SoHo walking route Hong Kong',
      },
      en: {
        meta: {
          title: 'Half-Day Itinerary for the Mid-Levels Escalators | Central Old Town',
          description: 'A half-day route joining the escalators low down and linking Central Market, Graham Street, Tai Kwun, PMQ and SoHo dining, with stop order, time allocation, who it suits and how to return to Central.',
        },
        kicker: 'ITINERARY · HALF DAY',
        h1: 'A half day: the escalators as an old-town axis',
        lead: 'The point of a half day is not riding as far as possible but linking the escalators, heritage buildings, a market and a meal into one walk without retracing your steps. The order below assumes daytime uphill operation; reverse it for a morning downhill visit.',
        facts: [
          { label: 'Type', value: 'Escalators + venues + dining' },
          { label: 'Area', value: 'Lower to middle section, old-town streets' },
          { label: 'Stops', value: 'Central Market, Graham Street, Tai Kwun, PMQ, SoHo' },
          { label: 'Return', value: 'Descend on foot or surface transport' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Route order',
            steps: [
              { label: '01 · Start at the lower end', text: 'Begin around Queen’s Road Central and Central Market, see the market building and nearby streets, and check the direction signs at the connection.' },
              { label: '02 · Ride up to the middle', text: 'Join at the lower section, note the street interfaces around Graham Street, and leave near Hollywood Road or Staunton Street rather than going all the way to Conduit Road.' },
              { label: '03 · Tai Kwun', text: 'Walk to Tai Kwun for the historic buildings and outdoor spaces; check exhibitions, entry and opening arrangements with the venue.' },
              { label: '04 · PMQ and Hollywood Road', text: 'Continue towards PMQ and Hollywood Road for design shops and the antiques area. No business names or prices are listed here.' },
              { label: '05 · A meal or coffee in SoHo', text: 'Allow a longer stop around Staunton or Elgin Street; confirm hours, bookings and seating with the business.' },
              { label: '06 · Descend back', text: 'Walk downhill towards central Central or use surface transport if needed. The one-way escalators are not the return transport.' },
            ],
          },
          {
            heading: 'How to divide the time',
            table: {
              caption: 'Relative proportions, not measured minutes; venue hours and crowds affect the real timing',
              columns: ['Part', 'Share of the visit', 'Focus'],
              rows: [
                ['Central Market and lower section', 'About 20%', 'Identifying the start and direction'],
                ['Escalators and Graham Street', 'About 20%', 'Section entries and street scenes'],
                ['Tai Kwun and PMQ', 'About 30%', 'Buildings, exhibitions and design shops'],
                ['SoHo meal and rest', 'About 20%', 'Refreshment and pacing'],
                ['Descend back', 'About 10%', 'Leave a buffer'],
              ],
            },
          },
          {
            heading: 'Who it suits',
            bullets: [
              { title: 'Good for', text: 'A first visit to Central that wants the escalators and old-town sights together, and is comfortable with a fair amount of uphill walking.' },
              { title: 'Not for', text: 'A quick ride, less than an hour, or a plan with no venue visits; use the 30-minute or one-hour route instead.' },
              { title: 'Children and older visitors', text: 'More indoor stops help, but the gradients remain. Shorten the Hollywood Road section and check lifts first.' },
            ],
          },
          {
            heading: 'Checks and adjustments',
            paragraphs: [
              'Tai Kwun, PMQ, Central Market and every dining venue keep different hours, exhibitions and schedules, and no live data is available here; confirm with each venue. If one is closed, substitute a Hollywood Road and Man Mo Temple street walk and the route still works.',
              'The Transport Department and Tourism Board list different uphill start times and individual sections may be affected by maintenance; follow direction signs and traffic notices. On a morning downhill day, reverse the whole order and finish at Central Market.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Does the half-day route need to cover the whole escalator system?',
            a: 'No. It concentrates on the lower to middle sections and spends the time on Tai Kwun, PMQ and the old-town streets; going to Conduit Road adds return distance and effort.',
          },
          {
            q: 'Do the venues on this route charge admission?',
            a: 'Arrangements differ by venue and exhibition, and no prices or free-entry guarantees are given here; check the official information for Tai Kwun, PMQ and Central Market.',
          },
          {
            q: 'How should I change the route for a morning start?',
            a: 'Morning is downhill, so reverse the order: walk the middle-section old-town streets and venues first, ride down in that direction, and finish at Central Market.',
          },
          {
            q: 'Does it work in the rain?',
            a: 'Adjust it: shorten the exposed street segments, add indoor stops such as Central Market, Tai Kwun and PMQ, and watch for wet escalator street interfaces.',
          },
        ],
        mapsQuery: 'Central Market Tai Kwun PMQ SoHo walking route Hong Kong',
      },
    },
  },
  {
    slug: 'itinerary/central-walking-tour',
    group: 'itinerary',
    title: { zh: '中環舊城步行路線', en: 'Old Town Central walk' },
    related: ['itinerary/half-day', 'nearby/man-mo-temple', 'nearby/pottinger-street', 'history'],
    content: {
      zh: {
        meta: {
          title: '中環舊城步行路線｜街市、石板街、文武廟與歷史建築',
          description: '以中環街市、石板街、嘉咸街、文武廟、荷李活道、PMQ 與大館串成一條歷史文化步行線，附明確次序、返回方式與各場所開放查證提醒。',
        },
        kicker: 'ITINERARY · OLD TOWN',
        h1: '中環舊城：一條看建築與街道的步行線',
        lead: '這條路線以「中環舊城」為主角，扶梯只是把各段串起來的工具之一。次序按街道高低安排，盡量避免重複上下坡；每個場所的開放與入場安排請自行向場方查證。',
        facts: [
          { label: '主題', value: '歷史建築、街市與老街' },
          { label: '主要街道', value: '皇后大道中、砵典乍街、嘉咸街、荷李活道' },
          { label: '場所', value: '中環街市、文武廟、PMQ、大館' },
          { label: '回程', value: '下行回中環或往上環方向' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '路線次序',
            steps: [
              { label: '01 · 中環街市', text: '由皇后大道中一帶開始，看活化街市建築與周邊街道；先確認當日開放與扶梯方向燈。' },
              { label: '02 · 石板街與嘉咸街', text: '沿砵典乍街的石板斜路往上，接嘉咸街一帶的街市街景；路面不平，雨天要放慢。' },
              { label: '03 · 文武廟與樓梯街', text: '轉往荷李活道近樓梯街的文武廟，留意參拜禮儀與拍攝限制；樓梯對推車不友善。' },
              { label: '04 · 荷李活道古物店區', text: '沿荷李活道看古物與設計店舖；本站不列店名、價格或營業時間。' },
              { label: '05 · PMQ 元創方', text: '往鴨巴甸街方向到 PMQ，看活化宿舍建築與設計空間，並查當日展覽與開放。' },
              { label: '06 · 大館作結', text: '經荷李活道到大館，以歷史建築群與戶外空間收尾；之後按住宿或交通方向決定返回路線。' },
            ],
          },
          {
            heading: '路線特性與時間分配',
            table: {
              caption: '相對比例與規劃特性，非實測距離或分鐘數',
              columns: ['段落', '佔行程', '規劃重點'],
              rows: [
                ['街市與下段老街', '約兩成半', '起點與街道辨認'],
                ['石板街、嘉咸街', '約兩成', '坡度與濕滑路面'],
                ['文武廟與荷李活道', '約兩成半', '禮儀、拍攝與店舖'],
                ['PMQ 與大館', '約兩成半', '場館開放與展覽查證'],
                ['返回', '約一成', '下行或路面交通'],
              ],
            },
          },
          {
            heading: '適合與不適合',
            bullets: [
              { title: '適合', text: '對歷史建築、老街與城市紋理有興趣，願意慢慢走並查證各場所開放資訊的人。' },
              { title: '不適合', text: '趕時間、只想搭扶梯，或需要全程無階梯動線的人；石板街與樓梯街一段有明顯坡度與樓梯。' },
              { title: '攜童與長者', text: '可跳過石板街與樓梯街，改走較平緩的平行街道，並把 PMQ、大館作為主要室內停留點。' },
            ],
          },
          {
            heading: '查證與替代',
            paragraphs: [
              '文武廟、PMQ、大館與中環街市的開放時間、入場安排與攝影規則各異，本站沒有即時資料；出發前逐一查閱官方資訊。若某一處關閉，直接以荷李活道街區步行與其他場所替代，路線不需重排。',
              '此路線可與半日行程互換：想加入較多扶梯乘搭就走半日行程，想專注建築與街道就走這一條。兩者都應以現場方向燈與運輸署交通通告為準。',
            ],
          },
        ],
        faqs: [
          {
            q: '這條路線一定要搭扶梯嗎？',
            a: '不一定。扶梯只是串連街區的一種方式，路線主體是街道與場所；若當日方向不合或路段維護，全程用街道步行也能完成。',
          },
          {
            q: '石板街與樓梯街適合推嬰兒車嗎？',
            a: '不應假設適合。石板不平整且有坡度，樓梯街也有樓梯；建議改走較平緩的平行街道並先確認升降機。',
          },
          {
            q: '文武廟與大館需要門票嗎？',
            a: '各場所與展覽安排不同，本站不提供票價或免費入場保證；請向廟方與場方官方資訊查證。',
          },
          {
            q: '下雨天適合走這條路線嗎？',
            a: '可調整：縮短石板街與露天街道段，增加中環街市、PMQ、大館等室內停留；石板雨後濕滑，請穿防滑鞋。',
          },
        ],
        mapsQuery: 'Old Town Central Hollywood Road Tai Kwun PMQ walking Hong Kong',
      },
      en: {
        meta: {
          title: 'Old Town Central Walking Route | Market, Stone Slabs, Temple & Heritage',
          description: 'A walking route linking Central Market, Pottinger Street, Graham Street, Man Mo Temple, Hollywood Road, PMQ and Tai Kwun, with a clear order, return options and venue-verification reminders.',
        },
        kicker: 'ITINERARY · OLD TOWN',
        h1: 'Old Town Central: a walk of buildings and streets',
        lead: 'This route puts the old town first, with the escalators as one way of linking the parts. The order follows the street levels to avoid repeated climbing; check each venue’s opening and entry arrangements yourself.',
        facts: [
          { label: 'Theme', value: 'Heritage buildings, a market, old streets' },
          { label: 'Main streets', value: "Queen's Road Central, Pottinger, Graham, Hollywood" },
          { label: 'Venues', value: 'Central Market, Man Mo Temple, PMQ, Tai Kwun' },
          { label: 'Return', value: 'Downhill to Central or onwards to Sheung Wan' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Route order',
            steps: [
              { label: '01 · Central Market', text: 'Start around Queen’s Road Central with the revitalised market building and nearby streets; check today’s opening and the escalator direction signs.' },
              { label: '02 · Pottinger and Graham Street', text: 'Climb the stone slabs of Pottinger Street and continue into the market streets around Graham Street. The paving is uneven; slow down in rain.' },
              { label: '03 · Man Mo Temple and Ladder Street', text: 'Turn to Man Mo Temple near Hollywood Road and Ladder Street; observe worship etiquette and photography limits. The steps are awkward for pushchairs.' },
              { label: '04 · Hollywood Road antiques area', text: 'Follow Hollywood Road for antiques and design shops. No business names, prices or hours are listed here.' },
              { label: '05 · PMQ', text: 'Head towards Aberdeen Street for PMQ, the revitalised quarters building and design spaces; check exhibitions and opening on the day.' },
              { label: '06 · Finish at Tai Kwun', text: 'Return along Hollywood Road to Tai Kwun and end with the historic compound and outdoor spaces; choose your return based on accommodation or transport.' },
            ],
          },
          {
            heading: 'Character and time allocation',
            table: {
              caption: 'Relative proportions and planning notes, not measured distances or minutes',
              columns: ['Part', 'Share of the visit', 'Planning focus'],
              rows: [
                ['Market and lower old streets', 'About 25%', 'Finding the start and reading streets'],
                ['Pottinger and Graham Street', 'About 20%', 'Gradients and wet slabs'],
                ['Man Mo Temple, Hollywood Road', 'About 25%', 'Etiquette, photography, shops'],
                ['PMQ and Tai Kwun', 'About 25%', 'Venue hours and exhibitions'],
                ['Return', 'About 5%', 'Downhill or surface transport'],
              ],
            },
          },
          {
            heading: 'Who it suits',
            bullets: [
              { title: 'Good for', text: 'Visitors interested in heritage buildings, old streets and urban fabric who are happy to walk slowly and verify venue information.' },
              { title: 'Not for', text: 'A tight schedule, a plan focused only on riding, or anyone needing a step-free route — Pottinger Street and Ladder Street have gradients and steps.' },
              { title: 'Children and older visitors', text: 'Skip Pottinger Street and Ladder Street in favour of gentler parallel streets, and use PMQ and Tai Kwun as the main indoor stops.' },
            ],
          },
          {
            heading: 'Checks and alternatives',
            paragraphs: [
              'Man Mo Temple, PMQ, Tai Kwun and Central Market have different hours, entry arrangements and photography rules, and no live data is available here; check official information for each. If one is closed, substitute more Hollywood Road street walking and the route still holds.',
              'This route is interchangeable with the half-day itinerary: choose that one for more escalator riding, or this one for buildings and streets. Both should follow on-site direction signs and Transport Department notices.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Do I have to ride the escalators on this route?',
            a: 'No. The escalators are one way to link the neighbourhoods; the route is mainly streets and venues. If the direction does not suit or a section is under maintenance, it can be completed entirely on foot.',
          },
          {
            q: 'Are Pottinger Street and Ladder Street pushchair friendly?',
            a: 'Do not assume so. The slabs are uneven and steep, and Ladder Street has steps. Use gentler parallel streets and confirm lifts first.',
          },
          {
            q: 'Do Man Mo Temple and Tai Kwun charge admission?',
            a: 'Arrangements differ by venue and exhibition, and no prices or free-entry guarantees are given here; check the temple and venue’s official information.',
          },
          {
            q: 'Is the route suitable in rain?',
            a: 'Adjust it: shorten the exposed Pottinger Street segment, add indoor stops such as Central Market, PMQ and Tai Kwun, and wear grippy shoes on wet slabs.',
          },
        ],
        mapsQuery: 'Old Town Central Hollywood Road Tai Kwun PMQ walking Hong Kong',
      },
    },
  },
  {
    slug: 'itinerary/soho-evening',
    group: 'itinerary',
    title: { zh: 'SoHo 夜間遊覽', en: 'SoHo evening' },
    related: ['nearby/soho', 'food/bars-nightlife', 'nearby/lan-kwai-fong', 'return-to-central'],
    content: {
      zh: {
        meta: {
          title: '中環扶梯與 SoHo 夜間遊覽｜晚餐、街景與返回交通',
          description: '傍晚至夜間的中環行程：先搭扶梯、在 SoHo 用餐、看夜間街景，再下行往蘭桂坊或中環核心，包含次序、時間分配、適合對象與回程安排。',
        },
        kicker: 'ITINERARY · EVENING',
        h1: '傍晚出發：扶梯、SoHo 與夜間街景',
        lead: '夜間行程最需要事先決定的不是吃什麼，而是「怎麼回中環」。扶梯按時段單向，兩個官方來源列上行至午夜，但不保證即時反向服務；以下路線把回程放在規劃的第一步。',
        facts: [
          { label: '主題', value: '扶梯、晚餐與夜間街景' },
          { label: '主要街區', value: 'SoHo、蘭桂坊、中環核心' },
          { label: '出發時段', value: '傍晚至夜間' },
          { label: '回程', value: '步行下坡或路面交通，先定' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '路線次序',
            steps: [
              { label: '01 · 先定回程', text: '出發前決定餐後是步行回港鐵方向或使用路面交通，並確認夜間交通安排；不要把扶梯當作回程工具。' },
              { label: '02 · 下段確認方向', text: '在皇后大道中、中環街市一帶看方向燈與維護告示，若方向不合就改為純街區步行。' },
              { label: '03 · 搭至中段', text: '由下段加入，在士丹頓街、伊利近街一帶的街道連接點轉出，不必一路到干德道。' },
              { label: '04 · SoHo 晚餐', text: '在 SoHo 安排較完整的用餐停留；營業、訂位與最後點餐時間請向店家確認，本站不推薦特定店家。' },
              { label: '05 · 夜間街景短走', text: '餐後沿街道看燈光與街景，避開扶梯出入口停留，並降低聲量尊重附近住戶。' },
              { label: '06 · 下行返回', text: '沿街道往中環核心下行，可按體力與時間決定是否順路經過蘭桂坊，再接回原定交通。' },
            ],
          },
          {
            heading: '時間怎麼分配',
            table: {
              caption: '相對比例，非實測分鐘保證',
              columns: ['段落', '佔行程', '重點'],
              rows: [
                ['回程與方向確認', '約一成', '出發前完成'],
                ['扶梯下段至中段', '約兩成', '配合當日方向'],
                ['SoHo 晚餐', '約四成', '營業與訂位查證'],
                ['夜間街景短走', '約兩成', '安全與噪音'],
                ['下行返回', '約一成', '預留交通緩衝'],
              ],
            },
          },
          {
            heading: '適合與不適合',
            bullets: [
              { title: '適合', text: '想在中環用餐、看夜間街景，並願意在餐後步行下坡或使用路面交通的人。' },
              { title: '不適合', text: '攜幼童需要早歸、不想夜間走斜路，或需要全程無階梯動線的人。' },
              { title: '節慶與特別日子', text: '可能有臨時封路與人流管制，應按現場指示改道，不要依賴固定路線。' },
            ],
          },
          {
            heading: '安全與查證',
            paragraphs: [
              '各店家與活動的營業時間、付款方式與安排會變動，本站沒有即時資料，也不列店名、價格或「必去」清單。節慶日子請向店家與主辦方查證。',
              '遇暴雨或天文台警告時，街道接口與斜路會濕滑；縮短第 05 步並優先返回住宿或車站。個別扶梯段的例行維護亦可能影響第 03 步，請按現場告示改用其他連接點。',
            ],
          },
        ],
        faqs: [
          {
            q: '晚上可以搭扶梯回中環嗎？',
            a: '不應假設可以。扶梯按時段單向，兩個官方來源列上行至午夜，但不保證即時反向服務；請用街道步行或路面交通，並在出發前定好。',
          },
          {
            q: 'SoHo 與蘭桂坊要都去嗎？',
            a: '不必。兩者相鄰但節奏不同；時間有限時選與回程方向最接近的一個，避免夜間在斜路上來回。',
          },
          {
            q: '有推薦的餐廳或酒吧嗎？',
            a: '本站不列店名、價格或營業時間。請按街區範圍向官方地圖資料與店家確認當日營業與訂位。',
          },
          {
            q: '下雨天夜間行程要改嗎？',
            a: '要。縮短露天街景步行，優先返回住宿或車站；扶梯街道接口會濕滑，夜間視線較差，避免在斜路中央停留。',
          },
        ],
        mapsQuery: 'SoHo Lan Kwai Fong Central Hong Kong evening walk',
      },
      en: {
        meta: {
          title: 'SoHo Evening Itinerary | Escalators, Dinner & Getting Back',
          description: 'An evening Central plan: ride the escalators, eat in SoHo, see the night streets, then descend towards Lan Kwai Fong or central Central, with stop order, time allocation and a return plan first.',
        },
        kicker: 'ITINERARY · EVENING',
        h1: 'Starting at dusk: escalators, SoHo and night streets',
        lead: 'The most important evening decision is not where to eat but how to get back to Central. The escalators run one way; both official sources list uphill until midnight, not an immediate reverse service. This route puts the return plan first.',
        facts: [
          { label: 'Theme', value: 'Escalators, dinner, night streets' },
          { label: 'Areas', value: 'SoHo, Lan Kwai Fong, central Central' },
          { label: 'Start', value: 'Dusk into the evening' },
          { label: 'Return', value: 'Walk downhill or surface transport, decided first' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Route order',
            steps: [
              { label: '01 · Settle the return', text: 'Before leaving, decide whether you will walk back towards the MTR after dinner or use surface transport, and check night transport. The escalators are not the return tool.' },
              { label: '02 · Check the direction low down', text: 'At Queen’s Road Central and Central Market, read the direction signs and maintenance notices; if the direction does not fit, switch to a street-only walk.' },
              { label: '03 · Ride to the middle', text: 'Join at the lower section and leave at a connection around Staunton or Elgin Street; there is no need to ride to Conduit Road.' },
              { label: '04 · Dinner in SoHo', text: 'Allow a proper meal stop in SoHo. Confirm hours, bookings and last orders with the business; no specific venue is recommended here.' },
              { label: '05 · A short night street walk', text: 'After the meal, follow the streets for lighting and street scenes. Keep away from escalator landings and keep noise down for nearby residents.' },
              { label: '06 · Descend back', text: 'Walk downhill towards central Central, optionally passing Lan Kwai Fong if time and energy allow, then rejoin your planned transport.' },
            ],
          },
          {
            heading: 'How to divide the time',
            table: {
              caption: 'Relative proportions, not measured minutes',
              columns: ['Part', 'Share of the visit', 'Focus'],
              rows: [
                ['Return and direction check', 'About 10%', 'Done before setting off'],
                ['Lower to middle escalators', 'About 20%', 'Matching the day’s direction'],
                ['SoHo dinner', 'About 40%', 'Hours and bookings'],
                ['Night street walk', 'About 20%', 'Safety and noise'],
                ['Descend back', 'About 10%', 'Leave a transport buffer'],
              ],
            },
          },
          {
            heading: 'Who it suits',
            bullets: [
              { title: 'Good for', text: 'Dining in Central, seeing the streets at night, and being comfortable walking downhill or using surface transport afterwards.' },
              { title: 'Not for', text: 'An early return with young children, avoiding night-time slopes, or needing a fully step-free route.' },
              { title: 'Festivals and special days', text: 'Temporary closures and crowd controls are possible; follow on-site diversions rather than a fixed route.' },
            ],
          },
          {
            heading: 'Safety and verification',
            paragraphs: [
              'Business hours, payment methods and event arrangements change, and no live data, business names, prices or “must-visit” lists are published here. Check with businesses and organisers around festival dates.',
              'In heavy rain or when Observatory warnings are in force, shorten step 05 and prioritise returning to your accommodation or station. Routine maintenance on individual escalator sections may also affect step 03; use another connection if signs require it.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Can I ride the escalators back to Central at night?',
            a: 'Do not assume so. The system runs one way; both official sources list uphill until midnight, not an immediate reverse service. Use streets or surface transport, decided before you set off.',
          },
          {
            q: 'Should I visit both SoHo and Lan Kwai Fong?',
            a: 'Not necessarily. They are adjacent but have different rhythms. With limited time, choose the one closest to your return route to avoid night-time climbing back and forth.',
          },
          {
            q: 'Which restaurants or bars do you recommend?',
            a: 'No business names, prices or hours are listed here. Use official map listings and confirm hours and bookings with the business on the day.',
          },
          {
            q: 'Should the route change in rain?',
            a: 'Yes. Shorten the exposed night walk and prioritise getting back to your accommodation or station. Escalator street interfaces get slippery and visibility is lower; do not stop mid-slope.',
          },
        ],
        mapsQuery: 'SoHo Lan Kwai Fong Central Hong Kong evening walk',
      },
    },
  },
];
