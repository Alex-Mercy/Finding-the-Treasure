// Получить случайное число от 0 до size-1
 var getRandomNumber = function (size) {
 return Math.floor(Math.random() * size);
 };
 // Вычислить расстояние от клика (event) до клада (target)
 var getDistance = function (event, target) {
 var diffX = event.offsetX - target.x;
 var diffY = event.offsetY - target.y;
 return Math.sqrt((diffX * diffX) + (diffY * diffY));
 };
 // Получить для расстояния строку подсказки
 var getDistanceHint = function (distance) {
   if (distance < 15) {
    return "Обожжешься!";
  } else if (distance < 30) {
    return "Очень горячо";
  } else if (distance < 60) {
    return "Горячо";
  } else if (distance < 150) {
    return "Тепло";
  } else if (distance < 300) {
    return "Холодно";
  } else if (distance < 400) {
    return "Очень холодно";
 } else if (distance < 500) {
      return "Очень-очень холодно";
    } else {
    return "Замерзнешь!";
    }
    };
    // Создаем переменные
    var width = 600;
    var height = 600;
    var clicks = 0;
    // Случайная позиция клада
   var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
    };
    // Добавляем элементу img обработчик клика
    $("#map").click(function (event) {
    clicks++;
    // Получаем расстояние от места клика до клада
    var distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint + "," + " осталось попыток " +  (20 - clicks));
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 10) {
    alert("Клад найден! Сделано кликов: " + clicks);
    }
    if (clicks >20) {
      alert("«КОНЕЦ ИГРЫ");
    }
    });
