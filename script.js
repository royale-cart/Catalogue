/* =========================================
   EXTENDED MOCK DATABASE (18 DUMMY PRODUCTS)
========================================= */
const products = [
    { id: 1, name: "Mieele Mint Oil ", category: "hair", image: "images/mieele.jpg" },
    { id: 2, name: "Mieele Mint Straightening Shampoo", category: "hair", image: "images/mshampoo.jpg" },
    { id: 3, name: "Mielle Pomegranate & Honey Curl Smoothie", category: "hair", image: "images/pinkmieele.jpg" },
    { id: 4, name: "Mieele Hair Mask", category: "hair", image: "images/mieelemask.jpg" },
    { id: 5, name: "Daily Styling creme", category: "hair", image: "images/styling.jpg" },
    { id: 6, name: "Auna Cleanser", category: "skincare", image: "images/cleanser.jpg" },
    { id: 7, name: "Deep Cleansing Foam", category: "skincare", image: "images/cleansingfoam.jpg" },
    { id: 8, name: "Auna Milky Toner", category: "skincare", image: "images/milkytoner.jpg" },
    { id: 9, name: "Anua Niacinamide 10 + TXA 4 Serum", category: "skincare", image: "images/aunaserum.jpg" },
    { id: 10, name: "Auna Soothing Cleanser", category: "skincare", image: "images/soothing.jpg" },
    { id: 11, name: "Medicube Exosome Ampoule Serum", category: "skincare", image: "images/medicubeserum.jpg" },
    { id: 12, name: "Medicube Kojic Acid Turmeric", category: "skincare", image: "images/acid.jpg" },
    { id: 13, name: "Medicube Colagen Night Wrapping Mask", category: "skincare", image: "images/night.jpg" },
    { id: 14, name: "Medicube Zero Pore Serum", category: "skincare", image: "images/zero.jpg" },
    { id: 15, name: "Medicube PDRN Pink Peptide Serum", category: "skincare", image: "images/pdrn.jpg" },
    { id: 16, name: "Bio Dance Facemask", category: "skincare", image: "images/biodance.jpg" },
    { id: 17, name: "Centella Poremizing Deep Cleansing Foam", category: "skincare", image: "images/centellafoam.jpg" },
    { id: 18, name: "Centella Cleanser", category: "skincare", image: "images/cleansercen.jpg" }, 
    { id: 19, name: "Madagascar Centella Ampoule", skincare: "drones", image: "images/ampoule.jpg" },
    { id: 20, name: "Pink Clay Stick Mask", category: "skincare", image: "images/stick.jpg" },
    { id: 21, name: "Centella Serum", category: "skincare", image: "images/cserum.jpg" },
    { id: 22, name: "La Roche-Posay Repairing Balm", category: "skincare", image: "images/reapir.jpg" },
    { id: 23, name: "La Roche-Posay Pure Vitamin C12 Serum", category: "skincare", image: "images/c12.jpg" },
    { id: 24, name: "La Roche-Posay Toleriane Hydrating Gentle Cleanser", category: "skincare", image: "images/generalcleanser.jpg" },
    { id: 25, name: "La Roche-Posay Anthelios Facial Sunscreen", category: "skincare", image: "images/facial.jpg" },
    { id: 26, name: "La Roche-Posay Pure Vitamin C10", category: "skincare", image: "images/c10.jpg" },
    { id: 27, name: "La Roche-Posay Foaming Gel Cleanser", category: "skincare", image: "images/gelpoche.jpg" },
    { id: 28, name: "Vichy Liftactiv Specialist B3 Serum", category: "skincare", image: "images/b3serum.jpg" },
    { id: 29, name: "Vichy Neovadiol Meno 5 Bi-Serum", category: "skincare", image: "images/meno5.jpg" },
    { id: 30, name: "Vichy LiftActiv Pure Vitamin C Brightening", category: "skincare", image: "images/vc16.jpg" },
    { id: 31, name: "Vichy Liftactiv Retinol Specialist Deep Wrinkles Serum", category: "skincare", image: "images/wrinkle.jpg" },
    { id: 32, name: "L'Oréal Paris True Match Super-Blendable Foundation", category: "makeup", image: "images/foundation.jpg" },
    { id: 33, name: "L'Oréal Paris Powder Foundation", category: "makeup", image: "images/powder.jpg" },
    { id: 34, name: "L'Oréal Paris Mattee Blush", category: "makeup", image: "images/blush.jpg" },
    { id: 35, name: "Sheglam Good Grip Hydrating Primer", category: "makeup", image: "images/primer.jpg" },
    { id: 36, name: "SHEGLAM Matte Foundation", category: "makeup", image: "images/foundationglam.jpg" },
    { id: 37, name: "CeraVe Hydrating Mineral Sunscreen", category: "skincare", image: "images/sunscreenc.jpg" },
    { id: 38, name: "CeraVe Foaming Facial Cleanser", category: "skincare", image: "images/foaming c.jpg" },
    { id: 39, name: "CeraVe Hydrating Cleanser", category: "skincare", image: "images/hydratec.jpg" },
    { id: 39, name: "CeraVe Moisturizing Cream", category: "skincare", image: "images/mc.jpg" },
    { id: 40, name: "Cetaphil Sun SPF 50+ Light Gel", category: "skincare", image: "images/cetagel.jpg" },
    { id: 41, name: "Cetaphil Moisturizing Cream jar", category: "skincare", image: "images/cjar.jpg" },
    { id: 42, name: "Rare Beauty Blush", category: "makeup", image: "images/rblush.jpg" },
    { id: 43, name: "Essence Lengthening & Volume Mascara", category: "makeup", image: "images/mascara.jpg" },
    { id: 44, name: "Gluta-Hya Dewy Radiance Serum Burst Lotion", category: "skincare", image: "images/lotion.jpg" },
    { id: 45, name: "Gluta-Hya Flawless Glow Serum-in-Lotion", category: "skincare", image: "images/l2.jpg" },
    { id: 46, name: "Dior Backstage Glow Face Palette", category: "makeup", image: "images/dior.jpg" },
    { id: 47, name: "Dior Backstage Rosy Glow powder blush", category: "makeup", image: "images/dblush.jpg" },
    { id: 48, name: "NARS Light Reflecting Foundation", category: "makeup", image: "images/narsf.jpg" },
    { id: 49, name: "Celimax Retinal Shot Tightening Booster", category: "skincare", image: "images/celimax.jpg" },
    { id: 50, name: "Neutrogena Ultra Sheer Dry-Touch Sunblock", category: "skincare", image: "images/dry.jpg" },
];

/* =========================================
   STATE REGULATION
========================================= */
let activeCategory = 'all';
let searchQuery = '';
const isMobile = window.innerWidth <= 768;
const waNumber = "923439888674"; 

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   DOM OBJECT LINKS
========================================= */
const grid = document.getElementById('productGrid');
const categoryContainer = document.getElementById('categoryContainer');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const themeToggle = document.getElementById('themeToggle');
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const backToTopBtn = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');

const modal = document.getElementById('productModal');
const modalProductName = document.getElementById('modalProductName');
const modalProductImage = document.getElementById('modalProductImage');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const waModalBtn = document.getElementById('waModalBtn');

/* =========================================
   INITIALIZATION CORE
========================================= */
function init() {
    renderCategories();
    renderSkeletons();
    
    setTimeout(() => {
        gsap.to(loader, {
            opacity: 0, 
            duration: 0.4, 
            onComplete: () => {
                loader.style.setProperty('display', 'none', 'important'); 
                loader.remove(); 
                renderProducts();
            }
        });
    }, 1500);

    if(!isMobile) initCustomCursor();
}

function renderCategories() {
    // Khaali ya undefined categories ko filter out kar do
    const validCategories = products
        .map(p => p.category)
        .filter(cat => cat !== undefined && cat !== null && cat.trim() !== '');

    const categories = ['all', ...new Set(validCategories)];
    
    categoryContainer.innerHTML = categories.map(cat => `
        <button class="seg-btn ${activeCategory === cat ? 'active' : ''}" data-category="${cat}">
            ${cat}
        </button>
    `).join('');

    document.querySelectorAll('.seg-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.seg-btn').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.dataset.category;
            renderProducts();
        });
    });
}

function renderSkeletons() {
    grid.innerHTML = Array(4).fill(`
        <div class="skeleton-card">
            <div class="skeleton-img skeleton"></div>
            <div class="skeleton-title skeleton"></div>
        </div>
    `).join('');
}

function renderProducts() {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(t => t.kill());

    const filtered = products.filter(p => {
        // DEFENSIVE FIX: Agar property undefined hai, toh fallback empty string dega crash nahi karega
        const safeName = (p.name || '').toLowerCase();
        const safeCategory = (p.category || '').toLowerCase();
        const safeQuery = (searchQuery || '').toLowerCase();

        const matchCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchSearch = safeName.includes(safeQuery) || safeCategory.includes(safeQuery);
        
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    emptyState.style.display = 'none';

    // Same injection logic as before
    grid.innerHTML = filtered.map((p) => `
        <div class="card" data-name="${p.name || 'Unknown'}" data-img="${p.image}" data-cat="${p.category || 'misc'}">
            <div class="card-category-badge">${p.category || 'N/A'}</div>
            <div class="card-image-wrapper">
                <img loading="lazy" src="${p.image}" alt="${p.name || 'Product'}">
            </div>
            <div class="card-info">
                <h3 class="card-title">${p.name || 'Untitled Product'}</h3>
            </div>
        </div>
    `).join('');

    initGSAPScrollReveal();
}


   

function initGSAPScrollReveal() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 35 }, 
            {
                opacity: 1, y: 0, duration: 0.6, ease: "power2.out", 
                scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none none" }
            }
        );
    });
}

/* =========================================
   SYSTEM ACTION UTILITIES
========================================= */
grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if(card) {
        const productName = card.getAttribute('data-name');
        const productImg = card.getAttribute('data-img');
        openModal(productName, productImg);
    }
});

function openModal(productName, productImg) {
    modalProductName.textContent = productName;
    modalProductImage.src = productImg;
    const waText = encodeURIComponent(`Hi! I am interested in the *${productName}*. Please share pricing and details.`);
    waModalBtn.href = `https://wa.me/${waNumber}?text=${waText}`;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { modalProductImage.src = ''; }, 300);
}

cancelModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

// LAG KILLER: Search Debouncing Engine
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout); // Purana trigger cancel karo
    
    // Naya trigger 300ms delay ke sath set karo
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value; 
        renderProducts();
    }, 300); 
});


themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>';
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;
    scrollProgress.style.width = `${progress}%`;

    if (scrollY > 50) { header.classList.add('scrolled'); backToTopBtn.classList.add('visible'); } 
    else { header.classList.remove('scrolled'); backToTopBtn.classList.remove('visible'); }
});

backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

function initCustomCursor() {
    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');
    
    window.addEventListener('mousemove', (e) => {
        dot.style.left = `${e.clientX}px`; dot.style.top = `${e.clientY}px`;
        outline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 150, fill: "forwards" });
    });
}

document.addEventListener('DOMContentLoaded', init);
