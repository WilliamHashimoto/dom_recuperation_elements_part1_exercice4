//1
console.log(document.getElementsByTagName('h1')[1].innerText);
//2
console.log(document.getElementsByTagName('li')[document.getElementsByTagName('li').length-1].innerText);
//3
console.log(document.getElementsByTagName('p')[0].innerText.toUpperCase());
//4
let list = document.getElementsByTagName('li');
let array = Array.from(list);

array.forEach(element => {
    console.log(element.innerHTML.toUpperCase());
});

