/* ============================================================
   MH Foods — app.js (Animations, Scroll Effects, Cart, Logo)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  injectGlobalUI();
  initCartState();
  initParallaxHero();
  initScrollAnimations();
});

// 1. Inject Header (WITH BRAND LOGO) & Cart Drawer
function injectGlobalUI() {
  const headerHTML = `
    <header class="site-header" id="site-header">
      <a href="index.html" class="logo-wrap">
        
        <!-- ========================================== -->
        <!-- BRAND LOGO: Change 'your-logo.png' below to your actual image file name! -->
        <img src="your-logo.png" alt="MH Food's" style="height: 50px; width: auto; object-fit: contain; border-radius: 50%; border: 2px solid var(--gold);" onerror="this.style.display='none'">
        <!-- ========================================== -->

        <span class="logo-text">MH FOOD's</span>
      </a>
      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="deals.html">Deals</a>
        <a href="about.html">About</a>
      </nav>
      <div class="cart-trigger" onclick="toggleCartDrawer()">
        🛒 Cart <span class="cart-badge" id="global-cart-badge">0</span>
      </div>
    </header>

    <div class="cart-overlay" id="cart-overlay" onclick="toggleCartDrawer()"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-header">
        <h2>Your Order</h2>
        <span class="close-cart" onclick="toggleCartDrawer()">&times;</span>
      </div>
      <div class="cart-body" id="cart-items-container"></div>
      <div class="cart-footer">
        <div style="display:flex; justify-content:space-between; color:var(--text-muted); font-size:0.9rem;">
          <span>Delivery (Sahiwal Only)</span><span class="gold">FREE</span>
        </div>
        <div class="cart-total"><span>Total</span><span id="cart-total-price">Rs. 0</span></div>
        
        <form class="checkout-form" id="checkout-form" onsubmit="processCheckout(event)">
          <input type="text" id="c-name" placeholder="Full Name" required />
          <input type="tel" id="c-phone" placeholder="Phone Number (e.g. 03XX)" required />
          <textarea id="c-address" placeholder="Complete Delivery Address" rows="2" required></textarea>
          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:10px; font-size:1.1rem; padding:15px;">
            Checkout via WhatsApp
          </button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  window.addEventListener('scroll', () => {
    document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// 2. Expand Photo on Scroll (Parallax Effect)
function initParallaxHero() {
  const heroBg = document.querySelector('.hero-bg-img');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if(scrolled < window.innerHeight) {
      heroBg.style.transform = `scale(${1 + scrolled * 0.0005}) translateY(${scrolled * 0.3}px)`;
    }
  });
}

// 3. Scroll Intersection Animations
window.initScrollAnimations = function() {
  const animElements = document.querySelectorAll('.anim-fade-up:not(.active), .anim-slide-right:not(.active), .anim-scale-in:not(.active)');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  animElements.forEach(el => observer.observe(el));
};

// 4. Cart Logic
let currentCart =[];

function initCartState() {
  const saved = localStorage.getItem('mh_cart');
  if(saved) currentCart = JSON.parse(saved);
  renderCart();
}

function saveCart() {
  localStorage.setItem('mh_cart', JSON.stringify(currentCart));
  renderCart();
}

window.addToCart = function(id, name, price, size = '', btnElement = null) {
  const existing = currentCart.find(i => i.id === id && i.size === size);
  if(existing) existing.qty += 1;
  else currentCart.push({ id, name, price, size, qty: 1 });
  
  if(btnElement) {
    btnElement.classList.add('anim-pop');
    btnElement.innerHTML = "✔ Added";
    setTimeout(() => {
      btnElement.classList.remove('anim-pop');
      btnElement.innerHTML = "+ Add";
    }, 1000);
  }
  
  const badge = document.getElementById('global-cart-badge');
  badge.classList.add('anim-pop');
  setTimeout(() => badge.classList.remove('anim-pop'), 300);

  saveCart();
  toggleCartDrawer(true);
};

window.updateQty = function(index, delta) {
  currentCart[index].qty += delta;
  if(currentCart[index].qty <= 0) currentCart.splice(index, 1);
  saveCart();
};

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const badge = document.getElementById('global-cart-badge');
  const totalEl = document.getElementById('cart-total-price');
  
  let totalQty = 0, totalPrice = 0;
  container.innerHTML = '';

  if(currentCart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; color:var(--text-dim); margin-top:50px;">
        <span style="font-size:3rem; display:block; margin-bottom:10px;">🛒</span>
        Your cart is hungry.
      </div>`;
  } else {
    currentCart.forEach((item, i) => {
      totalQty += item.qty;
      totalPrice += (item.price * item.qty);
      const sizeLabel = item.size ? `<span style="font-size:0.75rem;color:var(--text-dim);display:block;">Size: ${item.size}</span>` : '';
      
      container.innerHTML += `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${item.name}</div>
            ${sizeLabel}
            <div class="cart-item-price">Rs. ${item.price}</div>
          </div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" onclick="updateQty(${i}, -1)">-</button>
            <span style="font-weight:700; color:#fff;">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="updateQty(${i}, 1)">+</button>
          </div>
        </div>
      `;
    });
  }

  badge.textContent = totalQty;
  totalEl.textContent = `Rs. ${totalPrice.toLocaleString()}`;
}

window.toggleCartDrawer = function(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if(forceOpen || !drawer.classList.contains('open')) {
    drawer.classList.add('open'); overlay.classList.add('open');
  } else {
    drawer.classList.remove('open'); overlay.classList.remove('open');
  }
};

window.processCheckout = function(e) {
  e.preventDefault();
  if(currentCart.length === 0) return alert("Your cart is empty!");
  
  const name = document.getElementById('c-name').value;
  const phone = document.getElementById('c-phone').value;
  const address = document.getElementById('c-address').value;
  
  let total = 0;
  let text = `*New Order - MH Foods*%0A%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${address}%0A%0A*Order:*%0A`;
  
  currentCart.forEach(i => {
    text += `- ${i.qty}x ${i.name} ${i.size ? '('+i.size+')' : ''} = Rs. ${i.price * i.qty}%0A`;
    total += (i.price * i.qty);
  });
  
  text += `%0A*Total to Pay: Rs. ${total}*%0A_Free Delivery in Sahiwal_`;
  window.open(`https://wa.me/923058894159?text=${text}`, '_blank');
  
  currentCart =[]; saveCart(); toggleCartDrawer();
};