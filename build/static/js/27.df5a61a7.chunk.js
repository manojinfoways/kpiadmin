(this.webpackJsonpPinPointGuam=this.webpackJsonpPinPointGuam||[]).push([[27],{1099:function(e,n,t){"use strict";t.d(n,"a",(function(){return S}));var a=t(41),r=t(25),i=t(71),s=t(116),o=t(0),c=t(8),u=t(17),g=t(10),l=t.n(g),d=t(281),h=t(155),f=Object(r.a)((function e(){var n=this;Object(a.a)(this,e),this.signinRedirectCallback=function(){n.UserManager.signinRedirectCallback().then((function(e){}))},this.getUser=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.UserManager.getUser();case 2:if(t=e.sent,console.log("User 2",t),t){e.next=8;break}return e.next=7,n.UserManager.signinRedirectCallback();case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)}))),this.parseJwt=function(e){var n=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(n))},this.signinRedirect=function(){localStorage.setItem("redirectUri",window.location.pathname),n.UserManager.signinRedirect({})},this.navigateToScreen=function(){window.location.replace("/ptr/admin/dashboard")},this.isAuthenticated=function(){var e=JSON.parse(sessionStorage.getItem("oidc.user:".concat("https://auth.guamgis.com",":").concat("kpi")));return!!e&&!!e.access_token},this.signinSilent=function(){n.UserManager.signinSilent().then((function(e){console.log("signed in",e)})).catch((function(e){console.log(e)}))},this.signinSilentCallback=function(){n.UserManager.signinSilentCallback()},this.createSigninRequest=function(){return n.UserManager.createSigninRequest()},this.logout=function(){n.UserManager.signoutRedirect({id_token_hint:localStorage.getItem("id_token")}),n.UserManager.clearStaleState()},this.signoutRedirectCallback=function(){n.UserManager.signoutRedirectCallback().then((function(){localStorage.clear(),window.location.replace("https://kpi.guamgis.com/")})),n.UserManager.clearStaleState()},this.UserManager=new h.UserManager(Object(c.a)(Object(c.a)({},d.a),{},{userStore:new h.WebStorageStateStore({store:window.sessionStorage}),metadata:Object(c.a)({},d.b)})),h.Log.logger=console,h.Log.level=h.Log.DEBUG,this.UserManager.events.addUserLoaded((function(e){n.navigateToScreen()})),this.UserManager.events.addSilentRenewError((function(e){console.log("silent renew error",e.message)})),this.UserManager.events.addAccessTokenExpired((function(){console.log("token expired"),n.logout()}))})),p=t(309),b=t(1),S=p.a.Consumer;o.Component},1673:function(e,n,t){"use strict";t.r(n);t(0);var a=t(1099),r=t(403),i=t(1);n.default=function(){return Object(i.jsx)(a.a,{children:function(e){return(0,e.logout)(),Object(i.jsx)(r.a,{})}})}}}]);