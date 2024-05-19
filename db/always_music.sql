--Conectar al psql con el usuario 
psql -U postgres

-- Se crea la base de datos llamada "alumno"
CREATE DATABASE alumno;

--Conectarse a la nueva base de dato
\c alumno

-- CREACION de la Tabla alumno
CREATE TABLE alumno (
    rut VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    nivel VARCHAR(50) NOT NULL
);

-- CONSULTAS DE LA TABLA
SELECT * FROM alumno;

-- SE INSERTA 10 Registros de alumnos
INSERT INTO alumno (rut, nombre, curso, nivel) VALUES
('17475865-6', 'Sofia Ontiveros', 'Fundamentos de Teoria Musical', 'basico'),
('15487934-3', 'Fernando Aguilera', 'Introduccion a la Guitarra Acustica', 'intermedio'),
('26789145-9', 'Sahily Arias', 'Tecnica y Practica del Piano', 'basico'),
('20458741-3', 'Maria Espinoza', 'Historia de la Musica Clasica', 'avanzado'),
('23369456-3', 'Juan Velasquez', 'Produccion Musical', 'basico'),
('22456258-9', 'Alessandra Cruz', 'Composicion y Arreglo Musical', 'intermedio'),
('25456789-9', 'Cristofer Martinez', 'Tecnicas de Canto y Vocalizacion', 'avanzado'),
('26458478-9', 'Claritza Rivero', 'Improvisacion en Jazz', 'avanzado'),
('19597455-6', 'Diego Ruiz', 'Introduccion a la Musica Electronica', 'intermedio'),
('24158234-6', 'Brenda Martinez', 'Interpretacion de Partituras', 'basico');


--agregar a la tabla un solo alumno
{
  "rut": "27852159-3",
  "nombre": "Josue Acosta",
  "curso": "Tecnologia Musical",
  "nivel": "avanzado"
}

--agregar a la tabla dos alumnos
[{
  "rut": "26753159-9",
  "nombre": "Sinais Camacaro",
  "curso": "Instrumental",
  "nivel": "avanzado"
},
{
  "rut": "23456675-6",
  "nombre": "Angel Alvarez",
  "curso": "Introduccion a la Musica Electronica",
  "nivel": "avanzado"
}]

--agregar a la tabla un listado de alumnos

{"alumno":[
    {
        "rut": "17475865-6",
        "nombre": "Sofia Ontiveros",
        "curso": "Fundamentos de Teoria Musical",
        "nivel": "basico"
    },
    {
        "rut": "15487934-3",
        "nombre": "Fernando Aguilera",
        "curso": "Introduccion a la Guitarra Acustica",
        "nivel": "intermedio"
    },
    {
        "rut": "26789145-9",
        "nombre": "Sahily Arias",
        "curso": "Tecnica y Practica del Piano",
        "nivel": "basico"
    },
    {
        "rut": "20458741-3",
        "nombre": "Maria Espinoza",
        "curso": "Historia de la Musica Clasica",
        "nivel": "avanzado"
    },
    {
        "rut": "23369456-3",
        "nombre": "Juan Velasquez",
        "curso": "Produccion Musical",
        "nivel": "basico"
    },
    {
        "rut": "22456258-9",
        "nombre": "Alessandra Cruz",
        "curso": "Composicion y Arreglo Musical",
        "nivel": "intermedio"
    },
    {
        "rut": "25456789-9",
        "nombre": "Cristofer Martinez",
        "curso": "Tecnicas de Canto y Vocalizacion",
        "nivel": "avanzado"
    },
    {
        "rut": "26458478-9",
        "nombre": "Claritza Rivero",
        "curso": "Improvisacion en Jazz",
        "nivel": "avanzado"
    },
    {
        "rut": "19597455-6",
        "nombre": "Diego Ruiz",
        "curso": "Introduccion a la Musica Electronica",
        "nivel": "intermedio"
    },
    {
        "rut": "24158234-6",
        "nombre": "Brenda Martinez",
        "curso": "Interpretacion de Partituras",
        "nivel": "basico"
    }
]
}






