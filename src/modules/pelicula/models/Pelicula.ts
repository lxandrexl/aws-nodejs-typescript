import {PeliculaDTO} from '../dto/pelicula.dto';

export class Pelicula {
    public readonly titulo           : string;
    public readonly episodio_id      : string;
    public readonly rastreo_apertura : string;
    public readonly director         : string;
    public readonly productor        : string;
    public readonly fecha_lanzamiento: string;
    public readonly personajes       : string;
    public readonly planetas         : string;
    public readonly naves_estelares  : string;
    public readonly vehiculos        : string;
    public readonly especies         : string;
    public readonly creado           : string;
    public readonly editado          : string;
    public readonly url              : string;

    constructor(object: PeliculaDTO) {
        this.titulo            = object.title;
        this.episodio_id       = object.episode_id;
        this.rastreo_apertura  = object.opening_crawl;
        this.director          = object.director;
        this.productor         = object.producer;
        this.fecha_lanzamiento = object.release_date;
        this.personajes        = object.characters;
        this.planetas          = object.planets;
        this.naves_estelares   = object.starships;
        this.vehiculos         = object.vehicles;
        this.especies          = object.species;
        this.creado            = object.created;
        this.editado           = object.edited;
        this.url               = object.url;
    }
}
