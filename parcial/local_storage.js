const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_todo");

const guardarTarea = () => {
    const tarea = {
        input_tarea: input.value
    };

    if(localStorage.getItem("tareas") === null){
        let arreglo = [];
        arreglo.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(arreglo));
    }
    else{
        let obtener = JSON.parse(localStorage.getItem("tareas"));
        obtener.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(obtener));
    }
    mostrarTareas();
    input.value = "";

}

const mostrarTareas = () => {
    let tareas_obtenidas = JSON.parse(localStorage.getItem("tareas"));
    container_todo.innerHTML = "";
    for (let i = 0; i < tareas_obtenidas.length; i++) {
        let input = tareas_obtenidas[i].input_tarea;
        container_todo.innerHTML += ` 
        <div class="container_list">
            <div class="container_list-1">
                <input type="checkbox" class="casilla">
                <p class="actividad">${input}</p>
            </div>
            <div class="container_list-btn">
                <button class="btn-eliminar" onclick="eliminarTarea('${input}')">
                    <img src="assets/trash.svg" alt="eliminar" with="20px" height="20px">
                </button>
            </div>
        </div> 
        `
       /* `
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    ${title}
                </div>
            </div>
            
            <div class="card-body">
                ${input}
            </div>
            <div class="card-footer">
                ${footer}
            </div>
        </div>
        `*/
        ;
    }
}

const eliminarTarea = (tarea) => {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    for (let i = 0; i < tareas.length; i++) {
        if(tarea === tareas[i].input_tarea){
            tareas.splice(i,1);
        }
    }
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
}

btn_add.addEventListener("click", () => {
    if(input.value === "" || input.value.trim() === ""){
        window.alert("Input vacío, ingrese datos.");
    }
    else{
        guardarTarea();
    }
})

