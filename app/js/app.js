// window.addEventListener("load", async ()=> {
//     try{
//         if('serviceWorker' in navigator){
//            const res = await navigator.serviceWorker.register('./sw.js')
//            } 
//     }catch{
//         console.log('error')
//     }
       
// })
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Успешная регистрация
      console.log('ServiceWorker registration successful');
    }, function(err) {
      // При регистрации произошла ошибка
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
//about-us Добавление классов

const headerActives = document.querySelectorAll(".systems__card__header")

if(headerActives) {
    const subTitleMenus = document.querySelectorAll(".systems__card__subtitle")
    const iconArrows = document.querySelectorAll(".systems__card__arrow")
    for(let i=0; i<headerActives.length; i++ ){
        const headerActive = headerActives[i]
        if(subTitleMenus[i]){
            const subTitleMenu = subTitleMenus[i]
            const iconArrow = iconArrows[i]
            headerActive.addEventListener("click", function(){
                iconArrow.classList.toggle("_active__arrow")
                subTitleMenu.classList.toggle("_active")
            
            })
        }
    }
}

//questions-and-answer Добавление классов
const headerArrows = document.querySelectorAll(".questions__card__header")

if(headerArrows){
    const answerTitleMenus = document.querySelectorAll(".questions__card__subtitle")
    const activeArrows = document.querySelectorAll(".questions__card__arrow")
    for (let i = 0; i < headerArrows.length; i++) {
            const headerArrow = headerArrows[i]
            if(answerTitleMenus[i]){
                const answerTitleMenu = answerTitleMenus[i]
                const activeArrow = activeArrows[i]
                headerArrow.addEventListener("click", function(){
                    headerArrow.classList.toggle("_active__header")
                    answerTitleMenu.classList.toggle("_active")
                    activeArrow.classList.toggle("_active__arrow")
                
                })
            }
        
    }
}

//Timer
document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2022
    const deadline = new Date(2022, 07, 4);
    
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['День', 'Дня', 'Дней']);
      $hours.dataset.title = declensionNum(hours, ['Час', 'Часа', 'Часов']);
      $minutes.dataset.title = declensionNum(minutes, ['Минута', 'Минуты', 'Минут']);
      $seconds.dataset.title = declensionNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
    }
    // получаем элементы, содержащие компоненты даты
        const $days = document.querySelector('.investment__day');
        const $hours = document.querySelector('.investment__hours');
        const $minutes = document.querySelector('.investment__minutes');
        const $seconds = document.querySelector('.investment__seconds');
    // вызываем функцию countdownTimer
    $days && $hours&& $minutes && $seconds && countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = $days && $hours&& $minutes && $seconds && setInterval(countdownTimer, 1000);
  });









