import { PersonajesServices } from './PersonajesServices.js';
import express from "express";
import cors from "cors";

const app = express();
const port = 3000; 

app.use(cors());
app.use(express.json());


app.get('/Personaje',async(req,res)=>{
    const Personaje = await PizzaServices.getAll()
    res.status(200).send(Personaje)
})

app.get('/Personaje/:Id',async(req,res)=>{
    const Personaje = await PersonajesServices.getById(req.params.Id)
    res.status(200).send(Personaje)
})
app.post('/Personaje',async(req,res)=>{
    try{
        await PersonajesServices.insert(req.body)
        res.status(200).json({message:'Personaje creado'});
    }   catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insertar'});
    }
})

app.put('/Personaje',async(req,res)=>{
    try{
        await PersonajesServices.update(req.body)
        res.status(200).json({message:'Personaje actualizado'});
    }   catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el update'});
    }
})

app.delete('/Personaje/:Id',async(req,res)=>{
    try{
        await PersonajesServices.deleteById(req.params.Id)
        res.status(200).json({message:'Personaje eliminado'});
    }   catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el delete'});
    }
})

app.get('/Pelicula',async(req,res)=>{
    const Pelicula = await PeliculaServices.getAll()
    res.status(200).send(Pelicula)
})

app.get('/Pelicula/:Id',async(req,res)=>{
    const Pelicula = await PeliculaServices.getById(req.params.Id)
    res.status(200).send(Pelicula)
})

app.post('/Pelicula',async(req,res)=>{
    try{
        await PeliculaServices.insert(req.body)
        res.status(200).json({message:'Pelicula creada'});
    }   catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insertar'});
    }
})

app.put('/Pelicula',async(req,res)=>{
    try{
        await PeliculaServices.update(req.body)
        res.status(200).json({message:'Pelicula actualizada'});
    }   catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el update'});  
        
    }
})

app.delete('/Pelicula/:Id',async(req,res)=>{
    try{
        await PeliculaServices.deleteById(req.params.Id)
        res.status(200).json({message:'Pelicula eliminada'});
    }   catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el delete'});
    }
})


app.listen(port, () =>
{
    console.log("escucho");
}
)