const output = document.getElementById('output');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const value = input.value;
    output.textContent = factorialize(value);
});

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

chn.addEventListener('click', function(e) {
    window.open('https://github.com/CHNsPart', '_blank');
});