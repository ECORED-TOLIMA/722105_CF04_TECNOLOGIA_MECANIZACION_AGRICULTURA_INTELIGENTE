export default {
  global: {
    Name: 'Planeación y gestión de recursos para el mantenimiento de maquinaria agrícola',
    Description:
      'El componente formativo aborda los fundamentos del mantenimiento, el diagnóstico y reconocimiento de fallas, la planificación de actividades, la programación y elaboración de presupuestos. Asimismo, desarrolla la gestión de equipos, herramientas, insumos, repuestos y documentación técnica, considerando las necesidades de mantenimiento, las recomendaciones de los fabricantes y la normativa aplicable.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del mantenimiento de maquinaria agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y finalidad del mantenimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de mantenimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Funciones del mantenimiento',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Metodologías y técnicas de mantenimiento',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Normativa aplicable al mantenimiento de maquinaria agrícola',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Costos y criticidad de los equipos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Contingencias en la gestión del mantenimiento',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnóstico de mantenimiento y reconocimiento de fallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de diagnóstico de mantenimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación y características de las fallas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de síntomas y detección de fallas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Diagnóstico de los sistemas de la maquinaria agrícola',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Reporte del diagnóstico',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación, programación y presupuesto del mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plan de mantenimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de planes de mantenimiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procedimiento para elaborar el plan de mantenimiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Programación de actividades de mantenimiento',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Previsión de contingencias',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Presupuesto de mantenimiento',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Tipos, clasificación y elaboración del presupuesto',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo:
              'Costos de mantenimiento y reparación durante la vida útil de la máquina',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de recursos para el mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Equipos y herramientas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Catálogos, fichas técnicas y listas maestras',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de codificación de equipos y herramientas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Insumos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Repuestos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Manuales técnicos',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Formatos de verificación',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Gestión de compras de repuestos e insumos',
            hash: 't_4_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis de criticidad',
      significado:
        'proceso mediante el cual se determina la importancia de una máquina o equipo, considerando su impacto en la producción, la seguridad, el ambiente y los costos ante una posible falla.',
    },
    {
      termino: 'Catálogo de partes',
      significado:
        'documento técnico que contiene información sobre los componentes de una máquina, sus referencias y despieces, y facilita la identificación de los repuestos requeridos.',
    },
    {
      termino: 'Diagnóstico de mantenimiento',
      significado:
        'proceso de evaluación de las condiciones de funcionamiento de una máquina para identificar anomalías, reconocer posibles fallas y determinar las necesidades de mantenimiento.',
    },
    {
      termino: 'Falla',
      significado:
        'condición en la que un componente o sistema de una máquina pierde su capacidad para cumplir correctamente la función para la cual fue diseñado.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que reúne las características y especificaciones de un equipo, como marca, modelo, número de serie, capacidades y condiciones de funcionamiento.',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'conjunto de actividades destinadas a controlar las existencias, entradas, salidas y disponibilidad de repuestos, insumos y materiales necesarios para el mantenimiento.',
    },
    {
      termino: 'Hoja de vida de la máquina',
      significado:
        'registro documental que reúne información sobre las características del equipo, sus intervenciones de mantenimiento, reparaciones, fallas y costos asociados durante su vida útil.',
    },
    {
      termino: 'Mantenimiento basado en condición',
      significado:
        'estrategia que determina la necesidad de realizar actividades de mantenimiento a partir del seguimiento y evaluación del estado real de los equipos.',
    },
    {
      termino: 'Mantenimiento predictivo',
      significado:
        'tipo de mantenimiento que utiliza técnicas de seguimiento y análisis para anticipar posibles fallas y estimar cuándo será necesaria una intervención.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'conjunto de actividades programadas que se realizan periódicamente para reducir la probabilidad de fallas y conservar la maquinaria en condiciones adecuadas de funcionamiento.',
    },
    {
      termino: 'Presupuesto de mantenimiento',
      significado:
        'estimación de los recursos económicos necesarios para desarrollar las actividades de mantenimiento, incluyendo mano de obra, repuestos, insumos, herramientas y servicios externos.',
    },
    {
      termino: 'Repuesto crítico',
      significado:
        'componente cuya falta de disponibilidad puede ocasionar retrasos importantes en el mantenimiento, detener la operación de la maquinaria o generar afectaciones en la producción.',
    },
    {
      termino: 'Sistema de mantenimiento centrado en confiabilidad (RCM)',
      significado:
        'metodología que permite analizar las funciones de los equipos, sus posibles fallas y sus consecuencias para establecer las estrategias de mantenimiento más adecuadas.',
    },
    {
      termino: 'Sistema de mantenimiento productivo total (TPM)',
      significado:
        'metodología orientada a mejorar la eficiencia de los equipos mediante la participación del personal en actividades de cuidado, inspección y mantenimiento.',
    },
    {
      termino: 'Vida útil',
      significado:
        'periodo durante el cual una máquina o equipo puede cumplir su función de manera adecuada, considerando sus condiciones de uso, mantenimiento y desgaste.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Society of Agricultural and Biological Engineers. (2011). ASAE D497.7 MAR2011 (R2020): Agricultural machinery management data. ASABE.',
    },
    {
      referencia:
        'Asociación Española de Normalización. (2018). UNE-EN 13306:2018. Mantenimiento: terminología del mantenimiento. UNE.',
      link: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0060338',
    },
    {
      referencia:
        'Edwards, W. (2026). Estimating farm machinery costs (Ag Decision Maker A3-29). Iowa State University Extension and Outreach.',
      link: 'https://www.extension.iastate.edu/agdm/crops/pdf/a3-29.pdf',
    },
    {
      referencia:
        'Moubray, J. (2004). Mantenimiento centrado en confiabilidad (RCM II) (2.ª ed.). Aladon.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Enrique Rodríguez Vargas',
          cargo: 'Instructor técnico ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
