document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Seleziona tutti gli elementi con la classe .testo-effetto-1 che contengono del testo
    const mm_gsap_testo_1 = document.querySelectorAll(".mm-gsap-testo-1");

    mm_gsap_testo_1.forEach((element) => {
        if (element.textContent.trim() !== "") {
        // Applica SplitText all'elemento
        let splitText = new SplitText(element, { type: "chars, words" });
        let chars = splitText.chars;

        // Crea una timeline per l'animazione
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: element,
            start: "top 80%", // L'animazione inizia quando l'elemento entra nel viewport
            once: true, // L'animazione viene eseguita solo una volta
            },
        });

        // Aggiungi l'animazione per ogni carattere
        chars.forEach((char) => {
            tl.from(
            char,
            {
                opacity: 0,
                x: -10, // Le lettere arrivano da sinistra
                duration: 0.6,
                ease: "back.out(0.7)",
            },
            Math.random() * 1.2
            ); // Posizione casuale nella timeline
        });
        }
    });


});