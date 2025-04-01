document.addEventListener("DOMContentLoaded", function () {
  const modoBoton = document.getElementById("toggleLightMode"); 
  const body = document.body; 

  // Comprobar si el usuario ya tiene activado el modo claro
  if (localStorage.getItem("modo") === "claro") {
      body.classList.add("light-mode");
      modoBoton.textContent = "🌙 Modo Oscuro";
  }

  modoBoton.addEventListener("click", function () {
      if (body.classList.contains("light-mode")) {
          // Cambiar a modo oscuro
          body.classList.remove("light-mode");
          localStorage.setItem("modo", "oscuro"); // Guardar la preferencia
          modoBoton.textContent = "☀️ Modo Claro";
      } else {
          // Cambiar a modo claro
          body.classList.add("light-mode");
          localStorage.setItem("modo", "claro"); 
          modoBoton.textContent = "🌙 Modo Oscuro";
      }
  });
});


// Documentacion utilizada (entre otros): https://lenguajejs.com/javascript/cheatsheets/