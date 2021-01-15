const output = document.getElementById('output');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const outputframe = document.getElementById('outputframe');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const str = input.value.toLowerCase();
    palindrome(str);
    input.textContent = '';
});

function palindrome(string) {
    if (string == string.split('').reverse().join('')) {
        if (string.length % 2 == 0) {
            output.style.color = "#007bff";
            outputframe.style.border = "3px solid #007bff";
            output.textContent = ' is even palindrome';
        } else {
            output.style.color = "#007bff";
            outputframe.style.border = "3px solid #007bff";
            output.textContent = ' is odd palindrome';
        }

    } else {
        outputframe.style.border = "3px solid red";
        output.style.color = "red";
        output.textContent = ' is not palindrome';
    }
}

chn.addEventListener('click', function(e) {
    window.open('https://github.com/CHNsPart', '_blank');
});