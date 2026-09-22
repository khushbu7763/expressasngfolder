/**
 * @api {get} /cats Get all cats
 * @apiName GetCats
 * @apiGroup Cat
 *
 * @apiSuccess {Object[]} cats List of cats.
 * @apiSuccess {Number} cats.cat_id Cat's unique ID.
 * @apiSuccess {String} cats.cat_name Name of the cat.
 * @apiSuccess {Number} cats.weight Weight of the cat.
 * @apiSuccess {Number} cats.owner Owner's user ID.
 * @apiSuccess {String} cats.filename Uploaded filename.
 * @apiSuccess {String} cats.birthdate Cat's birthdate.
 * @apiSuccess {String} cats.owner_name Name of the owner.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "cat_id": 1,
 *     "cat_name": "Milo",
 *     "weight": 4.5,
 *     "owner": 1,
 *     "filename": "cat.jpg",
 *     "birthdate": "2022-01-01",
 *     "owner_name": "Test User"
 *   }
 * ]
 */

/**
 * @api {get} /cats/:id Get cat by ID
 * @apiName GetCatById
 * @apiGroup Cat
 *
 * @apiParam {Number} id Cat's unique ID.
 *
 * @apiSuccess {Number} cat_id Cat's unique ID.
 * @apiSuccess {String} cat_name Name of the cat.
 * @apiSuccess {Number} weight Weight of the cat.
 * @apiSuccess {Number} owner Owner's user ID.
 * @apiSuccess {String} filename Uploaded filename.
 * @apiSuccess {String} birthdate Cat's birthdate.
 *
 * @apiErrorExample {json} Not-Found:
 * HTTP/1.1 404 Not Found
 * {
 *   "error": {
 *     "message": "Cat not found.",
 *     "status": 404
 *   }
 * }
 */

/**
 * @api {get} /cats/user/:id Get cats by user ID
 * @apiName GetCatsByUserId
 * @apiGroup Cat
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {Object[]} cats List of cats owned by the user.
 */

/**
 * @api {post} /cats Create a new cat
 * @apiName PostCat
 * @apiGroup Cat
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiBody {String} cat_name Cat name, 3-50 characters.
 * @apiBody {Number} weight Cat's weight.
 * @apiBody {Number} owner Owner's user ID.
 * @apiBody {Date} birthdate Cat's birthdate.
 * @apiBody {File} cat Cat image or video file, maximum 10 MB.
 *
 * @apiSuccess {Number} cat_id ID of the created cat.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 Created
 * {
 *   "cat_id": 1
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
 * @api {put} /cats/:id Update a cat
 * @apiName PutCat
 * @apiGroup Cat
 *
 * @apiParam {Number} id Cat's unique ID.
 *
 * @apiHeader {String} Authorization Bearer token.
 *
 * @apiBody {String} [cat_name] Name of the cat.
 * @apiBody {Number} [weight] Cat's weight.
 * @apiBody {Number} [owner] Owner's user ID.
 * @apiBody {Date} [birthdate] Cat's birthdate.
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
 * @api {delete} /cats/:id Delete a cat
 * @apiName DeleteCat
 * @apiGroup Cat
 *
 * @apiParam {Number} id Cat's unique ID.
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
 */
