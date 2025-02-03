export function errorMiddleware(err, req, res, next) {
  if (err.name === 'SyntaxError') {
    console.error(err.message);
    res.status(500).json({ error: 'Invalid JSON!', message: err.message });
  }

  if (err) {
    res.status(500).json({ error: 'Random Error!', message: err.message });
  }

  next();
}
