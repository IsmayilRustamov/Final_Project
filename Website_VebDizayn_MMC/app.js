
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); 
  
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();
  
        if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return;
        }
  
        alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
        form.reset();
      });
    }
  
    // scroll to FAQ items
    const faqItems = document.querySelectorAll('.faq summary');
    faqItems.forEach(item => {
      item.addEventListener('click', function () {
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      });
    });
  });
  