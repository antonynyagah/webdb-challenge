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
  db('actions')
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.post('/', async (req, res) => {
  try {
    const action = await db('actions').insert(req.body)
    res.status(201).json(action)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'There was an error posting that!' })
    console.log(error)

  }
});




module.exports = router;