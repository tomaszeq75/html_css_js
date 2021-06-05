const element = document.querySelectorAll('.red-class')
console.log(element);

const d = document.createElement('div')
d.innerHTML = 'CCCCCC'
document.body.appendChild(d)

let ul = document.querySelectorAll('ul')
console.log(ul[0].children);
ul[0].children[1].remove();

let ul2 = document.querySelector('ul')
console.log(ul2);

let li = document.querySelector('li')
console.log(li);
console.log(li.nextElementSibling);

li.classList.toggle('ddd')


// event
function displayText() {
    console.log('text');
}

toggleColor = () => {
    document.getElementById('my-custom-span').classList.toggle('blue')
}

let btn = document.getElementById('button')
btn.addEventListener('click', toggleColor)

// zadanie


