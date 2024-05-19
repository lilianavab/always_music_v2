import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

//Esto es para que funcione la ruta el .env
dotenv.config();

const config = {
    // Debemos ingresar los datos de conexión 
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

const pool = new Pool(config);

//Agregar un nuevo alumno.
export const nuevoAlumno = async (alumnos) => {
    let client;
    try {
        client = await pool.connect();
        for (const alumno of alumnos) {
            const { rut, nombre, curso, nivel } = alumno;
            const consulta = {
                text: 'INSERT INTO alumno(rut, nombre, curso, nivel) VALUES($1, $2, $3, $4) RETURNING *',
                values: [rut, nombre, curso, nivel]
            };
            console.log('Consulta SQL:', consulta.text, 'Valores:', consulta.values);
            const result = await client.query(consulta);
            console.log('Alumno agregado correctamente:', result.rows);
        }
    } catch (error) {
        console.error('Error durante la conexión o la consulta:', error.stack);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
};

//Consultar los alumnos registrados.
export const consultarAlumnos= async () => {
    let client; 
    try {
        const consulta = {
            text: 'SELECT * FROM alumno',
            rowMode: 'array' 
        };
        client = await pool.connect();
        const result = await client.query(consulta); 
        return result.rows;
    } catch (error) {
        console.error('Error durante la conexión o la consulta:', error.stack);  
    } finally {
        if (client) {
        client.release();
        }
    }
};

//Consultar alumno por rut.
export const consultarAlumnoRut = async (rut) => {
    let client; 
    try {
        const consulta = {
            text: 'SELECT * FROM alumno WHERE rut = $1',
            values: [rut]
        };
        client = await pool.connect();
        const result = await client.query(consulta); 
        return result.rows;
    } catch (error) {
        console.error('Error durante la conexión o la consulta:', error.stack); 
    } finally {
        if (client) {
        client.release();
        }
    }
};

//Editar datos del alumno 
export const actualizarAlumno = async (alumno) => {
    console.log('Salida de estudiante -->', alumno);
    let client;
    try {
        const { rut, nombre, curso, nivel } = alumno; // Asegúrate de que 'rut' sea el primer valor
        const consulta = {
            text: 'UPDATE alumno SET nombre = $2, curso = $3, nivel = $4 WHERE rut = $1 RETURNING *',
            values: [rut, nombre, curso, nivel]
        };
        console.log('Consulta SQL:', consulta.text, 'Valores:', consulta.values);
        client = await pool.connect();
        const result = await client.query(consulta);
        console.log('Información del alumno actualizada correctamente:', result.rows);
        //return result.rows;
    } catch (error) {
        console.error('Error durante la conexión o la consulta:', error.stack);
    } finally {
        if (client) {
            client.release();
        }
    }
};

//Eliminar el registro de alumno.
export const eliminarAlumno = async (rut) => {
    let client; 
    try {
        const consulta = {
            text: 'DELETE FROM alumno WHERE rut = $1',
            values: [rut]
        };
        client = await pool.connect();
        const result = await client.query(consulta); 
        console.log('Alumno eliminado correctamente.');
    } catch (error) {
        console.error('Error al eliminar Alumno:', error.stack); 
        return [];
    } finally {
        if (client) {
            client.release();
        }
    }
};