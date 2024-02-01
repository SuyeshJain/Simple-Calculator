let string = ""

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case 'AC':
                string = ""
                document.querySelector('input').value = string;
                break;
            case '←':
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
                break;
            case '=':
                string = eval(string);
                document.querySelector('input').value = string;
                break;
            case '√':
                string = Math.sqrt(Number(string));
                document.querySelector('input').value = string;
                break;
            default:
                string += e.target.innerHTML;
                document.querySelector('input').value = string;
        }
    })
})
