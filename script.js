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
    "images/green leaf.jpg",
   
  ];
  let i = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
  }

  document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
      alert("Searching for: " + e.target.value);
    }
  });
  

  // Run immediately on load
  changeBackground();

  // Change every 4 seconds
  setInterval(changeBackground, 4000);

  document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    const images = [
      

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




  