'use strict';

var ESC_KEY_CODE = 27;
var btnPremiumOpen = document.querySelector('.premium__btn');
var btnPremiumClose = document.querySelector('.premium__close');
var premiumPopup = document.querySelector('.premium__wrapper');

var onEscPress = function(evt) {
  if (evt.keyCode == ESC_KEY_CODE) {
    popupClose();
  }
}

var popupOpen = function () {
  premiumPopup.classList.add('premium__wrapper--open');
  document.addEventListener('keydown', onEscPress);
};

var popupClose = function () {
  premiumPopup.classList.remove('premium__wrapper--open');
};

btnPremiumOpen.addEventListener('click', function() {
  popupOpen();
});

btnPremiumClose.addEventListener('click', function() {
  popupClose();
});


var previewImg = document.querySelector('.preview__imgs');

var background = {
  one: "url(../img/bg1.jpg)",
  two: "url(../img/bg2.jpg)",
  three: "url(../img/bg3.jpg)",
  four: "url(../img/bg4.jpg)",
  five: "url(../img/bg5.jpg)",
  six: "url(../img/bg6.jpg)"
}

var textTemplates = ['Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня',
                    '2 - Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня',
                    '3 - Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня',
                    '4 - Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня',
                    '5 - Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня',
                    '6 - Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня'
];

var textPreview = {
  one: textTemplates[0],
  two: textTemplates[1],
  three: textTemplates[2],
  four: textTemplates[3],
  five: textTemplates[4],
  six: textTemplates[5]
}


var changeBackground = function (evt) {
if(evt.target.textContent == '1') {
  document.querySelector('body').style.backgroundImage = background.one;
  document.querySelector('.preview__text').textContent = textPreview.one;
} else if (evt.target.textContent == '2') {
    document.querySelector('body').style.backgroundImage = background.two;
    document.querySelector('.preview__text').textContent = textPreview.two;
  } else if (evt.target.textContent == '3') {
    document.querySelector('body').style.backgroundImage = background.three;
    document.querySelector('.preview__text').textContent = textPreview.three;
  } else if (evt.target.textContent == '4') {
    document.querySelector('body').style.backgroundImage = background.four;
    document.querySelector('.preview__text').textContent = textPreview.four;
  } else if (evt.target.textContent == '5') {
    document.querySelector('body').style.backgroundImage = background.five;
    document.querySelector('.preview__text').textContent = textPreview.five;
  } else if (evt.target.textContent == '6') {
    document.querySelector('body').style.backgroundImage = background.six;
    document.querySelector('.preview__text').textContent = textPreview.six;
  }

};

previewImg.addEventListener('click', function(evt) {
  changeBackground(evt);
}, true);

