var faker = require('faker');
var _ = require('lodash');
var dataFrom = require('./damp');

module.exports = function() {
  console.log('dbDataPost', dataFrom)
if (!dataFrom.dbDataPost[dataFrom.user.email]) {
  dataFrom.dbDataPost[dataFrom.user.email] = []
}
  var data = {
    categories: [],
    posts: dataFrom.dbDataPost[dataFrom.user.email],
    events: [],
    questions: [
      {
        id: 0,
        title: 'Когда Вы планируете провести свадьбу?',
        cards: [
          {
            title: 'Зима',
            src: '../assets/img/step-1-1.jpg'
          },
          {
            title: 'Весна',
            src: '../assets/img/step-1-2.jpg'
          },
          {
            title: 'Лето',
            src: '../assets/img/step-1-3.jpg'
          },
          {
            title: 'Осень',
            src: '../assets/img/step-1-4.jpg'
          }
        ]
      },
      {
        id: 1,
        title: 'Где Вы хотите провести свадьбу?',
        cards: [
          {
            title: 'Гомель',
            src: '../assets/img/step-2-1.jpg'
          },
          {
            title: 'Гомельская область',
            src: '../assets/img/step-2-2.jpg'
          },
          {
            title: 'За границей',
            src: '../assets/img/step-2-3.jpg'
          },
          {
            title: 'Не определились',
            src: '../assets/img/step-no.jpg'
          }
        ]
      },
      {
        id: 2,
        title: 'Куда пригласим гостей?',
        cards: [
          {
            title: 'Ресторан',
            src: '../assets/img/step-3-1.jpg'
          },
          {
            title: 'Шатер',
            src: '../assets/img/step-3-2.jpg'
          },
          {
            title: 'Веренда',
            src: '../assets/img/step-3-3.jpg'
          },
          {
            title: 'Лофит',
            src: '../assets/img/step-3-4.jpg'
          },
          {
            title: 'Не определились',
            src: '../assets/img/step-no.jpg'
          }
        ]
      },
      {
        id: 3,
        title: 'В Какой бюджет планируете уложиться?',
        cards: [
          {
            title: 'до 5 тыс $',
            src: '../assets/img/step-4-1.jpg'
          },
          {
            title: 'до 10 тыс $',
            src: '../assets/img/step-4-2.jpeg'
          },
          {
            title: 'до 15 тыс $',
            src: '../assets/img/step-4-3.jpg'
          },
          {
            title: 'до 25 тыс $',
            src: '../assets/img/step-4-4.jpg'
          },
          {
            title: 'до 35 тыс $',
            src: '../assets/img/step-4-5.jpg'
          }
        ]
      },
      {
        id: 4,
        title: 'Сколько гостей разделят с Вами день свадьбы?',
        cards: [
          {
            title: 'до 40 гостей',
            src: '../assets/img/step-5-1.webp'
          },
          {
            title: 'от 40 до 70 гостей',
            src: '../assets/img/step-5-2.webp'
          },
          {
            title: 'от 70 до 100 гостей',
            src: '../assets/img/step-5-3.jpg'
          },
          {
            title: 'Более 100 гостей',
            src: '../assets/img/step-5-4.webp'
          }
        ]
      },
      {
        id: 5,
        title: 'Какая регистрация?',
        cards: [
          {
            title: 'Выездная',
            src: '../assets/img/step-6-1.jpg'
          },
          {
            title: 'ЗАГС',
            src: '../assets/img/step-6-2.jpg'
          },
          {
            title: 'Площадки Гомеля',
            src: '../assets/img/step-6-3.jpg'
          }
        ]
      }
    ],
  };


  return data;
}();

