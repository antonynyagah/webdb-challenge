const router = require('express').Router();

const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/dbproject.db3'
  }
}

const db = knex(knexConfig);

//check
router.get('/', (req, res) => {
  res.send('Hello World!')
});

router.post




module.exports = router;