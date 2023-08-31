//Este será el componente principal de la aplicación, y se encargará de gestionar la vista, las tareas y agregar nuevas tareas.
import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaDeTareas from './ListaDeTareas';


function App() {
    const [vista, setVista] = useState('lista');
    const [tareas, setTareas] = useState([]);
    function addTarea(nombre) {
        setTareas([...tareas, { nombre }]);
    }
    function cambiarVista() {
        setVista(vista === 'lista' ? 'cuadricula' : 'lista');
    }
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <button onClick={cambiarVista}>Cambiar Vista</button>
            <TareaForm addTarea={addTarea} />
            <ListaDeTareas tareas={tareas} vista={vista} />
        </div>
    );
}

export default App;