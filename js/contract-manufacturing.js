// basic client-side validation + fake submit
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cm-form');
    const msg  = document.getElementById('formMsg');
  
    if (!form) return;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const email = data.get('email')?.trim();
      const phone = data.get('phone')?.trim();
      const category = data.get('category');
  
      if (!name || !email || !phone || !category) {
        msg.textContent = 'Please fill all required fields.';
        msg.style.color = '#b91c1c';
        return;
      }
  
      // TODO: replace with your real endpoint (Google Forms / EmailJS / API)
      msg.textContent = 'Thanks! Our team will contact you within 1 business day.';
      msg.style.color = '#166534';
      form.reset();
    });
  });
  