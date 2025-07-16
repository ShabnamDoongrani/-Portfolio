 /* animation javascript */
//  to Name
   const text = "SHABNAM";
  let index = 0;

  function typeEffect() {
    const target = document.getElementById("typewriter");
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    }
  }

  window.onload = typeEffect;
 
// animation to image
 const img = document.getElementById("profile-img");

  img.addEventListener("click", function () {
    img.classList.toggle("active-img");
  });

//  reveal animation
   window.addEventListener('scroll', revealText);

  function revealText() {
    const elements = document.querySelectorAll('h1, h2, h3, h4, p, li, .role');

    for (let i = 0; i < elements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = elements[i].getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        elements[i].classList.add('active');
      } else {
        elements[i].classList.remove('active');
      }
    }
  }

  revealText(); // Run once on page load

  