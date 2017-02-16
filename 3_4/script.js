//1
const one = 'Hello';
const two = 'World';
const three = `${one} ${two}`;

//2
const multiply = (first,second=1) => (first*second);

//3
const average = (...args) => {
    let avgSum = 0;
    args.forEach(arg => avgSum += arg);
    return avgSum/args.length;
};

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstName,,lastName] = data;
