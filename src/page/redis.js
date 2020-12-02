// import client = require('redis').createClient({ host: 'redis-cache' });
// const { promisify } = require('util');
import redis from 'redis';
import { promisify } from 'util';

const REDIS_PORT = process.env.REDIS_PORT || 6397;

const client = redis.createClient({
  host: 'redis-cache',
});

client.on('connect', () => {
  console.log('Connected to redis client');
});

client.on('error', (error) => {
  console.error(error);
});

const _getter = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (!data || err) reject(err);
      // console.log(data);
      // console.log('__getter', key, 'sucess');
      resolve(data);
    });
  });
};

const _setter = (key, data) => {
  return new Promise((resolve, reject) => {
    console.log('__setter', key);
    client.set(key, JSON.stringify(data), (err, ok) => {
      // console.log('__setter', ok);
      if (!ok) reject(err);
      resolve(ok);
    });
  });
};

// const _getter = promisify(client.get).bind(client);
// const _setter = promisify(client.set).bind(client);
// const getList = promisify(client.lrange).bind(client);

export { _getter, _setter };
