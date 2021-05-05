
import {Express} from "express";
import {PeliculaRouteController} from "./routeControllers/pelicula.routeController";

export class Routes {
    private routeController: PeliculaRouteController;

    constructor(app: Express, routeController: PeliculaRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/pelicula")
            .post(this.routeController.addPelicula);
        app.route("/pelicula/:peliculaid")
            .get(this.routeController.getPeliculaById);
        app.route("/pelicula")
            .get(this.routeController.getPeliculas);
    }
}
