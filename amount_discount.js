var pant = parseInt(prompt("Enter the no of pants"))
var shirt = parseInt(prompt("Enter the no f shirts"))
var T_shirt = parseInt(prompt("Enter the no f T-shirts"))
var Amount = parseInt(prompt("Enterr the Purchase Amount"))
if (Amount>=0 && Amount<=1000){
   A=2*shirt + 3*T_shirt;
   document.write("The Total Dicount Amount is ", Amount*A*0.01)
}
else if (Amount>=1001 && Amount<=1500){
    A=4*pant + 5*shirt + 6*T_shirt;
    document.write("The Total Dicount Amount is ", Amount*A*0.01)
}
else if (Amount>=1501 && Amount<=2001) {
    A=7*pant + 8*shirt + 9*T_shirt;
    document.write("The Total Dicount Amount is ", Amount*A*0.01)
}
else {
    A=10*pant + 11*shirt + 12*T_shirt;
    document.write("The Total Dicount Amount is ", Amount*A*0.01)
}