console.log("working");

// example
const arr = [1,2,3,4,5];
console.log(arr[0]);

const element1 =  document.getElementById("message");
console.log(element1.innerHTML);
console.log(element1.innerText);

const element2 = document.getElementsByClassName("impMessage");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);


const element3 = document.getElementsByTagName("h1");
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerHTML);
console.log(element3[1].innerText);

function changeText(){
    const changeText =  document.getElementsByTagName("h1");
    changeText[0].innerText = "hello world";
    console.log(changeText[0].innerText);
}

function changeColor(){
    let changeColor =  document.getElementsByClassName("impMessage");
    changeColor[0].style.color = "red";
    const changeColor1 = document.getElementById("message");
    changeColor1.style.color = "orange"; 
}


    
