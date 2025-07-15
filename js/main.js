document.addEventListener('DOMContentLoaded', () => {

    // --- 1. نظام تبديل الثيم (Dark/Light Mode) ---
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    if (themeToggleButton) {
        const body = document.body;
        const themeIcon = themeToggleButton.querySelector('i');

        const applyTheme = (theme) => {
            if (theme === 'light') {
                body.classList.remove('dark-mode'); body.classList.add('light-mode');
                themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon');
            } else {
                body.classList.remove('light-mode'); body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', theme);
        };

        themeToggleButton.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
        });

        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);
    }


    // --- 2. نظام تبديل اللغة (AR/EN) ---
    const langToggleButton = document.getElementById('lang-toggle-btn');
    const translations = {
        en: {
            // General Keys
            "site_title": "GG.SA | The Player's Oasis", "nav_home": "Home", "nav_store": "Store", "nav_accounts": "Accounts", "btn_add_to_cart": "Add to Cart", "btn_subscribe": "Subscribe Now",

            // Homepage Keys
            "hero_title": "Best Accounts & Coins at Competitive Prices", "hero_subtitle": "Your first destination for everything in the gaming world.", "hero_button": "Discover Offers",
            "featured_products_title": "Featured Products", "product1_name": "10,000 Valorant Points", "product2_name": "Rare Fortnite Account", "product3_name": "5,000 Apex Coins",
            "why_us_title": "Why GG.SA is Your Best Choice?", "feature_delivery": "Instant Delivery", "feature_delivery_desc": "Your codes and accounts arrive moments after payment.", "feature_payment": "Secure Payment", "feature_payment_desc": "We use the latest encryption to protect your transactions.", "feature_support": "24/7 Support", "feature_support_desc": "Our team is ready to help you anytime via live chat.",
            "subscriptions_title": "Subscribe With Us, Play Like a Pro", "plan_silver": "Silver Plan", "plan_silver_desc": "For a strong start", "plan_gold": "Gold Plan", "plan_gold_desc": "To level up", "plan_diamond": "Diamond Plan", "plan_diamond_desc": "For the legends' experience", "plan_period": "/month",
            "feature_coins": "1,000 Coins/Month", "feature_skin": "Exclusive Skin", "feature_support_priority": "Standard Support", "feature_coins_gold": "5,000 Coins/Month", "feature_skin_gold": "3 Exclusive Skins", "feature_support_priority": "Priority Support", "feature_coins_diamond": "15,000 Coins/Month", "feature_skin_diamond": "Legendary Skin Pack", "feature_support_priority": "Instant Support", "badge_popular": "Most Popular",
            
            // Store Page Keys
            "store_page_title": "Store - GG.SA", "store_title": "The Store",
            "filter_category": "Categories", "cat_all": "All", "cat_coins": "Coins", "cat_accounts": "Accounts", "cat_cards": "Gift Cards",
            "filter_price": "Price", "price_from": "From: $0", "price_to": "To: $250", "btn_apply_filters": "Apply Filters",
            "showing_results": "Showing 1-12 of 50 results", "sort_default": "Default Sorting", "sort_price_asc": "Price: Low to High", "sort_price_desc": "Price: High to Low",

            // Accounts Page Keys
            "accounts_page_title": "Legendary Accounts - GG.SA", "accounts_hero_title": "Gateway to Rare Accounts", "accounts_hero_subtitle": "Own accounts others don't even dare to dream of.",
            "account1_name": "Fortnite Account | The Black Knight", "account2_name": "COD Account | The Nuclear Nuke",
            "account_price_label": "Price:", "btn_view_account": "View Account",

            // Footer Keys
            "footer_about": "Your first destination in the digital gaming world. We provide the best accounts and coins with guarantee and security.",
            "footer_links_title": "Quick Links", "footer_privacy": "Privacy Policy", "footer_social_title": "Follow Us",

            // Login Page Keys
            "login_page_title": "Login - GG.SA", "login_title": "Login to GG.SA", "login_username": "Username or Email", "login_password": "Password",
            "login_remember": "Remember me", "login_forgot": "Forgot Password?", "login_button": "Log In", "login_no_account": "Don't have an account?", "login_signup": "Create an account",
            "signup_page_title": "Create New Account - GG.SA",
"signup_main_title": "Forge Your Legend",
"step1_title": "Basic Information",
"signup_username": "Username",
"signup_email": "Email Address",
"signup_password": "Password",
"strength_weak": "Weak",
"strength_medium": "Medium",
"strength_strong": "Strong",
"btn_next": "Next",
"step2_title": "Choose Your Avatar",
"btn_prev": "Previous",
"step3_title": "You're Almost Done!",
"signup_terms": "I agree to the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>",
"btn_create_account": "Create Account",
                       
            
        },
        ar: {
            // General Keys
            "site_title": "GG.SA | واحة اللاعبين", "nav_home": "الرئيسية", "nav_store": "المتجر", "nav_accounts": "الحسابات", "btn_add_to_cart": "أضف للسلة", "btn_subscribe": "اشترك الآن",

            // Homepage Keys
            "hero_title": "أفضل الحسابات والكوينز بأسعار تنافسية", "hero_subtitle": "وجهتك الأولى لكل ما يخص عالم الألعاب.", "hero_button": "اكتشف العروض",
            "featured_products_title": "أبرز المنتجات", "product1_name": "10,000 نقاط فالورانت", "product2_name": "حساب فورتنايت (نادر)", "product3_name": "5,000 عملة آيبكس",
            "why_us_title": "لماذا GG.SA هو خيارك الأفضل؟", "feature_delivery": "تسليم فوري", "feature_delivery_desc": "أكوادك وحساباتك تصلك في لحظات بعد الدفع مباشرة.", "feature_payment": "دفع آمن", "feature_payment_desc": "نستخدم أحدث تقنيات التشفير لحماية معاملاتك المالية.", "feature_support": "دعم فني 24/7", "feature_support_desc": "فريقنا جاهز لمساعدتك في أي وقت عبر الدردشة المباشرة.",
            "subscriptions_title": "اشترِ معنا، والعب كالمحترفين", "plan_silver": "الباقة الفضية", "plan_silver_desc": "للبداية القوية", "plan_gold": "الباقة الذهبية", "plan_gold_desc": "للارتقاء بمستواك", "plan_diamond": "الباقة الماسية", "plan_diamond_desc": "لتجربة الأساطير", "plan_period": "/شهرياً",
            "feature_coins": "1,000 كوينز شهرياً", "feature_skin": "سكن حصري", "feature_support_priority": "دعم فني عادي", "feature_coins_gold": "5,000 كوينز شهرياً", "feature_skin_gold": "3 سكنات حصرية", "feature_support_priority": "دعم فني مميز", "feature_coins_diamond": "15,000 كوينز شهرياً", "feature_skin_diamond": "حزمة سكنات أسطورية", "feature_support_priority": "دعم فني فوري", "badge_popular": "الأكثر شيوعاً",

            // Store Page Keys
            "store_page_title": "المتجر - GG.SA", "store_title": "المتجر",
            "filter_category": "الفئات", "cat_all": "الكل", "cat_coins": "كوينز", "cat_accounts": "حسابات", "cat_cards": "بطاقات شحن",
            "filter_price": "السعر", "price_from": "من: 0 ر.س", "price_to": "إلى: 1000 ر.س", "btn_apply_filters": "تطبيق الفلاتر",
            "showing_results": "عرض 1-12 من 50 نتيجة", "sort_default": "ترتيب حسب الافتراضي", "sort_price_asc": "السعر: من الأقل للأعلى", "sort_price_desc": "السعر: من الأعلى للأقل",

            // Accounts Page Keys
            "accounts_page_title": "حسابات أسطورية - GG.SA", "accounts_hero_title": "بوابة الحسابات النادرة", "accounts_hero_subtitle": "امتلك حسابات لم يجرؤ الآخرون حتى على الحلم بها.",
            "account1_name": "حساب فورتنايت | الجلاد الأسود", "account2_name": "حساب COD | النيوك النووي",
            "account_price_label": "السعر:", "btn_view_account": "عرض الحساب",

            // Footer Keys
            "footer_about": "وجهتك الأولى في عالم الألعاب الرقمية. نوفر لك أفضل الحسابات والكوينز بضمان وأمان.",
            "footer_links_title": "روابط سريعة", "footer_privacy": "سياسة الخصوصية", "footer_social_title": "تابعنا",

            // Login Page Keys
            "login_page_title": "تسجيل الدخول - GG.SA", "login_title": "تسجيل الدخول إلى GG.SA", "login_username": "اسم المستخدم أو البريد الإلكتروني", "login_password": "كلمة المرور",
            "login_remember": "تذكرني", "login_forgot": "نسيت كلمة المرور؟", "login_button": "تسجيل الدخول", "login_no_account": "ليس لديك حساب؟", "login_signup": "أنشئ حسابًا الآن",
            "signup_page_title": "إنشاء حساب جديد - GG.SA",
"signup_main_title": "اصنع أسطورتك",
"step1_title": "المعلومات الأساسية",
"signup_username": "اسم المستخدم",
"signup_email": "البريد الإلكتروني",
"signup_password": "كلمة المرور",
"strength_weak": "ضعيفة",
"strength_medium": "متوسطة",
"strength_strong": "قوية",
"btn_next": "التالي",
"step2_title": "اختر صورتك الرمزية",
"btn_prev": "السابق",
"step3_title": "أنت على وشك الانتهاء!",
"signup_terms": "أوافق على <a href='#'>شروط الخدمة</a> و <a href='#'>سياسة الخصوصية</a>",
"btn_create_account": "إنشاء الحساب",
        }
    };

    const applyLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.style.fontFamily = lang === 'ar' ? "var(--font-ar)" : "var(--font-en)";
        document.querySelectorAll('[data-key]').forEach(element => { 
            const key = element.getAttribute('data-key'); 
            if(translations[lang] && translations[lang][key]) { 
                element.textContent = translations[lang][key]; 
            }
        });
        if (langToggleButton) {
            langToggleButton.textContent = lang === 'ar' ? 'EN' : 'ع';
        }
        localStorage.setItem('language', lang);
    };

    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const newLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
            applyLanguage(newLang);
        });
    }

    // --- 3. نظام قائمة الجوال (Mobile Menu) ---
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    if (mobileMenuButton) {
        const navbar = document.querySelector('.navbar');
        mobileMenuButton.addEventListener('click', () => { navbar.classList.toggle('active'); });
    }

    // --- 4. تحميل الإعدادات المحفوظة عند فتح الصفحة ---
    const savedLang = localStorage.getItem('language') || 'ar';
    applyLanguage(savedLang);
    // ======== نظام إنشاء حساب متعدد الخطوات ========
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    const steps = Array.from(signupForm.querySelectorAll('.form-step'));
    const progressSteps = Array.from(document.querySelectorAll('.progress-step'));
    const nextBtns = signupForm.querySelectorAll('.next-btn');
    const prevBtns = signupForm.querySelectorAll('.prev-btn');
    let currentStep = 0;

    const updateSteps = () => {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
        progressSteps.forEach((step, index) => {
            step.classList.toggle('active', index <= currentStep);
        });
    };

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateSteps();
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateSteps();
            }
        });
    });

    // مقياس قوة كلمة المرور
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;
        if (password.length > 5) strength++;
        if (password.length > 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        strengthBar.className = 'strength-bar'; // Reset
        if (strength <= 2) {
            strengthBar.style.width = '33%';
            strengthBar.classList.add('weak');
            strengthText.textContent = 'ضعيفة';
        } else if (strength <= 4) {
            strengthBar.style.width = '66%';
            strengthBar.classList.add('medium');
            strengthText.textContent = 'متوسطة';
        } else {
            strengthBar.style.width = '100%';
            strengthBar.classList.add('strong');
            strengthText.textContent = 'قوية';
        }
    });

    updateSteps();
}
});
