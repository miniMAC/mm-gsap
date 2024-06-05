document.addEventListener("DOMContentLoaded", function () {
    
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    if ( mm_gsap.mm_gsap_scrollsmoother === 'enabled' ) {
        // ScrollSmoother
        ScrollSmoother.create({
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
        });
    }

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


    // Avvia le animazioni al caricamento della pagina (testo)
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






















    // Funzione per creare animazioni
    function mmGSAPanimateImages(selector, animation, scrollTriggerOptions = {}) {
        const images = document.querySelectorAll(selector);

        images.forEach(img => {
            gsap.fromTo(img,
                animation.from,
                {
                    ...animation.to,
                    scrollTrigger: {
                        trigger: img,
                        start: "top 80%",
                        toggleActions: "play none none none",
                        ...scrollTriggerOptions
                    }
                }
            );
        });
    }

    // Funzione per attivare l'animazione al click
    function mmGSAPsetupButtonAnimation(buttonId, imageClass, animation) {
        const button = document.getElementById(buttonId);

        if (button) {
            button.addEventListener('click', () => {
                mmGSAPanimateImages(imageClass, animation);
            });
        }
    }
    


    // Funzioni specifiche per ogni animazione
    function mmGSAPsetupAnimation1() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-1', '.img-effetto-1 img', {
            from: { opacity: 0, y: 20 },
            to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation2() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-2', '.img-effetto-2 img', {
            from: { opacity: 0, y: -20 },
            to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation3() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-3', '.img-effetto-3 img', {
            from: { opacity: 0, x: -50 },
            to: { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        });
    }

    function mmGSAPsetupAnimation4() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-4', '.img-effetto-4 img', {
            from: { opacity: 0, x: 50 },
            to: { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        });
    }

    function mmGSAPsetupAnimation5() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-5', '.img-effetto-5 img', {
            from: { opacity: 0, x: -50, filter: "blur(10px)" },
            to: { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation6() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-6', '.img-effetto-6 img', {
            from: { opacity: 0, scale: 1.2 },
            to: { opacity: 1, scale: 1, duration: 1, ease: "circ.out" }
        });
    }

    function mmGSAPsetupAnimation7() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-7', '.img-effetto-7 img', {
            from: { opacity: 0, x: 50, y: 50 },
            to: { opacity: 1, x: 0, y: 0, duration: 1.5, ease: "expo.out" }
        });
    }

    function mmGSAPsetupAnimation8() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-8', '.img-effetto-8 img', {
            from: { opacity: 0, filter: "blur(20px)" },
            to: { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation9() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-9', '.img-effetto-9 img', {
            from: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
            to: { opacity: 1, clipPath: "circle(75% at 50% 50%)", duration: 1.5, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation10() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-10', '.img-effetto-10 img', {
            from: { opacity: 0, y: 0, scale: 0.5 },
            to: { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation11() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-11', '.img-effetto-11 img', {
            from: { opacity: 1, filter: "grayscale(100%)" },
            to: { opacity: 1, filter: "grayscale(0%)", duration: 4, ease: "power2.out" }
        });
    }

    function mmGSAPsetupAnimation12() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-12', '.img-effetto-12', {
            set: {  autoAlpha: 1 },
            from: { x: 10, ease: "power2.out" },
            to: { x: 0, ease: "power2.out", duration: 2.5, },
        });
        mmGSAPsetupButtonAnimation('trigger-animation-img-12', '.img-effetto-12 img', {
            from: { xPercent: 120, scale: 1.3, ease: "power2.out" },
            to: { xPercent: 0, scale: 1, duration: 2.5, ease: "power2.out" },
        });
    }

    function mmGSAPsetupAnimation13() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-13', '.img-effetto-13', {
            set: {  autoAlpha: 1 },
            from: { x: -10, ease: "power2.out" },
            to: { x: 0, ease: "power2.out", duration: 2.5, },
        });
        mmGSAPsetupButtonAnimation('trigger-animation-img-13', '.img-effetto-13 img', {
            from: { xPercent: -120, scale: 1.3, ease: "power2.out" },
            to: { xPercent: 0, scale: 1, duration: 2.5, ease: "power2.out" },
        });
    }

    function mmGSAPsetupAnimation14() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-14', '.img-effetto-14', {
            set: {  autoAlpha: 1 },
            from: { y: -10, ease: "power2.out" },
            to: { y: 0, ease: "power2.out", duration: 2.5, },
        });
        mmGSAPsetupButtonAnimation('trigger-animation-img-14', '.img-effetto-14 img', {
            from: { yPercent: -120, scale: 1.3, ease: "power2.out" },
            to: { yPercent: 0, scale: 1, duration: 2.5, ease: "power2.out" },
        });
    }

    function mmGSAPsetupAnimation15() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-15', '.img-effetto-15', {
            set: {  autoAlpha: 1 },
            from: { y: 10, ease: "power2.out" },
            to: { y: 0, ease: "power2.out", duration: 2.5, },
        });
        mmGSAPsetupButtonAnimation('trigger-animation-img-15', '.img-effetto-15 img', {
            from: { yPercent: 120, scale: 1.3, ease: "power2.out" },
            to: { yPercent: 0, scale: 1, duration: 2.5, ease: "power2.out" },
        });
    }

    function mmGSAPsetupAnimation16() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-16', '.img-effetto-16 img', {
            from: { autoAlpha: 0, x: -65, ease: "power2.out" },
            to: { autoAlpha: 1, x: 0, duration: 2.5, ease: "power2.out" },
        });
    }

    function mmGSAPsetupAnimation17() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-17', '.img-effetto-17 img', {
            
        });
    }

    function mmGSAPsetupAnimation18() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-18', '.img-effetto-18 img', {
            
        });
    }

    function mmGSAPsetupAnimation19() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-19', '.img-effetto-19 img', {
            
        });
    }

    function mmGSAPsetupAnimation20() {
        mmGSAPsetupButtonAnimation('trigger-animation-img-20', '.img-effetto-20 img', {
            
        });
    }

    // Chiamata delle funzioni specifiche per le animazioni
    mmGSAPsetupAnimation1();
    mmGSAPsetupAnimation2();
    mmGSAPsetupAnimation3();
    mmGSAPsetupAnimation4();
    mmGSAPsetupAnimation5();
    mmGSAPsetupAnimation6();
    mmGSAPsetupAnimation7();
    mmGSAPsetupAnimation8();
    mmGSAPsetupAnimation9();
    mmGSAPsetupAnimation10();
    mmGSAPsetupAnimation11();
    mmGSAPsetupAnimation12();
    mmGSAPsetupAnimation13();
    mmGSAPsetupAnimation14();
    mmGSAPsetupAnimation15();
    mmGSAPsetupAnimation16();
    mmGSAPsetupAnimation17();
    mmGSAPsetupAnimation18();
    mmGSAPsetupAnimation19();
    mmGSAPsetupAnimation20();


    
});
