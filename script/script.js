var main = document.querySelector(".main");
var toTop = document.querySelector(".totop");

window.onscroll = function () {
  if (scrollY > 310) {
    toTop.style.display = "block";
    main.classList.add('rr');
    document.querySelector(".nav").classList.add('rrr');
    document.querySelector(".slovo").classList.add('io');
  } else {
    main.classList.remove('rr');
    toTop.style.display = "none";
    document.querySelector(".nav").classList.remove('rrr');
    document.querySelector(".slovo").classList.remove('io');
  }
} 

toTop.onclick = function () {
  window.scrollTo(0, 0);
}

//блок меню
var menu = document.querySelector(".burger"); //кнопка
var menub = document.querySelector(".menublock"); //блок

menu.onclick = function () {
  menub.classList.toggle('menublockafter');
}

// тест
var buts = document.querySelectorAll(".but");
var i = 0;

for (but of buts) {
  but.onclick = function () {
    if(this.value % 4 == 0 && this.value % 3 == 0) {
      this.style.backgroundColor = 'rgb(65, 160, 65)';
      this.style.color = 'rgb(19, 75, 19)';
      this.parentNode.style.pointerEvents = 'none';
      i++;
    } else {
      this.style.backgroundColor = 'rgb(255, 90, 90)';
      this.style.color = 'rgb(150, 2, 2)';
      this.parentNode.style.pointerEvents = 'none';
    }
  }
}

var closeAnswer = document.querySelector(".close");
var getAnswer = document.querySelector(".answer");

// описание результата
var discription;
var disc = function (count) {
  if (count == 10) { 
    if (i < 6) {
      discription = "<p> <br>Плохой результат! <br> Вы не справились с заданием! <br> Ваша оценка '2'</p>";
    } else if (i >= 6 && i <= 7) {
      discription = "<p> <br>Ваш результат не очень хороший! <br> Попробуйте пройти тест ещё раз! <br> Ваша оценка '3'</p>";
    } else if (i >= 8 && i <= 9) {
      discription = "<p> <br>Ваш результат достаточно хороший! <br> Хорошее прохождение теста! <br> Ваша оценка '4'</p>";
    } else {
      discription = "<p> <br>Отличный результат! <br> Вы набрали максимум баллов! <br> Ваша оценка '5' </p>"
    }
  }  else if (count == 15) {
    if (i < 8) {
      discription = "<p> <br>Плохой результат! <br> Вы не справились с заданием! <br> Ваша оценка '2'</p>";
    } else if (i >= 8 && i < 11) {
      discription = "<p> <br>Ваш результат не очень хороший! <br> Попробуйте пройти тест ещё раз! <br> Ваша оценка '3'</p>";
    } else if (i >= 11 && i < 14) {
      discription = "<p> <br>Ваш результат достаточно хороший! <br> Отличное прохождение теста! <br> Ваша оценка '4'</p>";
    } else if (i == 14) {
      discription = "<p> <br>Отличный результат! <br> Вы получили лучшую оценку! <br> Ваша оценка '5'</p>";
    } else {
      discription = "<p> <br>Отличный результат! <br> Вы набрали максимум баллов! <br> Ваша оценка '5' </p>"
    }
  }
}

// подсчет результата и его вывод
var answer = function() {
  var points = " ";
  if (i == 1 || i == 21 || i == 31) {
    points = " балл";
  } else if (i >= 22 && i <= 24 || i >= 2 && i <= 4) {
    points = " балла";
  } else if (i >= 5 && i <= 20 || i >= 25 && i <= 30 || i == 0) {
    points = " баллов";
  }

  document.querySelector('.answer').innerHTML = 'Ваш результат ' + i + points + discription + '<button class="getAnswer" style="margin: 10px 0px;" onclick="location.reload();">Выйти</button>';
  getAnswer.style.display = "block";
  closeAnswer.style.display = "block";
  document.body.style.overflow = "hidden";
}

// скрытие ответа 
closeAnswer.onclick = function () {
  getAnswer.style.display = "none";
  closeAnswer.style.display = "none";
  document.body.style.overflow = "auto";
  location.reload();
}


