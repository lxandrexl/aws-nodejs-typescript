import fetch from 'node-fetch';
import {Pelicula} from "../models/Pelicula";
import {PeliculaDTO} from "../dto/pelicula.dto";
import {PeliculaEsDTO} from '../dto/pelicula_es.dto';
import App from "../../../app";

export class PeliculaRepository {
    private swapiUrl: string  = 'https://swapi.py4e.com/api';
    private tableName: string = process.env.PELICULA_TABLE;

    public async addPeliculaToDb(pelicula: PeliculaEsDTO) {
        try {
            const params = {
                TableName: this.tableName,
                Item: pelicula,
                ReturnValue: 'ALL_OLD'
            };
            await App.retrieveDynamoDbClient().put(params).promise();

            return 'Pelicula guardada exitosamente.'
        } catch (error) {
            return 'No se pudo guardar la pelicula, debido al error:' + error;
        }
    }

    public async getPeliculaById(peliculaId: number): Promise<Pelicula> {
        const result: any        = await fetch(`${this.swapiUrl}/films/${peliculaId}/`);
        const jsonObj: any       = await result.json();
        const pelicula: Pelicula = new Pelicula(jsonObj);

        return pelicula;
    }

    public async getPeliculas(): Promise<Pelicula[]> {
        const result: any           = await fetch(`${this.swapiUrl}/films`);
        const jsonObj: any          = await result.json();
        const peliculas: Pelicula[] = jsonObj.results.map((pelicula: PeliculaDTO)=> new Pelicula(pelicula));

        return peliculas;
    }
}
