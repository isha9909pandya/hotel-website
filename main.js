document.addEventListener("DOMContentLoaded", () => {
  // Custom Cursor
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
  });

  // Navbar Animation
  gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Slider Caption Animation
  gsap.utils.toArray(".swiper-slide").forEach((slide) => {
    gsap.from(slide.querySelector("h1"), {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(slide.querySelector("p"), {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
    });
  });

  // Scroll Animations for Sections
  gsap.utils.toArray(["#about", "#rooms", "#dining", "#team", "#gallery", "#offers", "#blog", "#contact"]).forEach((section) => {
    gsap.from(section.querySelectorAll("h3, h5, p, .main-btn, img"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Room Hover Animation
  gsap.utils.toArray(".room-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item.querySelector(".room-content"), {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item.querySelector(".room-content"), {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });

  // Gallery Hover Animation
  gsap.utils.toArray(".gallery-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item.querySelector("img"), {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(item, {
        "--before-opacity": 0.6,
        duration: 0.5,
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item.querySelector("img"), {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(item, {
        "--before-opacity": 0,
        duration: 0.5,
      });
    });
  });

  // Counter Animation
  gsap.utils.toArray(".counter h1 span").forEach((counter) => {
    gsap.to(counter, {
      textContent: counter.getAttribute("data-count") || 100,
      duration: 2,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ".counter",
        start: "top 80%",
      },
    });
  });

  // Swiper Initialization
  new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Partner Slider
  new Swiper(".our-partner", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    },
  });
});