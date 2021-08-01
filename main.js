const SIZE_SMALL = {
  price: 50,
  calories: 20,
}
const SIZE_MIDLE = {
  price: 75,
  calories: 30,
}
const SIZE_LARGE = {
  price: 100,
  calories: 40,
}

const TOPPING_MAYO = {
  price: 20,
  calories: 5,
}
const TOPPING_SALAD = {
  price: 20,
  calories: 5,
}
const TOPPING_CHEESE = {
  price: 10,
  calories: 20,
}
const POTATO = {
  price: 15,
  calories: 10,
}
const SPICE = {
  price: 15,
  calories: 0,
}


function Hamburger (size) {
  this.size = size;    
  this.price = 0;
  this.calories = 0;

if (size.price === 50) {
  console.log('Выбран Маленький Гамбургер')
} else if (size.price === 75) {
  console.log('Выбран Средний Гамбургер')
} else {
  console.log('Выбран Большой Гамбургер')
};

  this.getPrice = function () {    
    return this.price + this.size.price;
  }
  
  this.getCallories = function () {
    return this.calories + this.size.calories;
  }

  this.addModifier = function(topping) {
    
    if (topping === TOPPING_MAYO) {
      console.log('+ Добавили майонез')
      this.price = this.price + TOPPING_MAYO.price;
      this.calories = this.calories + TOPPING_MAYO.calories;

    } else if (topping === TOPPING_CHEESE) {
      console.log('+ Добавили сыр')
      this.price = this.price + TOPPING_CHEESE.price;
      this.calories = this.calories + TOPPING_CHEESE.calories; 

    } else if (topping === TOPPING_SALAD) {
      console.log('+ Добавили салат');
      this.price = this.price + TOPPING_SALAD.price;
      this.calories = this.calories + TOPPING_SALAD.calories;  

    } else if (topping === POTATO) {
      console.log('+ Добавили картофель');
      this.price = this.price + POTATO.price;
      this.calories = this.calories + POTATO.calories; 

    } else if (topping === SPICE) {
      console.log('+ Добавили специи');
      this.price = this.price + SPICE.price;
      this.calories = this.calories + SPICE.calories; 
    };
  };
};

const hamburger = new Hamburger(SIZE_SMALL);
// const hamburger = new Hamburger(SIZE_MIDLE);
// const hamburger = new Hamburger(SIZE_LARGE);
// добавляем добавки
hamburger.addModifier(TOPPING_MAYO);
// hamburger.addModifier(TOPPING_CHEESE);
// hamburger.addModifier(TOPPING_SALAD);
hamburger.addModifier(POTATO);
// hamburger.addModifier(SPICE);

// вывод результата
console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());