const url = 'http://numbersapi.com/';
const factBtn = document.querySelector('#factBtn');
const randFactBtn = document.querySelector('#randFactBtn');
const result = document.querySelector('.result');

factBtn.addEventListener('click', () => {
    let inputVal = document.querySelector('input').value;

    fetch(`${url}${inputVal}`).then(res => res.text()).then(data => {
        result.style.display = 'block';
        result.innerHTML = `
            <span id="number">${inputVal}</span>
            <p id="text">
            ${data}
            </p>
        `;
    }).catch(() => {
        result.innerHTML = `<h3>Pick number between 1 and 350</h3>`
    });
});

randFactBtn.addEventListener('click',() => {
    let randNum = Math.floor(Math.random() * 350) + 1;
 
    fetch(`${url}${randNum}`).then(res => res.text()).then(data => {
        result.style.display = 'block';
        result.innerHTML = `
            <span id="number">${randNum}</span>
            <p id="text">
            ${data}
            </p>
        `
    })
})