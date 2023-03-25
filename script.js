const button = document.querySelector('.btn');
const result = document.querySelector('.result');

button.addEventListener('click', vowelChecker);

function vowelChecker() {
  const input = document.querySelector('.input-text').value;

  if (!input.length) {
    result.innerHTML = 'You have to type word/text first';
  } else {
    let counter = 0;
    const regex = /[aeiou]/gi;

    for (char of input) {
      if (regex.test(char)) counter++;
    }

    if (counter === 0) result.innerHTML = `There is no vowels`;
    else if (counter === 1) result.innerHTML = `There is 1 vowel`;
    else result.innerHTML = `There are ${counter} vowels`;
  }
}
