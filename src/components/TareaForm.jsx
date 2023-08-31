// Este componente representará un formulario para crear una tarea.
// Contendrá validación y manejo de errores.
// Importamos React y la funcionalidad de Component

import React, {useState} from 'react';

function TareaForm(props) {
    const [nombre, setNombre] = useState('');
    const [error, setError] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        if (nombre === '') {
            setError('El nombre de la tarea no puede estar vacío.');
            return;
        }
        props.addTarea(nombre);
        setNombre('');
        setError('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre de la tarea"/>
            <button type="submit">Agregar Tarea</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default TareaForm;