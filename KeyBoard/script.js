var row = document.getElementById("flex");
// var row1 = document.getElementById("row1")
// var row2 = document.getElementById("row2")
// var row3 = document.getElementById("row3")
// var row4 = document.getElementById("row4")

var rowChild = row.children;
// var rowChild1 = row1.children
// var rowChild2 = row2.children
// var rowChild3 = row3.children
// var rowChild4 = row4.children
var flag = true;
var shiftFlag = true;
//console.log(row2.children[0])
//console.log(rowChild.length);
var display = document.getElementById("input");
var str = "";
var smallcase;
// Displaying the text
function addingEvent(child) {
  for (i = 1; i < child.length - 1; i++) {
    child[i].addEventListener("click", update);
    // console.log(child[i]);
  }
}
function update(event) {
  // var x = event.target.textContent  //assign the value
  if (flag == true) {
    display.value = display.value + event.target.textContent.toLowerCase();
    //smallcase = display.value
    //console.log(smallcase)
    //display.value = str // display the value in input box
  } else {
    //   flag = true
    display.value = display.value + event.target.textContent;
    count = 0;
    // console.log(count)
  }
}

addingEvent(rowChild);
//addingEvent(rowChild1)
// addingEvent(rowChild2)
// addingEvent(rowChild3)
// addingEvent(rowChild4)

// To create UpperCase
var caps = document.getElementById("caps");
caps.addEventListener("click", createCaps);
var count = 1;
function createCaps() {
  //   console.log(1);
  if (count == 1) {
    caps.style.color = "green";
    flag = false;
  } else {
    caps.style.color = "black";
    flag = true;
    count = 1;
  }
}
// Delete the text
var deleteText = document.getElementById("delete");
deleteText.addEventListener("click", del);
var arr = [];
function del() {
  var rem = display.value.split("");
  //console.log(rem)
  rem.pop();
  var z = rem.join("");
  // console.log(z)
  display.value = z;
}

// Creating Space
var space = document.getElementById("space");
space.addEventListener("click", createSpace);
function createSpace() {
  //console.log("1")
  var x = " ";
  display.value += x;
}

// Creating Shift Rows
var row1 = document.getElementById("row1");
var rowChild1 = row1.children;
// console.log(row1.children[1].children[1].textContent)
addingEventRow1(rowChild1);
function addingEventRow1(child) {
  for (i = 0; i < child.length - 1; i++) {
    child[i].addEventListener("click", addRow1);
    //console.log(child[i]);
  }
}
//  Displaying  Shift Numbers&Char
function addRow1(e) {
  var text = e.target.textContent; // calling the values(num and chars)
  //console.log(text)
  var ind = text.split("\n");
  var char = ind[1][16];  // position of char
  var num = ind[2][16];   // position of num
  //console.log(num)
  if (shiftFlag == true) {
    display.value = display.value + num;
  } else {
    display.value = display.value + char;
    sum = 0;
  }
}

//  Displaying Shift
var shift = document.getElementById("shift");
shift.addEventListener("click", createShift);
//console.log("1")
var sum = 1;
function createShift() {
  //   console.log(1);
  if (sum == 1) {
    shift.style.color = "green";
    shiftFlag = false;
    //sum =0
  } else {
    shift.style.color = "black";
    shiftFlag = true;
    sum = 1;
  }
}

// Creating Password
var password = document.getElementById("pswd");
password.addEventListener("click", createPassword);
var pass = 1;
var passFlag = true;
var pstr = "";
var x;
function createPassword() {
  if (passFlag == true) {
    x = display.value;
    console.log(x);
    passFlag = false;
  }
  if (pass == 1) {
    password.style.color = "green";
    for (var i = 0; i < x.length - 1; i++) {
      pstr = pstr + "*";
    }
    pstr += x[x.length - 1];
    console.log(pstr);
    display.value = pstr;
    pass = 0;
    // passFlag = false
  } else {
    //passFlag = true
    password.style.color = "black";
    display.value = x;
    console.log(x);
    pass = 1;
    // passFlag = true
  }
}

// Display Reverse 

var reverse = document.getElementById("reverse");
reverse.addEventListener("click", createReverse);
var rev = 1;
var v;
var z = "";
var reverseFlag = true;
function createReverse() {
  if (reverseFlag == true) {
    v = display.value;
    console.log(v);
    reverseFlag = false;
  }

  if (rev == 1) {
    reverse.style.color = "green";
    for (var i = v.length - 1; i >= 0; i--) {
      // console.log(v[i])
      z = z + v[i];
      // console.log(z)
    }
    display.value = z;
    //shiftFlag = false;
    rev = 0;
  } else {
    reverse.style.color = "black";
    display.value = v;
    //shiftFlag=true
    rev = 1;
  }
}

// Clean the bad Words
var clean = document.getElementById("clean")
clean.addEventListener("click",createClean)
var b 
var pclean = ""
var cle = 1
function createClean(){
  b = display.value.split(" ")
  var badWords = ["shit","erotic"]
  if(cle == 1){
    clean.style.color = "green";
    for(i=0;i<badWords.length;i++){
      if(b[i] == badWords[i]){
        console.log(badWords[i])
        console.log(b.length)
        for (var i = 1; i < 4 ; i++) {
          pclean = pclean + "*";
         // console.log(pclean)
        }
        pclean += b[b.length - 1];
        console.log(pclean);
       // display.value = pclean;

      }
    }
    cle =0
  }
  else{
    clean.style.color = "black";
    cle =1
  }


}

