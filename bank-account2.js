var accounts = [];


// var account = {
// 	balance:0
// 	userName:''
// };

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(userName){
	for (var i = 0; i < accounts.length; i++) {
		if(accounts[i].userName === userName)
			return accounts[i];
	}
}

var account = {balance:0,userName:'Rodolfo'};
var account2 = {balance:0,userName:'Amanda'};
var account3 = {balance:0,userName:'Patricia'};

createAccount(account);
createAccount(account2);
createAccount(account3);

var recoverAccount = getAccount('Amanda');
console.log(recoverAccount);

//deposit
function deposit (account, amount){
	account.balance += amount;
}

//withdraw
function withdraw (account, amount){
	account.balance -= amount;
}
//getBalance
function getBalance (account){
	return account.balance;
}

deposit(account,200);
deposit(account,200);
deposit(account,200);
deposit(account,200);
console.log(getBalance(account));