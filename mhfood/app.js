/* ============================================================
   MH Foods — app.js (Centered Expanding Burger, Cart Logic)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  injectCartUI();
  initCartState();
  initCenteredBurgerExpand();
  
  // Trigger animations for static elements
  if (typeof window.initScrollAnimations === 'function') {
    window.initScrollAnimations();
  }
});

// 1. Inject Cart Drawer dynamically
function injectCartUI() {
  const cartHTML = `
    <div class="cart-overlay" id="cart-overlay" onclick="toggleCartDrawer()"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-header">
        <h2>Your Order</h2>
        <span class="close-cart" onclick="toggleCartDrawer()">&times;</span>
      </div>
      <div class="cart-body" id="cart-items-container"></div>
      <div class="cart-footer">
        <div class="cart-total"><span>Total</span><span id="cart-total-price">Rs. 0</span></div>
        <form class="checkout-form" id="checkout-form" onsubmit="processCheckout(event)">
          <input type="text" id="c-name" placeholder="Full Name" required />
          <input type="tel" id="c-phone" placeholder="Phone Number" required />
          <textarea id="c-address" placeholder="Delivery Address" rows="2" required></textarea>
          <button type="submit" class="btn btn-primary" style="width:100%;">Checkout via WhatsApp</button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', cartHTML);
}

// 2. Centered Expanding Burger Effect (First Frame & Last Frame Crossfade)
function initCenteredBurgerExpand() {
  const burgerContainer = document.getElementById('hero-burger-container');
  const baseImg = document.getElementById('burger-base');
  const zoomImg = document.getElementById('burger-zoom');
  const wrapper = document.querySelector('.burger-hero-container');
  const textContent = document.querySelector('.hero-content');
  
  if (!burgerContainer || !wrapper) return;

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      let rect = wrapper.getBoundingClientRect();
      
      // If the scroll area is active
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        
        // Progress goes from 0.0 (top) to 1.0 (bottom)
        let progress = Math.abs(rect.top) / (rect.height - window.innerHeight);
        
        // Cap progress at exactly 1 so it doesn't overshoot
        if (progress > 1) progress = 1;

        // 1. SCALING 
        // We changed 6 to 2.5 so the image doesn't get so massive that it falls off screen.
        // If you want it slightly bigger/smaller, change 2.5 to 3 or 2.
        let scaleValue = 1 + (progress * 2.5);
        burgerContainer.style.transform = `translate(-50%, -35%) scale(${scaleValue})`;
        
        // 2. FADE OUT TEXT
        if(textContent) textContent.style.opacity = 1 - (progress * 3);

        // 3. PERFECT CROSSFADE
        // As you scroll down, base image fades out exactly as last frame fades in.
        // At progress = 1 (bottom), base is 0% and last frame is 100% visible.
        if(zoomImg) zoomImg.style.opacity = progress;
        if(baseImg) baseImg.style.opacity = 1 - progress;

      } 
      // Reset if scrolled all the way back to the top
      else if (rect.top > 0) {
        burgerContainer.style.transform = `translate(-50%, -35%) scale(1)`;
        if(textContent) textContent.style.opacity = 1;
        if(zoomImg) zoomImg.style.opacity = 0;
        if(baseImg) baseImg.style.opacity = 1;
      }
    });
  });
}


// 3. Scroll Intersection Animations (Made Global)
window.initScrollAnimations = function() {
  const animElements = document.querySelectorAll('.anim-fade-up:not(.active)');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.1 });
  
  animElements.forEach(el => observer.observe(el));
};

// 4. Global Cart Logic
let currentCart =[];

function initCartState() {
  try {
    const saved = localStorage.getItem('mh_cart');
    if (saved) currentCart = JSON.parse(saved);
  } catch(e) {
    currentCart =[];
  }
  renderCart();
}

function saveCart() {
  localStorage.setItem('mh_cart', JSON.stringify(currentCart));
  renderCart();
}

window.addToCart = function(id, name, price, size = '', btnElement = null) {
  const existing = currentCart.find(i => i.id === id && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    currentCart.push({ id, name, price, size, qty: 1 });
  }
  
  if (btnElement) {
    const originalText = btnElement.innerText;
    btnElement.innerText = "✔ Added";
    setTimeout(() => btnElement.innerText = originalText, 1000);
  }

  saveCart();
  toggleCartDrawer(true);
};

window.updateQty = function(index, delta) {
  currentCart[index].qty += delta;
  if (currentCart[index].qty <= 0) currentCart.splice(index, 1);
  saveCart();
};

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const badge = document.getElementById('global-cart-badge');
  const totalEl = document.getElementById('cart-total-price');
  
  if (!container) return; 

  let totalQty = 0, totalPrice = 0;
  container.innerHTML = '';

  if (currentCart.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:#777; margin-top:50px;">Your cart is empty.</div>`;
  } else {
    currentCart.forEach((item, i) => {
      totalQty += item.qty;
      totalPrice += (item.price * item.qty);
      const sizeLabel = item.size ? `<span style="font-size:0.8rem; color:#aaa; display:block;">Size: ${item.size}</span>` : '';
      
      container.innerHTML += `
        <div class="cart-item">
          <div>
            <div style="font-weight:700; font-size:1rem; color:#fff;">${item.name}</div>
            ${sizeLabel}
            <div style="color:var(--gold); font-weight:700; margin-top:3px;">Rs. ${item.price}</div>
          </div>
          <div style="display:flex; align-items:center; gap:10px; background:#000; padding:4px 8px; border-radius:8px; border:1px solid #333;">
            <button type="button" onclick="updateQty(${i}, -1)" style="color:var(--gold); font-size:1.1rem;">-</button>
            <span style="color:#fff; font-weight:bold;">${item.qty}</span>
            <button type="button" onclick="updateQty(${i}, 1)" style="color:var(--gold); font-size:1.1rem;">+</button>
          </div>
        </div>
      `;
    });
  }

  if (badge) badge.textContent = totalQty;
  if (totalEl) totalEl.textContent = `Rs. ${totalPrice.toLocaleString()}`;
}

window.toggleCartDrawer = function(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (forceOpen || !drawer.classList.contains('open')) {
    drawer.classList.add('open'); 
    overlay.classList.add('open');
  } else {
    drawer.classList.remove('open'); 
    overlay.classList.remove('open');
  }
};

window.processCheckout = function(e) {
  e.preventDefault();
  if (currentCart.length === 0) return alert("Your cart is empty!");
  
  const name = document.getElementById('c-name').value;
  const phone = document.getElementById('c-phone').value;
  const address = document.getElementById('c-address').value;
  
  let total = 0;
  let text = `*New Order - MH Foods*%0A%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${address}%0A%0A*Order:*%0A`;
  
  currentCart.forEach(i => {
    text += `- ${i.qty}x ${i.name} ${i.size ? '('+i.size+')' : ''} = Rs. ${i.price * i.qty}%0A`;
    total += (i.price * i.qty);
  });
  
  text += `%0A*Total Payment: Rs. ${total}*%0A_Payment Options: Bank Transfer / Easypaisa / JazzCash / COD_`;
  
  currentCart =[];
  saveCart();
  toggleCartDrawer();

  window.open(`https://wa.me/923058894159?text=${text}`, '_blank');
};