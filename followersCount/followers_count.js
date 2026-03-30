let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Увеличить count на 1
  displayCount(); // Отобразить количество
  checkCountValue(); // Проверить значение count и отобразить сообщения
}

function checkCountValue() {
  if (count === 10) {
    alert("Ваш пост в Instagram набрал 10 подписчиков! Поздравляем!");
  } else if (count === 20) {
    alert("Ваш пост в Instagram набрал 20 подписчиков! Продолжайте в том же духе!");
  }
}

function resetCount() {
    count = 0; // Сбрасываем значение до 0
    displayCount(); // Обновляем отображение на странице
    alert("The followers count has been reset."); // Показываем всплывающее окно
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Отобразить количество в HTML
}

