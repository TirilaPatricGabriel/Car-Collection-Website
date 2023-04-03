let navbarBtns = document.getElementsByClassName("navbar-button");

[...navbarBtns].forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        let bar = btn.nextElementSibling;
            bar.style.opacity = "1";
    })
    btn.addEventListener("mouseout", () => {
        let bar = btn.nextElementSibling;

        if(!bar.classList.contains("current-page")){
            bar.style.opacity = "0";
        }
    })
})

const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
 
        burger.classList.toggle('toggle');
    });

}

navSlide();


document.querySelectorAll('.drop-down__button').forEach(button => {
    button.addEventListener('click', () => {
      const dropDownContent = button.nextElementSibling;
      button.classList.toggle('drop-down__button--active');
      console.log(dropDownContent.scrollHeight);
  
      if(button.classList.contains('drop-down__button--active')){
        dropDownContent.style.maxHeight = dropDownContent.scrollHeight + 'px';
      } else {
        dropDownContent.style.maxHeight = 0;
      }
    })
  })
