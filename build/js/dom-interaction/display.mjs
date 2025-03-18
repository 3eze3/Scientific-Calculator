export function display() {
    const display = document.getElementById('screen');
    const $buttons = document.querySelectorAll('.calculator__buttons');
    const $ans = document.querySelector('.calculator__ans');
    display.value = '0';
    let lastResult = '0';
    $buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.value;
            const lastChar = display.value.slice(-1);
            const operators = ['+', '-', '*', '/'];
            if (value === '=') {
                try {
                    lastResult = eval(display.value);
                    $ans.textContent = `${display.value}`;
                    display.value = eval(display.value);
                }
                catch (error) {
                    display.value = 'Error';
                }
                return;
            }
            if (value === 'DEL') {
                if (display.value === 'Error' || display.value === 'Infinity')
                    display.value = '0';
                display.value = display.value.slice(0, -1) || '0';
                return;
            }
            if (value === 'RESET') {
                display.value = '0';
                lastResult = '0';
                $ans.textContent = 'Ans: 0';
                return;
            }
            if (value === 'ans') {
                if (lastResult !== '0') {
                    display.value += lastResult;
                    $ans.textContent = 'Ans: 0';
                }
                return;
            }
            if (operators.includes(value) && operators.includes(lastChar))
                return;
            if ((value === '-' || value === '.') && display.value === '0') {
                display.value = value;
                return;
            }
            if (value === '.') {
                const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
                if (lastNumber && lastNumber.includes('.')) {
                    return;
                }
            }
            if (display.value === '0' && !operators.includes(value)) {
                display.value = value;
                return;
            }
            display.value += value;
        });
    });
}
