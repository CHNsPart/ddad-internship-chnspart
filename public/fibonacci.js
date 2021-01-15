const output = document.getElementById('output');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const chn = document.getElementById('chn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    a = [];
    const value = input.value;
    a = fibonacci(value);
    output.style.wordWrap = 'break-word';
    output.style.lineHeight = '35px';
    output.textContent = a.slice(1, 21);

});

function fibonacci(n) {
    const number = n;
    let n1 = 0,
        n2 = 1,
        nextTerm;
    a = [];

    for (let i = 1; i <= number; i++) {
        a[i] = n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return a;
};

chn.addEventListener('click', function(e) {
    window.open('https://github.com/CHNsPart', '_blank');
});