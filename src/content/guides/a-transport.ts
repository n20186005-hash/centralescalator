import type { GuideDef } from './types';

/** A · 入口、出口与交通（8 页）。各页解决不同决策，不复用同一张地图说明。 */
export const transportGuides: GuideDef[] = [
  {
    slug: 'entrances',
    group: 'transport',
    title: { zh: '入口指南', en: 'Entrance guide' },
    related: ['exits', 'route-map', 'mtr-central', 'accessibility'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯入口指南｜主要進出點與分段進入',
          description: '整理中環半山扶手電梯沿線進出點：由皇后大道中、中環街市一帶至荷李活道、堅道及干德道的街道連接，並說明 Google Maps 的租庇利街地址只作定位參考。',
        },
        kicker: 'ENTRANCES',
        h1: '中環半山扶手電梯入口在哪裡？',
        lead: '這套系統不是一條有單一閘口的扶梯。運輸署把它描述為由多段扶手電梯、自動行人道與天橋組成的山坡行人系統，沿不同街道設有進出連接點；先決定想在哪一段加入，比尋找「正門」更實用。',
        facts: [
          { label: '系統範圍', value: '皇后大道中 → 干德道' },
          { label: '官方所列構成', value: '16 條扶梯 · 3 條自動行人道' },
          { label: 'Maps 地址', value: '租庇利街（僅地點標記）' },
          { label: '收費', value: '免費' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '先釐清：沒有一個唯一入口',
            paragraphs: [
              'Google Maps 上顯示的「租庇利街」是讓地圖標出這套系統的位置，並不代表整條路線只有一個入口，也不等於該處已完成無階梯或無障礙實測。遊客可以由沿線不同的街道連接點走進或離開。',
              '運輸署的資料以「系統」稱呼它：多段扶梯、自動行人道與天橋沿山坡串接，連接皇后大道中一帶與半山干德道。因此「由哪裡進」取決於你身處中環的哪一條街，以及當日扶梯運行方向。',
            ],
          },
          {
            heading: '按路段辨認進出點',
            bullets: [
              {
                title: '下段：皇后大道中、中環街市一帶',
                text: '旅發局以皇后大道中描述起點，並提到與中環街市天橋的連接。由港鐵中環站或香港站方向前來的遊客，通常會先在下段周邊街道確認接點；實際出入口位置與是否設有升降機，以現場指示為準。',
              },
              {
                title: '中段：嘉咸街、荷李活道、士丹頓街一帶',
                text: '扶梯穿越中環舊城與 SoHo 邊緣的密集街區，這一段的街道連接點適合想順道看街市、古蹟或找餐飲的人。街道多有坡度，橫向穿梭時要先看清自己正走向哪一條街。',
              },
              {
                title: '上段：堅道、羅便臣道、干德道一帶',
                text: '干德道是官方所述的終點一帶，位於半山住宅區。這裡不是太平山頂，也沒有山頂纜車站的直接轉乘保證；若行程要接山頂，須另行查證交通。',
              },
            ],
          },
          {
            heading: '由不同出發地先確認哪一帶',
            table: {
              caption: '街道層級的規劃參考，並非實測步行路線或分鐘數',
              columns: ['出發地', '優先確認的連接點', '需要現場核對的事'],
              rows: [
                ['港鐵中環站、香港站方向', '下段近皇后大道中的街道接點', '出口方向、升降機、當日方向燈'],
                ['中環街市、石板街一帶', '下段與中段之間的行人連接', '天橋開放情況與街道出入口'],
                ['荷李活道、文武廟、PMQ 一帶', '中段街道接點', '該段扶梯方向與街道坡度'],
                ['SoHo、堅道以上的半山', '中段至上段接點', '是否與你想去的方向一致'],
              ],
            },
          },
          {
            heading: '進場前四個檢查',
            bullets: [
              { title: '看方向燈', text: '上午與日間方向不同，先在入口位置確認當下是上行還是下行，不要按記憶中的時段直接走進去。' },
              { title: '查維修通告', text: '運輸署交通通告會列出個別扶梯段的例行維護與臨時安排；一段開放不代表其餘各段也可用。' },
              { title: '無障礙需求先改路線', text: '機電工程署的安全指引建議輪椅使用者、嬰兒車及攜帶大件行李者使用升降機，不應直接乘扶手電梯。' },
              { title: '不要在出入口停留', text: '出入口是通道而非觀景台；拍照或查看地圖前先離開踏級與扶手出口區，也不要進入私人住宅或限制範圍。' },
            ],
          },
        ],
        faqs: [
          {
            q: '中環半山扶手電梯是不是只有一個入口？',
            a: '不是。它是由多段扶梯、自動行人道與天橋組成的系統，沿線不同街道都有進出連接點。Google Maps 的租庇利街地址只是地點標記，應按你身處的街道選擇連接點，並以現場指示為準。',
          },
          {
            q: 'Google Maps 顯示的租庇利街地址就是入口嗎？',
            a: '只能作為定位參考。該地址協助地圖標示整套系統，本站沒有完成該處的無階梯、升降機或實際出入口實測，因此不把它寫成唯一或已驗證入口。',
          },
          {
            q: '早上可以由上面往下走進扶梯嗎？',
            a: '運輸署與旅發局都列上午約 06:00–10:00 為下行往中環方向；但各段狀態、維修與現場方向燈才是依據，出發前請先核對，不要假設全線同時可用。',
          },
          {
            q: '進入扶梯需要購票或拍卡嗎？',
            a: '不需要。這是免費使用的公共行人系統，本站不提供票務服務，也不代售任何行程；如有臨時封閉或特別安排，以管理方現場公告為準。',
          },
        ],
        mapsQuery: "Central-Mid-Levels Escalators Queen's Road Central Hong Kong",
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators Entrances | Where to Join the Route',
          description: 'Where to join the Central–Mid-Levels Escalators: street connections from Queen’s Road Central and Central Market through Hollywood Road, Caine Road and Conduit Road, and why the Maps address is only a pin.',
        },
        kicker: 'ENTRANCES',
        h1: 'Where are the entrances to the Central–Mid-Levels Escalators?',
        lead: 'This is not one escalator with a single gate. The Transport Department describes a hillside pedestrian system of separate escalators, moving walkways and footbridges, with street-level connections along the route. Choosing which section to join is more useful than looking for a main door.',
        facts: [
          { label: 'Route', value: "Queen's Road Central → Conduit Road" },
          { label: 'Published system', value: '16 escalators · 3 walkways' },
          { label: 'Maps address', value: 'Jubilee Street (pin only)' },
          { label: 'Fare', value: 'Free' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'There is no single entrance',
            paragraphs: [
              'The Jubilee Street address shown on Google Maps positions the system on the map. It does not mean the whole route has one entrance, and it is not a verified step-free or lift-served access point. Visitors join and leave through street connections along the way.',
              'The Transport Department calls it a system: separate escalator sections, moving walkways and footbridges climbing from the Queen’s Road Central area to Conduit Road in the Mid-Levels. Where you join therefore depends on which Central street you are on, and on the running direction that day.',
            ],
          },
          {
            heading: 'Identify the three parts of the route',
            bullets: [
              {
                title: 'Lower section: Queen’s Road Central and Central Market',
                text: 'The Tourism Board describes Queen’s Road Central as the starting point and notes a link with the Central Market footbridge. Visitors arriving from MTR Central or Hong Kong Station usually check lower-section street connections first; verify the exact access point and lift availability on site.',
              },
              {
                title: 'Middle section: Graham Street, Hollywood Road, Staunton Street',
                text: 'The route crosses the dense old-town streets on the edge of SoHo. These connections suit a visit that also includes a market, heritage buildings or a meal. Streets are steep, so check which street you are actually heading towards.',
              },
              {
                title: 'Upper section: Caine Road, Robinson Road, Conduit Road',
                text: 'Conduit Road is the published upper end, in a residential Mid-Levels neighbourhood. This is not Victoria Peak, and there is no guaranteed direct interchange with the Peak Tram; check separate transport if the Peak is on your itinerary.',
              },
            ],
          },
          {
            heading: 'Match your starting point to a section',
            table: {
              caption: 'Street-level planning reference; not a measured walking route or a time estimate',
              columns: ['Starting point', 'Connection to check first', 'Verify on site'],
              rows: [
                ['MTR Central or Hong Kong Station', 'Lower-section streets near Queen’s Road Central', 'Exit direction, lifts, current direction signs'],
                ['Central Market, Pottinger Street', 'Footbridge and street links around the lower/middle sections', 'Footbridge access and street exits'],
                ['Hollywood Road, Man Mo Temple, PMQ', 'Middle-section street connections', 'Direction of that section and street gradient'],
                ['SoHo or Mid-Levels above Caine Road', 'Middle-to-upper connections', 'Whether the direction matches your plan'],
              ],
            },
          },
          {
            heading: 'Four checks before you step on',
            bullets: [
              { title: 'Read the direction signs', text: 'Morning and daytime operation run in opposite directions. Confirm the current direction at the entry point rather than relying on a remembered timetable.' },
              { title: 'Check maintenance notices', text: 'Transport Department notices list routine maintenance for individual escalator sections. One open section does not guarantee the others are available.' },
              { title: 'Plan an alternative for access needs', text: 'EMSD safety guidance advises wheelchair users, pushchairs and bulky luggage to use lifts rather than escalators.' },
              { title: 'Keep landings clear', text: 'Entry points are passageways, not viewing platforms. Move away from steps and landings before taking photos or checking a map, and stay out of private residential or restricted areas.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is there only one entrance to the Central–Mid-Levels Escalators?',
            a: 'No. It is a system of separate escalators, moving walkways and footbridges with street-level connections along the route. The Jubilee Street address on Google Maps is a map pin, not a single verified entrance; choose a connection based on the street you are on and follow on-site signs.',
          },
          {
            q: 'Is the Jubilee Street address on Google Maps an entrance?',
            a: 'It is best treated as a location reference only. It helps Maps place the system; this guide has not verified step-free access, lifts or an actual entry point there, so it is not described as the sole or confirmed entrance.',
          },
          {
            q: 'Can I join from the top in the morning?',
            a: 'Both the Transport Department and the Tourism Board list roughly 06:00–10:00 as downhill towards Central. Individual section status, maintenance and direction indicators are the authority on the day; do not assume the whole system is available at once.',
          },
          {
            q: 'Do I need a ticket or an Octopus card to enter?',
            a: 'No. It is a free public pedestrian system. This site sells no tickets or tours; temporary closures or special arrangements are announced by the operator on site.',
          },
        ],
        mapsQuery: "Central-Mid-Levels Escalators Queen's Road Central Hong Kong",
      },
    },
  },
  {
    slug: 'exits',
    group: 'transport',
    title: { zh: '出口指南', en: 'Exit guide' },
    related: ['entrances', 'route-map', 'return-to-central', 'nearby/soho'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯出口指南｜沿途街道與離開位置',
          description: '按目的地選擇離開扶梯的路段：中環街市、大館與 PMQ、SoHo 餐飲區、半山住宅區各適合在不同街道連接點下車，並說明單向系統的返程限制。',
        },
        kicker: 'EXITS',
        h1: '在哪一段下扶梯最順路？',
        lead: '出口不是閘機，而是扶梯與街道相交的連接點。由於系統按時段單向運行，先想清楚「下一站要去哪裡」再決定何時離開，可以避免走到半山後才發現要另外安排回程。',
        facts: [
          { label: '出口形式', value: '沿線街道連接點' },
          { label: '方向特性', value: '按時段單向，不能原路搭回' },
          { label: '終點一帶', value: '干德道 · 半山' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '出口是街道連接點，不是車站',
            paragraphs: [
              '扶梯沿山坡穿過多條橫街，每段都有通往街道的位置。離開時只需在該處轉入街道，沒有驗票、沒有月台編號；但街道有坡度，轉出後的位置未必就是你原本想去的街口。',
              '建議在乘搭前先看一遍路線的街道順序，把想停留的地點對應到某一帶，而不是等到看見熟悉的店舖才臨時決定。',
            ],
          },
          {
            heading: '按目的地選擇離開路段',
            table: {
              caption: '以街道區位歸類，並非官方出口編號或實測步程',
              columns: ['接下來想去', '適合留意的路段', '離開後要確認'],
              rows: [
                ['中環街市、石板街、皇后大道中', '下段近中環街市與天橋一帶', '街道方向與是否需要橫過馬路'],
                ['文武廟、荷李活道古物店區', '中段荷李活道附近連接點', '該段當日方向與街道坡度'],
                ['大館、PMQ 元創方', '中段往荷李活道、鴨巴甸街方向', '場館開放安排與入口位置'],
                ['SoHo 蘇豪區餐飲', '中段士丹頓街、伊利近街一帶', '是否仍在自己想去的街區'],
                ['半山住宅區、干德道', '上段終點一帶', '回程交通與夜間路線'],
              ],
            },
          },
          {
            heading: '單向系統與返程',
            paragraphs: [
              '上午下行、其後上行是官方列示的大方向，遊客不能假設可以即時反向乘搭同一段扶梯回到起點。若你打算在上段離開，請先想好回中環的方法：沿街道步行下坡、使用路面公共交通或乘的士，都是需要按當日情況選擇的選項。',
              '運輸署交通通告可能列出個別路段的例行維護；一段關閉時，原本計劃的離開位置也可能不可用，應按現場指示改在較早或較後的連接點轉出。',
            ],
          },
          {
            heading: '離開時的實用提醒',
            bullets: [
              { title: '先離開踏級區', text: '在出口前收好手機與地圖，踏出後再停下，避免阻塞後面的人。' },
              { title: '留意路面高低差', text: '中環至半山一帶街道多斜路與樓梯，推車或行李較多時，先確認該連接點是否合適。' },
              { title: '夜間先定回程', text: '晚上商戶與公共交通安排會變，應在離開扶梯前決定返回中環的方式，不要假設隨時有車。' },
            ],
          },
        ],
        faqs: [
          {
            q: '扶梯有編了號的出口嗎？',
            a: '沒有車站式的編號出口。它由多段扶梯與街道連接點組成，遊客按沿途街口轉出；本頁以「下段／中段／上段」與相鄰街道協助規劃，並非官方出口編號。',
          },
          {
            q: '可以在同一段扶梯直接搭回頭嗎？',
            a: '不能假定可以。系統按時段單向運行，個別路段亦可能因維護而改變；請把回程視為獨立安排，並參考返回中環的專題。',
          },
          {
            q: '去大館或 PMQ 應該在哪裡下？',
            a: '兩者都在扶梯中段附近的荷李活道、鴨巴甸街一帶，適合由中段街道連接點轉出再步行前往。實際街口與開放安排請以現場指示及場方官方資訊為準。',
          },
          {
            q: '走到干德道之後是不是就到太平山頂？',
            a: '不是。干德道位於半山住宅區，是官方所述的系統終點一帶；山頂與山頂纜車需要另外規劃交通與票務，本站不把它們寫成扶梯的直接延伸。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hollywood Road exit Hong Kong',
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators Exits | Where to Leave the Route',
          description: 'Choose where to leave the escalators by destination: Central Market, Tai Kwun and PMQ, SoHo dining streets, or the Mid-Levels, plus the return-trip limits of a one-way system.',
        },
        kicker: 'EXITS',
        h1: 'Where should you leave the escalators?',
        lead: 'An exit here is not a gate but a street-level connection where the route crosses a road. Because the system runs one way at a time, deciding what you want to visit next before you ride avoids reaching the Mid-Levels with no return plan.',
        facts: [
          { label: 'Exit type', value: 'Street-level connections' },
          { label: 'Direction', value: 'One way by time of day' },
          { label: 'Upper end', value: 'Conduit Road · Mid-Levels' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Connections, not station exits',
            paragraphs: [
              'The route climbs across several cross streets, each with a way out to street level. There are no gates, ticket checks or numbered platforms; the street you emerge onto may not be the junction you had in mind, and it may be steep.',
              'Read the street order before riding and match each stop to a section of the route, rather than waiting until you recognise a shopfront.',
            ],
          },
          {
            heading: 'Choose the section by your next stop',
            table: {
              caption: 'Grouped by neighbourhood; not official exit numbers or measured walking times',
              columns: ['Next stop', 'Section to watch for', 'Check after leaving'],
              rows: [
                ['Central Market, Pottinger Street, Queen’s Road Central', 'Lower section near Central Market and the footbridge', 'Street direction and road crossings'],
                ['Man Mo Temple, Hollywood Road antiques', 'Middle section near Hollywood Road', 'That section’s direction and the gradient'],
                ['Tai Kwun, PMQ', 'Middle section towards Hollywood Road and Aberdeen Street', 'Venue opening arrangements and entrances'],
                ['SoHo dining streets', 'Middle section around Staunton and Elgin Street', 'Whether you are still in the right neighbourhood'],
                ['Mid-Levels, Conduit Road', 'Upper end of the system', 'Return transport and evening route'],
              ],
            },
          },
          {
            heading: 'One-way operation and getting back',
            paragraphs: [
              'The published pattern is downhill in the morning and uphill afterwards, so you cannot assume an immediate reverse ride on the same section. If you plan to leave near the top, decide how to return to Central first: walking downhill via the streets, surface public transport or a taxi are all options to be judged on the day.',
              'Transport Department notices may list routine maintenance for individual sections. If a section is closed, your intended exit may be unavailable; follow on-site signs and leave at an earlier or later connection.',
            ],
          },
          {
            heading: 'Practical reminders when leaving',
            bullets: [
              { title: 'Clear the landing first', text: 'Put your phone and map away before the exit; only stop once you have stepped off so you do not block people behind you.' },
              { title: 'Watch the level changes', text: 'Central to Mid-Levels streets include steep roads and steps. With a pushchair or luggage, confirm the connection suits you before leaving.' },
              { title: 'Settle the return at night', text: 'Business hours and transport options change in the evening. Decide how to get back to Central before you leave the route rather than assuming a ride is always available.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Are the exits numbered?',
            a: 'There are no station-style numbered exits. The system is made of separate sections with street connections; this page groups them as lower, middle and upper sections with nearby streets, which is not an official exit numbering scheme.',
          },
          {
            q: 'Can I ride the same section straight back?',
            a: 'Do not assume so. The system runs one way by time of day and individual sections may change because of maintenance. Treat the return as a separate plan and see the return-to-Central guide.',
          },
          {
            q: 'Where should I get off for Tai Kwun or PMQ?',
            a: 'Both sit near the middle of the route, around Hollywood Road and Aberdeen Street. Leave via a middle-section street connection and continue on foot; check the exact junction and venue arrangements on site and with the venues themselves.',
          },
          {
            q: 'Does Conduit Road mean I have reached Victoria Peak?',
            a: 'No. Conduit Road is in the residential Mid-Levels and is the published upper end of the system. The Peak and the Peak Tram require separate transport and ticketing; they are not described here as an extension of the escalators.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators Hollywood Road exit Hong Kong',
      },
    },
  },
  {
    slug: 'route-map',
    group: 'transport',
    title: { zh: '完整路線圖', en: 'Route map' },
    related: ['entrances', 'exits', 'uphill-downhill', 'itinerary/half-day'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯完整路線｜皇后大道中至干德道街道順序',
          description: '以文字列出中環半山扶手電梯由皇后大道中、中環街市、嘉咸街、荷李活道、堅道至干德道的街道連接關係，說明地圖標記與實地差異，以及常見路線誤解。',
        },
        kicker: 'ROUTE MAP',
        h1: '由皇后大道中到干德道的路線順序',
        lead: '本站以文字與街道順序呈現路線，並提供 Google Maps 地點搜尋連結，不提供可下載的地圖檔，也不把單一地圖標記當成完整路線。看完這頁，你應該能判斷自己想在哪一段加入、哪一段離開。',
        facts: [
          { label: '下段起點一帶', value: '皇后大道中 · 中環街市' },
          { label: '上段終點一帶', value: '干德道 · 半山' },
          { label: '系統構成', value: '16 條扶梯 · 3 條自動行人道 · 天橋' },
          { label: '全長', value: '運輸署所列約 800 米' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '路線不是一條直線',
            paragraphs: [
              '中環至半山的地勢令這套系統必須沿既有街道分段的扶梯、自動行人道與天橋鋪設。它並非一條由山腳直達山頂的連續輸送帶，也沒有覆蓋沿線所有橫街；每一段之間通常以街道或平台連接。',
              '因此「路線圖」最有用的呈現方式，是把街道順序與可停留主題並列，而不是只放一個地圖釘。',
            ],
          },
          {
            heading: '街道順序與可停留主題',
            table: {
              caption: '依官方所述起終點與沿線街區整理；非實測距離、非官方出口編號',
              columns: ['路段', '相鄰街道／地標', '適合安排的停留'],
              rows: [
                ['下段', '皇后大道中、中環街市、租庇利街一帶', '街市建築、石板街、由港鐵方向進入'],
                ['下中段', '嘉咸街、擺花街一帶', '老街市街景、街頭攝影、茶餐廳'],
                ['中段', '荷李活道、士丹頓街、伊利近街', '文武廟、SoHo 餐飲、大館與 PMQ 方向'],
                ['上中段', '堅道、羅便臣道一帶', '半山街景、坡道與住宅建築'],
                ['上段', '干德道一帶', '終點觀察、返回中環的安排'],
              ],
            },
          },
          {
            heading: '地圖標記與實地差異',
            paragraphs: [
              'Google Maps 的景點頁面通常只標出一個位置。以「租庇利街」作為定位點查詢是可行的，但導航結果會帶你到該標記附近，而不是自動帶你走完整條路線。若你打算由中段加入，應直接以該街道名稱搜尋，而不是依賴景點釘。',
              '運輸署的 HKeMobility 可用於比較實際出行路線；升降機、天橋開放與個別路段狀態仍須當日現場核實。',
            ],
          },
          {
            heading: '三個常見誤解',
            bullets: [
              { title: '以為是單一條超長扶梯', text: '官方描述的是由多段設備組成的系統，中間有行人道、天橋與街道接口。' },
              { title: '以為終點是太平山頂', text: '干德道位於半山住宅區，山頂需另查交通與票務。' },
              { title: '以為全線任何時候都同時可用', text: '方向按時段切換，個別路段亦可能因例行維護或特別安排而受影響。' },
            ],
          },
        ],
        faqs: [
          {
            q: '有沒有可以下載的中環半山扶手電梯地圖？',
            a: '本頁不提供可下載地圖檔，而是以文字列出街道順序並附上 Google Maps 地點搜尋連結。運輸署的官方頁面與 HKeMobility 適合用來核對實際路線與交通安排。',
          },
          {
            q: '扶梯全長是多少？',
            a: '運輸署資料列出系統全長約 800 米，由 16 條扶手電梯與 3 條自動行人道等組成。這不是單一條扶梯的長度，也不代表乘搭所需的固定時間。',
          },
          {
            q: '皇后大道中到干德道可以全程不落地嗎？',
            a: '不應這樣假設。系統沿街道分段連接，部分位置需要經過街道或平台，個別路段也可能因維護而改變；請按現場指示安排。',
          },
          {
            q: '地圖上的租庇利街標記等於路線起點嗎？',
            a: '它是讓地圖標示景點的位置，不是已實測的唯一入口。旅發局以皇后大道中描述起點，兩者用途不同，規劃時應分開理解。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalator and Walkway System Hong Kong',
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators Route Map | Streets from Central to Mid-Levels',
          description: 'A written route map of the Central–Mid-Levels Escalators from Queen’s Road Central and Central Market through Graham Street, Hollywood Road and Caine Road to Conduit Road, with common route misconceptions.',
        },
        kicker: 'ROUTE MAP',
        h1: 'The route from Queen’s Road Central to Conduit Road',
        lead: 'This page presents the route as a written street sequence with a Google Maps place search link. It does not offer a downloadable map file or treat a single map pin as the whole route. After reading it, you should be able to decide which section to join and which to leave.',
        facts: [
          { label: 'Lower end', value: "Queen's Road Central · Central Market" },
          { label: 'Upper end', value: 'Conduit Road · Mid-Levels' },
          { label: 'System', value: '16 escalators · 3 walkways · footbridges' },
          { label: 'Length', value: 'About 800 m, per the Transport Department' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'The route is not a straight line',
            paragraphs: [
              'The terrain between Central and the Mid-Levels means the system follows existing streets through separate escalator sections, moving walkways and footbridges. It is not one continuous conveyor from the harbour to the Peak, and it does not cover every cross street; sections are linked by streets or landings.',
              'For that reason, the most useful route map pairs the street order with the reasons to stop, instead of showing a single pin.',
            ],
          },
          {
            heading: 'Street order and reasons to stop',
            table: {
              caption: 'Based on the published endpoints and neighbourhoods along the way; not measured distances or official exit numbers',
              columns: ['Section', 'Nearby streets / landmarks', 'Worth planning for'],
              rows: [
                ['Lower', "Queen's Road Central, Central Market, Jubilee Street", 'Market building, Pottinger Street, arriving from MTR'],
                ['Lower–middle', 'Graham Street, Lyndhurst Terrace area', 'Old market streets, street photography, cha chaan tengs'],
                ['Middle', 'Hollywood Road, Staunton Street, Elgin Street', 'Man Mo Temple, SoHo dining, towards Tai Kwun and PMQ'],
                ['Middle–upper', 'Caine Road, Robinson Road area', 'Mid-Levels streetscape, slopes and residential buildings'],
                ['Upper', 'Conduit Road area', 'The upper end, and planning the return to Central'],
              ],
            },
          },
          {
            heading: 'Map pins versus the street',
            paragraphs: [
              'A Google Maps place page usually marks one location. Searching with the Jubilee Street pin works, but navigation takes you near that marker rather than along the whole system. If you intend to join in the middle, search for that specific street instead of relying on the attraction pin.',
              'The Transport Department’s HKeMobility planner can compare actual journeys; lift availability, footbridge access and individual section status still need checking on the day.',
            ],
          },
          {
            heading: 'Three common misunderstandings',
            bullets: [
              { title: 'It is one giant escalator', text: 'Official material describes a system of separate sections with walkways, footbridges and street interfaces.' },
              { title: 'The top is Victoria Peak', text: 'Conduit Road is in the residential Mid-Levels; the Peak needs separate transport and tickets.' },
              { title: 'Every section runs at all times', text: 'Direction changes by time of day, and individual sections may be affected by routine maintenance or special arrangements.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is there a downloadable map of the escalators?',
            a: 'This page does not provide one. It lists the street sequence in text and links to a Google Maps place search. The Transport Department’s official page and HKeMobility are the appropriate places to check a real journey.',
          },
          {
            q: 'How long is the system?',
            a: 'Transport Department material lists roughly 800 m made up of 16 escalators and 3 moving walkways, among other links. That is the length of the system, not one escalator, and it does not imply a fixed ride duration.',
          },
          {
            q: 'Can I stay on the system all the way from Queen’s Road Central to Conduit Road?',
            a: 'Do not assume so. The route is split into sections linked by streets or landings, and individual sections may change because of maintenance. Follow the signs on site.',
          },
          {
            q: 'Is the Jubilee Street map pin the starting point?',
            a: 'It is a location marker, not a verified sole entrance. The Tourism Board describes Queen’s Road Central as the starting point; the two serve different purposes and should be understood separately.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalator and Walkway System Hong Kong',
      },
    },
  },
  {
    slug: 'mtr-central',
    group: 'transport',
    title: { zh: '港鐵中環站出發', en: 'From MTR Central' },
    related: ['mtr-hong-kong', 'entrances', 'route-map', 'return-to-central'],
    content: {
      zh: {
        meta: {
          title: '從港鐵中環站怎麼去半山扶手電梯｜出口與步行接駁',
          description: '由港鐵中環站前往中環半山扶手電梯的規劃順序：先選定皇后大道中一帶的街道接點，再核對出口方向、升降機與當日扶梯方向，不提供未實測的出口編號或步行分鐘數。',
        },
        kicker: 'MTR CENTRAL',
        h1: '從港鐵中環站到扶梯，先選街道再選出口',
        lead: '中環站有多個出口，連接不同街道與商業樓群。與其記住一個出口編號，不如先決定要在扶梯哪一段加入，再用港鐵現場指示或運輸署 HKeMobility 找出通往該街道的路線。',
        facts: [
          { label: '起點車站', value: '港鐵中環站' },
          { label: '目標區位', value: '皇后大道中 · 中環街市一帶' },
          { label: '規劃工具', value: '港鐵現場指示 · HKeMobility' },
          { label: '收費', value: '扶梯免費；港鐵車費另計' },
          { label: '資料整理', value: '2026-11-09 · 非實時' },
        ],
        sections: [
          {
            heading: '第一步：決定加入的路段',
            paragraphs: [
              '若只想短暫體驗，可選下段近皇后大道中的連接點；若打算順遊文武廟、大館或 SoHo，則應以中段街道為目標。兩者從中環站出發的地面路線不同，先決定目的地可以少走回頭路。',
              '本站沒有完成各出口到各街道接點的實測，因此不列出固定出口編號或步行分鐘數；港鐵車站改動、升降機維護與路面工程都會影響實際動線。',
            ],
          },
          {
            heading: '由車站到路面的決策點',
            bullets: [
              { title: '看車站街道指示', text: '中環站出口指示以附近街道與大廈為標示，選擇通往皇后大道中方向的一側，再按地面路牌微調。' },
              { title: '需要升降機先查', text: '攜嬰兒車、輪椅或大件行李時，先確認車站升降機與目標街道的無障礙路線，不要假定任何出口都合適。' },
              { title: '地面路段有坡度', text: '由皇后大道中往扶梯方向及沿線橫街多有斜路，行程緊湊時應把體力與時間留寬。' },
            ],
          },
          {
            heading: '不同情境的規劃重點',
            table: {
              caption: '規劃順序參考，非官方出口指引或實測路線',
              columns: ['情境', '建議先做的決定', '必須現場核對'],
              rows: [
                ['只想搭一小段', '以下段皇后大道中一帶為目標', '當日方向燈與該段是否開放'],
                ['想先逛中環街市', '把街市與天橋連接排在同一段', '天橋與街市出入口安排'],
                ['想直去 SoHo 用餐', '以中段士丹頓街一帶為目標', '由車站到該街道的路線與坡度'],
                ['帶嬰兒車或大件行李', '先確認升降機與地面替代路線', '機電署安全指引建議改用升降機'],
              ],
            },
          },
          {
            heading: '抵達扶梯前的最後檢查',
            paragraphs: [
              '在走進連接點之前，先看方向燈：上午與日間的運行方向相反。若當下方向與你的行程不符，與其在出入口等待，不如把扶梯安排到行程後段，先逛附近街道或場館。',
              '運輸署交通通告列出的例行維護可能影響個別路段；出發前查看通告與資料更新日期，比依賴任何固定時刻表更可靠。',
            ],
          },
        ],
        faqs: [
          {
            q: '中環站哪一個出口最接近半山扶手電梯？',
            a: '本站不指定單一出口編號。中環站連接多條街道，實際最合適的出口取決於你想加入扶梯的哪一段；請用車站街道指示或運輸署 HKeMobility 按當日情況確認。',
          },
          {
            q: '由中環站步行到扶梯要多久？',
            a: '本站沒有完成實測，也不提供統一步行分鐘數。街道坡度、出口選擇、人流與路面工程都會影響時間，建議以地圖工具按當日路線估算。',
          },
          {
            q: '從中環站去扶梯需要再乘車嗎？',
            a: '一般不需要另乘公共交通，扶梯位於中環核心街區；但若目標是中段或上段，仍要按街道坡度與自身體力決定是否使用路面交通。',
          },
          {
            q: '早上從中環站出發可以搭上行嗎？',
            a: '上午官方所列為下行往中環方向，之後才轉為上行。請先看入口處方向燈與運輸署通告，不要按固定分鐘推算。',
          },
        ],
        mapsQuery: 'MTR Central Station to Central-Mid-Levels Escalators Hong Kong',
      },
      en: {
        meta: {
          title: 'MTR Central to the Mid-Levels Escalators | Exits and Walking Links',
          description: 'How to plan from MTR Central Station to the Central–Mid-Levels Escalators: choose a street connection near Queen’s Road Central first, then check exit direction, lifts and the running direction, without unverified exit numbers or walking times.',
        },
        kicker: 'MTR CENTRAL',
        h1: 'From MTR Central: choose the street before the exit',
        lead: 'Central Station has many exits serving different streets and building complexes. Rather than memorising one exit number, decide which section of the escalators you want to join, then use station signs or the Transport Department’s HKeMobility planner to find the route to that street.',
        facts: [
          { label: 'Starting station', value: 'MTR Central' },
          { label: 'Target area', value: "Queen's Road Central · Central Market" },
          { label: 'Planning tools', value: 'Station signs · HKeMobility' },
          { label: 'Fare', value: 'Escalators free; MTR fare separate' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Step one: decide which section to join',
            paragraphs: [
              'For a short visit, aim for a lower-section connection near Queen’s Road Central. If you want Man Mo Temple, Tai Kwun or SoHo first, target a middle-section street instead. The two involve different street-level routes from the station, so deciding early avoids retracing your steps.',
              'This guide has not measured station exits against street connections, so it lists no fixed exit numbers or walking minutes. Station changes, lift maintenance and road works all affect the actual route.',
            ],
          },
          {
            heading: 'Decision points from station to street',
            bullets: [
              { title: 'Read the street signs', text: 'Central Station exits are signed by nearby streets and buildings. Choose the side that points towards Queen’s Road Central, then adjust using street signs at ground level.' },
              { title: 'Check lifts if you need them', text: 'With a pushchair, wheelchair or large luggage, confirm station lifts and a step-free street route first; do not assume every exit will suit you.' },
              { title: 'Expect gradients', text: 'Streets from Queen’s Road Central towards the route and its cross streets can be steep. Allow extra energy and time on a tight schedule.' },
            ],
          },
          {
            heading: 'Planning priorities by situation',
            table: {
              caption: 'A planning sequence, not official exit guidance or a measured route',
              columns: ['Situation', 'Decide first', 'Verify on the day'],
              rows: [
                ['A short ride only', 'Target the lower section near Queen’s Road Central', 'Direction signs and whether that section is open'],
                ['Visit Central Market first', 'Keep the market and footbridge link in the same part', 'Footbridge and market access arrangements'],
                ['Head straight to SoHo dining', 'Target the middle section around Staunton Street', 'Station-to-street route and gradient'],
                ['Pushchair or heavy luggage', 'Confirm lifts and a step-free street alternative', 'EMSD guidance advises lifts over escalators'],
              ],
            },
          },
          {
            heading: 'A final check before stepping on',
            paragraphs: [
              'Before entering a connection, read the direction signs: morning and daytime operation run in opposite directions. If the direction does not suit your plan, visit nearby streets or a venue first and ride later rather than waiting at a landing.',
              'Transport Department notices may list routine maintenance affecting individual sections. Checking notices and their dates is more reliable than any fixed timetable.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Which Central Station exit is closest to the escalators?',
            a: 'This guide does not name a single exit. The station serves many streets, and the best exit depends on the section you want to join; use station street signs or HKeMobility to confirm on the day.',
          },
          {
            q: 'How long is the walk from Central Station?',
            a: 'No measured walking time is published here. Gradients, exit choice, crowds and road works all change it; estimate with a map tool using the route you actually take.',
          },
          {
            q: 'Do I need another ride after Central Station?',
            a: 'Usually not — the system sits in central Central. If you are aiming for a middle or upper section, decide whether surface transport is worthwhile based on the gradient and your own stamina.',
          },
          {
            q: 'Can I ride uphill from Central in the morning?',
            a: 'The published morning direction is downhill towards Central, switching to uphill later. Check the direction signs at the entry point and Transport Department notices rather than a fixed minute.',
          },
        ],
        mapsQuery: 'MTR Central Station to Central-Mid-Levels Escalators Hong Kong',
      },
    },
  },
  {
    slug: 'mtr-hong-kong',
    group: 'transport',
    title: { zh: '香港站出發', en: 'From Hong Kong Station' },
    related: ['mtr-central', 'accessibility', 'entrances', 'where-to-stay'],
    content: {
      zh: {
        meta: {
          title: '從香港站到半山扶手電梯｜機場快線與步行連接',
          description: '由機場快線香港站前往中環半山扶手電梯的路線考量：與中環站的連接、行李與升降機、地面街道方向，並說明機場快線票務與班次不在本站核實範圍。',
        },
        kicker: 'HONG KONG STATION',
        h1: '由香港站（機場快線）走進中環舊城',
        lead: '香港站是機場快線的市區終點，與港鐵中環站屬不同車站但設有連接通道。帶行李抵達後想直接去扶梯，重點不是記路線，而是先處理行李、升降機與地面街道方向。',
        facts: [
          { label: '起點車站', value: '機場快線香港站' },
          { label: '與中環站關係', value: '不同車站，設連接通道' },
          { label: '主要考量', value: '行李 · 升降機 · 街道坡度' },
          { label: '票務範圍', value: '機場快線車費另計，須向港鐵查證' },
          { label: '資料整理', value: '2026-11-09 · 非實時' },
        ],
        sections: [
          {
            heading: '香港站與中環站不是同一個車站',
            paragraphs: [
              '兩站位置相鄰並有連接通道，但屬不同線路與不同票務環境。由機場快線轉往市區線、或由香港站直接步行出站，動線與收費安排都不同；出發前先看港鐵當日的車站指示。',
              '若你剛下機並攜帶大型行李，先確認是否有合適的升降機與行李處理安排，會比急於找扶梯入口更重要。機電工程署的安全指引亦建議攜帶大件行李者使用升降機，而不是乘扶手電梯。',
            ],
          },
          {
            heading: '帶行李時的動線考量',
            bullets: [
              { title: '先減輕負擔', text: '考慮先在車站或住宿處安置行李；扶梯沿線街道多斜路與樓梯，拖行大型行李並不輕鬆。' },
              { title: '確認升降機', text: '由車站到地面、以及沿線想使用的連接點，是否設有可用升降機，須按當日現場與車站資訊確認。' },
              { title: '避開出入口停留', text: '扶梯出入口是通道；整理行李或查看地圖時先退到街道旁，不要堵住踏級出口。' },
            ],
          },
          {
            heading: '不同出發情境的安排',
            table: {
              caption: '情境歸類，非港鐵官方轉乘指引',
              columns: ['情境', '較合適的做法', '須向誰確認'],
              rows: [
                ['剛下機、行李較多', '先安置行李或改乘路面交通到住宿', '港鐵車站資訊、住宿方'],
                ['已轉乘至中環站範圍', '按中環站街道指示往皇后大道中方向', '車站現場指示'],
                ['只想短暫看扶梯', '以下段連接點為目標，縮短地面步行', '當日方向燈與路段狀態'],
                ['需要無障礙路線', '先規劃升降機與地面替代動線', '機電署指引與場地現場資訊'],
              ],
            },
          },
          {
            heading: '不屬本站核實的範圍',
            paragraphs: [
              '機場快線票價、班次、行李服務、車站商店與連接通道的開放安排，均屬港鐵與相關營運方的資訊，本站沒有實時資料，也不在此提供數字。請以港鐵官方公布為準。',
              '本頁只處理「由香港站這一側進入中環舊城後，如何把扶梯排進行程」的規劃順序，並連結至中環站與入口的專題。',
            ],
          },
        ],
        faqs: [
          {
            q: '香港站就是中環站嗎？',
            a: '不是同一個車站。兩者相鄰並設連接通道，但屬不同線路；由機場快線轉乘市區線或直接出站，動線與票務安排都不同，請按港鐵當日車站指示。',
          },
          {
            q: '帶大行李可以直接乘扶手電梯嗎？',
            a: '不建議。機電工程署的安全指引建議攜帶大件行李者使用升降機；扶梯沿線街道多斜坡與樓梯，先安置行李會更實際。',
          },
          {
            q: '機場快線車費與班次在哪裡查？',
            a: '請向港鐵官方渠道查詢。本站不提供票價、班次或服務時間數字，也不代售車票，只整理扶梯周邊的行程規劃。',
          },
          {
            q: '從香港站去扶梯要用什麼交通工具？',
            a: '扶梯位於中環核心街區，可經連接通道與地面街道前往；但是否使用路面交通，應按行李、體力與當日街道情況決定，本站不指定單一路線。',
          },
        ],
        mapsQuery: 'Airport Express Hong Kong Station to Central-Mid-Levels Escalators',
      },
      en: {
        meta: {
          title: 'Hong Kong Station to the Mid-Levels Escalators | Airport Express Links',
          description: 'Planning from Airport Express Hong Kong Station to the Central–Mid-Levels Escalators: the link with Central Station, luggage and lifts, street-level direction, and why fares and schedules are outside this guide’s verified scope.',
        },
        kicker: 'HONG KONG STATION',
        h1: 'From Hong Kong Station into old-town Central',
        lead: 'Hong Kong Station is the Airport Express city terminus, adjacent to but distinct from MTR Central, with connecting passages. Arriving with luggage, the priority is not memorising a route but sorting out luggage, lifts and which street you emerge onto.',
        facts: [
          { label: 'Starting station', value: 'Airport Express Hong Kong Station' },
          { label: 'Link to Central', value: 'Separate station, connecting passage' },
          { label: 'Main concerns', value: 'Luggage · lifts · gradients' },
          { label: 'Fares', value: 'Airport Express fare separate; check MTR' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Hong Kong Station and Central are separate stations',
            paragraphs: [
              'They are adjacent and connected, but sit on different lines and in different ticketing contexts. Transferring to the urban lines or walking out of Hong Kong Station involve different routes and fare arrangements; follow MTR station signs on the day.',
              'If you have just landed with large luggage, checking lift availability and luggage arrangements matters more than finding the escalator straight away. EMSD safety guidance also advises people with bulky luggage to use lifts rather than escalators.',
            ],
          },
          {
            heading: 'Moving through the area with luggage',
            bullets: [
              { title: 'Lighten the load first', text: 'Consider storing luggage at the station or your accommodation. Streets along the route include steep roads and steps, which are awkward with a large case.' },
              { title: 'Confirm lifts', text: 'Check whether usable lifts serve both the station-to-street route and the connection you plan to use, using station and on-site information.' },
              { title: 'Keep landings clear', text: 'Escalator entry points are passageways. Step aside onto the street before repacking or checking a map, and do not block the landing.' },
            ],
          },
          {
            heading: 'Arrangements by situation',
            table: {
              caption: 'Grouped by situation; not official MTR interchange guidance',
              columns: ['Situation', 'Sensible approach', 'Confirm with'],
              rows: [
                ['Just landed, heavy luggage', 'Store luggage or take surface transport to your accommodation', 'MTR station information, your accommodation'],
                ['Already transferred to Central', 'Follow Central’s street signs towards Queen’s Road Central', 'On-site station signs'],
                ['A brief look at the escalators', 'Target a lower-section connection to shorten the walk', 'Direction signs and section status'],
                ['Step-free route needed', 'Plan lifts and a street-level alternative first', 'EMSD guidance and venue information'],
              ],
            },
          },
          {
            heading: 'Outside this guide’s verified scope',
            paragraphs: [
              'Airport Express fares, frequencies, luggage services, station shops and the opening of connecting passages all belong to the MTR and other operators. This site has no live data and publishes no figures here; use official MTR information.',
              'This page only covers the planning sequence once you enter old-town Central from the Hong Kong Station side, and links to the Central Station and entrance guides.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Is Hong Kong Station the same as Central Station?',
            a: 'No. They are adjacent and connected but serve different lines. Transferring to urban lines or exiting Hong Kong Station involve different routes and ticketing; follow MTR signs on the day.',
          },
          {
            q: 'Can I take a large suitcase on the escalators?',
            a: 'It is not advisable. EMSD safety guidance advises people with bulky luggage to use lifts, and the streets along the route include slopes and steps. Storing luggage first is more practical.',
          },
          {
            q: 'Where can I check Airport Express fares and schedules?',
            a: 'Use official MTR channels. This guide publishes no fares, frequencies or service hours and sells no tickets; it only covers planning around the escalators.',
          },
          {
            q: 'Which transport should I use from Hong Kong Station?',
            a: 'The escalators are in central Central and can be reached via connecting passages and streets. Whether to use surface transport depends on luggage, stamina and street conditions; no single route is prescribed here.',
          },
        ],
        mapsQuery: 'Airport Express Hong Kong Station to Central-Mid-Levels Escalators',
      },
    },
  },
  {
    slug: 'uphill-downhill',
    group: 'transport',
    title: { zh: '上行與下行攻略', en: 'Uphill & downhill' },
    related: ['return-to-central', 'route-map', 'best-time-to-visit', 'visitor-faq'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯上行與下行｜方向時段與行程安排',
          description: '說明中環半山扶手電梯的單向運行特性、運輸署與旅發局對上行起始時刻的不同列示，以及如何按方向安排入口、離開路段與返回中環的方法。',
        },
        kicker: 'UPHILL / DOWNHILL',
        h1: '先看方向，再決定怎麼搭',
        lead: '這套系統按時段單向運行：上午主要服務往中環的下行客流，其後轉為往半山的上行。官方兩個來源對上行起始時刻的列示相差 20 分鐘，本站如實並列，不把這段差異寫成「全線停運」。',
        facts: [
          { label: '下行往中環', value: '06:00–10:00（兩個官方來源一致）' },
          { label: '上行往半山', value: '10:00 或 10:20 起始，見來源' },
          { label: '上行結束', value: '至午夜，以官方公布為準' },
          { label: '方向依據', value: '現場方向燈與管理方告示' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '單向系統，不是往返交通工具',
            paragraphs: [
              '扶梯的方向會按時段切換，遊客不能假設可以即時反向乘搭同一段回到出發點。這也是「坐上去怎麼下來」成為常見問題的原因：回程必須用街道步行、路面交通或其他方式處理。',
              '若行程包含上段景點，建議把上行安排在行程後半，並預先想好返回中環的方法，避免黃昏時才發現要沿斜路走回市中心。',
            ],
          },
          {
            heading: '兩個官方來源怎樣不同',
            table: {
              caption: '2026-10-30 查閱並於 2026-11-09 整理；不是即時運作監控',
              columns: ['來源', '下行往中環', '上行往半山', '行程上怎樣理解'],
              rows: [
                ['香港運輸署', '06:00–10:00', '10:00 至午夜', '以此為其中一種官方列示'],
                ['香港旅遊發展局', '06:00–10:00', '10:20 至午夜', '以此為另一種官方列示'],
                ['本站', '不另行推算', '不把 10:00–10:20 寫成停運', '以現場方向燈及通告為準'],
              ],
            },
          },
          {
            heading: '按方向安排行程',
            bullets: [
              { title: '上午想由半山往下', text: '可把扶梯排在中環早餐或街市之前，並先確認該段是否開放；下行時沿途街道連接點同樣可用。' },
              { title: '日間想由中環往上', text: '先在下段加入，按中段街道決定是否離開逛大館、PMQ 或 SoHo，再決定要不要一路到上段。' },
              { title: '不要在切換時段等待', text: '兩個官方頁對起始時刻有不同列示，各段切換與維護安排亦可能不同；等待「某一分鐘全線轉換」沒有依據。' },
              { title: '夜間先定回程', text: '上行服務至午夜是官方列示，但不代表所有路段、所有出入口及周邊交通在該時段都如常；回程請另行規劃。' },
            ],
          },
          {
            heading: '維修、方向燈與安全',
            paragraphs: [
              '運輸署交通通告會列出個別扶梯段的例行維護與臨時安排。一段的方向或開放狀態，不能用來推論其餘各段；進入前請看該連接點的方向燈與告示。',
              '遇惡劣天氣或特別安排時，應查香港天文台警告與管理方現場指示；本站沒有即時運作狀態，也不提供自動更新的方向資訊。',
            ],
          },
        ],
        faqs: [
          {
            q: '10:00 到 10:20 是不是全線停運？',
            a: '不能這樣說。運輸署列上行由 10:00 開始，旅發局列 10:20，兩個官方頁的起始時刻不同；本站沒有資料證實存在一段固定的全線停運區間，應按現場方向燈與告示判斷。',
          },
          {
            q: '可以搭上行再立刻搭下行回來嗎？',
            a: '不能假設可以。系統按時段單向運行，回程要用街道步行、路面交通或其他方式，請參考返回中環的專題。',
          },
          {
            q: '上行服務到幾點？',
            a: '兩個官方來源都列至午夜，但這不是即時保證；個別路段維護、現場告示與周邊交通安排都會影響實際可用的時段。',
          },
          {
            q: '哪裡可以查當日方向與維修？',
            a: '以現場方向燈、管理方告示及運輸署交通通告為準；本頁資料整理日為 2026-11-09，不提供實時狀態。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators direction Hong Kong',
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators Uphill & Downhill | Directions and Trip Planning',
          description: 'How the one-way Central–Mid-Levels Escalators work, why the Transport Department and Tourism Board list different uphill start times, and how to plan entrances, exits and the return to Central around the direction of travel.',
        },
        kicker: 'UPHILL / DOWNHILL',
        h1: 'Check the direction before you plan the ride',
        lead: 'The system runs one way at a time: downhill towards Central in the morning, then uphill towards the Mid-Levels. Two official sources list uphill start times 20 minutes apart, so both are shown here rather than describing that gap as a system-wide shutdown.',
        facts: [
          { label: 'Downhill to Central', value: '06:00–10:00 (both sources agree)' },
          { label: 'Uphill to Mid-Levels', value: 'From 10:00 or 10:20, by source' },
          { label: 'Uphill ends', value: 'Midnight, per official listings' },
          { label: 'Authority on site', value: 'Direction signs and operator notices' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'A one-way system, not a return service',
            paragraphs: [
              'Direction changes by time of day, so you cannot assume an immediate reverse ride on the same section. That is why getting back down is a common question: the return has to be handled by street walking, surface transport or another means.',
              'If your plan includes the upper section, ride uphill later in the itinerary and decide how to return to Central in advance, rather than discovering at dusk that you need to walk back down steep streets.',
            ],
          },
          {
            heading: 'How the official sources differ',
            table: {
              caption: 'Reviewed 2026-10-30, compiled 2026-11-09; not live monitoring',
              columns: ['Source', 'Downhill to Central', 'Uphill to Mid-Levels', 'How to read it'],
              rows: [
                ['Transport Department', '06:00–10:00', '10:00–midnight', 'One official listing'],
                ['Hong Kong Tourism Board', '06:00–10:00', '10:20–midnight', 'Another official listing'],
                ['This guide', 'No extra calculation', 'No claimed 10:00–10:20 shutdown', 'Follow on-site signs and notices'],
              ],
            },
          },
          {
            heading: 'Plan around the direction',
            bullets: [
              { title: 'Morning, heading down from the Mid-Levels', text: 'Place the ride before breakfast or a market visit in Central, and check that the section you want is open; street connections work in either direction.' },
              { title: 'Daytime, heading up from Central', text: 'Join at the lower section, decide at the middle streets whether to leave for Tai Kwun, PMQ or SoHo, then choose whether to continue to the top.' },
              { title: 'Do not wait for a changeover minute', text: 'The two official pages list different start times and individual sections may switch or be maintained differently; there is no basis for waiting for one system-wide minute.' },
              { title: 'Settle the return at night', text: 'Uphill service until midnight is an official listing, not a guarantee that every section, exit and nearby transport option is available at that hour.' },
            ],
          },
          {
            heading: 'Maintenance, direction signs and safety',
            paragraphs: [
              'Transport Department notices list routine maintenance and temporary arrangements for individual escalator sections. One section’s direction or status does not establish the others; read the signs at the connection you use.',
              'In bad weather or special arrangements, check Hong Kong Observatory warnings and operator notices. This site has no live operating status and does not publish automatically updated direction information.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Is the whole system closed between 10:00 and 10:20?',
            a: 'That cannot be stated. The Transport Department lists uphill from 10:00 and the Tourism Board from 10:20. This guide has no evidence of a fixed system-wide shutdown, so on-site signs and notices are the authority.',
          },
          {
            q: 'Can I ride up and immediately ride back down?',
            a: 'Do not assume so. The system runs one way by time of day, so the return needs street walking, surface transport or another option; see the return-to-Central guide.',
          },
          {
            q: 'How late does uphill service run?',
            a: 'Both official sources list midnight, but that is not a live guarantee. Maintenance on individual sections, on-site notices and nearby transport all affect what is actually available.',
          },
          {
            q: 'Where can I check today’s direction and maintenance?',
            a: 'Use on-site direction signs, operator notices and Transport Department traffic notices. This page was compiled on 2026-11-09 and carries no real-time status.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators direction Hong Kong',
      },
    },
  },
  {
    slug: 'return-to-central',
    group: 'transport',
    title: { zh: '返回中環', en: 'Return to Central' },
    related: ['uphill-downhill', 'exits', 'mtr-central', 'itinerary/soho-evening'],
    content: {
      zh: {
        meta: {
          title: '半山扶手電梯坐上去怎麼下來｜返回中環的實際選擇',
          description: '扶梯按時段單向運行，不能原路搭回。整理由上段或 SoHo 一帶返回中環的方法：沿街道步行下坡、路面公共交通、的士與升降機考量，以及夜間與攜童安排。',
        },
        kicker: 'RETURN TO CENTRAL',
        h1: '坐上去之後，怎樣回中環？',
        lead: '這是中環半山扶手電梯最常被忽略的規劃問題。單向系統不會把你送回起點，因此在上行之前就該決定回程方式；以下是幾種實際選項與各自的考量，不提供未核實的路線號碼或車資。',
        facts: [
          { label: '扶梯本身', value: '按時段單向，不提供反向回程' },
          { label: '常見回程', value: '街道步行 · 路面交通 · 的士' },
          { label: '地形', value: '中環至半山多斜路與樓梯' },
          { label: '夜間', value: '先確認交通與街道照明安排' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '先把回程當成獨立行程',
            paragraphs: [
              '上行至干德道一帶後，你身處半山住宅區，與港鐵中環站之間有明顯高差。等待扶梯「稍後反方向」通常不是可行規劃：官方列示的方向要到上午才轉為下行。',
              '比較實際的做法，是在離開扶梯前先看清自己所在的街道，再選擇沿街下行、使用路面交通或乘的士。三者的合適程度取決於同行者、體力、天氣與時間。',
            ],
          },
          {
            heading: '四種回程選項',
            bullets: [
              { title: '沿街道與樓梯步行下坡', text: '中環舊城街道密集，可由半山經荷李活道、嘉咸街一帶往皇后大道中方向下行；但路面有坡度與樓梯，雨天濕滑時要放慢，輪椅與嬰兒車不宜假設可通行。' },
              { title: '路面公共交通', text: '半山與中環之間有巴士、小巴等服務，但路線、班次與站位會變；請用運輸署 HKeMobility 或營運方當日資訊查詢，本站不列固定路線號碼。' },
              { title: '的士或預約車輛', text: '攜童、長者或行李較多時較省力；山道與繁忙時段的供應不保證，應預留等候時間。' },
              { title: '升降機與地面替代動線', text: '需要無障礙路線者，先確認附近大廈或公共設施是否有可用升降機，並以地面路線為主，不把樓梯當作通用備案。' },
            ],
          },
          {
            heading: '按情境選擇',
            table: {
              caption: '決策參考，非交通營運資料或實測時間',
              columns: ['情境', '較合適的選擇', '出發前確認'],
              rows: [
                ['時間充裕、想看街景', '沿街道步行下坡', '天氣、路面濕滑與同行者體力'],
                ['趕往港鐵或機場快線', '路面交通或的士', '當日路線、站位與行車時間'],
                ['攜嬰兒車或輪椅', '先規劃升降機與地面路線', '機電署指引與設施可用性'],
                ['晚上用完餐後', '預先定好回程方式', '夜間交通與街道照明'],
              ],
            },
          },
          {
            heading: '夜間與安全提醒',
            paragraphs: [
              '晚間商戶營業、公共交通服務與人流都會改變，不宜把日間的回程做法直接套用。若行程排在 SoHo 或蘭桂坊一帶用晚餐，先在用餐前確認返回中環或住宿的方式。',
              '遇暴雨、颱風信號或特別交通安排，請查香港天文台警告與運輸署交通通告；本站沒有即時路況，也不保證任何一條街道在惡劣天氣下適合通行。',
            ],
          },
        ],
        faqs: [
          {
            q: '可以等扶梯換方向再搭下來嗎？',
            a: '一般不是可行安排。官方列示上午為下行、其後至午夜為上行，等到方向轉換通常已是翌日早上；請把回程視為獨立的街道或交通行程。',
          },
          {
            q: '由干德道走回中環要多久？',
            a: '本站沒有實測，也不提供固定分鐘數。高差、街道坡度、路線選擇與同行者體力差異很大，建議用 HKeMobility 或地圖工具按當日路線估算。',
          },
          {
            q: '有沒有特定的巴士或小巴路線？',
            a: '本站不列路線號碼或班次，避免過時資訊。請用運輸署 HKeMobility 或營運方官方渠道按當日查詢。',
          },
          {
            q: '輪椅使用者可以由上段回中環嗎？',
            a: '須預先規劃。沿線街道與樓梯不是連續無階梯通道，應先確認升降機與地面替代路線；機電工程署指引建議輪椅使用者使用升降機而非扶手電梯。',
          },
        ],
        mapsQuery: 'Conduit Road Mid-Levels to Central MTR Station Hong Kong',
      },
      en: {
        meta: {
          title: 'Getting Back Down from the Mid-Levels Escalators | Return to Central',
          description: 'The escalators run one way, so you cannot ride straight back. Options for returning to Central from the upper section or SoHo: downhill streets, surface transport, taxis, lift considerations, plus evening and family planning.',
        },
        kicker: 'RETURN TO CENTRAL',
        h1: 'After riding up, how do you get back to Central?',
        lead: 'This is the most overlooked part of a visit. A one-way system does not bring you back to where you started, so decide the return before riding uphill. Below are practical options and their trade-offs, with no unverified route numbers or fares.',
        facts: [
          { label: 'The escalators', value: 'One way by time of day' },
          { label: 'Common returns', value: 'Streets · surface transport · taxi' },
          { label: 'Terrain', value: 'Steep streets and steps' },
          { label: 'Evening', value: 'Confirm transport and lighting first' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Treat the return as a separate leg',
            paragraphs: [
              'At Conduit Road you are in a residential Mid-Levels neighbourhood, well above MTR Central. Waiting for the escalators to reverse is rarely a workable plan: the published downhill direction applies in the morning.',
              'The practical approach is to note the street you are on before leaving the system, then choose between walking downhill, surface transport or a taxi. The right choice depends on your companions, stamina, weather and the time.',
            ],
          },
          {
            heading: 'Four ways back',
            bullets: [
              { title: 'Walk downhill via streets and steps', text: 'Old-town Central is dense, so you can descend towards Queen’s Road Central via Hollywood Road and Graham Street. Expect gradients and steps; slow down on wet days, and do not assume step-free access for wheelchairs or pushchairs.' },
              { title: 'Surface public transport', text: 'Buses and minibuses serve the Mid-Levels and Central, but routes, frequencies and stops change. Use HKeMobility or operator information on the day; no fixed route numbers are listed here.' },
              { title: 'Taxi or booked car', text: 'Easier with children, older visitors or luggage. Availability on hillside roads and at busy times is not guaranteed, so allow waiting time.' },
              { title: 'Lifts and street-level alternatives', text: 'For step-free needs, first check whether nearby buildings or public facilities have usable lifts and plan a street-level route; steps are not a universal fallback.' },
            ],
          },
          {
            heading: 'Choose by situation',
            table: {
              caption: 'A decision aid, not transport operator data or measured times',
              columns: ['Situation', 'Sensible choice', 'Check before setting off'],
              rows: [
                ['Plenty of time, want street views', 'Walk downhill through the streets', 'Weather, wet surfaces, companions’ stamina'],
                ['Rushing for MTR or Airport Express', 'Surface transport or taxi', 'Today’s routes, stops and journey time'],
                ['Pushchair or wheelchair', 'Plan lifts and a street-level route first', 'EMSD guidance and facility availability'],
                ['After an evening meal', 'Decide the return before dinner', 'Night transport and street lighting'],
              ],
            },
          },
          {
            heading: 'Evening and safety notes',
            paragraphs: [
              'Business hours, public transport and crowds change at night, so a daytime return plan does not transfer directly. If you are dining around SoHo or Lan Kwai Fong, settle how you will get back to Central or your accommodation before the meal.',
              'In heavy rain, typhoon signals or special traffic arrangements, check Hong Kong Observatory warnings and Transport Department notices. This site has no live conditions and cannot guarantee any street is suitable in bad weather.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Can I wait for the escalators to reverse and ride down?',
            a: 'Usually not a workable plan. Published operation is downhill in the morning and uphill until midnight, so a reversal would typically mean the next morning. Treat the return as a separate street or transport leg.',
          },
          {
            q: 'How long is the walk from Conduit Road back to Central?',
            a: 'No measured time is published here. Height difference, gradients, route choice and stamina vary widely; estimate with HKeMobility or a map tool using the route you actually take.',
          },
          {
            q: 'Which bus or minibus should I take?',
            a: 'No route numbers or schedules are listed here to avoid stale information. Use HKeMobility or the operators’ official channels on the day.',
          },
          {
            q: 'Can a wheelchair user return from the upper section?',
            a: 'It needs advance planning. Streets and steps are not a continuous step-free route; confirm lifts and a street-level alternative first. EMSD guidance advises wheelchair users to use lifts rather than escalators.',
          },
        ],
        mapsQuery: 'Conduit Road Mid-Levels to Central MTR Station Hong Kong',
      },
    },
  },
  {
    slug: 'accessibility',
    group: 'transport',
    title: { zh: '無障礙指南', en: 'Accessibility' },
    related: ['family-guide', 'mtr-central', 'return-to-central', 'visitor-faq'],
    content: {
      zh: {
        meta: {
          title: '中環半山扶手電梯無障礙指南｜輪椅、嬰兒車與升降機',
          description: '按機電工程署安全指引整理輪椅、嬰兒車、長者與大件行李使用扶手電梯的限制，說明沿線街道並非連續無階梯通道，以及需要逐段確認的升降機與替代路線。',
        },
        kicker: 'ACCESSIBILITY',
        h1: '輪椅、嬰兒車與無障礙路線怎樣安排？',
        lead: '有扶梯不等於有無障礙通道。機電工程署的安全指引建議輪椅使用者、嬰兒車及攜帶大件行李者使用升降機；中環至半山的街道多斜坡與樓梯，本站沒有完成全線無階梯實測，因此不把任何路段寫成「全程適合」。',
        facts: [
          { label: '扶梯本身', value: '不列為無障礙設施' },
          { label: '官方安全指引', value: '機電工程署建議改用升降機' },
          { label: '沿線街道', value: '多斜坡與樓梯' },
          { label: '路段狀態', value: '須逐段核對，本站無實測' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '不要把「有扶梯」當成「可無障礙通行」',
            paragraphs: [
              '這套系統由多段扶手電梯、自動行人道與天橋組成，中間以街道或平台連接。即使個別路段設有升降機或較平緩的連接，也不代表可以由皇后大道中一路無階梯到干德道。',
              '機電工程署的安全指引明確建議，輪椅使用者、嬰兒車與攜帶大件行李者應使用合適的升降機，而不是直接乘扶手電梯。這是一項安全建議，不是對沿線設施可用性的保證。',
            ],
          },
          {
            heading: '按需要分類確認',
            bullets: [
              { title: '輪椅使用者', text: '先查車站至街道的升降機、目標連接點是否有可用升降機，以及地面替代路線；不要把樓梯當作適合所有人的備案。' },
              { title: '嬰兒車與幼童', text: '扶梯踏級與出入口對嬰兒車並不理想；沿線斜路亦增加推行難度，建議預先選定較平緩的街道動線。' },
              { title: '大件行李', text: '由機場快線或酒店直接前來時，先安置行李；拖行大型行李穿越斜路與出入口並不安全。' },
              { title: '長者或體力有限者', text: '回程下坡對膝蓋與體力有負擔，建議把上行段縮短，並預先安排路面交通返回中環。' },
            ],
          },
          {
            heading: '出發前的核對清單',
            table: {
              caption: '須按當日場地與設施資訊逐項確認，本表不作可用性保證',
              columns: ['需要確認', '向哪裡查', '若不可用'],
              rows: [
                ['車站與街道之間有無升降機', '港鐵車站資訊、現場指示', '改選其他出口或地面路線'],
                ['目標扶梯段的升降機與連接', '現場告示、運輸署通告', '改由其他街道路段進出'],
                ['個別路段是否因維護受影響', '運輸署交通通告', '重新安排停留點與回程'],
                ['天氣與路面濕滑', '香港天文台警告', '縮短行程或改期'],
              ],
            },
          },
          {
            heading: '查證範圍與限制',
            paragraphs: [
              '本頁整理的是規劃方法與官方安全指引，並未提供各路段升降機位置清單、寬度或開放時間；這些設施資訊須向場地管理方與現場指示查證。運輸署 HKeMobility 可協助比較一般出行路線，但不應視為無障礙路線保證。',
              '若同行者對路線有特定需要，建議在出發前向相關場館或服務提供者確認，並把回程方式一併納入規劃。',
            ],
          },
        ],
        faqs: [
          {
            q: '中環半山扶手電梯適合輪椅嗎？',
            a: '不應直接假設適合。機電工程署安全指引建議輪椅使用者使用升降機而非扶手電梯；沿線街道與樓梯也不是連續無階梯通道，須逐段核對升降機與地面替代路線。',
          },
          {
            q: '嬰兒車可以推上扶梯嗎？',
            a: '不建議。安全指引建議嬰兒車使用升降機，而中環至半山街道多斜坡，推行前應先規劃較平緩的街道動線與回程。',
          },
          {
            q: '沿線有升降機嗎？',
            a: '本站沒有完成逐段設施實測，不提供升降機位置或可用性清單。請按現場指示、運輸署通告及相關場地資訊確認。',
          },
          {
            q: '哪一段最適合無障礙參觀？',
            a: '本站不指定「最適合」的路段，因為設施與路段狀態會變。建議先決定要去的場所，再向該場所與車站確認可用的升降機與地面路線。',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators lift access Hong Kong',
      },
      en: {
        meta: {
          title: 'Central–Mid-Levels Escalators Accessibility | Wheelchairs, Pushchairs & Lifts',
          description: 'Accessibility planning based on EMSD safety guidance for wheelchairs, pushchairs, older visitors and bulky luggage, including why the streets are not a continuous step-free route and what to verify section by section.',
        },
        kicker: 'ACCESSIBILITY',
        h1: 'Wheelchairs, pushchairs and step-free planning',
        lead: 'The presence of escalators does not make a route accessible. EMSD safety guidance advises wheelchair users, pushchairs and people with bulky luggage to use lifts. Central-to-Mid-Levels streets include slopes and steps, and this guide has not surveyed a step-free route, so no section is described as fully accessible.',
        facts: [
          { label: 'The escalators', value: 'Not an accessible facility' },
          { label: 'Safety guidance', value: 'EMSD advises using lifts' },
          { label: 'Surrounding streets', value: 'Slopes and steps' },
          { label: 'Section status', value: 'Verify each one; no survey here' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'Escalators are not the same as step-free access',
            paragraphs: [
              'The system combines separate escalator sections, moving walkways and footbridges linked by streets or landings. Even where a lift or a gentler link exists, that does not establish a step-free route from Queen’s Road Central all the way to Conduit Road.',
              'EMSD safety guidance explicitly advises wheelchair users, pushchairs and people carrying bulky luggage to use suitable lifts rather than escalators. That is safety advice, not a guarantee that facilities are available along the route.',
            ],
          },
          {
            heading: 'Check by need',
            bullets: [
              { title: 'Wheelchair users', text: 'Check station-to-street lifts, whether your intended connection has a usable lift, and a street-level alternative. Steps are not a fallback that suits everyone.' },
              { title: 'Pushchairs and young children', text: 'Escalator steps and landings are unsuitable for pushchairs, and the sloping streets add effort. Choose gentler street routes in advance.' },
              { title: 'Bulky luggage', text: 'Coming straight from the Airport Express or a hotel, store luggage first; dragging a large case across slopes and through landings is unsafe.' },
              { title: 'Older visitors or limited stamina', text: 'The downhill return can be hard on knees and energy. Shorten the uphill portion and arrange surface transport back to Central.' },
            ],
          },
          {
            heading: 'A checklist before you go',
            table: {
              caption: 'Verify each item against current venue and facility information; availability is not guaranteed here',
              columns: ['To confirm', 'Where to check', 'If unavailable'],
              rows: [
                ['Lifts between station and street', 'MTR station information, on-site signs', 'Choose another exit or street route'],
                ['Lifts and links at your chosen section', 'On-site notices, Transport Department notices', 'Enter or leave via a different street'],
                ['Maintenance affecting a section', 'Transport Department traffic notices', 'Rearrange stops and the return leg'],
                ['Weather and wet surfaces', 'Hong Kong Observatory warnings', 'Shorten the visit or go another day'],
              ],
            },
          },
          {
            heading: 'Scope and limits',
            paragraphs: [
              'This page covers a planning method and official safety guidance. It does not provide a list of lift locations, widths or opening hours; those need confirmation from venue operators and on-site signs. HKeMobility can compare general journeys but is not a guarantee of step-free access.',
              'If someone in your group has specific requirements, confirm with the venues or service providers before travelling and include the return leg in the same plan.',
            ],
          },
        ],
        faqs: [
          {
            q: 'Are the escalators wheelchair accessible?',
            a: 'Do not assume so. EMSD guidance advises wheelchair users to use lifts rather than escalators, and the surrounding streets and steps are not a continuous step-free route; verify lifts and street alternatives section by section.',
          },
          {
            q: 'Can I take a pushchair on the escalators?',
            a: 'It is not advisable. Safety guidance recommends lifts for pushchairs, and the sloping streets require a gentler planned street route and a planned return.',
          },
          {
            q: 'Are there lifts along the route?',
            a: 'No section-by-section facility survey is published here, so no lift locations or availability are listed. Check on-site signs, Transport Department notices and venue information.',
          },
          {
            q: 'Which section is best for an accessible visit?',
            a: 'No section is labelled best, because facilities and section status change. Decide which place you want to visit, then confirm usable lifts and a street-level route with that venue and the station.',
          },
        ],
        mapsQuery: 'Central-Mid-Levels Escalators lift access Hong Kong',
      },
    },
  },
];
