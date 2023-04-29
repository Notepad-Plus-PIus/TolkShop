const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

// Устанавливаем начальный активный слайд и точку
let currentSlide = 0;
let currentDot = 0;
slides[currentSlide].classList.add('active');
dots[currentDot].classList.add('active');

// Функция для смены активного слайда и точки
function nextSlide() {
  // Удаляем класс 'active' у текущего слайда и точки
  slides[currentSlide].classList.remove('active');
  dots[currentDot].classList.remove('active');
  // Увеличиваем индекс текущего слайда и точки на 1
  currentSlide = (currentSlide + 1) % slides.length;
  currentDot = (currentDot + 1) % dots.length;
  // Добавляем класс 'active' следующему слайду и точке
  slides[currentSlide].classList.add('active');
  dots[currentDot].classList.add('active');
}

// Устанавливаем интервал смены слайда каждые 5 секунд
let slideInterval = setInterval(nextSlide, 5000);

// Добавляем обработчики кликов на точки
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Вызываем функцию для смены слайда по клику на точку
    nextSlide(index);
  });
});
