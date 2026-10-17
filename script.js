const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Replace 2348012345678 with your WhatsApp number (country code, no + or spaces).
const whatsappNumber = '2348012345678';
const whatsappMessage = encodeURIComponent('Hello Abdullahi, I saw your portfolio and would like to discuss a website project.');
document.getElementById('whatsappLink').href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
