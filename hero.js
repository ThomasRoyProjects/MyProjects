document.addEventListener("DOMContentLoaded", () => {
    const featurePanel = document.querySelector(".feature-panel");
    const spotlightImage = document.getElementById("spotlight-image");
    const spotlightTitle = document.getElementById("spotlight-title");
    const spotlightText = document.getElementById("spotlight-text");
    const spotlightLink = document.getElementById("spotlight-link");
    const spotlightLabel = document.getElementById("spotlight-label");
    const spotlightCode = document.getElementById("spotlight-code");
    const featureList = document.querySelector(".feature-list");

    const spotlightProjects = [
        {
            title: "Pipeline",
            text: "A local workflow system for messy CSV exports, configurable processing steps, and review-ready outputs.",
            link: "https://github.com/ThomasRoyProjects/csv-record-pipeline",
            cta: "Open repository",
            label: "Workflow automation",
            code: "PIPE-01",
            image: "images/pipeline_preview.png",
            alt: "Pipeline project preview",
            imagePosition: "center center",
            imageScale: "scale(1)",
            bullets: [
                "normalize raw exports",
                "match records and resolve duplicates",
                "segment results for review"
            ]
        },
        {
            title: "Fundraising Intelligence",
            text: "A local dashboard for donation exports, donor segmentation, and campaign-style targeting work.",
            link: "https://github.com/ThomasRoyProjects/Fundraising_Intelligence",
            cta: "Open repository",
            label: "Dashboards",
            code: "FUND-02",
            image: "images/fundraising_dashboard_preview.png",
            alt: "Fundraising Intelligence dashboard preview",
            imagePosition: "left center",
            imageScale: "scale(1.08)",
            bullets: [
                "analyze donation exports",
                "track segments and contribution patterns",
                "build targeting lists for outreach"
            ]
        },
        {
            title: "Spring Boot Webstore",
            text: "A Java web application with persistence, security, server-rendered views, and Docker-based local setup.",
            link: "https://github.com/ThomasRoyProjects/ExampleSpringbootWebstore",
            cta: "Open repository",
            label: "Backend applications",
            code: "JAVA-03",
            image: "images/image4.png",
            alt: "Spring Boot webstore preview",
            imagePosition: "center center",
            imageScale: "scale(1)",
            bullets: [
                "server-rendered storefront pages",
                "database-backed product flows",
                "security and Docker-based setup"
            ]
        }
    ];

    let spotlightIndex = 0;

    function renderSpotlight(project) {
        if (!spotlightImage || !spotlightTitle || !spotlightText || !spotlightLink || !spotlightLabel || !spotlightCode || !featureList) {
            return;
        }

        spotlightImage.src = project.image;
        spotlightImage.alt = project.alt;
        spotlightImage.style.objectPosition = project.imagePosition || "center center";
        spotlightImage.style.transform = project.imageScale || "scale(1)";
        spotlightTitle.textContent = project.title;
        spotlightText.textContent = project.text;
        spotlightLink.href = project.link;
        spotlightLink.textContent = project.cta;
        spotlightLabel.textContent = project.label;
        spotlightCode.textContent = project.code;
        featureList.innerHTML = project.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
    }

    function cycleSpotlight() {
        spotlightIndex = (spotlightIndex + 1) % spotlightProjects.length;
        if (!featurePanel) {
            renderSpotlight(spotlightProjects[spotlightIndex]);
            return;
        }

        featurePanel.classList.add("is-transitioning");
        window.setTimeout(() => {
            renderSpotlight(spotlightProjects[spotlightIndex]);
        }, 180);
        window.setTimeout(() => {
            featurePanel.classList.remove("is-transitioning");
        }, 360);
    }

    renderSpotlight(spotlightProjects[spotlightIndex]);
    window.setInterval(cycleSpotlight, 4200);

    const revealTargets = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16 }
        );

        revealTargets.forEach((target) => observer.observe(target));
    } else {
        revealTargets.forEach((target) => target.classList.add("is-visible"));
    }
});
