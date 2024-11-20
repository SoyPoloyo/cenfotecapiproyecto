
import { Request, Response, NextFunction } from 'express';

export class routesMiddleware {

    static routeNotFound(req: Request, res: Response, next: NextFunction) {
        // Verificar si la ruta solicitada es una API
        if (req.path.startsWith('/api/')) {
            res.status(404).json({ message: 'API route not found' }); // Si es una API y no se encontró una ruta, devolver error 404
        } else {
            next(); // Si no es una API, podría ser una ruta de SPA
        }
    }

}