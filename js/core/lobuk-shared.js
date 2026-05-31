(function(window){
  const Shared = {
    readLB(key){
      try{
        const raw = localStorage.getItem('lb_' + key);
        return raw ? JSON.parse(raw) : null;
      }catch(_){ return null; }
    },
    pickAvatar(name='لو بوك'){
      return 'https://ui-avatars.com/api/?background=f97316&color=fff&name=' + encodeURIComponent(name);
    },
    normalizeUsername(source='user'){
      return source.toString().replace(/^@/, '').replace(/^\+/, '').replace(/[^a-zA-Z0-9؀-ۿ]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 24) || 'lobuk_user';
    },
    getCurrentAuthUser(){
      const currentUserId = this.readLB('currentUserId');
      const users = this.readLB('users') || [];
      return users.find(u => u.id === currentUserId) || null;
    },
    getProfileSnapshot(){
      const auth = this.getCurrentAuthUser() || {};
      const profile = this.readLB('profile') || {};
      const settings = this.readLB('settings') || {};
      const name = profile.name || auth.name || settings.displayName || 'مستخدم لو بوك';
      const username = profile.username || auth.username || settings.username || this.normalizeUsername(auth.email || auth.phone || name);
      const avatar = profile.avatar || auth.avatar || this.pickAvatar(name);
      return {
        id: profile.id || auth.id || 'user_me',
        name,
        username,
        avatar,
        bio: profile.bio || auth.bio || auth.work || settings.bio || 'عضو في منصة لو بوك',
        cover: profile.cover || auth.cover || '',
        verified: typeof profile.verified === 'boolean' ? profile.verified : !!auth.verified,
        badgeType: profile.badgeType || auth.badgeType || (auth.verified ? 'blue' : ''),
        followers: profile.stats?.followers || auth.followers || 0,
        following: profile.stats?.following || auth.following || 0,
        postsCount: profile.stats?.posts || auth.postsCount || 0
      };
    },
    syncUserTargets(root=document){
      const user = this.getProfileSnapshot();
      root.querySelectorAll('[data-user-avatar]').forEach(el => {
        if (el.tagName === 'IMG') el.src = user.avatar;
        else el.style.backgroundImage = `url(${user.avatar})`;
      });
      root.querySelectorAll('[data-user-name]').forEach(el => el.textContent = user.name);
      root.querySelectorAll('[data-user-username]').forEach(el => el.textContent = '@' + user.username);
      return user;
    }
  };
  window.LobukShared = Shared;
})(window);
