// GSAP + ScrollTrigger setup + basic reveal logic
window.addEventListener('DOMContentLoaded', () => {
  if (window.gsap && window.ScrollTrigger){
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.to(el, {opacity:1, y:0, duration:0.8, ease:'power2.out', scrollTrigger:{trigger: el, start:'top 85%'}});
    });
  } else {
    // Fallback intersection observer
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
    }, {threshold: .15});
    document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
  }
});
