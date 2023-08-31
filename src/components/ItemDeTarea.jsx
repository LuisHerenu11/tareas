import React from 'react';

const ItemDeTarea = (props) => {
    return (
        <li style={{ display: 'inherit'}}>
            {props.nombre}
        </li>      
    );
}

export default ItemDeTarea;