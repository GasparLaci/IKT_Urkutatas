document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Kattints ide!';
    alertButton.className = 'btn btn-primary';
    document.querySelector('section').appendChild(alertButton);
  
    alertButton.addEventListener('click', () => {
      alert('Üdvözlünk az űrkutatás világában!');
    });
  
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        const name = document.querySelector('[name="name"]');
        if (!name.value.trim()) {
          e.preventDefault();
          alert('Kérjük, adja meg a nevét!');
        }
      });
    }
  });