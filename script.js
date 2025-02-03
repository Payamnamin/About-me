document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded Successfully!");

    // SCROLL ANIMATION WITH IntersectionObserver
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 🔥 Typing Effect
    const typingText = ["I'm a Developer", "I'm a Designer", "I'm a Coder", "I Love AI & ML"];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        if (charIndex < typingText[textIndex].length) {
            typingElement.innerHTML += typingText[textIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            textIndex = (textIndex + 1) % typingText.length;
            setTimeout(typeEffect, 500);
        }
    }

    document.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let color1 = Math.min(255, scrollY / 2);
        let color2 = Math.min(255, (scrollY / 2) + 100);
        
        document.querySelectorAll("h1, h2").forEach(el => {
            el.style.color = `rgb(${color1}, ${color2}, 255)`;
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
    
            function updateCounter() {
                if (count < target) {
                    count += Math.ceil(target / 100);
                    counter.innerText = count;
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target;
                }
            }
    
            updateCounter();
        });
    });

    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", random: false }
        }
    });

    document.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let color1 = Math.min(255, scrollY / 2);
        let color2 = Math.min(255, (scrollY / 2) + 100);
        
        document.querySelectorAll("h1, h2").forEach(el => {
            el.style.color = `rgb(${color1}, ${color2}, 255)`;
        });
    });

    setTimeout(typeEffect, 1000);

    // 🔥 Social Links Hover Effect
    const socialLinks = document.querySelectorAll(".social-links a img");
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.2)";
            link.style.filter = "drop-shadow(0px 0px 10px rgba(255, 64, 129, 0.8))";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
            link.style.filter = "none";
        });
    });
});