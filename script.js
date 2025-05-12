// Animações on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in, .slide-up, .pop-up');
  const trigger = window.innerHeight * 0.87;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Formulário de agendamento
const form = document.getElementById('agendamento-form');
const msg = document.getElementById('form-msg');
if(form) {
  form.onsubmit = function(e) {
    e.preventDefault();
    // Simulação de envio - normalmente aqui entraria AJAX
    form.style.opacity = '0.5';
    setTimeout(()=>{
      form.reset();
      msg.style.display = 'block';
      form.style.opacity = '1';
    }, 1200);
    setTimeout(()=>{
      msg.style.display = 'none';
    }, 6000)
  }
}

// Navegação suave para âncoras
const navLinks = document.querySelectorAll('.nav a, .cta-btn');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if(hash[0] === '#') {
      e.preventDefault();
      const target = document.querySelector(hash);
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 64,
          behavior: 'smooth'
        });
      }
    }
  });
});