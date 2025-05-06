

    // Smooth scroll to blazer section
    const heroBuyButtons = document.querySelectorAll('.hero-slider .slide-right button');
    const blazerSection = document.getElementById('blazer');
    heroBuyButtons.forEach(button => {
      button.addEventListener('click', () => {
        blazerSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Personal info form toggle
    document.querySelector(".buy-now").addEventListener("click", () => {
      document.getElementById("personal-info").classList.remove("hidden");
    });
  
    document.getElementById("close-info").addEventListener("click", () => {
      document.getElementById("personal-info").classList.add("hidden");
    });
  
    // Product update logic
    const productData = {
      airforce: {
        title: "Airforce",
        price: "$199",
        desc: "Lightweight and breathable Airforce shoes for everyday comfort and effortless streetwear style.",
        variants: [
          { color: "#000", img: "img1/img/air.png" },
          { color: "#ccc", img: "img1/img/air2.png" }
        ]
      },
      jorden: {
        title: "Jorden",
        price: "$215",
        desc: "Iconic Jorden sneakers combine performance and timeless fashion for serious style.",
        variants: [
          { color: "#b22222", img: "img1/img/jordan.png" },
          { color: "#2f4f4f", img: "img1/img/jordan2.png" }
        ]
      },
      blazer: {
        title: "Blazer",
        price: "$234",
        desc: "This stylish Blazer blends classic design with modern comfort. Perfect for any occasion.",
        variants: [
          { color: "#333", img: "img1/img/blazer.png" },
          { color: "#654321", img: "img1/img/blazer2.png" }
        ]
      },
      crater: {
        title: "Crater",
        price: "$180",
        desc: "The Crater shoe is sustainable, smart, and stylish — perfect for modern eco-lovers.",
        variants: [
          { color: "#008080", img: "img1/img/crater.png" },
          { color: "#808000", img: "img1/img/crater2.png" }
        ]
      },
      hippie: {
        title: "Hippie",
        price: "$145",
        desc: "Get groovy with Hippie shoes. Retro vibes and comfort made for casual expression.",
        variants: [
          { color: "#ff69b4", img: "img1/img/hippie.png" },
          { color: "#a52a2a", img: "img1/img/hippie2.png" }
        ]
      }
    };
  
    function updateProduct(key) {
      const data = productData[key];
      const productImg = document.getElementById("product-img");
      document.getElementById("product-title").textContent = data.title;
      document.getElementById("product-price").textContent = "💲" + data.price.replace("$", "");
      document.getElementById("product-desc").textContent = data.desc;
  
      const colorBox = document.getElementById("color-options");
      colorBox.innerHTML = "";
  
      data.variants.forEach((variant, index) => {
        const swatch = document.createElement("div");
        swatch.className = "color-swatch";
        swatch.style.backgroundColor = variant.color;
        swatch.style.cursor = "pointer";
        swatch.addEventListener("click", () => {
          productImg.src = variant.img;
        });
        colorBox.appendChild(swatch);
  
        const firstSwatch = colorBox.querySelector(".color-swatch");
        if (firstSwatch) {
          firstSwatch.click(); // Simulates user click on first swatch
        }
      });
    }
  
    document.querySelectorAll(".page-links span").forEach(span => {
      span.addEventListener("click", () => {
        const key = span.textContent.toLowerCase();
        updateProduct(key);
      });
    });
  
    // Initial load
    updateProduct("blazer");
  
    // Hero slider animation
    const slides = document.querySelectorAll('.slide');
    const pageLinks = document.querySelectorAll('.page-links span');
  
    pageLinks.forEach(link => {
      link.addEventListener('click', () => {
        const index = parseInt(link.getAttribute('data-index'));
        slides.forEach(slide => slide.classList.remove('active'));
        const currentSlide = slides[index];
        currentSlide.classList.add('active');
  
        const wrapper = currentSlide.querySelector('.circle-wrapper');
        wrapper.style.animation = 'none';
        void wrapper.offsetWidth;
        wrapper.style.animation = 'slideInRight 0.6s ease';
      });
    });
  
  
