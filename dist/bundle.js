const t=document.getElementById("button-for-api"),e=document.getElementById("title"),n=document.getElementById("image"),i=document.getElementById("date");t.addEventListener("click",(async()=>{const t=new URLSearchParams;t.append("email","n.petukhov@innopolis.university");const o=await fetch("https://fwd.innopolis.university/api/hw2?"+t.toString()).then((t=>t.json())),a=new URLSearchParams;a.append("id",o);const s=await fetch("https://fwd.innopolis.university/api/comic?"+a.toString()),c=await s.json();console.log(c);const{month:d,year:l,day:m,safe_title:p,img:r,alt:h}=c;e.textContent=p,i.textContent="Date: "+m+":"+d+":"+l,n.src=r,n.alt=h}));
