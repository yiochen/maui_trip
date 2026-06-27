// Maui Trip 2026 Itinerary App
(function () {
  "use strict";

  // Trip dates (HST timezone offset -10)
  const TRIP_START = new Date("2026-06-28T00:00:00-10:00");
  const TRIP_END = new Date("2026-07-03T23:59:59-10:00");

  // Language support
  const LANG_KEY = "maui-trip-lang";
  let currentLang = localStorage.getItem(LANG_KEY) || "en";

  // Itinerary data with bilingual content
  const itinerary = [
    {
      date: "2026-06-28",
      label: { en: "Sun, Jun 28", zh: "6月28日 周日" },
      title: { en: "Arrival", zh: "抵达" },
      emoji: "🌴",
      sections: [
        {
          label: { en: "Main Plan", zh: "主要行程" },
          places: [
            {
              name: { en: "Kahului Airport (OGG)", zh: "卡胡卢伊机场 (OGG)" },
              type: { en: "Airport", zh: "机场" },
              lat: 20.8986,
              lng: -156.4305,
              description: {
                en: "Arrive at 4:40 PM. Pick up rental car — about 30 min drive to Wailea.",
                zh: "下午4:40到达。取租车——约30分钟车程到威雷亚。",
              },
              image:
                "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=300&fit=crop",
              review: {
                en: "Small, open-air airport. Very easy to navigate. Rental car shuttles are right outside baggage claim.",
                zh: "小型露天机场，非常容易找到方向。租车接驳车就在行李领取处外面。",
              },
              rating: 4.0,
              searchQuery: "Kahului Airport OGG Maui Hawaii",
            },
            {
              name: { en: "Wailea Beach Marriott Resort", zh: "威雷亚海滩万豪度假酒店" },
              type: { en: "Hotel", zh: "酒店" },
              lat: 20.6838,
              lng: -156.4425,
              description: {
                en: "Check in and settle into the resort. Beautiful property right on Wailea Beach with ocean views.",
                zh: "办理入住。坐落在威雷亚海滩的美丽度假村，拥有海景。",
              },
              image:
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=300&fit=crop",
              review: {
                en: "Stunning grounds, great pool for kids, and direct beach access. The sunset views from the property are unbeatable.",
                zh: "环境优美，儿童泳池很棒，可直达海滩。从酒店看日落无与伦比。",
              },
              rating: 4.5,
              searchQuery: "Wailea Beach Marriott Resort Maui",
            },
            {
              name: { en: "Wailea Beach Path", zh: "威雷亚海滩步道" },
              type: { en: "Walk", zh: "散步" },
              lat: 20.6865,
              lng: -156.4435,
              description: {
                en: "A beautiful 1.5-mile paved coastal path connecting Wailea's beaches. Perfect for an evening stroll after check-in.",
                zh: "一条美丽的1.5英里海滨铺装步道，连接威雷亚各海滩。入住后傍晚散步的绝佳选择。",
              },
              image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop",
              review: {
                en: "One of the best short walks in Maui. Gorgeous sunset views, whale watching in season, and you pass by several beautiful beaches.",
                zh: "毛伊岛最棒的短途步行之一。日落美景壮观，季节性观鲸，沿途经过多个美丽海滩。",
              },
              rating: 4.8,
              searchQuery: "Wailea Beach Path Maui",
            },
            {
              name: { en: "Monkeypod Kitchen by Merriman", zh: "Monkeypod Kitchen 餐厅" },
              type: { en: "Dinner", zh: "晚餐" },
              lat: 20.6927,
              lng: -156.4398,
              description: {
                en: "Farm-to-table Hawaiian cuisine with craft cocktails. Known for their wood-fired pizzas and fresh fish. Great for families.",
                zh: "农场到餐桌的夏威夷料理，搭配精酿鸡尾酒。以窑烤披萨和新鲜海鲜闻名。适合家庭聚餐。",
              },
              image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop",
              review: {
                en: "Amazing food and atmosphere! The mai tais are legendary, and they have a great kids menu. Try the fish tacos and the pizza. Reservations recommended.",
                zh: "食物和氛围都很棒！Mai Tai鸡尾酒是招牌，儿童菜单也很好。推荐鱼肉塔可和披萨。建议提前预约。",
              },
              rating: 4.5,
              searchQuery: "Monkeypod Kitchen Merriman Wailea Maui",
            },
            {
              name: { en: "Lineage", zh: "Lineage 餐厅" },
              type: { en: "Dinner (Alternative)", zh: "晚餐（备选）" },
              lat: 20.6933,
              lng: -156.4401,
              description: {
                en: "Modern Asian-Hawaiian cuisine by chef Sheldon Simeon. Intimate setting at The Shops at Wailea. Creative dishes inspired by local flavors.",
                zh: "主厨Sheldon Simeon的现代亚洲-夏威夷融合菜。位于威雷亚购物中心，氛围温馨。以当地风味为灵感的创意菜肴。",
              },
              image:
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=300&fit=crop",
              review: {
                en: "One of Maui's best restaurants. The fried chicken and pork belly are incredible. Small plates perfect for sharing. Book ahead!",
                zh: "毛伊岛最好的餐厅之一。炸鸡和五花肉令人惊艳。小份菜品适合分享。务必提前预订！",
              },
              rating: 4.7,
              searchQuery: "Lineage restaurant Wailea Maui",
            },
          ],
        },
      ],
    },
    {
      date: "2026-06-29",
      label: { en: "Mon, Jun 29", zh: "6月29日 周一" },
      title: { en: "Resort Day", zh: "度假村日" },
      emoji: "🏖️",
      sections: [
        {
          label: { en: "Main Plan", zh: "主要行程" },
          places: [
            {
              name: { en: "Akamai Coffee Co.", zh: "Akamai 咖啡" },
              type: { en: "Breakfast", zh: "早餐" },
              lat: 20.7108,
              lng: -156.4373,
              description: {
                en: "Local Hawaiian coffee shop in Kihei. Great espresso drinks, acai bowls, and breakfast sandwiches. Relaxed island vibe.",
                zh: "基黑镇的本地夏威夷咖啡馆。浓缩咖啡、巴西莓碗和早餐三明治都很棒。轻松的海岛氛围。",
              },
              image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=300&fit=crop",
              review: {
                en: "Best coffee in South Maui! The acai bowls are huge and delicious. Very friendly staff. Can get busy — go early.",
                zh: "南毛伊最好的咖啡！巴西莓碗分量大又好吃。店员很友善。可能会排队——建议早去。",
              },
              rating: 4.6,
              searchQuery: "Akamai Coffee Kihei Maui",
            },
            {
              name: { en: "Wailea Beach", zh: "威雷亚海滩" },
              type: { en: "Beach", zh: "海滩" },
              lat: 20.6862,
              lng: -156.4442,
              description: {
                en: "Gorgeous golden sand beach right in front of the resort. Calm waters perfect for toddlers. Spend the day relaxing, building sand castles, and swimming.",
                zh: "度假村正前方的金色沙滩。平静的海水非常适合幼儿。放松一天——堆沙堡、游泳。",
              },
              image:
                "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&h=300&fit=crop",
              review: {
                en: "Beautiful beach with soft sand and gentle waves. Great for families with young kids. Plenty of shade from resort umbrellas. Snorkeling on the rocky sides is excellent.",
                zh: "柔软沙滩，海浪温柔。非常适合带小孩的家庭。度假村遮阳伞提供充足阴凉。礁石旁浮潜很棒。",
              },
              rating: 4.8,
              searchQuery: "Wailea Beach Maui Hawaii",
            },
          ],
        },
        {
          label: { en: "Optional", zh: "可选活动" },
          optional: true,
          places: [
            {
              name: { en: "Ulua Beach", zh: "乌鲁亚海滩" },
              type: { en: "Snorkeling", zh: "浮潜" },
              lat: 20.6915,
              lng: -156.4435,
              description: {
                en: "Walk via the coastal path (20–30 min each way). One of Wailea's best snorkeling spots with sea turtles and tropical fish. Adults can take turns while one watches the little one.",
                zh: "沿海滨步道步行（单程20-30分钟）。威雷亚最好的浮潜地点之一，有海龟和热带鱼。大人可以轮流浮潜，留一人看孩子。",
              },
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=300&fit=crop",
              review: {
                en: "Amazing snorkeling right off the beach! Saw turtles, colorful fish, and even an octopus. The reef is just 20 feet from shore. Easy entry over sand.",
                zh: "海滩旁就能浮潜！看到了海龟、彩色鱼群，甚至还有章鱼。珊瑚礁离岸仅6米。沙滩入水很方便。",
              },
              rating: 4.7,
              searchQuery: "Ulua Beach Wailea Maui",
            },
          ],
        },
      ],
    },
    {
      date: "2026-06-30",
      label: { en: "Tue, Jun 30", zh: "6月30日 周二" },
      title: { en: "Turtle Beach", zh: "海龟海滩" },
      emoji: "🐢",
      sections: [
        {
          label: { en: "Main Plan", zh: "主要行程" },
          places: [
            {
              name: { en: "Maluaka Beach (Turtle Beach)", zh: "马鲁阿卡海滩（海龟海滩）" },
              type: { en: "Beach", zh: "海滩" },
              lat: 20.6652,
              lng: -156.4462,
              description: {
                en: "Early morning visit (10 min drive from resort). Known as 'Turtle Town' — one of the best spots to see Hawaiian green sea turtles resting on the sand and swimming near shore.",
                zh: "清晨前往（离度假村10分钟车程）。被称为"海龟小镇"——观看夏威夷绿海龟在沙滩上休息和近岸游泳的最佳地点之一。",
              },
              image:
                "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&h=300&fit=crop",
              review: {
                en: "We saw 5 sea turtles on the beach and several swimming! Go early morning for the best chance. Calm waters, beautiful setting beneath the Maui Prince hotel ruins. Kid-friendly!",
                zh: "我们在海滩上看到5只海龟，还有几只在游泳！清晨去机会最大。水面平静，毛伊王子酒店遗址下方环境优美。适合带孩子！",
              },
              rating: 4.8,
              searchQuery: "Maluaka Beach Turtle Town Maui",
            },
            {
              name: { en: "808 Deli", zh: "808 Deli 熟食店" },
              type: { en: "Lunch", zh: "午餐" },
              lat: 20.7141,
              lng: -156.4459,
              description: {
                en: "Local favorite for sandwiches and plate lunches in Kihei. Generous portions, fresh ingredients, and Hawaiian flavors. Great for a quick lunch.",
                zh: "基黑镇本地人最爱的三明治和便当店。分量大、食材新鲜、夏威夷风味。适合快速午餐。",
              },
              image:
                "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=300&fit=crop",
              review: {
                en: "Best sandwiches on the island! The portions are massive. Try the kalua pork or the fish sandwich. Very affordable and fast. Cash only!",
                zh: "岛上最好吃的三明治！分量巨大。推荐卡鲁阿烤猪肉或鱼肉三明治。物美价廉，出餐快。只收现金！",
              },
              rating: 4.6,
              searchQuery: "808 Deli Kihei Maui",
            },
          ],
        },
        {
          label: { en: "Optional Nature Walk", zh: "可选自然漫步" },
          optional: true,
          places: [
            {
              name: { en: "Makena State Park (Big Beach)", zh: "马凯纳州立公园（大海滩）" },
              type: { en: "Beach / Hike", zh: "海滩 / 徒步" },
              lat: 20.6305,
              lng: -156.4452,
              description: {
                en: "5 min farther south from Maluaka. Dramatic lava rock coastline and a long golden beach. Easy coastal walk (30–45 min) with stunning ocean views.",
                zh: "从马鲁阿卡再往南5分钟。壮观的熔岩海岸线和长长的金色沙滩。轻松的海岸步行（30-45分钟），壮丽海景。",
              },
              image:
                "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&h=300&fit=crop",
              review: {
                en: "Absolutely beautiful! The lava rock formations are incredible. Big Beach is stunning but waves can be strong — Little Beach is more sheltered. The coastal trail is easy and scenic.",
                zh: "绝对美丽！熔岩岩石地形令人赞叹。大海滩很壮观但浪可能大——小海滩更隐蔽。海岸步道轻松又风景优美。",
              },
              rating: 4.7,
              meta: { drive: "15 min", walk: "30–45 min", difficulty: { en: "Easy", zh: "轻松" } },
              searchQuery: "Makena State Park Big Beach Maui",
            },
          ],
        },
      ],
    },
    {
      date: "2026-07-01",
      label: { en: "Wed, Jul 1", zh: "7月1日 周三" },
      title: { en: "Nature Day", zh: "自然日" },
      emoji: "🌿",
      sections: [
        {
          label: { en: "Option A (Recommended)", zh: "方案A（推荐）" },
          places: [
            {
              name: { en: "ʻĪao Valley State Monument", zh: "伊奥谷州立纪念碑" },
              type: { en: "Nature / Hike", zh: "自然 / 徒步" },
              lat: 20.8799,
              lng: -156.5444,
              description: {
                en: "35 min drive from Wailea. Easy paved walk (30–60 min) through lush rainforest. The iconic ʻĪao Needle rises 1,200 ft above the valley. River access for wading. Perfect for kids and grandparents.",
                zh: "从威雷亚开车35分钟。轻松的铺装步道（30-60分钟），穿过茂密的热带雨林。标志性的伊奥针峰高出谷底1200英尺。可以涉水。非常适合孩子和老人。",
              },
              image:
                "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=300&fit=crop",
              review: {
                en: "Breathtaking valley! The paved path is very easy, even with a stroller. The Needle viewpoint is stunning. Go in the morning before clouds roll in. We saw a rainbow!",
                zh: "令人叹为观止的山谷！铺装小路非常轻松，推婴儿车也没问题。针峰观景点壮观。建议上午去，在云雾到来之前。我们还看到了彩虹！",
              },
              rating: 4.7,
              meta: { drive: "35 min", walk: "30–60 min", difficulty: { en: "Easy", zh: "轻松" } },
              searchQuery: "Iao Valley State Monument Maui",
            },
            {
              name: { en: "The Mill House", zh: "The Mill House 餐厅" },
              type: { en: "Lunch", zh: "午餐" },
              lat: 20.8545,
              lng: -156.5107,
              description: {
                en: "Farm-to-table restaurant at the Maui Tropical Plantation. Beautiful garden setting with mountain views. Fresh Hawaiian cuisine.",
                zh: "毛伊热带种植园内的农场到餐桌餐厅。花园环境优美，可观山景。新鲜的夏威夷料理。",
              },
              image:
                "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=300&fit=crop",
              review: {
                en: "What a setting! Tables overlooking the plantation with mountain views. The food is creative and locally sourced. Portions are generous. Reservations needed.",
                zh: "环境太棒了！餐桌可以俯瞰种植园和山景。菜品有创意且使用当地食材。分量慷慨。需要预约。",
              },
              rating: 4.5,
              searchQuery: "The Mill House Maui Tropical Plantation",
            },
            {
              name: { en: "Maui Tropical Plantation", zh: "毛伊热带种植园" },
              type: { en: "Attraction", zh: "景点" },
              lat: 20.8538,
              lng: -156.5098,
              description: {
                en: "Optional stop 10 min from ʻĪao Valley. Tram tours through tropical gardens, zip-lining, and a country store. Kids love seeing the tropical fruits and plants.",
                zh: "距伊奥谷10分钟的可选景点。电车游览热带花园、滑索和乡村商店。孩子们喜欢看热带水果和植物。",
              },
              image:
                "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600&h=300&fit=crop",
              review: {
                en: "Fun stop for the family! The tram ride is informative and relaxing. Kids loved tasting fresh fruit. The country store has great local products. About 45 min for the tour.",
                zh: "适合全家的有趣景点！电车之旅既有趣又轻松。孩子们喜欢品尝新鲜水果。乡村商店有很棒的当地产品。游览约45分钟。",
              },
              rating: 4.3,
              searchQuery: "Maui Tropical Plantation",
            },
          ],
        },
        {
          label: { en: "Option B", zh: "方案B" },
          optional: true,
          places: [
            {
              name: { en: "Twin Falls", zh: "双子瀑布" },
              type: { en: "Hike / Waterfall", zh: "徒步 / 瀑布" },
              lat: 20.9178,
              lng: -156.2427,
              description: {
                en: "50 min drive on the Road to Hana. Easy rainforest trail (1–2 hours) leading to beautiful waterfalls and swimming holes. Fresh fruit stand at the trailhead.",
                zh: "沿哈纳公路开车50分钟。轻松的热带雨林步道（1-2小时），通往美丽的瀑布和天然游泳池。步道入口有新鲜水果摊。",
              },
              image:
                "https://images.unsplash.com/photo-1432405972618-c6b0cfba8793?w=600&h=300&fit=crop",
              review: {
                en: "Beautiful easy hike! Several waterfalls and pools. Trail is muddy in spots but manageable. The fruit stand has amazing fresh coconuts and smoothies. Go early!",
                zh: "美丽而轻松的徒步！几处瀑布和水潭。步道有些地方泥泞但可以走。水果摊的椰子和冰沙太棒了。建议早去！",
              },
              rating: 4.5,
              meta: { drive: "50 min", walk: "1–2 hrs", difficulty: { en: "Easy", zh: "轻松" } },
              searchQuery: "Twin Falls Maui Hana Highway",
            },
          ],
        },
        {
          label: { en: "Option C", zh: "方案C" },
          optional: true,
          places: [
            {
              name: { en: "Surfing Goat Dairy", zh: "冲浪山羊牧场" },
              type: { en: "Farm / Activity", zh: "农场 / 活动" },
              lat: 20.7704,
              lng: -156.3501,
              description: {
                en: "40 min drive upcountry. Feed and pet Nigerian Dwarf goats, cheese tasting, and beautiful views. Very fun for toddlers!",
                zh: "往高地方向开车40分钟。喂养和抚摸尼日利亚矮山羊，品尝奶酪，风景优美。幼儿超级喜欢！",
              },
              image:
                "https://images.unsplash.com/photo-1524024973431-2ad916746264?w=600&h=300&fit=crop",
              review: {
                en: "Our kids absolutely LOVED this place! Feeding the baby goats was the highlight of the trip. The cheese is delicious. Beautiful setting on the slopes of Haleakala. Book the Evening Chore tour!",
                zh: "我们的孩子超级喜欢这里！喂小山羊是旅行的亮点。奶酪很好吃。坐落在哈莱阿卡拉火山坡上，景色优美。建议预订傍晚农活体验！",
              },
              rating: 4.6,
              meta: { drive: "40 min" },
              searchQuery: "Surfing Goat Dairy Maui",
            },
          ],
        },
      ],
    },
    {
      date: "2026-07-02",
      label: { en: "Thu, Jul 2", zh: "7月2日 周四" },
      title: { en: "Beach + Shopping", zh: "海滩+购物" },
      emoji: "🌊",
      sections: [
        {
          label: { en: "Main Plan", zh: "主要行程" },
          places: [
            {
              name: { en: "Ulua Beach", zh: "乌鲁亚海滩" },
              type: { en: "Beach / Snorkeling", zh: "海滩 / 浮潜" },
              lat: 20.6915,
              lng: -156.4435,
              description: {
                en: "Morning at one of Wailea's best beaches. Protected cove with excellent snorkeling. Calm, clear waters great for families.",
                zh: "上午在威雷亚最好的海滩之一。受保护的海湾，浮潜绝佳。平静清澈的海水非常适合家庭。",
              },
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=300&fit=crop",
              review: {
                en: "Arrived at 8am and had the beach almost to ourselves. Amazing snorkeling with turtles! The cove is very protected so waves are gentle. Showers and restrooms available.",
                zh: "早上8点到，海滩几乎是我们独享。浮潜看到了海龟！海湾非常受保护，海浪温柔。有淋浴和洗手间。",
              },
              rating: 4.7,
              searchQuery: "Ulua Beach Wailea Maui",
            },
            {
              name: { en: "The Shops at Wailea", zh: "威雷亚购物中心" },
              type: { en: "Shopping", zh: "购物" },
              lat: 20.6932,
              lng: -156.4393,
              description: {
                en: "Open-air luxury shopping center with local boutiques, art galleries, and restaurants. Live Hawaiian music in the evenings. Great for souvenirs.",
                zh: "露天豪华购物中心，有本地精品店、艺术画廊和餐厅。晚间有夏威夷现场音乐。买纪念品的好地方。",
              },
              image:
                "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=300&fit=crop",
              review: {
                en: "Beautiful open-air mall with a nice mix of upscale and local shops. The Tuesday and Wednesday farmers market is great. Kids play area near the fountain. Good restaurants on site.",
                zh: "漂亮的露天商场，高档商店和本地小店搭配得很好。周二周三的农夫市场很棒。喷泉旁有儿童游乐区。餐厅也不错。",
              },
              rating: 4.4,
              searchQuery: "The Shops at Wailea Maui",
            },
            {
              name: { en: "Morimoto Maui", zh: "森本毛伊餐厅" },
              type: { en: "Dinner", zh: "晚餐" },
              lat: 20.6854,
              lng: -156.4417,
              description: {
                en: "Iron Chef Masaharu Morimoto's Maui outpost at the Andaz. World-class Japanese cuisine with ocean views. Perfect for a special dinner.",
                zh: "铁人主厨森本正治在毛伊岛Andaz酒店的餐厅。世界级日本料理，可观海景。适合特别的晚餐。",
              },
              image:
                "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&h=300&fit=crop",
              review: {
                en: "Incredible dining experience! The sushi is some of the freshest I've ever had. Beautiful sunset views from the terrace. Dress nice but not formal. The duck fried rice is a must-order.",
                zh: "绝佳的用餐体验！寿司是我吃过最新鲜的之一。露台日落景色很美。穿着得体但不需正装。鸭肉炒饭必点。",
              },
              rating: 4.6,
              searchQuery: "Morimoto Maui Andaz",
            },
          ],
        },
        {
          label: { en: "Optional Short Hike", zh: "可选短途徒步" },
          optional: true,
          places: [
            {
              name: { en: "Honolua Bay Jungle Trail", zh: "洪诺鲁阿湾丛林步道" },
              type: { en: "Hike / Nature", zh: "徒步 / 自然" },
              lat: 21.0137,
              lng: -156.638,
              description: {
                en: "~1 hour drive to West Maui. 15–20 minute walk through a lush jungle canopy to a stunning bay. One of Maui's most photogenic rainforest paths. Great if you want jungle vibes without a long hike.",
                zh: "约1小时车程到西毛伊。15-20分钟穿过茂密的丛林树冠到达一个美丽的海湾。毛伊岛最上镜的热带雨林步道之一。想要丛林氛围又不想长途徒步的绝佳选择。",
              },
              image:
                "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=300&fit=crop",
              review: {
                en: "The trail through the jungle is magical — giant banyan roots, tropical birds, dappled sunlight. The bay at the end is gorgeous for snorkeling. Short enough for anyone. Incredible photos!",
                zh: "穿过丛林的步道太神奇了——巨大的榕树根、热带鸟类、斑驳的阳光。尽头的海湾非常适合浮潜。路程短，任何人都能走。拍照太美了！",
              },
              rating: 4.6,
              meta: { drive: "1 hr", walk: "20–30 min", difficulty: { en: "Easy", zh: "轻松" } },
              searchQuery: "Honolua Bay Trail Maui",
            },
          ],
        },
      ],
    },
    {
      date: "2026-07-03",
      label: { en: "Fri, Jul 3", zh: "7月3日 周五" },
      title: { en: "Departure", zh: "离开" },
      emoji: "✈️",
      sections: [
        {
          label: { en: "Main Plan", zh: "主要行程" },
          places: [
            {
              name: { en: "Breakfast at Resort", zh: "度假村早餐" },
              type: { en: "Breakfast", zh: "早餐" },
              lat: 20.6838,
              lng: -156.4425,
              description: {
                en: "Enjoy a final breakfast at the Marriott. Take in the ocean views one last time before checking out.",
                zh: "在万豪享用最后一顿早餐。在退房前最后一次欣赏海景。",
              },
              image:
                "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=300&fit=crop",
              review: {
                en: "The breakfast buffet has a great variety — tropical fruits, made-to-order eggs, and local pastries. Sit outside on the terrace for the view!",
                zh: "早餐自助种类丰富——热带水果、现做鸡蛋和当地糕点。坐在外面露台上看景！",
              },
              rating: 4.3,
              searchQuery: "Wailea Beach Marriott Resort Maui",
            },
            {
              name: { en: "Kahului Airport (OGG)", zh: "卡胡卢伊机场 (OGG)" },
              type: { en: "Airport", zh: "机场" },
              lat: 20.8986,
              lng: -156.4305,
              description: {
                en: "Check out by 8:30–9:00 AM. Return rental car. 12:00 PM flight. Give yourself at least 2 hours before departure.",
                zh: "8:30-9:00退房。归还租车。中午12:00航班。至少提前2小时到达机场。",
              },
              image:
                "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=300&fit=crop",
              review: {
                en: "Security can be slow during morning rush. Grab some local snacks at the shops past security. The open-air gates are a nice last taste of island weather.",
                zh: "早高峰安检可能较慢。过安检后的商店可以买当地零食。露天登机口是最后一次感受海岛天气。",
              },
              rating: 4.0,
              searchQuery: "Kahului Airport OGG Maui Hawaii",
            },
          ],
        },
      ],
    },
  ];

  // UI text translations
  const uiText = {
    openInMaps: { en: "Open in Google Maps", zh: "在谷歌地图中打开" },
    subtitle: { en: "June 28 – July 3", zh: "6月28日 – 7月3日" },
  };

  // Helper to get text in current language
  function t(obj) {
    if (typeof obj === "string") return obj;
    return obj[currentLang] || obj.en;
  }

  // State
  let currentDay = 0;
  let map = null;
  let markers = [];

  // Initialize
  function init() {
    selectInitialDay();
    renderTabs();
    initMap();
    renderDay(currentDay);
    initLangToggle();
  }

  // Language toggle
  function initLangToggle() {
    const btn = document.getElementById("lang-toggle");
    updateLangButton(btn);
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "zh" : "en";
      localStorage.setItem(LANG_KEY, currentLang);
      updateLangButton(btn);
      updateSubtitle();
      renderTabs();
      renderDay(currentDay);
    });
  }

  function updateLangButton(btn) {
    btn.textContent = currentLang === "en" ? "中文" : "En";
  }

  function updateSubtitle() {
    document.querySelector(".subtitle").textContent = t(uiText.subtitle);
  }

  // Determine which tab to show based on current date
  function selectInitialDay() {
    const now = new Date();
    const hawaiiOffset = -10 * 60;
    const localOffset = now.getTimezoneOffset();
    const hawaiiNow = new Date(
      now.getTime() + (localOffset + hawaiiOffset) * 60000
    );

    const todayStr =
      hawaiiNow.getFullYear() +
      "-" +
      String(hawaiiNow.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(hawaiiNow.getDate()).padStart(2, "0");

    for (let i = 0; i < itinerary.length; i++) {
      if (itinerary[i].date === todayStr) {
        currentDay = i;
        return;
      }
    }

    if (hawaiiNow < TRIP_START) {
      currentDay = 0;
    } else if (hawaiiNow > TRIP_END) {
      currentDay = itinerary.length - 1;
    } else {
      currentDay = 0;
    }
  }

  // Render tabs
  function renderTabs() {
    const tabsContainer = document.getElementById("tabs");
    tabsContainer.innerHTML = "";

    itinerary.forEach((day, index) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (index === currentDay ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", index === currentDay);
      btn.innerHTML = `${day.emoji} ${t(day.title)}<span class="tab-date">${t(day.label)}</span>`;
      btn.addEventListener("click", () => switchDay(index));
      tabsContainer.appendChild(btn);
    });

    setTimeout(() => {
      const activeTab = tabsContainer.querySelector(".active");
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }, 100);
  }

  // Switch day
  function switchDay(index) {
    currentDay = index;
    document.querySelectorAll(".tab-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
      btn.setAttribute("aria-selected", i === index);
    });
    renderDay(index);
  }

  // Initialize Leaflet map
  function initMap() {
    map = L.map("map", {
      zoomControl: false,
      attributionControl: false,
    }).setView([20.7, -156.44], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);
  }

  // Update map markers
  function updateMap(places) {
    markers.forEach((m) => map.removeLayer(m));
    markers = [];

    if (places.length === 0) return;

    const bounds = L.latLngBounds();

    places.forEach((place, i) => {
      const icon = L.divIcon({
        className: "custom-marker-wrapper",
        html: `<div class="custom-marker">${i + 1}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([place.lat, place.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<strong>${t(place.name)}</strong><br><small>${t(place.type)}</small>`
        );

      markers.push(marker);
      bounds.extend([place.lat, place.lng]);
    });

    if (places.length === 1) {
      map.setView([places[0].lat, places[0].lng], 14);
    } else {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }

  // Render a day's content
  function renderDay(index) {
    const day = itinerary[index];
    const container = document.getElementById("places-list");

    const allPlaces = [];
    day.sections.forEach((section) => {
      section.places.forEach((place) => allPlaces.push(place));
    });

    updateMap(allPlaces);

    let html = "";
    let placeIndex = 0;

    day.sections.forEach((section) => {
      const optClass = section.optional ? " optional" : "";
      html += `<div class="section-label${optClass}">${t(section.label)}</div>`;

      section.places.forEach((place) => {
        placeIndex++;
        html += renderPlaceCard(place, placeIndex);
      });
    });

    container.innerHTML = html;

    requestAnimationFrame(() => {
      container.querySelectorAll(".place-card").forEach((card, i) => {
        card.style.animationDelay = `${i * 0.05}s`;
      });
    });
  }

  // Render a single place card
  function renderPlaceCard(place, index) {
    const query = place.searchQuery || t(place.name) + " Maui Hawaii";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

    let metaHtml = "";
    if (place.meta) {
      if (place.meta.drive)
        metaHtml += `<span>🚗 ${place.meta.drive}</span>`;
      if (place.meta.walk)
        metaHtml += `<span>🚶 ${place.meta.walk}</span>`;
      if (place.meta.difficulty)
        metaHtml += `<span>⭐ ${t(place.meta.difficulty)}</span>`;
    }

    let ratingHtml = "";
    if (place.rating) {
      const stars =
        "★".repeat(Math.floor(place.rating)) +
        (place.rating % 1 >= 0.5 ? "½" : "");
      ratingHtml = `<span class="stars">${stars} ${place.rating}</span>`;
    }

    return `
      <div class="place-card">
        <img class="place-card-image" src="${place.image}" alt="${t(place.name)}" loading="lazy" onerror="this.style.display='none'">
        <div class="place-card-body">
          <h3>${index}. ${t(place.name)}</h3>
          <div class="place-type">${t(place.type)}</div>
          ${metaHtml || ratingHtml ? `<div class="place-meta">${metaHtml}${ratingHtml}</div>` : ""}
          <p class="description">${t(place.description)}</p>
          ${place.review ? `<div class="review">${t(place.review)}</div>` : ""}
          <div class="place-actions">
            <a class="map-link" href="${googleMapsUrl}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              ${t(uiText.openInMaps)}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Register Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then((reg) => console.log("SW registered:", reg.scope))
        .catch((err) => console.log("SW registration failed:", err));
    });
  }

  // Start app
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
