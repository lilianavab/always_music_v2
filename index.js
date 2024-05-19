import express from 'express';
import { 
    nuevoAlumno, 
    consultarAlumnos,
    consultarAlumnoRut,
    actualizarAlumno,
    eliminarAlumno,
} from './consultas.js'
const app = express();

// Crear un Meddleware para recibir un JSON en el backend
app.use(express.json());

app.post('/agregar/alumno', async (req, res) => {
    try {
        console.log('Salida del req.body de POST /agregar/alumno', req.body);
        const response = await nuevoAlumno(req.body.alumno);
        res.status(200).send(response);
    } catch (error) {
        console.error('Error al agregar alumno:', error);
        res.status(400).send(error.message);
    }
});

app.get('/alumnos', async (req, res) => {
    try {
        const alumnos = await consultarAlumnos();
        res.status(200).send(alumnos);

    } catch (error) {
        console.error('Error al obtener alumnos:', error);
        res.status(500).send('Error al obtener alumnos');
    }
});

app.get('/alumno/:rut', async (req,res) => {
    try {
        const rut = req.params.rut
        const response = await consultarAlumnoRut(rut)
        if(response.length > 0) {
        res.status(200).send(response)
    } else {
        res.status(404).send('Estudiante no encontrado')
    }

    } catch (error) {
        console.error('Error al obtener alumno:', error);
        res.status(400).send(response)
    }
    
})

app.put('/editar/:rut', async(req,res) => {
    try {
        const rut = req.params.rut;
        const { nombre, curso, nivel } = req.body;
        const response = await actualizarAlumno({ rut, nombre, curso, nivel });
        res.status(200).send(response);

    } catch (error) {
        console.error('Error al actualizar alumno:', error);
        res.status(400).send(response);
    }
});

app.delete('/eliminar/:rut', async(req,res) => {
try {
    const rut = req.params.rut
    const response = await eliminarAlumno(rut)    
    res.status(200).send(response)

} catch (error) {
    console.error('Error al obtener alumno:', error);
    res.status(400).send(response)
}

})

app.listen(3000, () => console.log('Servidor UP port 3000'))