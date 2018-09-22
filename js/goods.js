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

var getRandomBoolean = function () {
  if (Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
};

var getContents = function () {
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }
  manyContents.sort(compareRandom);
  var contents = manyContents.slice(0, getRandomInRange(1, 18));
  return contents.join(', ');
};

var createManyIceCream = function (numberObj) {
  var manyIceCream = [];
  for (var i = 0; i < numberObj; i++) {
    manyIceCream.push(

        {
          name: manyNames[getRandomInRange(0, manyNames.length - 1)],
          picture: manyPictures[getRandomInRange(0, manyPictures.length - 1)],
          amount: getRandomInRange(0, 20),
          price: getRandomInRange(100, 1500),
          weight: getRandomInRange(30, 300),
          rating: {value: getRandomInRange(1, 5), number: getRandomInRange(10, 900)},
          nutritionFacts:
      {sugar: getRandomBoolean(),
        energy: getRandomInRange(70, 500),
        contents: getContents()}
        }

    );
  }
  return manyIceCream;
};

var createCard = function (manyIC, template) {
  var iceCreamElement = template.cloneNode(true);

  if (manyIC.amount >= 1 && manyIC.amount <= 5) {
    iceCreamElement.classList.remove('card--in-stock');
    iceCreamElement.classList.add('card--little');
  } else if (manyIC.amount === 0) {
    iceCreamElement.classList.remove('card--in-stock');
    iceCreamElement.classList.add('card--soon');
  }

  iceCreamElement.querySelector('.card__title').textContent = manyIC.name;
  iceCreamElement.querySelector('.card__img').src = manyIC.picture;
  iceCreamElement.querySelector('.card__price').firstChild.textContent = manyIC.price;
  iceCreamElement.querySelector('.card__price').querySelector('.card__weight').textContent = '/ ' + manyIC.weight + 'Г';

  iceCreamElement.querySelector('.stars__rating').classList.remove('stars__rating--five');
  switch (manyIC.rating.value) {
    case 5: iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--five');
      break;
    case 4: iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--four');
      break;
    case 3: iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--three');
      break;
    case 2: iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--two');
      break;
    default: iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--one');
  }

  iceCreamElement.querySelector('.star__count').textContent = manyIC.rating.number;

  iceCreamElement.querySelector('.card__characteristic').textContent = (manyIC.nutritionFacts.sugar) ? 'Содержит сахар' : 'Без сахара';

  iceCreamElement.querySelector('.card__composition-list').textContent = manyIC.nutritionFacts.contents;

  return iceCreamElement;
};

var renderAllIceCream = function (myIC) {
  var iCList = document.querySelector('.catalog__cards');
  var templateCard = document.querySelector('#card').content.querySelector('.catalog__card');

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < myIC.length; j++) {
    fragment.appendChild(createCard(myIC[j], templateCard));
  }
  iCList.appendChild(fragment);
};

renderAllIceCream(createManyIceCream(26));

// Корзина

var createBucket = function (manyBucket, template) {
  var bucketElement = template.cloneNode(true);
  bucketElement.querySelector('.card-order__title').textContent = manyBucket.name;
  bucketElement.querySelector('.card-order__img').src = manyBucket.picture;
  bucketElement.querySelector('.card-order__img').alt = manyBucket.name;
  bucketElement.querySelector('.card-order__price').textContent = manyBucket.price + ' Р';

  return bucketElement;
};


var renderBucket = function (ICArr) {
  var bucketList = document.querySelector('.goods__cards');
  var templateBucket = document.querySelector('#card-order').content.querySelector('.goods_card');
  var fragment = document.createDocumentFragment();
  for (var y = 0; y < ICArr.length; y++) {
    fragment.appendChild(createBucket(ICArr[y], templateBucket));
  }
  bucketList.appendChild(fragment);
};

renderBucket(createManyIceCream(3));
