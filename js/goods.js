var showElement = function(findClass, removeClass){
document.querySelector(findClass).classList.remove(removeClass);
};
var hideElement = function(findClass, addClass){
document.querySelector(findClass).classList.add(addClass)
};
showElement('.catalog__cards', 'catalog__cards--load');
hideElement('.catalog__load', 'visually-hidden');
showElement('.goods__cards', 'goods__cards--empty');
hideElement('.goods__card-empty','visually-hidden');

var manyNames = ['Чесночные сливки', 'Огуречный педант', 'Грибной шейк', 'Баклажановое безумие', 'Паприколу итальяно', 'Нинзя-удар васаби', 'Хитрый баклажан', 'Горчичный вызов', 'Кедровая липучка', 'Корманный портвейн', 'Чилийский задира', 'Беконовый взрыв', 'Арахис vs виноград', 'Сельдерейная душа', 'Початок в бутылке', 'Чернющий мистер чеснок','Раша федераша', 'Кислая мина','Кукурузное утро', 'Икорный фуршет', 'Новогоднее настроение','С пивком потянет', 'Мисс креветка', 'Бесконечный взрыв', 'Невинные винные','Бельгийское пенное', 'Острый язычок'];
var manyPictures = ['img/cards/gum-cedar.jpg', 'img/cards/gum-chile.jpg', 'img/cards/gum-eggplant.jpg', 'img/cards/gum-mustard.jpg', 'img/cards/gum-portwine.jpg', 'img/cards/gum-wasabi.jpg', 'img/cards/ice-cucumber.jpg', 'img/cards/ice-eggplant.jpg', 'img/cards/ice-garlic.jpg', 'img/cards/ice-italian.jpg', 'img/cards/ice-mushroom.jpg', 'img/cards/ice-pig.jpg', 'img/cards/marmalade-beer.jpg', 'img/cards/marmalade-caviar.jpg', 'img/cards/marmalade-corn.jpg', 'img/cards/marmalade-new-year.jpg', 'img/cards/marmalade-sour.jpg', 'img/cards/marshmallow-bacon.jpg', 'img/cards/marshmallow-beer.jpg', 'img/cards/marshmallow-shrimp.jpg', 'img/cards/marshmallow-spicy.jpg', 'img/cards/marshmallow-wine.jpg', 'img/cards/soda-bacon.jpg', 'img/cards/soda-celery.jpg', 'img/cards/soda-cob.jpg', 'img/cards/soda-garlic.jpg', 'img/cards/soda-peanut-grapes.jpg', 'img/cards/soda-russian.jpg'];
var manyContents = ['молоко', 'сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор дуба, идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид','вилларибо'];
var getRandom = function (number){
return Math.round(Math.random() * number)
}

var createManyIceCream = function (numberObj) {
  var manyIceCream = [];
  for (var i = 0; i < numberObj; i++) {
    manyIceCream.push({
      name: manyNames[getRandom(manyNames.length -1)],
      picture: manyPictures[getRandom(manyPictures.length - 1)],
      amount: getRandom(20),
      price: getRandom(1400) + 100,
      weight: getRandom(270) + 30,
      rating: {value : getRandom(5), number : getRandom(890) + 10},
      nutritionFacts:
      {sugar : getRandom(1)},
      content: function (){
        var contents = [];
        for (var i = 0; i < getRandom(manyContents.length - 1); i++){
        contents.push(manyContents[i]);
        }
        return contents.join(', ')
        }})
  }
  return manyIceCream;
}


var iCList = document.querySelector('.catalog__cards');
var templateCard = document.querySelector('#card').content.querySelector('.catalog__card');

var createCards = function (manyIC) {
var iceCreamElement = templateCard.cloneNode(true);
iceCreamElement.classList.remove('card--in-stock');
if (manyIC.amount > 5) {
iceCreamElement.classList.add('card--in-stock');
}
if (manyIC.amount >= 1 && manyIC.amount <= 5) {
iceCreamElement.classList.add('card--little');
}
if (manyIC.amount < 1) {
  iceCreamElement.classList.add('card--soon');
}

iceCreamElement.querySelector('.card__title').textContent = manyIC.name;
iceCreamElement.querySelector('.card__img').src = manyIC.picture;
iceCreamElement.querySelector('.card__price').firstChild.textContent = manyIC.price;
iceCreamElement.querySelector('.card__price').querySelector('.card__weight').textContent = manyIC.weight + 'Г';

iceCreamElement.querySelector('.stars__rating').classList.remove('stars__rating--five');
if (manyIC.rating.value === 5) {
iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--five');
}
if (manyIC.rating.value === 4) {
iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--four');
}
if (manyIC.rating.value === 3) {
iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--three');
}
if (manyIC.rating.value === 2) {
iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--two');
}
if (manyIC.rating.value === 1) {
iceCreamElement.querySelector('.stars__rating').classList.add('stars__rating--one');
}
iceCreamElement.querySelector('.star__count').textContent = manyIC.rating.number;

if (manyIC.nutritionFacts.sugar) {
  iceCreamElement.querySelector('.card__characteristic').textContent = 'Содержит сахар';
}
if (!manyIC.nutritionFacts.sugar) {
  iceCreamElement.querySelector('.card__characteristic').textContent = 'Без сахара';
}
  iceCreamElement.querySelector('.card__composition-list').textContent = manyIC.content();

console.log(iceCreamElement);

  return iceCreamElement;
}

var renderIC = function (myIC) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < myIC.length; j++) {
    fragment.appendChild(createCards(myIC[j]));
  }
  iCList.appendChild(fragment);
};

var foo3 = createManyIceCream(26);
console.log(foo3);
renderIC(foo3);


var iceCreamBucket = createManyIceCream(3);

var bucketList = document.querySelector('.goods__cards');
var templateBucket = document.querySelector('#card-order').content.querySelector('.goods_card');

var createBucket = function (manyBucket) {
var bucketElement = templateBucket.cloneNode(true);
bucketElement.querySelector('.card-order__title').textContent = manyBucket.name;
bucketElement.querySelector('.card-order__img').src = manyBucket.picture;
bucketElement.querySelector('.card-order__img').alt = manyBucket.name;
bucketElement.querySelector('.card-order__price').textContent = manyBucket.price + ' Р';

return bucketElement;
}


var renderBucket = function (ICArr) {
var fragment = document.createDocumentFragment();
for (var y = 0; y < ICArr.length; y++) {
fragment.appendChild(createBucket(ICArr[y]));
}
bucketList.appendChild(fragment);
};

renderBucket(iceCreamBucket);





















