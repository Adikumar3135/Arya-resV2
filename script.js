
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let lenis=window.Lenis?new Lenis({lerp:.075,smoothWheel:true}):null;
if(lenis){function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf)}
if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);lenis?.on("scroll",ScrollTrigger.update)}
const loader=$(".loader");
if(loader){let n=0;const t=setInterval(()=>{n+=Math.floor(Math.random()*10)+5;if(n>=100){n=100;clearInterval(t);gsap.to(".loader-logo",{clipPath:"inset(0 0 0 0)",duration:.65});gsap.to(".loader-sub",{opacity:1,duration:.5,delay:.2});setTimeout(()=>gsap.to(loader,{clipPath:"inset(0 0 100% 0)",duration:1.15,ease:"power4.inOut",onComplete:()=>loader.remove()}),650)}$(".loader-count").textContent=String(n).padStart(2,"0")+"%";$(".loader-bar i").style.width=n+"%"},80)}
if(window.gsap){
gsap.from(".hero h1 span",{yPercent:110,opacity:0,stagger:.13,duration:1.2,delay:.8,ease:"power4.out"});
gsap.utils.toArray(".photo,.card,.featured,.gallery-grid figure,.gallery-full figure").forEach((e,i)=>gsap.from(e,{y:60,opacity:0,duration:1,delay:(i%3)*.04,scrollTrigger:{trigger:e,start:"top 86%"}}));
gsap.utils.toArray(".hero-bg,.page-hero-bg").forEach(e=>gsap.to(e,{scale:1,yPercent:6,scrollTrigger:{trigger:e.parentElement,start:"top top",end:"bottom top",scrub:true}}));
$$("[data-count]").forEach(e=>gsap.to(e,{innerText:+e.dataset.count,duration:1.4,snap:{innerText:1},scrollTrigger:{trigger:e,start:"top 85%"}}));
}
const hamb=$(".hamb"),mobile=$(".mobile-menu");let mo=false;
hamb?.addEventListener("click",()=>{mo=!mo;gsap.to(mobile,{yPercent:mo?100:0,duration:.65,ease:"power4.inOut"})});
$$(".mobile-menu a").forEach(a=>a.onclick=()=>{mo=false;gsap.to(mobile,{yPercent:0,duration:.5})});
const booking=$("#booking");$$("[data-book]").forEach(b=>b.onclick=()=>booking?.classList.add("open"));$(".booking .close")?.addEventListener("click",()=>booking.classList.remove("open"));booking?.addEventListener("click",e=>{if(e.target===booking)booking.classList.remove("open")});
$$(".booking-form").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f);const msg=`Hello ARYA, I want to book a table.%0A%0AName: ${d.get("name")}%0AGuests: ${d.get("guests")}%0ADate: ${d.get("date")}%0ATime: ${d.get("time")}%0A`;window.open("https://wa.me/919000000000?text="+msg,"_blank")}));
const reviews=$$(".review"),next=$("#next"),prev=$("#prev");let ri=0;function review(i){reviews.forEach(x=>x.classList.remove("active"));reviews[i]?.classList.add("active")}next?.addEventListener("click",()=>{ri=(ri+1)%reviews.length;review(ri)});prev?.addEventListener("click",()=>{ri=(ri-1+reviews.length)%reviews.length;review(ri)});
$$(".menu-tabs button").forEach(b=>b.onclick=()=>{ $$(".menu-tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");const f=b.dataset.filter;$$(".menu-list article").forEach(a=>{const show=f==="all"||a.dataset.cat===f;gsap.to(a,{opacity:show?1:0,height:show?"auto":0,duration:.3});a.style.overflow=show?"visible":"hidden"})});
const cursor=$(".cursor"),dot=$(".cursor-dot");addEventListener("mousemove",e=>{if(cursor){gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:.3});gsap.to(dot,{x:e.clientX,y:e.clientY,duration:.03})}});
$$("a,button,.card,.featured-img,figure,.menu-list article").forEach(e=>{e.onmouseenter=()=>cursor?.classList.add("grow");e.onmouseleave=()=>cursor?.classList.remove("grow")});
$$(".magnetic").forEach(el=>{el.onmousemove=e=>{const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.14,y:(e.clientY-r.top-r.height/2)*.14,duration:.3})};el.onmouseleave=()=>gsap.to(el,{x:0,y:0,duration:.45})});
function orderNumber(){return "ARYA-"+new Date().getFullYear()+"-"+Math.random().toString(36).slice(2,7).toUpperCase()}
const orderNo=$("#orderNo");if(orderNo)orderNo.textContent=orderNumber();
const orderForm=$("#orderForm");orderForm?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(orderForm),num=orderNumber();const msg=`Hello ARYA, I want to place an order.%0A%0AOrder No: ${num}%0AName: ${d.get("name")}%0APhone: ${d.get("phone")}%0AOrder: ${d.get("order")}%0AAddress: ${d.get("address")}%0APayment: ${d.get("payment")}`;window.open("https://wa.me/919000000000?text="+msg,"_blank");$("#orderSuccess").textContent=`Order ${num} prepared. WhatsApp is opening to confirm it.`;$("#orderSuccess").style.display="block"});
