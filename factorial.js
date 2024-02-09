var num = parseInt(prompt("Enter the number to find factorial"))
var fact =1
for (i=num; i>=1; i--){
    fact = fact * i;
}
document.write("The factorial of the Number ", num , " is ", fact)