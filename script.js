import { ramos } from './materias.js';

const grid = document.getElementById('grid');
const estadoAprobados = new Set();
const celdasPorId = {}; // para actualizar estilos luego

// Agrupar ramos por semestre
const semestres = {};
ramos.forEach(ramo => {
  if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
  semestres[ramo.semestre].push(ramo);
});

// Crear la grilla de ramos
Object.keys(semestres).forEach(semestre => {
  const columna = document.createElement('div');
  columna.className = 'semestre';

  const titulo = document.createElement('h2');
  titulo.textContent = `Semestre ${semestre}`;
  columna.appendChild(titulo);

  semestres[semestre].forEach(ramo => {
    const celda = document.createElement('button');
    celda.className = 'celda';
    celda.textContent = ramo.nombre;
    celda.dataset.id = ramo.id;

    // Por defecto se bloquean si tienen prerequisitos
    const estaBloqueado = ramo.prereq.length > 0;
    if (estaBloqueado) {
      celda.classList.add('bloqueado');
      celda.disabled = true;
    }

    // Guarda referencia para habilitar después
    celdasPorId[ramo.id] = celda;

    // Lógica de click
    celda.addEventListener('click', () => {
      if (estadoAprobados.has(ramo.id)) {
        estadoAprobados.delete(ramo.id);
        celda.classList.remove('aprobado');
      } else {
        estadoAprobados.add(ramo.id);
        celda.classList.add('aprobado');
      }

      actualizarDisponibilidad(); // ← desbloquea los siguientes si corresponde
    });

    columna.appendChild(celda);
  });

  grid.appendChild(columna);
});

// ✅ Función para desbloquear celdas cuando se cumplen los prerequisitos
function actualizarDisponibilidad() {
  ramos.forEach(ramo => {
    const celda = celdasPorId[ramo.id];
    if (estadoAprobados.has(ramo.id)) return; // ya aprobado

    const puedeCursar = ramo.prereq.every(id => estadoAprobados.has(id));
    if (puedeCursar && ramo.prereq.length > 0) {
      celda.classList.remove('bloqueado');
      celda.disabled = false;
    } else if (ramo.prereq.length > 0) {
      celda.classList.add('bloqueado');
      celda.disabled = true;
    }
  });
}
