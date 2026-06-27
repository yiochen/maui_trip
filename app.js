// Maui Trip 2026 Itinerary App
(function () {
  "use strict";

  // Trip dates (HST timezone offset -10)
  const TRIP_START = new Date("2026-06-28T00:00:00-10:00");
  const TRIP_END = new Date("2026-07-03T23:59:59-10:00");

  // Itinerary data
  const itinerary = [
    {
      date: "2026-06-28",
      label: "Sun, Jun 28",
      title: "Arrival",
      emoji: "🌴",
      sections: [
        {
          label: "Main Plan",
          places: [
            {
              name: "Kahului Airport (OGG)",
              type: "Airport",
              lat: 20.8986,
              lng: -156.4305,
              description:
                "Arrive at 4:40 PM. Pick up rental car — about 30 min drive to Wailea.",
              image:
                "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=300&fit=crop",
              review:
                "Small, open-air airport. Very easy to navigate. Rental car shuttles are right outside baggage claim.",
              rating: 4.0,
            },
            {
              name: "Wailea Beach Marriott Resort",
              type: "Hotel",
              lat: 20.6838,
              lng: -156.4425,
              description:
                "Check in and settle into the resort. Beautiful property right on Wailea Beach with ocean views.",
              image:
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=300&fit=crop",
              review:
                "Stunning grounds, great pool for kids, and direct beach access. The sunset views from the property are unbeatable.",
              rating: 4.5,
            },
            {
              name: "Wailea Beach Path",
              type: "Walk",
              lat: 20.6865,
              lng: -156.4435,
              description:
                "A beautiful 1.5-mile paved coastal path connecting Wailea's beaches. Perfect for an evening stroll after check-in.",
              image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop",
              review:
                "One of the best short walks in Maui. Gorgeous sunset views, whale watching in season, and you pass by several beautiful beaches.",
              rating: 4.8,
            },
            {
              name: "Monkeypod Kitchen by Merriman",
              type: "Dinner",
              lat: 20.6927,
              lng: -156.4398,
              description:
                "Farm-to-table Hawaiian cuisine with craft cocktails. Known for their wood-fired pizzas and fresh fish. Great for families.",
              image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop",
              review:
                "Amazing food and atmosphere! The mai tais are legendary, and they have a great kids menu. Try the fish tacos and the pizza. Reservations recommended.",
              rating: 4.5,
            },
            {
              name: "Lineage",
              type: "Dinner (Alternative)",
              lat: 20.6933,
              lng: -156.4401,
              description:
                "Modern Asian-Hawaiian cuisine by chef Sheldon Simeon. Intimate setting at The Shops at Wailea. Creative dishes inspired by local flavors.",
              image:
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=300&fit=crop",
              review:
                "One of Maui's best restaurants. The fried chicken and pork belly are incredible. Small plates perfect for sharing. Book ahead!",
              rating: 4.7,
            },
          ],
        },
      ],
    },
    {
      date: "2026-06-29",
      label: "Mon, Jun 29",
      title: "Resort Day",
      emoji: "🏖️",
      sections: [
        {
          label: "Main Plan",
          places: [
            {
              name: "Akamai Coffee Co.",
              type: "Breakfast",
              lat: 20.7108,
              lng: -156.4373,
              description:
                "Local Hawaiian coffee shop in Kihei. Great espresso drinks, acai bowls, and breakfast sandwiches. Relaxed island vibe.",
              image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=300&fit=crop",
              review:
                "Best coffee in South Maui! The acai bowls are huge and delicious. Very friendly staff. Can get busy — go early.",
              rating: 4.6,
            },
            {
              name: "Wailea Beach",
              type: "Beach",
              lat: 20.6862,
              lng: -156.4442,
              description:
                "Gorgeous golden sand beach right in front of the resort. Calm waters perfect for toddlers. Spend the day relaxing, building sand castles, and swimming.",
              image:
                "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&h=300&fit=crop",
              review:
                "Beautiful beach with soft sand and gentle waves. Great for families with young kids. Plenty of shade from resort umbrellas. Snorkeling on the rocky sides is excellent.",
              rating: 4.8,
            },
          ],
        },
        {
          label: "Optional",
          optional: true,
          places: [
            {
              name: "Ulua Beach",
              type: "Snorkeling",
              lat: 20.6915,
              lng: -156.4435,
              description:
                "Walk via the coastal path (20–30 min each way). One of Wailea's best snorkeling spots with sea turtles and tropical fish. Adults can take turns while one watches the little one.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=300&fit=crop",
              review:
                "Amazing snorkeling right off the beach! Saw turtles, colorful fish, and even an octopus. The reef is just 20 feet from shore. Easy entry over sand.",
              rating: 4.7,
            },
          ],
        },
      ],
    },
    {
      date: "2026-06-30",
      label: "Tue, Jun 30",
      title: "Turtle Beach",
      emoji: "🐢",
      sections: [
        {
          label: "Main Plan",
          places: [
            {
              name: "Maluaka Beach (Turtle Beach)",
              type: "Beach",
              lat: 20.6652,
              lng: -156.4462,
              description:
                "Early morning visit (10 min drive from resort). Known as 'Turtle Town' — one of the best spots to see Hawaiian green sea turtles resting on the sand and swimming near shore.",
              image:
                "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&h=300&fit=crop",
              review:
                "We saw 5 sea turtles on the beach and several swimming! Go early morning for the best chance. Calm waters, beautiful setting beneath the Maui Prince hotel ruins. Kid-friendly!",
              rating: 4.8,
            },
            {
              name: "808 Deli",
              type: "Lunch",
              lat: 20.7141,
              lng: -156.4459,
              description:
                "Local favorite for sandwiches and plate lunches in Kihei. Generous portions, fresh ingredients, and Hawaiian flavors. Great for a quick lunch.",
              image:
                "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&h=300&fit=crop",
              review:
                "Best sandwiches on the island! The portions are massive. Try the kalua pork or the fish sandwich. Very affordable and fast. Cash only!",
              rating: 4.6,
            },
          ],
        },
        {
          label: "Optional Nature Walk",
          optional: true,
          places: [
            {
              name: "Makena State Park (Big Beach)",
              type: "Beach / Hike",
              lat: 20.6305,
              lng: -156.4452,
              description:
                "5 min farther south from Maluaka. Dramatic lava rock coastline and a long golden beach. Easy coastal walk (30–45 min) with stunning ocean views.",
              image:
                "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&h=300&fit=crop",
              review:
                "Absolutely beautiful! The lava rock formations are incredible. Big Beach is stunning but waves can be strong — Little Beach is more sheltered. The coastal trail is easy and scenic.",
              rating: 4.7,
              meta: { drive: "15 min", walk: "30–45 min", difficulty: "Easy" },
            },
          ],
        },
      ],
    },
    {
      date: "2026-07-01",
      label: "Wed, Jul 1",
      title: "Nature Day",
      emoji: "🌿",
      sections: [
        {
          label: "Option A (Recommended)",
          places: [
            {
              name: "ʻĪao Valley State Monument",
              type: "Nature / Hike",
              lat: 20.8799,
              lng: -156.5444,
              description:
                "35 min drive from Wailea. Easy paved walk (30–60 min) through lush rainforest. The iconic ʻĪao Needle rises 1,200 ft above the valley. River access for wading. Perfect for kids and grandparents.",
              image:
                "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=300&fit=crop",
              review:
                "Breathtaking valley! The paved path is very easy, even with a stroller. The Needle viewpoint is stunning. Go in the morning before clouds roll in. We saw a rainbow!",
              rating: 4.7,
              meta: {
                drive: "35 min",
                walk: "30–60 min",
                difficulty: "Easy",
              },
            },
            {
              name: "The Mill House",
              type: "Lunch",
              lat: 20.8545,
              lng: -156.5107,
              description:
                "Farm-to-table restaurant at the Maui Tropical Plantation. Beautiful garden setting with mountain views. Fresh Hawaiian cuisine.",
              image:
                "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=300&fit=crop",
              review:
                "What a setting! Tables overlooking the plantation with mountain views. The food is creative and locally sourced. Portions are generous. Reservations needed.",
              rating: 4.5,
            },
            {
              name: "Maui Tropical Plantation",
              type: "Attraction",
              lat: 20.8538,
              lng: -156.5098,
              description:
                "Optional stop 10 min from ʻĪao Valley. Tram tours through tropical gardens, zip-lining, and a country store. Kids love seeing the tropical fruits and plants.",
              image:
                "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600&h=300&fit=crop",
              review:
                "Fun stop for the family! The tram ride is informative and relaxing. Kids loved tasting fresh fruit. The country store has great local products. About 45 min for the tour.",
              rating: 4.3,
            },
          ],
        },
        {
          label: "Option B",
          optional: true,
          places: [
            {
              name: "Twin Falls",
              type: "Hike / Waterfall",
              lat: 20.9178,
              lng: -156.2427,
              description:
                "50 min drive on the Road to Hana. Easy rainforest trail (1–2 hours) leading to beautiful waterfalls and swimming holes. Fresh fruit stand at the trailhead.",
              image:
                "https://images.unsplash.com/photo-1432405972618-c6b0cfba8793?w=600&h=300&fit=crop",
              review:
                "Beautiful easy hike! Several waterfalls and pools. Trail is muddy in spots but manageable. The fruit stand has amazing fresh coconuts and smoothies. Go early!",
              rating: 4.5,
              meta: { drive: "50 min", walk: "1–2 hrs", difficulty: "Easy" },
            },
          ],
        },
        {
          label: "Option C",
          optional: true,
          places: [
            {
              name: "Surfing Goat Dairy",
              type: "Farm / Activity",
              lat: 20.7704,
              lng: -156.3501,
              description:
                "40 min drive upcountry. Feed and pet Nigerian Dwarf goats, cheese tasting, and beautiful views. Very fun for toddlers!",
              image:
                "https://images.unsplash.com/photo-1524024973431-2ad916746264?w=600&h=300&fit=crop",
              review:
                "Our kids absolutely LOVED this place! Feeding the baby goats was the highlight of the trip. The cheese is delicious. Beautiful setting on the slopes of Haleakala. Book the Evening Chore tour!",
              rating: 4.6,
              meta: { drive: "40 min" },
            },
          ],
        },
      ],
    },
    {
      date: "2026-07-02",
      label: "Thu, Jul 2",
      title: "Beach + Shopping",
      emoji: "🌊",
      sections: [
        {
          label: "Main Plan",
          places: [
            {
              name: "Ulua Beach",
              type: "Beach / Snorkeling",
              lat: 20.6915,
              lng: -156.4435,
              description:
                "Morning at one of Wailea's best beaches. Protected cove with excellent snorkeling. Calm, clear waters great for families.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=300&fit=crop",
              review:
                "Arrived at 8am and had the beach almost to ourselves. Amazing snorkeling with turtles! The cove is very protected so waves are gentle. Showers and restrooms available.",
              rating: 4.7,
            },
            {
              name: "The Shops at Wailea",
              type: "Shopping",
              lat: 20.6932,
              lng: -156.4393,
              description:
                "Open-air luxury shopping center with local boutiques, art galleries, and restaurants. Live Hawaiian music in the evenings. Great for souvenirs.",
              image:
                "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=300&fit=crop",
              review:
                "Beautiful open-air mall with a nice mix of upscale and local shops. The Tuesday and Wednesday farmers market is great. Kids play area near the fountain. Good restaurants on site.",
              rating: 4.4,
            },
            {
              name: "Morimoto Maui",
              type: "Dinner",
              lat: 20.6854,
              lng: -156.4417,
              description:
                "Iron Chef Masaharu Morimoto's Maui outpost at the Andaz. World-class Japanese cuisine with ocean views. Perfect for a special dinner.",
              image:
                "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&h=300&fit=crop",
              review:
                "Incredible dining experience! The sushi is some of the freshest I've ever had. Beautiful sunset views from the terrace. Dress nice but not formal. The duck fried rice is a must-order.",
              rating: 4.6,
            },
          ],
        },
        {
          label: "Optional Short Hike",
          optional: true,
          places: [
            {
              name: "Honolua Bay Jungle Trail",
              type: "Hike / Nature",
              lat: 21.0137,
              lng: -156.638,
              description:
                "~1 hour drive to West Maui. 15–20 minute walk through a lush jungle canopy to a stunning bay. One of Maui's most photogenic rainforest paths. Great if you want jungle vibes without a long hike.",
              image:
                "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=300&fit=crop",
              review:
                "The trail through the jungle is magical — giant banyan roots, tropical birds, dappled sunlight. The bay at the end is gorgeous for snorkeling. Short enough for anyone. Incredible photos!",
              rating: 4.6,
              meta: {
                drive: "1 hr",
                walk: "20–30 min",
                difficulty: "Easy",
              },
            },
          ],
        },
      ],
    },
    {
      date: "2026-07-03",
      label: "Fri, Jul 3",
      title: "Departure",
      emoji: "✈️",
      sections: [
        {
          label: "Main Plan",
          places: [
            {
              name: "Breakfast at Resort",
              type: "Breakfast",
              lat: 20.6838,
              lng: -156.4425,
              description:
                "Enjoy a final breakfast at the Marriott. Take in the ocean views one last time before checking out.",
              image:
                "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=300&fit=crop",
              review:
                "The breakfast buffet has a great variety — tropical fruits, made-to-order eggs, and local pastries. Sit outside on the terrace for the view!",
              rating: 4.3,
            },
            {
              name: "Kahului Airport (OGG)",
              type: "Airport",
              lat: 20.8986,
              lng: -156.4305,
              description:
                "Check out by 8:30–9:00 AM. Return rental car. 12:00 PM flight. Give yourself at least 2 hours before departure.",
              image:
                "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=300&fit=crop",
              review:
                "Security can be slow during morning rush. Grab some local snacks at the shops past security. The open-air gates are a nice last taste of island weather.",
              rating: 4.0,
            },
          ],
        },
      ],
    },
  ];

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
  }

  // Determine which tab to show based on current date
  function selectInitialDay() {
    const now = new Date();
    // Convert to Hawaii time for comparison
    const hawaiiOffset = -10 * 60; // minutes
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

    // If before trip or after trip, show first day
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
      btn.innerHTML = `${day.emoji} ${day.title}<span class="tab-date">${day.label}</span>`;
      btn.addEventListener("click", () => switchDay(index));
      tabsContainer.appendChild(btn);
    });

    // Scroll active tab into view
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
    // Update tab styling
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
    // Clear existing markers
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
          `<strong>${place.name}</strong><br><small>${place.type}</small>`
        );

      markers.push(marker);
      bounds.extend([place.lat, place.lng]);
    });

    // Fit bounds with padding
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

    // Collect all places for the map
    const allPlaces = [];
    day.sections.forEach((section) => {
      section.places.forEach((place) => allPlaces.push(place));
    });

    updateMap(allPlaces);

    // Build HTML
    let html = "";
    let placeIndex = 0;

    day.sections.forEach((section) => {
      const optClass = section.optional ? " optional" : "";
      html += `<div class="section-label${optClass}">${section.label}</div>`;

      section.places.forEach((place) => {
        placeIndex++;
        html += renderPlaceCard(place, placeIndex);
      });
    });

    container.innerHTML = html;

    // Re-trigger animations
    requestAnimationFrame(() => {
      container.querySelectorAll(".place-card").forEach((card, i) => {
        card.style.animationDelay = `${i * 0.05}s`;
      });
    });
  }

  // Render a single place card
  function renderPlaceCard(place, index) {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + " Maui Hawaii")}`;

    let metaHtml = "";
    if (place.meta) {
      if (place.meta.drive)
        metaHtml += `<span>🚗 ${place.meta.drive}</span>`;
      if (place.meta.walk)
        metaHtml += `<span>🚶 ${place.meta.walk}</span>`;
      if (place.meta.difficulty)
        metaHtml += `<span>⭐ ${place.meta.difficulty}</span>`;
    }

    let ratingHtml = "";
    if (place.rating) {
      const stars = "★".repeat(Math.floor(place.rating)) +
        (place.rating % 1 >= 0.5 ? "½" : "");
      ratingHtml = `<span class="stars">${stars} ${place.rating}</span>`;
    }

    return `
      <div class="place-card">
        <img class="place-card-image" src="${place.image}" alt="${place.name}" loading="lazy" onerror="this.style.display='none'">
        <div class="place-card-body">
          <h3>${index}. ${place.name}</h3>
          <div class="place-type">${place.type}</div>
          ${metaHtml || ratingHtml ? `<div class="place-meta">${metaHtml}${ratingHtml}</div>` : ""}
          <p class="description">${place.description}</p>
          ${place.review ? `<div class="review">${place.review}</div>` : ""}
          <div class="place-actions">
            <a class="map-link" href="${googleMapsUrl}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Open in Google Maps
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
