import {config} from './dbconfig.js';
import sql from 'mssql';

class Personaje{

    static getAll = async () =>{
        console.log('Estoy en: PersonajesServices.getAll()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .query('SELECT * FROM Personaje');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }
    static getById = async (Id) =>{
        let returnEntity = null;
        console.log('Estoy en: PersonajesServices.GetById(Id)',Id);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pId", sql.Int, Id)
                                    .query('SELECT * FROM Personaje WHERE Id = @pId');
            returnEntity = result.recordsets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
    static insert = async (Personaje) =>{
        const{Imagen,Nombre,Edad,Peso,Historia} = Personaje;
        console.log("name: " ,Nombre)
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
        .input('pImagen',Imagen)
        .input('pNombre',Nombre)
        .input('pEdad',Edad)
        .input('pPeso',Peso)
        .input('pHistoria',Historia)
        .query('INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia) VALUES (@pImagen,@pNombre, @pEdad, @pPeso, @pHistoria)')
    }

    static update = async (Personaje) =>{
        let rowsAffected = 0;
        const{Id,Imagen,Nombre,Edad,Peso,Historia} = Personaje;
        console.log("name: " ,Nombre)
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pId',Id)
                                    .input('pImagen',Imagen)
                                    .input('pNombre',Nombre)
                                    .input('pEdad',Edad)
                                    .input('pPeso',Peso)
                                    .input('pHistoria',Historia)
                                    .query('UPDATE Personaje set Imagen = @pImagen, Nombre = @pNombre, Edad = @pEdad, Peso = @pPeso, Historia = @pHistoria WHERE Id=@pId');
            rowsAffected = result.rowsAffected;
        }
        catch(error){
            console.log(error);
        }
        return rowsAffected;
    }

    static deleteById = async (Id) =>{
        let rowsAffected = 0;
        console.log('Estoy en: PersonajesServices.deleteById(Id)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pId", sql.Int, Id)
                                    .query('DELETE FROM Personaje WHERE Id = @pId');
            rowsAffected = result.rowsAffected;
        }
        catch(error){
            console.log(error);
        }
        return rowsAffected;
    }

    static listadoPersonaje = async () =>{
        console.log('Estoy en: PersonajesServices.listadoPersonaje()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .query('SELECT Imagen, Nombre, Id FROM Personaje');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }

    static detallePersonaje = async () =>{
        console.log('Estoy en: PersonajesServices.detallePersonaje()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .query('SELECT * FROM Personaje INNER JOIN PersonajeXPelicula PXP on PXP.fkPersonaje = Personaje.Id  ');
            return result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
    }

    static getByNombre = async (Nombre) =>{
        let returnEntity = null;
        console.log('Estoy en: PersonajesServices.GetByNombre(Nombre)',Nombre);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pNombre", sql.Int, Nombre)
                                    .query('SELECT Nombre FROM Personaje WHERE Nombre = @pNombre');
            returnEntity = result.recordsets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }

    static getByEdad = async (Edad) =>{
        let returnEntity = null;
        console.log('Estoy en: PersonajesServices.GetByEdad(Edad)',Edad);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pEdad", sql.Int, Edad)
                                    .query('SELECT Edad FROM Personaje WHERE Edad = @pEdad');
            returnEntity = result.recordsets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }

    static getByPeliculaXPersonaje = async () =>{
        let returnEntity = null;
        console.log('Estoy en: PersonajesServices.getByPeliculaXPersonaje',Edad);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pEdad", sql.Int, Edad)
                                    .query('SELECT Edad FROM Personaje WHERE Edad = @pEdad');
            returnEntity = result.recordsets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
}
export default Personaje