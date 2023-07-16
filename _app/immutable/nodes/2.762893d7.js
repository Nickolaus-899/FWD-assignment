import{s as V,c as J,n as G}from"../chunks/scheduler.7c4769d9.js";import{S as $,i as L,g as l,s as u,h as i,j as f,y as x,c as h,f as o,k as a,a as S,A as e,m as bt,n as Qt,r as ct,u as ot,v as dt,d as ut,t as ht,w as ft,B as Bt}from"../chunks/index.eed2de7a.js";import{b as T}from"../chunks/paths.0a4b2146.js";const Xt="/FWD/_app/immutable/assets/enigma.a4908333.jpg",wt="data:image/png;base64,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",Rt="/FWD/_app/immutable/assets/fpga.188205b6.png",Dt="/FWD/_app/immutable/assets/telegram.82d9bf32.png";function Nt(M){let t,s,c,n="Projects",d,r,v,m,y,vt,K,I,mt="Model of Enigma Machine",Y,Q,gt="Written in C++",F,B,g,_,Ct,tt,O,pt="Mini-Game in console",et,X,xt="Written in Python",at,w,C,k,At,st,z,Gt="FPGA Project (MemGame)",nt,R,Mt="Written in Verilog",rt,D,p,U,yt,lt,b,It="InnoBookingBot",it,N,_t="Written in Java, Flutter, Kotlin";return{c(){t=l("div"),s=l("div"),c=l("h2"),c.textContent=n,d=u(),r=l("div"),v=l("div"),m=l("a"),y=l("img"),K=u(),I=l("h3"),I.textContent=mt,Y=u(),Q=l("p"),Q.textContent=gt,F=u(),B=l("div"),g=l("a"),_=l("img"),tt=u(),O=l("h3"),O.textContent=pt,et=u(),X=l("p"),X.textContent=xt,at=u(),w=l("div"),C=l("a"),k=l("img"),st=u(),z=l("h3"),z.textContent=Gt,nt=u(),R=l("p"),R.textContent=Mt,rt=u(),D=l("div"),p=l("a"),U=l("img"),lt=u(),b=l("h3"),b.textContent=It,it=u(),N=l("p"),N.textContent=_t,this.h()},l(P){t=i(P,"DIV",{class:!0,id:!0});var Z=f(t);s=i(Z,"DIV",{class:!0});var E=f(s);c=i(E,"H2",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-uqmnfd"&&(c.textContent=n),d=h(E),r=i(E,"DIV",{class:!0});var A=f(r);v=i(A,"DIV",{class:!0});var Ot=f(v);m=i(Ot,"A",{href:!0,class:!0});var H=f(m);y=i(H,"IMG",{class:!0,src:!0,alt:!0}),K=h(H),I=i(H,"H3",{class:!0,"data-svelte-h":!0}),x(I)!=="svelte-1mcmbma"&&(I.textContent=mt),Y=h(H),Q=i(H,"P",{"data-svelte-h":!0}),x(Q)!=="svelte-gdyi7n"&&(Q.textContent=gt),H.forEach(o),Ot.forEach(o),F=h(A),B=i(A,"DIV",{class:!0});var kt=f(B);g=i(kt,"A",{href:!0,class:!0});var j=f(g);_=i(j,"IMG",{class:!0,src:!0,alt:!0}),tt=h(j),O=i(j,"H3",{class:!0,"data-svelte-h":!0}),x(O)!=="svelte-98d0js"&&(O.textContent=pt),et=h(j),X=i(j,"P",{"data-svelte-h":!0}),x(X)!=="svelte-1k5l4hg"&&(X.textContent=xt),j.forEach(o),kt.forEach(o),at=h(A),w=i(A,"DIV",{class:!0});var zt=f(w);C=i(zt,"A",{href:!0,class:!0});var q=f(C);k=i(q,"IMG",{class:!0,src:!0,alt:!0}),st=h(q),z=i(q,"H3",{class:!0,"data-svelte-h":!0}),x(z)!=="svelte-1oxt2u9"&&(z.textContent=Gt),nt=h(q),R=i(q,"P",{"data-svelte-h":!0}),x(R)!=="svelte-15604gw"&&(R.textContent=Mt),q.forEach(o),zt.forEach(o),rt=h(A),D=i(A,"DIV",{class:!0});var Ut=f(D);p=i(Ut,"A",{href:!0,class:!0});var W=f(p);U=i(W,"IMG",{class:!0,src:!0,alt:!0}),lt=h(W),b=i(W,"H3",{class:!0,"data-svelte-h":!0}),x(b)!=="svelte-xgkbyu"&&(b.textContent=It),it=h(W),N=i(W,"P",{"data-svelte-h":!0}),x(N)!=="svelte-1l70tlv"&&(N.textContent=_t),W.forEach(o),Ut.forEach(o),A.forEach(o),E.forEach(o),Z.forEach(o),this.h()},h(){a(c,"class","portfolio-header"),a(y,"class","card-img"),J(y.src,vt=Xt)||a(y,"src",vt),a(y,"alt","Enigma"),a(I,"class","card-title"),a(m,"href",T+"/enigma"),a(m,"class","card-link"),a(v,"class","card"),a(_,"class","card-img"),J(_.src,Ct=wt)||a(_,"src",Ct),a(_,"alt","Mini-Game"),a(O,"class","card-title"),a(g,"href",T+"/"),a(g,"class","card-link"),a(B,"class","card"),a(k,"class","card-img"),J(k.src,At=Rt)||a(k,"src",At),a(k,"alt","FPGA"),a(z,"class","card-title"),a(C,"href",T+"/"),a(C,"class","card-link"),a(w,"class","card"),a(U,"class","card-img"),J(U.src,yt=Dt)||a(U,"src",yt),a(U,"alt","Telegram Bot"),a(b,"class","card-title"),a(p,"href",T+"/"),a(p,"class","card-link"),a(D,"class","card"),a(r,"class","card-wrapper"),a(s,"class","container"),a(t,"class","portfolio"),a(t,"id","portfolio")},m(P,Z){S(P,t,Z),e(t,s),e(s,c),e(s,d),e(s,r),e(r,v),e(v,m),e(m,y),e(m,K),e(m,I),e(m,Y),e(m,Q),e(r,F),e(r,B),e(B,g),e(g,_),e(g,tt),e(g,O),e(g,et),e(g,X),e(r,at),e(r,w),e(w,C),e(C,k),e(C,st),e(C,z),e(C,nt),e(C,R),e(r,rt),e(r,D),e(D,p),e(p,U),e(p,lt),e(p,b),e(p,it),e(p,N)},p:G,i:G,o:G,d(P){P&&o(t)}}}class Ht extends ${constructor(t){super(),L(this,t,null,Nt,V,{})}}function jt(M){let t,s,c;return{c(){t=l("div"),s=l("a"),c=bt("See Joke"),this.h()},l(n){t=i(n,"DIV",{class:!0});var d=f(t);s=i(d,"A",{href:!0,class:!0});var r=f(s);c=Qt(r,"See Joke"),r.forEach(o),d.forEach(o),this.h()},h(){a(s,"href",T+"/comic"),a(s,"class","footer-button api-button"),a(t,"class","enigma-link")},m(n,d){S(n,t,d),e(t,s),e(s,c)},p:G,i:G,o:G,d(n){n&&o(t)}}}class qt extends ${constructor(t){super(),L(this,t,null,jt,V,{})}}function Wt(M){let t,s,c,n,d;return s=new Ht({}),n=new qt({}),{c(){t=l("div"),ct(s.$$.fragment),c=u(),ct(n.$$.fragment)},l(r){t=i(r,"DIV",{});var v=f(t);ot(s.$$.fragment,v),c=h(v),ot(n.$$.fragment,v),v.forEach(o)},m(r,v){S(r,t,v),dt(s,t,null),e(t,c),dt(n,t,null),d=!0},p:G,i(r){d||(ut(s.$$.fragment,r),ut(n.$$.fragment,r),d=!0)},o(r){ht(s.$$.fragment,r),ht(n.$$.fragment,r),d=!1},d(r){r&&o(t),ft(s),ft(n)}}}class Pt extends ${constructor(t){super(),L(this,t,null,Wt,V,{})}}function Tt(M){let t,s,c;return s=new Pt({}),{c(){t=u(),ct(s.$$.fragment),this.h()},l(n){Bt("svelte-wdlemp",document.head).forEach(o),t=h(n),ot(s.$$.fragment,n),this.h()},h(){document.title="Portfolio"},m(n,d){S(n,t,d),dt(s,n,d),c=!0},p:G,i(n){c||(ut(s.$$.fragment,n),c=!0)},o(n){ht(s.$$.fragment,n),c=!1},d(n){n&&o(t),ft(s,n)}}}class Vt extends ${constructor(t){super(),L(this,t,null,Tt,V,{})}}export{Vt as component};
