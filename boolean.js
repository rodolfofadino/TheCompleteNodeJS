var isValid = false;
isValid = !isValid;

function toogleBoolean (booleanVar){
	if( typeof booleanVar === 'boolean'){
		return !booleanVar;
	}else{
		console.log('not a boolean');
	}
}
console.log( toogleBoolean(isValid));
toogleBoolean('asdas');