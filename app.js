(function () {
    const amigos = [];
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
  
    document.querySelector(".button-add").addEventListener("click", function () {
      const nombreAmigo = inputAmigo.value.trim();
  
      if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
      }
  
      if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
      }
  
      amigos.push(nombreAmigo);
      inputAmigo.value = "";
      actualizarListaAmigos();
    });
  
    document.querySelector(".button-draw").addEventListener("click", function () {
      if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega nombres primero.");
        return;
      }
  
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indiceAleatorio];
      resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    });
  
    function actualizarListaAmigos() {
      listaAmigos.innerHTML = "";
      amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
      });
    }
  })();
