import {config} from './dbconfig.js';
import sql from 'mssql';

class Pelicula{
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
        .query('INSERT INTO Pelicula (Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@pImagen,@pTitulo, @pFechaDeCreacion, @pCalificacion)')
    }

    static update = async (Pelicula) =>{
        let rowsAffected = 0;
        const{Id,Imagen,Titulo,FechaDeCreacion,Calificacion} = Pelicula;
        console.log("name: " ,Titulo)
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pId", sql.Int,Id)
                                    .input('pImagen',Imagen)
                                    .input('pTitulo',Titulo)
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

    static listadoPelicula = async () =>{
        console.log('Estoy en: PeliculaSerivices.listadoPelicula()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .query('SELECT Id, Imagen, Titulo, FechaDeCreacion FROM Pelicula');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }

    static detallePelicula = async (Id) =>{
        console.log('Estoy en: PeliculaSerivices.detallePelicula()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pId", sql.Int, Id)
                                    .query('SELECT Pelicula.*,P.Nombre as NombreDelActor FROM Pelicula INNER JOIN PersonajeXPelicula PXP on Pelicula.Id = PXP.fkPelicula INNER JOIN Personaje P on PXP.fkPersonaje = P.Id  WHERE PXP.fkPersonaje = @pId  ');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }
    static getByNombreAsc = async (Titulo) =>{
        let returnEntity = null;
        console.log('Estoy en: PeliculaServices.GetByNombreASC(Nombre)',Titulo);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pNombre", sql.VarChar,Titulo)
                                    .query("SELECT Titulo FROM Pelicula WHERE Titulo like '%'+@pNombre+'%' order by FechaDeCreacion ASC");
            returnEntity = result.recordsets[0][0];
           
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
    static getByNombreDesc = async (Titulo) =>{
        let returnEntity = null;
        console.log('Estoy en: PeliculaServices.GetByNombreDesc(Nombre)',Titulo);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pNombre", sql.VarChar, Titulo)
                                    .query("SELECT Titulo FROM Pelicula WHERE Titulo like '%'+@pNombre+'%' order by FechaDeCreacion DESC");
            returnEntity = result.recordsets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
}
export default Pelicula