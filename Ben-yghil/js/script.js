    // ============================ Script Text ===================================

    var typed = new Typed(".typing", {
        strings: ["", "Web Developper", "Web Designer"],
        typeSpeed: 100,
        BackSpeed: 50,
        loop: true
    });

    //=========================== Aside links =====================================

    const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length;
    const sections = document.querySelectorAll(".section");

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
            for (let j = 0; j < sections.length; j++) {
                sections[j].classList.remove("back-section")
            }
            for (let k = 0; k < totalNavList; k++) {
                if (navList[k].querySelector("a").classList.contains("active")) {
                    sections[k].classList.add("back-section")
                }
                navList[k].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            //check section with links
            showSection(this);
        })
    }
    // Button Toggle click

    const navToggle = document.querySelector(".nav-toggle"),
        aside = document.querySelector(".aside");
    navToggle.addEventListener("click", function() {
        aside.classList.toggle("open");
        navToggle.classList.toggle("open");
        for (let j = 0; j < sections.length; j++) {
            sections[j].classList.toggle("open");
        }

    })

    // Btn hire-me to show section contact
    function updateNavLinks(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            if (element.getAttribute("href") == navList[i].querySelector("a").getAttribute("href")) {
                navList[i].querySelector("a").classList.add("active")
            }

        }
    }
    document.querySelector(".hire-me").addEventListener("click", function() {
            showSection(this);
            updateNavLinks(this)
        })
        // Function to show section
    function showSection(element) {
        for (let j = 0; j < sections.length; j++) {
            if ('#' + sections[j].getAttribute("id") == element.getAttribute("href")) {
                for (let k = 0; k < sections.length; k++) {
                    sections[k].classList.remove("active");
                }
                sections[j].classList.add("active");
                break;
            }
        }
    }