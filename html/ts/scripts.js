export { guardarDatosPaciente, aparecerManiobraReanimacion };

function guardarDatosPaciente() {
  const nombre_paciente = document.getElementById("nombre_paciente");
  console.log(nombre_paciente);
}

function aparecerManiobraReanimacion() {
  // JavaScript code to make HTML appear
  document
    .getElementById("showHtmlButton")
    .addEventListener("click", function () {
      // Create a new HTML element
      var newElement = document.createElement("p");

      // Set the content of the new element
      newElement.innerHTML = "This is HTML content added with JavaScript!";

      // Append the new element to a container
      document.getElementById("htmlContainer").appendChild(newElement);
    });
}
