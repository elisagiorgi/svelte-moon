var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let m;function g(t){m=t}function f(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const p=[],h=[],$=[],y=[],v=Promise.resolve();let b=!1;function x(t){$.push(t)}let _=!1;const E=new Set;function w(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];g(e),k(e.$$)}for(g(null),p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];E.has(e)||(E.add(e),e())}$.length=0}while(p.length);for(;y.length;)y.pop()();b=!1,_=!1,E.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const I=new Set;function A(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,v.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(r,a,l,s,u,d,f=[-1]){const p=m;g(r);const h=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:a.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let $=!1;if(h.ctx=l?l(r,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),$&&A(r,t)),e})):[],h.update(),$=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();a.intro&&((y=r.$$.fragment)&&y.i&&(I.delete(y),y.i(v))),function(t,n,r,a){const{fragment:l,on_mount:c,on_destroy:s,after_update:u}=t.$$;l&&l.m(n,r),a||x((()=>{const n=c.map(e).filter(i);s?s.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(x)}(r,a.target,a.anchor,a.customElement),w()}var y,v;g(p)}function C(e){let n,o,i,r,m,g,f,p,h,$,y,v,b,x,_,E;return{c(){n=s("section"),o=s("img"),r=u(),m=s("img"),f=u(),p=s("img"),$=u(),y=s("img"),b=u(),x=s("h1"),x.textContent="Alla luna, Giacomo Leopardi",_=u(),E=s("pre"),E.textContent="O graziosa luna, io mi rammento\n  Che, or volge l’anno, sovra questo colle\n  Io venia pien d’angoscia a rimirarti:\n  E tu pendevi allor su quella selva\n  Siccome or fai, che tutta la rischiari.\n  Ma nebuloso e tremulo dal pianto\n  Che mi sorgea sul ciglio, alle mie luci\n  Il tuo volto apparia, che travagliosa\n  Era mia vita: ed è, nè cangia stile,\n  O mia diletta luna. E pur mi giova\n  La ricordanza, e il noverar l’etate\n  Del mio dolore. Oh come grato occorre\n  Nel tempo giovanil, quando ancor lungo\n  La speme e breve ha la memoria il corso,\n  Il rimembrar delle passate cose,\n  Ancor che triste, e che l’affanno duri!",o.src!==(i=O)&&d(o,"src",i),d(o,"id","image1"),d(o,"alt","image1"),d(o,"class","svelte-hd4ihg"),m.src!==(g=j)&&d(m,"src",g),d(m,"id","image2"),d(m,"alt","image2"),d(m,"class","svelte-hd4ihg"),p.src!==(h=q)&&d(p,"src",h),d(p,"id","image3"),d(p,"alt","image3"),d(p,"class","svelte-hd4ihg"),y.src!==(v=L)&&d(y,"src",v),d(y,"id","image4"),d(y,"alt","image4"),d(y,"class","svelte-hd4ihg"),d(x,"id","text"),d(x,"class","svelte-hd4ihg"),d(n,"class","svelte-hd4ihg"),d(E,"id","text2"),d(E,"class","svelte-hd4ihg")},m(t,e){l(t,n,e),a(n,o),a(n,r),a(n,m),a(n,f),a(n,p),a(n,$),a(n,y),a(n,b),a(n,x),l(t,_,e),l(t,E,e)},p:t,i:t,o:t,d(t){t&&c(n),t&&c(_),t&&c(E)}}}let O="./images/bg.jpg",j="./images/moon.png",q="./images/mountain.png",L="./images/road.png";function N(t){return f((()=>{let t=document.getElementById("image1"),e=document.getElementById("image2"),n=document.getElementById("image3"),o=document.getElementById("image4"),i=document.getElementById("text");window.addEventListener("scroll",(function(){var r=window.scrollY;t.style.top=.5*r+"px",e.style.left=.5*-r+"px",n.style.top=.15*-r+"px",o.style.top=.15*r+"px",i.style.top=1*r+"px"}))})),[]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,N,C,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
