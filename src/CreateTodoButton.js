import './CreateTodoButton.css'

function CreateTodoButton() {
    return <button className="CreateTodoButton"
        onClick={(event) => {
            console.log('Nuevo todo');
            console.log(event);
        }}>+</button>
}

export { CreateTodoButton }
