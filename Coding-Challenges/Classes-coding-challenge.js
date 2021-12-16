///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  };

  accelerate () {
    this.speed += 10;
    console.log('New speed: ' + this.speed);
  };

  brake () {
    this.speed -= 5
    console.log('Brake: ' + this.speed);
  };

  get speedUS() {
    return this.speed / 1.6;
  };

  set speedUS(speed) {
    this.speed = speed * 1.6;
  };
};

const car1 = new CarCl('Ford', 120);
const car2 = new CarCl('Mercedes', 95);

car1.speedUS = 80;
console.log(car1._speed);
console.log(car1.speedUS);
console.log(car1);
console.log(car2);


car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();
