// ============================================
// متجر دمشق ستور - ملف الجافاسكريبت
// ============================================
// 
// 🖼️ كيف تضيف صورك الخاصة:
// 1. أنشئ مجلد "images" في نفس مجلد index.html
// 2. ضع صورك داخل المجلد
// 3. غيّر الروابط أدناه من روابط الإنترنت إلى:
//    image: "images/اسم-الصورة.jpg"
//
// ============================================

// بيانات المنتجات - عدّل هنا صورك ومعلوماتك
// ⚠️ غيّر "image:" لكل منتج لصورة من مجلد images/
const products = [
    { 
        id: 1, 
        name: "قميص كلاسيكي أنيق", 
        category: "men", 
        price: 15000, 
        oldPrice: 20000, 
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80", 
        badge: "sale", 
        rating: 4.8, 
        reviews: 124 
    },
    { 
        id: 2, 
        name: "فستان صيفي فاخر", 
        category: "women", 
        price: 30000, 
        oldPrice: 40000, 
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80", 
        badge: "new", 
        rating: 4.9, 
        reviews: 89 
    },
    { 
        id: 3, 
        name: "بدلة رياضية أطفال", 
        category: "kids", 
        price: 12000, 
        oldPrice: 17000, 
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80", 
        badge: "sale", 
        rating: 4.7, 
        reviews: 56 
    },
    { 
        id: 4, 
        name: "جاكيت جلد فاخر", 
        category: "men", 
        price: 45000, 
        oldPrice: 60000, 
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80", 
        badge: "sale", 
        rating: 4.9, 
        reviews: 203 
    },
    { 
        id: 5, 
        name: "بلوزة حريرية أنيقة", 
        category: "women", 
        price: 18000, 
        oldPrice: 25000, 
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80", 
        badge: "new", 
        rating: 4.6, 
        reviews: 78 
    },
    { 
        id: 6, 
        name: "تيشيرت أطفال مطبوع", 
        category: "kids", 
        price: 8000, 
        oldPrice: 10000, 
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&q=80", 
        badge: "new", 
        rating: 4.8, 
        reviews: 112 
    },
    { 
        id: 7, 
        name: "بنطلون جينز كلاسيكي", 
        category: "men", 
        price: 20000, 
        oldPrice: 26000, 
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80", 
        badge: "", 
        rating: 4.7, 
        reviews: 156 
    },
    { 
        id: 8, 
        name: "تنورة قصيرة أنيقة", 
        category: "women", 
        price: 16000, 
        oldPrice: 20000, 
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80", 
        badge: "sale", 
        rating: 4.5, 
        reviews: 67 
    },
    { 
        id: 9, 
        name: "جاكيت شتوي رجالي", 
        category: "men", 
        price: 55000, 
        oldPrice: 75000, 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", 
        badge: "sale", 
        rating: 4.8, 
        reviews: 145 
    },
    { 
        id: 10, 
        name: "فستان سهرة فاخر", 
        category: "women", 
        price: 65000, 
        oldPrice: 85000, 
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80", 
        badge: "new", 
        rating: 4.9, 
        reviews: 92 
    },
    { 
        id: 11, 
        name: "سروال رياضي أطفال", 
        category: "kids", 
        price: 7000, 
        oldPrice: 9000, 
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80", 
        badge: "sale", 
        rating: 4.6, 
        reviews: 88 
    },
    { 
        id: 12, 
        name: "قميص رسمي رجالي", 
        category: "men", 
        price: 22000, 
        oldPrice: 28000, 
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80", 
        badge: "new", 
        rating: 4.7, 
        reviews: 134 
    },
    { 
        id: 13, 
        name: "بلوزة كاجوال نسائية", 
        category: "women", 
        price: 14000, 
        oldPrice: 18000, 
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80", 
        badge: "", 
        rating: 4.5, 
        reviews: 76 
    },
    { 
        id: 14, 
        name: "فستان أطفال بناتي", 
        category: "kids", 
        price: 10000, 
        oldPrice: 14000, 
        image: "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?w=400&q=80", 
        badge: "sale", 
        rating: 4.8, 
        reviews: 103 
    },
    { 
        id: 15, 
        name: "جاكيت جينز رجالي", 
        category: "men", 
        price: 35000, 
        oldPrice: 45000, 
        image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400&q=80", 
        badge: "sale", 
        rating: 4.6, 
        reviews: 89 
    },
    { 
        id: 16, 
        name: "فستان نسائي أنيق", 
        category: "women", 
        price: 40000, 
        oldPrice: 55000, 
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80", 
        badge: "new", 
        rating: 4.9, 
        reviews: 167 
    }
];

// بيانات الماركات - عدّل هنا
const brands = [
    { name: "Nike", icon: "fa-running", count: "+120 منتج" },
    { name: "Adidas", icon: "fa-futbol", count: "+95 منتج" },
    { name: "Zara", icon: "fa-tshirt", count: "+200 منتج" },
    { name: "H&M", icon: "fa-shopping-bag", count: "+150 منتج" },
    { name: "Puma", icon: "fa-paw", count: "+80 منتج" },
    { name: "Gucci", icon: "fa-gem", count: "+45 منتج" },
    { name: "Lacoste", icon: "fa-crow", count: "+60 منتج" },
    { name: "Calvin Klein", icon: "fa-vest", count: "+35 منتج" }
];

// متغيرات عامة
let cart = [];
let currentSlide = 0;
let currentProduct = null;
let currentQty = 1;

// ============================================
// دوال التهيئة
// ============================================

function init() {
    renderProducts();
    renderBrands();
    startSlider();
    setupEventListeners();
}

function setupEventListeners() {
    // اختيار المقاس
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // اختيار اللون
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // تأثير الهيدر عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // البحث بالضغط على Enter
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// ============================================
// دوال مساعدة للأرقام
// ============================================

function safeNumber(value, defaultValue) {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
}

function formatPrice(price) {
    const num = safeNumber(price, 0);
    return num.toLocaleString('ar-SY');
}

// ============================================
// دوال المنتجات
// ============================================

function renderProducts() {
    const featured = products.slice(0, 8);
    const bestsellers = products.slice(8, 16);

    document.getElementById('featuredProducts').innerHTML = featured.map(p => createProductCard(p)).join('');
    document.getElementById('bestsellerProducts').innerHTML = bestsellers.map(p => createProductCard(p)).join('');
}

function createProductCard(p) {
    const badgeClass = p.badge === 'sale' ? 'sale' : p.badge === 'new' ? 'new' : '';
    const badgeText = p.badge === 'sale' ? 'خصم' : p.badge === 'new' ? 'جديد' : '';
    const price = safeNumber(p.price, 0);
    const oldPrice = safeNumber(p.oldPrice, 0);

    return `
        <div class="product-card" onclick="showProductDetail(${p.id})">
            ${badgeText ? `<span class="product-badge ${badgeClass}">${badgeText}</span>` : ''}
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x320/e94560/ffffff?text=${encodeURIComponent(p.name)}'">
                <div class="product-actions" onclick="event.stopPropagation()">
                    <button class="product-action-btn" onclick="addToCart(${p.id}, 1)"><i class="fas fa-shopping-bag"></i></button>
                    <button class="product-action-btn"><i class="far fa-heart"></i></button>
                    <button class="product-action-btn" onclick="showProductDetail(${p.id})"><i class="fas fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${p.category === 'men' ? 'رجالي' : p.category === 'women' ? 'نسائي' : 'أطفال'}</div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price-row">
                    <span class="product-price">${formatPrice(price)} ل.س</span>
                    ${oldPrice > price ? `<span class="product-old-price">${formatPrice(oldPrice)} ل.س</span>` : ''}
                </div>
                <div class="product-rating">
                    <span class="stars">${getStars(p.rating)}</span>
                    <span>(${p.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

function getStars(rating) {
    let stars = '';
    const numRating = safeNumber(rating, 0);
    for (let i = 1; i <= 5; i++) {
        if (i <= numRating) stars += '<i class="fas fa-star"></i>';
        else if (i - 0.5 <= numRating) stars += '<i class="fas fa-star-half-alt"></i>';
        else stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ============================================
// دوال الماركات
// ============================================

function renderBrands() {
    document.getElementById('brandsGrid').innerHTML = brands.map(b => `
        <div class="brand-card">
            <div class="brand-logo"><i class="fas ${b.icon}"></i></div>
            <div class="brand-name">${b.name}</div>
            <div class="brand-count">${b.count}</div>
        </div>
    `).join('');
}

// ============================================
// دوال التنقل بين الصفحات
// ============================================

function showPage(page) {
    // إخفاء كل الصفحات
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('productDetailPage').classList.remove('active');
    document.getElementById('cartPage').classList.remove('active');
    document.getElementById('searchPage').classList.remove('active');
    document.getElementById('contactPage').classList.remove('active');

    // إظهار الصفحة المطلوبة
    if (page === 'home') {
        document.getElementById('homePage').style.display = 'block';
        window.scrollTo(0, 0);
    } else if (page === 'product') {
        document.getElementById('productDetailPage').classList.add('active');
        window.scrollTo(0, 0);
    } else if (page === 'cart') {
        document.getElementById('cartPage').classList.add('active');
        renderCart();
        window.scrollTo(0, 0);
    } else if (page === 'search') {
        document.getElementById('searchPage').classList.add('active');
        performSearch();
        window.scrollTo(0, 0);
    } else if (page === 'contact') {
        document.getElementById('contactPage').classList.add('active');
        window.scrollTo(0, 0);
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// دوال تفاصيل المنتج
// ============================================

function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentProduct = product;
    currentQty = 1;

    const price = safeNumber(product.price, 0);
    const oldPrice = safeNumber(product.oldPrice, 0);

    document.getElementById('detailMainImage').src = product.image;
    document.getElementById('detailMainImage').onerror = function() {
        this.src = 'https://via.placeholder.com/600x550/e94560/ffffff?text=' + encodeURIComponent(product.name);
    };
    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailCategoryLabel').textContent = product.category === 'men' ? 'رجالي' : product.category === 'women' ? 'نسائي' : 'أطفال';
    document.getElementById('detailCategoryLink').textContent = product.category === 'men' ? 'رجالي' : product.category === 'women' ? 'نسائي' : 'أطفال';
    document.getElementById('detailBreadcrumb').textContent = product.name;
    document.getElementById('detailPrice').textContent = formatPrice(price) + ' ل.س';

    const oldPriceEl = document.getElementById('detailOldPrice');
    if (oldPrice > 0 && oldPrice > price) {
        oldPriceEl.textContent = formatPrice(oldPrice) + ' ل.س';
        oldPriceEl.style.display = 'inline';
    } else {
        oldPriceEl.style.display = 'none';
    }

    document.getElementById('qtyInput').value = '1';

    // معرض الصور المصغرة
    const thumbs = [product.image, product.image, product.image, product.image];
    document.getElementById('detailThumbs').innerHTML = thumbs.map((img, i) => `
        <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="changeGalleryImage('${img}', this)">
            <img src="${img}" alt="" onerror="this.src='https://via.placeholder.com/80x80/e94560/ffffff?text=${i+1}'">
        </div>
    `).join('');

    showPage('product');
}

function changeGalleryImage(src, el) {
    document.getElementById('detailMainImage').src = src;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

function changeQty(delta) {
    currentQty = Math.max(1, currentQty + delta);
    document.getElementById('qtyInput').value = currentQty;
}

function addToCartFromDetail() {
    if (currentProduct) {
        addToCart(currentProduct.id, currentQty);
    }
}

// ============================================
// دوال عربة التسوق - تم إصلاح مشكلة NaN
// ============================================

function addToCart(id, qty) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // التأكد من أن الكمية رقم صحيح
    const safeQty = Math.max(1, safeNumber(qty, 1));

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty = safeNumber(existing.qty, 0) + safeQty;
    } else {
        // إنشاء نسخة آمنة من المنتج مع التأكد من أن السعر رقم
        cart.push({ 
            id: product.id,
            name: product.name,
            category: product.category,
            price: safeNumber(product.price, 0),
            oldPrice: safeNumber(product.oldPrice, 0),
            image: product.image,
            qty: safeQty 
        });
    }

    updateCartBadge();
    showToast('تمت إضافة المنتج إلى العربة!');
}

function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + safeNumber(item.qty, 0), 0);
    document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>عربة التسوق فارغة</h3>
                <p>ابدأ التسوق واكتشف منتجاتنا المميزة</p>
                <button class="btn-primary" onclick="showPage('home')" style="max-width: 250px; margin: 0 auto;">
                    <i class="fas fa-arrow-left"></i> مواصلة التسوق
                </button>
            </div>
        `;
        summary.style.display = 'none';
        return;
    }

    summary.style.display = 'block';

    container.innerHTML = cart.map((item, index) => {
        const price = safeNumber(item.price, 0);
        const qty = safeNumber(item.qty, 1);
        const totalItemPrice = price * qty;

        return `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100/e94560/ffffff?text=Product'">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.category === 'men' ? 'رجالي' : item.category === 'women' ? 'نسائي' : 'أطفال'} | مقاس M</p>
                    <div class="cart-item-qty" style="margin-top: 10px;">
                        <button onclick="updateCartQty(${index}, -1)">-</button>
                        <span>${qty}</span>
                        <button onclick="updateCartQty(${index}, 1)">+</button>
                    </div>
                </div>
                <div style="text-align: center;">
                    <div class="cart-item-price">${formatPrice(totalItemPrice)} ل.س</div>
                    <button class="remove-btn" onclick="removeFromCart(${index})" style="margin-top: 10px;">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // حساب المجاميع مع التأكد من صحة الأرقام
    let subtotal = 0;
    let discount = 0;

    cart.forEach(item => {
        const price = safeNumber(item.price, 0);
        const oldPrice = safeNumber(item.oldPrice, 0);
        const qty = safeNumber(item.qty, 1);

        subtotal += price * qty;

        if (oldPrice > price) {
            discount += (oldPrice - price) * qty;
        }
    });

    const total = subtotal;

    document.getElementById('subtotal').textContent = formatPrice(subtotal + discount) + ' ل.س';
    document.getElementById('discount').textContent = formatPrice(discount) + ' ل.س';
    document.getElementById('total').textContent = formatPrice(total) + ' ل.س';
}

function updateCartQty(index, delta) {
    const item = cart[index];
    if (!item) return;

    const currentQty = safeNumber(item.qty, 1);
    const newQty = Math.max(1, currentQty + delta);

    item.qty = newQty;
    updateCartBadge();
    renderCart();
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
    }
    updateCartBadge();
    renderCart();
    showToast('تمت إزالة المنتج من العربة');
}

// ============================================
// دوال البحث
// ============================================

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.includes(query)
    );

    // Reset search title
    const searchTitle = document.getElementById('searchTitle');
    if (searchTitle) {
        searchTitle.textContent = query ? 'نتائج البحث عن: ' + query : 'نتائج البحث';
    }

    document.getElementById('searchCount').textContent = results.length;
    document.getElementById('searchResults').innerHTML = results.map(p => createProductCard(p)).join('');

    if (!document.getElementById('searchPage').classList.contains('active')) {
        showPage('search');
    }
}

function filterCategory(cat) {
    // Reset search input
    document.getElementById('searchInput').value = '';

    // Filter products by category
    const results = products.filter(p => p.category === cat);

    // Update search page title
    const catNames = {
        'men': 'منتجات رجالية',
        'women': 'منتجات نسائية', 
        'kids': 'منتجات أطفال'
    };
    const searchTitle = document.getElementById('searchTitle');
    if (searchTitle) {
        searchTitle.textContent = catNames[cat] || 'نتائج البحث';
    }

    // Update search page UI
    document.getElementById('searchCount').textContent = results.length;
    document.getElementById('searchResults').innerHTML = results.map(p => createProductCard(p)).join('');

    // Update filter chips to show active category
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    const catMap = {'men': 1, 'women': 2, 'kids': 3, 'sale': 4};
    const chipIndex = catMap[cat];
    if (chipIndex !== undefined) {
        const chips = document.querySelectorAll('.filter-chip');
        if (chips[chipIndex]) chips[chipIndex].classList.add('active');
    }

    // Show search page
    showPage('search');
}

function filterSearch(type) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');

    let results = products;
    const searchTitle = document.getElementById('searchTitle');

    if (type !== 'all') {
        if (type === 'sale') {
            results = products.filter(p => p.badge === 'sale');
            if (searchTitle) searchTitle.textContent = 'تخفيضات وعروض';
        } else {
            results = products.filter(p => p.category === type);
            const catNames = {'men': 'منتجات رجالية', 'women': 'منتجات نسائية', 'kids': 'منتجات أطفال'};
            if (searchTitle) searchTitle.textContent = catNames[type] || 'نتائج البحث';
        }
    } else {
        if (searchTitle) searchTitle.textContent = 'جميع المنتجات';
    }

    document.getElementById('searchCount').textContent = results.length;
    document.getElementById('searchResults').innerHTML = results.map(p => createProductCard(p)).join('');
}

// ============================================
// دوال عارض الشرائح
// ============================================

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const thumbs = document.querySelectorAll('.hero-thumb');

    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));

    currentSlide = index;
}

function startSlider() {
    setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 5000);
}

// ============================================
// دوال مساعدة
// ============================================

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function toggleMobileMenu() {
    const nav = document.getElementById('navBar');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// ============================================
// تشغيل عند تحميل الصفحة
// ============================================


// ============================================
// صفحات خدمة العملاء
// ============================================

function showReturnPolicy() {
    const content = `
        <div class="info-page" id="returnPolicyPage">
            <div class="breadcrumb">
                <a href="#" onclick="closeInfoPage(); return false;">الرئيسية</a>
                <i class="fas fa-chevron-left" style="font-size: 10px;"></i>
                <span>سياسة الإرجاع</span>
            </div>
            <div class="info-content">
                <h1><i class="fas fa-undo-alt"></i> سياسة الإرجاع</h1>
                <div class="info-card">
                    <h3>شروط الإرجاع</h3>
                    <ul>
                        <li>يمكنك إرجاع المنتج خلال <strong>14 يوماً</strong> من تاريخ الاستلام</li>
                        <li>يجب أن يكون المنتج في حالته الأصلية وغير مستخدم</li>
                        <li>يجب إرفاق الفاتورة الأصلية مع المنتج</li>
                        <li>المنتجات المخصصة أو المعدلة حسب الطلب لا يمكن إرجاعها</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>خطوات الإرجاع</h3>
                    <ol>
                        <li>تسجيل الدخول إلى حسابك</li>
                        <li>الذهاب إلى "طلباتي" واختيار الطلب المراد إرجاعه</li>
                        <li>ملء نموذج طلب الإرجاع وتحديد سبب الإرجاع</li>
                        <li>انتظار موافقة فريق خدمة العملاء</li>
                        <li>تسليم المنتج لمندوب الشحن أو إرساله إلى أقرب فرع</li>
                    </ol>
                </div>
                <div class="info-card">
                    <h3>سياسة الاسترداد</h3>
                    <p>سيتم استرداد المبلغ بنفس طريقة الدفع الأصلية خلال <strong>5-10 أيام عمل</strong> بعد استلام المنتج وفحصه.</p>
                </div>
            </div>
        </div>
    `;
    showInfoPage(content);
}

function showTerms() {
    const content = `
        <div class="info-page" id="termsPage">
            <div class="breadcrumb">
                <a href="#" onclick="closeInfoPage(); return false;">الرئيسية</a>
                <i class="fas fa-chevron-left" style="font-size: 10px;"></i>
                <span>شروط الاستخدام</span>
            </div>
            <div class="info-content">
                <h1><i class="fas fa-file-contract"></i> شروط الاستخدام</h1>
                <div class="info-card">
                    <h3>1. القبول بالشروط</h3>
                    <p>باستخدامك لموقع متجر هيما، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يجب عليك عدم استخدام الموقع.</p>
                </div>
                <div class="info-card">
                    <h3>2. حساب المستخدم</h3>
                    <ul>
                        <li>يجب أن تكون المعلومات المقدمة دقيقة وكاملة</li>
                        <li>أنت مسؤول عن الحفاظ على سرية كلمة المرور</li>
                        <li>يجب إبلاغنا فوراً عن أي استخدام غير مصرح به لحسابك</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>3. الطلبات والدفع</h3>
                    <ul>
                        <li>جميع الأسعار بالليرة السورية وشاملة الضرائب</li>
                        <li>نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب</li>
                        <li>يجب الدفع كاملاً قبل شحن الطلب</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>4. الملكية الفكرية</h3>
                    <p>جميع المحتويات على الموقع (الشعارات، الصور، النصوص) هي ملك لمتجر هيما ومحمية بموجب قوانين حقوق النشر.</p>
                </div>
            </div>
        </div>
    `;
    showInfoPage(content);
}

function showFAQ() {
    const content = `
        <div class="info-page" id="faqPage">
            <div class="breadcrumb">
                <a href="#" onclick="closeInfoPage(); return false;">الرئيسية</a>
                <i class="fas fa-chevron-left" style="font-size: 10px;"></i>
                <span>الأسئلة الشائعة</span>
            </div>
            <div class="info-content">
                <h1><i class="fas fa-question-circle"></i> الأسئلة الشائعة</h1>

                <div class="faq-item">
                    <h3><i class="fas fa-plus"></i> كيف يمكنني تتبع طلبي؟</h3>
                    <div class="faq-answer">
                        <p>يمكنك تتبع طلبك من خلال صفحة "طلباتي" في حسابك. ستجد رقم التتبع وآخر تحديثات حالة الشحن.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3><i class="fas fa-plus"></i> ما هي مدة التوصيل؟</h3>
                    <div class="faq-answer">
                        <p>التوصيل داخل دمشق يستغرق 24-48 ساعة. للمحافظات الأخرى يستغرق 2-5 أيام عمل.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3><i class="fas fa-plus"></i> هل يمكنني تغيير عنوان التوصيل بعد الطلب؟</h3>
                    <div class="faq-answer">
                        <p>نعم، يمكنك تغيير العنوان خلال 12 ساعة من تقديم الطلب عن طريق التواصل مع خدمة العملاء.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3><i class="fas fa-plus"></i> ما هي طرق الدفع المتاحة؟</h3>
                    <div class="faq-answer">
                        <p>نقبل الدفع عند الاستلام، التحويل البنكي، والدفع الإلكتروني عبر بطاقات Visa/Mastercard.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3><i class="fas fa-plus"></i> هل المنتجات أصلية؟</h3>
                    <div class="faq-answer">
                        <p>نعم، جميع منتجاتنا أصلية 100% ونضمن جودتها. نعمل مباشرة مع الماركات العالمية.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3><i class="fas fa-plus"></i> كيف يمكنني الإرجاع أو الاستبدال؟</h3>
                    <div class="faq-answer">
                        <p>يمكنك إرجاع المنتج خلال 14 يوماً من الاستلام. اذهب إلى "طلباتي" واختر "طلب إرجاع".</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    showInfoPage(content);

    // Add FAQ toggle functionality
    setTimeout(() => {
        document.querySelectorAll('.faq-item h3').forEach(item => {
            item.addEventListener('click', function() {
                this.parentElement.classList.toggle('active');
                const icon = this.querySelector('i');
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
            });
        });
    }, 100);
}

function showInfoPage(content) {
    // Hide all other pages
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('productDetailPage').classList.remove('active');
    document.getElementById('cartPage').classList.remove('active');
    document.getElementById('searchPage').classList.remove('active');
    document.getElementById('contactPage').classList.remove('active');

    // Remove any existing info page
    const existing = document.querySelector('.info-page-wrapper');
    if (existing) existing.remove();

    // Create wrapper and add content
    const wrapper = document.createElement('div');
    wrapper.className = 'info-page-wrapper';
    wrapper.innerHTML = content;
    document.body.appendChild(wrapper);

    window.scrollTo(0, 0);
}

function closeInfoPage() {
    const wrapper = document.querySelector('.info-page-wrapper');
    if (wrapper) wrapper.remove();
    showPage('home');
}



// ============================================
// Scroll Reveal Animation
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.product-card, .feature-card, .brand-card, .section-header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Parallax Effect for Hero
// ============================================

function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-slide-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    init();
    initScrollReveal();
    initParallax();
});