//1
let h1 = document.getElementsByTagName('h1')[1].innerText;
console.log(h1);

//2
let li = document.getElementsByTagName('li')[3].innerText;
console.log(li);

//3
let p = document.getElementsByTagName('p')[0].innerText.toUpperCase();
console.log(p);

//4
let ul = document.getElementsByTagName('ul')[0];
let ul_li = Array.from(ul.getElementsByTagName('li'));
ul_li.forEach(li => {
    console.log(li.innerText.toLocaleUpperCase());
});