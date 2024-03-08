// lib/init-middleware.js

import Cors from 'cors';

// Función de inicialización del middleware CORS
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Exporta la función de inicialización del middleware CORS
export default initMiddleware;
