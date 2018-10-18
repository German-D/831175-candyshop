'use strict';

var showElement = function (findClass, removeClass) {
  document.querySelector(findClass).classList.remove(removeClass);
};
var hideElement = function (findClass, addClass) {
  document.querySelector(findClass).classList.add(addClass);
};
showElement('.catalog__cards', 'catalog__cards--load');
hideElement('.catalog__load', 'visually-hidden');
showElement('.goods__cards', 'goods__cards--empty');
hideElement('.goods__card-empty', 'visually-hidden');

var manyNames = ['Чесночные сливки', 'Огуречный педант', 'Грибной шейк', 'Баклажановое безумие', 'Паприколу итальяно', 'Нинзя-удар васаби', 'Хитрый баклажан', 'Горчичный вызов', 'Кедровая липучка', 'Корманный портвейн', 'Чилийский задира', 'Беконовый взрыв', 'Арахис vs виноград', 'Сельдерейная душа', 'Початок в бутылке', 'Чернющий мистер чеснок', 'Раша федераша', 'Кислая мина', 'Кукурузное утро', 'Икорный фуршет', 'Новогоднее настроение', 'С пивком потянет', 'Мисс креветка', 'Бесконечный взрыв', 'Невинные винные', 'Бельгийское пенное', 'Острый язычок'];
var manyPictures = ['img/cards/gum-cedar.jpg', 'img/cards/gum-chile.jpg', 'img/cards/gum-eggplant.jpg', 'img/cards/gum-mustard.jpg', 'img/cards/gum-portwine.jpg', 'img/cards/gum-wasabi.jpg', 'img/cards/ice-cucumber.jpg', 'img/cards/ice-eggplant.jpg', 'img/cards/ice-garlic.jpg', 'img/cards/ice-italian.jpg', 'img/cards/ice-mushroom.jpg', 'img/cards/ice-pig.jpg', 'img/cards/marmalade-beer.jpg', 'img/cards/marmalade-caviar.jpg', 'img/cards/marmalade-corn.jpg', 'img/cards/marmalade-new-year.jpg', 'img/cards/marmalade-sour.jpg', 'img/cards/marshmallow-bacon.jpg', 'img/cards/marshmallow-beer.jpg', 'img/cards/marshmallow-shrimp.jpg', 'img/cards/marshmallow-spicy.jpg', 'img/cards/marshmallow-wine.jpg', 'img/cards/soda-bacon.jpg', 'img/cards/soda-celery.jpg', 'img/cards/soda-cob.jpg', 'img/cards/soda-garlic.jpg', 'img/cards/soda-peanut-grapes.jpg', 'img/cards/soda-russian.jpg'];
var manyContents = ['молоко', 'сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор дуба, идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид', 'вилларибо'];

var getRandomInRange = function (min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};

var getRandomSliceArr = function (anyArr) {
  return anyArr.slice(0, getRandomInRange(1, anyArr.length - 1));
};

var getString = function (anyArr) {
  return anyArr.join(', ');
};

// Перемешай массив и верни
var getRandomSortArray = function (arrIC) {
  var copyArray = arrIC.slice();
  for (var i = copyArray.length - 1; i >= 0; i--) {
    var randomIndex = getRandomInRange(i, copyArray.length - 1);
    var tempValue = copyArray[i];
    copyArray[i] = copyArray[randomIndex];
    copyArray[randomIndex] = tempValue;
  }
  return copyArray;
};

// Верни массив случайной длины
var getContent = function (myArr) {
  var randomLengthArr = getRandomSliceArr(getRandomSortArray(myArr));
  return getString(randomLengthArr);
};


var getRandomBoolean = function () {
  return Math.random() > 0.5;
};

var createManyIceCream = function (numberObj) {
  var manyIceCream = [];
  var pictureArraySort = getRandomSortArray(manyPictures);
  for (var i = 0; i < numberObj; i++) {
    manyIceCream.push(

        {
          name: manyNames[getRandomInRange(0, manyNames.length - 1)],
          // picture: manyPictures[getRandomInRange(0, manyPictures.length - 1)],
          picture: pictureArraySort[i],
          amount: getRandomInRange(0, 20),
          price: getRandomInRange(100, 1500),
          weight: getRandomInRange(30, 300),
          rating: {value: getRandomInRange(1, 5), number: getRandomInRange(10, 900)},
          nutritionFacts: {
            sugar: getRandomBoolean(),
            energy: getRandomInRange(70, 500),
            contents: getContent(manyContents)
          }
        }

    );
  }
  return manyIceCream;
};

var createCard = function (manyIC, template) {
  var iceCreamElement = template.cloneNode(true);

  if (manyIC.amount >= 1 && manyIC.amount <= 5) {
    iceCreamElement.classList.add('card--little');
  } else if (manyIC.amount === 0) {
    iceCreamElement.classList.add('card--soon');
  } else {
    iceCreamElement.classList.add('card--in-stock');
  }

  iceCreamElement.querySelector('.card__title').textContent = manyIC.name;
  iceCreamElement.querySelector('.card__img').src = manyIC.picture;
  iceCreamElement.querySelector('.card__price').firstChild.textContent = manyIC.price;
  iceCreamElement.querySelector('.card__price').querySelector('.card__weight').textContent = '/ ' + manyIC.weight + 'Г';

  switch (manyIC.rating.value) {
    case 5:
      iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--five');
      break;
    case 4:
      iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--four');
      break;
    case 3:
      iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--three');
      break;
    case 2:
      iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--two');
      break;
    case 1:
      iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--one');
      break;
    default:
      break;
  }

  iceCreamElement.querySelector('.star__count').textContent = manyIC.rating.number;
  iceCreamElement.querySelector('.card__characteristic').textContent = manyIC.nutritionFacts.sugar ? 'Содержит сахар' : 'Без сахара';
  iceCreamElement.querySelector('.card__composition-list').textContent = manyIC.nutritionFacts.contents;

  return iceCreamElement;
};

var renderAllIceCream = function (myIC) {
  var iCList = document.querySelector('.catalog__cards');
  var templateCard = document.querySelector('#card').content.querySelector('.catalog__card');
  var fragment = document.createDocumentFragment();
  myIC.forEach(function (item, j) {
    fragment.appendChild(createCard(myIC[j], templateCard));
  });
  iCList.appendChild(fragment);
};

var iceCreamList = createManyIceCream(26);
renderAllIceCream(iceCreamList);

// Корзина
var createBucket = function (manyBucket, template) {
  var bucketElement = template.cloneNode(true);
  bucketElement.querySelector('.card-order__title').textContent = manyBucket.name;
  bucketElement.querySelector('.card-order__img').src = manyBucket.picture;
  bucketElement.querySelector('.card-order__img').alt = manyBucket.name;
  bucketElement.querySelector('.card-order__price').textContent = manyBucket.price + ' Р';
  bucketElement.querySelector('.card-order__label').querySelector('.card-order__count').value = manyBucket.orderedAmount;
  return bucketElement;
};

var renderBucket = function (ICArr) {
  var bucketList = document.querySelector('.goods__cards');
  var templateBucket = document.querySelector('#card-order').content.querySelector('.goods_card');
  var fragment = document.createDocumentFragment();
  fragment.appendChild(createBucket(ICArr[ICArr.length - 1], templateBucket));
  bucketList.appendChild(fragment);
};

var refreshBucket = function (ICArr) {
  var bucketList = document.querySelector('.goods__cards');
  var templateBucket = document.querySelector('#card-order').content.querySelector('.goods_card');
  var fragment = document.createDocumentFragment();
  fragment.appendChild(createBucket(ICArr, templateBucket));
  var oldNode = bucketList.querySelector('img[alt="' + ICArr.name + '"]').parentNode.parentNode;
  bucketList.replaceChild(fragment, oldNode);
};

// Избранное
var catalogCard = document.querySelector('.catalog__cards');

var onButtonFavoriteClick = function (evt) {
  event.preventDefault();
  if (evt.target.classList.contains('card__btn-favorite')) {
    evt.target.classList.toggle('card__btn-favorite--selected');
  }
};
catalogCard.addEventListener('click', onButtonFavoriteClick);

// Корзина
var catalogCards = document.querySelector('.catalog__cards');
var bucketHeader = document.querySelector('.main-header__basket');
var bucketArr = [];
var bucketCosts = 0;
var bucketQuantity = 0;
var onButtonAddInBucketClick = function (evt) {


  if (evt.target.classList.contains('card__btn')) {
    evt.target.removeAttribute('href');

    var findParent = function (target, classEl) {
      var current;
      while (!target.classList.contains(classEl)) {
        target = target.parentNode;
        current = target;
      }
      return current;
    };
    var currentObjSrc = findParent(evt.target, 'catalog__card').querySelector('.card__img').getAttribute('src');

    var findObj = function (array, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].picture === value) {
          return array[i];
        }
      }
      return undefined;
    };

    var oneBucketCard = findObj(iceCreamList, currentObjSrc);

    var checkInBucket = function (obj) {
      return bucketArr.some(function (item) {
        return item.picture === obj.picture;
      });
    };

    var findObjInBucket = function (obj) {
      return bucketArr.find(function (item) {
        return item.picture === obj.picture;
      });
    };

    var checkingForBucket = function (obj) {
      if (obj.amount !== 0) {
        obj.amount--;
        if (!checkInBucket(obj)) {
          var newBucketObj = Object.assign({}, {orderedAmount: 1}, obj);
          delete newBucketObj.amount;
          bucketArr.push(newBucketObj);
          bucketCosts += newBucketObj.price;
          bucketQuantity++;
          renderBucket(bucketArr);
        } else {
          var itemInBucket = findObjInBucket(obj);
          bucketCosts = bucketCosts + oneBucketCard.price;
          bucketQuantity++;
          itemInBucket.orderedAmount++;
          itemInBucket.price += obj.price;
          refreshBucket(itemInBucket);
        }
      }
    };
    checkingForBucket(oneBucketCard);
    bucketHeader.textContent = ('В корзине ' + bucketQuantity + ' товара на ' + bucketCosts + '₽');
  }
};
catalogCards.addEventListener('click', onButtonAddInBucketClick);

// Блок оплаты
var paymentBlock = document.querySelector('.payment');
var payCard = document.querySelector('.payment__card-wrap');
var payCash = document.querySelector('.payment__cash-wrap');
var payBlock = document.querySelector('.payment__method');
var onRadioButtonPaymentChange = function () {
  payCard.classList.toggle('visually-hidden');
  payCash.classList.toggle('visually-hidden');
  inputCardData.toggleAttribute('disables');
  inputCardYear.toggleAttribute('disables');
  inputCardCvc.toggleAttribute('disables');
  inputCardName.toggleAttribute('disables');
};

payBlock.addEventListener('change', onRadioButtonPaymentChange);

// Блок доставки
var deliveryStore = document.querySelector('.deliver__store');
var deliveryCourier = document.querySelector('.deliver__courier');

var onRadioButtonDeliveryChange = function () {
  deliveryCourier.classList.toggle('visually-hidden');
  deliveryStore.classList.toggle('visually-hidden');
};

var deliverContainer = document.querySelector('.deliver__toggle');
deliverContainer.addEventListener('change', onRadioButtonDeliveryChange);


// Фильтр цены
var maxPriceFilter = document.querySelector('.range__price--max');
var minPriceFilter = document.querySelector('.range__price--min');
var priceBar = document.querySelector('.range__filter');

var onBarPriceMouseup = function (evt) {
  var priceBarWidth = priceBar.clientWidth;
  var priceBarWidthHardCode = 100;
  if (evt.target.classList.contains('range__btn--right')) {
    maxPriceFilter.textContent = Math.round(priceBarWidthHardCode * (event.target.offsetLeft / priceBarWidth));
  } else if (evt.target.classList.contains('range__btn--left')) {
    minPriceFilter.textContent = Math.round(priceBarWidthHardCode * (event.target.offsetLeft / priceBarWidth));
  }
};


priceBar.addEventListener('mouseup', onBarPriceMouseup);

// Валидации карты
var inputCardData = document.querySelector('#payment__card-number');
var onInputCardDataInvalid = function (evt) {
  var cardData = inputCardData.value;
  var cardDataArray = cardData.split('');

  var cardDataIntArray = cardDataArray.map(function (item) {
    return parseInt(item, 10);
  }).map(function (item) {
    return item % 2 !== 0 ? item * 2 : item;
  }).map(function (item) {
    return item >= 10 ? item - 9 : item;
  }).reduce(function (sum, current) {
    return sum + current;
  }, 0);

  var validationMsg = cardDataIntArray % 10 !== 0 ? 'Введён несуществующий номер карты' : '';
  evt.target.setCustomValidity(validationMsg);
};

inputCardData.addEventListener('invalid', onInputCardDataInvalid);

// Изменение статуса карты
var inputCardYear = paymentBlock.querySelector('#payment__card-date');
var inputCardCvc = paymentBlock.querySelector('#payment__card-cvc');
var inputCardName = paymentBlock.querySelector('#payment__cardholder');
var cardStatus = paymentBlock.querySelector('.payment__card-status');


var onPaymentBlockChange = function () {
  if (inputCardCvc.value >= 100 && inputCardCvc.value <= 999 && inputCardYear.value && inputCardName.value) {
    cardStatus.textContent = 'Одобрен';
  } else {
    cardStatus.textContent = 'НЕ ОПРЕДЕЛЁН';
  }
};

paymentBlock.addEventListener('change', onPaymentBlockChange);


var isCardDateValid = function (value) {
  var isMonthValid = function (month) {
    return (month > 12) ? false : true;
  };
  var isYearValid = function (year) {
    var currentYear = (new Date()).getFullYear();
    return (year > currentYear) ? false : true;
  };
  if (value.length === 5) {
    var yearDataArray = value.split('');
    if (yearDataArray[2] === '/') {
      var monthYearData = value.split('/').map(function (item) {
        return parseInt(item, 10);
      });
      if (isMonthValid(monthYearData[0]) && isYearValid(monthYearData[1])) {
        return true;
      } return false;
    } return false;
  } return false;
};

var onCardYearInputChange = function (evt) {
  var customInvalidEvent = new Event('invalid');
  evt.target.dispatchEvent(customInvalidEvent);
  if (!isCardDateValid(inputCardYear.value)) {
    evt.target.setCustomValidity('Данные карты неверные');
  }
};
inputCardYear.addEventListener('invalid', onCardYearInputChange);

