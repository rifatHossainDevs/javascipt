const accountId = "acc12345"
let accountName = "Hemel"
var age = 10
password = "123456"
let accountCity;

//prefer not to use var because of the block scope or functional scope issue

console.log("account id = ", accountId);
console.table([accountId, accountName, age, password, accountCity])

/* let and var both are same, but var have block scope or functional scope issue.
for that we always use let or const.let for mutable and const for immutable variables.
not use any thing before variable is not good (like password in the above).
accountCity is undefined because we did not assign any thing to it*/
