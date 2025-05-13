
    let menu=document.querySelector('#menu-bars');
    let header=document.querySelector('header');
    menu.onclick=()=>{
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }
    window.onscroll=()=>{
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }

    var typed = new Typed(".text", {
        strings: ["ui/ux designer", "frontend developer", "python developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    document.addEventListener("DOMContentLoaded", function() {
        ScrollReveal().reveal('.home', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.about', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.services', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.container1', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.portfolio-content', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
    
      ScrollReveal().reveal('.education-box', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
      ScrollReveal().reveal('.contact .contact-icons', '.contact .contact-text', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
      ScrollReveal().reveal('.contact .contact-form', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });
    })
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxm1Fv_3_Rz36qGYKEkzc7GBcWi6QhjAqKC2cLVAPzb8vFwvW8ZWhyLdIJZcKaa5l8LOw/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          msg.innerHTML = "Message sent successfully!";
          form.reset();
          setTimeout(() => {
            msg.innerHTML = "";
          }, 5000); // show message for 5 seconds
        })
        .catch(error => {
          msg.innerHTML = "Submission failed. Please try again.";
          console.error('Error!', error.message);
        });
    });
    
    function filterProjects(type) {
  document.getElementById("js-projects").style.display = "none";
  document.getElementById("html-projects").style.display = "none";

  if (type === "js") {
    document.getElementById("js-projects").style.display = "block";
  } else if (type === "html") {
    document.getElementById("html-projects").style.display = "block";
  }
}
function filterProjects(type) {
      const projects = document.querySelectorAll('.project');
      projects.forEach(project => {
        if (project.classList.contains(type)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    }


    
