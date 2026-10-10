
document.getElementById('toggleSwitch').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', this.checked);
});

/* ---------- Purchase Service ------------- */

const h2Element = document.querySelector('.item h2');

let number = 3;

document.querySelectorAll('.item span').forEach(span => {
  span.addEventListener('click', () => {
    if (span.firstElementChild.classList.contains('fa-minus')) {

      if (number > 1) {
        number -= 1;
      }
    }
    else {

      number += 1;

    }

    h2Element.textContent = number;

    document.querySelector('.total p').textContent = `$${number * 100}`;

  });
});

const buttonElement = document.querySelector('.item__button');

buttonElement.addEventListener('click', () => {

  let total = document.querySelector('.total p').textContent = `$${number * 100}`;

  alert(`Thank you for your purchase! ${total}`);

});

// =============================

$(document).ready(function () {
  var currentIndex = 0;
  var totalSlides = $('.slider-slide').length;
  var slideWidth = $('.slider-slide').width();
  var intervalId;

  for (var i = 0; i < totalSlides; i++) {
    $('.slider-dots').append('<div class="dot"></div>');
  }

  updateDots();

  $('.dot').on('click', function () {
    clearInterval(intervalId);
    currentIndex = $(this).index();
    updateSlider();
    updateDots();
    startAutoSlide();
  });

  $('.next-button').on('click', function () {
    clearInterval(intervalId);
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
    updateDots();
    startAutoSlide();
  });

  $('.prev-button').on('click', function () {
    clearInterval(intervalId);
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    updateDots();
    startAutoSlide();
  });

  function updateSlider() {
    var translateValue = -currentIndex * slideWidth + 'px';
    $('.slider-wrapper').css('transform', 'translateX(' + translateValue + ')');
  }

  function updateDots() {
    $('.dot').removeClass('active');
    $('.dot').eq(currentIndex).addClass('active');
  }

  function startAutoSlide() {
    intervalId = setInterval(function () {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
      updateDots();
    }, 5000); 
  }

  startAutoSlide();
});




var cards = document.querySelectorAll('.card');

cards.forEach(function (favos) {

  favos.addEventListener('click', function () {
    var heartIcon = this.querySelector('.fa-heart');

    if (heartIcon.classList.contains('fa-solid') && heartIcon.classList.contains('fa-heart')) {
      heartIcon.className = 'fa-regular fa-heart';
      heartIcon.style.color = '#8692A6';
    } else {
      heartIcon.className = 'fa-solid fa-heart';
      heartIcon.style.color = '#e7390d';
    }
  });

})

// ------------------------

let x = document.getElementById('user');

document.getElementById('detail').addEventListener('click', function () {
  var Icon = this.querySelector('i');

  if (Icon.classList.contains('fa-solid') && Icon.classList.contains('fa-arrow-left')) {
    Icon.className = 'fa-solid fa-arrow-right';
    x.style = 'right: 0'

  } else {
    Icon.className = 'fa-solid fa-arrow-left';
    x.style = 'right: -100%'
  }


});











