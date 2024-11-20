const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  // Eliminar datos existentes en orden de relaciones
  await prisma.Resultado.deleteMany({});
  await prisma.Evento.deleteMany({});
  await prisma.Competencia.deleteMany({});
  await prisma.Atleta.deleteMany({});
  await prisma.Pais.deleteMany({});

  // Crear países
  const paises = [
    { nombre: 'Costa Rica', codigo: 'CRC' },
    { nombre: 'Estados Unidos', codigo: 'USA' },
    { nombre: 'Brasil', codigo: 'BRA' },
    { nombre: 'España', codigo: 'ESP' },
    { nombre: 'Alemania', codigo: 'GER' },
    { nombre: 'Japón', codigo: 'JPN' },
    { nombre: 'Italia', codigo: 'ITA' },
    { nombre: 'Francia', codigo: 'FRA' },
    { nombre: 'Canadá', codigo: 'CAN' },
    { nombre: 'Argentina', codigo: 'ARG' },
    { nombre: 'México', codigo: 'MEX' },
    { nombre: 'Colombia', codigo: 'COL' },
    { nombre: 'Reino Unido', codigo: 'GBR' },
    { nombre: 'Australia', codigo: 'AUS' },
    { nombre: 'China', codigo: 'CHN' },
    { nombre: 'India', codigo: 'IND' },
    { nombre: 'Rusia', codigo: 'RUS' },
    { nombre: 'Corea del Sur', codigo: 'KOR' },
    { nombre: 'Sudáfrica', codigo: 'RSA' },
    { nombre: 'Egipto', codigo: 'EGY' },
  ];

  for (const pais of paises) {
    await prisma.Pais.create({
      data: pais,
    });
  }

  // Crear atletas
  const atletas = [
    { nombre: 'John', primerApellido: 'Doe', segundoApellido: 'Smith', paisId: 2, fechaNacimiento: new Date('1995-05-15'), sexo: 'masculino', pesoCorporal: 81.5 },
    { nombre: 'Maria', primerApellido: 'González', segundoApellido: 'Perez', paisId: 1, fechaNacimiento: new Date('1998-09-20'), sexo: 'femenino', pesoCorporal: 63.2 },
    { nombre: 'Carlos', primerApellido: 'Santos', segundoApellido: 'Mora', paisId: 3, fechaNacimiento: new Date('1993-04-12'), sexo: 'masculino', pesoCorporal: 78.4 },
    { nombre: 'Ana', primerApellido: 'Fernández', segundoApellido: 'Lopez', paisId: 3, fechaNacimiento: new Date('2000-03-10'), sexo: 'femenino', pesoCorporal: 59.5 },
    { nombre: 'Liam', primerApellido: 'Smith', segundoApellido: 'Johnson', paisId: 2, fechaNacimiento: new Date('1991-07-21'), sexo: 'masculino', pesoCorporal: 82.1 },
    { nombre: 'Sakura', primerApellido: 'Tanaka', segundoApellido: 'Kato', paisId: 6, fechaNacimiento: new Date('1997-11-15'), sexo: 'femenino', pesoCorporal: 62.8 },
    { nombre: 'Lucas', primerApellido: 'Gomez', segundoApellido: 'Pérez', paisId: 4, fechaNacimiento: new Date('1994-05-02'), sexo: 'masculino', pesoCorporal: 89.0 },
    { nombre: 'Alessandro', primerApellido: 'Rossi', segundoApellido: 'Marino', paisId: 7, fechaNacimiento: new Date('1992-06-14'), sexo: 'masculino', pesoCorporal: 94.3 },
    { nombre: 'Marie', primerApellido: 'Dubois', segundoApellido: 'Leroux', paisId: 8, fechaNacimiento: new Date('1999-12-23'), sexo: 'femenino', pesoCorporal: 56.4 },
    { nombre: 'Ethan', primerApellido: 'Carter', segundoApellido: 'Brooks', paisId: 9, fechaNacimiento: new Date('1996-02-19'), sexo: 'masculino', pesoCorporal: 83.6 },
    { nombre: 'Sofia', primerApellido: 'Martinez', segundoApellido: 'Rojas', paisId: 10, fechaNacimiento: new Date('1995-08-01'), sexo: 'femenino', pesoCorporal: 61.2 },
    { nombre: 'Juan', primerApellido: 'Torres', segundoApellido: 'Diaz', paisId: 11, fechaNacimiento: new Date('1998-01-04'), sexo: 'masculino', pesoCorporal: 77.3 },
    { nombre: 'Hiroshi', primerApellido: 'Saito', segundoApellido: 'Kimura', paisId: 6, fechaNacimiento: new Date('1994-09-09'), sexo: 'masculino', pesoCorporal: 85.7 },
    { nombre: 'Elena', primerApellido: 'Müller', segundoApellido: 'Schmidt', paisId: 5, fechaNacimiento: new Date('1996-11-30'), sexo: 'femenino', pesoCorporal: 60.5 },
    { nombre: 'Pedro', primerApellido: 'Jimenez', segundoApellido: 'Lopez', paisId: 12, fechaNacimiento: new Date('1993-03-15'), sexo: 'masculino', pesoCorporal: 79.9 },
    { nombre: 'Emma', primerApellido: 'White', segundoApellido: 'Johnson', paisId: 13, fechaNacimiento: new Date('1992-07-25'), sexo: 'femenino', pesoCorporal: 57.3 },
    { nombre: 'Hassan', primerApellido: 'Youssef', segundoApellido: 'Ali', paisId: 20, fechaNacimiento: new Date('1990-01-12'), sexo: 'masculino', pesoCorporal: 92.1 },
    { nombre: 'Carlos', primerApellido: 'Alvarez', segundoApellido: 'Santos', paisId: 1, fechaNacimiento: new Date('1997-06-18'), sexo: 'masculino', pesoCorporal: 88.2 },
  ];

  for (const atleta of atletas) {
    await prisma.Atleta.create({
      data: atleta,
    });
  }

  // Crear competencias
  const juegosOlimpicos = await prisma.Competencia.create({
    data: {
      nombre: 'Juegos Olímpicos París 2024',
      ubicacion: 'París, Francia',
      categoria: 'Senior',
    },
  });

  const mundialHalterofilia = await prisma.Competencia.create({
    data: {
      nombre: 'Campeonato Mundial 2023',
      ubicacion: 'Budapest, Hungría',
      categoria: 'Senior',
    },
  });

  // Crear eventos para competencias
  const evento1 = await prisma.Evento.create({
    data: {
      competenciaId: juegosOlimpicos.id,
      tipo: 'Arranque',
      categoriaPeso: '81kg',
      sexo: 'masculino',
    },
  });

  const evento2 = await prisma.Evento.create({
    data: {
      competenciaId: juegosOlimpicos.id,
      tipo: 'Envión',
      categoriaPeso: '63kg',
      sexo: 'femenino',
    },
  });

  const evento3 = await prisma.Evento.create({
    data: {
      competenciaId: mundialHalterofilia.id,
      tipo: 'Arranque',
      categoriaPeso: '89kg',
      sexo: 'masculino',
    },
  });

  const evento4 = await prisma.Evento.create({
    data: {
      competenciaId: mundialHalterofilia.id,
      tipo: 'Envión',
      categoriaPeso: '76kg',
      sexo: 'femenino',
    },
  });

  // Crear resultados para los atletas, distribuyendo medallas
  const resultados = [
    // Evento 1 - Arranque 81kg masculino
    { atletaId: 1, eventoId: evento1.id, pesoLevantado: 175.0, intento: 1, esValido: true, medalla: 'Oro' },
    { atletaId: 3, eventoId: evento1.id, pesoLevantado: 172.5, intento: 2, esValido: true, medalla: 'Plata' },
    { atletaId: 5, eventoId: evento1.id, pesoLevantado: 170.0, intento: 3, esValido: true, medalla: 'Bronce' },

    // Evento 2 - Envión 63kg femenino
    { atletaId: 2, eventoId: evento2.id, pesoLevantado: 105.0, intento: 2, esValido: true, medalla: 'Oro' },
    { atletaId: 4, eventoId: evento2.id, pesoLevantado: 102.0, intento: 1, esValido: true, medalla: 'Plata' },
    { atletaId: 6, eventoId: evento2.id, pesoLevantado: 100.5, intento: 3, esValido: true, medalla: 'Bronce' },

    // Evento 3 - Arranque 89kg masculino
    { atletaId: 7, eventoId: evento3.id, pesoLevantado: 190.0, intento: 1, esValido: true, medalla: 'Oro' },
    { atletaId: 10, eventoId: evento3.id, pesoLevantado: 187.5, intento: 2, esValido: true, medalla: 'Plata' },
    { atletaId: 12, eventoId: evento3.id, pesoLevantado: 185.0, intento: 3, esValido: true, medalla: 'Bronce' },

    // Evento 4 - Envión 76kg femenino
    { atletaId: 8, eventoId: evento4.id, pesoLevantado: 110.0, intento: 1, esValido: true, medalla: 'Oro' },
    { atletaId: 9, eventoId: evento4.id, pesoLevantado: 108.0, intento: 2, esValido: true, medalla: 'Plata' },
    { atletaId: 11, eventoId: evento4.id, pesoLevantado: 105.5, intento: 3, esValido: true, medalla: 'Bronce' },
  ];

  for (const resultado of resultados) {
    await prisma.Resultado.create({
      data: resultado,
    });
  }

  console.log('Database has been seeded with additional data!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
