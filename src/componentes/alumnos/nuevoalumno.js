import React from 'react';
import { Fragment } from 'react';

function NuevoAlumno(){
    return(
        <Fragment>
        <h2>Nuevo Alumno</h2>

            <form action="/clientes" method="POST">
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre Alumno" name="nombre"/>
                </div>

                <div class="campo">
                    <label>Apellido:</label>
                    <input type="text" placeholder="Apellido Alumno" name="apellido"/>
                </div>
            
                <div class="campo">
                    <label>Carrera:</label>
                    <select>
                        <option value="">Ing Software</option>
                    </select>
                </div>

                <div class="campo">
                    <label>Email:</label>
                    <input type="email" placeholder="Email Alumno" name="email"/>
                </div>

                <div class="campo">
                    <label>Edad:</label>
                    <input type="email" placeholder="Edad Alumno" name="telefono"/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Alumno"/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoAlumno