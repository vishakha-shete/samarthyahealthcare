document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting Samarthya Healthcare!');
  });
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
  });
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  const hero = document.querySelector(".hero");
  const images = [
    "images/bg 1.jpg",
    "images/bg2.webp",
    "images/bg3.jpg",
    "images/bg4.jpg"
  ];
  let i = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
  }

  // Run immediately on load
  changeBackground();

  // Change every 4 seconds
  setInterval(changeBackground, 4000);

  document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    const images = [
      
      "images/bg3.jpg",
      "images/bg4.jpg",
      "images/bg5.jpg",
      "images/bg 1.jpg",
      "images/bg2.webp"

    ];
    let i = 0;

    function changeBackground() {
      hero.style.backgroundImage = `url(${images[i]})`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
      hero.style.transition = "background-image 1s ease-in-out";
      i = (i + 1) % images.length;
    }

    // First load
    changeBackground();

    // Change every 5 sec
    setInterval(changeBackground, 3000);
  });


  