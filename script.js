

let show = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map((btn) => {
    btn.addEventListener('click', value);
});

function value(e) {
    let key = e.target.innerText;

    if (key === 'AC') {
        show.innerText = '';
    } else if (key === '=') {
        try {
            show.innerText = eval(show.innerText);
        } catch {
            show.innerText = 'Error';
        }
    } else if (key === 'del') {
        show.innerText = show.innerText.slice(0, -1);
    } else if (key === 'sqrt') {
        show.innerText = Math.sqrt(eval(show.innerText));
    } else if (key === '.') {
        if (!show.innerText.includes('.')) {
            show.innerText += key;
        }
    } else {
        show.innerText += key;
    }
}

