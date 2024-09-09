require('dotenv').config();

const base  ={
  "development": {
    "username": "",
    "password": "",
    "database": 'prisma',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "u9tjsaju9nydrkik",
    "password": "ZAPgZKvDmXLqwQbCbw4M",
    "database": "bh7td7m91cnuv9osxwbd",
    "host": "bh7td7m91cnuv9osxwbd-mysql.services.clever-cloud.com",
    "dialect": "mysql"
  }
}

module.exports = base
