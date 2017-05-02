function greetMaker(name){
    function greet(){
        console.log('Hello ' + name + '!');
    }
    return greet;
}

var greetAndrew = greetMaker('Rodolfo');

greetAndrew();
greetAndrew();
greetAndrew();

var greetWord = greetMaker('word');
greetWord();
greetAndrew();

function creaderAdder(baseNumber){
    return function (numberToAdd){
        return baseNumber + numberToAdd;
    }
}

var addTen = creaderAdder(10);
console.log(addTen(2));
console.log(addTen(0));
