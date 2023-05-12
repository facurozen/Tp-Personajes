import {config} from './dbconfig.js';
import sql from 'mssql';

export class Pelicula{
    static getAll = async () =>{
        let returnEntity = null;
        console.log('Estoy en: PeliculaServices.getAll()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .query('SELECT * FROM Pelicula');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }
    static getById = async (Id) =>{
        let returnEntity = null;
        console.log('Estoy en:  PeliculaServices.GetById(Id)',Id);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pId", sql.Int, Id)
                                    .query('SELECT * FROM Pelicula WHERE Id = @pId');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }
    static insert = async (Pelicula) =>{
        const{Imagen,Titulo,FechaDeCreacion,Calificacion} = Pelicula;
        console.log("Titulo " ,Titulo)
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
        .input('pImagen',Imagen)
        .input('pTitulo',Titulo)
        .input('pFechaDeCreacion',FechaDeCreacion)
        .input('pCalificacion',Calificacion)
        .query('INSERT INTO Personaje (Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@pImagen,@pTitulo, @pFechaDeCreacion, @pCalificacion)')
    }

    static update = async (Personaje) =>{
        let rowsAffected = 0;
        const{Id,Imagen,Titulo,FechaDeCreacion,Calificacion} = Pelicula;
        console.log("name: " ,Titulo)
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pId',Id)
                                    .input('pImagen',Imagen)
                                    .input('pNombre',Titulo)
                                    .input('pFechaDeCreacion',FechaDeCreacion)
                                    .input('pCalificacion',Calificacion)
                                    .query('UPDATE Pelicula set Imagen = @pImagen, Titulo = @pTitulo, FechaDeCreacion = @pFechaDeCreacion, Calificacion = @pCalificacion WHERE Id=@pId');
            rowsAffected = result.rowsAffected;
        }
        catch(error){
            console.log(error);
        }
        return rowsAffected;
    }

    static deleteById = async (Id) =>{
        let rowsAffected = 0;
        console.log('Estoy en: PeliculaServices.deleteById(Id)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pId", sql.Int, Id)
                                    .query('DELETE FROM Pelicula WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        }
        catch(error){
            console.log(error);
        }
        return rowsAffected;
    }
}