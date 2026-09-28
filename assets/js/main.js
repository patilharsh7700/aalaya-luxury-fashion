/**
 * AALAYA LUXE - Core E-Commerce & Interactive Logic
 * Cart, Wishlist, Quick View, Size Guide, Live Search & Header State
 */

// State Management
const AalayaStore = {
  cart: JSON.parse(localStorage.getItem('aalaya_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('aalaya_wishlist') || '[]'),
  freeShippingThreshold: 50000, // INR 50,000 for free express courier
  activePromo: null,

  saveCart() {
    localStorage.setItem('aalaya_cart', JSON.stringify(this.cart));
    this.updateCartBadges();
    this.renderCartDrawer();
  },

  saveWishlist() {
    localStorage.setItem('aalaya_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
  },

  addToCart(productId, size = null, color = null, quantity = 1) {
    const product = AALAYA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    const chosenColor = color || (product.colors && product.colors[0]?.name) || 'Original';

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        category: product.category,
        size: chosenSize,
        color: chosenColor,
        quantity: quantity
      });
    }

    this.saveCart();
    this.openCartDrawer();
    showAalayaToast(`Added "${product.name}" to your shopping bag.`);
  },

  removeFromCart(index) {
    const item = this.cart[index];
    this.cart.splice(index, 1);
    this.saveCart();
    if (item) showAalayaToast(`Removed "${item.name}" from your bag.`);
  },

  updateQuantity(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.removeFromCart(index);
    } else {
      this.saveCart();
    }
  },

  toggleWishlist(productId) {
    const product = AALAYA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showAalayaToast(`Removed from your wishlist.`);
    } else {
      this.wishlist.push(productId);
      showAalayaToast(`Saved "${product.name}" to your wishlist.`);
    }

    this.saveWishlist();
    this.syncWishlistButtons();
  },

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  },

  updateCartBadges() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = totalItems;
      el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
  },

  updateWishlistBadges() {
    const totalWish = this.wishlist.length;
    document.querySelectorAll('.wishlist-badge-count').forEach(el => {
      el.textContent = totalWish;
      el.style.display = totalWish > 0 ? 'flex' : 'none';
    });
  },

  syncWishlistButtons() {
    document.querySelectorAll('.btn-wishlist-heart').forEach(btn => {
      const pid = btn.getAttribute('data-product-id');
      if (this.isInWishlist(pid)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    });
  },

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  renderCartDrawer() {
    const container = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotalAmount');
    const totalEl = document.getElementById('cartTotalAmount');
    const progressFill = document.getElementById('shippingProgressFill');
    const progressText = document.getElementById('shippingProgressText');

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem;">
          <i class="fa-solid fa-bag-shopping" style="font-size: 2.8rem; color: #d0c4b6; margin-bottom: 1rem;"></i>
          <h4 style="font-family: var(--font-serif-display); font-size: 1.5rem; margin-bottom: 0.5rem;">Your Shopping Bag Is Empty</h4>
          <p style="font-size: 0.85rem; color: #777; margin-bottom: 1.5rem;">Discover our latest handloom sarees, designer lehengas, and pret silhouettes.</p>
          <a href="shop.html" class="btn-luxury-primary" onclick="AalayaStore.closeCartDrawer()"><span>Explore Collections</span></a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '₹0';
      if (totalEl) totalEl.textContent = '₹0';
      if (progressFill) progressFill.style.width = '0%';
      if (progressText) progressText.innerHTML = 'Add items worth <strong>₹50,000</strong> for complimentary Pan-India Express Delivery.';
      return;
    }

    const subtotal = this.getCartSubtotal();
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    // Free shipping calculation
    if (progressFill && progressText) {
      const remaining = this.freeShippingThreshold - subtotal;
      if (remaining <= 0) {
        progressFill.style.width = '100%';
        progressText.innerHTML = '<span style="color:#2a7538;"><i class="fa-solid fa-circle-check"></i> Congratulations! You unlocked Complimentary Express Delivery!</span>';
      } else {
        const percent = Math.min(100, Math.round((subtotal / this.freeShippingThreshold) * 100));
        progressFill.style.width = `${percent}%`;
        progressText.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more for Complimentary Pan-India Delivery.`;
      }
    }

    // Render items
    container.innerHTML = this.cart.map((item, index) => `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <div class="cart-item-variants">Size: ${item.size} | Color: ${item.color}</div>
          <div class="cart-qty-control">
            <button class="qty-btn" onclick="AalayaStore.updateQuantity(${index}, -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="AalayaStore.updateQuantity(${index}, 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <div class="cart-item-price-side">
          <span class="price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          <button class="btn-remove-item" onclick="AalayaStore.removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `).join('');
  }
};

// Global Toast Notification
function showAalayaToast(message, icon = 'fa-solid fa-sparkles') {
  let toast = document.getElementById('aalayaToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'aalayaToast';
    toast.className = 'aalaya-toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--aalaya-gold);"></i> <span>${message}</span>`;
  toast.classList.add('active');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 3400);
}

// Product Card HTML Builder
function createProductCardHTML(product) {
  const isWish = AalayaStore.isInWishlist(product.id);
  const colorDots = product.colors.map(c =>
    `<span class="swatch-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`
  ).join('');

  return `
    <div class="product-card-luxury" data-product-id="${product.id}" data-category="${product.category}">
      <div class="product-image-container">
        <span class="product-badge-pill ${product.badge.includes('Masterpiece') || product.badge.includes('Couture') ? 'gold' : ''}">${product.badge}</span>
        
        <button class="btn-wishlist-heart ${isWish ? 'active' : ''}" data-product-id="${product.id}" onclick="AalayaStore.toggleWishlist('${product.id}')" aria-label="Add to wishlist">
          <i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <a href="product-details.html?id=${product.id}">
          <img class="product-main-img" src="${product.images[0]}" alt="${product.name}" loading="lazy">
          <img class="product-hover-img" src="${product.images[1] || product.images[0]}" alt="${product.name}" loading="lazy">
        </a>

        <div class="product-card-hover-actions">
          <button class="btn-card-action" onclick="openQuickViewModal('${product.id}')">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
          <button class="btn-card-action btn-quick-add" onclick="AalayaStore.addToCart('${product.id}')">
            <i class="fa-solid fa-bag-shopping"></i> Add to Bag
          </button>
        </div>
      </div>

      <div class="product-info-block">
        <span class="product-category-crumb">${product.subCategory || product.category}</span>
        <a href="product-details.html?id=${product.id}" class="product-title-link">${product.name}</a>
        <div class="product-tagline-preview">${product.tagline}</div>
        <div class="product-price-row">
          <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="price-discount-tag">${product.discount}</span>
        </div>
        <div class="product-swatches">${colorDots}</div>
      </div>
    </div>
  `;
}

// Quick View Modal
function openQuickViewModal(productId) {
  const product = AALAYA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'aalaya-modal-backdrop';
    document.body.appendChild(modal);
  }

  const sizesHTML = product.sizes.map((s, i) => `
    <button class="size-chip-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize(this)">${s}</button>
  `).join('');

  modal.innerHTML = `
    <div class="aalaya-modal-content" style="max-width: 900px; padding: 2rem;">
      <button class="modal-close-corner" onclick="closeQuickViewModal()"><i class="fa-solid fa-xmark"></i></button>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <div>
          <div style="aspect-ratio: 3/4; overflow: hidden; margin-bottom: 1rem; background:#f5f0eb;">
            <img id="modalMainImg" src="${product.images[0]}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="display: flex; gap: 8px;">
            ${product.images.map((img, i) => `
              <div onclick="document.getElementById('modalMainImg').src='${img}'" style="width: 60px; aspect-ratio: 1; overflow:hidden; cursor:pointer; border: 1px solid #ddd;">
                <img src="${img}" style="width:100%; height:100%; object-fit:cover;">
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <span class="eyebrow">${product.collection}</span>
          <h2 style="font-size: 1.85rem; margin: 0.5rem 0;">${product.name}</h2>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 1rem;">
            <span style="color: var(--aalaya-gold);"><i class="fa-solid fa-star"></i> ${product.rating}</span>
            <span style="color:#777; font-size: 0.8rem;">(${product.reviewsCount} Couture Reviews)</span>
          </div>
          <div class="product-price-row" style="margin-bottom: 1.25rem;">
            <span class="price-current" style="font-size: 1.35rem;">₹${product.price.toLocaleString('en-IN')}</span>
            <span class="price-original" style="font-size: 1.1rem;">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            <span class="price-discount-tag">${product.discount}</span>
          </div>
          <p style="font-size: 0.9rem; margin-bottom: 1.5rem; color:#555;">${product.description}</p>
          
          <div style="margin-bottom: 1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size: 0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Select Size</span>
              <span class="btn-open-size-guide" onclick="openSizeGuideModal()">Size Guide</span>
            </div>
            <div class="size-selector-grid" id="modalSizeContainer">
              ${sizesHTML}
            </div>
          </div>

          <div style="display: flex; gap: 12px; margin-top: 2rem;">
            <button class="btn-luxury-primary" style="flex: 1;" onclick="handleModalAddToCart('${product.id}')">
              <span>Add to Bag</span>
            </button>
            <a href="product-details.html?id=${product.id}" class="btn-luxury-outline">
              Full Details
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectModalSize(btn) {
  const container = document.getElementById('modalSizeContainer');
  if (container) {
    container.querySelectorAll('.size-chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function handleModalAddToCart(productId) {
  const activeSizeBtn = document.querySelector('#modalSizeContainer .size-chip-btn.active');
  const size = activeSizeBtn ? activeSizeBtn.textContent.trim() : null;
  AalayaStore.addToCart(productId, size);
  closeQuickViewModal();
}

function closeQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Size Guide Modal
function openSizeGuideModal() {
  let modal = document.getElementById('sizeGuideModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'sizeGuideModal';
    modal.className = 'aalaya-modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="aalaya-modal-content" style="max-width: 760px; padding: 2.5rem;">
      <button class="modal-close-corner" onclick="closeSizeGuideModal()"><i class="fa-solid fa-xmark"></i></button>
      <span class="eyebrow">AALAYA ATELIER</span>
      <h2 style="font-size: 2rem; margin: 0.5rem 0 1rem;">Women's Couture Size Guide</h2>
      <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.5rem;">All our garments are cut with bespoke Indian royal proportions and ease allowances for maximum elegance and comfort.</p>

      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left;">
          <thead>
            <tr style="background: var(--aalaya-charcoal); color: #fff;">
              <th style="padding: 10px 14px;">Size</th>
              <th style="padding: 10px 14px;">Bust (Inches)</th>
              <th style="padding: 10px 14px;">Waist (Inches)</th>
              <th style="padding: 10px 14px;">Hip (Inches)</th>
              <th style="padding: 10px 14px;">UK / AU</th>
              <th style="padding: 10px 14px;">US</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px 14px; font-weight:700;">XS</td><td style="padding: 10px 14px;">32 - 33</td><td style="padding: 10px 14px;">25 - 26</td><td style="padding: 10px 14px;">35 - 36</td><td style="padding: 10px 14px;">6</td><td style="padding: 10px 14px;">2</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px 14px; font-weight:700;">S</td><td style="padding: 10px 14px;">34 - 35</td><td style="padding: 10px 14px;">27 - 28</td><td style="padding: 10px 14px;">37 - 38</td><td style="padding: 10px 14px;">8</td><td style="padding: 10px 14px;">4</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px 14px; font-weight:700;">M</td><td style="padding: 10px 14px;">36 - 37</td><td style="padding: 10px 14px;">29 - 30</td><td style="padding: 10px 14px;">39 - 40</td><td style="padding: 10px 14px;">10</td><td style="padding: 10px 14px;">6</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px 14px; font-weight:700;">L</td><td style="padding: 10px 14px;">38 - 40</td><td style="padding: 10px 14px;">31 - 33</td><td style="padding: 10px 14px;">41 - 43</td><td style="padding: 10px 14px;">12</td><td style="padding: 10px 14px;">8</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px 14px; font-weight:700;">XL</td><td style="padding: 10px 14px;">41 - 43</td><td style="padding: 10px 14px;">34 - 36</td><td style="padding: 10px 14px;">44 - 46</td><td style="padding: 10px 14px;">14</td><td style="padding: 10px 14px;">10</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px 14px; font-weight:700;">XXL</td><td style="padding: 10px 14px;">44 - 46</td><td style="padding: 10px 14px;">37 - 39</td><td style="padding: 10px 14px;">47 - 49</td><td style="padding: 10px 14px;">16</td><td style="padding: 10px 14px;">12</td></tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top: 1.5rem; padding: 1rem; background: var(--aalaya-ivory); font-size: 0.8rem; border-left: 3px solid var(--aalaya-gold);">
        <strong>Bespoke Couture Fitting:</strong> We offer custom tailoring for all bridal lehengas, sarees, and suits. Connect with our private styling concierge for personalized measurements.
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Live Search Overlay Handler
function initSearchOverlay() {
  const searchModal = document.getElementById('searchOverlayModal');
  const searchInput = document.getElementById('searchFieldInput');
  const resultsContainer = document.getElementById('searchLiveResults');

  if (!searchModal || !searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      if (resultsContainer) resultsContainer.innerHTML = '';
      return;
    }

    const matched = AALAYA_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.subCategory.toLowerCase().includes(query) ||
      p.fabric.toLowerCase().includes(query) ||
      p.collection.toLowerCase().includes(query)
    );

    if (!resultsContainer) return;

    if (matched.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 0;">
          <p style="font-size: 1.1rem; color: #777;">No heirloom pieces found matching "<em>${query}</em>".</p>
          <p style="font-size: 0.85rem; color: #999;">Try searching for "Banarasi", "Silk", "Lehenga", "Chikankari", or "Anarkali".</p>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = matched.slice(0, 8).map(p => `
        <div style="display: flex; gap: 12px; align-items: center; background: #fff; padding: 10px; border: 1px solid #eee;">
          <img src="${p.images[0]}" alt="${p.name}" style="width: 60px; height: 80px; object-fit: cover;">
          <div>
            <span style="font-size: 0.68rem; text-transform: uppercase; color: var(--aalaya-gold); font-weight:700;">${p.subCategory}</span>
            <a href="product-details.html?id=${p.id}" style="font-family: var(--font-serif-display); font-size: 1rem; display: block; line-height: 1.2; margin: 2px 0;">${p.name}</a>
            <span style="font-weight: 700; font-size: 0.88rem;">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      `).join('');
    }
  });
}

function openSearchOverlay() {
  const modal = document.getElementById('searchOverlayModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('searchFieldInput');
      if (input) input.focus();
    }, 150);
  }
}

function closeSearchOverlay() {
  const modal = document.getElementById('searchOverlayModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Mobile Drawer Navigation
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.toggle('active');
  }
}

// Header Scroll Event Listener
function handleHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleHeaderScroll, { passive: true });

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  handleHeaderScroll();
  AalayaStore.updateCartBadges();
  AalayaStore.updateWishlistBadges();
  AalayaStore.syncWishlistButtons();
  AalayaStore.renderCartDrawer();
  initSearchOverlay();

  // Attach search triggers
  document.querySelectorAll('.btn-trigger-search').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearchOverlay();
    });
  });

  // Attach cart drawer triggers
  document.querySelectorAll('.btn-trigger-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      AalayaStore.openCartDrawer();
    });
  });
});


