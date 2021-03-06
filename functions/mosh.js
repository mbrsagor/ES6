function saySomething() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    // varialbe scope example like if varialbe define let it will not work.
    // Let only for you a spefic block not global.
    console.log(i);
}

// saySomething()

// simple object example
const person = {
    name: 'Mbr-Sagor',
    age: 27,
    address: 'Dhaka, Bangladesh',
    walk() {},
    talk() {},
};
person.talk()
person['name'] = 'Sagor';

// console.log(person);

// Here using `this` keywoard
const person2 = {
    name: 'Mbr-Sagor',
    walk() {
        console.log(this);
    }
}
person2.walk();

const walk = person2.walk.bind(person2);
console.log(walk);
walk()


// Function and Arrow function both example
const squre = function (number) {
    return number * number;
}
console.log(squre(2))

// If you use simple paramiter you may not use bracket.
add = number => number * number;
console.log(add(2));


const jobs = [{
        id: 1,
        isActive: true
    },
    {
        id: 2,
        isActive: false
    },
    {
        id: 2,
        isActive: true
    },
];

const active_job = jobs.filter(function (job) { return job.isActive }) // Without arrow function
console.log(active_job);

const active_job2 = jobs.filter(job => job.isActive) // Arrow function
console.log(active_job2);


const person3 = {
    talk() {
        // var self = this;
        setTimeout(() => {
            console.log("this:", this);
        }, 1000);
    }
}
person3.talk();

const items = ['MacBook', 'MacBook Air', 'MacBook Pro', 'Imac']
const i = items.map(function (item) { return item }) // function
const i2 = items.map(item => `${item}`) // arrow function
console.log(i2);
 

// Combaine operator
const first = [1, 2, 3, 4]
const second = [5, 6, 7, 8]
const combain = first.concat(second)
console.log(combain)

const combain2 = [... first, ... second]
console.log(combain2);

const obj1 = { name: "Md.Bozlur Rosid Sagor" };
const obj2 = { job: "Software developer." };

const combined_obj = {...obj1, ...obj2, ...{location: 'Dhaka, Bangaldesh'}}
console.log(combined_obj);
