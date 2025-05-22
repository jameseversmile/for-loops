

//parts of loop
//initializer, increment, decrement, and reset
//e.g for (initializer; condition; increment/decrement) {
       //code to be executed
//}

for (let i = 0; i < 5; i++) {
     console.log('this is the value', i);
}
console.log('this is the value'); 

for (let startingNumber = 1; startingNumber < 50; startingNumber++) {
   console.log('this is the value', startingNumber);

     if (startingNumber % 2 === 0) {
        console.log('this is an even number', startingNumber);
   }
   else {
        console.log('this is an odd number', startingNumber);
   }
} 

 for (let i = 5; i <= 20; i++) {
   console.log('this is the value', i);
 } 

 let score = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
     num = 5;
     console.log(score.length);
     console.log(score[0]);
     console.log(score[num]);
     for (let i = 0; i < 4; i++) {
         console.log('this is the value', score[i]);
     }

for (let i = 100; i >= 0; i--) {
    console.log('this is the value', i);
    if (i === 90) {
        console.log('final value', i);
        continue;
    }
}for (let i = 0; i < 10; i++) {

     if (i % 2 === 0 && i !== 4) { // check if the number is even and not equal to 4, 4 will not be printed as even
         console.log('this is an even number', i);
     } else {
         console.log('this is an odd number', i);
     }
}
 
for (let i = 0; i < 10; i++) {
if (i % 2 === 0 && i !== 4) { 
         console.log('this is an even number', i);
     } else {
         console.log('this is an odd number', i);
     }
 }

//create a for loop and print number 1 to 50
for (let i=1; i <= 50; i++) {
    console.log('this is the value', i);
}
 console.log(document.getElementsByClassName('header')); //connecting a css file to a js file by class name
 console.log(document.getElementsByTagName('h1')); //connecting a css file to a js file by tag name
 console.log(document.getElementsByName('header')); //connecting a css file to a js file by name
 console.log(document.getElementsByClassName('.header')[0].innerHTML); //connecting a css file to a js file by class name
 console.log(document.querySelector('h1')); //connecting a css file to a js file by class name
 console.log(document.querySelectorAll('.header')); //connecting a css file to a js file by class name

console.log(document.getElementById('btn').textContent);
document.getElementById('btn').addEventListener('click', function() {
    console.log('this is the value');
    document.getElementById('btn').style.backgroundColor = 'red';
    document.getElementById('btn').style.color = 'white';
    document.getElementById('btn').style.fontSize = '20px';
    document.getElementById('btn').style.borderRadius = '10px';
    document.getElementById('btn').style.width = '200px';
    document.getElementById('btn').style.height = '50px';
});


//assignment
//difference between textContent and innerHTML and innerText.
console.log(document.getElementsByTagName('li')[0].innerText="garri");
console.log(document.getElementsByTagName('li')[1].innerHTML);
console.log(document.getElementsByTagName('li')[2].innerText);