

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let slideIndex = 0;
    const slideWidth = slides[0].offsetWidth; // Ширина слайда

    // Функция для перемещения слайдера
    function moveSlider() {
        sliderWrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    // Обработчики для кнопок "Предыдущий" и "Следующий"
    prevButton.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        moveSlider();
    });

    nextButton.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        moveSlider();
    });

    // Автоматическая прокрутка слайдов (необязательно)
    // setInterval(() => {
    //     slideIndex = (slideIndex + 1) % slides.length;
    //     moveSlider();
    // }, 5000);

});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchForm = document.getElementById('search-form');

    //  Пример данных (замените на реальные данные)
    const events = [
        { title: 'Космическое шоу', description: 'Увлекательное шоу о космосе' },
        { title: 'Лекция о звездах', description: 'Интересная лекция о звездах и планетах' },
        { title: 'Экскурсия по планетарию', description: 'Обзорная экскурсия по планетарию' }
    ];

    // Функция для отображения подсказок
    function displaySuggestions(results) {
        searchSuggestions.innerHTML = ''; // Очищаем предыдущие подсказки
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result.title;
                li.addEventListener('click', () => {
                    searchInput.value = result.title; // Заполняем поле ввода
                    searchSuggestions.style.display = 'none'; // Скрываем подсказки
                });
                searchSuggestions.appendChild(li);
            });
            searchSuggestions.style.display = 'block'; // Показываем подсказки
        } else {
            searchSuggestions.style.display = 'none'; // Скрываем, если нет результатов
        }
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        // Фильтруем события по названию или описанию
        const results = events.filter(event => {
            return event.title.toLowerCase().includes(searchTerm) ||
                   event.description.toLowerCase().includes(searchTerm);
        });

        displaySuggestions(results);
    });

    // Скрываем подсказки при отправке формы
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        searchSuggestions.style.display = 'none';
        //  Здесь можно добавить код для обработки поиска
        alert('Выполняем поиск: ' + searchInput.value);
    });

    // Скрываем подсказки при клике вне поля поиска
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search-box')) {
            searchSuggestions.style.display = 'none';
        }
    });
});

const reviews = [
    {
        authorName: "Иван Иванов",
        authorPhoto: "media/photo1.jpg",
        eventLink: "event1.html",
        reviewText: "Отличное мероприятие! Очень понравилось!",
        reviewDate: "2024-01-15"
    },
    {
        authorName: "Игорь Петров",
        authorPhoto: "media/photo2.jpg",
        eventLink: "event2.html",
        reviewText: "Было интересно и познавательно!",
        reviewDate: "2023-12-20"
    },
    {
        authorName: "Сергей Смирнов",
        authorPhoto: "media/photo3.jpg",
        eventLink: "event3.html",
        reviewText: "Рекомендую всем посетить!",
        reviewDate: "2024-02-01"
    },
    {
        authorName: "Валера Фролов",
        authorPhoto: "media/photo4.jpg",
        eventLink: "event1.html",
        reviewText: "Прекрасно провела время!",
        reviewDate: "2024-02-10"
    },
    //  Добавьте больше отзывов
];

document.addEventListener('DOMContentLoaded', function() {
    const reviewsSliderWrapper = document.querySelector('.reviews-slider-wrapper');
    const prevButton = document.querySelector('.reviews-slider .prev');
    const nextButton = document.querySelector('.reviews-slider .next');
    const reviewsContainer = document.querySelector('.reviews-slider-wrapper'); // Corrected selector

    let reviewIndex = 0;
    const reviewWidth = 1000; // Ширина обзора

    // Функция создания карточки отзыва
    function createReviewCard(review) {
        const card = document.createElement('div');
        card.classList.add('review-card');

        const img = document.createElement('img');
        img.src = review.authorPhoto;
        img.alt = review.authorName;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = review.authorName;
        card.appendChild(name);

        const reviewText = document.createElement('p');
        reviewText.textContent = review.reviewText;
        card.appendChild(reviewText);

        const eventLink = document.createElement('a');
        eventLink.href = review.eventLink;
        eventLink.textContent = 'Подробнее о мероприятии';
        eventLink.classList.add('button');
        card.appendChild(eventLink);

        const reviewDate = document.createElement('p');
        reviewDate.classList.add('review-date');
        reviewDate.textContent = review.reviewDate;
        card.appendChild(reviewDate);
        console.log('created correctly');

        return card;
    }

    //  Заполнение слайдера отзывами
    reviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });

    console.log(reviewsSliderWrapper);

    //Перемещение слайдера
    function moveSlider() {
        let shift = -reviewIndex * reviewWidth;
        reviewsSliderWrapper.style.transform = `translateX(${shift}px)`;
    }

    console.log(reviews);
    prevButton.addEventListener('click', () => {
        console.log('prev pressed');
        reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
        moveSlider();
    });

    nextButton.addEventListener('click', () => {
        console.log('forward pressed');
        reviewIndex = (reviewIndex + 1) % reviews.length;
        moveSlider();
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscription-form');

    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        const email = document.getElementById('subscription-email').value;
        const privacy = document.querySelector('input[name="privacy"]').checked;

        if (privacy) {
            alert('Спасибо за подписку!');
            // Здесь можно добавить код для отправки данных на сервер
        } else {
            alert('Пожалуйста, подтвердите согласие на обработку персональных данных.');
        }
    });
});