var showElement = ducument.querySelector('.catalog__cards');
showElement.classList.remove('catalog__cards--load');
var hideElement = document.querySelector('.catalog__load');
hideElement.classList.add('visually-hidden');

var manyNames = ['Чесночные сливки', 'Огуречный педант', 'Грибной шейк', 'Баклажановое безумие', 'Паприколу итальяно', 'Нинзя-удар васаби', 'Хитрый баклажан', 'Горчичный вызов', 'Кедровая липучка', 'Корманный портвейн', 'Чилийский задира', 'Беконовый взрыв', 'Арахис vs виноград', 'Сельдерейная душа', 'Початок в бутылке', 'Чернющий мистер чеснок','Раша федераша', 'Кислая мина','Кукурузное утро', 'Икорный фуршет', 'Новогоднее настроение','С пивком потянет', 'Мисс креветка', 'Бесконечный взрыв', 'Невинные винные','Бельгийское пенное', 'Острый язычок'];
var manyPictures = ['img/cards/gum-cedar.jpg', 'img/cards/gum-chile.jpg', 'img/cards/gum-eggplant.jpg', 'img/cards/gum-mustard.jpg', 'img/cards/gum-portwine.jpg', 'img/cards/gum-wasabi.jpg', 'img/cards/ice-cucumber.jpg', 'img/cards/ice-eggplant.jpg', 'img/cards/ice-garlic.jpg', 'img/cards/ice-italian.jpg', 'img/cards/ice-mushroom.jpg', 'img/cards/ice-pig.jpg', 'img/cards/marmalade-beer.jpg', 'img/cards/marmalade-caviar.jpg', 'img/cards/marmalade-corn.jpg', 'img/cards/marmalade-new-year.jpg', 'img/cards/marmalade-sour.jpg', 'img/cards/marshmallow-bacon.jpg', 'img/cards/marshmallow-beer.jpg', 'img/cards/marshmallow-shrimp.jpg', 'img/cards/marshmallow-spicy.jpg', 'img/cards/marshmallow-wine.jpg', 'img/cards/soda-bacon.jpg', 'img/cards/soda-celery.jpg', 'img/cards/soda-cob.jpg', 'img/cards/soda-garlic.jpg', 'img/cards/soda-peanut-grapes.jpg', 'img/cards/soda-russian.jpg'];
var manyContents = ['молоко', 'сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор дуба, идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид','вилларибо'];
var getRandom = function (number){
return Math.round(Math.random() * number)
}

for (var i = 0; i < getRandom(17); i++){
contents += (manyContents[i] + ", ")
}:

var amount = getRandom(20);
var price = getRandom(1400) + 100;
var weight = getRandom(270) + 30;
var rating = {
	value : getRandom(5),
	number : getRandom(890) + 10
};
var nutritionFacts = {
	sugar : getRandom(1)
};
var energy = getRandom(430) + 70;
var contents = 1

var manyIceCream = []


























