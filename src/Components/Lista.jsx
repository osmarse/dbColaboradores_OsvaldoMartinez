import React, { useState } from 'react';
import { dataInicial } from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Lista = () => {
    const [data, setData] = useState(dataInicial)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [buscar, setBuscar] = useState("")
    const [contenido, setContenido] = useState(data)

    const buscarColaborador = (e) => {
        e.preventDefault()
        console.log(buscar)
        const resultado = contenido.filter((item) => {
            return item.nombre.toLowerCase() === buscar.toLowerCase()
        })

        console.log(resultado)
        console.log(contenido)
        setData(resultado)
    }

    const agregar = (e) => {
        e.preventDefault()
        setData([...data, { id: data.length + 1, nombre, correo }])
        setContenido([...data, { id: data.length + 1, nombre, correo }])
    }

    const renderColaboradores = () => {
        return data.map((tarea) => (
            <li key={tarea.nombre} onClick={() => console.log(tarea)}>
                {" "}
                {tarea.nombre} - {tarea.correo}{" "}
            </li>
        ));
    };


    return (
        <div className='contenedor'>
            <Form className="form-title">
                <Form.Control className="ps-2" size="" type="text" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)} />
                <Button className="m-auto d-flex mt-3" variant="secondary" onClick={buscarColaborador}>Buscar</Button>{' '}
            </Form>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="name" placeholder="Ingresar Nombre" onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Correo" onChange={(e) => setCorreo(e.target.value)} />
                </Form.Group>

                <Button variant="secondary" className="m-auto d-flex mt-3" type="submit" onClick={agregar}>
                    Agregar
                </Button>
            </Form>
            <div>
                <ul className="mt-3">{renderColaboradores()}</ul>
            </div>
        </div>
    )
}

export default Lista;