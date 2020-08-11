const express = require('express');

const router = express.Router();

const debug = require('../../../log/log');

const debugAPIUsers = debug('app:api-users');

const Users = require('../../../models/users');

const createUserObject = (body) => new Users({
  name: body.name,
  age: body.age,
});

/**
 * @api {GET} /users/ List all
 * @apiVersion 0.0.1
 * @apiName /
 * @apiGroup Users
 *
 * @apiSuccessExample Success Response
 *     HTTP/1.1 200 OK
 *     array of Users
 *
 * @apiErrorExample 404
 *     HTTP/1.1 404 Users empty
 *     "error": "Users empty"
 */
router.get('/', async (req, res) => {
  try {
    debugAPIUsers('Users api call in method GET /');
    const users = await Users.find({});

    return res.status(200).json({ users });
  } catch (err) {
    debugAPIUsers('Users api call in method GET with catch: ', err);
    return res.status(404).send({ error: 'users empty.', message: err });
  }
});

/**
 * @api {POST} /users/create Create
 * @apiVersion 0.0.1
 * @apiName create
 * @apiGroup Users
 *
 * @apiParam (Request body) {string} name Name of user.
 * @apiParam (Request body) {number} age age of user.
 *
 * @apiSuccessExample Success Response
 *     HTTP/1.1 200 OK
 *     User created with ID: <user_id>.
 *
 * @apiErrorExample 401
 *     HTTP/1.1 401 text not found
 *     "error": "Invalid data in the body."
 * @apiErrorExample 500
 *     HTTP/1.1 500 Error in create user
 *     "error": "Error in create user."
 */
router.post('/create', async (req, res) => {
  const { body } = req;

  if (!body) return res.status(401).send({ error: 'Invalid data in the body.' });

  try {
    const user = createUserObject(body);
    const { id } = await user.save();

    debugAPIUsers(`Users create with id: ${id}`);
    return res.status(200).send(`User created with ID: ${id}`);
  } catch (error) {
    debugAPIUsers(`Users create return error: ${error}`);
    return res.status(500).send({ message: 'Error in create user.', error });
  }
});

module.exports = router;
