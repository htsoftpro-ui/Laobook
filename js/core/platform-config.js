(function(){
  const tokenHash = 'a346d96d8c1297b41e8c1fc9d5c0f2f3120ebbf1ce9ae63a778c3d25ae3285ff';
  function getRepoBase(){
    const path = window.location.pathname || '/';
    const parts = path.split('/').filter(Boolean);
    if (window.location.hostname.endsWith('github.io') && parts.length) return '/' + parts[0];
    return '';
  }
  function build(path){
    const clean = path.startsWith('/') ? path : '/' + path;
    return window.location.origin + getRepoBase() + clean;
  }
  window.LBPlatform = {
    version: '3.0.0',
    name: 'لو بوك',
    admin: {
      tokenHash,
      sessionKey: 'lb_admin_session_granted',
      path: '/console/'
    },
    getBaseUrl(){ return build('/'); },
    getHomeUrl(){ return build('/index.html'); },
    getAdminPortalUrl(token=''){
      const url = build(this.admin.path);
      return token ? url + '?token=' + encodeURIComponent(token) : url;
    },
    copy(text){
      if(navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
      const i=document.createElement('input');
      i.value=text;document.body.appendChild(i);i.select();document.execCommand('copy');i.remove();
      return Promise.resolve();
    }
  };
})();
