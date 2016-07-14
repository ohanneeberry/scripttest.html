   
var numberofdogs = 3;
var numberofcats = 2;
var totalfuzzies = numberofcats + numberofdogs

console.log("hi");

console.log("first example: on degrees");
var degrees= 20;

if (degrees < 35) 
{
    console.log('Dress warmly');
} 
else if (degrees >= 50) 
{
    console.log('It doesnt matter waht you wear');
} 
else if (degrees >= 18) 
{
    console.log('It ');
} 
else 
{
    console.log('Whatever you want');
}


console.log("second example: my name, cats and dogs");
var firstname = "Yohanna";
var lastname = "Konardi";
var numberofdogs = 3;
var numberofcats = 2;
var totalfuzzies = numberofcats + numberofdogs;
var myname = firstname + lastname;
var numberofpets = 20
if (numberofpets<= 6)
    {console.log ('Thats not a lot');}
    else { console.log ('Thats a lot!');}
console.log (totalfuzzies); 


console.log("third example: on repeating statements for a time table");
var counter = 1;
//1
console.log(9*counter);
//2
counter = 2;

console.log(9* counter);
//3



console.log("fourth example: practicing a loop for time table");
var number = 1;

while (number <= 12)
    { 
        console.log(9 * number);
    number = number + 1;
    }
//output 9 * some_counter using console.log(...);

console.log("fifth example: Objects")                   
var aboutme = 
{
    school: 'dtech',
    hair: "darkbrown",
    likes: ['crocheting', 'singing', 'learning'],
// to call singing - aboutme.likes[2]
    birthday: {month: 3, day: 21}

};
console.log("about me = ", aboutme)

//functions

function myFunction() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Thats not a number, is it?";
    } else {
        voteable =  "You are " + age + " years old?";
    }
    document.getElementById("confirm").style.visibility = "visible";
    document.getElementById("demo").innerHTML = voteable;
    
console.log ('im done')
}

function showname() { 
    console.log(myname);
    document.getElementById("q3").style.visibility = "visible";
}

function notmyname() {
    console.log("then how old are you?");
     document.getElementById("confirm").style.visibility = "hidden" ;
    document.getElementById("age").value ="";
//to reset submit box
    document.getElementById("demo").style.visibility = "hidden";
    
}
