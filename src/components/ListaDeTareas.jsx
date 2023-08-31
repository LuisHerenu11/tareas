// Este componente representará la lista completa de tareas.
// Se modificará para manejar tanto la vista en lista como en cuadrícula.
import ItemDeTarea from './ItemDeTarea';

function ListaDeTareas(props) {
    return (
        <div style={{ display: props.vista === 'cuadricula' ? 'inline' : 'block' }}> 
            {props.tareas.map((tarea, index) => (
                <ItemDeTarea key={index} nombre={tarea.nombre}/>
            ))}
        </div>
    );
}

export default ListaDeTareas;
