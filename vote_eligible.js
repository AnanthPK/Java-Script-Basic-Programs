var age = parseInt(prompt("Enter the voter's age"))
if (age >= 18){
    document.write("Ready to vote")
}
else if (age == 17){
    document.write("Come after one year")
}
else if (age == 16){
    document.write("Come after two year")
}
else{
    document.write("Note Eligilbe")
}