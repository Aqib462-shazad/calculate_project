
let input = document.querySelector('#data input'); // Fix input selector
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = e.target.innerHTML;

        if (btnText === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } else if (btnText === 'AC') {
            string = '';
            input.value = string;
        } else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
