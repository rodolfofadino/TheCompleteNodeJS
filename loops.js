var i = 0;
var countLimit = 8;

while(i<=countLimit){
	console.log('while '+ i);
	i++;
}

for (i = 0; i <= countLimit; i++) {
	console.log('for ' + i);
}

function countDownWhile(startingPoint,stoppingPoint){
	while(startingPoint>=stoppingPoint){
		console.log(startingPoint);
		startingPoint--;
	}
}

function countDownFor(startingPoint,stoppingPoint){
	for (; startingPoint >= stoppingPoint; startingPoint-- ) {
		console.log('for '+  startingPoint)
	}
}
countDownWhile(50,1);
countDownFor(30,20);

