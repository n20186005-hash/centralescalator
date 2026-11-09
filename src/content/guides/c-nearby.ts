import type { GuideDef } from './types';

/** C · 附近景点（8 页）。每页独立：介绍、基本资料、由扶梯哪一段前往、路线、须知、拍照与 FAQ。
 *  开放时间、票价与管理单位一律指向场方官方公布，不编造具体数字或名称。 */
export const nearbyGuides: GuideDef[] = [
  {
    slug: 'nearby/tai-kwun',
    group: 'nearby',
    title: { zh: '大館', en: 'Tai Kwun' },
    related: ['nearby/pmq', 'itinerary/half-day', 'itinerary/central-walking-tour', 'exits'],
    content: {
      zh: {
        meta: {
          title: '大館 Tai Kwun｜由中環半山扶手電梯怎麼去與參觀重點',
          description: '由扶梯中段前往大館的路線與參觀重點：前中區警署建築群的歷史建築、公共空間、展覽與餐飲安排，以及開放資訊、拍照須知與周邊串連建議。',
        },
        kicker: 'NEARBY · TAI KWUN',
        h1: '大館：扶梯中段的歷史建築群',
        lead: '大館位於荷李活道一帶，是由前中區警署建築群活化而成的古蹟與文化藝術空間。它與扶梯中段相鄰，適合和 SoHo、PMQ 排在同一趟舊城步行裡；入場與活動安排請以場方官方公布為準。',
        facts: [
          { label: '位置', value: '中環荷李活道一帶' },
          { label: '性質', value: '歷史建築活化園區、文化藝術空間' },
          { label: '由扶梯前往', value: '中段街道連接點轉出步行' },
          { label: '入場與開放', value: '以場方官方公布為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識大館',
            paragraphs: [
              '建築群由前中區警署、裁判司署及監獄等設施組成，經活化後成為對公眾開放的文化藝術場地。園區裡保留歷史建築立面與戶外空間，也有當代展覽與表演場地；不同展覽與活動的入場安排並不相同。',
              '本站不代為確認展覽檔期、票價或管理單位名稱，這些資訊會變動，請直接查閱大館官方訪客資料。',
            ],
          },
          {
            heading: '由扶梯哪一段前往',
            bullets: [
              { title: '選中段連接點', text: '由扶梯中段近荷李活道、鴨巴甸街方向的街道連接點轉出，再按街道指示步行前往；實際街口與坡度以現場為準。' },
              { title: '配合方向', text: '若當日為上行，可由下段加入、在大館所在的中段離開；若為上午下行，則可把大館排在扶梯之後，避免來回走斜路。' },
              { title: '與其他場所串連', text: '大館、PMQ 與荷李活道古物店區同屬一段步行範圍，適合排成半日行程，而非各自來回一趟。' },
            ],
          },
          {
            heading: '建築、人文與特色體驗',
            table: {
              caption: '園區內容以場方當日公布為準；本表只作規劃分類',
              columns: ['面向', '可以留意', '事先查證'],
              rows: [
                ['歷史建築', '舊警署與監獄建築群、戶外空間', '哪些區域當日開放'],
                ['展覽與活動', '當代藝術與表演節目', '展期、入場與票務安排'],
                ['餐飲', '園區內餐廳與咖啡空間', '營業時間與是否需要訂位'],
                ['周邊', 'SoHo、PMQ、荷李活道', '各場所開放與街道動線'],
              ],
            },
          },
          {
            heading: '遊客須知與拍照建議',
            bullets: [
              { title: '先查開放', text: '園區、展覽與商戶的開放時間各異；出發前看大館官方訪客資料，不要以第三方摘要代替。' },
              { title: '尊重展場規定', text: '室內展覽、表演與部分歷史建築可能限制拍攝、三腳架或閃光燈，按現場指示為準。' },
              { title: '留意坡度與人流', text: '由扶梯中段步行前往需經中環斜路；雨天路面濕滑，攜童或行動不便者應先規劃較平緩路線。' },
              { title: '回程先定', text: '若之後要回中環或上環，先想好步行或路面交通，不要把扶梯當成可即時反向乘搭的工具。' },
            ],
          },
        ],
        faqs: [
          {
            q: '大館需要門票嗎？',
            a: '公共空間與個別展覽的入場安排不同，本站不提供票價或免費保證。請查閱大館官方訪客資料與當日節目頁面。',
          },
          {
            q: '從扶梯怎麼去大館？',
            a: '由中段近荷李活道、鴨巴甸街一帶的街道連接點轉出，再按街道指示步行。實際街口與步行路線請以現場與地圖工具確認。',
          },
          {
            q: '大館幾點開放？',
            a: '園區、展覽與商戶各有不同安排，本站沒有即時資料。請以大館官方公布的開放時間為準。',
          },
          {
            q: '大館可以拍照嗎？',
            a: '戶外公共空間一般可拍，但室內展覽、表演與部分歷史建築可能有限制；請看現場標示並尊重其他訪客與工作人員。',
          },
        ],
        mapsQuery: 'Tai Kwun 10 Hollywood Road Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Tai Kwun from the Mid-Levels Escalators | Visit & Walking Notes',
          description: 'How to reach Tai Kwun from the middle section of the escalators: the former Central Police Station compound, its public spaces, exhibitions and dining, plus opening information, photography rules and nearby stops.',
        },
        kicker: 'NEARBY · TAI KWUN',
        h1: 'Tai Kwun: a heritage compound near the middle section',
        lead: 'Tai Kwun sits around Hollywood Road, a heritage and arts venue created from the former Central Police Station compound. It is close to the middle of the escalator route and pairs well with SoHo and PMQ on one old-town walk; check the venue’s own information for access and event arrangements.',
        facts: [
          { label: 'Area', value: 'Hollywood Road, Central' },
          { label: 'Type', value: 'Revitalised heritage compound, arts venue' },
          { label: 'From the escalators', value: 'Leave at a middle-section street connection' },
          { label: 'Opening & entry', value: 'Check the venue’s official information' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About Tai Kwun',
            paragraphs: [
              'The compound includes the former police station, magistracy and prison buildings, revitalised as a publicly accessible heritage and arts venue. Historic facades and outdoor spaces sit alongside contemporary exhibitions and performance spaces, with different entry arrangements for different programmes.',
              'Exhibition dates, prices and the name of the operating body are not asserted here; they change, and the venue’s official visitor information is the appropriate source.',
            ],
          },
          {
            heading: 'Getting there from the escalators',
            bullets: [
              { title: 'Use a middle-section connection', text: 'Leave via a middle-section street connection towards Hollywood Road and Aberdeen Street, then follow street signs on foot. Check the exact junction and gradient on site.' },
              { title: 'Work with the direction', text: 'When the system is running uphill, join low and leave near the middle for Tai Kwun; on a morning downhill visit, put Tai Kwun after the ride to avoid retracing steep streets.' },
              { title: 'Combine with nearby stops', text: 'Tai Kwun, PMQ and the Hollywood Road antiques area are within one walkable stretch, so plan them together rather than as separate return trips.' },
            ],
          },
          {
            heading: 'Architecture, culture and what to see',
            table: {
              caption: 'Planning categories only; confirm all programme details with the venue',
              columns: ['Aspect', 'Look for', 'Check first'],
              rows: [
                ['Heritage buildings', 'Former police and prison blocks, outdoor spaces', 'Which areas are open that day'],
                ['Exhibitions and events', 'Contemporary art and performances', 'Dates, entry and ticketing'],
                ['Dining', 'Restaurants and cafés within the compound', 'Hours and whether booking is needed'],
                ['Around it', 'SoHo, PMQ, Hollywood Road', 'Venue hours and street routes'],
              ],
            },
          },
          {
            heading: 'Visitor notes and photography',
            bullets: [
              { title: 'Check opening first', text: 'The compound, exhibitions and tenants keep different hours. Use Tai Kwun’s official visitor information rather than a third-party summary.' },
              { title: 'Follow venue rules', text: 'Indoor exhibitions, performances and some historic interiors may restrict photography, tripods or flash; follow on-site signs.' },
              { title: 'Mind slopes and crowds', text: 'The walk from the middle section crosses sloping Central streets. Surfaces get slippery in rain; plan gentler routes for children or anyone with limited mobility.' },
              { title: 'Settle the return', text: 'Decide how to get back to Central or Sheung Wan before you start. The escalators are not a guaranteed immediate reverse ride.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Do I need a ticket for Tai Kwun?',
            a: 'Public spaces and individual exhibitions have different entry arrangements, and no price or free-entry guarantee is given here. Check Tai Kwun’s official visitor information and the day’s programme pages.',
          },
          {
            q: 'How do I walk there from the escalators?',
            a: 'Leave at a middle-section connection around Hollywood Road and Aberdeen Street, then follow street signs. Confirm the exact junction and route on site or with a map tool.',
          },
          {
            q: 'What are Tai Kwun’s opening hours?',
            a: 'The compound, exhibitions and tenants each have their own arrangements, and this site has no live data. Use the official published hours.',
          },
          {
            q: 'Can I take photographs at Tai Kwun?',
            a: 'Outdoor public areas are generally photographable, but indoor exhibitions, performances and some historic interiors may have restrictions. Follow on-site signs and respect other visitors and staff.',
          },
        ],
        mapsQuery: 'Tai Kwun 10 Hollywood Road Central Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/pmq',
    group: 'nearby',
    title: { zh: 'PMQ 元創方', en: 'PMQ' },
    related: ['nearby/tai-kwun', 'shopping', 'itinerary/central-walking-tour', 'nearby/soho'],
    content: {
      zh: {
        meta: {
          title: 'PMQ 元創方｜由中環半山扶手電梯前往與參觀重點',
          description: 'PMQ 元創方由前荷李活道已婚警察宿舍活化為設計創意空間，整理其歷史背景、由扶梯中段前往的路線、小店與展覽、開放資訊與周邊串連建議。',
        },
        kicker: 'NEARBY · PMQ',
        h1: 'PMQ 元創方：宿舍建築裡的設計空間',
        lead: 'PMQ 位於鴨巴甸街一帶，由前荷李活道已婚警察宿舍活化而成，現為設計與創意工作室、小店及展覽空間。它與大館、SoHo 相鄰，適合由扶梯中段轉出後一併步行遊覽。',
        facts: [
          { label: '位置', value: '中環鴨巴甸街一帶' },
          { label: '性質', value: '歷史建築活化的設計創意空間' },
          { label: '由扶梯前往', value: '中段轉出，經荷李活道方向步行' },
          { label: '入場與開放', value: '以場方官方公布為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識 PMQ',
            paragraphs: [
              '建築前身為警察宿舍，活化後保留原有樓宇格局，改作設計工作室、創意零售與展覽用途。公共空間與各單位的開放安排並不一致，餐飲與小店亦各有自己的營業時間。',
              '本站不列具體店名、價格或管理單位名稱；想確認當日進駐單位、活動與交通資訊，請查 PMQ 官方網站的訪客與交通頁面。',
            ],
          },
          {
            heading: '由扶梯哪一段前往',
            bullets: [
              { title: '中段街道連接點', text: '由扶梯中段近荷李活道、士丹頓街一帶轉出，沿街道往鴨巴甸街方向步行；中環街道有坡度，實際路線以現場指示為準。' },
              { title: '與大館排成同一段', text: 'PMQ 與大館同屬中環舊城步行圈，先後次序可按當日扶梯方向決定，避免上下來回。' },
              { title: '回程', text: '若之後要回中環核心或港鐵站，可沿荷李活道、嘉咸街方向下行；需要無障礙路線者先查升降機與地面替代動線。' },
            ],
          },
          {
            heading: '建築、特色與順遊',
            table: {
              caption: '場所內容以場方當日公布為準；本表只作行程分類',
              columns: ['面向', '可以留意', '須查證'],
              rows: [
                ['歷史建築', '宿舍樓宇格局、走廊與公共空間', '哪些區域當日開放'],
                ['設計與零售', '創意小店、期間限定活動', '進駐單位與營業時間'],
                ['展覽', '設計與文化展覽', '展期與入場安排'],
                ['周邊', '大館、荷李活道、SoHo 餐飲', '各場所開放與街道動線'],
              ],
            },
          },
          {
            heading: '遊客須知與拍照建議',
            bullets: [
              { title: '先查開放與活動', text: '公共空間、展覽與各進駐單位時間不同；出發前看 PMQ 官方資訊，不要假設所有單位同時營業。' },
              { title: '拍攝先徵詢', text: '走廊與公共區域一般可拍，但店舖室內、商品與工作人員請先取得同意，避免使用三腳架阻塞通道。' },
              { title: '留意樓梯與坡度', text: '宿舍建築本身有樓層與樓梯，中環街道亦多斜路；推嬰兒車或輪椅者先確認升降機位置。' },
              { title: '購物與餐飲', text: '本站不推薦特定商戶、不列價格；若想安排購物與用餐，參考購物與餐飲專題的街區型規劃。' },
            ],
          },
        ],
        faqs: [
          {
            q: 'PMQ 需要門票嗎？',
            a: '本站不提供票價或免費入場保證。公共空間與個別展覽、活動的安排不同，請查 PMQ 官方公布。',
          },
          {
            q: '由扶梯去 PMQ 要走很遠嗎？',
            a: '本站沒有實測步程或分鐘數。PMQ 位於扶梯中段附近的舊城街區，步行會經過斜路；建議用地圖工具按當日路線估算。',
          },
          {
            q: 'PMQ 有什麼好看的？',
            a: '以活化宿舍建築、設計與創意單位、期間限定展覽為主；進駐單位與活動會變動，出發前看官方資訊較可靠。',
          },
          {
            q: 'PMQ 可以和大館同一天去嗎？',
            a: '適合。兩者同屬中環舊城步行圈，建議排在同一段路線，並按當日扶梯方向決定先後次序。',
          },
        ],
        mapsQuery: 'PMQ 35 Aberdeen Street Central Hong Kong',
      },
      en: {
        meta: {
          title: 'PMQ from the Mid-Levels Escalators | History, Shops & Walking Notes',
          description: 'PMQ is a design and creative venue in the former Hollywood Road married police quarters. How to reach it from the middle of the escalator route, what to see, opening information and nearby combinations.',
        },
        kicker: 'NEARBY · PMQ',
        h1: 'PMQ: design spaces in former police quarters',
        lead: 'PMQ sits around Aberdeen Street in the former Hollywood Road married police quarters, now home to design studios, creative retail and exhibitions. It neighbours Tai Kwun and SoHo, making it a natural stop after leaving the middle of the escalator route.',
        facts: [
          { label: 'Area', value: 'Aberdeen Street, Central' },
          { label: 'Type', value: 'Revitalised heritage design venue' },
          { label: 'From the escalators', value: 'Middle section, via Hollywood Road' },
          { label: 'Opening & entry', value: 'Check the venue’s official information' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About PMQ',
            paragraphs: [
              'The former police quarters were revitalised while retaining the original block layout, now used for design studios, creative retail and exhibitions. Public areas and individual units keep different hours, and each café or shop has its own schedule.',
              'No specific tenant names, prices or operator names are listed here. For current occupants, events and access information, use PMQ’s official visitor and access pages.',
            ],
          },
          {
            heading: 'Getting there from the escalators',
            bullets: [
              { title: 'Use a middle-section connection', text: 'Leave near Hollywood Road or Staunton Street and walk towards Aberdeen Street. Central streets are steep, so follow on-site signs for the exact route.' },
              { title: 'Pair it with Tai Kwun', text: 'PMQ and Tai Kwun share the same old-town walking area; order them according to the day’s escalator direction to avoid climbing up and back down.' },
              { title: 'Plan the return', text: 'To head back towards central Central or an MTR station, descend via Hollywood Road and Graham Street; anyone needing step-free access should check lifts and street-level routes first.' },
            ],
          },
          {
            heading: 'Architecture, highlights and nearby stops',
            table: {
              caption: 'Venue details are subject to the operator’s current information; planning categories only',
              columns: ['Aspect', 'Look for', 'Check first'],
              rows: [
                ['Heritage building', 'Quarters layout, corridors, public space', 'Which areas are open that day'],
                ['Design and retail', 'Creative shops, pop-up events', 'Current tenants and hours'],
                ['Exhibitions', 'Design and cultural shows', 'Dates and entry arrangements'],
                ['Around it', 'Tai Kwun, Hollywood Road, SoHo dining', 'Venue hours and street routes'],
              ],
            },
          },
          {
            heading: 'Visitor notes and photography',
            bullets: [
              { title: 'Check opening and events', text: 'Public areas, exhibitions and tenants keep different hours. Use PMQ’s official information rather than assuming everything is open at once.' },
              { title: 'Ask before shooting', text: 'Corridors and public areas are usually fine, but ask before photographing shop interiors, products or staff, and avoid blocking passages with tripods.' },
              { title: 'Mind stairs and gradients', text: 'The quarters have floors and stairs and surrounding streets are steep; pushchair and wheelchair users should confirm lift locations.' },
              { title: 'Shopping and dining', text: 'No specific businesses or prices are recommended here. See the shopping and food guides for planning by street and type.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is there an entry fee for PMQ?',
            a: 'No fee or free-entry guarantee is given here. Public areas, exhibitions and events may differ; check PMQ’s official information.',
          },
          {
            q: 'How far is PMQ from the escalators?',
            a: 'No measured distance or walking time is published here. PMQ is in the old-town streets near the middle section, and the walk includes slopes; use a map tool for a same-day estimate.',
          },
          {
            q: 'What is there to see at PMQ?',
            a: 'The revitalised quarters building, design and creative units, and temporary exhibitions. Tenants and events change, so official information is the reliable source.',
          },
          {
            q: 'Can I visit PMQ and Tai Kwun on the same day?',
            a: 'Yes. They share the same walkable old-town area; put them in one route and choose the order according to the escalator direction that day.',
          },
        ],
        mapsQuery: 'PMQ 35 Aberdeen Street Central Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/central-market',
    group: 'nearby',
    title: { zh: '中環街市', en: 'Central Market' },
    related: ['nearby/pottinger-street', 'shopping', 'itinerary/30-minutes', 'entrances'],
    content: {
      zh: {
        meta: {
          title: '中環街市｜扶梯下段的歷史街市建築與順遊路線',
          description: '由中環半山扶手電梯下段前往中環街市：歷史街市建築活化後的空間、餐飲與市集、與皇后大道中及天橋的連接，以及開放安排、拍照與購物須知。',
        },
        kicker: 'NEARBY · CENTRAL MARKET',
        h1: '中環街市：扶梯下段的起點地標',
        lead: '中環街市位於皇后大道中一帶，是經活化的歷史街市建築。旅發局描述扶梯起點時也提到與街市天橋的連接，因此它很適合作為下段行程的起點或終點；開放與商戶安排請以經營方公布為準。',
        facts: [
          { label: '位置', value: '中環皇后大道中一帶' },
          { label: '性質', value: '歷史街市建築活化的公共空間' },
          { label: '與扶梯關係', value: '下段天橋與街道連接' },
          { label: '開放與商戶', value: '以經營方官方公布為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識中環街市',
            paragraphs: [
              '這座街市建築經活化後保留原有空間輪廓，改作公共空間、餐飲與零售用途。它與扶梯下段的天橋連接，是遊客由中環核心街區走上扶梯前很容易辨認的參照點。',
              '本站不列具體檔戶名稱、價格或營業時間；這些會隨進駐單位變動，請查中環街市經營方的官方資訊。',
            ],
          },
          {
            heading: '由扶梯下段怎麼走',
            bullets: [
              { title: '先認街道', text: '由皇后大道中方向尋找街市與天橋連接位置，再按現場指示前往扶梯下段的街道接點；不要只用 Google Maps 的租庇利街標記代表整條路線。' },
              { title: '順遊次序', text: '可行做法是先逛街市、再由下段加入扶梯上行；上午下行時則反過來，把街市排在扶梯之後。' },
              { title: '雨天與室內停留', text: '街市是有室內空間的停留點，適合作為微雨時的替代行程；但天橋與街道接口仍會淋雨。' },
            ],
          },
          {
            heading: '建築、飲食與購物',
            table: {
              caption: '場所內容以經營方當日公布為準；本表只作規劃分類',
              columns: ['面向', '可以留意', '事先查證'],
              rows: [
                ['建築', '活化街市的空間輪廓與中庭', '哪些區域當日開放'],
                ['餐飲', '輕食、咖啡與其他餐飲單位', '營業時間與座位安排'],
                ['零售', '本地品牌與期間限定市集', '進駐單位與活動日期'],
                ['周邊', '石板街、嘉咸街、皇后大道中', '街道動線與路面情況'],
              ],
            },
          },
          {
            heading: '遊客須知與拍照建議',
            bullets: [
              { title: '先查營業', text: '建築公共空間與各商戶營業時間不同，出發前看經營方官方資訊，不要假設整座街市同一時間開放。' },
              { title: '拍攝與通道', text: '中庭與公共空間適合拍建築線條，但拍攝檔戶、商品與店員前先徵得同意，並避免阻塞通道與扶手電梯出入口。' },
              { title: '購物預算', text: '本站不推薦特定商戶、不列價格；購物街區比較可參考購物專題。' },
              { title: '接回扶梯', text: '離開街市後先確認當日方向燈，再決定是否加入扶梯；若方向相反，先把街市與附近街道逛完更省時。' },
            ],
          },
        ],
        faqs: [
          {
            q: '中環街市就是扶梯的入口嗎？',
            a: '不是唯一入口。旅發局提到扶梯與街市天橋的連接，但系統沿多條街道設有進出點；街市是便於辨認的下段參照點，實際入口請按現場指示。',
          },
          {
            q: '中環街市需要門票嗎？',
            a: '本站不提供票價或免費入場保證。公共空間與個別單位的安排不同，請查經營方官方資訊。',
          },
          {
            q: '中環街市幾點營業？',
            a: '建築與各進駐商戶時間各異，本站沒有即時資料，請以經營方公布為準。',
          },
          {
            q: '可以把街市和扶梯排在同一趟嗎？',
            a: '很適合。兩者都在下段步行範圍，按當日方向決定先逛街市還是先搭扶梯，再串連石板街或嘉咸街。',
          },
        ],
        mapsQuery: 'Central Market 93 Queen’s Road Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Central Market from the Mid-Levels Escalators | Lower-Section Stop',
          description: 'Central Market near the lower end of the escalators: the revitalised historic market building, its link with the footbridge, food and retail, opening information, plus photography and route notes.',
        },
        kicker: 'NEARBY · CENTRAL MARKET',
        h1: 'Central Market: a landmark at the lower end',
        lead: 'Central Market sits around Queen’s Road Central in a revitalised historic market building. The Tourism Board also mentions a footbridge link when describing the escalator start, which makes it a useful landmark for the lower section; check the operator’s information for hours and tenants.',
        facts: [
          { label: 'Area', value: "Queen's Road Central, Central" },
          { label: 'Type', value: 'Revitalised historic market building' },
          { label: 'Link to the route', value: 'Lower-section footbridge and streets' },
          { label: 'Hours & tenants', value: 'Check the operator’s information' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About Central Market',
            paragraphs: [
              'The revitalised building keeps the original spatial outline and now hosts public space, food and retail. Its footbridge link to the lower escalator section makes it an easy reference point before climbing from central Central.',
              'No stall names, prices or opening hours are listed here; they change with tenants. Use the Central Market operator’s official information.',
            ],
          },
          {
            heading: 'Reaching it from the lower section',
            bullets: [
              { title: 'Identify the street first', text: 'Look for the market and footbridge connection from Queen’s Road Central, then follow on-site signs to the lower-section street links. Do not treat the Jubilee Street map pin as the whole route.' },
              { title: 'Order the stops', text: 'Visit the market first and then join the uphill escalators, or reverse that order during the morning downhill period.' },
              { title: 'An indoor option in rain', text: 'The market works as an indoor stop in light rain, although the footbridge and street interfaces are still exposed.' },
            ],
          },
          {
            heading: 'Building, food and shopping',
            table: {
              caption: 'Venue details are subject to the operator’s current information; planning categories only',
              columns: ['Aspect', 'Look for', 'Check first'],
              rows: [
                ['Architecture', 'Market layout and atrium of the revitalised building', 'Which areas are open that day'],
                ['Food', 'Light meals, coffee and other units', 'Hours and seating arrangements'],
                ['Retail', 'Local brands and temporary markets', 'Tenants and event dates'],
                ['Around it', 'Pottinger Street, Graham Street, Queen’s Road Central', 'Street routes and surface conditions'],
              ],
            },
          },
          {
            heading: 'Visitor notes and photography',
            bullets: [
              { title: 'Check hours first', text: 'Public space and individual tenants keep different hours; use the operator’s information rather than assuming the whole building opens at once.' },
              { title: 'Shooting and clearways', text: 'The atrium suits architectural lines, but ask before photographing stalls, products or staff, and keep corridors and escalator landings clear.' },
              { title: 'Shopping budget', text: 'No specific businesses or prices are recommended here; see the shopping guide for a street-level comparison.' },
              { title: 'Rejoining the escalators', text: 'Check the direction signs before stepping back onto the route. If the direction does not fit, finish the market and nearby streets first.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is Central Market an entrance to the escalators?',
            a: 'Not the only one. The Tourism Board notes the footbridge link, but the system has street connections along its length. The market is a recognisable lower-section landmark; follow on-site signs for the actual entry point.',
          },
          {
            q: 'Is there an entry fee for Central Market?',
            a: 'No fee or free-entry guarantee is given here. Public space and individual units may differ; check the operator’s information.',
          },
          {
            q: 'What are Central Market’s hours?',
            a: 'The building and its tenants keep different hours, and this site has no live data. Use the operator’s published information.',
          },
          {
            q: 'Can I combine the market with the escalators in one outing?',
            a: 'Yes. Both are within the lower-section walking area; choose the order based on the day’s direction, then add Pottinger Street or Graham Street.',
          },
        ],
        mapsQuery: 'Central Market 93 Queen’s Road Central Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/man-mo-temple',
    group: 'nearby',
    title: { zh: '文武廟', en: 'Man Mo Temple' },
    related: ['nearby/pottinger-street', 'itinerary/central-walking-tour', 'nearby/pmq', 'photography'],
    content: {
      zh: {
        meta: {
          title: '文武廟｜由中環半山扶手電梯前往荷李活道古廟',
          description: '由扶梯中段前往文武廟的路線與參觀重點：供奉文昌與關帝的歷史廟宇、建築與參拜禮儀、開放與拍照須知，以及與荷李活道、樓梯街的順遊安排。',
        },
        kicker: 'NEARBY · MAN MO TEMPLE',
        h1: '文武廟：荷李活道上的歷史廟宇',
        lead: '文武廟位於荷李活道近樓梯街一帶，供奉文昌帝君與關聖帝君，是中環舊城重要的歷史廟宇。由扶梯中段轉出後步行可達，適合與石板街、古物店區排成同一段文化路線。',
        facts: [
          { label: '位置', value: '荷李活道近樓梯街一帶' },
          { label: '性質', value: '歷史廟宇、宗教場所' },
          { label: '由扶梯前往', value: '中段街道連接點轉出步行' },
          { label: '開放與禮儀', value: '以廟方現場公布為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識文武廟',
            paragraphs: [
              '「文武」指文昌與關帝，分別對應文運與武德，廟內的匾額、香爐與木構細節是理解本地傳統信仰與工藝的切入點。作為仍在使用中的宗教場所，參觀時應以不打擾參拜者為先。',
              '廟宇的建成年代、法定古蹟資格與詳細修缮記錄，請以古物古蹟辦事處及廟方資料為準；本站不憑印象補寫具體年份。',
            ],
          },
          {
            heading: '由扶梯中段前往',
            bullets: [
              { title: '選荷李活道方向的連接點', text: '由扶梯中段轉出後沿街道往荷李活道、樓梯街方向步行；街道有坡度與樓梯，實際動線以現場指示為準。' },
              { title: '與古物店區串連', text: '荷李活道沿線有古董與設計店舖，可與文武廟排成一小段步行，不必來回折返。' },
              { title: '回程', text: '往上環方向可繼續沿荷李活道步行；要回中環核心，則沿斜路下行，並先確認回程交通。' },
            ],
          },
          {
            heading: '建築、人文與參觀重點',
            table: {
              caption: '廟宇安排以現場與廟方公布為準；本表只作參觀分類',
              columns: ['面向', '可以留意', '須注意'],
              rows: [
                ['信仰', '文昌與關帝、參拜秩序', '不打擾參拜者，不阻礙香爐與通道'],
                ['建築', '匾額、木構與香爐等細節', '部分位置可能限制拍攝'],
                ['街區', '荷李活道古物店、樓梯街', '樓梯與坡度對推車不友善'],
                ['順遊', 'PMQ、大館、石板街', '各場所開放與街道動線'],
              ],
            },
          },
          {
            heading: '遊客須知與拍照建議',
            bullets: [
              { title: '先查開放', text: '廟宇開放時間與特別安排由廟方決定，本站沒有即時資料；出發前查看現場或官方公布。' },
              { title: '衣著與舉止', text: '保持安靜、避免大聲交談，不要在參拜動線中央停留拍照或架設器材。' },
              { title: '拍攝分寸', text: '拍攝室內神像、香火與參拜者前先確認是否允許，並尊重現場指示。' },
              { title: '無障礙考量', text: '樓梯街一帶顧名思義有樓梯，輪椅與嬰兒車不宜假設可直接通行；先規劃地面替代路線。' },
            ],
          },
        ],
        faqs: [
          {
            q: '文武廟需要門票嗎？',
            a: '本站不提供票價或免費入場保證；廟宇的入場與捐獻安排請以廟方現場公布為準。',
          },
          {
            q: '文武廟供奉的是誰？',
            a: '主要供奉文昌帝君與關聖帝君，對應文運與武德；更詳細的歷史與文物解讀，建議參考古物古蹟辦事處及廟方資料。',
          },
          {
            q: '從扶梯去文武廟方便嗎？',
            a: '由中段轉出後沿荷李活道方向步行可達，但沿途有坡度與樓梯；需要無障礙路線者請先查地面替代動線。',
          },
          {
            q: '廟內可以拍照嗎？',
            a: '請先看現場指示。即使允許，也應避免拍攝參拜者特寫、使用閃光燈或阻礙香爐與通道。',
          },
        ],
        mapsQuery: 'Man Mo Temple Hollywood Road Sheung Wan Hong Kong',
      },
      en: {
        meta: {
          title: 'Man Mo Temple from the Mid-Levels Escalators | Hollywood Road Visit',
          description: 'How to reach Man Mo Temple from the middle of the escalator route: the historic temple dedicated to Man and Mo, its architecture and etiquette, opening and photography notes, and a Hollywood Road walking combination.',
        },
        kicker: 'NEARBY · MAN MO TEMPLE',
        h1: 'Man Mo Temple: a historic temple on Hollywood Road',
        lead: 'Man Mo Temple stands near Hollywood Road and Ladder Street, dedicated to the gods of literature and war. It is walkable from the middle of the escalator route and pairs well with Pottinger Street and Hollywood Road’s antiques district.',
        facts: [
          { label: 'Area', value: 'Hollywood Road near Ladder Street' },
          { label: 'Type', value: 'Historic temple, active place of worship' },
          { label: 'From the escalators', value: 'Leave at a middle-section connection' },
          { label: 'Hours & etiquette', value: 'Follow the temple’s on-site information' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About Man Mo Temple',
            paragraphs: [
              '“Man” and “Mo” refer to the gods of literature and war. Plaques, incense burners and timber details offer a way into local religious practice and craftsmanship. As an active place of worship, visitors should put worshippers first.',
              'For construction dates, heritage status and restoration records, consult the Antiquities and Monuments Office and the temple itself; no specific year is filled in here from memory.',
            ],
          },
          {
            heading: 'Getting there from the middle section',
            bullets: [
              { title: 'Head towards Hollywood Road', text: 'Leave via a middle-section connection and walk towards Hollywood Road and Ladder Street. Streets are steep and stepped; follow on-site signs for the actual route.' },
              { title: 'Combine with the antiques area', text: 'Antiques and design shops line Hollywood Road, so place the temple in the same short walk rather than making a separate return trip.' },
              { title: 'Plan the way back', text: 'Continue along Hollywood Road towards Sheung Wan, or descend towards central Central after checking your return transport.' },
            ],
          },
          {
            heading: 'Architecture, culture and what to notice',
            table: {
              caption: 'Arrangements follow on-site and temple information; planning categories only',
              columns: ['Aspect', 'Look for', 'Be careful'],
              rows: [
                ['Worship', 'Man and Mo deities, the order of worship', 'Do not disturb worshippers or block incense burners'],
                ['Architecture', 'Plaques, timber details, incense burners', 'Some areas may restrict photography'],
                ['Neighbourhood', 'Hollywood Road antiques, Ladder Street', 'Steps and slopes are awkward for pushchairs'],
                ['Nearby', 'PMQ, Tai Kwun, Pottinger Street', 'Venue hours and street routes'],
              ],
            },
          },
          {
            heading: 'Visitor notes and photography',
            bullets: [
              { title: 'Check opening first', text: 'Opening hours and special arrangements are set by the temple; this site has no live data. Check on-site or official information before going.' },
              { title: 'Dress and conduct', text: 'Keep quiet, avoid loud conversation, and do not stop in the middle of a worship route or set up equipment there.' },
              { title: 'Photography discretion', text: 'Confirm whether interior statues, incense and worshippers may be photographed, and follow on-site signs.' },
              { title: 'Access considerations', text: 'Ladder Street includes steps, as the name suggests. Wheelchair and pushchair users should not assume direct access; plan a street-level alternative.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is there an entrance fee for Man Mo Temple?',
            a: 'No fee or free-entry guarantee is given here; entry and donation arrangements are set by the temple on site.',
          },
          {
            q: 'Who is worshipped at Man Mo Temple?',
            a: 'It is principally dedicated to the gods of literature (Man) and war (Mo). For detailed historical and heritage interpretation, consult the Antiquities and Monuments Office and the temple.',
          },
          {
            q: 'Is it easy to walk there from the escalators?',
            a: 'It is reachable on foot from a middle-section connection via Hollywood Road, but there are slopes and steps. Anyone needing step-free access should plan a street-level alternative.',
          },
          {
            q: 'Can I take photos inside?',
            a: 'Check on-site signs first. Even where allowed, avoid close-ups of worshippers, flash, and blocking incense burners or passages.',
          },
        ],
        mapsQuery: 'Man Mo Temple Hollywood Road Sheung Wan Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/pottinger-street',
    group: 'nearby',
    title: { zh: '石板街', en: 'Pottinger Street' },
    related: ['nearby/central-market', 'nearby/graham-street', 'photography', 'itinerary/central-walking-tour'],
    content: {
      zh: {
        meta: {
          title: '石板街砵典乍街｜中環半山扶手電梯附近的石板斜路',
          description: '整理中環石板街（砵典乍街）的石板路面特色、連接皇后大道中與荷李活道的位置、拍照角度與步行難度，以及如何由扶梯下段順遊前往。',
        },
        kicker: 'NEARBY · POTTINGER STREET',
        h1: '石板街：一條看得出坡度的老街',
        lead: '砵典乍街以石板鋪成的斜路聞名，連接中環皇后大道中與荷李活道一帶。它靠近扶梯下段，是很受歡迎的街景拍攝點；但石板與坡度也讓它成為輪椅與嬰兒車較難處理的一段路。',
        facts: [
          { label: '位置', value: '中環 · 砵典乍街' },
          { label: '特色', value: '石板舖面與明顯坡度' },
          { label: '連接', value: '皇后大道中 ↔ 荷李活道一帶' },
          { label: '由扶梯前往', value: '下段街道連接點轉出' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識石板街',
            paragraphs: [
              '石板路面是這條街最易辨認的特徵，也直接說明中環的地勢：由皇后大道中往荷李活道方向是上坡，兩側多是老舖與攤檔。街道仍供行人與車輛使用，不是封閉的景區。',
              '街道名稱、歷史沿革與保育狀況請以政府及相關文物資料為準；本站不補寫未核對的年份或軼事。',
            ],
          },
          {
            heading: '由扶梯下段順遊',
            bullets: [
              { title: '先到下段', text: '由扶梯下段近皇后大道中、中環街市一帶的連接點轉出，按街道指示步行至砵典乍街；實際街口與人流量以當日為準。' },
              { title: '與街市排在一起', text: '中環街市、石板街與嘉咸街都屬下段周邊街區，適合排成一小段步行，不必重複上下坡。' },
              { title: '方向配合', text: '若當日為上行，可先逛石板街再由下段加入扶梯；上午下行時，把石板街接在扶梯之後較順。' },
            ],
          },
          {
            heading: '拍照與步行提示',
            table: {
              caption: '一般性街區建議；路面與攤檔狀態以當日現場為準',
              columns: ['項目', '可以留意', '要注意'],
              rows: [
                ['構圖', '石板紋理、斜坡透視、兩側老舖', '留意車輛與其他行人'],
                ['光線', '日間較易呈現石板質感', '雨後反光與濕滑'],
                ['步行', '沿街慢行、靠邊停留', '坡度與高低不平的石面'],
                ['無障礙', '需要時改用較平緩的平行街道', '不把樓梯與石板路當通用通道'],
              ],
            },
          },
          {
            heading: '遊客須知',
            bullets: [
              { title: '穿好走的鞋', text: '石板路面不平整，雨天尤其濕滑；不要為了取景在斜坡中央倒退。' },
              { title: '尊重攤檔與商戶', text: '拍攝檔口、商品與店員前先徵得同意，避免長時間佔用狹窄行人路。' },
              { title: '不阻塞通道', text: '街道仍在通行，拍照後盡快移到路邊，讓行人與車輛通過。' },
              { title: '附近的替代路線', text: '推嬰兒車或輪椅者可選較平緩的平行街道前往荷李活道方向，並先查升降機與地面動線。' },
            ],
          },
        ],
        faqs: [
          {
            q: '石板街在哪裡？',
            a: '位於中環砵典乍街，連接皇后大道中與荷李活道一帶，以石板舖面與坡度聞名，靠近扶梯下段周邊街區。',
          },
          {
            q: '從扶梯去石板街要走多久？',
            a: '本站沒有實測步程或分鐘數。兩者同屬下段周邊街區，但街道有坡度；建議用地圖工具按當日路線估算。',
          },
          {
            q: '石板街適合推嬰兒車或輪椅嗎？',
            a: '不應假設適合。石板不平整且有坡度，建議改用較平緩的平行街道，並先確認升降機與地面替代動線。',
          },
          {
            q: '下雨天可以拍石板街嗎？',
            a: '雨後石板反光有畫面感，但路面濕滑且容易反光過曝；以安全為先，避免在斜坡中央停留或倒退取景。',
          },
        ],
        mapsQuery: 'Pottinger Street Stone Slabs Street Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Pottinger Street Stone Slabs | Near the Mid-Levels Escalators',
          description: 'Central’s stone-paved Pottinger Street: its steep slab surface between Queen’s Road Central and Hollywood Road, photo angles, walking difficulty, and how to combine it with the lower escalator section.',
        },
        kicker: 'NEARBY · POTTINGER STREET',
        h1: 'Pottinger Street: a slope you can see',
        lead: 'Pottinger Street is known for its stone-slab paving, connecting the Queen’s Road Central and Hollywood Road areas. It sits near the lower escalator section and is a popular street-photography subject, but the slabs and gradient make it awkward for wheelchairs and pushchairs.',
        facts: [
          { label: 'Area', value: 'Pottinger Street, Central' },
          { label: 'Feature', value: 'Stone-slab paving and a steep gradient' },
          { label: 'Connects', value: "Queen's Road Central ↔ Hollywood Road" },
          { label: 'From the escalators', value: 'Lower-section street connection' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About the street',
            paragraphs: [
              'The stone slabs are its most recognisable feature and make Central’s terrain visible: the walk from Queen’s Road Central towards Hollywood Road is uphill, with older shops and stalls alongside. It remains a working street for pedestrians and vehicles, not a closed attraction.',
              'For the street’s naming, history and conservation status, consult government and heritage sources; no unverified dates or anecdotes are added here.',
            ],
          },
          {
            heading: 'Combining it with the lower section',
            bullets: [
              { title: 'Start at the lower section', text: 'Leave via a lower-section connection near Queen’s Road Central and Central Market, then follow street signs to Pottinger Street. Check the junction and crowds on the day.' },
              { title: 'Group nearby stops', text: 'Central Market, Pottinger Street and Graham Street are all in the same lower-section neighbourhood, so put them in one short walk instead of climbing up and down repeatedly.' },
              { title: 'Match the direction', text: 'On an uphill day, visit the street first and then join the escalators; on a morning downhill visit, put it after the ride.' },
            ],
          },
          {
            heading: 'Photography and walking notes',
            table: {
              caption: 'General neighbourhood advice; paving and stall conditions vary by day',
              columns: ['Item', 'Look for', 'Watch for'],
              rows: [
                ['Composition', 'Slab texture, sloping perspective, older shopfronts', 'Vehicles and other pedestrians'],
                ['Light', 'Daylight shows the stone texture best', 'Reflections and slippery surfaces after rain'],
                ['Walking', 'Walk slowly and step aside to stop', 'The gradient and uneven slabs'],
                ['Step-free', 'Use a gentler parallel street if needed', 'Do not treat steps and slabs as a universal route'],
              ],
            },
          },
          {
            heading: 'Visitor notes',
            bullets: [
              { title: 'Wear grippy shoes', text: 'The slabs are uneven and get slippery in rain; do not step backwards into the middle of the slope for a shot.' },
              { title: 'Respect stalls and shops', text: 'Ask before photographing stalls, products or staff, and avoid occupying the narrow pavement for long.' },
              { title: 'Keep the street clear', text: 'This is still a through route; move to the side after a photo so pedestrians and vehicles can pass.' },
              { title: 'Alternative routes', text: 'Pushchair and wheelchair users can choose a gentler parallel street towards Hollywood Road after checking lifts and street-level links.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Where is Pottinger Street?',
            a: 'It is in Central, connecting the Queen’s Road Central and Hollywood Road areas, known for stone-slab paving and a gradient, close to the lower escalator neighbourhood.',
          },
          {
            q: 'How long is the walk from the escalators?',
            a: 'No measured time is published here. They are in the same lower-section neighbourhood, but the streets slope; use a map tool for a same-day estimate.',
          },
          {
            q: 'Is Pottinger Street suitable for pushchairs or wheelchairs?',
            a: 'Do not assume so. The slabs are uneven and the street is steep; use a gentler parallel street and confirm lifts and street-level links first.',
          },
          {
            q: 'Is it worth photographing in the rain?',
            a: 'Wet slabs can look striking, but they are slippery and reflections are hard to expose. Put safety first and avoid stopping or reversing in the middle of the slope.',
          },
        ],
        mapsQuery: 'Pottinger Street Stone Slabs Street Central Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/graham-street',
    group: 'nearby',
    title: { zh: '嘉咸街', en: 'Graham Street' },
    related: ['nearby/pottinger-street', 'food/cha-chaan-teng', 'photography', 'route-map'],
    content: {
      zh: {
        meta: {
          title: '嘉咸街｜中環半山扶手電梯沿途的老街市街景',
          description: '嘉咸街位於扶梯中段周邊，整理老街市與街檔文化、街頭攝影題材、與扶梯街道連接點的關係，以及用餐與購物順遊的規劃方式，不列未核實店名與價格。',
        },
        kicker: 'NEARBY · GRAHAM STREET',
        h1: '嘉咸街：扶梯旁邊的街市日常',
        lead: '嘉咸街一帶是維持街市與街檔型態的中環老街，緊貼扶梯中段。它適合被放進「搭一段、走出來逛一段」的行程：看街景、找茶餐廳，或作為步行攝影的一段路。',
        facts: [
          { label: '位置', value: '中環 · 嘉咸街一帶' },
          { label: '性質', value: '老街市與街檔街區' },
          { label: '與扶梯關係', value: '中段街道連接點鄰近' },
          { label: '商戶與價格', value: '不列未核實資料，以現場為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識這條街',
            paragraphs: [
              '與經活化、以室內空間為主的中環街市不同，嘉咸街一帶仍保留露天街市與日常買賣的節奏。街檔、老舖與斜坡構成很生活化的畫面，也是理解扶梯為何要沿既有街道分段鋪設的具體例子。',
              '本站不列具體檔戶名稱、營業時間、價格或所屬管理單位；街檔組合與街道安排會變動，請以當日現場與官方街市資料為準。',
            ],
          },
          {
            heading: '由扶梯中段怎麼串',
            bullets: [
              { title: '中段轉出', text: '由扶梯中段近嘉咸街、荷李活道方向的街道連接點離開，沿街道慢行；實際街口與攤檔位置以現場為準。' },
              { title: '與餐飲主題連在一起', text: '這一帶適合安排茶餐廳或輕食停留，但本站不推薦特定店家；類型與點餐考量見茶餐廳專題。' },
              { title: '接到下段', text: '沿街道往下可回到皇后大道中、中環街市與石板街方向，形成一條完整的下坡步行線。' },
            ],
          },
          {
            heading: '街頭攝影與街區觀察',
            table: {
              caption: '拍攝與購物安排以當日現場為準；本表只作題材分類',
              columns: ['題材', '可以留意', '須注意'],
              rows: [
                ['街市日常', '檔口陳列、街道坡度與行人', '拍攝檔主與商品前先徵得同意'],
                ['新舊並置', '老舖立面與現代樓宇', '避免長時間佔用狹窄行人路'],
                ['街頭色彩', '牆面與店面視覺', '不把未核實作品名稱寫成導覽資料'],
                ['飲食', '茶餐廳與街頭小食類型', '營業時間與價格向店家確認'],
              ],
            },
          },
          {
            heading: '遊客須知',
            bullets: [
              { title: '保持通道暢通', text: '街檔與行人路狹窄，拍照或查看地圖時靠邊站，不要擋住買賣動線。' },
              { title: '衛生與濕滑', text: '街市路面可能濕滑或有積水，穿防滑鞋並留意隨身物品。' },
              { title: '不代為推薦', text: '本站不列店名、菜單、價格或「必吃」清單，避免過時資訊；請向店家直接確認。' },
              { title: '配合扶梯方向', text: '先確認當日方向燈，再決定由中段轉出逛街，還是逛完後回到扶梯繼續上行。' },
            ],
          },
        ],
        faqs: [
          {
            q: '嘉咸街離扶梯遠嗎？',
            a: '嘉咸街一帶鄰近扶梯中段的街道連接點，但本站沒有實測步程或分鐘數；請按當日路線與街道指示確認。',
          },
          {
            q: '嘉咸街有什麼必吃的店？',
            a: '本站不推薦特定店家、不列價格或營業時間，以免資訊過時。街區以茶餐廳與街檔類型為主，請到現場確認。',
          },
          {
            q: '可以在嘉咸街拍照嗎？',
            a: '公共街道一般可拍，但拍攝檔主、商品與店員前先徵得同意，並避免阻塞狹窄行人路與買賣動線。',
          },
          {
            q: '嘉咸街和中環街市是同一個地方嗎？',
            a: '不是。中環街市是經活化的歷史建築，嘉咸街一帶則是仍保留露天街市型態的街道；兩者都在扶梯周邊，適合串連但性質不同。',
          },
        ],
        mapsQuery: 'Graham Street Market Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Graham Street | Old Market Streets Beside the Mid-Levels Escalators',
          description: 'Graham Street’s open-air market character near the middle of the escalator route: street photography subjects, how to link it with the escalator connections, and food and shopping planning without unverified venue names.',
        },
        kicker: 'NEARBY · GRAHAM STREET',
        h1: 'Graham Street: everyday market life beside the route',
        lead: 'The Graham Street area keeps an open-air market and stall rhythm in Central, right by the middle of the escalator route. It fits a ride–step out–explore plan: street scenes, a cha chaan teng stop, or a short photography walk.',
        facts: [
          { label: 'Area', value: 'Graham Street, Central' },
          { label: 'Character', value: 'Old market and street-stall neighbourhood' },
          { label: 'Link to the route', value: 'Near middle-section street connections' },
          { label: 'Businesses & prices', value: 'No unverified listings; check on site' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About the street',
            paragraphs: [
              'Unlike the revitalised, largely indoor Central Market, the Graham Street area retains the pace of open-air stalls and everyday shopping. Stalls, older shops and the gradient make a vivid illustration of why the escalators had to be built in sections along existing streets.',
              'No stall names, hours, prices or managing body are listed here; the mix changes. Use on-site information and official market material.',
            ],
          },
          {
            heading: 'Linking it with the middle section',
            bullets: [
              { title: 'Leave at the middle', text: 'Exit via a middle-section connection towards Graham Street and Hollywood Road and walk slowly along the street. Check the junction and stall positions on the day.' },
              { title: 'Pair it with a food theme', text: 'The area suits a cha chaan teng or light meal, but no specific business is recommended here; see the cha chaan teng guide for types and ordering considerations.' },
              { title: 'Continue downhill', text: 'Follow the streets down towards Queen’s Road Central, Central Market and Pottinger Street for one continuous descending walk.' },
            ],
          },
          {
            heading: 'Street photography and observation',
            table: {
              caption: 'Photography and shopping arrangements depend on the day; subject categories only',
              columns: ['Subject', 'Look for', 'Be careful'],
              rows: [
                ['Market life', 'Stall displays, the gradient, pedestrians', 'Ask before photographing vendors and goods'],
                ['Old and new', 'Older shopfronts beside modern towers', 'Do not occupy narrow pavements for long'],
                ['Street colour', 'Walls and shopfront visuals', 'Do not present unverified artwork names as guide data'],
                ['Food', 'Cha chaan tengs and street-snack types', 'Confirm hours and prices with the business'],
              ],
            },
          },
          {
            heading: 'Visitor notes',
            bullets: [
              { title: 'Keep the route clear', text: 'Stalls and pavements are narrow. Step aside before taking photos or checking a map, and do not block buying and selling.' },
              { title: 'Wet surfaces', text: 'Market pavements can be slippery or wet; wear grippy shoes and keep belongings close.' },
              { title: 'No named recommendations', text: 'No business names, menus, prices or “must-eat” lists are given here to avoid stale information; confirm directly with businesses.' },
              { title: 'Match the escalator direction', text: 'Check the direction signs first, then decide whether to explore the street mid-route or rejoin the system afterwards.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is Graham Street far from the escalators?',
            a: 'It is near middle-section street connections, but no measured distance or walking time is published here; confirm with on-site signs and your route that day.',
          },
          {
            q: 'Which restaurants should I try on Graham Street?',
            a: 'No specific businesses, prices or hours are recommended here to avoid stale information. The area is known for cha chaan teng and stall types; check on site.',
          },
          {
            q: 'Can I photograph Graham Street?',
            a: 'Public streets are generally photographable, but ask before shooting vendors, goods or staff, and keep narrow pavements and trading routes clear.',
          },
          {
            q: 'Is Graham Street the same as Central Market?',
            a: 'No. Central Market is a revitalised historic building, while Graham Street retains an open-air market character. Both are near the route and combine well, but they are different places.',
          },
        ],
        mapsQuery: 'Graham Street Market Central Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/soho',
    group: 'nearby',
    title: { zh: 'SoHo 蘇豪區', en: 'SoHo' },
    related: ['food/soho-restaurants', 'nearby/lan-kwai-fong', 'exits', 'itinerary/soho-evening'],
    content: {
      zh: {
        meta: {
          title: 'SoHo 蘇豪區｜中環半山扶手電梯沿線餐飲街區',
          description: '整理 SoHo 蘇豪區與扶梯中段的關係、士丹頓街與伊利近街一帶的街道特色、日間與夜間體驗差異，以及由扶梯離開、用餐與返回中環的規劃重點。',
        },
        kicker: 'NEARBY · SOHO',
        h1: 'SoHo：扶梯旁最有名的餐飲街區',
        lead: 'SoHo 指荷李活道以南一帶的斜坡街區，士丹頓街、伊利近街等街道聚集餐廳與酒吧，正好貼著扶梯中段。對遊客來說，它既是「下一站去哪裡」的答案，也是決定在哪一段離開扶梯的依據。',
        facts: [
          { label: '位置', value: '荷李活道以南、扶梯中段周邊' },
          { label: '常見街道', value: '士丹頓街、伊利近街一帶' },
          { label: '特色', value: '斜坡街道、多國餐飲與酒吧' },
          { label: '商戶安排', value: '營業時間與訂位以店家為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識 SoHo',
            paragraphs: [
              '名稱源自「荷李活道以南」（South of Hollywood Road），與倫敦或紐約的同名區並無關係。這裡的吸引力在於斜坡街道與密集餐飲：街道窄、坡度明顯，白天與夜晚的氣氛差別很大。',
              '本站不列具體餐廳名稱、菜單、價格、營業時間或訂位規則；這些變動頻繁，出發前請向店家或官方地圖資料查證。',
            ],
          },
          {
            heading: '由扶梯哪一段離開',
            bullets: [
              { title: '中段連接點', text: '若行程包含 SoHo，應在扶梯中段近士丹頓街、伊利近街一帶的街道連接點轉出，而不是一路搭到干德道再回頭。' },
              { title: '方向配合', text: '日間上行時可由下段加入、在 SoHo 離開；上午下行時則可先在街區用餐，再排入扶梯行程。' },
              { title: '回程先定', text: '用完餐後要回中環，記得扶梯按時段單向，不能假設可即時反向乘搭；先決定步行下坡或路面交通。' },
            ],
          },
          {
            heading: '日間與夜間的差別',
            table: {
              caption: '一般性街區觀察，非營業或人流保證',
              columns: ['時段', '街區狀態', '適合安排', '要注意'],
              rows: [
                ['日間', '街道較易辨認，適合步行與看建築', '午餐、咖啡、串連大館與 PMQ', '斜坡與日曬'],
                ['傍晚', '餐飲氣氛逐漸轉變', '晚餐前散步、決定在哪一段用餐', '熱門時段訂位安排'],
                ['夜間', '酒吧與夜生活型態較明顯', '晚餐後散步與夜景', '回程交通與噪音'],
                ['雨天', '街道接口露天', '縮短步行、選室內停留', '濕滑路面與撐傘動線'],
              ],
            },
          },
          {
            heading: '遊客須知',
            bullets: [
              { title: '斜坡與樓梯', text: '街區坡度明顯，攜童、長者或輪椅使用者應先規劃較平緩的街道與升降機路線。' },
              { title: '尊重住宅與商戶', text: '部分街道緊鄰住宅，夜間請降低聲量；拍攝店舖室內與店員前先徵得同意。' },
              { title: '不推薦特定店家', text: '本站按街道與類型規劃，不列「必吃」清單、價格或評價；類型比較見 SoHo 餐廳攻略。' },
              { title: '與蘭桂坊分開看', text: 'SoHo 與蘭桂坊相鄰但氣氛不同，若想安排夜間行程，可參考各自的專題再決定次序。' },
            ],
          },
        ],
        faqs: [
          {
            q: 'SoHo 在哪裡？',
            a: '指中環荷李活道以南、斜坡街道一帶，士丹頓街與伊利近街等是常見的餐飲街道，緊貼扶梯中段。',
          },
          {
            q: 'SoHo 和倫敦、紐約的 Soho 有關嗎？',
            a: '沒有。香港的用法通常解作「South of Hollywood Road」，是本地街區稱呼，與其他城市的同名區不同。',
          },
          {
            q: '去 SoHo 應該在哪一段下扶梯？',
            a: '中段近士丹頓街、伊利近街一帶的街道連接點較合適；一路搭到上段再回頭會多走斜路。',
          },
          {
            q: '晚上從 SoHo 怎麼回中環？',
            a: '不要假設可以即時反向乘搭扶梯。先決定沿街道步行下坡或使用路面交通，並在用餐前確認夜間交通安排。',
          },
        ],
        mapsQuery: 'SoHo Staunton Street Elgin Street Central Hong Kong',
      },
      en: {
        meta: {
          title: 'SoHo Hong Kong | Dining Streets Along the Mid-Levels Escalators',
          description: 'How SoHo relates to the middle of the escalator route: Staunton and Elgin Street, daytime versus evening character, which section to leave at, and how to plan dining and the return to Central.',
        },
        kicker: 'NEARBY · SOHO',
        h1: 'SoHo: the dining streets beside the route',
        lead: 'SoHo is the sloping area south of Hollywood Road, with restaurants and bars concentrated around Staunton and Elgin Street, right beside the middle of the escalator route. It answers both “where next?” and “which section should I leave at?”.',
        facts: [
          { label: 'Area', value: 'South of Hollywood Road, middle section' },
          { label: 'Typical streets', value: 'Staunton Street, Elgin Street' },
          { label: 'Character', value: 'Sloping streets, international dining, bars' },
          { label: 'Business hours', value: 'Confirm with each business' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About SoHo',
            paragraphs: [
              'The name is usually read as “South of Hollywood Road” and has nothing to do with London or New York districts. Its appeal comes from narrow, steep streets and dense dining; the atmosphere differs sharply between day and night.',
              'No restaurant names, menus, prices, hours or booking rules are listed here; they change often. Check with businesses or official map listings before you go.',
            ],
          },
          {
            heading: 'Which section to leave at',
            bullets: [
              { title: 'Middle-section connections', text: 'If SoHo is on your plan, leave at a middle-section connection near Staunton or Elgin Street instead of riding to Conduit Road and walking back.' },
              { title: 'Match the direction', text: 'On an uphill day, join low and leave at SoHo; during the morning downhill period, eat in the neighbourhood first and put the ride later.' },
              { title: 'Settle the return', text: 'After a meal the escalators are not a guaranteed immediate reverse ride. Decide between walking downhill and surface transport first.' },
            ],
          },
          {
            heading: 'Daytime versus evening',
            table: {
              caption: 'General neighbourhood observations; no business-hours or crowd guarantee',
              columns: ['Time', 'Street character', 'Good for', 'Watch for'],
              rows: [
                ['Daytime', 'Streets are easier to read, good for walking and buildings', 'Lunch, coffee, combining Tai Kwun and PMQ', 'Gradients and sun'],
                ['Dusk', 'Dining atmosphere building', 'A pre-dinner walk, choosing where to eat', 'Booking at popular times'],
                ['Night', 'Bars and nightlife more prominent', 'An after-dinner walk and lighting', 'Return transport and noise'],
                ['Rain', 'Street interfaces are exposed', 'Shorter walks with indoor stops', 'Wet surfaces and umbrellas'],
              ],
            },
          },
          {
            heading: 'Visitor notes',
            bullets: [
              { title: 'Slopes and steps', text: 'The area is steep. Families, older visitors and wheelchair users should plan gentler streets and lift routes in advance.' },
              { title: 'Respect residents and businesses', text: 'Some streets sit close to homes; keep noise down at night and ask before photographing interiors or staff.' },
              { title: 'No named recommendations', text: 'This guide plans by street and type, with no “must-eat” list, prices or ratings. See the SoHo restaurants guide for a type-based comparison.' },
              { title: 'SoHo and Lan Kwai Fong are different', text: 'They are adjacent but have distinct characters; read both guides before ordering an evening itinerary.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Where is SoHo in Hong Kong?',
            a: 'It is the sloping area south of Hollywood Road in Central, with Staunton and Elgin Street among its dining streets, right beside the middle of the escalator route.',
          },
          {
            q: 'Is Hong Kong SoHo related to London or New York Soho?',
            a: 'No. The local usage is generally read as “South of Hollywood Road”, a neighbourhood label distinct from other cities’ districts.',
          },
          {
            q: 'Where should I get off the escalators for SoHo?',
            a: 'A middle-section connection near Staunton or Elgin Street is the sensible choice; riding to the upper end and coming back adds unnecessary climbing.',
          },
          {
            q: 'How do I get back to Central at night from SoHo?',
            a: 'Do not assume an immediate reverse escalator ride. Decide between walking downhill and surface transport, and confirm night transport before the meal.',
          },
        ],
        mapsQuery: 'SoHo Staunton Street Elgin Street Central Hong Kong',
      },
    },
  },
  {
    slug: 'nearby/lan-kwai-fong',
    group: 'nearby',
    title: { zh: '蘭桂坊', en: 'Lan Kwai Fong' },
    related: ['food/bars-nightlife', 'nearby/soho', 'itinerary/soho-evening', 'return-to-central'],
    content: {
      zh: {
        meta: {
          title: '蘭桂坊｜中環半山扶手電梯附近的夜生活街區',
          description: '整理蘭桂坊與扶梯下段的相對位置、夜間餐飲與娛樂街區特性、由扶梯前往與返回中環的路線考量，以及安全、噪音與商戶營業資訊的查證方式。',
        },
        kicker: 'NEARBY · LAN KWAI FONG',
        h1: '蘭桂坊：夜間行程的最後一站',
        lead: '蘭桂坊是香港中環知名的餐飲與娛樂街區，距離扶梯下段一帶不遠。它適合排在傍晚或夜間行程的尾段，但由於扶梯按時段單向，回程與商戶營業安排都需要事先確認。',
        facts: [
          { label: '位置', value: '中環 · 蘭桂坊一帶' },
          { label: '性質', value: '餐飲與娛樂街區' },
          { label: '由扶梯前往', value: '下段街道連接點轉出步行' },
          { label: '營業與活動', value: '以店家與場方公布為準' },
          { label: '資料整理', value: '2026-11-09 · 非即時狀態' },
        ],
        sections: [
          {
            heading: '認識蘭桂坊',
            paragraphs: [
              '蘭桂坊以密集的餐廳、酒吧與夜間人流聞名，與 SoHo 相鄰但節奏不同：前者偏向夜生活聚集，後者則是沿扶梯中段分布的斜坡餐飲街區。兩者常被排在同一晚，但值得分開規劃停留點。',
              '本站不列具體店名、價格、營業時間、活動日期或人流統計；節慶與特別日子安排請以店家與主辦方公布為準。',
            ],
          },
          {
            heading: '由扶梯下段前往與回程',
            bullets: [
              { title: '下段轉出', text: '由扶梯下段近中環核心的街道連接點離開，沿街道步行前往；實際街口與夜間人流以當日現場為準。' },
              { title: '不要把扶梯當回程', text: '扶梯按時段單向，夜間不能假設可反向乘搭回起點；先決定步行回港鐵方向或使用路面交通。' },
              { title: '與 SoHo 的次序', text: '若兩者都想去，可按街道坡度與當日方向決定先 SoHo 後蘭桂坊，或反向安排，避免重複上下坡。' },
            ],
          },
          {
            heading: '夜間體驗與實用考量',
            table: {
              caption: '一般性規劃建議；營業與特別安排以當日公布為準',
              columns: ['面向', '可以考慮', '須注意'],
              rows: [
                ['晚餐', '把用餐排在扶梯行程之後', '熱門時段的訂位與等候安排'],
                ['夜間街景', '短時間散步與街區觀察', '噪音、人流與隨身物品'],
                ['拍照', '街道燈光與招牌', '避免拍攝店內與他人特寫'],
                ['回程', '事先決定步行或路面交通', '夜間交通與街道照明'],
              ],
            },
          },
          {
            heading: '遊客須知',
            bullets: [
              { title: '尊重附近住戶', text: '夜間街區周邊有住宅與其他商戶，請降低聲量，不在通道與樓宇入口停留。' },
              { title: '留意自身安全', text: '人多時保管隨身物品，並與同行者約定集合點；遇特別活動或封路安排，按現場指示改道。' },
              { title: '不提供商戶清單', text: '本站不列店名、價格或「必去」推薦；酒吧與夜生活類型規劃見餐飲專題。' },
              { title: '先查資料日期', text: '本頁資料整理日為 2026-11-09，沒有即時營業狀態；節慶與臨時安排請向店家或主辦方查證。' },
            ],
          },
        ],
        faqs: [
          {
            q: '蘭桂坊離扶梯近嗎？',
            a: '兩者同屬中環核心街區，可由扶梯下段的街道連接點轉出步行前往；本站沒有實測步程，請以當日路線與地圖工具確認。',
          },
          {
            q: '蘭桂坊和 SoHo 有什麼不同？',
            a: '蘭桂坊偏向夜生活與娛樂聚集，SoHo 是沿扶梯中段的斜坡餐飲街區；兩者相鄰但氣氛與街道位置不同，適合分開規劃停留點。',
          },
          {
            q: '晚上還能搭扶梯回去嗎？',
            a: '不應假設可以。扶梯按時段單向，兩個官方來源列上行至午夜，但不保證即時反向服務；回程請用街道步行或路面交通。',
          },
          {
            q: '蘭桂坊有特定的營業時間嗎？',
            a: '各店家與活動安排不同，本站不提供統一營業時間或價格。出發前請向店家或主辦方查證。',
          },
        ],
        mapsQuery: 'Lan Kwai Fong Central Hong Kong',
      },
      en: {
        meta: {
          title: 'Lan Kwai Fong | Nightlife Near the Mid-Levels Escalators',
          description: 'How Lan Kwai Fong relates to the lower escalator section, its dining and nightlife character, walking there and back to Central, plus safety, noise and how to verify business hours.',
        },
        kicker: 'NEARBY · LAN KWAI FONG',
        h1: 'Lan Kwai Fong: a final stop for an evening plan',
        lead: 'Lan Kwai Fong is a well-known dining and nightlife area in Central, close to the lower escalator section. It works well at the end of an evening itinerary, but because the escalators run one way, the return and business hours need deciding in advance.',
        facts: [
          { label: 'Area', value: 'Lan Kwai Fong, Central' },
          { label: 'Character', value: 'Dining and nightlife district' },
          { label: 'From the escalators', value: 'Lower-section street connection' },
          { label: 'Hours & events', value: 'Check businesses and organisers' },
          { label: 'Compiled', value: '2026-11-09 · not live status' },
        ],
        sections: [
          {
            heading: 'About Lan Kwai Fong',
            paragraphs: [
              'Lan Kwai Fong is known for a dense mix of restaurants, bars and evening crowds. It adjoins SoHo but has a different rhythm: this is a nightlife cluster, whereas SoHo is a sloping dining area along the middle of the escalator route. Both are often visited in one evening, but deserve separate stops in the plan.',
              'No business names, prices, opening hours, event dates or crowd figures are listed here; check with businesses and organisers, especially around festivals.',
            ],
          },
          {
            heading: 'Getting there and back from the lower section',
            bullets: [
              { title: 'Leave at the lower section', text: 'Exit via a lower-section street connection in central Central and walk to the area; check the junction and evening crowds on the day.' },
              { title: 'Do not count on the escalators for the return', text: 'The system runs one way by time of day, so do not assume a reverse ride at night. Choose between walking towards the MTR and surface transport.' },
              { title: 'Ordering SoHo and LKF', text: 'If you want both, pick the order based on the street gradients and that day’s direction to avoid climbing up and down twice.' },
            ],
          },
          {
            heading: 'Evening experience and practical points',
            table: {
              caption: 'General planning advice; hours and special arrangements vary by day',
              columns: ['Aspect', 'Consider', 'Watch for'],
              rows: [
                ['Dinner', 'Place the meal after the escalator ride', 'Bookings and queues at popular times'],
                ['Night streets', 'A short walk and neighbourhood observation', 'Noise, crowds and belongings'],
                ['Photography', 'Street lighting and signage', 'Avoid interiors and close-ups of other people'],
                ['Return', 'Decide walking or surface transport early', 'Night transport and street lighting'],
              ],
            },
          },
          {
            heading: 'Visitor notes',
            bullets: [
              { title: 'Respect nearby residents', text: 'Homes and other businesses sit around the area; keep noise down at night and do not linger in passages or building entrances.' },
              { title: 'Look after yourself', text: 'Keep belongings close in crowds and agree a meeting point with companions. Follow on-site diversions during events or road closures.' },
              { title: 'No business lists', text: 'No names, prices or “must-visit” recommendations are given here; see the bars and nightlife guide for planning by type.' },
              { title: 'Check the date', text: 'This page was compiled on 2026-11-09 and has no live business status; confirm festivals and temporary arrangements with businesses or organisers.' },
            ],
          },
        ],
        faqs: [
          {
            q: 'Is Lan Kwai Fong close to the escalators?',
            a: 'Both are in central Central and it is walkable from a lower-section street connection. No measured time is published here; confirm with a map tool and your route that day.',
          },
          {
            q: 'How is Lan Kwai Fong different from SoHo?',
            a: 'Lan Kwai Fong is more of a nightlife and entertainment cluster, while SoHo is a sloping dining area along the middle of the escalator route. They are adjacent but distinct in atmosphere and position.',
          },
          {
            q: 'Can I ride the escalators back at night?',
            a: 'Do not assume so. The system runs one way by time of day; both official sources list uphill until midnight, not an immediate reverse service. Use streets or surface transport for the return.',
          },
          {
            q: 'What are Lan Kwai Fong’s opening hours?',
            a: 'Each business and event is different, and no unified hours or prices are given here. Check with the businesses or organisers before going.',
          },
        ],
        mapsQuery: 'Lan Kwai Fong Central Hong Kong',
      },
    },
  },
];
