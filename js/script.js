const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const errM = document.getElementById('err-msg');

form.addEventListener('submit', handleSubmit);

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}

function handleSubmit(e) {
  e.preventDefault();
  if (input.value === '') {
    errM.innerHTML = 'Please ensure to enter a link before submission.!';
    input.classList.add('border-red');
  } else if (!validURL(input.value)) {
    errM.innerHTML = 'Please enter a valid url before submission.!';
  }
}
