let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ' ';
let arr = Array.from(buttons);

const themeToggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const operators = ['+', '-', '*', '/', '%', '.'];

arr.forEach(button => {
    button.addEventListener('click', (e) => {

        const buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            try {
                string = eval(string); 
                input.value = string;
            } catch (error) {
                input.value = "Error";  
                string = '';
            }
        } 
       
        else if (buttonText == 'AC') {
            string = ''; 
            input.value = string;
        } 
       
        else if (buttonText == 'DEL') {
            string = string.substring(0, string.length - 1); 
            input.value = string;
        } 
       
        else if ((buttonText >= '0' && buttonText <= '9') || operators.includes(buttonText)) {
            string += buttonText;
            input.value = string;
        }
    });
});


if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode'); 

        if (document.body.classList.contains('light-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    });
}
