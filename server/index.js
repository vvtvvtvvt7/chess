const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());
const port = 7000;

const firstNames = ['Владимир', 'Алексей', 'Никита', 'Сергей', 'Илья'];
const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Сорокин', 'Дроздов'];
const getRandomItemFromArray = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
const user = {
  id: '1',
  firstName: getRandomItemFromArray(firstNames),
  lastName: getRandomItemFromArray(lastNames),
  avatar: {
    src: 'https://storytale-public.b-cdn.net/2021/06/09/c07b95e9-a0d2-4af4-9cdc-71a407454fe1-cover_file02.png',
    alt: 'аватарка пользователя',
  },
  friends: [],
};

app.get('/users', async (req, res) => {
  let users = [];
  try {
    const result = await axios.get('http://95.216.159.188:7003/api/illustration',
      { params: { count: req.query.count, page: req.query.page } });
    users = {
      users: result.data.result.illustrationData.map((item) => ({
        id: item.id,
        firstName: getRandomItemFromArray(firstNames),
        lastName: getRandomItemFromArray(lastNames),
        avatar: {
          src: item.cover,
          alt: item.name,
        },
        friends: [],
      })),
      pagination: result.data.result.pagination,
    };
  } catch (e) {
    console.log(e);
  }
  res.send(JSON.stringify(users));
});

app.get('/user', async (req, res) => {
  res.send(JSON.stringify(user));
});

app.post('/user', async (req, res) => {
  res.send(JSON.stringify(user));
});
app.post('/add', async (req, res) => {
  res.send(JSON.stringify(user));
});
app.post('/remove', async (req, res) => {
  res.send(JSON.stringify(user));
});

app.listen(port, () => {
  console.log('server start');
});
