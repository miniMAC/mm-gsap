document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Funzione per avviare l'animazione mm_gsap_testo_1
    function startAnimation1() {
        const elements = document.querySelectorAll(".mm-gsap-testo-1");
        elements.forEach((element) => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true,
                    },
                });
                chars.forEach((char) => {
                    tl.from(
                        char,
                        {
                            opacity: 0,
                            x: -10,
                            duration: 0.6,
                            ease: "back.out(0.7)",
                        },
                        Math.random() * 1.2
                    );
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-2
    function startAnimation2() {
        const elements = document.querySelectorAll('.mm-gsap-testo-2');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        duration: 0.05,
                        ease: "none"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-3
    function startAnimation3() {
        const elements = document.querySelectorAll('.mm-gsap-testo-3');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-4
    function startAnimation4() {
        const elements = document.querySelectorAll('.mm-gsap-testo-4');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        y: -100,
                        duration: 1,
                        ease: "bounce.out"
                    }, i * 0.1);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-5
    function startAnimation5() {
        const elements = document.querySelectorAll('.mm-gsap-testo-5');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        rotationY: 90,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-6
    function startAnimation6() {
        const elements = document.querySelectorAll('.mm-gsap-testo-6');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                tl.from(chars, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.05
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-7
    function startAnimation7() {
        const elements = document.querySelectorAll('.mm-gsap-testo-7');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        y: -50,
                        duration: 0.5,
                        ease: "bounce.out"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-8
    function startAnimation8() {
        const elements = document.querySelectorAll('.mm-gsap-testo-8');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        scale: 0,
                        rotation: 360,
                        duration: 0.8,
                        ease: "power4.out"
                    }, i * 0.1);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-9
    function startAnimation9() {
        const elements = document.querySelectorAll('.mm-gsap-testo-9');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        y: 50,
                        duration: 0.5,
                        ease: "power2.out"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-10
    function startAnimation10() {
        const elements = document.querySelectorAll('.mm-gsap-testo-10');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        x: -20,
                        duration: 0.6,
                        ease: "power2.out"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-11
    function startAnimation11() {
        const elements = document.querySelectorAll('.mm-gsap-testo-11');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        scaleY: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }, i * 0.05);
                });
            }
        });
    }

    // Funzione per avviare l'animazione per .mm-gsap-testo-12
    function startAnimation12() {
        const elements = document.querySelectorAll('.mm-gsap-testo-12');
        elements.forEach(element => {
            if (element.textContent.trim() !== "") {
                let splitText = new SplitText(element, { type: "chars, words" });
                let chars = splitText.chars;
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true
                    }
                });
                chars.forEach((char, i) => {
                    tl.from(char, {
                        opacity: 0,
                        rotation: 45,
                        duration: 0.7,
                        ease: "power1.out"
                    }, i * 0.05);
                });
            }
        });
    }

    // Avvia le animazioni al caricamento della pagina
    startAnimation1();
    startAnimation2();
    startAnimation3();
    startAnimation4();
    startAnimation5();
    startAnimation6();
    startAnimation7();
    startAnimation8();
    startAnimation9();
    startAnimation10();
    startAnimation11();
    startAnimation12();

    // Aggiungi gli eventi click ai bottoni per avviare le rispettive animazioni
    function addClickListener(id, animationFunction) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", animationFunction);
        }
    }

    addClickListener("trigger-animation-1", startAnimation1);
    addClickListener("trigger-animation-2", startAnimation2);
    addClickListener("trigger-animation-3", startAnimation3);
    addClickListener("trigger-animation-4", startAnimation4);
    addClickListener("trigger-animation-5", startAnimation5);
    addClickListener("trigger-animation-6", startAnimation6);
    addClickListener("trigger-animation-7", startAnimation7);
    addClickListener("trigger-animation-8", startAnimation8);
    addClickListener("trigger-animation-9", startAnimation9);
    addClickListener("trigger-animation-10", startAnimation10);
    addClickListener("trigger-animation-11", startAnimation11);
    addClickListener("trigger-animation-12", startAnimation12);
});
