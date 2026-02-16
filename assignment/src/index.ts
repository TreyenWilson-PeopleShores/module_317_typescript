// @ts-check

class Vehicle {
  status: string = "stopped";
  make: string;
  model: string;
  wheels: number;
  constructor(make: string, model:string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model:string) {
    //super(make, model, "four");
    // Wheels MUST be a number, not a string!
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model:string,) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}


const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);




class NCycle<T> {
  status: string = "stopped";
  make: T|T[];
  model: T|T[];
  wheels: number;
  constructor(make: T|T[], model:T|T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
  print(number?: number): void{
    if (Array.isArray(this.make) === false && Array.isArray(this.model) === false){
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) === true && Array.isArray(this.model) === true){
      const index = number ?? 0;
      console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
    } else{
      console.log("This NCycle was not created properly.");
    }
  }
  printAll(): void{
     if (Array.isArray(this.make) === false && Array.isArray(this.model) === false){
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) === true && Array.isArray(this.model) === true){
      
      if(this.make.length === this.model.length){
      for(let i = 0 ; i< this.make.length; i++){
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
      }
      }else{
        if(this.make.length<this.model.length){
          for(let i = 0 ; i< this.make.length; i++){
            console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
          }
        } else if(this.model.length<this.make.length){
          for(let i = 0 ; i< this.model.length; i++){
            console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
          }
        }

      }


    } else{
      console.log("This NCycle was not created properly.");
    }   
  }
}

