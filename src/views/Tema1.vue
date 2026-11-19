<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del mantenimiento de maquinaria agrícola

      p.mb-4 La maquinaria agrícola desempeña un papel fundamental en el desarrollo de las actividades agropecuarias, ya que facilita labores como la preparación del suelo, la siembra, el manejo de los cultivos, la aplicación de insumos y la cosecha. Su utilización permite optimizar los tiempos de trabajo, mejorar la productividad y aprovechar los recursos disponibles. Sin embargo, para garantizar su funcionamiento y disponibilidad, es necesario implementar una gestión adecuada del mantenimiento.

      .bloque-texto-g.color-primario.tema1-bloque-intro.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
        .bloque-texto-g__img.img-bg-01
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El mantenimiento de maquinaria agrícola comprende un conjunto de actividades técnicas y administrativas orientadas a conservar los equipos en condiciones apropiadas de funcionamiento, prevenir fallas, identificar daños y atender oportunamente las necesidades de reparación. Estas actividades requieren una planificación organizada que considere las características de cada máquina, las recomendaciones de los fabricantes, las condiciones de operación y los recursos disponibles.

      p.mb-4 Una gestión eficiente del mantenimiento no se limita a reparar los equipos cuando presentan averías. También implica establecer estrategias para anticipar posibles fallas, organizar las intervenciones, disponer de herramientas, repuestos e insumos, controlar los costos y verificar las condiciones de funcionamiento de la maquinaria.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") Por lo anterior, es importante reconocer los fundamentos que orientan el mantenimiento de maquinaria agrícola, sus diferentes tipos, funciones, metodologías y técnicas, así como los aspectos normativos, económicos y operativos que intervienen en su gestión. Estos conocimientos constituyen la base para planificar y administrar los recursos necesarios, procurando la continuidad de las labores agropecuarias, la seguridad de las personas y el cuidado del ambiente.

      Separador

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1. Concepto y finalidad del mantenimiento

      .row.justify-content-center.mb-5
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          p El mantenimiento es el conjunto de acciones técnicas, administrativas y de gestión que se realizan durante el ciclo de vida de una máquina o equipo, con el propósito de conservarlo en condiciones adecuadas de funcionamiento o restablecerlas cuando se presenta una falla. Su objetivo es garantizar que la maquinaria pueda cumplir la función para la cual fue diseñada, de acuerdo con las condiciones de operación y las recomendaciones del fabricante.
          .cajon.cajon.C01.color-secundario.px-4.py-3.mb-4
            p.mb-0 En la maquinaria agrícola, el mantenimiento comprende actividades como inspeccionar, limpiar, lubricar, ajustar, calibrar, sustituir componentes y reparar los diferentes sistemas. También requiere organizar los recursos, programar las intervenciones y documentar los trabajos realizados.
          p El mantenimiento de maquinaria agrícola busca:
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-02.png', alt='')

      .row.justify-content-center.align-items-center.mb-4.slyder-etapas-bg(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-03.svg' alt='')
            h4.text-center Garantizar la disponibilidad de los equipos
            p.text-center Asegurar que las máquinas estén en condiciones de funcionamiento cuando se requieran para las labores agrícolas.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-04.svg' alt='')
            h4.text-center Prolongar la vida útil
            p.text-center Reducir el desgaste prematuro y conservar los componentes durante el mayor tiempo posible.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-05.svg' alt='')
            h4.text-center Disminuir los costos de operación
            p.text-center Prevenir daños mayores, reparaciones imprevistas y tiempos prolongados de inactividad.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-06.svg' alt='')
            h4.text-center Proteger la seguridad de los operarios
            p.text-center Conservar los sistemas de la maquinaria en condiciones adecuadas para reducir los riesgos durante su utilización.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-07.svg' alt='')
            h4.text-center Prevenir la contaminación ambiental
            p.text-center Evitar fugas de aceites, combustibles y otros fluidos, así como garantizar el manejo adecuado de los residuos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-08.svg' alt='')
            h4.text-center Conservar el valor del equipo
            p.text-center Mantener sus condiciones técnicas y disponer de registros que permitan conocer su historial de mantenimiento.

      p.mb-4 La gestión del mantenimiento integra dos dimensiones que se complementan:

      .row.justify-content-center.mb-4
        .col-lg-12
          .tarjeta--container.row.mb-4
            .col-md.tarjeta.color-primario.verde.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/t1/img-09.svg', alt='')          
              h4.text-center Dimensión técnica
              p.mb-0 Comprende las inspecciones, mediciones, lubricaciones, ajustes, sustituciones de componentes y reparaciones necesarias para conservar o recuperar el funcionamiento de la maquinaria.

            .col-md.tarjeta.color-acento-botones.cafe.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/t1/img-10.svg', alt='')          
              h4.text-center Dimensión administrativa
              p.mb-0 Incluye la planificación de actividades, programación de intervenciones, elaboración de presupuestos, gestión de compras, control de inventarios, asignación de responsables y registro de los trabajos realizados.

      p.mb-4 Por ejemplo, cuando se programa el mantenimiento preventivo de un tractor, no basta con identificar las tareas que deben ejecutarse. También es necesario consultar el manual del fabricante, disponer de los lubricantes y repuestos requeridos, asignar al personal responsable y establecer el momento adecuado para realizar la intervención.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") Una adecuada gestión del mantenimiento contribuye a la continuidad de las labores agropecuarias, al aprovechamiento de los recursos, a la seguridad de los operarios y a la conservación de la maquinaria agrícola.

      Separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2. Tipos de mantenimiento

      .bloque-texto-g.bloque-texto-g--inverso.cajon.C03.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
        .bloque-texto-g__img.recurso-mantenimiento-img
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El mantenimiento de maquinaria agrícola se puede clasificar según el momento en que se realiza la intervención y el criterio utilizado para determinarla. Esta clasificación permite seleccionar las acciones más apropiadas de acuerdo con las condiciones de funcionamiento de los equipos, las recomendaciones del fabricante y las necesidades de las actividades agropecuarias.

      p.mb-4 Los principales tipos de mantenimiento se describen en la siguiente tabla:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Tipos de mantenimiento de maquinaria agrícola
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down") Tipo de mantenimiento
                  th(data-aos="fade-down") Características
                  th(data-aos="fade-down") Ejemplo de aplicación
              tbody
                tr
                  td(data-aos="fade-down") Correctivo
                  td(data-aos="fade-down") Se realiza después de que ocurre una falla, con el propósito de recuperar la capacidad de funcionamiento de la máquina o del componente afectado. Puede ser inmediato, cuando se atiende tan pronto ocurre la falla, o diferido, cuando la intervención se programa para un momento posterior.
                  td(data-aos="fade-down") Reemplazar una manguera hidráulica que se rompe durante la operación de un tractor.
                tr
                  td(data-aos="fade-down") Preventivo
                  td(data-aos="fade-down") Consiste en realizar intervenciones a intervalos establecidos de tiempo, horas de funcionamiento o ciclos de trabajo. Incluye limpieza, lubricación, ajustes, inspecciones y sustitución periódica de componentes, según las indicaciones del fabricante.
                  td(data-aos="fade-down") Cambiar el aceite del motor y sus filtros al alcanzar las horas de funcionamiento establecidas en el manual del tractor.
                tr
                  td(data-aos="fade-down") Predictivo
                  td(data-aos="fade-down") Se basa en el seguimiento y análisis de las condiciones reales de funcionamiento de los equipos para identificar posibles deterioros antes de que se produzca una falla. Utiliza mediciones de variables como temperatura, vibración, presión y características de los lubricantes.
                  td(data-aos="fade-down") Analizar el aceite para identificar partículas metálicas que puedan indicar desgaste interno del motor.
                tr
                  td(data-aos="fade-down") Proactivo
                  td(data-aos="fade-down") Busca identificar y eliminar las causas que originan las fallas, en lugar de limitarse a corregir sus consecuencias. Considera las condiciones de operación, los antecedentes de los equipos y los factores que provocan daños recurrentes.
                  td(data-aos="fade-down") Instalar un prefiltro de aire en un tractor que trabaja frecuentemente en terrenos con alta concentración de polvo.
                tr
                  td(data-aos="fade-down") Autónomo
                  td(data-aos="fade-down") Comprende las actividades básicas de cuidado e inspección que realiza el propio operario como parte de su rutina de trabajo, para identificar oportunamente anomalías y conservar la maquinaria en condiciones apropiadas.
                  td(data-aos="fade-down") Limpiar diariamente el tractor, revisar los niveles de aceite y refrigerante, verificar la presión de los neumáticos e inspeccionar posibles fugas.

      p.mb-0 La selección de los tipos de mantenimiento depende de las características de cada equipo y de las condiciones en las que opera. Su aplicación permite organizar las intervenciones, aprovechar los recursos disponibles y reducir las interrupciones de las actividades agropecuarias.

      Separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3. Funciones del mantenimiento
        
      .row.justify-content-center.mb-4
        .col-12
          .recurso-funciones-mantenimiento
            figure.recurso-funciones-mantenimiento__imagen
              img(src='@/assets/curso/temas/t1/img-12.png', alt='')

            .recurso-funciones-mantenimiento__texto
              p.mb-0 Las funciones del mantenimiento comprenden las actividades técnicas y administrativas necesarias para organizar, desarrollar y hacer seguimiento a las intervenciones de la maquinaria agrícola. Estas permiten distribuir responsabilidades, aprovechar adecuadamente los recursos y mantener un control sobre las condiciones de funcionamiento de los equipos.

      p.mb-4 En la gestión del mantenimiento se identifican las siguientes funciones:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span Funciones del mantenimiento de maquinaria agrícola
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down") Función
                  th(data-aos="fade-down") Descripción
                  th(data-aos="fade-down") Responsable habitual
              tbody
                tr
                  td(data-aos="fade-down") Planeación
                  td(data-aos="fade-down") Define las actividades de mantenimiento que deben realizarse, su frecuencia y los recursos necesarios, considerando las características de los equipos y las recomendaciones del fabricante.
                  td(data-aos="fade-down") Coordinador de mantenimiento.
                tr
                  td(data-aos="fade-down") Programación
                  td(data-aos="fade-down") Establece las fechas de intervención, asigna el personal responsable y organiza la disponibilidad de los equipos y recursos.
                  td(data-aos="fade-down") Coordinador de mantenimiento.
                tr
                  td(data-aos="fade-down") Ejecución
                  td(data-aos="fade-down") Comprende la realización de las actividades de mantenimiento en campo o taller, de acuerdo con los procedimientos técnicos establecidos.
                  td(data-aos="fade-down") Mecánico y operario.
                tr
                  td(data-aos="fade-down") Control
                  td(data-aos="fade-down") Verifica el cumplimiento de las actividades programadas y las condiciones en que se realizaron, identificando posibles desviaciones.
                  td(data-aos="fade-down") Coordinador de mantenimiento.
                tr
                  td(data-aos="fade-down") Registro
                  td(data-aos="fade-down") Documenta las intervenciones, los recursos utilizados, las fallas identificadas y los resultados obtenidos, conservando el historial de cada máquina.
                  td(data-aos="fade-down") Mecánico o responsable del mantenimiento.
                tr
                  td(data-aos="fade-down") Mejora
                  td(data-aos="fade-down") Analiza la información registrada, las fallas recurrentes y los costos para identificar oportunidades de optimización del mantenimiento.
                  td(data-aos="fade-down") Coordinador de mantenimiento y gerencia.

      .row.justify-content-center.recurso-intro-sin-img-console
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-13.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p Las funciones y responsabilidades descritas en la tabla son orientativas y pueden variar según el tamaño de la empresa, su estructura organizacional, la cantidad de equipos y el personal disponible para la gestión del mantenimiento.
            .cajon.cajon.C01.color-secundario.px-4.py-4.mb-4
              p.mb-0 Estas funciones están relacionadas entre sí y deben desarrollarse de manera coordinada. Por ejemplo, la planeación establece las necesidades de mantenimiento; la programación organiza cuándo y quién realizará las actividades; la ejecución permite llevarlas a cabo; y el control y los registros facilitan evaluar los resultados e identificar oportunidades de mejora.
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img-14.svg', alt='')
            .col-lg-10.col-12
              p En empresas pequeñas de servicios mecanizados, una misma persona puede asumir varias de estas responsabilidades. Sin embargo, es necesario garantizar que todas se cumplan para mantener organizada la gestión del mantenimiento y disponer de información que facilite la toma de decisiones.

      Separador

      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4. Metodologías y técnicas de mantenimiento

      p.mb-4 Las metodologías de mantenimiento son enfoques organizados que permiten determinar qué tipo de intervención requiere una máquina y cómo gestionar las actividades necesarias para conservar sus condiciones de funcionamiento. Su selección depende de las características del equipo, las condiciones de operación, los antecedentes de fallas y las recomendaciones del fabricante.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Entre las metodologías aplicables a la maquinaria agrícola se encuentran las siguientes:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span Metodologías de mantenimiento y su aplicación en maquinaria agrícola
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down") Metodología
                  th(data-aos="fade-down") Enfoque principal
                  th(data-aos="fade-down") Aplicación en maquinaria agrícola
              tbody
                tr
                  td(data-aos="fade-down") Mantenimiento según el fabricante
                  td(data-aos="fade-down") Sigue las recomendaciones, frecuencias y procedimientos establecidos en los manuales técnicos del equipo.
                  td(data-aos="fade-down") Establecer el plan de mantenimiento preventivo de un tractor de acuerdo con las horas de funcionamiento indicadas por el fabricante.
                tr
                  td(data-aos="fade-down") Mantenimiento centrado en la confiabilidad (RCM)
                  td(data-aos="fade-down") Analiza las funciones del equipo, los posibles modos de falla y sus consecuencias para seleccionar las tareas de mantenimiento más apropiadas.
                  td(data-aos="fade-down") Definir las actividades de mantenimiento de una cosechadora, considerando su importancia para la continuidad de las labores agrícolas.
                tr
                  td(data-aos="fade-down") Mantenimiento productivo total (TPM)
                  td(data-aos="fade-down") Promueve la participación de todo el personal, especialmente de los operarios, en el cuidado y conservación de los equipos.
                  td(data-aos="fade-down") Incorporar rutinas diarias de inspección y limpieza de los tractores antes y después de su utilización.
                tr
                  td(data-aos="fade-down") Mantenimiento basado en la condición
                  td(data-aos="fade-down") Determina la necesidad de intervenir un equipo a partir del seguimiento y análisis de sus condiciones reales de funcionamiento.
                  td(data-aos="fade-down") Programar una intervención a partir de los resultados del análisis de aceite realizado al motor de un tractor.

      p.mb-4 Las técnicas de mantenimiento son procedimientos y recursos utilizados para inspeccionar, conservar y evaluar las condiciones de funcionamiento de los equipos. Su aplicación permite identificar anomalías, prevenir el deterioro de los componentes y determinar las necesidades de intervención.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Entre las técnicas más utilizadas en la maquinaria agrícola se encuentran:

      .row.justify-content-center.align-items-center.mb-4.slyder-etapas-bg(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-15.svg' alt='')
            h4.text-center Inspección visual
            p.text-center Permite identificar fugas, grietas, desgaste, corrosión, piezas sueltas y otras anomalías mediante la observación de los componentes.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-16.svg' alt='')
            h4.text-center Lubricación y engrase programados
            p.text-center Consisten en aplicar los lubricantes correspondientes en los puntos establecidos, de acuerdo con las indicaciones del fabricante.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-17.svg' alt='')
            h4.text-center Ajuste y calibración
            p.text-center Permiten mantener los componentes y mecanismos dentro de las condiciones de funcionamiento especificadas.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-18.svg' alt='')
            h4.text-center Limpieza
            p.text-center Ayuda a retirar residuos de tierra, polvo, grasa y material vegetal que pueden afectar el funcionamiento de los equipos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-19.svg' alt='')
            h4.text-center Sustitución preventiva de componentes de desgaste
            p.text-center Consiste en reemplazar piezas que tienen una vida útil limitada, siguiendo los intervalos o criterios técnicos establecidos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-20.svg' alt='')
            h4.text-center Análisis de aceite
            p.text-center Permite evaluar las características del lubricante y detectar indicios de desgaste o contaminación en los sistemas de la máquina.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-21.svg' alt='')
            h4.text-center Termografía
            p.text-center Utiliza instrumentos que detectan variaciones de temperatura para identificar posibles anomalías en componentes eléctricos o mecánicos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-22.svg' alt='')
            h4.text-center Medición de presiones hidráulicas y de compresión
            p.text-center Permite obtener información sobre las condiciones de funcionamiento de los sistemas hidráulicos y del motor.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img-23.svg' alt='')
            h4.text-center Lectura de códigos de falla
            p.text-center Utiliza herramientas de diagnóstico electrónico para identificar alertas o anomalías registradas por los sistemas de control de los tractores que cuentan con esta tecnología.

      p.mb-4 La elección de una metodología y de las técnicas correspondientes debe considerar las características de la maquinaria, su importancia dentro de las actividades agropecuarias y los recursos disponibles. Por ejemplo, en una flota de tractores, el seguimiento de las recomendaciones del fabricante puede orientar el mantenimiento preventivo, mientras que el análisis de aceite aporta información para evaluar las condiciones internas del motor.

      .row.justify-content-center
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-24.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") De esta manera, conocer las metodologías y técnicas de mantenimiento facilita la toma de decisiones sobre las intervenciones requeridas y la gestión de los recursos necesarios para atenderlas.

      Separador

      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5. Normativa aplicable al mantenimiento de maquinaria agrícola

      .bloque-texto-g.bloque-texto-g--inverso.cajon.C03.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
        .bloque-texto-g__img.recurso-mantenimiento-img2
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El mantenimiento de maquinaria agrícola debe desarrollarse teniendo en cuenta las disposiciones legales y técnicas relacionadas con la seguridad y salud en el trabajo, la protección del ambiente y las condiciones de operación de los equipos. Estas normas orientan la identificación de peligros, la prevención de accidentes, el manejo adecuado de residuos y el cumplimiento de las recomendaciones establecidas por los fabricantes.

      p.mb-4 En Colombia, la gestión del mantenimiento se relaciona principalmente con los siguientes referentes normativos:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Normativa y referentes aplicables al mantenimiento de maquinaria agrícola
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down") Norma o referente
                  th(data-aos="fade-down") Aspecto que regula
                  th(data-aos="fade-down") Aplicación en el mantenimiento
              tbody
                tr
                  td(data-aos="fade-down") Decreto 1072 de 2015
                  td(data-aos="fade-down") Decreto Único Reglamentario del Sector Trabajo. Incluye las disposiciones relacionadas con el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
                  td(data-aos="fade-down") Identificar los peligros asociados al mantenimiento, evaluar los riesgos y establecer medidas de prevención y control para proteger a los trabajadores.
                tr
                  td(data-aos="fade-down") Resolución 0312 de 2019
                  td(data-aos="fade-down") Establece los estándares mínimos del SG-SST, de acuerdo con las características de las empresas y los riesgos de sus actividades.
                  td(data-aos="fade-down") Verificar el cumplimiento de los requisitos del sistema, implementar acciones de mejora y mantener condiciones de trabajo seguras.
                tr
                  td(data-aos="fade-down") Decreto 1076 de 2015
                  td(data-aos="fade-down") Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Compila disposiciones relacionadas, entre otros aspectos, con la gestión de residuos peligrosos.
                  td(data-aos="fade-down") Orientar el manejo de aceites usados, filtros, baterías, envases contaminados y otros residuos generados durante el mantenimiento.
                tr
                  td(data-aos="fade-down") Manuales del fabricante
                  td(data-aos="fade-down") Establecen las especificaciones técnicas, recomendaciones de mantenimiento, advertencias y condiciones de operación de cada máquina.
                  td(data-aos="fade-down") Consultar los intervalos de mantenimiento, lubricantes, repuestos, procedimientos y precauciones de seguridad indicados para cada equipo.

      p.mb-4 En Colombia, la gestión del mantenimiento se relaciona principalmente con los siguientes referentes normativos:

      .tarjeta--container.row.mb-4.tema1-cuatro-referentes
        .col-md.tarjeta.color-primario.verde.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img-26.svg', alt='')          
          h3.text-center Seguridad de los trabajadores
          p Identificar los peligros relacionados con el uso de herramientas, la manipulación de cargas, los sistemas eléctricos, los fluidos a presión y las superficies calientes. También se deben establecer medidas de control y proporcionar los elementos de protección personal correspondientes.

        .col-md.tarjeta.color-acento-botones.cafe.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img-27.svg', alt='')          
          h3.text-center Protección ambiental
          p Separar los residuos generados, evitar su disposición en el suelo o en fuentes de agua y garantizar su almacenamiento y entrega a gestores autorizados cuando corresponda.

        .col-md.tarjeta.color-acento-contenido.naranja.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img-28.svg', alt='')          
          h3.text-center Cumplimiento de las especificaciones técnicas
          p Consultar los manuales del fabricante para seleccionar los lubricantes, repuestos y procedimientos adecuados, así como respetar los intervalos de mantenimiento establecidos.

        .col-md.tarjeta.color-acento-contenido.rosa.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img-29.svg', alt='')          
          h3.text-center Organización y documentación
          p Conservar los registros de las actividades, las inspecciones, los residuos entregados y las acciones de prevención implementadas.

      p.mb-0 La gestión del mantenimiento debe integrar las recomendaciones técnicas del fabricante con las disposiciones de seguridad y salud en el trabajo y de protección ambiental. Su cumplimiento contribuye a prevenir accidentes, evitar impactos ambientales y conservar la maquinaria en condiciones adecuadas de funcionamiento.

      Separador

      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.6. Costos y criticidad de los equipos

      p.mb-4 La gestión del mantenimiento de maquinaria agrícola implica considerar los recursos económicos necesarios para conservar los equipos en condiciones adecuadas de funcionamiento. Los costos de mantenimiento corresponden a los gastos asociados con las actividades de inspección, conservación, reparación y sustitución de componentes. Su identificación permite estimar los recursos financieros requeridos, elaborar presupuestos y tomar decisiones sobre la planificación de las intervenciones.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Los principales costos asociados con el mantenimiento son:

      .row.justify-content-center.mb-3
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Mano de obra")
              .col-12.mb-0
                p.mb-0 Corresponde al tiempo y al trabajo del personal encargado de las actividades de mantenimiento.
            .row(numero="2" titulo="Repuestos")
              .col-12.mb-0
                p.mb-0 Comprende la adquisición de piezas y componentes necesarios para sustituir aquellos que presentan desgaste o daños.
            .row(numero="3" titulo="Insumos")
              .col-12.mb-0
                p.mb-0 Incluye aceites, grasas, filtros, refrigerantes, combustibles y otros materiales utilizados durante las intervenciones.
            .row(numero="4" titulo="Herramientas y equipos")
              .col-12.mb-0
                p.mb-0 Contempla la adquisición, el uso, la conservación y la calibración de los instrumentos necesarios para las actividades de mantenimiento.
            .row(numero="5" titulo="Servicios externos")
              .col-12.mb-0
                p.mb-0 Corresponde a los gastos por trabajos especializados, análisis de laboratorio, asistencia técnica o reparaciones realizadas por terceros.
            .row(numero="6" titulo="Tiempo de inactividad")
              .col-12.mb-0
                p.mb-0 Representa el costo asociado a la indisponibilidad de la máquina mientras permanece fuera de servicio. Puede ocasionar retrasos en las labores agrícolas, pérdida de productividad y gastos adicionales.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-30.png', alt='')

      .recurso-costos-fondo.mb-4
        p.mb-4 Los costos de mantenimiento y reparación pueden variar a lo largo de la vida útil de un equipo. Durante los primeros años suelen predominar las actividades preventivas y la sustitución de componentes sometidos a desgaste. A medida que aumenta el tiempo de utilización, pueden presentarse reparaciones de mayor alcance, como intervenciones en el embrague, la bomba hidráulica o el motor.

        .row.justify-content-center.mb-4.recurso-intro-sin-img-console
          .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/img-32.png', alt='')

          .col.col-lg-8.col-12.order-lg-2.order-2
            .row.mb-0
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img-31.svg', alt='')

              .col-lg-10.col-12.mb-4
                p Por esta razón, es importante llevar un registro histórico de los gastos de cada máquina. Esta información permite estimar los costos futuros, ajustar los presupuestos y evaluar la conveniencia económica de continuar utilizando el equipo o reemplazarlo.

              p Además de los costos, en la gestión del mantenimiento es necesario determinar la criticidad de los equipos. Esta es una valoración que permite establecer la importancia de una máquina dentro de las actividades de una empresa y las consecuencias que podría generar su falla. Para determinarla se consideran aspectos como el impacto en la producción, los riesgos para la seguridad de las personas, las posibles afectaciones ambientales, los costos de reparación y la disponibilidad de equipos de reemplazo.

              .cajon.cajon.C05.px-4.py-4
                p.mb-0 No todas las máquinas requieren el mismo nivel de atención. Por ejemplo, una cosechadora que constituye el único equipo disponible durante la temporada de recolección puede tener una criticidad alta, debido a que una falla afectaría directamente la continuidad de la cosecha. En cambio, una guadañadora que cuenta con equipos de reemplazo puede tener una criticidad menor.

      p.mb-4 La clasificación de los equipos según su criticidad permite establecer prioridades en la gestión del mantenimiento y distribuir los recursos de manera adecuada. Los equipos de mayor criticidad requieren una planificación más rigurosa, seguimiento frecuente y disponibilidad de repuestos esenciales. Para los equipos de criticidad media o baja, las actividades pueden organizarse de acuerdo con sus necesidades, condiciones de funcionamiento y recursos disponibles.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0(data-aos="fade-down") En consecuencia, el análisis de los costos y la criticidad permite tomar decisiones fundamentadas sobre la asignación de recursos, la planificación de las intervenciones y la continuidad de las actividades agropecuarias.

      Separador

      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.7. Contingencias en la gestión del mantenimiento

      .bloque-texto-g.bloque-texto-g--inverso.cajon.C03.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
        .bloque-texto-g__img.recurso-mantenimiento-img3
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La gestión del mantenimiento de maquinaria agrícola debe contemplar la posibilidad de que se presenten situaciones imprevistas que afecten el funcionamiento de los equipos y la continuidad de las actividades agropecuarias. Estas situaciones, denominadas contingencias, pueden originarse por fallas inesperadas, daños de componentes, dificultades para conseguir repuestos, indisponibilidad de personal técnico o condiciones que impidan realizar las intervenciones programadas.

      p.mb-4 La previsión de contingencias permite establecer alternativas de respuesta y disponer oportunamente de los recursos necesarios para atender los imprevistos. Su planificación debe considerar las características de la maquinaria, la importancia de cada equipo para la operación, las temporadas de mayor demanda y las posibles consecuencias de una interrupción del servicio.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Entre las medidas que pueden contemplarse para responder ante estas situaciones se encuentran:

      .row.justify-content-center.mb-3(data-aos="fade-left")
        .col-lg-10
          .contenido-interno
            PasosA.color-primario.mb-5.pasos-texto-izquierda(tipo="n")
              .row.justify-content-center
                .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                  h3 Disponibilidad de repuestos críticos
                  p.mb-0 Mantener en inventario los componentes cuya falta pueda ocasionar la detención prolongada de equipos importantes para la operación.
                .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img-33.svg', alt="")
              .row.justify-content-center
                .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img-34.svg', alt="")
                .col-lg-8(data-aos="fade-left")
                  h3 Convenios con talleres externos
                  p.mb-0 Establecer acuerdos con proveedores o talleres especializados para contar con asistencia técnica cuando la empresa no disponga del personal o los equipos necesarios.
              .row.justify-content-center
                .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                  h3 Máquinas de reemplazo o alquiler
                  p.mb-0 Prever alternativas para continuar las labores agrícolas cuando un equipo principal deba permanecer fuera de servicio.
                .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img-35.svg', alt="")
              .row.justify-content-center
                .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img-36.svg', alt="")
                .col-lg-8(data-aos="fade-left")
                  h3 Disponibilidad de personal técnico
                  p.mb-0 Organizar el apoyo de mecánicos o técnicos durante las temporadas de mayor actividad, cuando una falla puede ocasionar retrasos importantes.
              .row.justify-content-center
                .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                  h3 Protocolo de atención de fallas
                  p.mb-0 Establecer cómo reportar las anomalías, a quién informar y qué recursos deben gestionarse para atender la situación.
                .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img-37.svg', alt="")

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") Por ejemplo, si una cosechadora presenta una avería durante la temporada de recolección, la empresa puede recurrir a un repuesto crítico disponible en bodega, solicitar el apoyo de un taller externo o gestionar el alquiler de otra máquina. La alternativa dependerá de la gravedad de la falla, el tiempo estimado de reparación y las necesidades de continuidad de la cosecha.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-38.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") La planificación de contingencias debe incorporarse a la programación del mantenimiento y a la gestión de los recursos. De esta manera, la empresa puede reducir los tiempos de inactividad, limitar los costos derivados de las fallas imprevistas y mantener la continuidad de las labores agropecuarias.

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
