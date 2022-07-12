// to show element when user click start

const start = document.getElementById("start");
const contanier = document.getElementsByClassName("contanier")[0];
start.addEventListener("click", (oe) => {
  contanier.style.display = "flex";

  
});


// first element
const stardiv = document.getElementsByClassName("first")[0];
const star = document.querySelector(
  "body > main > div > div.firstrow > div:nth-child(1) > i"
);
stardiv.addEventListener("click", (eo) => {
  if (red.value === "red" && star.style.color === "red") {
    stardiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    stardiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//second element
const clouddiv = document.getElementsByClassName("first")[1];
const cloud = document.getElementsByClassName("fa-solid fa-cloud");
var blue = document.querySelector("#blue");
clouddiv.addEventListener("click", (oe) => {
  if (blue.value === "blue" && blue.style.color === "blue") {
    clouddiv.innerHTML = ` <div class="first">
    <i class="fa-solid fa-check" style="color:#00FF00"></i>
    <button value="red""> احسنت</button>
   </div>`;
  } else {
    clouddiv.innerHTML = ` <div class="first">
    <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>
  
    <button value="red"" style=" font-size: 20px !important;margin-left: auto;
    margin-right: auto;  margin-top: 0;
    "> حاول مرة اخرى </button>
   </div>`;
  }
});
// THIRED ELEMENT

const moondiv = document.getElementsByClassName("first")[2];
const moon = document.getElementsByClassName("fa-solid fa-moon yellow");
const yellow = document.getElementById("yellow");
moondiv.addEventListener("click", (oe) => {
  if (yellow.value === "yellow" && yellow.style.color === "yellow") {
    moondiv.innerHTML = ` <div class="first">
    <i class="fa-solid fa-check" style="color:#00FF00"></i>
    <button value="red""> احسنت</button>
   </div>`;
  } else {
    moondiv.innerHTML = ` <div class="first">
    <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>
  
    <button value="red"" style=" font-size: 20px !important;margin-left: auto;
    margin-right: auto;  margin-top: 0;
    "> حاول مرة اخرى </button>
   </div>`;
  }
});
// FOR ELEMENT IN FIRSRT COLOM (CAT)

const catdiv = document.getElementsByClassName("first")[3];
const cat = document.getElementsByClassName("fa-solid fa-cat purple");
const purple = document.getElementById("bluebtn");
catdiv.addEventListener("click", (oe) => {
  if (purple.value === "purule" && purple.style.color === "purple") {
    catdiv.innerHTML = ` <div class="first">
    <i class="fa-solid fa-check" style="color:#00FF00"></i>
    <button value="red""> احسنت</button>
   </div>`;
  } else {
    catdiv.innerHTML = ` <div class="first">
    <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>
  
    <button value="red"" style=" font-size: 20px !important;margin-left: auto;
    margin-right: auto;  margin-top: 0;
    "> حاول مرة اخرى </button>
   </div>`;
  }
});
//  four elemnet in first colom(leves)

const levdiv = document.getElementsByClassName("first")[4];
const leve = document.getElementsByClassName(
  "fa-brands fa-canadian-maple-leaf prown"
);
const orange = document.getElementById("orange");
levdiv.addEventListener("click", (oe) => {
  if (orange.value === "orange" && orange.style.color === "orange") {
    levdiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    levdiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});

const first = document.getElementsByClassName("first")[5];
var flowerr = document.querySelector(
  "body > main > div > div.secondrow > div:nth-child(1) > i"
);
var red = document.querySelector(
  "body > main > div > div.secondrow > div:nth-child(1) > button"
);
first.addEventListener("click", (oe) => {
  if (red.value === "red" && flowerr.style.color === "green") {
    first.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    first.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
// SECOND ELEMENT IN SECOND COLUM (SECOND MOON) 100%


const moon2div = document.getElementsByClassName("first")[6];
const moon2 = document.getElementsByClassName("fa-solid fa-moon yellow")[1];
const bluemoon = document.getElementById("bluemoon");
moon2div.addEventListener("click", (oe) => {
  if (bluemoon.value === "blue" && moon2.style.color === "blue") {
    moon2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    moon2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//  third element in second row
const applediv = document.getElementsByClassName("first")[7];
const apple = document.getElementsByClassName("fa-solid fa-apple-whole  pink")[0];
const pink = document.getElementById("pinkapple");
applediv.addEventListener("click", (oe) => {
  if (pink.value === "pink" && apple.style.color === "pink") {
    applediv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    applediv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});

//four element in second row 
const star2div = document.getElementsByClassName("first")[8];
const star2=document.querySelector("body > main > div > div.secondrow > div:nth-child(4) > i");
const redstar = document.getElementById("redsatr2");
star2div.addEventListener("click", (oe) => {
  if((redstar.value === "red") &&( redstar.style.color === "red")) {
    star2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    star2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//five element in second colome snow 
const snowdiv = document.getElementsByClassName("first")[9];
const snow=document.getElementsByClassName("fa-solid fa-snowflake orange")[0];
const snowbtn = document.getElementById("snow");
snowdiv.addEventListener("click", (oe) => {
  if((snowbtn.value === "orange") &&( snow.style.color === "orange")) {
    snowdiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    snowdiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//  first element in thired colome

const snow2div = document.getElementsByClassName("first")[10];
const snow2=document.getElementsByClassName("fa-solid fa-snowflake silver")[0];
const snowbtn2 = document.getElementById("second-snow");
snow2div.addEventListener("click", (oe) => {
  if((snowbtn2.value === "silver") &&( snow2.style.color === "silver")) {
    snow2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    snow2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//  second element in thired colom (second apple)
const appl2div = document.getElementsByClassName("first")[11];
const appl2=document.getElementsByClassName("fa-solid fa-apple-whole  pink")[1];
const applebtn2 = document.getElementById("apple2");
appl2div.addEventListener("click", (oe) => {
  if((applebtn2.value === "yellow") &&( appl2.style.color === "yellow")) {
    appl2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    appl2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//  thirsd element in thired coloum sun
const sundiv = document.getElementsByClassName("first")[12];
const sun=document.getElementsByClassName("fa-solid fa-sun   gold")[0];
const sunbtn = document.getElementById("sun");
sundiv.addEventListener("click", (oe) => {
  if((sunbtn.value === "gold") &&( sun.style.color === "gold")) {
    sundiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    sundiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});
//four element in thitrd colum
const cat2div = document.getElementsByClassName("first")[13];
const cat2=document.querySelector("body > main > div > div.thiredrow > div:nth-child(4) > i")
const purplebtn = document.getElementById("purple2btn");
cat2div.addEventListener("click", (oe) => {
  if((purplebtn.value === "purpl2") &&( cat2.style.color === "purple")) {
    cat2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    cat2div.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});


// last ele,net in last qury selector 
const luckdiv = document.getElementsByClassName("first")[14];
const luck=document.getElementsByClassName("fa-solid fa-clover")[0];

const luckbtn = document.getElementById("luck");
luckdiv.addEventListener("click", (oe) => {
  if((luckbtn.value === "green") &&( luck.style.color === "green")) {
    luckdiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-check" style="color:#00FF00"></i>
  <button value="red""> احسنت</button>
 </div>`;
  } else {
    luckdiv.innerHTML = ` <div class="first">
  <i class="fa-solid fa-xmark "style="color:#ff0000 "></i>

  <button value="red"" style=" font-size: 20px !important;margin-left: auto;
  margin-right: auto;  margin-top: 0;
  "> حاول مرة اخرى </button>
 </div>`;
  }
});

