document.addEventListener("DOMContentLoaded", () => {

    /* ── NAV: add background on scroll ─────────────── */
    const nav = document.getElementById("nav");

    const onScroll = () => {
        nav.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();


    /* ── REVEAL: scroll-triggered fade-in ──────────── */
    const revealEls = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const delay = parseInt(entry.target.dataset.delay || "0", 10);

                    setTimeout(() => {
                        entry.target.classList.add("is-visible");
                    }, delay);

                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
        );

        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("is-visible"));
    }

});
