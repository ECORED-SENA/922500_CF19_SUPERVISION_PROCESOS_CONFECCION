export default {
  global: {
    componenteFormativo: '<i>Lean Six Sigma</i>',
    descripcionCurso:
      'Este componente aborda aspectos generales y claves de la metodología <i>Lean Six Sigma</i>, la cual mejora los procesos para incrementar ganancias y productividad. Con su estudio responsable, El aprendiz se afianzará en el uso de herramientas estadísticas que identifican y disminuyen la variabilidad de los procesos de producción, en el área de la confección, ajustados a necesidades de la compañía y del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
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
        titulo: 'Orígenes de <i>Lean Six Sigma</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodología <i>Lean Six Sigma</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tableros de control',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Metodología <i>Lean Six Sigma</i>',
      referencia: 'Torres, J. (2020). Histograma.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=lyrg9Sh5rfU',
    },
    {
      tema: 'Metodología <i>Lean Six Sigma</i>',
      referencia: 'Torres, J. (2020). Diagrama de Pareto.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/RCi8RaO0lco',
    },
    {
      tema: 'Metodología <i>Lean Six Sigma</i>',
      referencia: 'Torres, J. (2020). Diagrama Causa Efecto.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=vsBkfe0oN30',
    },
    {
      tema: 'Metodología <i>Lean Six Sigma</i>',
      referencia: 'Torres, J. (2020). Estratificación.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=lyrg9Sh5rfU',
    },
    {
      tema: 'Metodología <i>Lean Six Sigma</i>',
      referencia:
        'Lucidchart (s.f.). Iconos y símbolos de mapas de flujo de valor. Lucidchart',
      tipo: 'Página web',
      link:
        'https://www.lucidchart.com/pages/es/iconos-y-simbolos-de-mapas-de-flujo-de-valor/#section_0',
    },
    {
      tema: 'Metodología <i>Lean Six Sigma</i>',
      referencia: 'Soy Genio (2020) ¿cómo elaborar un VSM desde cero?',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/KhBdQekPSS8',
    },
    {
      tema: 'Indicadores',
      referencia:
        'QTS Learning (2019) Índices de Productividad, Eficiencia y Eficacia.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=IFnfBQ-gnu0',
    },
    {
      tema: 'Tableros de control',
      referencia:
        'Microsoft Excel a todo nivel (2018) Dashboard en Excel? | ¿Qué es un Dashboard? ¿Cómo se hace en Excel? Tableros interactivos | Parte 1.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=_E5FIOwFz4w',
    },
  ],
  glosario: [
    {
      termino: 'Desperdicios',
      significado:
        'los MUDA, término japonés que significa “inutilidad; ociosidad; superfluo; residuos; despilfarro”, son 7 conceptos que se aplicaron inicialmente por el ingeniero Taiichi Ohno, autor del archiconocido <i>just intime</i> el Sistema de producción de Toyota.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'diagrama de flujo es un diagrama que describe un proceso, sistema o algoritmo informático. Se usan ampliamente en numerosos campos para documentar.',
    },
    {
      termino: 'Diagrama de Flujo por Bloques',
      significado:
        'diagrama de bloques es la representación del funcionamiento interno de un sistema, que se hace mediante bloques y sus relaciones, y que, además, definen la organización de todo el proceso interno, sus entradas y sus salidas.',
    },
    {
      termino: 'Diagrama SIPOC',
      significado:
        'un diagrama SIPOC sirve para documentar los Proveedores (<i>Suppliers</i>), Entradas (<i>Inputs</i>), Procesos (<i>Process</i>), Salidas (<i>Outputs</i>) y Clientes (<i>Customers</i>) en una operación. Una lista de estos elementos ayuda a marcar los límites de un proceso a un alto nivel. El diagrama se usa para proveer a quienes toman las decisiones con información crucial sobre todo el proceso, pero sin entrar en mayores detalles.',
    },
    {
      termino: '<i>Kaizen</i>',
      significado:
        'la palabra <i>Kaizen</i> significa «mejora», un cambio beneficioso que se alcanza paso a paso.',
    },
    {
      termino: 'Kanban',
      significado:
        'se define como «un sistema de producción altamente efectivo y eficiente, ha contribuido a generar un panorama manufacturero óptimo y competitivo.',
    },
    {
      termino: '<i>Lead Time</i>',
      significado:
        'hace referencia al tiempo que discurre desde que se genera una orden de pedido a un proveedor hasta que se entrega la mercancía de ese proveedor al cliente.',
    },
    {
      termino: 'SMED',
      significado:
        'SMED (<i>Single Minute Exchange of Die</i>, o cambio de matriz en menos de 10 minutos) es una técnica que permite grandes reducciones en los tiempos de <i>set up</i> (tiempo entre última pieza buena de lote anterior y primera buena del siguiente), permitiendo trabajar en lotes más pequeños.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ambriz C (2014) Curso De Indicadores De Gestión. (s/f). Slideplayer.es.',
      link: 'https://slideplayer.es/slide/155761/',
    },
    {
      referencia:
        'Crisóstomo, M., & Sánchez, A (2018). Propuesta de mejora en la confección de ropa de vestir femenina de una pyme mediante la aplicación de la metodología lean six sigma y herramientas VSM,5S y la distribución de planta [Tesis Pontificia Universidad Católica del Perú].',
      link: 'http://hdl.handle.net/20.500.12404/13982',
    },
    {
      referencia:
        'García, M (2019) . Herramientas del Lean Six Sigma: la metodología para la excelencia operacional APD.ES',
      link: 'https://www.apd.es/herramientas-del-lean-six-sigma/',
    },
    {
      referencia:
        'Paulise L (2017) Todo sobre tablero de control Ronin Consultoría.',
      link:
        'https://qualityway.wordpress.com/2017/10/12/todo-sobre-tablero-de-control-por-luciana-paulise/',
    },
    {
      referencia:
        'Planning, Consultores gerenciales (s/f). Indicadores De Efectividad Y Eficacia.',
      link: 'http://www.planning.com.co/bd/valor_agregado/Octubre1998.pdf',
    },
    {
      referencia:
        'Sánchez M. (2020 7 agosto). Las 25 herramientas LEAN [Web log post]. Todo proyectos.com',
      link: 'https://todoproyectos.com/?s=herramientas+lean+',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Patricia Torres Sarmiento',
          cargo: 'Experta temática',
          centro: 'Diseño, confección y moda - Regional Antioquía',
        },
        {
          nombre: 'Vilma L Perilla Méndez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Mary Jeans Palacio',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
