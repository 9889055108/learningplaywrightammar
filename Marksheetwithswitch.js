let a = 70;
switch (true) {
    case (a>=90 && a<=100):
    console.log("Your grade is A");
    break;
    case (a>=80 && a<90):
    console.log("Your grade is B");
    break;
    case (a>=70 && a<80):
    console.log("Your grade is C");
    break;
    case (a>=60 && a<70):
    console.log("Your grade is D");
    break;
    case (a>=50 && a<60):
    console.log("Your grade is F");
    break;  
    default:
        console.log("Invalid marks entered");
}