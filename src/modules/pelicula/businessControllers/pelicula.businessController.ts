import { PeliculaEsDTO } from "../dto/pelicula_es.dto";
import {Pelicula} from "../models/Pelicula";
import {PeliculaRepository} from "../repositories/pelicula.repository";

export class PeliculaBusinessController {
    private peliculaRepository: PeliculaRepository;

    constructor(peliculaRepository: PeliculaRepository = new PeliculaRepository()) {
        this.peliculaRepository = peliculaRepository;
    }
    public async createNewPelicula(pelicula: PeliculaEsDTO): Promise<Pelicula> {
        this.peliculaRepository.addPeliculaToDb(pelicula);
        return pelicula;
    }

    public async getPeliculaById(peliculaId: number): Promise<Pelicula> {
        return this.peliculaRepository.getPeliculaById(peliculaId);
    }

    public async getPeliculas(): Promise<Pelicula[]> {
        return this.peliculaRepository.getPeliculas();
    }

}
