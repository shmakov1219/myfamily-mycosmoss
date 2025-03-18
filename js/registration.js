document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        // Сброс сообщений об ошибках
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // Валидация полей
        let isValid = true;

        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            document.getElementById('email-error').textContent = 'Некорректный email';
            isValid = false;
        }
        const firstName = document.getElementById('firstName').value;
        if(firstName === '') {
            document.getElementById('firstName-error').textContent = 'Введите имя';
            isValid = false;
        }

        const lastName = document.getElementById('lastName').value;
         if(lastName === '') {
            document.getElementById('lastName-error').textContent = 'Введите имя';
            isValid = false;
        }

        const age = document.getElementById('age').value;
        if (isNaN(age) || age <= 0) {
            document.getElementById('age-error').textContent = 'Введите корректный возраст';
            isValid = false;
        }

        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('gender-error').textContent = 'Выберите пол';
            isValid = false;
        }

        const password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById('password-error').textContent = 'Пароль должен быть не менее 6 символов';
            isValid = false;
        }

        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            document.getElementById('confirmPassword-error').textContent = 'Пароли не совпадают';
            isValid = false;
        }

        const photo = document.getElementById('photo').value;
        if(photo ===""){
             document.getElementById('photo-error').textContent = 'Добавьте фото';
             isValid = false;

        }

        const privacy = document.querySelector('input[name="privacy"]').checked;
        if (!privacy) {
            document.getElementById('privacy-error').textContent = 'Необходимо согласие на обработку данных';
            isValid = false;
        }

        if (isValid) {
            alert('Регистрация успешна!');
            // Здесь можно добавить код для отправки данных на сервер
        }
    });
});

// Функция для валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

