# مخطط الملفات الاحترافي — لو بوك

## الهيكل الشامل

```
lobuk/
│
├── index.html                          ← نقطة الدخول الرئيسية
├── manifest.json                       ← PWA Manifest
├── robots.txt                          ← SEO
├── favicon.ico                         ← أيقونة التبويب
│
│
├── css/                                ← ═══ أنماط CSS ═══
│   │
│   ├── variables.css                   ← المتغيرات العامة (ألوان، أبعاد، z-index)
│   ├── reset.css                       ← إعادة ضبط المتصفح
│   ├── typography.css                  ← الخطوط والأحجام
│   ├── layout.css                      ← الشبكات والأعمدة والحاويات
│   ├── components.css                  ← مكتبة المكوّنات (أزرار، حقول، شارات، بطاقيات)
│   ├── utilities.css                   ← فئات مساعدة (flex، margin، text-align)
│   ├── animations.css                  ← كل الحركات والتحولات والتأخيرات
│   ├── responsive.css                  ← Media Queries لجميع الأحجام
│   │
│   ├── pages/                          ← أنماط خاصة بكل صفحة
│   │   ├── auth.css                    ← صفحة تسجيل الدخول / إنشاء الحساب
│   │   ├── home.css                    ← الصفحة الرئيسية + القصص
│   │   ├── profile.css                 ← الملف الشخصي
│   │   ├── post-detail.css             ← تفاصيل المنشور
│   │   ├── messages.css                ← الرسائل
│   │   ├── notifications.css           ← الإشعارات
│   │   ├── search.css                  ← البحث والاستكشاف
│   │   ├── groups.css                  ← المجموعات
│   │   ├── pages.css                   ← الصفحات الرسمية
│   │   ├── reels.css                   ← الريلز
│   │   ├── stories.css                 ← القصص
│   │   ├── settings.css                ← الإعدادات
│   │   ├── admin.css                   ← لوحة الإدارة
│   │   ├── ads.css                     ← نظام الإعلانات
│   │   └── verification.css            ← نظام التوثيق
│   │
│   └── themes/                         ← سمات الألوان
│       ├── dark.css                    ← الوضع الداكن (افتراضي)
│       └── light.css                   ← الوضع الفاتح
│
│
├── js/                                 ← ═══ ملفات JavaScript ═══
│   │
│   ├── core/                           ← ════ البنية الأساسية ════
│   │   │
│   │   ├── app.js                      ← نقطة الدخول — تهيئة التطبيق بالكامل
│   │   ├── router.js                   ← موجّه الصفحات (Hash Router)
│   │   ├── state.js                    ← إدارة الحالة العامة (Global State)
│   │   ├── config.js                   ← إعدادات التطبيق (أحجام، حدود، ثوابت)
│   │   ├── i18n.js                     ← الترجمة (عربي / إنجليزي)
│   │   └── constants.js                ← ثوابت (أنواع المنشورات، حالات الإشعارات...)
│   │
│   ├── database/                       ← ════ التخزين الدائم ════
│   │   │
│   │   ├── db-manager.js              ← IndexedDB — فتح/إضافة/قراءة/تحديث/حذف
│   │   ├── migration.js               ← هجرة قاعدة البيانات عند تحديث الإصدار
│   │   ├── seed.js                    ← بيانات تجريبية أولية (مستخدمين، منشورات)
│   │   │
│   │   └── stores/                    ← مخازن البيانات
│   │       ├── users.store.js         ← عمليات المستخدمين (CRUD + بحث)
│   │       ├── posts.store.js         ← عمليات المنشورات (إنشاء، إعجاب، حفظ، تثبيت)
│   │       ├── comments.store.js      ← عمليات التعليقات (شجرة، إعجاب، حذف)
│   │       ├── messages.store.js      ← عمليات الرسائل (محادثات، إرسال، قراءة)
│   │       ├── conversations.store.js ← عمليات المحادثات (إنشاء، قائمة، حذف)
│   │       ├── notifications.store.js ← عمليات الإشعارات (إنشاء، قراءة، فلترة)
│   │       ├── files.store.js         ← عمليات الملفات (رفع، ضغط، حذف)
│   │       ├── groups.store.js        ← عمليات المجموعات
│   │       ├── pages.store.js         ← عمليات الصفحات الرسمية
│   │       ├── stories.store.js       ← عمليات القصص (إنشاء، حذف تلقائي بعد 24 ساعة)
│   │       ├── ads.store.js           ← عمليات الإعلانات (حملات، إحصائيات)
│   │       └── settings.store.js      ← عمليات الإعدادات العامة
│   │
│   ├── auth/                           ← ════ المصادقة والأمان ════
│   │   │
│   │   ├── auth-manager.js            ← تسجيل/دخول/خروج/حذف + JWT Local
│   │   ├── crypto.js                  ← تشفير كلمات المرور (Web Crypto API)
│   │   ├── session.js                 ← إدارة الجلسات وصلاحيات JWT
│   │   ├── captcha.js                 ← نظام Captcha (حسابي)
│   │   ├── permissions.js             ← فحص الصلاحيات (admin/moderator/user)
│   │   └── guards.js                  ← حماية الصفحات (المصادقة قبل الوصول)
│   │
│   ├── security/                       ← ════ الحماية ════
│   │   │
│   │   ├── xss-filter.js              ← تنقية المدخلات من XSS
│   │   ├── csrf-token.js              ← توليد والتحقق من CSRF Tokens
│   │   ├── rate-limiter.js            ← تحديد عدد الطلبات (في المتصفح)
│   │   ├── content-filter.js          ← فلترة المحتوى المسيء (قوائم + Regex)
│   │   └── audit-log.js               ← سجل أمني للعمليات الحساسة
│   │
│   ├── api/                            ← ════ طبقة API (محاكاة) ════
│   │   │
│   │   ├── api-client.js              ← عميل HTTP موحّد (محاكاة fetch)
│   │   ├── mock-server.js             ← سيرفر محاكي (Mock API Server)
│   │   │
│   │   └── endpoints/                 ← نقاط النهاية
│   │       ├── auth.api.js            ← POST /register, POST /login, POST /logout
│   │       ├── users.api.js           ← GET /users, PUT /users/:id, DELETE /users/:id
│   │       ├── posts.api.js           ← CRUD /posts, POST /posts/:id/like
│   │       ├── comments.api.js        ← CRUD /posts/:id/comments
│   │       ├── messages.api.js        ← GET /conversations, POST /messages
│   │       ├── notifications.api.js   ← GET /notifications, PUT /notifications/read
│   │       ├── search.api.js          ← GET /search, GET /trending
│   │       ├── groups.api.js          ← CRUD /groups
│   │       ├── pages.api.js           ← GET /pages, POST /pages/:id/follow
│   │       ├── stories.api.js         ← POST /stories, DELETE /stories/:id
│   │       ├── files.api.js           ← POST /upload, GET /files/:id
│   │       ├── ads.api.js             ← GET /ads, POST /campaigns
│   │       ├── verification.api.js    ← POST /verify-request, GET /verify-status
│   │       └── admin.api.js           ← GET /admin/stats, PUT /admin/users/:id
│   │
│   ├── services/                       ← ════ الخدمات المنطقية ════
│   │   │
│   │   ├── post-service.js            ← منطق المنشورات (إنشاء، إعجاب، حفظ، تثبيت، إعادة نشر)
│   │   ├── feed-service.js            ← خوارزمية الخلاصة (ترتيب، لا نهائي، تصفية)
│   │   ├── story-service.js           ← منطق القصص (إنشاء، عرض، حذف تلقائي)
│   │   ├── message-service.js         ← منطق الرسائل (إرسال، حالة القراءة، حالة الكتابة)
│   │   ├── notification-service.js    ← منطق الإشعارات (إنشاء ذكي، تحديد كمقروء)
│   │   ├── search-service.js          ← منطق البحث (全文، هاشتاقات، مستخدمين)
│   │   ├── verification-service.js    ← منطق التوثيق (طلب، مراجعة، منح)
│   │   ├── ad-service.js              ← منطق الإعلانات (إنشاء حملة، تتبع، إحصائيات)
│   │   ├── moderation-service.js      ← منطق الإشراف (بلاغات، حذف، تعطيل)
│   │   ├── file-service.js            ← منطق الملفات (رفع، ضغط، معالجة)
│   │   └── analytics-service.js       ← منطق التحليلات (عدادات، رسوم بيانية)
│   │
│   ├── ai/                             ← ════ الذكاء الاصطناعي ════
│   │   │
│   │   ├── ai-chat.js                 ← المحادثة مع المساعد القانوني
│   │   ├── summarizer.js              ← تلخيص المنشورات الطويلة
│   │   ├── translator.js              ← الترجمة (عربي ↔ إنجليزي)
│   │   ├── spam-detector.js           ← كشف المحتوى المزعج (قاعدة + Regex)
│   │   └── recommender.js             ← اقتراح محتوى (interest-based)
│   │
│   ├── realtime/                       ← ════ التحديثات اللحظية ════
│   │   │
│   │   ├── event-bus.js               ← نظام الأحداث الداخلي (Pub/Sub)
│   │   ├── presence.js                ← حالة الاتصال (متصل/غير متصل)
│   │   └── typing-indicator.js        ← مؤشر الكتابة
│   │
│   ├── ui/                             ← ════ واجهة المستخدم ════
│   │   │
│   │   ├── renderer.js                ← محرك العرض (Template Engine بسيط)
│   │   ├── toast.js                   ← التنبيهات المنبثقة
│   │   ├── modal.js                   ← النوافذ المنبثقة
│   │   ├── loading.js                 ← حالات التحميل (spinner, skeleton)
│   │   ├── lazy-load.js               ← تحميل كسول للصور
│   │   ├── infinite-scroll.js         ← التمرير اللانهائي
│   │   ├── form-validator.js          ← التحقق من صحة النماذج
│   │   ├── theme-switcher.js          ← تبديل الداكن/فاتح
│   │   └── responsive.js              ← تكييف الواجهة حسب الحجم
│   │
│   └── utils/                          ← ════ أدوات مساعدة ════
│       │
│       ├── helpers.js                 ← دوال عامة (formatDate, formatNumber, escape...)
│       ├── debounce.js                ← تأخير التنفيذ
│       ├── throttle.js                ← تقييد التنفيذ
│       ├── dom.js                     ← اختصارات DOM ($, $$, createElement...)
│       ├── storage.js                 ← localStorage wrapper آمن
│       ├── validators.js              ← بريد، اسم مستخدم، كلمة مرور، هاتف
│       └── format.js                  ← تنسيقات (حجم ملف، وقت، نسب)
│
│
├── pages/                              ← ═══ صفحات HTML ═══
│   │
│   ├── auth/                           ← ════ المصادقة ════
│   │   ├── login.html                 ← تسجيل الدخول (Captcha + تشفير)
│   │   └── register.html              ← إنشاء حساب (فحص القوة + توثيق)
│   │
│   ├── home/                           ← ════ الرئيسية ════
│   │   └── index.html                 ← الصفحة الرئيسية (Stories + Feed)
│   │
│   ├── profile/                        ← ════ الملف الشخصي ════
│   │   ├── index.html                 ← عرض الملف الشخصي
│   │   └── edit.html                  ← تعديل الملف الشخصي
│   │
│   ├── post/                           ← ════ المنشورات ════
│   │   ├── create.html                ← إنشاء منشور جديد
│   │   ├── detail.html                ← تفاصيل المنشور + التعليقات
│   │   └── pinned.html                ← المنشورات المثبّتة
│   │
│   ├── messages/                       ← ════ الرسائل ════
│   │   ├── index.html                 ← قائمة المحادثات
│   │   └── chat.html                  ← نافذة المحادثة
│   │
│   ├── stories/                        ← ════ القصص ════
│   │   ├── index.html                 ← شريط القصص
│   │   └── create.html                ← إنشاء قصة
│   │
│   ├── stories/                        ← ════ الريلز ════
│   └── reels/
│       └── index.html                 ← عرض الريلز (عمودي)
│
│   ├── search/                         ← ════ البحث ════
│   │   └── index.html                 ← بحث + اكتشاف + ترند
│   │
│   ├── groups/                         ← ════ المجموعات ════
│   │   ├── index.html                 ← قائمة المجموعات
│   │   ├── detail.html                ← تفاصيل مجموعة
│   │   └── create.html                ← إنشاء مجموعة
│   │
│   ├── pages/                          ← ════ الصفحات الرسمية ════
│   │   ├── index.html                 ← قائمة الصفحات
│   │   └── detail.html                ← تفاصيل صفحة
│   │
│   ├── notifications/                  ← ════ الإشعارات ════
│   │   └── index.html                 ← قائمة الإشعارات
│   │
│   ├── settings/                       ← ════ الإعدادات ════
│   │   ├── index.html                 ← قائمة الإعدادات الرئيسية
│   │   ├── account.html               ← إعدادات الحساب
│   │   ├── privacy.html               ← الخصوصية
│   │   ├── notifications.html         ← إعدادات الإشعارات
│   │   ├── appearance.html            ← المظهر (داكن/فاتح/حجم خط)
│   │   ├── security.html              ← الأمان (2FA + جلسات)
│   │   └── help.html                  ← المساعدة والشروط
│   │
│   ├── verification/                   ← ════ التوثيق ════
│   │   ├── index.html                 ← نظام التوثيق + طلب
│   │   └── request.html               ← نموذج طلب التوثيق
│   │
│   ├── ads/                            ← ════ الإعلانات ════
│   │   ├── index.html                 ← إدارة الحملات
│   │   └── create.html                ← إنشاء حملة إعلانية
│   │
│   ├── admin/                          ← ════ لوحة الإدارة ════
│   │   ├── dashboard.html             ← الرئيسية (إحصائيات + رسوم بيانية)
│   │   ├── users.html                 ← إدارة المستخدمين
│   │   ├── posts.html                 ← إدارة المنشورات
│   │   ├── reports.html               ← البلاغات
│   │   └── ads.html                   ← إدارة الإعلانات
│   │
│   └── errors/                         ← ════ صفحات الخطأ ════
│       ├── 404.html                   ← غير موجود
│       ├── 403.html                   ← غير مصرح
│       └── 500.html                   ← خطأ داخلي
│
│
├── components/                         ← ═══ مكوّنات HTML قابلة لإعادة الاستخدام ═══
│   │
│   ├── navbar.html                    ← شريط التنقل العلوي
│   ├── bottombar.html                 ← شريط التنقل السفلي
│   ├── post-card.html                 ← بطاقة منشور
│   ├── comment-card.html              ← بطاقة تعليق
│   ├── user-card.html                 ← بطاقة مستخدم
│   ├── group-card.html                ← بطاقة مجموعة
│   ├── page-card.html                 ← بطاقة صفحة رسمية
│   ├── message-bubble.html            ← فقاعة رسالة
│   ├── notification-item.html         ← عنصر إشعار
│   ├── story-bar.html                 ← شريط القصص
│   ├── story-viewer.html              ← عارض القصة
│   ├── search-bar.html                ← شريط البحث
│   ├── file-uploader.html             ← رافع الملفات
│   ├── video-player.html              ← مشغّل الفيديو
│   ├── captcha.html                   ← نظام Captcha
│   ├── skeleton.html                  ← هياكل التحميل
│   └── empty-state.html               ← حالات فارغة (لا منشورات، لا نتائج...)
│
│
├── data/                               ← ═══ البيانات التجريبية ═══
│   │
│   ├── users.json                     ← 20 مستخدم تجريبي
│   ├── posts.json                     ← 50 منشور تجريبي
│   ├── comments.json                  ← 100 تعليق تجريبي
│   ├── groups.json                    ← 8 مجموعات تجريبية
│   ├── pages.json                     ← 5 صفحات رسمية
│   ├── stories.json                   ← 15 قصة تجريبية
│   ├── notifications.json             ← 20 إشعار تجريبي
│   ├── conversations.json             ← 10 محادثات تجريبية
│   ├── banned-words.json              ← قائمة الكلمات المحظورة
│   ├── legal-terms.json               ← الشروط والأحكام
│   └── faq.json                       ← الأسئلة الشائعة
│
│
├── assets/                             ← ═══أصول ثابتة ═══
│   │
│   ├── images/                        ← صور ثابتة
│   │   ├── logo.svg                   ← الشعار
│   │   ├── logo-light.svg             ← الشعار للوضع الفاتح
│   │   ├── avatar-default.svg         ← صورة المستخدم الافتراضية
│   │   ├── empty-*.svg                ← رسومات الحالات الفارغة
│   │   └── onboarding/                ← صور شاشات الترحيب
│   │       ├── step1.svg
│   │       ├── step2.svg
│   │       └── step3.svg
│   │
│   ├── icons/                         ← أيقونات مخصصة
│   │   ├── favicon.svg
│   │   ├── apple-touch-icon.png
│   │   └── social/                    ← أيقونات المنصات
│   │       ├── twitter.svg
│   │       ├── whatsapp.svg
│   │       └── copy-link.svg
│   │
│   └── fonts/                         ← خطوط مخصصة (إن لزم)
│       ├── Tajawal-Regular.woff2
│       ├── Tajawal-Bold.woff2
│       └── DM-Mono.woff2
│
│
├── sw/                                 ← ═══ Service Worker (PWA) ═══
│   ├── sw.js                          ← Service Worker الرئيسي
│   └── cache-strategy.js              ← استراتيجية التخزين المؤقت
│
│
└── docs/                               ← ═══ التوثيق ═══
    ├── README.md                      ← شرح المشروع
    ├── CONTRIBUTING.md                ← كيفية المساهمة
    ├── CHANGELOG.md                   ← سجل التغييرات
    ├── architecture.md                ← شرح البنية
    ├── api-docs.md                    ← توثيق API
    └── database-schema.md             ← مخطط قاعدة البيانات
```

---

## ترتيب التحميل في `index.html`

هذا الترتيب **حرج** — أي خلل يكسر الكود:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <!-- 1. Meta -->
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>لو بوك</title>

    <!-- 2. External Fonts (يجب أن تُحمّل أولاً) -->
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>

    <!-- 3. CSS — بالترتيب (الأكثر عمومية أولاً) -->
    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="css/variables.css"/>
    <link rel="stylesheet" href="css/typography.css"/>
    <link rel="stylesheet" href="css/layout.css"/>
    <link rel="stylesheet" href="css/components.css"/>
    <link rel="stylesheet" href="css/utilities.css"/>
    <link rel="stylesheet" href="css/animations.css"/>
    <link rel="stylesheet" href="css/responsive.css"/>
    <link rel="stylesheet" href="css/themes/dark.css"/>

    <!-- 4. Page-specific CSS (يُحمّل شرطياً) -->
    <!-- مثال: <link rel="stylesheet" href="css/pages/profile.css"/> -->
</head>
<body>

    <!-- 5. Components (الشريط العلوي والسفلي) -->
    <div id="app">
        <!-- يُحمّل ديناميكياً بواسطة router.js -->
    </div>

    <!-- 6. JS — بالترتيب (الأساسيات أولاً) -->
    <!-- الطبقة 1: الأدوات والثوابت -->
    <script src="js/utils/helpers.js"></script>
    <script src="js/utils/debounce.js"></script>
    <script src="js/utils/throttle.js"></script>
    <script src="js/utils/dom.js"></script>
    <script src="js/utils/storage.js"></script>
    <script src="js/utils/validators.js"></script>
    <script src="js/utils/format.js"></script>
    <script src="js/core/constants.js"></script>
    <script src="js/core/config.js"></script>

    <!-- الطبقة 2: قاعدة البيانات -->
    <script src="js/database/db-manager.js"></script>
    <script src="js/database/migration.js"></script>
    <script src="js/database/stores/users.store.js"></script>
    <script src="js/database/stores/posts.store.js"></script>
    <script src="js/database/stores/comments.store.js"></script>
    <script src="js/database/stores/messages.store.js"></script>
    <script src="js/database/stores/conversations.store.js"></script>
    <script src="js/database/stores/notifications.store.js"></script>
    <script src="js/database/stores/files.store.js"></script>
    <script src="js/database/stores/groups.store.js"></script>
    <script src="js/database/stores/pages.store.js"></script>
    <script src="js/database/stores/stories.store.js"></script>
    <script src="js/database/stores/ads.store.js"></script>
    <script src="js/database/stores/settings.store.js"></script>
    <script src="js/database/seed.js"></script>

    <!-- الطبقة 3: الأمان -->
    <script src="js/auth/crypto.js"></script>
    <script src="js/auth/session.js"></script>
    <script src="js/auth/permissions.js"></script>
    <script src="js/auth/captcha.js"></script>
    <script src="js/auth/guards.js"></script>
    <script src="js/auth/auth-manager.js"></script>
    <script src="js/security/xss-filter.js"></script>
    <script src="js/security/csrf-token.js"></script>
    <script src="js/security/rate-limiter.js"></script>
    <script src="js/security/content-filter.js"></script>

    <!-- الطبقة 4: API المحاكي -->
    <script src="js/api/mock-server.js"></script>
    <script src="js/api/api-client.js"></script>
    <script src="js/api/endpoints/auth.api.js"></script>
    <script src="js/api/endpoints/users.api.js"></script>
    <script src="js/api/endpoints/posts.api.js"></script>
    <!-- ... باقي endpoints ... -->

    <!-- الطبقة 5: الخدمات -->
    <script src="js/realtime/event-bus.js"></script>
    <script src="js/realtime/presence.js"></script>
    <script src="js/realtime/typing-indicator.js"></script>
    <script src="js/services/post-service.js"></script>
    <script src="js/services/feed-service.js"></script>
    <script src="js/services/story-service.js"></script>
    <script src="js/services/message-service.js"></script>
    <script src="js/services/notification-service.js"></script>
    <script src="js/services/search-service.js"></script>
    <script src="js/services/file-service.js"></script>
    <script src="js/services/verification-service.js"></script>
    <script src="js/services/ad-service.js"></script>
    <script src="js/services/moderation-service.js"></script>
    <script src="js/services/analytics-service.js"></script>
    <script src="js/ai/ai-chat.js"></script>
    <script src="js/ai/summarizer.js"></script>
    <script src="js/ai/translator.js"></script>
    <script src="js/ai/spam-detector.js"></script>
    <script src="js/ai/recommender.js"></script>

    <!-- الطبقة 6: واجهة المستخدم -->
    <script src="js/ui/toast.js"></script>
    <script src="js/ui/modal.js"></script>
    <script src="js/ui/loading.js"></script>
    <script src="js/ui/lazy-load.js"></script>
    <script src="js/ui/infinite-scroll.js"></script>
    <script src="js/ui/form-validator.js"></script>
    <script src="js/ui/theme-switcher.js"></script>
    <script src="js/ui/renderer.js"></script>

    <!-- الطبقة 7: الموجّه والتطبيق -->
    <script src="js/core/state.js"></script>
    <script src="js/core/i18n.js"></script>
    <script src="js/core/router.js"></script>
    <script src="js/core/app.js"></script>
</body>
</html>
```

---

## الاعتمادية بين الطبقات (Dependency Order)

```
┌─────────────────────────────────────────────────┐
│                  app.js                          │  الطبقة 7: التطبيق
│                  router.js                       │
│                  state.js                        │
├─────────────────────────────────────────────────┤
│        renderer.js │ toast.js │ modal.js ...     │  الطبقة 6: واجهة المستخدم
├─────────────────────────────────────────────────┤
│   post-service.js │ feed-service.js │ ai-chat.js │  الطبقة 5: الخدمات
│   event-bus.js    │ notification-service.js       │
├─────────────────────────────────────────────────┤
│        api-client.js │ mock-server.js             │  الطبقة 4: API
├─────────────────────────────────────────────────┤
│   auth-manager.js │ crypto.js │ xss-filter.js    │  الطبقة 3: الأمان
├─────────────────────────────────────────────────┤
│   db-manager.js   │ users.store.js │ posts.store  │  الطبقة 2: قاعدة البيانات
├─────────────────────────────────────────────────┤
│   helpers.js      │ dom.js │ config.js │ constants │  الطبقة 1: الأدوات
└─────────────────────────────────────────────────┘
```

**القاعدة الذهبية**: كل طبقة تعتمد **فقط** على ما تحتها، لا تتجاوزها أبداً.

---

## خريطة الاتصال بين الأنظمة

```
المستخدم يضغط زر
        │
        ▼
   router.js ←──── يحدد أي صفحة HTML تُحمّل
        │
        ▼
   renderer.js ←── يحقن المكوّنات (navbar, post-card...)
        │
        ▼
   app.js ←──────── يبدأ lifecycle الصفحة
        │
        ├──→ auth-manager.js  ← فحص الصلاحيات
        │         │
        │         └──→ crypto.js + session.js
        │
        ├──→ post-service.js  ← مثال: إنشاء منشور
        │         │
        │         ├──→ xss-filter.js  ← تنقية النص
        │         ├──→ content-filter.js ← فلترة السبام
        │         ├──→ posts.store.js  ← حفظ في IndexedDB
        │         ├──→ event-bus.js    ← إشعار المستمعين
        │         └──→ notification-service.js ← إشعار المتابعين
        │
        ├──→ toast.js         ← عرض تأكيد
        └──→ renderer.js      ← تحديث العرض
```

---

## ملخص الأرقام

```
الفئة              │ العدد  │ الوصف
───────────────────┼────────┼───────────────────────
ملفات CSS          │   22   │ 8 عامة + 14 صفحة + 2 سمة
ملفات JS           │   75+  │ عبر 7 طبقات
صفحات HTML         │   35+  │ صفحات + مكوّنات
بيانات تجريبية     │   11   │ ملفات JSON
أصول ثابتة         │   15+  │ صور + أيقونات + خطوط
الكامل             │  160+  │ ملف مُنظّم ومترابط
```

هذا المخطط يضمن أن **أي ملف يُعدّل لا يكسر ملفاً آخر** لأن كل وحدة لها حدود واضحة و依靠 اتجاه واحد فقط — من الأسفل للأعلى.