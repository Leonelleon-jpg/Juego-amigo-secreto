// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function agregarAmigo() {
    
    let name = document.getElementById("amigo").value;
    
    if (name === ""){
        alert("Por favor ingresa un nombre");
    }
    else {
        friendsList.push(name);
        document.getElementById("amigo").value = "";
        console.log(name);
        listaAmigos(friendsList);
    }
}

function listaAmigos(friendsList){
    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    for (let i = 0; i < friendsList.length; i++) {
        document.getElementById("listaAmigos").value = "";
        const li = document.createElement('li'); // Crear elemento <li>
        li.textContent = friendsList[i];          // Asignar texto
        list.appendChild(li);                  // Agregar <li> a la lista
    }
}

function sortearAmigo(){
    if(friendsList.length == 0){
        alert("Debes tener mínimo un amigo para sortear el nombre");
    }
    else{
        let idxFriend = Math.floor(Math.random() * friendsList.length) + 1;
        let list = document.getElementById("listaAmigos");
        list.innerHTML = "";
        let result = document.getElementById("resultado");
        result.innerHTML = "El amigo sorteado es: " + friendsList[idxFriend];
    }
}