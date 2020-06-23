var jsonServer = require('json-server');
var db = require('./db');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var validate = require('express-validation');
var validations = require('./validations');
var dataFrom = require('./damp');
var dbData = {};
var dbDataPost = dataFrom.dbDataPost;
var jwtSecret = 'JWT_SECRET';

var user = dataFrom.user;
var app = jsonServer.create();

app.use(cors());
app.use(bodyParser.json());
// app.use(expressJwt({secret: jwtSecret}).unless({path: ['/login']}));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({email: user.email}, jwtSecret);
  res.send({token: token, user: user});
});

const events =  [
  {
    title: 'Свадьба в лесу',
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 2, // где провести 1 - гомель 2 - область - граница
    type_place_gus: 0, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей, выезд в лес в 10:00 - 300$',
      'Сьем площадки для свадьбы - 2200$',
      'Оформление места - 600$',
      'банкет - 1200$',
      'Развлекательная программа - 800$',
      'заключительный салют - 300$'
    ],
    price: 5500,
  },{
    title: 'Свадьба на берегу',
    type_time: 3, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 3, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 0, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей 10:00 - 50$',
      'Сьем площадки для свадьбы - 50$',
      'Оформление места - 300$',
      'банкет - 400$',
      'Развлекательная программа - 200$'
    ],
    price: 1000,
  },{
    title: 'Свадьба в ресторнае',
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 0, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 1, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей, катаем на лимизинах в 10:00 - 2500$',
      'Сьем площадки для свадьбы - 8000$',
      'Оформление места - 6600$',
      'банкет - 6400$',
      'Развлекательная программа - 4000$',
      'заключительный салют - 2500$'
    ],
    price: 30000,
  },{
    title: 'Свадьба под открытым небом',
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 0, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 1, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей, катаем на лимизинах в 10:00 - 2500$',
      'Сьем площадки для свадьбы - 4000$',
      'Оформление места - 6600$',
      'банкет - 4400$',
      'Развлекательная программа - 2000$',
      'фотосессия  - 500$'
    ],
    price: 20000,
  },{
    title: 'Свадьба в загародном доме',
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 2, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 3, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей, катаем на лимизинах в 10:00 - 1500$',
      'Сьем площадки для свадьбы - 2500$',
      'Оформление места - 1200$',
      'банкет - 3800$',
      'Развлекательная программа - 1000$'
    ],
    price: 10000,
  },{
    title: 'Свадьба в кофе',
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 0, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 1, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей, отвозим к месту встречи в 10:00 - 300$',
      'Сьем площадки для свадьбы - 400$',
      'Оформление места - 600$',
      'банкет - 500$',
      'Развлекательная программа - 200$',
    ],
    price: 2000,
  },{
    title: 'Свадьба на островах',
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 3, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 0, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
    steps: [
      'Сбор гостей, катаем на гидрациклах в 10:00 - 1500$',
      'Сьем площадки для свадьбы - 3000$',
      'Оформление места - 6000$',
      'банкет - 6500$',
      'Развлекательная программа - 4000$',
      'заключительный салют - 2500$'
    ],
    price: 15000,
  },{
    title: 'Свадьба "в кругу семье"',
    price: 7000,
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 0, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 0, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 1, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    steps: [
      'Сбор гостей в 10:00 - 20$',
      'Оформление места - 3680$',
      'банкет - 2800$',
      'Развлекательная программа - 400$',
    ],
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
  },{
    title: 'Свадьба европейская',
    price: 3000,
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 3, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 0, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    steps: [
      'Сбор гостей, едит в замок на экскурсию в 10:00 - 500$',
      'Сьем площадки для свадьбы -400$',
      'Оформление места -400$',
      'банкет - 1500$',
      'Развлекательная программа - 200$',
    ],
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
  },{
    title: 'Свадьба в церковном стиле',
    price: 2000,
    type_time: 0, // время года 1 - зима 2 - весна 3 - лето 4 - осень
    type_place: 3, // где провести 1 - гомель 2 - область 3- граница
    type_place_gus: 3, // куда приглашать гостей 1 -  ресторанн 2 - шатер 3 - веранда 4 - лофит
    type_count_gus: 0, // сколько гостей 1 - 40 2- 40-70 3 - 70-100 4 100>
    steps: [
      'Сбор гостей, проводим традиционый обряд в 10:00 -  200$',
      'Сьем площадки для свадьбы - 200$',
      'Оформление места - 600$',
      'банкет - 500$',
      'Развлекательная программа - 300$',
      'заключительный салют - 200$'
    ],
    type_vin: 0, // тип регистрации 1 - Выездная 2 - загс 3 площадки
  },
];

const budget = [
    0,
    5000,
    10000,
    15000,
    25000,
    35000
]

app.post('/reg', reg, function (req, res) {
  var body = req.body;
  var values = body.values.map(item => item+1);
  console.log(values);
  var token = jwt.sign({email: body.email}, jwtSecret);
  var deff = events.filter((item) => {
    return item.price <= budget[values[3]] &&
        (item.type_time === values[0] || item.type_time === 0) &&
        (item.type_place === values[1] || item.type_place === 0 || values[1] === 4) &&
        (item.type_place_gus === values[2] || item.type_place_gus === 0 || values[2] === 5) &&
        (item.type_count_gus <= values[4]) &&
        (item.type_vin === values[5] || item.type_vin === 0);

  });
  user.email = body.email;
  user.password = body.password;
  dbData[user.email] = deff;

  res.send({
    token: token,
    user: {
      email: body.email,
      password: body.password
    },
    data: deff
  });
});

app.post('/setItem', function (req, res) {
  var body = req.body;
  var item = body.item;
  var email = body.email;
  console.log(dbDataPost)
  console.log(body);
  if (!dbDataPost[email]) {
    dbDataPost[email]  = []
  }
  var post = {
    id: dbDataPost[email].length,
    title: item && item.title,
    body: email
  };

  dbDataPost[email].push(post);

  res.send({
    data: dbDataPost[email]
  });
});

app.post('/categories', validate(validations.category), function(req, res, next){
  next();
});

app.put('/categories/:id', validate(validations.category), function(req, res, next){
  next();
});

app.post('/posts', validate(validations.post), function(req, res, next){
  next();
});

app.put('/posts/:id', validate(validations.post), function(req, res, next){
  next();
});
app.post('/questions', function(req, res, next){
  next();
});

app.put('/questions/:id', function(req, res, next){
  next();
});

app.get('/me', function (req, res) {
  res.send(req.user);
});

app.get('/events', function (req, res) {
  console.log('req.user', user.email)
  res.send(dbData[user.email] || []);
});

app.use(jsonServer.router(db));
app.use(jsonServer.defaults());

app.listen(8081);

function authenticate(req, res, next) {
  var body = req.body;
  console.log(body)
  if (!body.email || !body.password) {
    res.status(400).end('Must provide email and password');
  } else if (body.email !== user.email || body.password !== user.password) {
    res.status(401).end('Email or password incorrect');
  } else {
    next();
  }
}

function reg(req, res, next) {
  var body = req.body;
  console.log(body)
  if (!body.email || !body.password) {
    res.status(400).end('Must provide email and password');
  } else {
    next();
  }
}
