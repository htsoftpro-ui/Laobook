<!DOCTYPE html>
<html class="dark" lang="ar" dir="rtl">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>لو بوك</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <style>
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;scroll-behavior:smooth}
        body{font-family:'Tajawal',sans-serif;min-height:100dvh;overflow-x:hidden;background:#0a0a0a;color:#e5e2e1}

        .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;transition:font-variation-settings .2s,color .2s}

        .app-bg{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse at 20% 0%,rgba(242,101,34,.06) 0%,transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(242,101,34,.04) 0%,transparent 50%),#0a0a0a}
        .app-bg::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");opacity:.3;pointer-events:none}

        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        @keyframes slideDown{from{opacity:0;transform:translateY(-10px) scaleY(.95)}to{opacity:1;transform:translateY(0) scaleY(1)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
        @keyframes ripple{0%{transform:scale(0);opacity:.5}100%{transform:scale(2.5);opacity:0}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes orbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes countBounce{0%{transform:scale(1)}30%{transform:scale(1.3)}60%{transform:scale(.9)}100%{transform:scale(1)}}
        @keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        @keyframes slideFromBottom{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
        @keyframes eyeOpen{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}

        .anim-fade{animation:fadeIn .3s ease}
        .anim-fadeUp{animation:fadeInUp .35s ease}

        /* ═══════ Top Navigation ═══════ */
        .top-nav{position:fixed;top:0;left:0;right:0;z-index:50;height:56px;display:flex;align-items:center;padding:0 16px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(89,65,56,.12);background:rgba(10,10,10,.8)}
        .top-nav .logo{display:flex;align-items:center;gap:8px}
        .top-nav .logo-icon{width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,#f26522,#e85d1c);display:flex;align-items:center;justify-content:center}
        .top-nav .logo-text{font-size:18px;font-weight:800;background:linear-gradient(135deg,#f26522,#ff7a3d);-webkit-background-clip:text;-webkit-text-fill-color:transparent}

        .top-nav-btn{position:relative;width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;border:none;background:transparent}
        .top-nav-btn:hover{background:rgba(255,255,255,.06)}
        .top-nav-btn:active{transform:scale(.92)}
        .top-nav-btn .notif-badge{position:absolute;top:4px;left:4px;min-width:16px;height:16px;border-radius:8px;background:#ef4444;color:white;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px;animation:countBounce .4s ease}

        .top-nav-btn .create-btn{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#f26522,#e85d1c);display:flex;align-items:center;justify-content:center;transition:all .3s}
        .top-nav-btn:hover .create-btn{box-shadow:0 4px 16px rgba(242,101,34,.3);transform:translateY(-1px)}

        /* ═══════ User Menu Dropdown ═══════ */
        .user-menu-trigger{position:relative;cursor:pointer}
        .user-menu-trigger img{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid transparent;transition:all .2s}
        .user-menu-trigger:hover img{border-color:#f26522}

        .dropdown{position:absolute;top:calc(100% + 8px);left:0;min-width:220px;background:#1a1a1a;border:1px solid rgba(89,65,56,.2);border-radius:16px;overflow:hidden;z-index:60;animation:slideDown .25s cubic-bezier(.4,0,.2,1);display:none;box-shadow:0 20px 60px rgba(0,0,0,.5)}
        .dropdown.open{display:block}
        .dropdown-item{display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:pointer;transition:all .2s;font-size:13px;font-weight:600}
        .dropdown-item:hover{background:rgba(242,101,34,.06)}
        .dropdown-item.danger{color:#f87171}
        .dropdown-item.danger:hover{background:rgba(239,68,68,.08)}
        .dropdown-divider{height:1px;background:rgba(89,65,56,.12);margin:4px 0}

        /* ═══════ Bottom Navigation ═══════ */
        .bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:50;height:64px;display:flex;align-items:center;justify-content:space-around;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-top:1px solid rgba(89,65,56,.12);background:rgba(10,10,10,.85);padding-bottom:env(safe-area-inset-bottom,0px)}

        .nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 12px;border-radius:14px;cursor:pointer;transition:all .3s;position:relative;border:none;background:transparent;outline:none;-webkit-tap-highlight-color:transparent}
        .nav-item .nav-icon{font-size:24px;color:#7a7570;transition:all .3s}
        .nav-item .nav-label{font-size:9px;font-weight:600;color:#7a7570;transition:all .3s}
        .nav-item .nav-dot{width:4px;height:4px;border-radius:50%;background:#f26522;position:absolute;top:4px;opacity:0;transition:all .3s}

        .nav-item.active .nav-icon{color:#f26522;font-variation-settings:'FILL' 1}
        .nav-item.active .nav-label{color:#f26522}
        .nav-item.active .nav-dot{opacity:1}

        .nav-item:active{transform:scale(.88)}
        .nav-item .ripple{position:absolute;border-radius:50%;background:rgba(242,101,34,.2);animation:ripple .5s ease-out;pointer-events:none}

        .nav-badge{position:absolute;top:2px;right:2px;min-width:16px;height:16px;border-radius:8px;background:#ef4444;color:white;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px;z-index:2}
        .nav-badge.animate{animation:countBounce .4s ease}

        /* ═══════ Login / Register ═══════ */
        .auth-page{min-height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;position:relative;z-index:10}

        .auth-bg{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse at 30% 20%,rgba(242,101,34,.1) 0%,transparent 60%),radial-gradient(ellipse at 70% 80%,rgba(242,101,34,.06) 0%,transparent 50%),#0a0a0a}
        .auth-bg::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");opacity:.4;pointer-events:none}

        .auth-card{width:100%;max-width:400px;background:rgba(32,31,31,.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(89,65,56,.15);border-radius:24px;padding:32px 28px;animation:scaleIn .5s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
        .auth-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,#f26522,transparent)}

        .auth-field{background:rgba(42,42,42,.5);border:1px solid rgba(89,65,56,.2);border-radius:14px;padding:14px 16px;color:#e5e2e1;font-size:14px;width:100%;outline:none;transition:all .3s;font-family:'Tajawal',sans-serif}
        .auth-field:focus{border-color:#f26522;box-shadow:0 0 0 3px rgba(242,101,34,.12)}
        .auth-field::placeholder{color:#7a7570}
        .auth-field.error{border-color:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.1);animation:shake .4s ease}

        @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}

        .auth-btn{width:100%;padding:14px;border-radius:14px;border:none;font-weight:700;font-size:15px;cursor:pointer;transition:all .3s;font-family:'Tajawal',sans-serif;display:flex;align-items:center;justify-content:center;gap:8px}
        .auth-btn-primary{background:linear-gradient(135deg,#f26522,#e85d1c);color:white}
        .auth-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(242,101,34,.3)}
        .auth-btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none;box-shadow:none}
        .auth-btn-ghost{background:transparent;color:#e5e2e1;border:1px solid rgba(89,65,56,.3)}
        .auth-btn-ghost:hover{border-color:#f26522;background:rgba(242,101,34,.06)}

        .auth-social{display:flex;gap:12px}
        .auth-social-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;border-radius:14px;border:1px solid rgba(89,65,56,.2);background:rgba(42,42,42,.3);cursor:pointer;transition:all .3s;font-size:13px;font-weight:600;color:#e5e2e1}
        .auth-social-btn:hover{border-color:rgba(242,101,34,.3);background:rgba(42,42,42,.5)}

        .auth-tab{flex:1;padding:10px;border-radius:10px;font-weight:700;font-size:14px;cursor:pointer;transition:all .3s;border:none;background:transparent;color:#7a7570;font-family:'Tajawal',sans-serif}
        .auth-tab.active{background:rgba(242,101,34,.12);color:#f26522}

        .pw-toggle{position:absolute;left:12px;top:50%;transform:translateY(-50%);cursor:pointer;color:#7a7570;transition:color .2s}
        .pw-toggle:hover{color:#f26522}

        /* ═══════ Page Content Area ═══════ */
        .page-content{padding-top:56px;padding-bottom:64px;min-height:100dvh;position:relative;z-index:1}

        /* ═══════ Stories Bar ═══════ */
        .stories-bar{display:flex;gap:12px;padding:12px 16px;overflow-x:auto;scrollbar-width:none;border-bottom:1px solid rgba(89,65,56,.08)}
        .stories-bar::-webkit-scrollbar{display:none}
        .story-item{display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0;cursor:pointer}
        .story-ring{width:60px;height:60px;border-radius:50%;padding:3px;background:linear-gradient(135deg,#f26522,#ff7a3d,#f26522);background-size:200% 200%;animation:shimmer 3s linear infinite}
        .story-ring img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:3px solid #0a0a0a}
        .story-ring.viewed{background:rgba(89,65,56,.3)}
        .story-add{width:60px;height:60px;border-radius:50%;border:2px dashed rgba(242,101,34,.4);display:flex;align-items:center;justify-content:center;background:rgba(242,101,34,.05);cursor:pointer;transition:all .3s}
        .story-add:hover{border-color:#f26522;background:rgba(242,101,34,.1)}

        /* ═══════ Post Card ═══════ */
        .post-card{background:rgba(42,42,42,.2);border:1px solid rgba(89,65,56,.08);border-radius:16px;overflow:hidden;margin:8px 16px;transition:border-color .3s}
        .post-card:hover{border-color:rgba(89,65,56,.15)}
        .post-header{display:flex;align-items:center;gap:10px;padding:14px 16px}
        .post-header img{width:38px;height:38px;border-radius:50%;object-fit:cover;cursor:pointer}
        .post-body{padding:0 16px 12px;line-height:1.7;font-size:14px}
        .post-body img{width:100%;border-radius:12px;margin-top:8px;object-fit:cover;max-height:400px}
        .post-actions{display:flex;align-items:center;padding:10px 16px;border-top:1px solid rgba(89,65,56,.08);gap:4px}
        .post-action-btn{display:flex;align-items:center;gap:5px;padding:8px 12px;border-radius:10px;cursor:pointer;transition:all .2s;font-size:12px;font-weight:600;color:#7a7570;border:none;background:transparent;font-family:'Tajawal',sans-serif}
        .post-action-btn:hover{background:rgba(255,255,255,.04)}
        .post-action-btn:active{transform:scale(.9)}
        .post-action-btn.liked{color:#ef4444}
        .post-action-btn.liked .material-symbols-outlined{font-variation-settings:'FILL' 1}

        /* ═══════ Feed Skeleton ═══════ */
        .skeleton{background:linear-gradient(90deg,rgba(42,42,42,.3) 25%,rgba(60,60,60,.3) 50%,rgba(42,42,42,.3) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:8px}

        /* ═══════ Notification Panel ═══════ */
        .notif-panel{position:fixed;top:56px;left:0;right:0;bottom:64px;z-index:40;background:rgba(10,10,10,.95);backdrop-filter:blur(20px);transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);overflow-y:auto;padding:16px}
        .notif-panel.open{transform:translateX(0)}

        /* ═══════ Search Page ═══════ */
        .search-bar{position:sticky;top:56px;z-index:10;padding:12px 16px;background:rgba(10,10,10,.9);backdrop-filter:blur(12px)}
        .search-input{width:100%;background:rgba(42,42,42,.5);border:1px solid rgba(89,65,56,.2);border-radius:14px;padding:12px 16px 12px 44px;color:#e5e2e1;font-size:14px;outline:none;transition:all .3s;font-family:'Tajawal',sans-serif}
        .search-input:focus{border-color:#f26522;box-shadow:0 0 0 3px rgba(242,101,34,.1)}
        .search-input::placeholder{color:#7a7570}

        .trending-tag{display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;cursor:pointer;transition:all .2s}
        .trending-tag:hover{background:rgba(242,101,34,.04)}
        .trending-tag .tag-rank{font-size:18px;font-weight:800;color:#f26522;width:28px;text-align:center}

        /* ═══════ Toast ═══════ */
        .toast{position:fixed;top:70px;left:50%;transform:translateX(-50%) translateY(-100px);z-index:9999;padding:14px 24px;border-radius:14px;font-weight:700;font-size:13px;opacity:0;transition:all .5s cubic-bezier(.68,-.55,.265,1.55);display:flex;align-items:center;gap:8px;backdrop-filter:blur(12px);max-width:90vw;color:white}
        .toast.show{transform:translateX(-50%) translateY(0);opacity:1}
        .toast.success{background:rgba(34,197,94,.2);border:1px solid rgba(34,197,94,.4)}
        .toast.error{background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.4)}
        .toast.info{background:rgba(59,130,246,.2);border:1px solid rgba(59,130,246,.4)}

        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#474746;border-radius:4px}
    </style>
</head>
<body>
<div class="app-bg"></div>
<div id="toastEl" class="toast"></div>

<!-- ═══════════════════════════════════════════ -->
<!-- TOP NAVIGATION BAR -->
<!-- ═══════════════════════════════════════════ -->
<nav class="top-nav" id="topNav">
    <div class="logo">
        <div class="logo-icon"><span class="material-symbols-outlined text-white text-[18px]" style="font-variation-settings:'FILL' 1">balance</span></div>
        <span class="logo-text">لو بوك</span>
    </div>

    <div class="flex items-center gap-1 mr-auto">
        <!-- Notifications -->
        <div class="top-nav-btn" onclick="toggleNotifPanel()">
            <span class="material-symbols-outlined text-[#e1bfb3] text-[22px]">notifications</span>
            <span class="notif-badge" id="notifBadge">5</span>
        </div>

        <!-- Create Post -->
        <div class="top-nav-btn" onclick="showToast('إنشاء منشور جديد','info')">
            <div class="create-btn"><span class="material-symbols-outlined text-white text-[20px]">add</span></div>
        </div>

        <!-- User Menu -->
        <div class="user-menu-trigger" onclick="toggleUserMenu(event)">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" id="userAvatarNav" alt="user"/>
        </div>

        <!-- Dropdown -->
        <div class="dropdown" id="userDropdown">
            <div class="px-4 py-3 border-b" style="border-color:rgba(89,65,56,.12)">
                <p class="font-bold text-sm">عبدالملك بن محمد</p>
                <p class="text-[11px]" style="color:#7a7570">@abdulmalik_m</p>
            </div>
            <div class="dropdown-item" onclick="navigateTo('profile');closeUserMenu()"><span class="material-symbols-outlined text-[18px]" style="color:#f26522">person</span>الملف الشخصي</div>
            <div class="dropdown-item" onclick="navigateTo('settings');closeUserMenu()"><span class="material-symbols-outlined text-[18px]" style="color:#7a7570">settings</span>الإعدادات</div>
            <div class="dropdown-item" onclick="showToast('المفضلة','info');closeUserMenu()"><span class="material-symbols-outlined text-[18px]" style="color:#7a7570">bookmark</span>المحفوظات</div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item danger" onclick="handleLogout()"><span class="material-symbols-outlined text-[18px]">logout</span>تسجيل الخروج</div>
        </div>
    </div>
</nav>

<!-- ═══════════════════════════════════════════ -->
<!-- NOTIFICATION PANEL -->
<!-- ═══════════════════════════════════════════ -->
<div class="notif-panel" id="notifPanel">
    <div class="flex items-center justify-between mb-4">
        <h2 class="font-extrabold text-lg">الإشعارات</h2>
        <button onclick="closeNotifPanel()" class="p-2 rounded-full hover:bg-white/5"><span class="material-symbols-outlined text-[#7a7570]">close</span></button>
    </div>
    <div id="notifList" class="space-y-2"></div>
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- MAIN PAGE CONTENT -->
<!-- ═══════════════════════════════════════════ -->
<div class="page-content" id="pageContent">
    <!-- Rendered dynamically -->
</div>

<!-- ═══════════════════════════════════════════ -->
<!-- BOTTOM NAVIGATION BAR -->
<!-- ═══════════════════════════════════════════ -->
<nav class="bottom-nav" id="bottomNav">
    <button class="nav-item active" data-page="home" onclick="navigateTo('home',this)">
        <div class="nav-dot"></div>
        <span class="material-symbols-outlined nav-icon">home</span>
        <span class="nav-label">الرئيسية</span>
    </button>
    <button class="nav-item" data-page="search" onclick="navigateTo('search',this)">
        <div class="nav-dot"></div>
        <span class="material-symbols-outlined nav-icon">search</span>
        <span class="nav-label">البحث</span>
    </button>
    <button class="nav-item" data-page="reels" onclick="navigateTo('reels',this)">
        <div class="nav-dot"></div>
        <span class="material-symbols-outlined nav-icon">movie</span>
        <span class="nav-label">ريلز</span>
    </button>
    <button class="nav-item" data-page="messages" onclick="navigateTo('messages',this)">
        <div class="nav-dot"></div>
        <span class="material-symbols-outlined nav-icon">chat</span>
        <span class="nav-label">الرسائل</span>
        <span class="nav-badge" id="msgBadge">7</span>
    </button>
    <button class="nav-item" data-page="profile" onclick="navigateTo('profile',this)">
        <div class="nav-dot"></div>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" class="w-6 h-6 rounded-full object-cover nav-icon" style="border:2px solid transparent;object-fit:cover"/>
        <span class="nav-label">حسابي</span>
    </button>
</nav>

<!-- ═══════════════════════════════════════════ -->
<!-- LOGIN / REGISTER PAGE (hidden by default) -->
<!-- ═══════════════════════════════════════════ -->
<div id="authPage" class="auth-page" style="display:none">
    <div class="auth-bg"></div>
    <div class="auth-card" id="authCard">
        <!-- Rendered dynamically -->
    </div>
</div>

<script>
// ═══════════════════════════════════════════════════════════════
// ██  DATA  ██
// ═══════════════════════════════════════════════════════════════
const ME = {id:'u1',name:'عبدالملك بن محمد',username:'abdulmalik_m',avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',bio:'محامي ومستشار قانوني',followers:12400,following:340};

const USERS = [
    {id:'u2',name:'د. نورة القحطاني',username:'nora_q',avatar:'https://i.pravatar.cc/60?img=5',verified:true},
    {id:'u3',name:'أ. فهد العتيبي',username:'fahad_o',avatar:'https://i.pravatar.cc/60?img=12',verified:true},
    {id:'u4',name:'المكتبة القانونية',username:'law_library',avatar:'https://i.pravatar.cc/60?img=22',verified:true},
    {id:'u5',name:'أ. سارة المنصور',username:'sarah_m',avatar:'https://i.pravatar.cc/60?img=9',verified:false},
    {id:'u6',name:'د. خالد الشمري',username:'khalid_s',avatar:'https://i.pravatar.cc/60?img=15',verified:true},
    {id:'u7',name:'أحمد البقمي',username:'ahmed_b',avatar:'https://i.pravatar.cc/60?img=51',verified:false},
    {id:'u8',name:'منى الحربي',username:'mona_h',avatar:'https://i.pravatar.cc/60?img=44',verified:false},
    {id:'u9',name:'مؤسسة العدالة',username:'adala_org',avatar:'https://i.pravatar.cc/60?img=60',verified:true},
    {id:'u10',name:'محمد السالم',username:'m_salem',avatar:'https://i.pravatar.cc/60?img=53',verified:false}
];

const STORIES = [
    {id:'s1',user:USERS[0],image:'https://picsum.photos/seed/st1/400/700',viewed:false},
    {id:'s2',user:USERS[1],image:'https://picsum.photos/seed/st2/400/700',viewed:false},
    {id:'s3',user:USERS[2],image:'https://picsum.photos/seed/st3/400/700',viewed:true},
    {id:'s4',user:USERS[3],image:'https://picsum.photos/seed/st4/400/700',viewed:false},
    {id:'s5',user:USERS[4],image:'https://picsum.photos/seed/st5/400/700',viewed:true},
    {id:'s6',user:USERS[5],image:'https://picsum.photos/seed/st6/400/700',viewed:false},
    {id:'s7',user:USERS[6],image:'https://picsum.photos/seed/st7/400/700',viewed:true},
];

const POSTS = [
    {id:'p1',author:USERS[0],text:'نصيحة قانونية مهمة: عند توقيع أي عقد تجاري، تأكد من وجود بند التحكيم لتسوية النزاعات. هذا يوفر عليك الكثير من الوقت والمال.',image:null,likes:2340,liked:false,comments:189,views:12000,time:'منذ ساعتين'},
    {id:'p2',author:USERS[1],text:'المحكمة العليا أصدرت قراراً مهماً لصالح حقوق المستهلك في العقود الإلكترونية. القرار ينص على حق الإلغاء خلال 7 أيام من تاريخ الشراء.',image:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',likes:5670,liked:false,comments:432,views:34000,time:'منذ 5 ساعات'},
    {id:'p3',author:USERS[2],text:'📚 أفضل 5 كتب للمبتدئين في القانون التجاري — مراجع أساسية لكل طالب قانون. شاركوا المنشور مع من يحتاجه!',image:null,likes:8920,liked:false,comments:567,views:56000,time:'أمس'},
    {id:'p4',author:USERS[4],text:'بحث جديد حول التحكيم الرقمي في دول مجلس التعاون الخليجي. التغييرات الجديدة تشمل قبول الأدلة الرقمية وإجراءات أسرع.',image:null,likes:4210,liked:false,comments:198,views:23000,time:'منذ 7 ساعات'},
    {id:'p5',author:USERS[3],text:'كيف تحمي نفسك قانونياً عند تأسيس شركتك؟\n\n1. اختر الشكل القانوني المناسب\n2. وضّع عقد تأسيس محكم\n3. سجّل العلامة التجارية\n4. احصل على تأمين شامل\n5. عيّن محامياً متخصصاً',image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',likes:3450,liked:false,comments:234,views:18000,time:'منذ 3 ساعات'},
    {id:'p6',author:USERS[5],text:'هل تعلم أنك يمكنك تقديم شكوى إلكترونية عبر منصة وزارة العدل مباشرة من هاتفك؟ الخطوات بسيطة ومتاحة 24/7.',image:null,likes:15600,liked:false,comments:890,views:92000,time:'منذ ساعة'},
    {id:'p7',author:USERS[6],text:'نصائح قانونية للموظفين: اعرف حقوقك في عقد العمل قبل التوقيع! لا تدع أي بند يفوتك.',image:null,likes:7800,liked:false,comments:456,views:42000,time:'منذ 4 ساعات'},
    {id:'p8',author:USERS[7],text:'📊 إنفوجرافيك: إحصائيات القضاء السعودي 2024 — أرقام مذهلة تعكس التحول الرقمي!',image:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',likes:12400,liked:false,comments:890,views:78000,time:'منذ 8 ساعات'}
];

const NOTIFICATIONS = [
    {id:'n1',type:'like',user:USERS[0],text:'أعجب بمنشورك',time:'منذ 5 دقائق',read:false},
    {id:'n2',type:'comment',user:USERS[1],text:'علّق على منشورك: "معلومة قيمة جداً!"',time:'منذ 15 دقيقة',read:false},
    {id:'n3',type:'follow',user:USERS[5],text:'بدأ متابعتك',time:'منذ ساعة',read:false},
    {id:'n4',type:'mention',user:USERS[2],text:'أشار إليك في منشور',time:'منذ ساعتين',read:false},
    {id:'n5',type:'like',user:USERS[6],text:'أعجب بتعليقك',time:'منذ 3 ساعات',read:false},
    {id:'n6',type:'system',user:null,text:'مرحباً بك في لو بوك! أكمل ملفك الشخصي.',time:'منذ يوم',read:true},
    {id:'n7',type:'comment',user:USERS[3],text:'علّق على منشورك: "هل هذا يشمل العقود القديمة؟"',time:'منذ يوم',read:true},
];

const TRENDING = [
    {tag:'#قانون_العمل',posts:'12.5K'},
    {tag:'#المحاكم_الإلكترونية',posts:'8.9K'},
    {tag:'#حقوق_المستهلك',posts:'6.2K'},
    {tag:'#تأسيس_شركات',posts:'5.1K'},
    {tag:'#تحكيم_دولي',posts:'3.8K'},
    {tag:'#قانون_الأسرة',posts:'3.2K'},
    {tag:'#جرائم_إلكترونية',posts:'2.9K'},
];

const CONVERSATIONS = [
    {id:'c1',user:USERS[0],lastMsg:'تم إرسال العقد، راجعه وأرسل ملاحظاتك',unread:3,time:'منذ 5 دقائق'},
    {id:'c2',user:USERS[1],lastMsg:'شكراً على المساعدة!',unread:0,time:'منذ ساعة'},
    {id:'c3',user:USERS[2],lastMsg:'هل متاح لمناقشة القضية؟',unread:1,time:'منذ ساعتين'},
    {id:'c4',user:USERS[4],lastMsg:'وصلني الملف، شكراً',unread:0,time:'أمس'},
    {id:'c5',user:USERS[6],lastMsg:'أحتاج رأيك القانوني في موضوع...',unread:2,time:'منذ 3 ساعات'},
];

// ═══════════════════════════════════════════════════════════════
// ██  STATE  ██
// ═══════════════════════════════════════════════════════════════
let isLoggedIn = true;
let currentPage = 'home';
let notifPanelOpen = false;
let dropdownOpen = false;
let authMode = 'login'; // login or register
let pwVisible = false;
let searchQuery = '';

// ═══════════════════════════════════════════════════════════════
// ██  UTILITY  ██
// ═══════════════════════════════════════════════════════════════
function esc(t){if(typeof t!=='string')return'';const m={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'};return t.replace(/[&<>"']/g,c=>m[c])}
function fmtNum(n){if(n>=1e6)return(n/1e6).toFixed(1)+'M';if(n>=1e3)return(n/1e3).toFixed(1)+'K';return n.toString()}

// ═══════════════════════════════════════════════════════════════
// ██  NAVIGATION  ██
// ═══════════════════════════════════════════════════════════════
function navigateTo(page, btnEl){
    currentPage = page;

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(n=>{
        n.classList.remove('active');
        if(n.dataset.page === page) n.classList.add('active');
    });

    // Animate ripple on button
    if(btnEl){
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = '40px';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.marginLeft = '-20px';
        ripple.style.marginTop = '-20px';
        btnEl.appendChild(ripple);
        setTimeout(()=>ripple.remove(),500);
    }

    closeNotifPanel();
    closeUserMenu();
    renderPage();
}

function renderPage(){
    const area = document.getElementById('pageContent');
    switch(currentPage){
        case 'home': renderHome(area); break;
        case 'search': renderSearch(area); break;
        case 'reels': renderReels(area); break;
        case 'messages': renderMessages(area); break;
        case 'profile': renderProfile(area); break;
    }
}

// ═══════════════════════════════════════════════════════════════
// ██  HOME PAGE  ██
// ═══════════════════════════════════════════════════════════════
function renderHome(area){
    area.innerHTML = `
    <!-- Stories -->
    <div class="stories-bar">
        <div class="story-item">
            <div class="story-add" onclick="showToast('إنشاء قصة','info')">
                <span class="material-symbols-outlined text-[#f26522] text-[24px]">add</span>
            </div>
            <span class="text-[9px] font-bold" style="color:#7a7570">قصتك</span>
        </div>
        ${STORIES.map((s,i)=>`
        <div class="story-item anim-fadeUp" style="animation-delay:${(i+1)*.05}s;opacity:0" onclick="viewStory('${s.id}')">
            <div class="story-ring ${s.viewed?'viewed':''}">
                <img src="${s.user.avatar}" alt="${esc(s.user.name)}" loading="lazy"/>
            </div>
            <span class="text-[9px] font-bold truncate max-w-[60px]" style="color:${s.viewed?'#7a7570':'#e1bfb3'}">${s.user.username.substring(0,10)}</span>
        </div>`).join('')}
    </div>

    <!-- Posts Feed -->
    <div id="feedContainer">
        ${POSTS.map((p,i)=>renderPostCard(p,i)).join('')}
        <div id="scrollSentinel" class="h-1"></div>
    </div>

    <div class="text-center py-8" style="color:#7a7570">
        <span class="material-symbols-outlined text-[32px] block mx-auto mb-2" style="color:#353534">hourglass_empty</span>
        <p class="text-xs">لا مزيد من المنشورات حالياً</p>
    </div>`;
}

function renderPostCard(p, idx){
    const delay = Math.min(idx*.08,.5);
    return `
    <div class="post-card anim-fadeUp" style="animation-delay:${delay}s;opacity:0">
        <div class="post-header">
            <img src="${p.author.avatar}" alt="${esc(p.author.name)}" loading="lazy"/>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-1.5">
                    <span class="font-bold text-sm">${esc(p.author.name)}</span>
                    ${p.author.verified?'<span class="material-symbols-outlined text-blue-400 text-[14px]" style="font-variation-settings:FILL 1">verified</span>':''}
                </div>
                <span class="text-[10px]" style="color:#7a7570">${p.time}</span>
            </div>
            <button class="p-1.5 rounded-full hover:bg-white/5"><span class="material-symbols-outlined text-[#7a7570] text-[20px]">more_horiz</span></button>
        </div>
        <div class="post-body">
            <p class="text-[13px] whitespace-pre-line">${formatPostText(p.text)}</p>
            ${p.image?`<img src="${p.image}" alt="post image" loading="lazy" class="mt-2"/>`:''}
        </div>
        <div class="post-actions">
            <button class="post-action-btn ${p.liked?'liked':''}" onclick="toggleLike('${p.id}',this)">
                <span class="material-symbols-outlined text-[20px]">favorite</span>
                <span class="like-count">${fmtNum(p.likes + (p.liked?1:0))}</span>
            </button>
            <button class="post-action-btn" onclick="showToast('التعليقات','info')">
                <span class="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                <span>${fmtNum(p.comments)}</span>
            </button>
            <button class="post-action-btn" onclick="showToast('تمت المشاركة','success')">
                <span class="material-symbols-outlined text-[20px]">share</span>
                <span>مشاركة</span>
            </button>
            <button class="post-action-btn mr-auto" onclick="showToast('تم الحفظ','success')">
                <span class="material-symbols-outlined text-[20px]">bookmark</span>
            </button>
            <span class="text-[10px]" style="color:#7a7570">${fmtNum(p.views)} مشاهدة</span>
        </div>
    </div>`;
}

function formatPostText(text){
    let s = esc(text);
    s = s.replace(/#[\u0600-\u06FFa-zA-Z0-9_]+/g, m=>`<span style="color:#f26522;font-weight:600">${m}</span>`);
    s = s.replace(/\n/g,'<br>');
    return s;
}

function toggleLike(postId, btn){
    const post = POSTS.find(p=>p.id===postId);
    if(!post) return;
    post.liked = !post.liked;
    btn.classList.toggle('liked');
    btn.querySelector('.like-count').textContent = fmtNum(post.likes + (post.liked?1:0));
    if(post.liked){
        btn.style.transform='scale(1.15)';
        setTimeout(()=>btn.style.transform='',200);
    }
}

function viewStory(storyId){
    const story = STORIES.find(s=>s.id===storyId);
    if(!story) return;
    story.viewed = true;
    showToast('عرض قصة '+story.user.name,'info');
    renderHome(document.getElementById('pageContent'));
}

// ═══════════════════════════════════════════════════════════════
// ██  SEARCH PAGE  ██
// ═══════════════════════════════════════════════════════════════
function renderSearch(area){
    area.innerHTML = `
    <div class="search-bar">
        <div class="relative">
            <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#7a7570] text-[20px]">search</span>
            <input type="text" class="search-input" placeholder="ابحث عن مستخدم، منشور، أو موضوع..." id="searchInput" value="${searchQuery}" oninput="handleSearch(this.value)"/>
            ${searchQuery?'<button onclick="searchQuery=\'\';renderSearch(document.getElementById(\'pageContent\'))" class="absolute left-4 top-1/2 -translate-y-1/2"><span class="material-symbols-outlined text-[#7a7570] text-[18px]">close</span></button>':''}
        </div>
    </div>

    ${!searchQuery ? `
    <!-- Trending -->
    <div class="px-4 pt-3">
        <h3 class="font-bold text-sm mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-[#f26522] text-[18px]" style="font-variation-settings:'FILL' 1">trending_up</span>
            الأكثر رواجاً
        </h3>
        <div class="space-y-1">
            ${TRENDING.map((t,i)=>`
            <div class="trending-tag anim-fadeUp" style="animation-delay:${i*.05}s;opacity:0" onclick="searchQuery='${t.tag}';renderSearch(document.getElementById('pageContent'))">
                <span class="tag-rank">${i+1}</span>
                <div class="flex-1">
                    <p class="font-bold text-sm" style="color:#e1bfb3">${t.tag}</p>
                    <p class="text-[10px]" style="color:#7a7570">${t.posts} منشور</p>
                </div>
                <span class="material-symbols-outlined text-[#7a7570] text-[18px]">trending_up</span>
            </div>`).join('')}
        </div>
    </div>
    ` : `
    <!-- Search Results -->
    <div class="px-4 pt-3 space-y-2">
        <p class="text-xs mb-3" style="color:#7a7570">نتائج البحث عن: <strong style="color:#f26522">${esc(searchQuery)}</strong></p>
        ${USERS.filter(u=>u.name.includes(searchQuery)||u.username.includes(searchQuery)).map(u=>`
        <div class="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/3 anim-fadeUp" onclick="showToast('عرض ملف ${esc(u.name)}','info')">
            <img src="${u.avatar}" class="w-11 h-11 rounded-full object-cover"/>
            <div class="flex-1">
                <div class="flex items-center gap-1.5"><span class="font-bold text-sm">${esc(u.name)}</span>${u.verified?'<span class="material-symbols-outlined text-blue-400 text-[14px]" style="font-variation-settings:FILL 1">verified</span>':''}</div>
                <span class="text-xs" style="color:#7a7570">@${esc(u.username)}</span>
            </div>
        </div>`).join('')||'<p class="text-center text-sm py-8" style="color:#7a7570">لا توجد نتائج</p>'}
    </div>`}`;
}

function handleSearch(val){
    searchQuery = val;
    if(val.length > 0){
        // Live search — debounce in real app
        const results = USERS.filter(u=>u.name.includes(val)||u.username.includes(val));
        const area = document.getElementById('pageContent');
        // Re-render results only
        const resultsDiv = area.querySelector('.space-y-2');
        if(resultsDiv){
            resultsDiv.innerHTML = results.map(u=>`
            <div class="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/3 anim-fadeUp" onclick="showToast('عرض ملف ${esc(u.name)}','info')">
                <img src="${u.avatar}" class="w-11 h-11 rounded-full object-cover"/>
                <div class="flex-1">
                    <div class="flex items-center gap-1.5"><span class="font-bold text-sm">${esc(u.name)}</span>${u.verified?'<span class="material-symbols-outlined text-blue-400 text-[14px]" style="font-variation-settings:FILL 1">verified</span>':''}</div>
                    <span class="text-xs" style="color:#7a7570">@${esc(u.username)}</span>
                </div>
            </div>`).join('')||'<p class="text-center text-sm py-8" style="color:#7a7570">لا توجد نتائج</p>';
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// ██  REELS PAGE  ██
// ═══════════════════════════════════════════════════════════════
function renderReels(area){
    const reels = POSTS.slice(0,5);
    area.innerHTML = `
    <div class="px-4 pt-3">
        <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-[#f26522] text-[22px]" style="font-variation-settings:'FILL' 1">movie</span>
            <h2 class="font-extrabold text-lg">ريلز قانونية</h2>
        </div>
        <div class="space-y-4">
            ${reels.map((r,i)=>`
            <div class="rounded-2xl overflow-hidden border anim-fadeUp" style="animation-delay:${i*.1}s;opacity:0;border-color:rgba(89,65,56,.12);background:rgba(42,42,42,.25)">
                <div class="relative" style="aspect-ratio:9/16;max-height:500px;background:linear-gradient(135deg,#1a1a1a,#2a2a2a)">
                    <img src="https://picsum.photos/seed/reel${i}/360/640" class="w-full h-full object-cover" loading="lazy"/>
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="flex items-center gap-2 mb-2">
                            <img src="${r.author.avatar}" class="w-8 h-8 rounded-full object-cover"/>
                            <span class="font-bold text-xs text-white">${esc(r.author.name)}</span>
                        </div>
                        <p class="text-xs text-white/80 line-clamp-2">${esc(r.text.substring(0,80))}</p>
                    </div>
                    <div class="absolute left-3 bottom-20 flex flex-col gap-4 items-center">
                        <button class="flex flex-col items-center gap-0.5" onclick="showToast('إعجاب','info')"><span class="material-symbols-outlined text-white text-[24px]">favorite</span><span class="text-[9px] text-white font-bold">${fmtNum(r.likes)}</span></button>
                        <button class="flex flex-col items-center gap-0.5" onclick="showToast('التعليقات','info')"><span class="material-symbols-outlined text-white text-[24px]">chat_bubble</span><span class="text-[9px] text-white font-bold">${fmtNum(r.comments)}</span></button>
                        <button class="flex flex-col items-center gap-0.5" onclick="showToast('مشاركة','info')"><span class="material-symbols-outlined text-white text-[24px]">share</span></button>
                    </div>
                </div>
            </div>`).join('')}
        </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// ██  MESSAGES PAGE  ██
// ═══════════════════════════════════════════════════════════════
function renderMessages(area){
    const totalUnread = CONVERSATIONS.reduce((s,c)=>s+c.unread,0);
    area.innerHTML = `
    <div class="px-4 pt-3">
        <div class="flex items-center justify-between mb-4">
            <h2 class="font-extrabold text-lg">الرسائل</h2>
            ${totalUnread>0?`<span class="text-xs font-bold px-3 py-1 rounded-full" style="background:rgba(242,101,34,.12);color:#f26522">${totalUnread} غير مقروءة</span>`:''}
        </div>
        <div class="space-y-1">
            ${CONVERSATIONS.map((c,i)=>`
            <div class="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all anim-fadeUp" style="animation-delay:${i*.06}s;opacity:0;${c.unread?'background:rgba(242,101,34,.03)':''}" onclick="showToast('فتح محادثة ${esc(c.user.name)}','info')">
                <div class="relative">
                    <img src="${c.user.avatar}" class="w-12 h-12 rounded-full object-cover"/>
                    ${c.unread?`<div class="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2" style="border-color:#0a0a0a"></div>`:''}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-sm ${c.unread?'':'font-normal'}">${esc(c.user.name)}</span>
                        <span class="text-[10px]" style="color:#7a7570">${c.time}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <p class="text-xs truncate flex-1 ${c.unread?'font-bold':'font-normal'}" style="color:${c.unread?'#e1bfb3':'#7a7570'}">${esc(c.lastMsg)}</p>
                        ${c.unread?`<span class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style="background:#f26522">${c.unread}</span>`:''}
                    </div>
                </div>
            </div>`).join('')}
        </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// ██  PROFILE PAGE  ██
// ═══════════════════════════════════════════════════════════════
function renderProfile(area){
    area.innerHTML = `
    <div class="px-4 pt-4">
        <!-- Profile Header -->
        <div class="text-center mb-6 anim-fadeUp">
            <div class="relative inline-block mb-3">
                <img src="${ME.avatar}" class="w-24 h-24 rounded-full object-cover border-3 mx-auto" style="border:3px solid #f26522"/>
                <button class="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center" style="background:#f26522" onclick="showToast('تعديل الصورة','info')">
                    <span class="material-symbols-outlined text-white text-[14px]">edit</span>
                </button>
            </div>
            <h2 class="font-extrabold text-xl">${esc(ME.name)}</h2>
            <p class="text-sm" style="color:#7a7570">@${esc(ME.username)}</p>
            <p class="text-xs mt-2 max-w-xs mx-auto" style="color:#a3a3a3">${esc(ME.bio)}</p>
        </div>

        <!-- Stats -->
        <div class="flex justify-center gap-6 mb-6 anim-fadeUp" style="animation-delay:.1s;opacity:0">
            <div class="text-center"><span class="text-xl font-extrabold block" style="color:#f26522">45</span><span class="text-[10px]" style="color:#7a7570">منشور</span></div>
            <div class="text-center"><span class="text-xl font-extrabold block">${fmtNum(ME.followers)}</span><span class="text-[10px]" style="color:#7a7570">متابِع</span></div>
            <div class="text-center"><span class="text-xl font-extrabold block">${ME.following}</span><span class="text-[10px]" style="color:#7a7570">يتابع</span></div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-2 mb-6 anim-fadeUp" style="animation-delay:.15s;opacity:0">
            <button class="flex-1 py-2.5 rounded-xl font-bold text-sm transition-all" style="background:rgba(242,101,34,.12);color:#f26522;border:1px solid rgba(242,101,34,.2)" onclick="showToast('تعديل الملف الشخصي','info')">تعديل الملف</button>
            <button class="py-2.5 px-4 rounded-xl font-bold text-sm transition-all" style="background:rgba(42,42,42,.3);border:1px solid rgba(89,65,56,.2);color:#e5e2e1" onclick="showToast('المشاركة','info')"><span class="material-symbols-outlined text-[18px]">share</span></button>
            <button class="py-2.5 px-4 rounded-xl font-bold text-sm transition-all" style="background:rgba(42,42,42,.3);border:1px solid rgba(89,65,56,.2);color:#e5e2e1" onclick="showToast('الإعدادات','info')"><span class="material-symbols-outlined text-[18px]">settings</span></button>
        </div>

        <!-- Tabs -->
        <div class="flex border-b mb-4" style="border-color:rgba(89,65,56,.12)">
            <button class="flex-1 py-3 text-center font-bold text-sm" style="color:#f26522;border-bottom:2px solid #f26522"><span class="material-symbols-outlined text-[18px]">grid_view</span></button>
            <button class="flex-1 py-3 text-center font-bold text-sm" style="color:#7a7570"><span class="material-symbols-outlined text-[18px]">bookmark</span></button>
            <button class="flex-1 py-3 text-center font-bold text-sm" style="color:#7a7570"><span class="material-symbols-outlined text-[18px]">assignment_ind</span></button>
        </div>

        <!-- User's Posts Grid -->
        <div class="grid grid-cols-3 gap-1">
            ${POSTS.slice(0,6).map((p,i)=>`
            <div class="aspect-square rounded-lg overflow-hidden cursor-pointer anim-fadeUp" style="animation-delay:${i*.05}s;opacity:0;background:rgba(42,42,42,.3)" onclick="showToast('عرض المنشور','info')">
                ${p.image?`<img src="${p.image}" class="w-full h-full object-cover" loading="lazy"/>`:`<div class="w-full h-full flex items-center justify-center p-2"><p class="text-[10px] text-center line-clamp-4" style="color:#7a7570">${esc(p.text.substring(0,60))}</p></div>`}
            </div>`).join('')}
        </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// ██  NOTIFICATIONS PANEL  ██
// ═══════════════════════════════════════════════════════════════
function toggleNotifPanel(){
    notifPanelOpen = !notifPanelOpen;
    const panel = document.getElementById('notifPanel');
    if(notifPanelOpen){
        renderNotifList();
        panel.classList.add('open');
    } else {
        panel.classList.remove('open');
    }
}

function closeNotifPanel(){
    notifPanelOpen = false;
    document.getElementById('notifPanel').classList.remove('open');
}

function renderNotifList(){
    const list = document.getElementById('notifList');
    const typeIcons = {like:'favorite',comment:'comment',follow:'person_add',mention:'alternate_email',system:'info'};
    const typeColors = {like:'#ef4444',comment:'#3b82f6',follow:'#22c55e',mention:'#a855f7',system:'#f26522'};

    list.innerHTML = NOTIFICATIONS.map((n,i)=>{
        const delay = Math.min(i*.05,.3);
        return `
        <div class="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all anim-fadeUp" style="animation-delay:${delay}s;opacity:0;${!n.read?'background:rgba(242,101,34,.03);border-right:3px solid #f26522':''}" onclick="markNotifRead('${n.id}')">
            ${n.user?`<img src="${n.user.avatar}" class="w-10 h-10 rounded-full object-cover shrink-0"/>`:`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style="background:rgba(242,101,34,.1)"><span class="material-symbols-outlined text-[#f26522] text-[20px]" style="font-variation-settings:'FILL' 1">info</span></div>`}
            <div class="flex-1 min-w-0">
                <p class="text-sm ${!n.read?'font-bold':''}">${n.user?`<strong>${esc(n.user.name)}</strong> `:''}${esc(n.text)}</p>
                <span class="text-[10px]" style="color:#7a7570">${n.time}</span>
            </div>
            <span class="material-symbols-outlined text-[18px] shrink-0" style="color:${typeColors[n.type]};font-variation-settings:'FILL ${n.read?0:1}'">${typeIcons[n.type]}</span>
        </div>`;
    }).join('');
}

function markNotifRead(id){
    const n = NOTIFICATIONS.find(x=>x.id===id);
    if(n) n.read = true;
    const unread = NOTIFICATIONS.filter(n=>!n.read).length;
    document.getElementById('notifBadge').textContent = unread;
    document.getElementById('notifBadge').style.display = unread>0?'flex':'none';
    renderNotifList();
}

// ═══════════════════════════════════════════════════════════════
// ██  USER MENU  ██
// ═══════════════════════════════════════════════════════════════
function toggleUserMenu(e){
    e.stopPropagation();
    dropdownOpen = !dropdownOpen;
    document.getElementById('userDropdown').classList.toggle('open', dropdownOpen);
}

function closeUserMenu(){
    dropdownOpen = false;
    document.getElementById('userDropdown').classList.remove('open');
}

document.addEventListener('click', e=>{
    if(!e.target.closest('.user-menu-trigger')&&!e.target.closest('.dropdown')) closeUserMenu();
});

// ═══════════════════════════════════════════════════════════════
// ██  AUTH (LOGIN / REGISTER)  ██
// ═══════════════════════════════════════════════════════════════
function showAuth(mode='login'){
    isLoggedIn = false;
    authMode = mode;
    document.getElementById('topNav').style.display = 'none';
    document.getElementById('bottomNav').style.display = 'none';
    document.getElementById('pageContent').style.display = 'none';
    document.getElementById('notifPanel').style.display = 'none';
    document.getElementById('authPage').style.display = 'flex';
    renderAuth();
}

function hideAuth(){
    isLoggedIn = true;
    document.getElementById('topNav').style.display = 'flex';
    document.getElementById('bottomNav').style.display = 'flex';
    document.getElementById('pageContent').style.display = 'block';
    document.getElementById('notifPanel').style.display = 'block';
    document.getElementById('authPage').style.display = 'none';
    navigateTo('home');
}

function renderAuth(){
    const card = document.getElementById('authCard');
    card.innerHTML = `
    <!-- Logo -->
    <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style="background:linear-gradient(135deg,#f26522,#e85d1c);animation:orbFloat 4s ease infinite">
            <span class="material-symbols-outlined text-white text-[32px]" style="font-variation-settings:'FILL' 1">balance</span>
        </div>
        <h1 class="text-2xl font-extrabold" style="background:linear-gradient(135deg,#f26522,#ff7a3d);-webkit-background-clip:text;-webkit-text-fill-color:transparent">لو بوك</h1>
        <p class="text-xs mt-1" style="color:#7a7570">المنصة القانونية الأولى</p>
    </div>

    <!-- Tabs -->
    <div class="flex gap-2 mb-6 p-1 rounded-xl" style="background:rgba(42,42,42,.4)">
        <button class="auth-tab ${authMode==='login'?'active':''}" onclick="authMode='login';renderAuth()">تسجيل الدخول</button>
        <button class="auth-tab ${authMode==='register'?'active':''}" onclick="authMode='register';renderAuth()">حساب جديد</button>
    </div>

    ${authMode==='login' ? `
    <!-- LOGIN FORM -->
    <form onsubmit="handleLogin(event)" class="space-y-3">
        <input type="text" class="auth-field" placeholder="البريد الإلكتروني أو اسم المستخدم" id="loginEmail" required autocomplete="username"/>
        <div class="relative">
            <input type="${pwVisible?'text':'password'}" class="auth-field pl-10" placeholder="كلمة المرور" id="loginPassword" required autocomplete="current-password"/>
            <span class="pw-toggle material-symbols-outlined text-[20px]" onclick="togglePwVisibility()">${pwVisible?'visibility_off':'visibility'}</span>
        </div>
        <div class="flex items-center justify-between text-xs">
            <label class="flex items-center gap-2 cursor-pointer" style="color:#7a7570">
                <input type="checkbox" class="accent-[#f26522] w-4 h-4" checked/>
                تذكرني
            </label>
            <a href="#" class="font-bold" style="color:#f26522" onclick="showToast('تم إرسال رابط إعادة التعيين','info')">نسيت كلمة المرور؟</a>
        </div>
        <button type="submit" class="auth-btn auth-btn-primary mt-2" id="loginBtn">
            <span class="material-symbols-outlined text-[18px]">login</span>
            تسجيل الدخول
        </button>
    </form>
    ` : `
    <!-- REGISTER FORM -->
    <form onsubmit="handleRegister(event)" class="space-y-3">
        <input type="text" class="auth-field" placeholder="الاسم الكامل" id="regName" required/>
        <input type="text" class="auth-field" placeholder="اسم المستخدم" id="regUsername" required/>
        <input type="email" class="auth-field" placeholder="البريد الإلكتروني" id="regEmail" required/>
        <div class="relative">
            <input type="${pwVisible?'text':'password'}" class="auth-field pl-10" placeholder="كلمة المرور (8 أحرف+)" id="regPassword" required minlength="8"/>
            <span class="pw-toggle material-symbols-outlined text-[20px]" onclick="togglePwVisibility()">${pwVisible?'visibility_off':'visibility'}</span>
        </div>

        <!-- Captcha -->
        <div class="p-3 rounded-xl border" style="background:rgba(42,42,42,.4);border-color:rgba(89,65,56,.2)">
            <p class="text-[10px] mb-2 font-bold" style="color:#7a7570">أثبت أنك لست روبوتاً</p>
            <div class="text-center text-2xl font-mono font-extrabold tracking-[8px] mb-2" style="color:#f26522;text-shadow:2px 2px 0 rgba(242,101,34,.3)" id="captchaText">${generateCaptcha()}</div>
            <input type="text" class="auth-field text-center tracking-widest font-mono" placeholder="أدخل الرمز" id="captchaInput" maxlength="6"/>
        </div>

        <label class="flex items-start gap-2 text-xs cursor-pointer" style="color:#7a7570">
            <input type="checkbox" class="accent-[#f26522] w-4 h-4 mt-0.5" required/>
            <span>أوافق على <a href="#" class="font-bold" style="color:#f26522">الشروط والأحكام</a> و<a href="#" class="font-bold" style="color:#f26522">سياسة الخصوصية</a></span>
        </label>
        <button type="submit" class="auth-btn auth-btn-primary mt-2" id="regBtn">
            <span class="material-symbols-outlined text-[18px]">person_add</span>
            إنشاء الحساب
        </button>
    </form>`}

    <!-- Divider -->
    <div class="flex items-center gap-3 my-5">
        <div class="flex-1 h-px" style="background:rgba(89,65,56,.2)"></div>
        <span class="text-[11px]" style="color:#7a7570">أو تابع بـ</span>
        <div class="flex-1 h-px" style="background:rgba(89,65,56,.2)"></div>
    </div>

    <!-- Social Login -->
    <div class="auth-social">
        <button class="auth-social-btn" onclick="showToast('تسجيل عبر Google','info')">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
        </button>
        <button class="auth-social-btn" onclick="showToast('تسجيل عبر Apple','info')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
            Apple
        </button>
    </div>

    <!-- Toggle -->
    <p class="text-center text-xs mt-5" style="color:#7a7570">
        ${authMode==='login'?'ليس لديك حساب؟':'لديك حساب بالفعل؟'}
        <a href="#" class="font-bold" style="color:#f26522" onclick="authMode=authMode==='login'?'register':'login';renderAuth()">
            ${authMode==='login'?'إنشاء حساب':'تسجيل الدخول'}
        </a>
    </p>`;
}

let captchaValue = '';
function generateCaptcha(){
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    captchaValue = '';
    for(let i=0;i<6;i++) captchaValue += chars[Math.floor(Math.random()*chars.length)];
    return captchaValue;
}

function togglePwVisibility(){
    pwVisible = !pwVisible;
    renderAuth();
}

function handleLogin(e){
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px]" style="animation:spin 1s linear infinite">progress_activity</span> جاري التحقق...';

    setTimeout(()=>{
        hideAuth();
        showToast('مرحباً بعودتك! 👋','success');
    }, 1200);
}

function handleRegister(e){
    e.preventDefault();
    const captchaInput = document.getElementById('captchaInput').value.toUpperCase();
    if(captchaInput !== captchaValue){
        showToast('رمز التحقق غير صحيح','error');
        document.getElementById('captchaInput').classList.add('error');
        setTimeout(()=>document.getElementById('captchaInput').classList.remove('error'),400);
        captchaValue = generateCaptcha();
        document.getElementById('captchaText').textContent = captchaValue;
        return;
    }

    const btn = document.getElementById('regBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px]" style="animation:spin 1s linear infinite">progress_activity</span> جاري إنشاء الحساب...';

    setTimeout(()=>{
        hideAuth();
        showToast('تم إنشاء حسابك بنجاح! 🎉','success');
    }, 1500);
}

function handleLogout(){
    closeUserMenu();
    showAuth('login');
    showToast('تم تسجيل الخروج','info');
}

// ═══════════════════════════════════════════════════════════════
// ██  TOAST  ██
// ═══════════════════════════════════════════════════════════════
function showToast(msg,type='info'){
    const t=document.getElementById('toastEl');
    const icons={success:'check_circle',error:'error',info:'info'};
    t.className='toast '+type;
    t.innerHTML=`<span class="material-symbols-outlined text-[18px]">${icons[type]||'info'}</span> ${msg}`;
    setTimeout(()=>t.classList.add('show'),10);
    setTimeout(()=>t.classList.remove('show'),3000);
}

// ═══════════════════════════════════════════════════════════════
// ██  INIT  ██
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function(){
    // Set initial unread counts
    const unreadNotifs = NOTIFICATIONS.filter(n=>!n.read).length;
    const unreadMsgs = CONVERSATIONS.reduce((s,c)=>s+c.unread,0);

    document.getElementById('notifBadge').textContent = unreadNotifs;
    document.getElementById('notifBadge').style.display = unreadNotifs>0?'flex':'none';

    document.getElementById('msgBadge').textContent = unreadMsgs;
    document.getElementById('msgBadge').style.display = unreadMsgs>0?'flex':'none';

    // Show app
    if(isLoggedIn){
        hideAuth();
    } else {
        showAuth('login');
    }

    console.log('%c لو بوك | التنقل والهيكل العام ','background:#f26522;color:white;font-size:14px;font-weight:bold;border-radius:8px;padding:6px 14px');
});
</script>
</body>
</html>
