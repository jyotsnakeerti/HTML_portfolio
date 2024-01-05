function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQLZYHRhm21KkkjXe2sk3gByYiNQBc7RL4g74SeZr5s2JY4Tj8eTmdP0C_x1e5A_z1VQ/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  
  