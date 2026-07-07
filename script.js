
/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

});


/*=========================================
            STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});


/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});


document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});


/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.querySelector(".scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollBtn.classList.add("active");

    }

    else{

        scrollBtn.classList.remove("active");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".count");

let started = false;

window.addEventListener("scroll",()=>{

    const counterSection =
    document.querySelector(".counter");

    if(!counterSection) return;

    const trigger = counterSection.offsetTop-500;

    if(window.scrollY > trigger && !started){

        counters.forEach(counter=>{

            let target = +counter.dataset.target;

            let count = 0;

            let speed = target/120;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText = target+"+";

                }

            }

            update();

        });

        started = true;

    }

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button,.btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";

    });

});


/*=========================================
        MENU CARD EFFECT
=========================================*/

document.querySelectorAll(".menu-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        card.style.background =

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,183,3,.18),
        #1b1f26 65%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#1b1f26";

    });

});


/*=========================================
        GALLERY ZOOM
=========================================*/

document.querySelectorAll(".gallery img").forEach(image=>{

    image.addEventListener("click",()=>{

        image.classList.toggle("zoom");

    });

});


/*=========================================
        CONTACT FORM
=========================================*/

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const button =
    contactForm.querySelector("button");

    button.innerHTML="Sending...";

    setTimeout(()=>{

        button.innerHTML="Message Sent ✓";

        button.style.background="#28a745";

    },1500);

    setTimeout(()=>{

        contactForm.reset();

        button.innerHTML="Send Message";

        button.style.background="";

    },3500);

});

}


/*=========================================
        RESERVATION FORM
=========================================*/

const reserveForm =
document.querySelector(".reservation-form");

if(reserveForm){

reserveForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const btn =
    reserveForm.querySelector("button");

    btn.innerHTML="Booking...";

    setTimeout(()=>{

        btn.innerHTML="Reservation Confirmed ✓";

        btn.style.background="#22c55e";

    },1500);

    setTimeout(()=>{

        reserveForm.reset();

        btn.innerHTML="Reserve Now";

        btn.style.background="";

    },3500);

});

}


/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.backgroundPositionY =
    value*0.45+"px";

});


/*=========================================
        FADE SECTIONS
=========================================*/

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


/*=========================================
        NEWSLETTER
=========================================*/

const newsletter =
document.querySelector(".newsletter");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email =
newsletter.querySelector("input").value;

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

newsletter.reset();

});

}


/*=========================================
        SMOOTH ANCHOR LINKS
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=========================================
        FLOATING ANIMATION
=========================================*/

document.querySelectorAll(".floating-card").forEach((card,index)=>{

setInterval(()=>{

card.style.transform=
`translateY(${Math.sin(Date.now()/500+index)*12}px)`;

},30);

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(

"%c🍽 Welcome to Royal Feast",

"color:#ffb703;font-size:24px;font-weight:bold;"

);

console.log(

"%cDesigned with HTML, CSS & JavaScript",

"color:white;font-size:14px;"

);