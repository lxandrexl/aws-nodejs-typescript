import {Request, Response} from "express";
import {PeliculaBusinessController} from "../businessControllers/pelicula.businessController";
import {PeliculaEsDTO} from "../dto/pelicula_es.dto";

export class PeliculaRouteController {
    private peliculaBusinessController: PeliculaBusinessController;

    constructor(peliculaBusinessController: PeliculaBusinessController = new PeliculaBusinessController()) {
        this.peliculaBusinessController = peliculaBusinessController;
    }

    public addPelicula = async (_req: Request, res: Response) => {
        try {
            const pelicula: PeliculaEsDTO = _req.body;
            const newPelicula             = await this.peliculaBusinessController.createNewPelicula(pelicula);
            return res.status(200).send(newPelicula);
        } catch (error) {
            console.log("Error creando nueva pelicula.", error);
            return res.status(400).send({message: "Error creando nueva pelicula: " + error});
        }
    }

    public getPeliculaById = async (_req: Request, res: Response) => {
        const peliculaId: number = _req.params.peliculaid;
        try {
            const pelicula = await this.peliculaBusinessController.getPeliculaById(peliculaId);
            return res.status(200).send(pelicula);
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    public getPeliculas = async (_req: Request, res: Response) => {
        try {
            const peliculas = await this.peliculaBusinessController.getPeliculas();
            return res.status(200).send(peliculas);
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }
}
