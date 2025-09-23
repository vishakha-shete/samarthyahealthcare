/* ============================
   Data for broadcast + carousel
   Replace these URLs with your own images in /assets for production
   ============================ */
   const BROADCAST = {
    herbals: {
      bg: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600",
      title: "Premium Herbal Formulations",
      desc: "Classical Ayurvedic powders, churna and decoctions crafted for purity and performance.",
      spotImg: "images/NEEM TEL.jpg",
      spotName: "NEEM TEL",
      tag: "Immunity • Digestive Harmony"
    },
    hairoils: {
      bg: "images/wellness-bg.jpg",
      title: "Nourishing Hair Oils",
      desc: "Cold-pressed herbal oils with centuries-old recipes for shine and strength.",
      spotImg: "images/bhringraj hair oil.webp",
      spotName: "Hair OIL",
      tag: "Anti-hair-fall • Scalp Health"
    },
    wellness: {
      bg: "images/personal-bg.jpg",
      title: "Holistic Wellness Range",
      desc: "Tonics, syrups and supplements designed to support daily health & vitality.",
      spotImg: "images/Adulsa.jpg",
      spotName: "Adulsa ",
      tag: "Natural • Potent"
    },
    skincare: {
      bg: "images/Ayurvedic Skincare bg.jpg",
      title: "NEEM TEL",
      desc: "Gentle, herbal skincare—cleansing oils, creams and serums made to soothe and repair.",
      spotImg: "images/hair pack.jpg",
      spotName: "HAIR PACK",
      tag: "Soothing • Hydrating"
    }
  };
  
  const CARDS = {
    herbals:[
      {img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900", title:"Triphala Churna", desc:"Digestive & detox support"},
      {img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900", title:"Amla Powder", desc:"High-vitamin C antioxidant"},
      {img:"https://images.unsplash.com/photo-1524594154906-0b10c1f6f5a0?w=900", title:"Ashwagandha Extract", desc:"Stress support"}
    ],
    hairoils:[
      {img:"https://images.unsplash.com/photo-1615485737569-d7f8e27b17a2?w=900", title:"Joti Hair Elixir", desc:"Scalp nourishment & growth"},
      {img:"https://images.unsplash.com/photo-1516685018646-549c8ebf6f44?w=900", title:"Rejuvenating Oil", desc:"Strengthens brittle hair"}
    ],
    wellness:[
      {img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900", title:"Immunity Tonic", desc:"Daily wellness tonic"},
      {img:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=900", title:"Detox Syrup", desc:"Gentle cleanse"}
    ],
    skincare:[
      {img:"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900", title:"Herbal Glow Cream", desc:"Deep hydration"},
      {img:"https://images.unsplash.com/photo-1524594154906-0b10c1f6f5a0?w=900", title:"Calming Serum", desc:"Reduces redness"}
    ]
  };
  
  /* ---------- Broadcast logic ---------- */
  const broadcastEl = document.getElementById('broadcast');
  const broadcastBg = document.getElementById('broadcastBg');
  function setBroadcast(cat){
    // chips active
    document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.cat===cat));
    // update bg and text
    const b = BROADCAST[cat];
    // set background image inline (preferred)
    broadcastBg.style.backgroundImage = `url('${b.bg}')`;
    document.getElementById('broadcastTitle').textContent = b.title;
    document.getElementById('broadcastDesc').textContent = b.desc;
    document.getElementById('spotImage').src = b.spotImg;
    document.getElementById('spotName').textContent = b.spotName;
    document.getElementById('spotTag').textContent = b.tag;
    // render carousel cards based on category
    renderCarousel(cat);
  }
  /* initialize default */
  setBroadcast('herbals');
  
  /* ---------- Carousel rendering ---------- */
  const carouselTrack = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('dots');
  
  function renderCarousel(category){
    carouselTrack.innerHTML = '';
    dotsContainer.innerHTML = '';
    const list = CARDS[category] || [];
    list.forEach((c, i) => {
      const a = document.createElement('article');
      a.className = 'card-large';
      a.innerHTML = `<div class="card-hero" style="background-image:url('${c.img}')"></div>
                     <div class="card-body"><h3>${c.title}</h3><p>${c.desc}</p></div>`;
      carouselTrack.appendChild(a);
  
      // dots
      const dot = document.createElement('span');
      dot.className = 'small-dot' + (i===0 ? ' active' : '');
      dot.addEventListener('click', ()=> {
        // scroll so card is centered
        const left = a.offsetLeft - (window.innerWidth - a.clientWidth)/2;
        carouselTrack.scrollTo({left, behavior:'smooth'});
        document.querySelectorAll('.small-dot').forEach(d=>d.classList.remove('active'));
        dot.classList.add('active');
      });
      dotsContainer.appendChild(dot);
    });
  }
  
  /* autoplay carousel */
  let autoIdx = 0;
  setInterval(()=> {
    const cards = document.querySelectorAll('.card-large');
    if(!cards.length) return;
    autoIdx = (autoIdx + 1) % cards.length;
    const card = cards[autoIdx];
    const left = card.offsetLeft - (window.innerWidth - card.clientWidth)/2;
    carouselTrack.scrollTo({left, behavior:'smooth'});
    document.querySelectorAll('.small-dot').forEach(d=>d.classList.remove('active'));
    const dots = document.querySelectorAll('.small-dot');
    if(dots[autoIdx]) dots[autoIdx].classList.add('active');
  }, 4200);
  
  /* marquee pause on hover */
  const marquee = document.getElementById('marquee');
  if(marquee){
    marquee.addEventListener('mouseenter', ()=> marquee.style.animationPlayState='paused');
    marquee.addEventListener('mouseleave', ()=> marquee.style.animationPlayState='running');
  }
  
  /* scroll helper */
  function scrollToSection(id){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'center'});
  }
  
  /* enquiry stub */
  function openEnquiry(){
    alert('Open enquiry modal / redirect to contact form. Replace this function with your real contact modal.');
  }
  
  /* hero CTA auto-scroll (smooth attention) */
  document.getElementById('exploreBtn').addEventListener('click', ()=> scrollToSection('spotlight'));
  
  /* small reveal for card visuals when scrolled into view */
  window.addEventListener('scroll', ()=>{
    document.querySelectorAll('.card-large').forEach(card=>{
      const top = card.getBoundingClientRect().top;
      if(top < window.innerHeight * 0.85) card.classList.add('visible');
    });
  });
  
  /* keyboard left/right to navigate carousel for accessibility */
  document.getElementById('carouselTrack').addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') carouselTrack.scrollBy({left: 320+22, behavior:'smooth'});
    if(e.key === 'ArrowLeft') carouselTrack.scrollBy({left: - (320+22), behavior:'smooth'});
  });
  