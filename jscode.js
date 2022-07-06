    //for loop 
    document.write( "========= For loop ==========<br>") ;
    for(var i = 0 ; i<10  ; i++) {
        document.write("Hello world! <br>") ;
    }
    document.write( "========= while loop ==========<br>") ;
    //while loop 
    var j =  0 ;
    while(j<10  ) {
        j++ ;
        document.write("<br>I am while loop <br>") ;
    } 
//do while loop 
document.write( "=========do whil loop ==========<br>") ;
 var k = 0 ;
 do {
     k++ ;

     document.write("<br> I am do while loop ") ;
 }while(k<10) ;
 //for each loop 
 document.write( " <br>========= for each loop ==========<br>") ;
var fruits = ["mango" , "apple" , "banana" , "orange"] ;
fruits.forEach(fruits => {
    document.write( "<h2 style='color:blue'>" + fruits + "</h2> ") ;
});
document.write( " <br> ========= if condtion ==========<br>") ;
//condition 
var name = "subrota" ;
if(name=="subrota") {
    document.write("My name is " + name ) ;
}else{
    document.write("My name is  johan" ) ;
}
document.write( " <br> ========= OR method   ==========<br>") ;
//or 
var name = "subrota" ;
var name2 = "johan" ;
if(name=="subrota" || name2 =="johan" ) {
    document.write("My name is " + name + " My friend name is " + name2) ;
}else{
    document.write("name is not print" ) ;
}
document.write( " <br> <p style='color:lime;'>  ========= And method   ==========<br> </p>") ;
var username = "nora" ;
var password = "nora123" ;
if(username=="nora" && password=="nora123") {
    document.write("Log in success") ;
}else{
    document.write("Log in information invalid" ) ;
}
document.write( " <br> <p style='color:lime;'>  ========= Function method   ==========<br> </p>") ;
function myFunction (myAnimal) {
    var myAnimal = " <br> My favourite animal Calf <br> " ;
    var name2  = "Subrota Chadra here i have my function "  ;
    document.write(  "<br>" + name2 + myAnimal + "<br>" ) ;
}
myFunction() ; //callback
document.write( " <br> <p style='color:lime;'>  ========= Arrow function method   ========== </p> <br>") ;
//Ecma script 
let ArrowFunction = (() => {
    document.write("Here I have my arrow function ") ;
})
ArrowFunction() ; //callback arrow function 
//class
class Div {
  constructor (name4 , year) {
  this.name4 = "subrota" ;
  this.year = 20 ;
  }
}
const myDiv = new Div ("subrota" , "21") ;
document.write( "Name: " + myDiv.name4  + " Year : " + myDiv.year) ;
console.log(`Name: ${myDiv.name4} Year : ${myDiv.year}` ) ;
//---------------- student class -------------------//
class StudentClass {
constructor(name5 , age, roll , city) {
        this.name5=name5;
        this.age=age;
        this.roll=roll;
        this.city=city;
    }
}
const studentInfo = new StudentClass("Alex" , "24" , "1225" , "California") ;
console.warn(`Name : ${studentInfo.name5} Age: ${studentInfo.age}  Roll: ${studentInfo.roll} City :  ${studentInfo.city}`) ;
//---------------- student class end -------------------//
//--------- json start ---------//
const jsonInfo = [{ 
    "Name " : "Subrota Chandra" ,
    "Roll" : "220" ,
    "Age " : "21" ,
    "Email" : "itnfo@gmail.com" ,
    "City" : "Joypurhat" ,
    "Proffession" : "Developer" ,
    "======Habbit=======" : {
        "Sex" : "First" ,
        "Song" : "Second" ,
        "Dance" : "Third" ,
        " ======= Coding Skill =========" : {
            "Programming Language1" : "HTML" ,
            "Programming Language2" : "CSS" ,
            "Programming Language2" : "JAVASCRIPT" ,
            "Programming Language4" : "BOOTSTRAP"  ,
            "Programming Language5" : "JQUERY" ,
            "Programming Language6" : "PHP" ,
            "Programming Language7" : "REACT JS" ,
            "Programming Language8" : "NODE JS" ,
            "Programming Language9" : "SQL" ,
            "Programming Language10" : "MONGO DB"  
          }
         }
         }];//data name will be different  ex : "name" : "subrota" ,
console.log(jsonInfo) ;
//--------- json end ---------//
setInterval (() => {
    var time = document.getElementById("time");
    time.innerHTML = new Date().toLocaleTimeString();
    time.style.color = "lime" ;
    time.style.fontSize = "25px" ;
})
//time end 

//================== Project ==============//
function productCount (coutNumber) {
    var Product = document.getElementById("count") ; //prodcut==this
    var coutNumberIncreese = coutNumber * 221 ;
    var disCount = coutNumberIncreese/100;
    var disCountPer = 25 * disCount;
    var disCountOffer = coutNumberIncreese - disCountPer ;
     Product.value = disCountOffer ;
}
//--------
var integerOfProduct = 0 ;
var displayNumber = document.getElementById("displayNumber") ; 
var addNumber = document.getElementById("addNumber") ; 
var minusNumber = document.getElementById("minusNumber") ;

addNumber.addEventListener("click" , function() {
     if(integerOfProduct > 4 ) {
         integerOfProduct == 5 ;
     alert("You can not select gettar than 5 product ") ;
     document.getElementById("addNumber").style.backgroundColor="red";
    } else{
        integerOfProduct+= 1 ;
        displayNumber.innerHTML  = integerOfProduct ;
    }
})

minusNumber.addEventListener("click" , function() {
    integerOfProduct-= 1 ;
    displayNumber.innerHTML  = integerOfProduct ;
    if(integerOfProduct < 2) {
        integerOfProduct==1;
        alert("You can not select less than 1 product ") ;
//document.getElementById("minusNumber").disabled = true;
        document.getElementById("minusNumber").style.backgroundColor="red";
    }else{
    integerOfProduct-= 1 ;
    displayNumber.innerHTML  = integerOfProduct ;
    }
}) 