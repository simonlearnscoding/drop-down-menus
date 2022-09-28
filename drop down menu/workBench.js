class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}

const flyMethods = {
    fly() {
        console.log(`${this.name} can fly!`);
    },
};

const swimMethods = {
    swim() {
        console.log(`${this.name} can swim!`);
    },
};

function extendWith( father, name, ...mixins) {
    // We use the wrapper object so that the class constructor's name is assigned from `name`
    const obj = {
        [name]: class extends father {
        }
    };
    Object.assign(obj[name].prototype, ...mixins);
    return obj[name];
}

const FlyingPerson = extendWith(Person, "FlyingPerson", flyMethods);
const SwimmingPerson = extendWith(Person, "SwimmingPerson", swimMethods);
const FlyingSwimmingPerson = extendWith(Person, "FlyingSwimmingPerson", flyMethods, swimMethods);

const joe = new FlyingSwimmingPerson("Joe");
joe.fly();
joe.swim();

class Animal {
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const FlyingSwimmingAnimal = extendWith(Animal, "FlyingSwimmingAnimal", flyMethods, swimMethods);

console.log(FlyingSwimmingAnimal.name); // FlyingSwimmingAnimal
const splippery = new FlyingSwimmingAnimal("Slippery");
splippery.fly();
splippery.swim();