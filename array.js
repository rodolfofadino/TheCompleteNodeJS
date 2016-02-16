var grades = [100,50,60,'teste'];
grades.push(23);
grades.unshift(33);
console.log(grades);
console.log(grades[0]);
console.log(grades.length);

var grade = grades.pop();
console.log(grade);
console.log(grades);


// for (var i = 0; i < grades.length; i++) {
// 	console.log( grades[i]);
// }

grades.forEach(function(a){
	console.log(a);
});