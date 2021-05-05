import request from 'supertest';
import App from './../../../app';
import {PeliculaEsDTO} from './../dto/pelicula_es.dto';

describe("Endpoints API", () => {
    it("GET: Listado de peliculas", () => {
        request(App.app)
            .get("/pelicula")
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, _res) =>{
                if (err) throw err;
            });
    });

    it("GET: Listado de pelicula por ID", () => {
        request(App.app)
            .get("/pelicula/5")
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, _res) =>{
                if (err) throw err;
            });
    })

    it("POST: Crear pelicula", (done) => {
        const pelicula: PeliculaEsDTO = {
            peliculaId: "001",
            titulo: "La guerra de los munditos",
            episodio_id: "100",
            rastreo_apertura: "123",
            director: "Jorge Lucas",
            productor: "No tengo idea",
            fecha_lanzamiento: "2050",
            personajes: "Muchos",
            planetas: "Pocos",
            naves_estelares: "Muchas",
            vehiculos: "Uf",
            especies: "Muchas",
            creado: "2021",
            editado: "2022",
            url: ":D"
        }

        request(App.app)
            .post("/pelicula")
            .send(pelicula)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, _res) {
                if (err) return done(err);
                return done();
            });
    })
})