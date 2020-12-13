/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  let message = req.query.message || req.body.message || 'Hello from NUH Backend.';
  res.status(200).send(message);
};
