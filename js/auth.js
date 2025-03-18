document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Здесь нужно добавить код для отправки данных на сервер (AJAX)
        // и обработки ответа сервера
        // В данном примере просто выводим сообщение

        if (email === 'test@example.com' && password === 'password') {
            alert('Успешная авторизация!');
            // Здесь можно перенаправить пользователя в личный кабинет
            // window.location.href = 'profile.html';
        } else {
            alert('Неверный email или пароль!');
        }
    });
});