function TodoItem(props){
    return(
        <li>
        <span>V</span> {/* V como el botón de item completado */}
        <p>{props.text}</p>
        <span>X</span> {/* X como el botón de item eliminado */}
        </li>
    )
}

export { TodoItem }