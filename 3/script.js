const confirmCheckbox = document.getElementById('confirm-checkbox');
const submitButton = document.getElementById('submit-button');

confirmCheckbox.addEventListener('change', () => {
  submitButton.disabled = !confirmCheckbox.checked;
});

submitButton.addEventListener('click', () => {
  // 別のサイトへ遷移するロジックを追加
  window.location.href = './1/';
});
