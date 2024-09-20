// question number 2.
var a,b;
a=prompt("Value A");
b=prompt("Value B");

if(a>b){
  document.write("Value A = ", a, " is greater than Value B = ", b);
} else if(a<b){
    document.write("Value B = ", b, " is greater than Value A = ", a);
}
else{
  document.write("Value A = ", a, " is equal to Value B = ");

}
//   completed...
// question 3......
checknum();
function checknum(){
  var num = +prompt("enter Any Number");
  if(num>0){
     document.write(`${num} this is a Positive Number`);
  }
  else if(num<0){
    document.write(`${num} this is a Negative Number`);
      }
  else{
    document.write(`${num} this is Zero`);

  }
  }
  // completed.....

  // question 4 ..,,,,

   yourfun();
  function yourfun(){
    var value = prompt("enter Vowels")
    if((value>`a`)&&(value<`z`)||(value>`A`)&&(value<`Z`)){
      if(value==`A`|| value==`a` ||value==`E` ||value==`e` ||value==`I` ||value==`i` ||value==`O` ||value==`o` ||value==`U` ||value==`u`){
             document.write("this is Vowels")
      }
      else{
        document.write("incorrect")
      }
    }


    else{
      document.write("False");
    }
  }
  //question completed ....
  // question number 5....

  var password = "focus on your goals";
   var password1 = prompt("Enter First Password");
   var password2 =  prompt("Enter Second Password");
   if(password == password2){
    document.write("Correct! The password you entered matches the original password");
   }
   else{
    document.write("Incorrect Password");
   }
  //  completed.....
  // question 6....

  var greeting = prompt("enter hours");
  var hour = 13;
  if(hour < 18){
    document.write("Good day");
  }
  else{
    document.write("Good evening");
  }
  // completed....

  // last question...
  var time = 1900;
  var time = +prompt("enter time");
  if(time > 1200 && time < 1400){
    alert("good morning")
  }
  else if(time >1400 && time < 1700){
    alert("good afternoon")
  }
  else if(time >1700 && time < 2100 ){
    alert("good Evening")
  }
  else if(time >2100 && time < 2400){
    alert("good night")
  }
  // completed....

  

