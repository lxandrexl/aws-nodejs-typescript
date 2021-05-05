import {Express} from "express";
import {PeliculaRouteController} from "./routeControllers/pelicula.routeController";
import {Routes} from "./routes";

export class PeliculaModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new PeliculaRouteController());
    }
}
