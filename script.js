let inputSlider = document.getElementById('inputSlider');
let passBox = document.getElementById('passBox');
let copyIcon = document.getElementById('copyIcon');
let lowerCase = document.getElementById('lowercase');
let upperCase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let sliderValue = document.getElementById('sliderValue');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
});

let LowerCase = 'abcdefghijklmnopqrstuvwxyz';
let UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Numbers = '0123456789';
let Symbols = '~`!@#$%^&*()-_+=:;,.<>?/{}[]|';

function generatePassword() {
  let chars = '';
  let password = '';

  chars += lowerCase.checked ? LowerCase : '';
  chars += upperCase.checked ? UpperCase : '';
  chars += numbers.checked ? Numbers : '';
  chars += symbols.checked ? Symbols : '';

  if (chars == '' || chars.length == 0) {
    alert('Please select atleast one of the options below');
    return password;
  }

  let ind = 1;

  while (ind <= inputSlider.value) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    ind++;
  }

  return password;
}

copyIcon.addEventListener('click', () => {
  if (passBox.value != '' || passBox.value >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = 'check';
    copyIcon.title = 'password copied';

    setTimeout(() => {
      copyIcon.innerText = 'content_copy';
      copyIcon.title = '';
    }, 3000);
  }
});
