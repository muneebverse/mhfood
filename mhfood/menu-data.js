/* ============================================================
   MH Foods — Full Menu Configuration & Injection Logic
   ============================================================ */

// Image Placeholders (Change these URLs to your actual images later)
const imgBurger = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80';
const imgRoll = 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80';
const imgSandwich = 'https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=500&q=80';
const imgFries = 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&q=80';
const imgPizza = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80';
const imgAppetizer = 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80';
const imgPasta = 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80';
const imgDeal = 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80';

const FULL_MENU =[
  {
    category: "🍔 Burgers",
    items:[
      { id: 'b1', name: 'Grill Burger', price: 499, img: imgBurger },
      { id: 'b2', name: 'Tower Burger', price: 499, img: imgBurger },
      { id: 'b3', name: 'Double Decker Burger', price: 499, img: imgBurger },
      { id: 'b4', name: 'Zinger Cheese Burger', price: 450, img: imgBurger },
      { id: 'b5', name: 'Zinger Burger', price: 380, img: imgBurger },
      { id: 'b6', name: 'Chicken Burger', price: 299, img: imgBurger },
      { id: 'b7', name: 'Chicken Shami Burger', price: 299, img: imgBurger },
      { id: 'b8', name: 'Patty Burger', price: 299, img: imgBurger },
      { id: 'b9', name: 'Chapli Burger', price: 299, img: imgBurger },
      { id: 'b10', name: 'Double Anda Burger', price: 230, img: imgBurger },
      { id: 'b11', name: 'Shami Burger', price: 180, img: imgBurger }
    ]
  },
  {
    category: "🌯 Rolls & Shawarma",
    items:[
      { id: 'r1', name: 'Shawarma Platter', price: 499, img: imgRoll },
      { id: 'r2', name: 'Zinger Paratha Roll', price: 450, img: imgRoll },
      { id: 'r3', name: 'Omelette Paratha Roll', price: 450, img: imgRoll },
      { id: 'r4', name: 'Kabab Paratha Roll', price: 450, img: imgRoll },
      { id: 'r5', name: 'Chicken Paratha Roll', price: 399, img: imgRoll },
      { id: 'r6', name: 'Tikka Shawarma', price: 399, img: imgRoll },
      { id: 'r7', name: 'Zinger Shawarma Large', price: 299, img: imgRoll },
      { id: 'r8', name: 'Zinger Shawarma Small', price: 220, img: imgRoll },
      { id: 'r9', name: 'Omelette Shawarma', price: 250, img: imgRoll },
      { id: 'r10', name: 'Chicken Shawarma Large', price: 199, img: imgRoll },
      { id: 'r11', name: 'Chicken Shawarma Small', price: 150, img: imgRoll }
    ]
  },
  {
    category: "🥪 Sandwiches",
    items:[
      { id: 'sw1', name: 'Super Crunch Sandwich', price: 899, img: imgSandwich },
      { id: 'sw2', name: 'Pizza Sandwich', price: 750, img: imgSandwich },
      { id: 'sw3', name: 'Zinger Sandwich', price: 599, img: imgSandwich },
      { id: 'sw4', name: 'MH Special Sandwich', price: 599, img: imgSandwich },
      { id: 'sw5', name: 'Barbeque Grill Sandwich', price: 599, img: imgSandwich },
      { id: 'sw6', name: 'Smoke Sandwich', price: 550, img: imgSandwich },
      { id: 'sw7', name: 'Chicken Cheese Sandwich', price: 499, img: imgSandwich },
      { id: 'sw8', name: 'Tikka Sandwich', price: 499, img: imgSandwich },
      { id: 'sw9', name: 'Grill Sandwich', price: 499, img: imgSandwich },
      { id: 'sw10', name: 'Club Sandwich', price: 450, img: imgSandwich }
    ]
  },
  {
    category: "🍟 Fried Items",
    items:[
      { id: 'f1', name: 'Pizza Fries', prices: { S: 599, L: 999 }, img: imgFries },
      { id: 'f2', name: 'Chicken Cheese Fries', prices: { S: 399, L: 599 }, img: imgFries },
      { id: 'f3', name: 'Cheese Mayo Fries', prices: { S: 399, L: 599 }, img: imgFries },
      { id: 'f4', name: 'Loaded Mayo Fries', prices: { S: 399, L: 599 }, img: imgFries },
      { id: 'f5', name: 'Garlic Mayo Fries', prices: { S: 299, L: 499 }, img: imgFries },
      { id: 'f6', name: 'Masala Fries', prices: { S: 299, L: 499 }, img: imgFries },
      { id: 'f7', name: 'Plain Fries', prices: { S: 199, L: 350 }, img: imgFries }
    ]
  },
  {
    category: "🍗 Appetizers",
    items:[
      { id: 'a1', name: 'Nuggets', prices: { Half: 399, Full: 699 }, img: imgAppetizer },
      { id: 'a2', name: 'Perry Perry Wings', prices: { Half: 399, Full: 699 }, img: imgAppetizer },
      { id: 'a3', name: 'Hot Wings Fried', prices: { Half: 350, Full: 599 }, img: imgAppetizer },
      { id: 'a4', name: 'Hot Shots', prices: { Half: 299, Full: 599 }, img: imgAppetizer }
    ]
  },
  {
    category: "🍝 Oven Bake Pasta",
    items:[
      { id: 'pa1', name: 'MH Special Pasta', prices: { S: 599, L: 999 }, img: imgPasta },
      { id: 'pa2', name: 'Crunchy Pasta', prices: { S: 499, L: 799 }, img: imgPasta },
      { id: 'pa3', name: 'Creamy Pasta', prices: { S: 399, L: 699 }, img: imgPasta }
    ]
  },
  {
    category: "🍕 Pizza & Special Pizzas",
    items:[
      { id: 'sp1', name: 'MH Special Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: imgPizza },
      { id: 'sp5', name: 'Crown Crust Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: imgPizza },
      { id: 'p2', name: 'Chicken Fajita', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: imgPizza },
      { id: 'p3', name: 'Chicken Tikka', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: imgPizza }
    ]
  }
];

const DEALS =[
  { id: 'd1', name: 'Deal 1', price: 430, items: ['1 Small Pizza', '1 (345 ml) Drink'], img: imgDeal },
  { id: 'd3', name: 'Deal 3', price: 1250, items:['1 Medium Pizza', '5 Pcs Wings', '1 L Drink'], img: imgDeal },
  { id: 'd7', name: 'Deal 7', price: 1699, items:['2 Zinger Burger', '10 Pcs Wings', '1 Fries', '1.5 L Drink'], img: imgDeal },
  { id: 'd9', name: 'Family Deal', price: 3999, items:['2 XL Pizza', '2 Fries', '1.5 L Drink'], img: imgDeal },
  { id: 'd10', name: 'Student Deal', price: 2499, items:['1 Large Pizza', '10 Pcs Wings', '2 Fries', '1.5 L Drink'], img: imgDeal }
];

document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById('full-menu-grid');
  const dealsGrid = document.getElementById('deals-menu-grid');
  const topItemsGrid = document.getElementById('top-items-grid');

  function createFoodCardHTML(item) {
    if (!item) return "";
    
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
          <div class="card-img-wrap"><img src="${item.img}" class="card-img"></div>
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
          <div class="card-img-wrap"><img src="${item.img}" class="card-img"></div>
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

  // 1. Render Top Items
  if (topItemsGrid) {
    const topItemsData = [
      FULL_MENU[0].items.find(i => i.id === 'b5'),
      FULL_MENU[6].items.find(i => i.id === 'sp1'),
      FULL_MENU[3].items.find(i => i.id === 'f1')
    ].filter(Boolean); 

    let topHtml = "";
    topItemsData.forEach(item => topHtml += createFoodCardHTML(item));
    topItemsGrid.innerHTML = topHtml;
  }

  // 2. Render Full Menu
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

  // 3. Render Deals (Now With Images!)
  if (dealsGrid) {
    let html = "";
    DEALS.forEach(deal => {
      let itemsList = deal.items.map(i => `<li>${i}</li>`).join('');
      html += `
        <div class="deal-card anim-fade-up food-card" style="padding:0; text-align:left;">
          <div class="card-img-wrap"><img src="${deal.img}" class="card-img"></div>
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

  setTimeout(() => {
    if (typeof window.initScrollAnimations === 'function') {
      window.initScrollAnimations();
    }
  }, 100);
});