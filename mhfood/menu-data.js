/* ============================================================
   MH Foods — Full Menu Configuration & Injection Logic
   (Using Local 'assets' Folder Images)
   ============================================================ */

const FULL_MENU =[
  {
    category: "🍔 Burgers",
    items:[
      { id: 'b1', name: 'Grill Burger', price: 499, img: 'assets/grill-burger.jpg' },
      { id: 'b2', name: 'Tower Burger', price: 499, img: 'assets/tower-burger.jpg' },
      { id: 'b3', name: 'Double Decker Burger', price: 499, img: 'assets/double-decker-burger.jpg' },
      { id: 'b4', name: 'Zinger Cheese Burger', price: 450, img: 'assets/zinger-cheese-burger.jpg' },
      { id: 'b5', name: 'Zinger Burger', price: 380, img: 'assets/zinger-burger.jpg' },
      { id: 'b6', name: 'Chicken Burger', price: 299, img: 'assets/chicken-burger.jpg' },
      { id: 'b7', name: 'Chicken Shami Burger', price: 299, img: 'assets/chicken-shami-burger.jpg' },
      { id: 'b8', name: 'Patty Burger', price: 299, img: 'assets/patty-burger.jpg' },
      { id: 'b9', name: 'Chapli Burger', price: 299, img: 'assets/chapli-burger.jpg' },
      { id: 'b10', name: 'Double Anda Burger', price: 220, img: 'assets/double-anda-burger.jpg' },
      { id: 'b11', name: 'Shami Burger', price: 180, img: 'assets/shami-burger.jpg' }
    ]
  },
  {
    category: "🌯 Rolls & Shawarma",
    items:[
      { id: 'r1', name: 'Shawarma Platter', price: 499, img: 'assets/shawarma-platter.jpg' },
      { id: 'r2', name: 'Zinger Paratha Roll', price: 450, img: 'assets/zinger-paratha-roll.jpg' },
      { id: 'r3', name: 'Omelette Paratha Roll', price: 450, img: 'assets/omelette-paratha-roll.jpg' },
      { id: 'r4', name: 'Kabab Paratha Roll', price: 450, img: 'assets/kabab-paratha-roll.jpg' },
      { id: 'r5', name: 'Chicken Paratha Roll', price: 380, img: 'assets/chicken-paratha-roll.jpg' },
      { id: 'r6', name: 'Tikka Shawarma', price: 299, img: 'assets/tikka-shawarma.jpg' },
      { id: 'r7', name: 'Zinger Shawarma Large', price: 299, img: 'assets/zinger-shawarma-large.jpg' },
      { id: 'r8', name: 'Zinger Shawarma Small', price: 220, img: 'assets/zinger-shawarma-small.jpg' },
      { id: 'r9', name: 'Omelette Shawarma', price: 250, img: 'assets/omelette-shawarma.jpg' },
      { id: 'r10', name: 'Chicken Shawarma Large', price: 199, img: 'assets/chicken-shawarma-large.jpg' },
      { id: 'r11', name: 'Chicken Shawarma Small', price: 150, img: 'assets/chicken-shawarma-small.jpg' }
    ]
  },
  {
    category: "🥪 Sandwiches",
    items:[
      { id: 'sw1', name: 'Super Crunch Sandwich', price: 899, img: 'assets/super-crunch-sandwich.jpg' },
      { id: 'sw2', name: 'Pizza Sandwich', price: 750, img: 'assets/pizza-sandwich.jpg' },
      { id: 'sw3', name: 'Zinger Sandwich', price: 599, img: 'assets/zinger-sandwich.jpg' },
      { id: 'sw4', name: 'MH Special Sandwich', price: 599, img: 'assets/mh-special-sandwich.jpg' },
      { id: 'sw5', name: 'Barbeque Grill Sandwich', price: 550, img: 'assets/barbeque-grill-sandwich.jpg' },
      { id: 'sw6', name: 'Smoke Sandwich', price: 550, img: 'assets/smoke-sandwich.jpg' },
      { id: 'sw7', name: 'Chicken Cheese Sandwich', price: 499, img: 'assets/chicken-cheese-sandwich.jpg' },
      { id: 'sw8', name: 'Tikka Sandwich', price: 499, img: 'assets/tikka-sandwich.jpg' },
      { id: 'sw9', name: 'Grill Sandwich', price: 499, img: 'assets/grill-sandwich.jpg' },
      { id: 'sw10', name: 'Club Sandwich', price: 450, img: 'assets/club-sandwich.jpg' }
    ]
  },
  {
    category: "🍟 Fried Items",
    items:[
      { id: 'f1', name: 'Pizza Fries', prices: { S: 599, L: 999 }, img: 'assets/pizza-fries.jpg' },
      { id: 'f2', name: 'Chicken Cheese Fries', prices: { S: 399, L: 599 }, img: 'assets/chicken-cheese-fries.jpg' },
      { id: 'f3', name: 'Cheese Mayo Fries', prices: { S: 399, L: 599 }, img: 'assets/cheese-mayo-fries.jpg' },
      { id: 'f4', name: 'Loaded Mayo Fries', prices: { S: 399, L: 599 }, img: 'assets/loaded-mayo-fries.jpg' },
      { id: 'f5', name: 'Garlic Mayo Fries', prices: { S: 299, L: 499 }, img: 'assets/garlic-mayo-fries.jpg' },
      { id: 'f6', name: 'Masala Fries', prices: { S: 299, L: 499 }, img: 'assets/masala-fries.jpg' },
      { id: 'f7', name: 'Plain Fries', prices: { S: 199, L: 350 }, img: 'assets/plain-fries.jpg' }
    ]
  },
  {
    category: "🍗 Appetizers",
    items:[
      { id: 'a1', name: 'Nuggets', prices: { '5 Pcs': 399, '10 Pcs': 699 }, img: 'assets/nuggets.jpg' },
      { id: 'a2', name: 'Perry Perry Wings', prices: { '5 Pcs': 399, '10 Pcs': 699 }, img: 'assets/perry-perry-wings.jpg' },
      { id: 'a3', name: 'Hot Wings Fried', prices: { '5 Pcs': 350, '10 Pcs': 599 }, img: 'assets/hot-wings-fried.jpg' },
      { id: 'a4', name: 'Hot Shots', prices: { '5 Pcs': 299, '10 Pcs': 550 }, img: 'assets/hot-shots.jpg' }
    ]
  },
  {
    category: "🍝 Oven Bake Pasta",
    items:[
      { id: 'pa1', name: 'MH Special Pasta', prices: { S: 599, L: 999 }, img: 'assets/mh-special-pasta.jpg' },
      { id: 'pa2', name: 'Crunchy Pasta', prices: { S: 499, L: 799 }, img: 'assets/crunchy-pasta.jpg' },
      { id: 'pa3', name: 'Creamy Pasta', prices: { S: 399, L: 699 }, img: 'assets/creamy-pasta.jpg' }
    ]
  },
  {
    category: "🍕 Regular Pizza",
    items:[
      { id: 'p1', name: 'Hot And Spicy', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: 'assets/hot-and-spicy-pizza.jpg' },
      { id: 'p2', name: 'Chicken Fajita', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: 'assets/chicken-fajita-pizza.jpg' },
      { id: 'p3', name: 'Chicken Tikka', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: 'assets/chicken-tikka-pizza.jpg' },
      { id: 'p4', name: 'Peri Peri Pizza', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: 'assets/peri-peri-pizza.jpg' },
      { id: 'p5', name: 'Cheese Lover', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: 'assets/cheese-lover-pizza.jpg' },
      { id: 'p6', name: 'Veggie Lover', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: 'assets/veggie-lover-pizza.jpg' }
    ]
  },
  {
    category: "👑 Special Pizza",
    items:[
      { id: 'sp1', name: 'MH Special Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/mh-special-pizza.jpg' },
      { id: 'sp2', name: 'Lazania Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/lazania-pizza.jpg' },
      { id: 'sp3', name: 'Bihari Kabab', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/bihari-kabab-pizza.jpg' },
      { id: 'sp4', name: 'Malai Boti', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/malai-boti-pizza.jpg' },
      { id: 'sp5', name: 'Crown Crust Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/crown-crust-pizza.jpg' },
      { id: 'sp6', name: 'Four Season Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/four-season-pizza.jpg' },
      { id: 'sp7', name: 'Special Kabab', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/special-kabab-pizza.jpg' },
      { id: 'sp8', name: 'Kabab Bite Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/kabab-bite-pizza.jpg' },
      { id: 'sp9', name: 'Barbeque Grill Lasagna', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/barbeque-grill-lasagna-pizza.jpg' },
      { id: 'sp10', name: 'Kabab Stuffer', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/kabab-stuffer-pizza.jpg' },
      { id: 'sp11', name: 'Chicken Supreme', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: 'assets/chicken-supreme-pizza.jpg' }
    ]
  }
];

const DEALS =[
  { id: 'd1', name: 'Deal 1', price: 430, items:['1 Small Pizza', '1 (345 ml) Drink'], img: 'assets/deal-1.jpg' },
  { id: 'd2', name: 'Deal 2', price: 430, items:['1 Zinger Burger', '1 (345 ml) Drink'], img: 'assets/deal-2.jpg' },
  { id: 'd3', name: 'Deal 3', price: 1250, items:['1 Medium Pizza', '5 Pcs Wings', '1 L Drink'], img: 'assets/deal-3.jpg' },
  { id: 'd4', name: 'Deal 4', price: 1450, items:['1 Special Medium Pizza', '6 Pcs Hot Shots', '1 L Drink'], img: 'assets/deal-4.jpg' },
  { id: 'd5', name: 'Deal 5', price: 1350, items: ['1 Large Pizza', '1 L Drink'], img: 'assets/deal-5.jpg' },
  { id: 'd6', name: 'Deal 6', price: 1650, items:['1 Special Large Pizza', '1 1L Drink'], img: 'assets/deal-6.jpg' },
  { id: 'd7', name: 'Deal 7', price: 1699, items:['2 Zinger Burger', '10 Pcs Wings', '1 Fries', '1.5 L Drink'], img: 'assets/deal-7.jpg' },
  { id: 'd8', name: 'Birthday Deal', price: 3199, items:['2 Pound Cake', '1 XL Pizza', '2 Fries', '1.5 L Drink'], img: 'assets/deal-8.jpg' },
  { id: 'd9', name: 'Family Deal', price: 3999, items: ['2 XL Pizza', '2 Fries', '1.5 L Drink'], img: 'assets/deal-9.jpg' },
  { id: 'd10', name: 'Student Deal', price: 2499, items:['1 Large Pizza', '10 Pcs Wings', '2 Fries', '1.5 L Drink'], img: 'assets/deal-10.jpg' }
];

document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById('full-menu-grid');
  const dealsGrid = document.getElementById('deals-menu-grid');
  const topItemsGrid = document.getElementById('top-items-grid');

  function createFoodCardHTML(item) {
    if (!item) return "";
    
    // Check if the image path exists, if not fallback to a placeholder text or styling
    let imageTag = `<img src="${item.img}" class="card-img" alt="${item.name}" onerror="this.onerror=null; this.src='assets/placeholder.jpg';">`;

    if (item.prices) {
      const defaultSize = Object.keys(item.prices)[0];
      const defaultPrice = item.prices[defaultSize];
      
      let sizeButtons = Object.keys(item.prices).map(s => 
        `<button type="button" style="border:1px solid var(--border); background:none; color:#ccc; padding:4px 8px; border-radius:4px; font-size:0.8rem; cursor:pointer;" 
          onclick="document.getElementById('price-${item.id}').innerText='Rs. ${item.prices[s]}'; 
                   this.parentElement.nextElementSibling.querySelector('button').setAttribute('onclick', \`addToCart('${item.id}', '${item.name}', ${item.prices[s]}, '${s}', this)\`)">${s}</button>`
      ).join('');

      return `
        <div class="food-card anim-fade-up">
          <div class="card-img-wrap">${imageTag}</div>
          <div class="card-content">
            <h3 class="card-title">${item.name}</h3>
            <div style="display:flex; gap:5px; margin-bottom:15px; flex-wrap:wrap;">${sizeButtons}</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
              <span class="card-price" id="price-${item.id}">Rs. ${defaultPrice}</span>
              <button class="btn btn-primary btn-sm" onclick="addToCart('${item.id}', '${item.name}', ${defaultPrice}, '${defaultSize}', this)">+ Add</button>
            </div>
          </div>
        </div>`;
    } else {
      return `
        <div class="food-card anim-fade-up">
          <div class="card-img-wrap">${imageTag}</div>
          <div class="card-content">
            <h3 class="card-title">${item.name}</h3>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
              <span class="card-price">Rs. ${item.price}</span>
              <button class="btn btn-primary btn-sm" onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '', this)">+ Add</button>
            </div>
          </div>
        </div>`;
    }
  }

  // 1. Render Top Items on Home Page
  if (topItemsGrid) {
    const allItems = FULL_MENU.flatMap(category => category.items);
    const topItemsData =[
      allItems.find(i => i.id === 'b5'),   // Zinger Burger
      allItems.find(i => i.id === 'sp1'),  // MH Special Pizza
      allItems.find(i => i.id === 'f1')    // Pizza Fries
    ].filter(Boolean); 

    let topHtml = "";
    topItemsData.forEach(item => topHtml += createFoodCardHTML(item));
    topItemsGrid.innerHTML = topHtml;
  }

  // 2. Render Full Menu on Menu Page
  if (menuGrid) {
    let html = "";
    FULL_MENU.forEach(category => {
      html += `<h2 class="menu-category-title anim-fade-up">${category.category}</h2>`;
      category.items.forEach(item => {
        html += createFoodCardHTML(item);
      });
    });
    menuGrid.innerHTML = html;
  }

  // 3. Render Deals on Deals Page
  if (dealsGrid) {
    let html = "";
    DEALS.forEach(deal => {
      let itemsList = deal.items.map(i => `<li>${i}</li>`).join('');
      let imageTag = `<img src="${deal.img}" class="card-img" alt="${deal.name}" onerror="this.onerror=null; this.src='assets/placeholder.jpg';">`;
      
      html += `
        <div class="deal-card anim-fade-up food-card" style="padding:0; text-align:left;">
          <div class="card-img-wrap">${imageTag}</div>
          <div class="card-content">
            <h3 style="color:var(--gold); font-size:1.5rem; margin-bottom:10px;">${deal.name}</h3>
            <ul style="color:#ccc; font-size:0.95rem; list-style:circle inside; margin-bottom:20px;">${itemsList}</ul>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; border-top:1px solid #333; padding-top:15px;">
              <span class="card-price">Rs. ${deal.price}</span>
              <button class="btn btn-primary btn-sm" onclick="addToCart('${deal.id}', '${deal.name}', ${deal.price}, 'Deal', this)">+ Add</button>
            </div>
          </div>
        </div>
      `;
    });
    dealsGrid.innerHTML = html;
  }

  // Init scroll animations if app.js is loaded
  setTimeout(() => {
    if (typeof window.initScrollAnimations === 'function') {
      window.initScrollAnimations();
    }
  }, 100);
});
