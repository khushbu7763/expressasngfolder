/**
 * @api {get} /users Get all users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {Object[]} users List of users.
 * @apiSuccess {Number} users.user_id User's unique ID.
 * @apiSuccess {String} users.name Name of the user.
 * @apiSuccess {String} users.username Username of the user.
 * @apiSuccess {String} users.email Email of the user.
 * @apiSuccess {String} users.role Role of the user.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "user_id": 1,
 *     "name": "Test User",
 *     "username": "testuser",
 *     "email": "test@example.com",
 *     "role": "user"
 *   }
 * ]
 */

/**
 * @api {post} /users Create a new user
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiBody {String} name Name of the user.
 * @apiBody {String} username Username, 3-20 alphanumeric characters.
 * @apiBody {String} email Valid email address.
 * @apiBody {String} password Password, minimum 8 characters.
 *
 * @apiSuccess {Number} user_id ID of the created user.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 Created
 * {
 *   "user_id": 1
 * }
 *
 * @apiErrorExample {json} Validation-Error:
 * HTTP/1.1 400 Bad Request
 * {
 *   "error": {
 *     "message": "Invalid input",
 *     "status": 400
 *   }
 * }
 */

/**
 * @api {put} /users/:id Update a user
 * @apiName PutUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiBody {String} [name] Name of the user.
 * @apiBody {String} [username] Username of the user.
 * @apiBody {String} [email] Email address of the user.
 * @apiBody {String} [password] Password of the user.
 * @apiBody {String} [role] Role of the user.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "success"
 * }
 *
 * @apiErrorExample {json} Authorization-Error:
 * HTTP/1.1 403 Forbidden
 * {
 *   "error": {
 *     "message": "Not authorized.",
 *     "status": 403
 *   }
 * }
 */

/**
 * @api {delete} /users/:id Delete a user
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "success"
 * }
 *
 * @apiErrorExample {json} Authorization-Error:
 * HTTP/1.1 403 Forbidden
 * {
 *   "error": {
 *     "message": "Not authorized.",
 *     "status": 403
 *   }
 * }
 *
 * @apiErrorExample {json} Not-Found:
 * HTTP/1.1 404 Not Found
 * {
 *   "error": {
 *     "message": "User not found.",
 *     "status": 404
 *   }
 * }
 */
