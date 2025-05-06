const barman = {
    nombre: "Carlos Pérez",
    email: "carlos@example.com",
    fechaNacimiento: "1990-05-10",
    celular: "3001234567",
    genero: "hombre" 
  };

  const barmanm= {
    nombre: "carolina",
    email: "carolina@gmail.com",
    fechaNacimiento: "1990-12-12",
    celular: "3331111110",
    genero: "mujer" 
  };
  
  function mostrarSeccion(id) {
    document.querySelectorAll('.contenido').forEach(section => {
      section.style.display = section.id === id ? 'block' : 'none';
    });
  
    if (id === "cocteles") {
      cargarCocteles();
    }
  }
  
 
  document.getElementById('nombre-barman').innerText = barman.nombre;
  document.getElementById('email').innerHTML = `<strong>Email:</strong> ${barman.email}`;
  document.getElementById('fecha').innerHTML = `<strong>Fecha Nacimiento:</strong> ${barman.fechaNacimiento}`;
  document.getElementById('celular').innerHTML = `<strong>Celular:</strong> ${barman.celular}`;
  document.getElementById('barman-imagen').src = barman.genero === "mujer" ? "mujer.png" : "hombre.png";

  document.getElementById('nombre-barman').innerText = barmanm.nombre;
  document.getElementById('email').innerHTML = `<strong>Email:</strong> ${barmanm.email}`;
  document.getElementById('fecha').innerHTML = `<strong>Fecha Nacimiento:</strong> ${barmanm.fechaNacimiento}`;
  document.getElementById('celular').innerHTML = `<strong>Celular:</strong> ${barmanm.celular}`;
  document.getElementById('barman-imagen').src = barmanm.genero === "mujer" ? "mujer.png" : "hombre.png";



  async function cargarCoctelesInicio() {
    const contenedor = document.getElementById('cocteles-inicio');
    contenedor.innerHTML = '';
  
    try {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
      const data = await res.json();
      const primerosTres = data.drinks.slice(0, 3);
  
      primerosTres.forEach(coctel => {
        const card = document.createElement('div');
        card.className = 'tarjeta';
        card.innerHTML = `
          <img src="${coctel.strDrinkThumb}" alt="${coctel.strDrink}">
          <h3>${coctel.strDrink}</h3>
          <p>$15</p>
        `;
        contenedor.appendChild(card);
      });
    } catch (error) {
      contenedor.innerHTML = '<p>Error al cargar cócteles</p>';
      console.error(error);
    }
  }
  

  async function cargarCocteles() {
    const contenedor = document.getElementById('cocteles-container');
    contenedor.innerHTML = '';
  
    try {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
      const data = await res.json();
  
      data.drinks.forEach(coctel => {
        const card = document.createElement('div');
        card.className = 'tarjeta';
        card.innerHTML = `
          <img src="${coctel.strDrinkThumb}" alt="${coctel.strDrink}">
          <h3>${coctel.strDrink}</h3>
          <p>$15</p>
          <button>Seleccionar</button>
        `;
  
        card.querySelector('button').addEventListener('click', () => {
          card.classList.toggle('seleccionada');
        });
  
        contenedor.appendChild(card);
      });
    } catch (error) {
      contenedor.innerHTML = '<p>Error al cargar cócteles</p>';
      console.error(error);
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    cargarCoctelesInicio();
  });
  