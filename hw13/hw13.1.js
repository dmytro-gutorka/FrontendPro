const form = document.getElementById('contactForm')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.name.value.trim()
    const message = form.message.value.trim()
    const phone = form.phone.value.trim()
    const email = form.email.value.trim()

    const nameError = document.getElementById('nameError')
    const messageError = document.getElementById('messageError')
    const phoneError = document.getElementById('phoneError')
    const emailError = document.getElementById('emailError')

    nameError.textContent = ''
    messageError.textContent = ''
    phoneError.textContent = ''
    emailError.textContent = ''

    if (!name) nameError.textContent = 'This field is required';

    if (message.length < 5) messageError.textContent = 'This field must contains at least 5 characters';

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) phoneError.textContent = 'Wrong phone number format';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) emailError.textContent = 'Wrong email format';

    const userFormData = [...new FormData(form)]
    console.log(Object.fromEntries(userFormData))
})