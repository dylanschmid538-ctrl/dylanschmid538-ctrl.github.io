const menu=document.querySelector('.menu-button');
const mobile=document.querySelector('.mobile-nav');
if(menu&&mobile){menu.addEventListener('click',()=>{const isOpen=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!isOpen));mobile.hidden=isOpen;});document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');mobile.hidden=true;}});}
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!motion.matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
