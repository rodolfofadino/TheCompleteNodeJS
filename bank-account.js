var account = {
	balance:0
};
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