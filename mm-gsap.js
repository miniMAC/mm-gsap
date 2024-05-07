// ------------ gsap scripts -----------
// https://gsap.com/docs/v3/Plugins/ScrollSmoother/
$(function () {
    
    gsap.config({trialWarn: false});
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    ScrollSmoother.create({
        smooth: 1.3,
        effects: true,
        smoothTouch: 0.1,
    });

    // Animazione per cambiare l'opacità dell'elemento
    gsap.to('.superior-image', {
        opacity: 0, // Target opacità
        scrollTrigger: {
        trigger: '.superior-image',
        start: '90% bottom', // Inizia l'animazione quando il top dell'elemento raggiunge il fondo della viewport
        end: 'bottom top', // Termina quando il fondo dell'elemento è al top della viewport
        scrub: true, // La transizione dell'opacità avviene in base alla posizione dello scroll
        },
    });

    

    // Modifica qui: playAnimation ora accetta un parametro 'selector'
    function playAnimation(selector) {
        var tl = gsap.timeline(),
            mySplitText = new SplitText(selector, { type: "words,chars" }), // Usa il selettore passato alla funzione
            chars = mySplitText.chars;
        
        gsap.set(selector, { 
            perspective: 400 
        });
        tl.from(chars, {
            duration: 0.8,
            opacity: 0,
            scale: 0.5,
            y: 60,
            rotationX: 70,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
        });
    }

    // Imposta inizialmente l'opacità degli elementi target a 0
    gsap.set(".mm-split-text", { opacity: 0 });

    // Modifica qui: forEach ora passa l'elemento corrente a playAnimation tramite ScrollTrigger
    gsap.utils.toArray(".mm-split-text").forEach(function(element) {
        // Recupera il valore data-delay dall'elemento, con un fallback a 700 se non specificato
        var delay = element.getAttribute("data-delay") || 700;
    
        ScrollTrigger.create({
            trigger: element,
            onEnter: function(self) {
                setTimeout(function() {
                    gsap.to(element, { opacity: 1, duration: 0.6 }); // Rendi l'elemento visibile
                    playAnimation(element);
                }, delay); // Utilizza il valore di delay recuperato
                self.kill();
            }
        });
    });

    // Animazione immagine ( .decor-image )
    // gsap.utils.toArray('.decor-image').forEach(img => {
    //     gsap.from(img, {
    //       scrollTrigger: {
    //         trigger: img,
    //         start: "top 90%", // inizia quando l'immagine entra nel 90% della viewport dall'alto
    //         toggleActions: "play none none reverse",
    //       },
    //       y: 50,
    //       opacity: 0,
    //       duration: 1.2,
    //       ease: "power2.out"
    //     });
    //   });

    // gsap.utils.toArray('.decor-image').forEach(img => {
    //     gsap.from(img, {
    //       scrollTrigger: {
    //         trigger: img,
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: true
    //       },
    //       scale: 0.8, // parte da una scala ridotta
    //       ease: "none"
    //     });
    //   });

    // gsap.utils.toArray('.decor-image').forEach(img => {
    //     let tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: img,
    //         start: "top center",
    //         toggleActions: "play none none reverse",
    //       }
    //     });
      
    //     tl.fromTo(img, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, ease: "power2.out"});
    //   });


    // gsap.utils.toArray('.decor-image').forEach(img => {
    // gsap.fromTo(img, {
    //     scale: 1,
    //     xPercent: -10,
    //     yPercent: -10
    // }, {
    //     scale: 1.5,
    //     xPercent: 0,
    //     yPercent: 0,
    //     duration: 3,
    //     ease: "none",
    //     scrollTrigger: {
    //     trigger: img,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true
    //     }
    // });
    // });

    
    gsap.from(".decor-image", {
        scrollTrigger: {
          trigger: ".decor-image",
          start: "top 110%", // Parte quando l'immagine è poco sotto la viewport
          end: "top 10%",
          scrub: true
        },
        scale: 0.5, // Inizia con una scala ridotta
        opacity: 0, // Inizia completamente trasparente
        ease: "power3.out"
      });

    

});



// ------------ scripts -----------
$(document).ready(function(){

    // Meu blurred
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $('.blurred-nav').addClass('blurring');
        } else {
            $('.blurred-nav').removeClass('blurring');
        }
    });

    // Slider one
    var sliderOne = new Swiper(".slider-one", {
        loop: true,
        effect: "fade",
        speed: 1200,
        autoplay: {
            delay: 55000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".sl-one-button-next",
            prevEl: ".sl-one-button-prev",
        }
    });

});
