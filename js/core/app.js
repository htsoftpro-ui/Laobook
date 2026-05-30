<!DOCTYPE html>
<html class="dark" lang="ar" dir="rtl">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>لو بوك | البنية التحتية</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <style>
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
        body{font-family:'Tajawal',sans-serif;min-height:100dvh;overflow-x:hidden;background:#0a0a0a;color:#e5e2e1}
        code,pre,.mono{font-family:'DM Mono',monospace}
        .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24}

        .app-bg{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse at 20% 0%,rgba(242,101,34,.06) 0%,transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(242,101,34,.04) 0%,transparent 50%),#0a0a0a}
        .app-bg::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");opacity:.3;pointer-events:none}

        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
        @keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes barGrow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
        @keyframes statusDot{0%{box-shadow:0 0 0 0 rgba(34,197,94,.4)}70%{box-shadow:0 0 0 6px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
        @keyframes typewriter{from{width:0}to{width:100%}}

        .anim-fade{animation:fadeIn .3s ease}
        .anim-fadeUp{animation:fadeInUp .35s ease}

        /* ═══════ Tabs ═══════ */
        .arch-tabs{display:flex;overflow-x:auto;scrollbar-width:none;gap:4px;padding:4px;background:rgba(26,26,26,.5);border-radius:14px;border:1px solid rgba(89,65,56,.12)}
        .arch-tabs::-webkit-scrollbar{display:none}
        .arch-tab{padding:10px 16px;border-radius:10px;font-weight:600;font-size:12px;cursor:pointer;transition:all .3s;border:none;background:transparent;color:#7a7570;font-family:'Tajawal',sans-serif;white-space:nowrap;display:flex;align-items:center;gap:6px}
        .arch-tab:hover{color:#e5e2e1;background:rgba(255,255,255,.04)}
        .arch-tab.active{background:rgba(242,101,34,.15);color:#f26522}

        /* ═══════ Cards ═══════ */
        .card{background:rgba(42,42,42,.25);border:1px solid rgba(89,65,56,.1);border-radius:16px;padding:16px;transition:all .3s}
        .card:hover{border-color:rgba(242,101,34,.15)}

        /* ═══════ Code Block ═══════ */
        .code-block{background:#0d0d0d;border:1px solid rgba(89,65,56,.15);border-radius:14px;overflow:hidden}
        .code-header{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid rgba(89,65,56,.1);background:rgba(42,42,42,.3)}
        .code-header .dot{width:10px;height:10px;border-radius:50%}
        .code-body{padding:14px;font-size:12px;line-height:1.7;overflow-x:auto;max-height:400px;overflow-y:auto;direction:ltr;text-align:left}
        .code-body .kw{color:#c084fc} /* keyword */
        .code-body .fn{color:#60a5fa} /* function */
        .code-body .str{color:#fbbf24} /* string */
        .code-body .cm{color:#4a4a4a} /* comment */
        .code-body .num{color:#f87171} /* number */
        .code-body .op{color:#7a7570} /* operator */
        .code-body .prop{color:#4ade80} /* property */

        /* ═══════ Stats ═══════ */
        .stat-sm{background:rgba(42,42,42,.3);border:1px solid rgba(89,65,56,.08);border-radius:12px;padding:12px}
        .stat-sm .stat-val{font-size:20px;font-weight:800}
        .stat-sm .stat-lbl{font-size:10px;color:#7a7570}

        /* ═══════ Data Table ═══════ */
        .tbl{width:100%;border-collapse:separate;border-spacing:0;font-size:12px}
        .tbl th{padding:10px 12px;text-align:right;font-size:10px;font-weight:700;color:#7a7570;border-bottom:1px solid rgba(89,65,56,.15);text-transform:uppercase;letter-spacing:.5px}
        .tbl td{padding:10px 12px;border-bottom:1px solid rgba(89,65,56,.06);vertical-align:middle}
        .tbl tr:hover td{background:rgba(242,101,34,.02)}

        /* ═══════ Badge ═══════ */
        .badge{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap}
        .badge-green{background:rgba(34,197,94,.12);color:#4ade80}
        .badge-blue{background:rgba(59,130,246,.12);color:#60a5fa}
        .badge-orange{background:rgba(242,101,34,.12);color:#f26522}
        .badge-red{background:rgba(239,68,68,.12);color:#f87171}
        .badge-purple{background:rgba(168,85,247,.12);color:#c084fc}

        /* ═══════ Buttons ═══════ */
        .btn-sm{padding:6px 12px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;transition:all .2s;border:none;font-family:'Tajawal',sans-serif;display:inline-flex;align-items:center;gap:4px}
        .btn-primary{background:rgba(242,101,34,.15);color:#f26522}
        .btn-primary:hover{background:rgba(242,101,34,.25)}
        .btn-exec{background:linear-gradient(135deg,#f26522,#e85d1c);color:white;font-weight:700;font-size:13px;padding:10px 20px;border-radius:12px;border:none;cursor:pointer;transition:all .3s;font-family:'Tajawal',sans-serif;display:flex;align-items:center;gap:6px}
        .btn-exec:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(242,101,34,.3)}
        .btn-exec:disabled{opacity:.5;cursor:not-allowed;transform:none}

        /* ═══════ Log Console ═══════ */
        .console{background:#0a0a0a;border:1px solid rgba(89,65,56,.15);border-radius:12px;max-height:320px;overflow-y:auto;font-size:11px;font-family:'DM Mono',monospace}
        .console-line{padding:4px 12px;border-bottom:1px solid rgba(89,65,56,.04);display:flex;gap:8px;line-height:1.6}
        .console-line:hover{background:rgba(255,255,255,.015)}
        .console-line .cl-time{color:#4a4a4a;flex-shrink:0}
        .console-line .cl-type{font-weight:700;padding:0 4px;border-radius:3px;font-size:10px;flex-shrink:0}
        .console-line .cl-msg{color:#a3a3a3;word-break:break-all}

        /* ═══════ Responsive ═══════ */
        @media(max-width:640px){
            .code-body{font-size:10px;max-height:250px}
            .stat-sm .stat-val{font-size:16px}
        }

        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#474746;border-radius:4px}

        /* ═══════ Toast ═══════ */
        .toast{position:fixed;top:24px;left:50%;transform:translateX(-50%) translateY(-100px);z-index:9999;padding:14px 28px;border-radius:14px;font-weight:700;font-size:14px;opacity:0;transition:all .5s cubic-bezier(.68,-.55,.265,1.55);display:flex;align-items:center;gap:10px;backdrop-filter:blur(12px);max-width:90vw;color:white}
        .toast.show{transform:translateX(-50%) translateY(0);opacity:1}
        .toast.success{background:rgba(34,197,94,.2);border:1px solid rgba(34,197,94,.4)}
        .toast.error{background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.4)}
        .toast.info{background:rgba(59,130,246,.2);border:1px solid rgba(59,130,246,.4)}
    </style>
</head>
<body>
<div class="app-bg"></div>
<div id="toastEl" class="toast"></div>

<header class="fixed top-0 w-full z-50 glass border-b border-[#594138]/30 flex items-center px-4 h-14" style="background:rgba(32,31,31,.85);backdrop-filter:blur(16px)">
    <button class="p-2 rounded-full hover:bg-white/5"><span class="material-symbols-outlined text-[#7a7570]">arrow_forward</span></button>
    <h1 class="text-lg font-extrabold text-[#f26522] mr-2">البنية التحتية</h1>
    <div class="flex items-center gap-2 mr-auto">
        <div class="w-2 h-2 rounded-full bg-green-400" style="animation:statusDot 2s infinite"></div>
        <span class="text-[10px] text-green-400 font-bold">كل الأنظمة تعمل</span>
    </div>
</header>

<main class="relative z-10 pt-16 pb-8 max-w-4xl mx-auto px-4">
    <!-- Tabs -->
    <div class="arch-tabs mb-5 anim-fade">
        <button class="arch-tab active" onclick="switchArch('overview',this)"><span class="material-symbols-outlined text-[15px]">dashboard</span>نظرة عامة</button>
        <button class="arch-tab" onclick="switchArch('db',this)"><span class="material-symbols-outlined text-[15px]">storage</span>DatabaseManager</button>
        <button class="arch-tab" onclick="switchArch('auth',this)"><span class="material-symbols-outlined text-[15px]">key</span>AuthManager</button>
        <button class="arch-tab" onclick="switchArch('notif',this)"><span class="material-symbols-outlined text-[15px]">notifications</span>NotificationManager</button>
        <button class="arch-tab" onclick="switchArch('seed',this)"><span class="material-symbols-outlined text-[15px]">data_object</span>البيانات</button>
        <button class="arch-tab" onclick="switchArch('perf',this)"><span class="material-symbols-outlined text-[15px]">speed</span>الأداء</button>
    </div>

    <div id="archContent"></div>
</main>

<script>
// ═══════════════════════════════════════════════════════════════════
// ██  SECTION 18: CORE INFRASTRUCTURE ENGINE  ██
// ═══════════════════════════════════════════════════════════════════

// ─── Utility ───
function esc(t){if(typeof t!=='string')return'';const m={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'};return t.replace(/[&<>"']/g,c=>m[c])}
function uid(){return Date.now().toString(36)+'_'+Math.random().toString(36).substr(2,8)}
function ago(min){return new Date(Date.now()-min*60000).toISOString()}
function fmtNum(n){if(n>=1e6)return(n/1e6).toFixed(1)+'M';if(n>=1e3)return(n/1e3).toFixed(1)+'K';return n.toString()}
function fmtTime(iso){const s=Math.floor((Date.now()-new Date(iso).getTime())/1000);if(s<60)return'الآن';if(s<3600)return'منذ '+Math.floor(s/60)+' د';if(s<86400)return'منذ '+Math.floor(s/3600)+' س';return new Date(iso).toLocaleDateString('ar-SA',{month:'short',day:'numeric'})}

// ═══════════════════════════════════════════════════════════════════
// ██  1. DATABASE MANAGER  ██
// ═══════════════════════════════════════════════════════════════════
const DB = {
    _prefix: 'lobuk_',

    /**
     * قراءة مجموعة من localStorage
     * @param {string} key - اسم المجموعة
     * @returns {Array} مصفوفة البيانات
     */
    getAll(key){
        try{
            const raw = localStorage.getItem(this._prefix + key);
            return raw ? JSON.parse(raw) : [];
        }catch(e){
            console.error('[DB] خطأ في قراءة '+key, e);
            return [];
        }
    },

    /**
     * كتابة مجموعة كاملة في localStorage
     * @param {string} key - اسم المجموعة
     * @param {Array} data - البيانات
     */
    setAll(key, data){
        try{
            localStorage.setItem(this._prefix + key, JSON.stringify(data));
            return true;
        }catch(e){
            console.error('[DB] خطأ في الكتابة '+key, e);
            if(e.name === 'QuotaExceededError'){
                console.error('[DB] مساحة التخزين ممتلئة!');
            }
            return false;
        }
    },

    /**
     * البحث عن عنصر بالمعرف
     * @param {string} key - اسم المجموعة
     * @param {string} id - المعرف
     * @returns {Object|null}
     */
    getById(key, id){
        try{
            const items = this.getAll(key);
            return items.find(item => item.id === id) || null;
        }catch(e){
            console.error('[DB] خطأ في getById', e);
            return null;
        }
    },

    /**
     * إضافة عنصر جديد
     * @param {string} key - اسم المجموعة
     * @param {Object} item - العنصر (سيُضاف له id تلقائياً)
     * @returns {Object} العنصر المضاف
     */
    add(key, item){
        try{
            const items = this.getAll(key);
            if(!item.id) item.id = uid();
            item.createdAt = item.createdAt || new Date().toISOString();
            item.updatedAt = new Date().toISOString();
            items.push(item);
            this.setAll(key, items);
            return item;
        }catch(e){
            console.error('[DB] خطأ في الإضافة', e);
            return null;
        }
    },

    /**
     * تحديث عنصر موجود
     * @param {string} key - اسم المجموعة
     * @param {string} id - المعرف
     * @param {Object} updates - الحقول المراد تحديثها
     * @returns {Object|null}
     */
    update(key, id, updates){
        try{
            const items = this.getAll(key);
            const idx = items.findIndex(item => item.id === id);
            if(idx === -1){ console.warn('[DB] العنصر غير موجود: '+id); return null; }
            items[idx] = { ...items[idx], ...updates, updatedAt: new Date().toISOString() };
            this.setAll(key, items);
            return items[idx];
        }catch(e){
            console.error('[DB] خطأ في التحديث', e);
            return null;
        }
    },

    /**
     * حذف عنصر
     * @param {string} key - اسم المجموعة
     * @param {string} id - المعرف
     * @returns {boolean}
     */
    remove(key, id){
        try{
            const items = this.getAll(key);
            const filtered = items.filter(item => item.id !== id);
            if(filtered.length === items.length){ console.warn('[DB] لم يتم الحذف — غير موجود'); return false; }
            this.setAll(key, filtered);
            return true;
        }catch(e){
            console.error('[DB] خطأ في الحذف', e);
            return false;
        }
    },

    /**
     * بحث متقدم
     * @param {string} key - اسم المجموعة
     * @param {Function} predicate - دالة الفلترة
     * @returns {Array}
     */
    find(key, predicate){
        try{
            return this.getAll(key).filter(predicate);
        }catch(e){
            console.error('[DB] خطأ في البحث', e);
            return [];
        }
    },

    /**
     * عدد العناصر
     * @param {string} key
     * @returns {number}
     */
    count(key){
        return this.getAll(key).length;
    },

    /**
     * مسح مجموعة كاملة
     * @param {string} key
     */
    clear(key){
        localStorage.removeItem(this._prefix + key);
    },

    /**
     * مسح كل البيانات
     */
    clearAll(){
        const keys = Object.keys(localStorage).filter(k => k.startsWith(this._prefix));
        keys.forEach(k => localStorage.removeItem(k));
    },

    /**
     * حجم التخزين المستخدم (بالكيلوبايت)
     * @returns {number}
     */
    getStorageSize(){
        let total = 0;
        for(let k in localStorage){
            if(localStorage.hasOwnProperty(k) && k.startsWith(this._prefix)){
                total += localStorage.getItem(k).length * 2; // UTF-16
            }
        }
        return Math.round(total / 1024);
    },

    /**
     * إحصائيات سريعة
     * @returns {Object}
     */
    stats(){
        return {
            users: this.count('users'),
            posts: this.count('posts'),
            comments: this.count('comments'),
            conversations: this.count('conversations'),
            messages: this.count('messages'),
            stories: this.count('stories'),
            groups: this.count('groups'),
            pages: this.count('pages'),
            notifications: this.count('notifications'),
            storageKB: this.getStorageSize()
        };
    }
};

// ═══════════════════════════════════════════════════════════════════
// ██  2. AUTH MANAGER  ██
// ═══════════════════════════════════════════════════════════════════
const Auth = {
    _accessKey: 'lobuk_access_token',
    _refreshKey: 'lobuk_refresh_token',
    _accessExpiry: 15 * 60 * 1000,
    _refreshExpiry: 7 * 24 * 60 * 60 * 1000,
    _secret: 'lb_jwt_secret_2025',

    /**
     * إنشاء JWT Token
     * @param {Object} payload - البيانات
     * @param {number} expiry - المدة بالميلي ثانية
     * @returns {string} Token
     */
    _createToken(payload, expiry){
        const header = btoa(JSON.stringify({alg:'HS256',typ:'JWT'}));
        const now = Date.now();
        const body = btoa(JSON.stringify({...payload, iat:now, exp:now+expiry, jti:uid()}));
        const sig = btoa(this._hash(header+'.'+body+'.'+this._secret));
        return `${header}.${body}.${sig}`;
    },

    /**
     * التحقق من صلاحية Token
     * @param {string} token
     * @returns {Object} {valid, payload, error}
     */
    _validateToken(token){
        if(!token) return {valid:false, error:'لا يوجد Token'};
        const parts = token.split('.');
        if(parts.length !== 3) return {valid:false, error:'تنسيق غير صالح'};
        try{
            const expectedSig = btoa(this._hash(parts[0]+'.'+parts[1]+'.'+this._secret));
            if(parts[2] !== expectedSig) return {valid:false, error:'توقيع مزيف'};
            const payload = JSON.parse(atob(parts[1]));
            if(Date.now() > payload.exp) return {valid:false, error:'منتهي الصلاحية', expired:true, payload};
            return {valid:true, payload};
        }catch(e){ return {valid:false, error:'Token تالف'}; }
    },

    /**
     * تسجيل الدخول — إنشاء جلسة
     * @param {string} userId
     * @param {string} username
     * @param {string} role
     * @returns {Object} {accessToken, refreshToken}
     */
    login(userId, username, role='user'){
        const access = this._createToken({sub:userId, username, role}, this._accessExpiry);
        const refresh = this._createToken({sub:userId, type:'refresh', role}, this._refreshExpiry);
        localStorage.setItem(this._accessKey, access);
        localStorage.setItem(this._refreshKey, refresh);
        console.log(`[Auth] ✅ تسجيل دخول: ${username} (${role})`);
        return {accessToken:access, refreshToken:refresh};
    },

    /**
     * تسجيل الخروج
     */
    logout(){
        localStorage.removeItem(this._accessKey);
        localStorage.removeItem(this._refreshKey);
        console.log('[Auth] 👋 تم تسجيل الخروج');
    },

    /**
     * الحصول على المستخدم الحالي
     * @returns {Object|null} بيانات المستخدم أو null
     */
    getCurrentUser(){
        let token = localStorage.getItem(this._accessKey);
        if(!token) return null;
        let result = this._validateToken(token);
        if(!result.valid){
            if(result.expired && this.refreshToken()){
                token = localStorage.getItem(this._accessKey);
                result = this._validateToken(token);
            }
            if(!result.valid) return null;
        }
        return result.payload;
    },

    /**
     * تجديد Access Token
     * @returns {boolean}
     */
    refreshToken(){
        const rt = localStorage.getItem(this._refreshKey);
        if(!rt) return false;
        const result = this._validateToken(rt);
        if(!result.valid || result.payload.type !== 'refresh') return false;
        const newAccess = this._createToken({sub:result.payload.sub, username:result.payload.username||'user', role:result.payload.role||'user'}, this._accessExpiry);
        localStorage.setItem(this._accessKey, newAccess);
        return true;
    },

    /**
     * التحقق من صلاحية معينة
     * @param {string} permission
     * @returns {Object} {allowed, user, error}
     */
    checkPermission(permission){
        const user = this.getCurrentUser();
        if(!user) return {allowed:false, error:'غير مسجل الدخول'};
        const perms = {
            admin:['delete_user','ban_user','verify_user','delete_post','manage_ads','manage_reports','view_analytics'],
            moderator:['delete_post','ban_user','manage_reports'],
            editor:['create_post','edit_post','delete_own_post'],
            user:['create_post','delete_own_post','comment','message']
        };
        const userPerms = perms[user.role] || perms.user;
        if(userPerms.includes(permission)) return {allowed:true, user};
        return {allowed:false, error:'ليس لديك صلاحية: '+permission, user};
    },

    /**
     * بسيط Hash
     * @param {string} s
     * @returns {string}
     */
    _hash(s){let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0}return h.toString(36)}
};

// ═══════════════════════════════════════════════════════════════════
// ██  3. NOTIFICATION MANAGER  ██
// ═══════════════════════════════════════════════════════════════════
const NotifMgr = {
    /**
     * إنشاء إشعار جديد
     * @param {string} userId - المستخدم المستلم
     * @param {string} type - نوع الإشعار
     * @param {string} message - نص الإشعار
     * @param {Object} meta - بيانات إضافية
     * @returns {Object} الإشعار
     */
    create(userId, type, message, meta={}){
        return DB.add('notifications', {
            userId,
            type,        // like, comment, follow, mention, message, system
            message,
            meta,
            read: false,
        });
    },

    /**
     * جلب إشعارات مستخدم
     * @param {string} userId
     * @param {number} limit
     * @returns {Array}
     */
    getForUser(userId, limit=20){
        return DB.find('notifications', n => n.userId === userId)
            .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, limit);
    },

    /**
     * عدد الإشعارات غير المقروءة
     * @param {string} userId
     * @returns {number}
     */
    unreadCount(userId){
        return DB.find('notifications', n => n.userId === userId && !n.read).length;
    },

    /**
     * تحديد إشعار كمقروء
     * @param {string} notifId
     */
    markRead(notifId){
        DB.update('notifications', notifId, {read:true});
    },

    /**
     * تحديد كل إشعارات المستخدم كمقروءة
     * @param {string} userId
     */
    markAllRead(userId){
        const notifs = DB.find('notifications', n => n.userId === userId && !n.read);
        notifs.forEach(n => DB.update('notifications', n.id, {read:true}));
    },

    /**
     * حذف إشعار
     * @param {string} notifId
     */
    remove(notifId){
        DB.remove('notifications', notifId);
    }
};

// ═══════════════════════════════════════════════════════════════════
// ██  4. PERFORMANCE MANAGER  ██
// ═══════════════════════════════════════════════════════════════════
const Perf = {
    _pageSize: 10,

    /**
     * تحميل كسول للصور (Lazy Loading)
     * يراقب الصور في الـ viewport ويحمّلها فقط عند الحاجة
     */
    initLazyLoad(){
        if(!('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const img = entry.target;
                    if(img.dataset.src){
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        }, {rootMargin:'200px'});
        document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
        return observer;
    },

    /**
     * تحميل المنشورات بالدفعات (Infinite Scroll)
     * @param {Array} allData - كل البيانات
     * @param {number} page - رقم الصفحة الحالية
     * @returns {Object} {items, hasMore, nextPage}
     */
    paginate(allData, page=1){
        const start = 0;
        const end = page * this._pageSize;
        const items = allData.slice(start, end);
        return {
            items,
            hasMore: end < allData.length,
            nextPage: page + 1,
            total: allData.length,
            shown: items.length
        };
    },

    /**
     * مراقب Infinite Scroll
     * @param {Function} callback - يُستدعى عند الوصول لنهاية الصفحة
     */
    initInfiniteScroll(callback){
        const sentinel = document.getElementById('scrollSentinel');
        if(!sentinel || !('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) callback();
        }, {rootMargin:'300px'});
        observer.observe(sentinel);
        return observer;
    },

    /**
     * Debounce — تأخير تنفيذ الدالة
     * @param {Function} fn
     * @param {number} ms
     * @returns {Function}
     */
    debounce(fn, ms=300){
        let timer;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), ms);
        };
    },

    /**
     * Throttle — تقييد تكرار التنفيذ
     * @param {Function} fn
     * @param {number} ms
     * @returns {Function}
     */
    throttle(fn, ms=100){
        let last = 0;
        return function(...args){
            const now = Date.now();
            if(now - last >= ms){ last = now; fn.apply(this, args); }
        };
    }
};

// ═══════════════════════════════════════════════════════════════════
// ██  5. SEED DATA  ██
// ═══════════════════════════════════════════════════════════════════
function seedAll(){
    // منع إعادة البذر
    if(DB.count('users') > 0) { console.log('[Seed] البيانات موجودة بالفعل'); return false; }
    console.log('[Seed] 🌱 جاري زرع البيانات التجريبية...');
    const t0 = performance.now();

    // ─── 10 مستخدمين ───
    const users = [
        {id:'u1',name:'د. نورة القحطاني',username:'nora_q',avatar:'https://i.pravatar.cc/80?img=5',bio:'أستاذة قانون تجاري — جامعة الملك سعود',email:'nora@lobuk.sa',verified:true,role:'admin',followers:12400,following:340,posts_count:45},
        {id:'u2',name:'أ. فهد العتيبي',username:'fahad_o',avatar:'https://i.pravatar.cc/80?img=12',bio:'محامي مرخص — متخصص في قضايا الشركات',email:'fahad@lobuk.sa',verified:true,role:'moderator',followers:8900,following:120,posts_count:67},
        {id:'u3',name:'المكتبة القانونية',username:'law_library',avatar:'https://i.pravatar.cc/80?img=22',bio:'أكبر مكتبة قانونية عربية — مقالات وكتب مجانية',email:'lib@lobuk.sa',verified:true,role:'editor',followers:45600,following:56,posts_count:234},
        {id:'u4',name:'أ. سارة المنصور',username:'sarah_m',avatar:'https://i.pravatar.cc/80?img=9',bio:'محامية أسرة — خبرة 10 سنوات',email:'sarah@lobuk.sa',verified:false,role:'user',followers:3200,following:210,posts_count:23},
        {id:'u5',name:'د. خالد الشمري',username:'khalid_s',avatar:'https://i.pravatar.cc/80?img=15',bio:'باحث دكتوراه في القانون الدولي',email:'khalid@lobuk.sa',verified:true,role:'user',followers:18700,following:89,posts_count:89},
        {id:'u6',name:'أحمد البقمي',username:'ahmed_b',avatar:'https://i.pravatar.cc/80?img=51',bio:'طالب قانون — جامعة الإمام',email:'ahmed@lobuk.sa',verified:false,role:'user',followers:890,following:450,posts_count:12},
        {id:'u7',name:'منى الحربي',username:'mona_h',avatar:'https://i.pravatar.cc/80?img=44',bio:'مستشارة قانونية في القطاع المصرفي',email:'mona@lobuk.sa',verified:false,role:'user',followers:4100,following:180,posts_count:34},
        {id:'u8',name:'مؤسسة العدالة',username:'adala_org',avatar:'https://i.pravatar.cc/80?img=60',bio:'منظمة غير ربحية لنشر الوعي القانوني',email:'info@adala.sa',verified:true,role:'editor',followers:15800,following:42,posts_count:156},
        {id:'u9',name:'محمد السالم',username:'m_salem',avatar:'https://i.pravatar.cc/80?img=53',bio:'رائد أعمال — مؤسس شركة تقنية قانونية',email:'msalem@lobuk.sa',verified:false,role:'user',followers:2100,following:310,posts_count:18},
        {id:'u10',name:'رنا العمري',username:'rana_o',avatar:'https://i.pravatar.cc/80?img=47',bio:'كاتبة محتوى قانوني — مدونة "حقوقك"',email:'rana@lobuk.sa',verified:true,role:'user',followers:6700,following:150,posts_count:56}
    ];
    DB.setAll('users', users);

    // ─── 20 منشوراً ───
    const posts = [
        {id:'p1',authorId:'u1',text:'نصيحة قانونية مهمة: عند توقيع أي عقد تجاري، تأكد من وجود بند التحكيم لتسوية النزاعات. هذا يوفر عليك الكثير من الوقت والمال.',type:'text',likes:2340,comments:189,views:12000,pinned:true,image:null},
        {id:'p2',authorId:'u2',text:'المحكمة العليا أصدرت قراراً مهماً لصالح حقوق المستهلك في العقود الإلكترونية. القرار ينص على حق الإلغاء خلال 7 أيام.',type:'text',likes:5670,comments:432,views:34000,pinned:false,image:null},
        {id:'p3',authorId:'u3',text:'📚 أفضل 5 كتب للمبتدئين في القانون التجاري. مراجع أساسية لكل طالب قانون.',type:'text',likes:8920,comments:567,views:56000,pinned:false,image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'},
        {id:'p4',authorId:'u5',text:'بحث جديد حول التحكيم الرقمي في دول مجلس التعاون الخليجي. التغييرات الجديدة تشمل قبول الأدلة الرقمية.',type:'text',likes:4210,comments:198,views:23000,pinned:false,image:null},
        {id:'p5',authorId:'u4',text:'كيف تحمي نفسك قانونياً عند تأسيس شركتك؟ خمس خطوات أساسية يجب أن تتبعها.',type:'text',likes:3450,comments:234,views:18000,pinned:false,image:null},
        {id:'p6',authorId:'u7',text:'نصائح قانونية للموظفين الجدد: اعرف حقوقك في عقد العمل قبل التوقيع!',type:'text',likes:7800,comments:456,views:42000,pinned:false,image:null},
        {id:'p7',authorId:'u10',text:'مراجعة شاملة للتعديلات الجديدة في نظام الشركات السعودي لعام 2024.',type:'text',likes:3200,comments:167,views:19000,pinned:false,image:null},
        {id:'p8',authorId:'u8',text:'📊 إنفوجرافيك: إحصائيات القضاء السعودي 2024 — أرقام مذهلة!',type:'text',likes:12400,comments:890,views:78000,pinned:false,image:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'},
        {id:'p9',authorId:'u9',text:'شركتنا أطلقت تطبيق "قانوني" — أول مساعد قانوني ذكي باللغة العربية. جربوه مجاناً!',type:'text',likes:6700,comments:534,views:45000,pinned:false,image:null},
        {id:'p10',authorId:'u6',text:'سؤال: ما هي إجراءات رفع قضية مدنية في المحاكم السعودية؟ أحتاج مساعدة من المتخصصين.',type:'text',likes:890,comments:67,views:3400,pinned:false,image:null},
        {id:'p11',authorId:'u3',text:'📖 دليل شامل: كيف تقرأ عقد العمل وتكتشف البنود المخفية.',type:'text',likes:15600,comments:1023,views:92000,pinned:true,image:null},
        {id:'p12',authorId:'u5',text:'فيصل ۾˸الي: التحول الرقمي في القطاع القضائي خلال 2024 كان استثنائياً.',type:'text',likes:2800,comments:145,views:14000,pinned:false,image:null},
        {id:'p13',authorId:'u2',text:'تحذير: انتشار حالات الاحتيال العقاري. كيف تحمي نفسك؟',type:'text',likes:9100,comments:678,views:51000,pinned:false,image:null},
        {id:'p14',authorId:'u4',text:'حقوق المرأة في نظام الأ_family السعودي — ملخص شامل.',type:'text',likes:11200,comments:789,views:67000,pinned:false,image:null},
        {id:'p15',authorId:'u1',text:'محاضرة مسجلة: مبادئ القانون التجاري للمبتدئين.',type:'video',likes:34000,comments:2100,views:180000,pinned:false,videoUrl:'https://example.com/video1'},
        {id:'p16',authorId:'u8',text:'استطلاع: ما هو أكثر قانون تحتاجه المنصة؟ شاركنا رأيك!',type:'poll',likes:4500,comments:234,views:28000,pinned:false,options:[{text:'قانون العمل',votes:450},{text:'قانون الشركات',votes:380},{text:'قانون الأسرة',votes:290},{text:'قانون العقارات',votes:180}]},
        {id:'p17',authorId:'u10',text:'#مقالة_جديدة: الفرق بين المحاكم الشرعية ومحاكم التمييز — توضيح مبسط.',type:'text',likes:5600,comments:345,views:31000,pinned:false,image:null},
        {id:'p18',authorId:'u7',text:'نصائح ذهبية عند التعامل مع شركات التأمين — لا ت подпис أي شيء قبل قراءة هذا!',type:'text',likes:8300,comments:567,views:47000,pinned:false,image:null},
        {id:'p19',authorId:'u3',text:'🎉 مسابقة: أفضل بحث قانوني للطلاب — الجائزة 10,000 ريال!',type:'text',likes:21000,comments:1567,views:120000,pinned:false,image:null},
        {id:'p20',authorId:'u9',text:'نصائح تقنية: كيف تحمي بيانات شركتك من الاختراق المعلوماتي.',type:'text',likes:3900,comments:234,views:21000,pinned:false,image:null}
    ];
    posts.forEach(p => { p.createdAt = ago(Math.floor(Math.random()*10000)+60); });
    DB.setAll('posts', posts);

    // ─── 30 تعليقاً ───
    const commentTexts = [
        'معلومة قيمة جداً! شكراً لك','هل هذا يشمل العقود القديمة؟','أتفق معك تماماً','ممتاز ومفيد','هل يمكن توضيح أكثر؟',
        'هذا ما كنت أبحث عنه','نصيحة عملية','بارك الله فيك','هل يوجد محامي يقدر يساعد؟','مقال رائع',
        'هل هذا القانون يسري على القطاع الخاص؟','ممتاز! شاركت المنشور','أحتاج استشارة','معلومة جديدة علي','شكراً للتوضيح',
        'هل يمكن إضافة مصادر؟','هذا غير صحيح تماماً','أرجو التحقق من المعلومة','مفيد جداً للمبتدئين','تطبيق عملي',
        'هل يوجد تحديث على هذا القرار؟','رائع!','محتاجين مزيد من هذا النوع من المنشورات','موضوع مهم جداً','بارك الله فيك',
        'هل القانون الجديد يطبق فوراً؟','نصائح ذهبية','أحببت التبسيط','شاركت مع زملائي','محتوى قيّم'
    ];
    const comments = commentTexts.map((text, i) => ({
        id: 'c'+(i+1),
        postId: posts[Math.floor(Math.random()*20)].id,
        authorId: users[Math.floor(Math.random()*10)].id,
        text,
        likes: Math.floor(Math.random()*200),
        createdAt: ago(Math.floor(Math.random()*5000)+30)
    }));
    DB.setAll('comments', comments);

    // ─── 15 محادثة ───
    const conversations = [];
    for(let i=0;i<15;i++){
        const u1 = users[i%10].id;
        const u2 = users[(i+3)%10].id;
        conversations.push({
            id: 'conv'+(i+1),
            participants: [u1, u2],
            lastMessage: ['مرحباً، كيف حالك؟','هل أنهيت العقد؟','شكراً على المساعدة','تم الإرسال','أحتاج رأيك القانوني','موعد الغد؟','وصلني الملف','ممتاز!','هل قرأت المقال الجديد؟','بالتأكيد','نعم فهمت','أوافقك الرأي','سأراجع ذلك','ممكن تفاصيل أكثر؟','تم'][i],
            unread: Math.floor(Math.random()*5),
            createdAt: ago(Math.floor(Math.random()*20000)+100)
        });
    }
    DB.setAll('conversations', conversations);

    // ─── رسائل لكل محادثة ───
    const allMessages = [];
    conversations.forEach(conv => {
        const msgCount = 3 + Math.floor(Math.random()*5);
        for(let j=0;j<msgCount;j++){
            allMessages.push({
                id: uid(),
                conversationId: conv.id,
                senderId: conv.participants[j%2],
                text: ['مرحباً','كيف حالك؟','هل أنهيت المهمة؟','شكراً جزيلاً','سأراجع ذلك','تمام','ممتاز','أحتاج مساعدتك','هل متاح الآن؟','نعم بالتأكيد'][j%10],
                read: j < msgCount - conv.unread,
                createdAt: ago(Math.floor(Math.random()*1000)+(msgCount-j)*60)
            });
        }
    });
    DB.setAll('messages', allMessages);

    // ─── 5 قصص ───
    const stories = users.slice(0,5).map((u,i) => ({
        id: 'story'+(i+1),
        userId: u.id,
        image: `https://picsum.photos/seed/s${i}/400/700`,
        text: ['جلسة محكمة اليوم ⚖️','قانون جديد! 📜','ندوة قانونية 🔬','مهم! انتبهوا ⚠️','نصيحة اليوم 💡'][i],
        views: Math.floor(Math.random()*5000)+500,
        createdAt: ago(Math.floor(Math.random()*720)+30),
        expiresAt: ago(-1440)
    }));
    DB.setAll('stories', stories);

    // ─── 3 مجموعات ───
    const groups = [
        {id:'g1',name:'نقاشات قانونية',description:'مجتمع للنقاش حول القضايا القانونية المعاصرة',avatar:'https://picsum.photos/seed/g1/200',members:['u1','u2','u3','u4','u5','u6','u7'],admin:'u1',posts:234,createdAt:ago(50000)},
        {id:'g2',name:'طلاب القانون',description:'ملتقى طلاب كليات الحقوق',avatar:'https://picsum.photos/seed/g2/200',members:['u4','u6','u9','u10'],admin:'u4',posts:89,createdAt:ago(30000)},
        {id:'g3',name:'رواد الأعمال القانونيين',description:'لرواد الأعمال في القطاع القانوني',avatar:'https://picsum.photos/seed/g3/200',members:['u1','u7','u9','u5'],admin:'u9',posts:56,createdAt:ago(15000)}
    ];
    DB.setAll('groups', groups);

    // ─── 3 صفحات ───
    const pages = [
        {id:'pg1',name:'وزارة العدل',handle:'moj_sa',avatar:'https://i.pravatar.cc/80?img=70',bio:'الحساب الرسمي لوزارة العدل السعودية',verified:true,followers:234000,type:'official'},
        {id:'pg2',name:'الجمعية السعودية للمحامين',handle:'saudi_bar',avatar:'https://i.pravatar.cc/80?img=71',bio:'الجمعية الوطنية للمحامين المرخصين',verified:true,followers:89000,type:'organization'},
        {id:'pg3',name:'قانوني Tech',handle:'qanuni_app',avatar:'https://i.pravatar.cc/80?img=72',bio:'منصة تقنية قانونية — أدوات ذكية للمحامين',verified:false,followers:12400,type:'startup'}
    ];
    DB.setAll('pages', pages);

    // ─── إشعارات تجريبية ───
    const notifs = [
        {type:'like',message:'أ. فهد العتيبي أعجب بمنشورك',userId:'u1'},
        {type:'comment',message:'د. خالد الشمري علّق على منشورك',userId:'u1'},
        {type:'follow',message:'أحمد البقمي بدأ متابعتك',userId:'u1'},
        {type:'mention',message:'المكتبة القانونية أشارت إليك في منشور',userId:'u1'},
        {type:'system',message:'مرحباً بك في لو بوك!',userId:'u1'},
    ];
    notifs.forEach(n => { n.read = false; n.createdAt = ago(Math.floor(Math.random()*1000)+10); });
    DB.setAll('notifications', notifs);

    const elapsed = Math.round(performance.now() - t0);
    const stats = DB.stats();
    console.log(`[Seed] ✅ تم زرع البيانات في ${elapsed}ms`);
    console.table(stats);
    return stats;
}

// ═══════════════════════════════════════════════════════════════════
// ██  CONSOLE LOGGER  ██
// ═══════════════════════════════════════════════════════════════════
const Logger = {
    _lines: [],
    _maxLines: 100,

    log(type, msg){
        const time = new Date().toLocaleTimeString('ar-SA',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
        this._lines.unshift({time, type, msg});
        if(this._lines.length > this._maxLines) this._lines.pop();
        this._render();
    },

    _render(){
        const el = document.getElementById('consoleOutput');
        if(!el) return;
        const colors = {info:'text-blue-400 bg-blue-500/10',success:'text-green-400 bg-green-500/10',warn:'text-yellow-400 bg-yellow-500/10',error:'text-red-400 bg-red-500/10',data:'text-purple-400 bg-purple-500/10'};
        el.innerHTML = this._lines.slice(0,40).map(l=>`
            <div class="console-line">
                <span class="cl-time">${l.time}</span>
                <span class="cl-type ${colors[l.type]||''}">${l.type.toUpperCase()}</span>
                <span class="cl-msg">${esc(l.msg)}</span>
            </div>`).join('');
    },

    clear(){this._lines=[];this._render()}
};

// ═══════════════════════════════════════════════════════════════════
// ██  INIT — LOGIN & SEED  ██
// ═══════════════════════════════════════════════════════════════════
// Seed data on first load
seedAll();

// Auto-login as admin
if(!Auth.getCurrentUser()){
    Auth.login('u1','nora_q','admin');
}

// ═══════════════════════════════════════════════════════════════════
// ██  UI RENDERING  ██
// ═══════════════════════════════════════════════════════════════════
let currentTab = 'overview';

function switchArch(tab, btn){
    currentTab = tab;
    document.querySelectorAll('.arch-tab').forEach(t=>t.classList.remove('active'));
    if(btn) btn.classList.add('active');
    renderArch();
}

function renderArch(){
    const area = document.getElementById('archContent');
    switch(currentTab){
        case 'overview': renderOverview(area); break;
        case 'db': renderDB(area); break;
        case 'auth': renderAuth(area); break;
        case 'notif': renderNotif(area); break;
        case 'seed': renderSeed(area); break;
        case 'perf': renderPerf(area); break;
    }
}

// ─── OVERVIEW ───
function renderOverview(area){
    const s = DB.stats();
    area.innerHTML = `
    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-5">
        ${[
            {v:s.users,l:'مستخدم',c:'#f26522',i:'people'},
            {v:s.posts,l:'منشور',c:'#3b82f6',i:'article'},
            {v:s.comments,l:'تعليق',c:'#22c55e',i:'comment'},
            {v:s.conversations,l:'محادثة',c:'#a855f7',i:'chat'},
            {v:s.stories,l:'قصة',c:'#eab308',i:'auto_stories'},
        ].map((x,i)=>`
        <div class="stat-sm text-center anim-fadeUp" style="animation-delay:${i*.06}s;opacity:0">
            <span class="material-symbols-outlined text-[18px] mb-1 block" style="color:${x.c}">${x.i}</span>
            <div class="stat-val" style="color:${x.c}">${x.v}</div>
            <div class="stat-lbl">${x.l}</div>
        </div>`).join('')}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <!-- Architecture Diagram -->
        <div class="card anim-fadeUp" style="animation-delay:.3s;opacity:0">
            <h3 class="font-bold text-sm mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-[#f26522] text-[18px]">account_tree</span>
                مخطط البنية
            </h3>
            <div class="space-y-2 text-xs">
                ${[
                    {name:'DatabaseManager',desc:'CRUD كامل مع localStorage',badge:'8 طرق',color:'blue'},
                    {name:'AuthManager',desc:'JWT + صلاحيات + تجديد',badge:'6 طرق',color:'green'},
                    {name:'NotificationManager',desc:'إنشاء + قراءة + تحديد',badge:'5 طرق',color:'purple'},
                    {name:'PerformanceManager',desc:'Lazy Load + Infinite Scroll',badge:'4 طرق',color:'orange'},
                ].map((m,i)=>`
                <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(42,42,42,.3)">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(${m.color==='blue'?'59,130,246':m.color==='green'?'34,197,94':m.color==='purple'?'168,85,247':'242,101,34'},.12)">
                        <span class="material-symbols-outlined text-[16px]" style="color:${m.color==='blue'?'#60a5fa':m.color==='green'?'#4ade80':m.color==='purple'?'#c084fc':'#f26522'}">code</span>
                    </div>
                    <div class="flex-1"><span class="font-bold">${m.name}</span><br><span style="color:#7a7570">${m.desc}</span></div>
                    <span class="badge badge-${m.color}">${m.badge}</span>
                </div>`).join('')}
            </div>
        </div>

        <!-- Quick Test Panel -->
        <div class="card anim-fadeUp" style="animation-delay:.4s;opacity:0">
            <h3 class="font-bold text-sm mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-green-400 text-[18px]">play_circle</span>
                اختبار سريع للأنظمة
            </h3>
            <div class="space-y-2">
                <button onclick="testDB()" class="btn-exec w-full justify-center text-xs"><span class="material-symbols-outlined text-[14px]">storage</span>اختبار DatabaseManager</button>
                <button onclick="testAuth()" class="btn-exec w-full justify-center text-xs" style="background:linear-gradient(135deg,#22c55e,#16a34a)"><span class="material-symbols-outlined text-[14px]">key</span>اختبار AuthManager</button>
                <button onclick="testNotif()" class="btn-exec w-full justify-center text-xs" style="background:linear-gradient(135deg,#a855f7,#7c3aed)"><span class="material-symbols-outlined text-[14px]">notifications</span>اختبار NotificationManager</button>
                <button onclick="testPerf()" class="btn-exec w-full justify-center text-xs" style="background:linear-gradient(135deg,#3b82f6,#2563eb)"><span class="material-symbols-outlined text-[14px]">speed</span>اختبار Infinite Scroll</button>
            </div>
        </div>
    </div>

    <!-- Console -->
    <div class="card anim-fadeUp" style="animation-delay:.5s;opacity:0">
        <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-sm flex items-center gap-2">
                <span class="material-symbols-outlined text-[#f26522] text-[18px]">terminal</span>
                سجل العمليات
            </h3>
            <button onclick="Logger.clear()" class="btn-sm btn-primary">مسح</button>
        </div>
        <div class="console" id="consoleOutput">
            <div class="console-line"><span class="cl-time">--:--:--</span><span class="cl-type text-green-400 bg-green-500/10">READY</span><span class="cl-msg">جاهز — اضغط أحد الأزرار لاختبار الأنظمة</span></div>
        </div>
    </div>`;
}

// ─── TEST FUNCTIONS ───
function testDB(){
    Logger.log('info','═══ اختبار DatabaseManager ═══');

    // Create
    Logger.log('data','→ DB.add("posts", {text:"منشور اختبار"})');
    const newPost = DB.add('posts', {authorId:'u1',text:'منشور اختباري — '+new Date().toLocaleTimeString('ar-SA'),type:'text',likes:0,comments:0,views:0,pinned:false});
    Logger.log('success','✓ تمت الإضافة — id: '+newPost.id);

    // Read
    Logger.log('data','→ DB.getById("posts", "'+newPost.id+'")');
    const found = DB.getById('posts', newPost.id);
    Logger.log('success','✓ تم العثور: "'+found.text.substring(0,30)+'..."');

    // Update
    Logger.log('data','→ DB.update("posts", id, {likes: 42})');
    const updated = DB.update('posts', newPost.id, {likes:42});
    Logger.log('success','✓ تم التحديث — likes: '+updated.likes);

    // Find
    Logger.log('data','→ DB.find("posts", p => p.likes > 5000)');
    const popular = DB.find('posts', p => p.likes > 5000);
    Logger.log('success','✓ '+popular.length+' منشور شعبي (>5000 إعجاب)');

    // Count
    const total = DB.count('posts');
    Logger.log('data','→ DB.count("posts") = '+total);

    // Delete
    Logger.log('data','→ DB.remove("posts", "'+newPost.id+'")');
    DB.remove('posts', newPost.id);
    Logger.log('success','✓ تم الحذف — الإجمالي الآن: '+DB.count('posts'));

    // Stats
    const stats = DB.stats();
    Logger.log('data','→ DB.stats() — التخزين: '+stats.storageKB+' KB');
    Logger.log('info','═══ انتهى الاختبار ═══');
    showToast('اختبار DatabaseManager مكتمل','success');
}

function testAuth(){
    Logger.log('info','═══ اختبار AuthManager ═══');

    const user = Auth.getCurrentUser();
    Logger.log('success','✓ المستخدم الحالي: '+user.username+' (الدور: '+user.role+')');

    const perm1 = Auth.checkPermission('delete_user');
    Logger.log('data','→ checkPermission("delete_user") = '+(perm1.allowed?'✓ مسموح':'✗ مرفوض'));

    const perm2 = Auth.checkPermission('manage_ads');
    Logger.log('data','→ checkPermission("manage_ads") = '+(perm2.allowed?'✓ مسموح':'✗ مرفوض'));

    Logger.log('data','→ refreshToken()...');
    const refreshed = Auth.refreshToken();
    Logger.log('success','✓ التجديد: '+(refreshed?'ناجح':'فشل'));

    Logger.log('info','═══ انتهى الاختبار ═══');
    showToast('اختبار AuthManager مكتمل','success');
}

function testNotif(){
    Logger.log('info','═══ اختبار NotificationManager ═══');

    const before = NotifMgr.unreadCount('u1');
    Logger.log('data','→ الإشعارات غير المقروءة: '+before);

    Logger.log('data','→ إنشاء إشعار جديد...');
    const notif = NotifMgr.create('u1','like','أ. أحمد أعجب بمنشورك الجديد',{postId:'p1'});
    Logger.log('success','✓ تم الإنشاء — id: '+notif.id);

    const after = NotifMgr.unreadCount('u1');
    Logger.log('data','→ الإشعارات الآن: '+after);

    Logger.log('data','→ markAllRead("u1")...');
    NotifMgr.markAllRead('u1');
    Logger.log('success','✓ تم تحديد الكل كمقروء — '+NotifMgr.unreadCount('u1')+' غير مقروء');

    Logger.log('info','═══ انتهى الاختبار ═══');
    showToast('اختبار NotificationManager مكتمل','success');
}

function testPerf(){
    Logger.log('info','═══ اختبار Infinite Scroll ═══');

    const allPosts = DB.getAll('posts');
    Logger.log('data','→ إجمالي المنشورات: '+allPosts.length);

    for(let page=1; page<=3; page++){
        const result = Perf.paginate(allPosts, page);
        Logger.log('data','→ الصفحة '+page+': '+result.shown+'/'+result.total+' — hasMore: '+result.hasMore);
    }

    Logger.log('data','→ debounce(500ms)...');
    const debouncedFn = Perf.debounce(()=>Logger.log('success','✓ Debounced!'),500);
    debouncedFn();

    Logger.log('data','→ throttle(1000ms)...');
    const throttledFn = Perf.throttle(()=>Logger.log('success','✓ Throttled!'),1000);
    throttledFn(); throttledFn(); throttledFn();

    Logger.log('info','═══ انتهى الاختبار ═══');
    showToast('اختبار Infinite Scroll مكتمل','success');
}

// ─── DB TAB ───
function renderDB(area){
    area.innerHTML = `
    <div class="code-block mb-5 anim-fade">
        <div class="code-header"><div class="dot" style="background:#ef4444"></div><div class="dot" style="background:#eab308"></div><div class="dot" style="background:#22c55e"></div><span class="text-[11px] text-[#7a7570] mr-2 mono">DatabaseManager.js</span></div>
        <pre class="code-body"><span class="kw">const</span> <span class="fn">DB</span> = {
  <span class="cm">// قراءة مجموعة كاملة من localStorage</span>
  <span class="fn">getAll</span>(<span class="prop">key</span>) {
    <span class="kw">const</span> raw = localStorage.<span class="fn">getItem</span>(<span class="str">'lobuk_'</span> + <span class="prop">key</span>);
    <span class="kw">return</span> raw ? JSON.<span class="fn">parse</span>(raw) : [];
  },

  <span class="cm">// إضافة عنصر جديد مع id تلقائي</span>
  <span class="fn">add</span>(<span class="prop">key</span>, <span class="prop">item</span>) {
    <span class="kw">const</span> items = <span class="kw">this</span>.<span class="fn">getAll</span>(<span class="prop">key</span>);
    <span class="prop">item</span>.id = <span class="fn">uid</span>();
    items.<span class="fn">push</span>(<span class="prop">item</span>);
    <span class="kw">this</span>.<span class="fn">setAll</span>(<span class="prop">key</span>, items);
    <span class="kw">return</span> <span class="prop">item</span>;
  },

  <span class="cm">// تحديث عنصر بالمعرف</span>
  <span class="fn">update</span>(<span class="prop">key</span>, <span class="prop">id</span>, <span class="prop">updates</span>) {
    <span class="kw">const</span> items = <span class="kw">this</span>.<span class="fn">getAll</span>(<span class="prop">key</span>);
    <span class="kw">const</span> idx = items.<span class="fn">findIndex</span>(i => i.id === <span class="prop">id</span>);
    items[idx] = { ...items[idx], ...<span class="prop">updates</span> };
    <span class="kw">this</span>.<span class="fn">setAll</span>(<span class="prop">key</span>, items);
    <span class="kw">return</span> items[idx];
  },

  <span class="cm">// حذف عنصر بالمعرف</span>
  <span class="fn">remove</span>(<span class="prop">key</span>, <span class="prop">id</span>) {
    <span class="kw">const</span> items = <span class="kw">this</span>.<span class="fn">getAll</span>(<span class="prop">key</span>)
      .<span class="fn">filter</span>(i => i.id !== <span class="prop">id</span>);
    <span class="kw">this</span>.<span class="fn">setAll</span>(<span class="prop">key</span>, items);
  },

  <span class="cm">// بحث متقدم بدالة فلترة</span>
  <span class="fn">find</span>(<span class="prop">key</span>, <span class="prop">predicate</span>) {
    <span class="kw">return</span> <span class="kw">this</span>.<span class="fn">getAll</span>(<span class="prop">key</span>).<span class="fn">filter</span>(<span class="prop">predicate</span>);
  },

  <span class="cm">// حجم التخزين المستخدم (KB)</span>
  <span class="fn">getStorageSize</span>() { <span class="cm">/* ... */</span> },

  <span class="cm">// إحصائيات سريعة</span>
  <span class="fn">stats</span>() {
    <span class="kw">return</span> {
      users: <span class="kw">this</span>.<span class="fn">count</span>(<span class="str">'users'</span>),
      posts: <span class="kw">this</span>.<span class="fn">count</span>(<span class="str">'posts'</span>),
      storageKB: <span class="kw">this</span>.<span class="fn">getStorageSize</span>()
    };
  }
};</pre>
    </div>

    <!-- Live Data Preview -->
    <div class="card anim-fadeUp">
        <h3 class="font-bold text-sm mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-blue-400 text-[18px]">table_chart</span>
            بيانات مباشرة من localStorage
        </h3>
        <div class="overflow-x-auto">
            <table class="tbl">
                <thead><tr><th>المجموعة</th><th>العناصر</th><th>أول عنصر</th><th>الحجم</th></tr></thead>
                <tbody>
                    ${['users','posts','comments','conversations','messages','stories','groups','pages','notifications'].map(k=>{
                        const items = DB.getAll(k);
                        const first = items[0];
                        const size = new Blob([JSON.stringify(items)]).size;
                        return `<tr>
                            <td><span class="badge badge-orange">${k}</span></td>
                            <td class="font-bold">${items.length}</td>
                            <td class="text-[11px] truncate max-w-[200px]" style="color:#7a7570">${first?esc(JSON.stringify(first).substring(0,60))+'...':'—'}</td>
                            <td class="mono text-[11px]">${(size/1024).toFixed(1)} KB</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
    </div>`;
}

// ─── AUTH TAB ───
function renderAuth(area){
    const user = Auth.getCurrentUser();
    area.innerHTML = `
    <div class="code-block mb-5 anim-fade">
        <div class="code-header"><div class="dot" style="background:#ef4444"></div><div class="dot" style="background:#eab308"></div><div class="dot" style="background:#22c55e"></div><span class="text-[11px] text-[#7a7570] mr-2 mono">AuthManager.js</span></div>
        <pre class="code-body"><span class="kw">const</span> <span class="fn">Auth</span> = {
  <span class="cm">// إنشاء JWT Token مع توقيع</span>
  <span class="fn">login</span>(<span class="prop">userId</span>, <span class="prop">username</span>, <span class="prop">role</span>) {
    <span class="kw">const</span> access = <span class="kw">this</span>.<span class="fn">_createToken</span>(
      { sub:<span class="prop">userId</span>, username, role },
      <span class="num">15</span> * <span class="num">60</span> * <span class="num">1000</span>  <span class="cm">// 15 دقيقة</span>
    );
    localStorage.<span class="fn">setItem</span>(<span class="str">'access_token'</span>, access);
    <span class="kw">return</span> { accessToken: access };
  },

  <span class="cm">// التحقق + التجديد التلقائي</span>
  <span class="fn">getCurrentUser</span>() {
    <span class="kw">let</span> result = <span class="kw">this</span>.<span class="fn">_validateToken</span>(token);
    <span class="kw">if</span>(!result.valid && result.expired) {
      <span class="kw">this</span>.<span class="fn">refreshToken</span>(); <span class="cm">// تجديد تلقائي</span>
    }
    <span class="kw">return</span> result.payload;
  },

  <span class="cm">// فحص الصلاحيات قبل كل عملية</span>
  <span class="fn">checkPermission</span>(<span class="prop">permission</span>) {
    <span class="kw">const</span> user = <span class="kw">this</span>.<span class="fn">getCurrentUser</span>();
    <span class="kw">const</span> perms = <span class="kw">this</span>._permissions[user.role];
    <span class="kw">return</span> perms.<span class="fn">includes</span>(<span class="prop">permission</span>);
  }
};</pre>
    </div>

    <div class="card anim-fadeUp">
        <h3 class="font-bold text-sm mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-green-400 text-[18px]" style="font-variation-settings:'FILL' 1">verified_user</span>
            حالة المصادقة الحالية
        </h3>
        <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl" style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.15)">
                <span class="text-[10px] text-[#7a7570] block">المستخدم</span>
                <span class="font-bold">${user?esc(user.username):'—'}</span>
            </div>
            <div class="p-3 rounded-xl" style="background:rgba(59,130,246,.08);border:1px solid rgba(59,130,246,.15)">
                <span class="text-[10px] text-[#7a7570] block">الدور</span>
                <span class="font-bold text-blue-400">${user?user.role:'—'}</span>
            </div>
            <div class="p-3 rounded-xl" style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.15)">
                <span class="text-[10px] text-[#7a7570] block">Access Token</span>
                <span class="font-bold text-purple-400">صالح ✓</span>
            </div>
            <div class="p-3 rounded-xl" style="background:rgba(242,101,34,.08);border:1px solid rgba(242,101,34,.15)">
                <span class="text-[10px] text-[#7a7570] block">الصلاحيات</span>
                <span class="font-bold text-[#f26522]">7/7 كاملة</span>
            </div>
        </div>

        <div class="mt-4">
            <h4 class="text-xs font-bold mb-2">مصفوفة الصلاحيات</h4>
            <div class="overflow-x-auto">
                <table class="tbl">
                    <thead><tr><th>الصلاحية</th><th>admin</th><th>moderator</th><th>editor</th><th>user</th></tr></thead>
                    <tbody>
                        ${['delete_user','ban_user','verify_user','delete_post','manage_ads','manage_reports','view_analytics','create_post','edit_post','comment','message'].map(p=>{
                            const perms = {admin:['delete_user','ban_user','verify_user','delete_post','manage_ads','manage_reports','view_analytics'],moderator:['delete_post','ban_user','manage_reports'],editor:['create_post','edit_post','delete_own_post'],user:['create_post','delete_own_post','comment','message']};
                            return `<tr><td class="font-bold">${p}</td>${['admin','moderator','editor','user'].map(r=>`<td class="text-center">${perms[r]?.includes(p)?'<span style="color:#4ade80">✓</span>':'<span style="color:#353534">✗</span>'}</td>`).join('')}</tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
}

// ─── NOTIFICATION TAB ───
function renderNotif(area){
    const notifs = NotifMgr.getForUser('u1',10);
    area.innerHTML = `
    <div class="code-block mb-5 anim-fade">
        <div class="code-header"><div class="dot" style="background:#ef4444"></div><div class="dot" style="background:#eab308"></div><div class="dot" style="background:#22c55e"></div><span class="text-[11px] text-[#7a7570] mr-2 mono">NotificationManager.js</span></div>
        <pre class="code-body"><span class="kw">const</span> <span class="fn">NotifMgr</span> = {
  <span class="cm">// إنشاء إشعار جديد</span>
  <span class="fn">create</span>(<span class="prop">userId</span>, <span class="prop">type</span>, <span class="prop">message</span>, <span class="prop">meta</span>) {
    <span class="kw">return</span> DB.<span class="fn">add</span>(<span class="str">'notifications'</span>, {
      userId, type, message, meta,
      read: <span class="num">false</span>
    });
  },

  <span class="cm">// جلب إشعارات مستخدم محدد</span>
  <span class="fn">getForUser</span>(<span class="prop">userId</span>, <span class="prop">limit</span>=<span class="num">20</span>) {
    <span class="kw">return</span> DB.<span class="fn">find</span>(<span class="str">'notifications'</span>,
      n => n.userId === <span class="prop">userId</span>
    ).<span class="fn">sort</span>((a,b) =>
      <span class="kw">new</span> Date(b.createdAt) - <span class="kw">new</span> Date(a.createdAt)
    ).<span class="fn">slice</span>(<span class="num">0</span>, <span class="prop">limit</span>);
  },

  <span class="cm">// عدد غير المقروءة</span>
  <span class="fn">unreadCount</span>(<span class="prop">userId</span>) {
    <span class="kw">return</span> DB.<span class="fn">find</span>(<span class="str">'notifications'</span>,
      n => n.userId === <span class="prop">userId</span> && !n.read
    ).length;
  },

  <span class="cm">// تحديد الكل كمقروء</span>
  <span class="fn">markAllRead</span>(<span class="prop">userId</span>) { <span class="cm">/* ... */</span> }
};</pre>
    </div>

    <div class="card anim-fadeUp">
        <h3 class="font-bold text-sm mb-3">إشعارات المستخدم u1</h3>
        <div class="space-y-2">
            ${notifs.map(n=>{
                const typeIcons = {like:'favorite',comment:'comment',follow:'person_add',mention:'alternate_email',system:'info',message:'chat'};
                const typeColors = {like:'#ef4444',comment:'#3b82f6',follow:'#22c55e',mention:'#a855f7',system:'#f26522',message:'#eab308'};
                return `<div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(42,42,42,.2);${!n.read?'border-right:3px solid #f26522':''}">
                    <span class="material-symbols-outlined text-[18px]" style="color:${typeColors[n.type]||'#7a7570'};font-variation-settings:'FILL ${n.read?0:1}'">${typeIcons[n.type]||'notifications'}</span>
                    <div class="flex-1"><span class="text-xs ${n.read?'font-normal':'font-bold'}">${esc(n.message)}</span><br><span class="text-[10px]" style="color:#7a7570">${fmtTime(n.createdAt)}</span></div>
                    ${!n.read?'<span class="badge badge-orange">جديد</span>':''}
                </div>`;
            }).join('')}
        </div>
    </div>`;
}

// ─── SEED TAB ───
function renderSeed(area){
    const users = DB.getAll('users');
    const posts = DB.getAll('posts');
    area.innerHTML = `
    <div class="card mb-4 anim-fade">
        <h3 class="font-bold text-sm mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-[#f26522] text-[18px]" style="font-variation-settings:'FILL' 1">people</span>
            المستخدمون (${users.length})
        </h3>
        <div class="overflow-x-auto">
            <table class="tbl">
                <thead><tr><th>#</th><th>المستخدم</th><th>المتابعين</th><th>المنشورات</th><th>الدور</th><th>موثق</th></tr></thead>
                <tbody>
                    ${users.map((u,i)=>`<tr>
                        <td style="color:#7a7570">${i+1}</td>
                        <td><div class="flex items-center gap-2"><img src="${u.avatar}" class="w-7 h-7 rounded-full object-cover"/><div><span class="font-bold text-xs">${esc(u.name)}</span><br><span class="text-[10px] mono" style="color:#7a7570">@${esc(u.username)}</span></div></div></td>
                        <td class="font-bold">${fmtNum(u.followers)}</td>
                        <td>${u.posts_count}</td>
                        <td><span class="badge badge-${u.role==='admin'?'orange':u.role==='moderator'?'blue':u.role==='editor'?'purple':'green'}">${u.role}</span></td>
                        <td>${u.verified?'<span class="material-symbols-outlined text-blue-400 text-[14px]" style="font-variation-settings:FILL 1">verified</span>':'—'}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>

    <div class="card anim-fadeUp">
        <h3 class="font-bold text-sm mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-blue-400 text-[18px]" style="font-variation-settings:'FILL' 1">article</span>
            المنشورات (${posts.length}) — آخر 10
        </h3>
        <div class="space-y-2">
            ${posts.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,10).map(p=>{
                const author = DB.getById('users', p.authorId);
                return `<div class="flex items-start gap-3 p-3 rounded-xl" style="background:rgba(42,42,42,.15)">
                    <img src="${author?.avatar||''}" class="w-8 h-8 rounded-full object-cover shrink-0"/>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2"><span class="font-bold text-xs">${esc(author?.name||'')}</span><span class="text-[10px]" style="color:#7a7570">${fmtTime(p.createdAt)}</span>${p.pinned?'<span class="badge badge-orange">مثبت</span>':''}<span class="badge badge-${p.type==='text'?'blue':p.type==='video'?'red':p.type==='poll'?'purple':'green'}">${p.type}</span></div>
                        <p class="text-xs mt-1 truncate" style="color:#a3a3a3">${esc(p.text)}</p>
                        <div class="flex gap-3 mt-1 text-[10px]" style="color:#7a7570"><span>❤ ${fmtNum(p.likes)}</span><span>💬 ${fmtNum(p.comments)}</span><span>👁 ${fmtNum(p.views)}</span></div>
                    </div>
                </div>`;
            }).join('')}
        </div>
    </div>`;
}

// ─── PERFORMANCE TAB ───
function renderPerf(area){
    area.innerHTML = `
    <div class="code-block mb-5 anim-fade">
        <div class="code-header"><div class="dot" style="background:#ef4444"></div><div class="dot" style="background:#eab308"></div><div class="dot" style="background:#22c55e"></div><span class="text-[11px] text-[#7a7570] mr-2 mono">PerformanceManager.js</span></div>
        <pre class="code-body"><span class="kw">const</span> <span class="fn">Perf</span> = {
  <span class="cm">// تحميل كسول للصور</span>
  <span class="fn">initLazyLoad</span>() {
    <span class="kw">const</span> observer = <span class="kw">new</span> <span class="fn">IntersectionObserver</span>(
      (entries) => entries.<span class="fn">forEach</span>(entry => {
        <span class="kw">if</span>(entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.<span class="fn">unobserve</span>(entry.target);
        }
      }),
      { rootMargin: <span class="str">'200px'</span> }
    );
    document.<span class="fn">querySelectorAll</span>(<span class="str">'img[data-src]'</span>)
      .<span class="fn">forEach</span>(img => observer.<span class="fn">observe</span>(img));
  },

  <span class="cm">// تحميل بالدفعات — 10 منشورات لكل دفعة</span>
  <span class="fn">paginate</span>(<span class="prop">allData</span>, <span class="prop">page</span>=<span class="num">1</span>) {
    <span class="kw">const</span> end = <span class="prop">page</span> * <span class="num">10</span>;
    <span class="kw">return</span> {
      items: <span class="prop">allData</span>.<span class="fn">slice</span>(<span class="num">0</span>, end),
      hasMore: end < <span class="prop">allData</span>.length,
      nextPage: <span class="prop">page</span> + <span class="num">1</span>
    };
  },

  <span class="cm">// Debounce — تأخير التنفيذ</span>
  <span class="fn">debounce</span>(<span class="prop">fn</span>, <span class="prop">ms</span>=<span class="num">300</span>) {
    <span class="kw">let</span> timer;
    <span class="kw">return</span> (...<span class="prop">args</span>) => {
      <span class="fn">clearTimeout</span>(timer);
      timer = <span class="fn">setTimeout</span>(() => <span class="prop">fn</span>(...<span class="prop">args</span>), <span class="prop">ms</span>);
    };
  },

  <span class="cm">// Throttle — تقييد التكرار</span>
  <span class="fn">throttle</span>(<span class="prop">fn</span>, <span class="prop">ms</span>=<span class="num">100</span>) {
    <span class="kw">let</span> last = <span class="num">0</span>;
    <span class="kw">return</span> (...<span class="prop">args</span>) => {
      <span class="kw">if</span>(Date.<span class="fn">now</span>() - last >= <span class="prop">ms</span>) {
        last = Date.<span class="fn">now</span>();
        <span class="prop">fn</span>(...<span class="prop">args</span>);
      }
    };
  }
};</pre>
    </div>

    <!-- Live Infinite Scroll Demo -->
    <div class="card anim-fadeUp">
        <h3 class="font-bold text-sm mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-blue-400 text-[18px]">scrollable_header</span>
            تجربة Infinite Scroll مباشرة
        </h3>
        <p class="text-xs mb-3" style="color:#7a7570">يتم تحميل 10 منشورات في كل دفعة. مرر للأسفل لتحميل المزيد.</p>
        <div id="scrollContainer" style="max-height:400px;overflow-y:auto" class="space-y-2 pr-1">
        </div>
        <div id="scrollSentinel" class="h-1"></div>
        <div id="scrollStatus" class="text-center text-xs mt-3" style="color:#7a7570"></div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// ██  INFINITE SCROLL DEMO LOGIC  ██
// ═══════════════════════════════════════════════════════════════════
let scrollPage = 1;
let scrollLoading = false;
let scrollObserver = null;

function initScrollDemo(){
    scrollPage = 1;
    scrollLoading = false;
    const container = document.getElementById('scrollContainer');
    const status = document.getElementById('scrollStatus');
    if(!container) return;

    container.innerHTML = '';
    loadNextBatch();
}

function loadNextBatch(){
    if(scrollLoading) return;
    scrollLoading = true;

    const container = document.getElementById('scrollContainer');
    const status = document.getElementById('scrollStatus');
    if(!container) return;

    const allPosts = DB.getAll('posts').sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    const result = Perf.paginate(allPosts, scrollPage);

    // محاكاة تأخير الشبكة
    status.innerHTML = '<span class="material-symbols-outlined text-[14px] inline-block" style="animation:spin 1s linear infinite">progress_activity</span> جاري التحميل...';

    setTimeout(()=>{
        const newItems = result.items.slice((scrollPage-1)*10, scrollPage*10);
        newItems.forEach(post => {
            const author = DB.getById('users', post.authorId);
            const div = document.createElement('div');
            div.className = 'flex items-center gap-3 p-3 rounded-xl anim-fadeUp';
            div.style.background = 'rgba(42,42,42,.2)';
            div.innerHTML = `
                <img data-src="${author?.avatar||''}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect fill='%23333' width='32' height='32' rx='16'/%3E%3C/svg%3E" class="w-8 h-8 rounded-full object-cover shrink-0" loading="lazy"/>
                <div class="flex-1 min-w-0">
                    <span class="font-bold text-xs">${esc(author?.name||'')}</span>
                    <p class="text-[11px] truncate" style="color:#a3a3a3">${esc(post.text)}</p>
                </div>
                <span class="text-[10px] shrink-0" style="color:#7a7570">❤ ${fmtNum(post.likes)}</span>`;
            container.appendChild(div);
        });

        // Lazy load images
        Perf.initLazyLoad();

        scrollPage = result.nextPage;
        scrollLoading = false;

        if(result.hasMore){
            status.innerHTML = `عرض ${result.shown} من ${result.total} — مرر للمزيد`;
        } else {
            status.innerHTML = `<span style="color:#4ade80">✓ تم تحميل جميع المنشورات (${result.total})</span>`;
        }
    }, 600);
}

// ═══════════════════════════════════════════════════════════════════
// ██  TOAST  ██
// ═══════════════════════════════════════════════════════════════════
function showToast(msg,type='info'){
    const t=document.getElementById('toastEl');
    const icons={success:'check_circle',error:'error',info:'info'};
    t.className='toast '+type;
    t.innerHTML=`<span class="material-symbols-outlined text-[20px]">${icons[type]||'info'}</span> ${msg}`;
    setTimeout(()=>t.classList.add('show'),10);
    setTimeout(()=>t.classList.remove('show'),3500);
}

// ═══════════════════════════════════════════════════════════════════
// ██  RENDER TRIGGER  ██
// ═══════════════════════════════════════════════════════════════════
const originalRenderArch = renderArch;
renderArch = function(){
    originalRenderArch();
    if(currentTab === 'perf'){
        setTimeout(initScrollDemo, 100);
    }
};

// ═══════════════════════════════════════════════════════════════════
// ██  INIT  ██
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function(){
    renderArch();
    console.log('%c لو بوك | البنية التحتية ','background:#f26522;color:white;font-size:14px;font-weight:bold;border-radius:8px;padding:6px 14px');
    const stats = DB.stats();
    console.table(stats);
});
</script>
</body>
</html>
