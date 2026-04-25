/* ============================================================
   MH Foods — menu-data.js (Complete Menu Items & Deals)
   ============================================================ */

// Image placehoder links per category
const IMG_BURGER = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80';
const IMG_PIZZA = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80';
const IMG_SANDWICH = 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80';
const IMG_ROLLS = 'https://images.unsplash.com/photo-1626200419188-f56110609b5e?w=600&q=80';
const IMG_PASTA = 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80';
const IMG_FRIES = 'https://images.unsplash.com/photo-1576107249156-f54f76239401?w=600&q=80';
const IMG_WINGS = 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80';
const IMG_DRINKS = 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80';

const MH_DEALS =[
  { id: 'd1', name: 'Deal 1', label: 'Solo Slice', img: IMG_PIZZA, items:['1 Small Pizza', '345ml Drink'], price: 430 },
  { id: 'd2', name: 'Deal 2', label: 'Zinger Bite', img: IMG_BURGER, items: ['1 Zinger Burger', '345ml Drink'], price: 430 },
  { id: 'd3', name: 'Deal 3', label: 'Medium Crave', img: IMG_WINGS, items:['1 Medium Pizza', '5 Pcs Wings', '1L Drink'], price: 1250 },
  { id: 'd4', name: 'Deal 4', label: 'Special Crave', img: IMG_PIZZA, items:['1 Spl Medium Pizza', '5 Pcs Hot Shots', '1L Drink'], price: 1450 },
  { id: 'd5', name: 'Deal 5', label: 'Large Feast', img: IMG_PIZZA, items:['1 Large Pizza', '1L Drink'], price: 1350 },
  { id: 'd6', name: 'Deal 6', label: 'Special Feast', img: IMG_PIZZA, items:['1 Special Large Pizza', '1L Drink'], price: 1650, highlight: true },
  { id: 'd7', name: 'Deal 7', label: 'Burger Feast', img: IMG_BURGER, items:['2 Zinger Burgers', '10 Pcs Wings', '1 Fries', '1.5L Drink'], price: 1699 },
  { id: 'd8', name: 'Deal 8', label: 'Birthday Deal', img: IMG_PIZZA, items:['2 Pound Cake', '1 XL Pizza', '2 Fries', '1.5L Drink'], price: 3199, highlight: true },
  { id: 'd9', name: 'Deal 9', label: 'Family Deal', img: IMG_PIZZA, items:['2 XL Pizza', '2 Fries', '1.5L Drink'], price: 3999, highlight: true },
  { id: 'd10', name: 'Deal 10', label: 'Student Deal', img: IMG_WINGS, items:['1 Large Pizza', '10 Pcs Wings', '2 Fries', '1.5L Drink'], price: 2499 }
];

const MH_MENU = {
  burgers:[
    { id: 'b1', name: 'Grill Burger', price: 499, img: IMG_BURGER },
    { id: 'b2', name: 'Tower Burger', price: 499, img: IMG_BURGER },
    { id: 'b3', name: 'Double Decker Burger', price: 499, img: IMG_BURGER },
    { id: 'b4', name: 'Zinger Cheese Burger', price: 450, img: IMG_BURGER },
    { id: 'b5', name: 'Zinger Burger', price: 380, img: IMG_BURGER },
    { id: 'b6', name: 'Chicken Burger', price: 299, img: IMG_BURGER },
    { id: 'b7', name: 'Chicken Shami Burger', price: 299, img: IMG_BURGER },
    { id: 'b8', name: 'Patty Burger', price: 299, img: IMG_BURGER },
    { id: 'b9', name: 'Chapli Burger', price: 299, img: IMG_BURGER },
    { id: 'b10', name: 'Double Anda Burger', price: 230, img: IMG_BURGER },
    { id: 'b11', name: 'Shami Burger', price: 180, img: IMG_BURGER }
  ],
  rolls:[
    { id: 'r1', name: 'Shawarma Platter', price: 499, img: IMG_ROLLS },
    { id: 'r2', name: 'Zinger Paratha Roll', price: 450, img: IMG_ROLLS },
    { id: 'r3', name: 'Omelette Paratha Roll', price: 450, img: IMG_ROLLS },
    { id: 'r4', name: 'Kabab Paratha Roll', price: 450, img: IMG_ROLLS },
    { id: 'r5', name: 'Chicken Paratha Roll', price: 399, img: IMG_ROLLS },
    { id: 'r6', name: 'Tikka Shawarma', price: 299, img: IMG_ROLLS },
    { id: 'r7', name: 'Zinger Shawarma Large', price: 299, img: IMG_ROLLS },
    { id: 'r8', name: 'Omelette Shawarma', price: 250, img: IMG_ROLLS },
    { id: 'r9', name: 'Zinger Shawarma Small', price: 220, img: IMG_ROLLS },
    { id: 'r10', name: 'Chicken Shawarma Large', price: 199, img: IMG_ROLLS },
    { id: 'r11', name: 'Chicken Shawarma Small', price: 150, img: IMG_ROLLS }
  ],
  sandwiches:[
    { id: 'sd1', name: 'Super Crunch Sandwich', price: 899, img: IMG_SANDWICH },
    { id: 'sd2', name: 'Pizza Sandwich', price: 750, img: IMG_SANDWICH },
    { id: 'sd3', name: 'Zinger Sandwich', price: 599, img: IMG_SANDWICH },
    { id: 'sd4', name: 'MH Special Sandwich', price: 599, img: IMG_SANDWICH },
    { id: 'sd5', name: 'Barbeque Grill Sandwich', price: 550, img: IMG_SANDWICH },
    { id: 'sd6', name: 'Smoke Sandwich', price: 550, img: IMG_SANDWICH },
    { id: 'sd7', name: 'Chicken Cheese Sandwich', price: 499, img: IMG_SANDWICH },
    { id: 'sd8', name: 'Tikka Sandwich', price: 499, img: IMG_SANDWICH },
    { id: 'sd9', name: 'Grill Sandwich', price: 499, img: IMG_SANDWICH },
    { id: 'sd10', name: 'Club Sandwich', price: 450, img: IMG_SANDWICH }
  ],
  appetizers:[
    { id: 'ap1', name: 'Nuggets', prices: { Reg: 399, Large: 699 }, img: IMG_WINGS },
    { id: 'ap2', name: 'Perry Perry Wings', prices: { Reg: 399, Large: 699 }, img: IMG_WINGS },
    { id: 'ap3', name: 'Hot Wings Fried', prices: { Reg: 350, Large: 599 }, img: IMG_WINGS },
    { id: 'ap4', name: 'Hot Shots', prices: { Reg: 299, Large: 550 }, img: IMG_WINGS }
  ],
  pasta:[
    { id: 'ps1', name: 'MH Special Pasta', prices: { S: 599, L: 999 }, img: IMG_PASTA },
    { id: 'ps2', name: 'Crunchy Pasta', prices: { S: 499, L: 799 }, img: IMG_PASTA },
    { id: 'ps3', name: 'Creamy Pasta', prices: { S: 399, L: 699 }, img: IMG_PASTA }
  ],
  fries:[
    { id: 'f1', name: 'Pizza Fries', prices: { S: 599, L: 999 }, img: IMG_FRIES },
    { id: 'f2', name: 'Chicken Cheese Fries', prices: { S: 399, L: 599 }, img: IMG_FRIES },
    { id: 'f3', name: 'Cheese Mayo Fries', prices: { S: 399, L: 599 }, img: IMG_FRIES },
    { id: 'f4', name: 'Loaded Mayo Fries', prices: { S: 299, L: 499 }, img: IMG_FRIES },
    { id: 'f5', name: 'Garlic Mayo Fries', prices: { S: 299, L: 499 }, img: IMG_FRIES },
    { id: 'f6', name: 'Masala Fries', prices: { S: 199, L: 350 }, img: IMG_FRIES },
    { id: 'f7', name: 'Plain Fries', prices: { S: 150, L: 250 }, img: IMG_FRIES }
  ],
  pizza_regular:[
    { id: 'pr1', name: 'Hot And Spicy Pizza', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: IMG_PIZZA },
    { id: 'pr2', name: 'Chicken Fajita', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: IMG_PIZZA },
    { id: 'pr3', name: 'Chicken Tikka', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: IMG_PIZZA },
    { id: 'pr4', name: 'Peri Peri Pizza', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: IMG_PIZZA },
    { id: 'pr5', name: 'Cheese Lover', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: IMG_PIZZA },
    { id: 'pr6', name: 'Veggie Lover', prices: { S: 399, M: 799, L: 1299, XL: 1750 }, img: IMG_PIZZA }
  ],
  pizza_special:[
    { id: 'sp1', name: 'MH Special Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp2', name: 'Lazania Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp3', name: 'Bihari Kabab', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp4', name: 'Malai Boti', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp5', name: 'Crown Crust Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp6', name: 'Four Season Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp7', name: 'Special Kabab', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp8', name: 'Kabab Bite Pizza', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp9', name: 'Barbeque Grill Lasagna', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp10', name: 'Kabab Stuffer', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA },
    { id: 'sp11', name: 'Chicken Supreme', prices: { S: 599, M: 1099, L: 1599, XL: 2250 }, img: IMG_PIZZA }
  ],
  drinks:[
    { id: 'dr1', name: '1.5 L Cold Drink', price: 0, img: IMG_DRINKS },
    { id: 'dr2', name: '1 L Cold Drink', price: 0, img: IMG_DRINKS },
    { id: 'dr3', name: '0.5 L Cold Drink', price: 0, img: IMG_DRINKS },
    { id: 'dr4', name: '345 ML Cold Drink', price: 0, img: IMG_DRINKS },
    { id: 'dr5', name: 'Purified Water', price: 0, img: IMG_DRINKS }
  ]
};

// Render Logic
document.addEventListener("DOMContentLoaded", () => {
  const dealsGrid = document.getElementById('deals-grid');
  if(dealsGrid) {
    dealsGrid.innerHTML = MH_DEALS.map((d, i) => `
      <div class="food-card anim-scale-in delay-${(i%3)+1}" style="${d.highlight ? 'border: 2px solid var(--gold);' : ''}">
        <div class="card-img-wrap"><img src="${d.img}" class="card-img" alt="${d.name}"></div>
        <div class="card-content">
          <h3 class="card-title">${d.name} <small style="font-size:0.8rem; color:#fff;">(${d.label})</small></h3>
          <p class="card-desc">${d.items.join(' + ')}</p>
          <div class="card-footer">
            <span class="card-price">Rs. ${d.price}</span>
            <button class="btn btn-primary btn-sm" onclick="addToCart('${d.id}', '${d.name}', ${d.price}, '', this)">Order</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const menuGrid = document.getElementById('full-menu-grid');
  if(menuGrid) {
    let menuHTML = '';
    
    // 1. Regular Pizzas (Sized)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🍕 Regular Pizzas</h2>`;
    menuHTML += MH_MENU.pizza_regular.map((p,i) => generateSizedCard(p, i)).join('');

    // 2. Special Pizzas (Sized)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🌟 Special Pizzas</h2>`;
    menuHTML += MH_MENU.pizza_special.map((p,i) => generateSizedCard(p, i)).join('');

    // 3. Burgers (Flat)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🍔 Burgers</h2>`;
    menuHTML += MH_MENU.burgers.map((b,i) => generateCard(b, i)).join('');
    
    // 4. Sandwiches (Flat)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🥪 Sandwiches</h2>`;
    menuHTML += MH_MENU.sandwiches.map((s,i) => generateCard(s, i)).join('');

    // 5. Rolls (Flat)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🌯 Rolls & Shawarma</h2>`;
    menuHTML += MH_MENU.rolls.map((r,i) => generateCard(r, i)).join('');

    // 6. Fried Items / Fries (Sized)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🍟 Fried Items</h2>`;
    menuHTML += MH_MENU.fries.map((f,i) => generateSizedCard(f, i)).join('');

    // 7. Appetizers (Sized)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🍗 Appetizers</h2>`;
    menuHTML += MH_MENU.appetizers.map((a,i) => generateSizedCard(a, i)).join('');

    // 8. Oven Baked Pasta (Sized)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🍝 Oven Bake Pasta</h2>`;
    menuHTML += MH_MENU.pasta.map((p,i) => generateSizedCard(p, i)).join('');

    // 9. Drinks (Flat)
    menuHTML += `<h2 class="anim-slide-right" style="grid-column:1/-1; margin-top:40px; color:var(--gold);">🥤 Drinks</h2>`;
    menuHTML += MH_MENU.drinks.map((d,i) => generateCard(d, i)).join('');

    menuGrid.innerHTML = menuHTML;
  }

  // Trigger animations after injecting HTML into the DOM
  setTimeout(() => {
    if (typeof window.initScrollAnimations === 'function') {
      window.initScrollAnimations();
    }
  }, 100);
});

function generateCard(item, index) {
  const displayPrice = item.price === 0 ? 'Ask Price' : `Rs. ${item.price}`;
  const descHtml = item.desc ? `<p class="card-desc">${item.desc}</p>` : '';
  
  return `
    <div class="food-card anim-fade-up delay-${(index%3)+1}">
      <div class="card-img-wrap"><img src="${item.img}" class="card-img" alt="${item.name}"></div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        ${descHtml}
        <div class="card-footer" style="margin-top:auto;">
          <span class="card-price">${displayPrice}</span>
          <button class="btn btn-primary btn-sm" onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '', this)">+ Add</button>
        </div>
      </div>
    </div>
  `;
}

function generateSizedCard(item, index) {
  // Grab the first available size from the object (e.g., 'S', 'Reg', 'M')
  const defaultSize = Object.keys(item.prices)[0]; 
  const defaultPrice = item.prices[defaultSize];
  const descHtml = item.desc ? `<p class="card-desc">${item.desc}</p>` : '';
  
  const sizeBtns = Object.keys(item.prices).map(s => 
    `<button type="button" class="size-btn ${s===defaultSize ? 'selected':''}" onclick="selectSize(this, '${item.id}', ${item.prices[s]}, '${s}')">${s}</button>`
  ).join('');

  return `
    <div class="food-card anim-fade-up delay-${(index%3)+1}" id="card-${item.id}">
      <div class="card-img-wrap"><img src="${item.img}" class="card-img" alt="${item.name}"></div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        ${descHtml}
        <div class="size-picker" style="margin-top:auto;">${sizeBtns}</div>
        <div class="card-footer">
          <span class="card-price" id="price-${item.id}">Rs. ${defaultPrice}</span>
          <button class="btn btn-primary btn-sm" id="btn-${item.id}" onclick="addToCart('${item.id}', '${item.name}', ${defaultPrice}, '${defaultSize}', this)">+ Add</button>
        </div>
      </div>
    </div>
  `;
}

window.selectSize = function(btn, id, price, size) {
  const container = btn.parentElement;
  container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById(`price-${id}`).textContent = `Rs. ${price}`;
  document.getElementById(`btn-${id}`).setAttribute('onclick', `addToCart('${id}', '${document.getElementById(`card-${id}`).querySelector('.card-title').innerText}', ${price}, '${size}', this)`);
};