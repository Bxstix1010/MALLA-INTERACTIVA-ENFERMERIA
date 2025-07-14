const ramos = [
  // PRIMER SEMESTRE
  { id: 'biologia', nombre: 'Fundamentos de Biología y Genética Humana', semestre: 1, prereq: [] },
  { id: 'quimica', nombre: 'Bases Químicas y Bioquímicas de la Vida', semestre: 1, prereq: [] },
  { id: 'gestion1', nombre: 'Gestión del Cuidado en Enfermería I', semestre: 1, prereq: [] },
  { id: 'educacion1', nombre: 'Educación en Enfermería I', semestre: 1, prereq: [] },
  { id: 'ingles1', nombre: 'Inglés I', semestre: 1, prereq: [] },
  { id: 'hab_acad1', nombre: 'Habilidades Académicas I', semestre: 1, prereq: [] },

  // SEGUNDO SEMESTRE
  { id: 'morfologia', nombre: 'Morfología Micro y Macroscópica', semestre: 2, prereq: ['biologia'] },
  { id: 'microbiologia', nombre: 'Microbiología y Agentes Infecciosos', semestre: 2, prereq: ['quimica'] },
  { id: 'gestion2', nombre: 'Gestión del Cuidado en Enfermería II', semestre: 2, prereq: ['gestion1'] },
  { id: 'educacion2', nombre: 'Educación en Enfermería II', semestre: 2, prereq: ['educacion1'] },
  { id: 'ingles2', nombre: 'Inglés II', semestre: 2, prereq: ['ingles1'] },
  { id: 'hab_acad2', nombre: 'Habilidades Académicas II', semestre: 2, prereq: ['hab_acad1'] },

  // TERCER SEMESTRE
  { id: 'fisiologia1', nombre: 'Fisiología y Fisiopatología de Sistemas I', semestre: 3, prereq: ['morfologia'] },
  { id: 'gestion3', nombre: 'Gestión del Cuidado en Enfermería III', semestre: 3, prereq: ['gestion2'] },
  { id: 'salud_publica', nombre: 'Enfermería en Salud Pública y Determinantes Sociales en Salud', semestre: 3, prereq: ['educacion2'] },
  { id: 'socioantropologia', nombre: 'Socioantropología en la Humanización del Cuidado', semestre: 3, prereq: [] },
  { id: 'ingles3', nombre: 'Inglés III', semestre: 3, prereq: ['ingles2'] },
  { id: 'etica', nombre: 'Ética y Ciudadanía', semestre: 3, prereq: [] },
  { id: 'practica1', nombre: 'Práctica Integrada en Enfermería I', semestre: 3, prereq: ['gestion2'] },

  // CUARTO SEMESTRE
  { id: 'fisiologia2', nombre: 'Fisiología y Fisiopatología de Sistemas II', semestre: 4, prereq: ['fisiologia1'] },
  { id: 'farmacologia', nombre: 'Farmacología Clínica Fundamental', semestre: 4, prereq: ['microbiologia'] },
  { id: 'gestion_servicios', nombre: 'Gestión en Servicios de Salud', semestre: 4, prereq: ['gestion3'] },
  { id: 'tic', nombre: 'Matemáticas ,TICs e Informática', semestre: 4, prereq: [] },
  { id: 'ingles6', nombre: 'Inglés VI', semestre: 4, prereq: ['ingles3'] },
  { id: 'resp_social', nombre: 'Responsabilidad Social Universitaria', semestre: 4, prereq: ['etica'] },
  { id: 'practica2', nombre: 'Práctica Integrada en Enfermería II', semestre: 4, prereq: ['gestion3', 'practica1'] },

  // QUINTO SEMESTRE
  { id: 'metodologia', nombre: 'Metodología de la Investigación y Bioética', semestre: 5, prereq: ['tic'] },
  { id: 'comunidades1', nombre: 'Gestión del Cuidado En Comunidades I', semestre: 5, prereq: ['salud_publica'] },
  { id: 'adulto1', nombre: 'Gestión del Cuidado en el Adulto I', semestre: 5, prereq: ['gestion3', 'farmacologia', 'fisiologia2'] },
  { id: 'persona_mayor', nombre: 'Gestión del Cuidado en la Persona Mayor', semestre: 5, prereq: ['gestion3', 'farmacologia', 'fisiologia2'] },
  { id: 'calidad', nombre: 'Calidad y Gestión en el Cuidado', semestre: 5, prereq: ['gestion_servicios'] },
  { id: 'practica3', nombre: 'Práctica Integrada en Enfermería III', semestre: 5, prereq: ['farmacologia', 'fisiologia2', 'practica2'] },

  // SEXTO SEMESTRE
  { id: 'proyecto1', nombre: 'Proyecto de Investigación I', semestre: 6, prereq: ['metodologia'] },
  { id: 'comunidades2', nombre: 'Gestión del Cuidado En Comunidades II', semestre: 6, prereq: ['comunidades1'] },
  { id: 'adulto2', nombre: 'Gestión del Cuidado en el Adulto II', semestre: 6, prereq: ['adulto1'] },
  { id: 'mujer', nombre: 'Gestión del Cuidado en la Mujer', semestre: 6, prereq: ['farmacologia', 'fisiologia2'] },
  { id: 'electivo1', nombre: 'Electivo Formación General I', semestre: 6, prereq: [] },
  { id: 'practica4', nombre: 'Práctica Integrada en Enfermería IV', semestre: 6, prereq: ['comunidades1'] },

  // SÉPTIMO SEMESTRE
  { id: 'proyecto2', nombre: 'Proyecto de Investigación II', semestre: 7, prereq: ['proyecto1'] },
  { id: 'comunidades3', nombre: 'Gestión del Cuidado En Comunidades III', semestre: 7, prereq: ['comunidades2'] },
  { id: 'nino1', nombre: 'Gestión del Cuidado en el Niño y Adolescente I', semestre: 7, prereq: ['mujer'] },
  { id: 'urgencias', nombre: 'Gestión del Cuidado en Urgencias', semestre: 7, prereq: ['adulto2'] },
  { id: 'mental1', nombre: 'Gestión del Cuidado en Salud Mental I', semestre: 7, prereq: ['adulto2'] },
  { id: 'practica5', nombre: 'Práctica Integrada en Enfermería V', semestre: 7, prereq: ['mujer'] },

  // OCTAVO SEMESTRE
  { id: 'interculturalidad', nombre: 'Cuidados de la Salud e Interculturalidad', semestre: 8, prereq: ['comunidades3'] },
  { id: 'nino2', nombre: 'Gestión del Cuidado en el Niño y Adolescente II', semestre: 8, prereq: ['nino1'] },
  { id: 'mental2', nombre: 'Gestión del Cuidado en Salud Mental II', semestre: 8, prereq: ['mental1'] },
  { id: 'electivo2', nombre: 'Electivo Formación General II', semestre: 8, prereq: [] },
  { id: 'practica6', nombre: 'Práctica Integrada en Enfermería VI', semestre: 8, prereq: ['urgencias'] },

  // NOVENO SEMESTRE
  { id: 'profesional1', nombre: 'Práctica Profesional en Enfermería I', semestre: 9, prereq: ['metodologia', 'comunidades1', 'adulto1', 'persona_mayor', 'calidad', 'practica3', 'proyecto1', 'comunidades2', 'adulto2', 'mujer', 'electivo1', 'practica4', 'proyecto2', 'comunidades3', 'nino1', 'urgencias', 'mental1', 'practica5', 'interculturalidad', 'nino2', 'mental2', 'electivo2', 'practica6'] },

  // DÉCIMO SEMESTRE
  { id: 'profesional2', nombre: 'Práctica Profesional en Enfermería II', semestre: 10, prereq: ['metodologia', 'comunidades1', 'adulto1', 'persona_mayor', 'calidad', 'practica3', 'proyecto1', 'comunidades2', 'adulto2', 'mujer', 'electivo1', 'practica4', 'proyecto2', 'comunidades3', 'nino1', 'urgencias', 'mental1', 'practica5', 'interculturalidad', 'nino2', 'mental2', 'electivo2', 'practica6'] },
  { id: 'electivo_prof', nombre: 'Electivo de Profundización', semestre: 10, prereq: ['metodologia', 'comunidades1', 'adulto1', 'persona_mayor', 'calidad', 'practica3', 'proyecto1', 'electivo1', 'practica4', 'proyecto2', 'comunidades3', 'nino1', 'urgencias', 'mental1', 'practica5', 'interculturalidad', 'nino2', 'mental2', 'electivo2', 'practica6'] }
];

export { ramos };
