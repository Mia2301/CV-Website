// Theme Toggle with Local Storage
const toggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
    document.body.classList.add("dark");
    document.documentElement.style.setProperty("--bg", "#1e1e1e");
    document.documentElement.style.setProperty("--text", "#ffffff");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    if (isDark) {
        document.documentElement.style.setProperty("--bg", "#1e1e1e");
        document.documentElement.style.setProperty("--text", "#ffffff");
        toggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.style.setProperty("--bg", "#ffffff");
        document.documentElement.style.setProperty("--text", "#222");
        toggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Print Button
document.getElementById("printBtn").addEventListener("click", () => {
    window.print();
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav").querySelector("ul");

hamburger.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// Close menu when link is clicked
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.style.display = "none";
    });
});

// Smooth Scroll Navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// Animate Skill Bars on Page Load
window.addEventListener("load", () => {
    document.querySelectorAll(".skill-fill").forEach(bar => {
        const level = bar.dataset.level || 0;
        bar.style.width = level + "%";
    });
});

// Observe when elements come into view and animate them
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains("skill-fill")) {
                const level = entry.target.dataset.level || 0;
                entry.target.style.width = level + "%";
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll(".skill-fill").forEach(el => observer.observe(el));
}

// Service Worker Registration (PWA Support)
if ("serviceWorker" in navigator) {
    // Service worker registration can be added in future for offline support
    // navigator.serviceWorker.register("sw.js").catch(err => console.log("SW registration failed:", err));
}
