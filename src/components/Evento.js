function Evento(){
    function meuEvento(){
        alert("Clicou!")
    }
    return (
        <div>
            <h1>Testando eventos</h1>
        <p>Clique para disparar um evento</p>
        <button onClick={meuEvento}>Clicar</button>
        </div>
    )
}

export default Evento