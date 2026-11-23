<template lang="pug">
  .curso-main-container.pb-3.tema3-rv
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Planificación, programación y presupuesto del mantenimiento

      .row.justify-content-center.mb-4
        .col-12
          .recurso-funciones-mantenimiento
            figure.recurso-funciones-mantenimiento__imagen
              img(src='@/assets/curso/temas/t3/img-01.png', alt='')

            .recurso-funciones-mantenimiento__texto
              p.mb-0 La gestión del mantenimiento de maquinaria agrícola requiere organizar con anticipación las actividades que deben realizarse, establecer cuándo se llevarán a cabo y prever los recursos económicos necesarios para su ejecución. Estos aspectos permiten reducir la improvisación, aprovechar adecuadamente los recursos disponibles y mantener los equipos en condiciones apropiadas para el desarrollo de las labores agropecuarias.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-02.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") La planificación permite definir las tareas de mantenimiento que requiere cada máquina, teniendo en cuenta sus características, las recomendaciones del fabricante, las horas de funcionamiento y las condiciones de operación. La programación establece los momentos en que se realizarán las actividades, el personal responsable y la disponibilidad de los equipos. Por su parte, el presupuesto permite estimar los costos de mano de obra, repuestos, insumos y servicios necesarios para cumplir con el mantenimiento previsto.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") Estos elementos se relacionan entre sí y deben responder a las necesidades de cada equipo y de la operación agrícola. Por ejemplo, para programar el mantenimiento preventivo de un tractor antes de la temporada de siembra, es necesario identificar los servicios requeridos, establecer las fechas de intervención y calcular los recursos económicos que permitan disponer oportunamente de los repuestos y demás insumos.

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1. Plan de mantenimiento

      .row.justify-content-center.mb-4.recurso-intro-sin-img-console
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-03.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p El plan de mantenimiento es un documento que establece las actividades que deben realizarse a cada máquina o grupo de máquinas, la frecuencia con la que se deben ejecutar, los recursos necesarios y los responsables de su cumplimiento. Su finalidad es organizar las intervenciones de manera anticipada para conservar los equipos en condiciones adecuadas de funcionamiento y favorecer su disponibilidad, procurando un uso eficiente de los recursos.
            .cajon.cajon.C01.color-secundario.px-4.py-4.mb-4
              p.mb-0 Para elaborarlo, se toma como punto de partida el manual del fabricante, en el que se establecen las recomendaciones técnicas, los intervalos de mantenimiento y las especificaciones de los componentes. Esta información se complementa con la experiencia de la empresa, los antecedentes de funcionamiento de la maquinaria y las condiciones reales de trabajo.
            p Un plan de mantenimiento debe considerar las características de cada equipo y las actividades para las cuales se utiliza. Por ejemplo, un tractor que trabaja en terrenos con alta concentración de polvo o en condiciones de humedad y barro puede requerir una atención particular, de acuerdo con las recomendaciones del fabricante y las condiciones de operación.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Un plan de mantenimiento debe reunir las siguientes características:

      .row.justify-content-center.mb-3
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Específico")
              .col-12.mb-0
                p.mb-0 Establece tareas concretas para cada máquina o grupo de equipos, de acuerdo con sus características y necesidades.
            .row(numero="2" titulo="Realista")
              .col-12.mb-0
                p.mb-0 Considera los recursos humanos, técnicos y económicos disponibles para cumplir las actividades previstas.
            .row(numero="3" titulo="Basado en el uso")
              .col-12.mb-0
                p.mb-0 Determina las frecuencias de mantenimiento teniendo en cuenta las horas de funcionamiento, las hectáreas trabajadas o los periodos de tiempo establecidos.
            .row(numero="4" titulo="Flexible")
              .col-12.mb-0
                p.mb-0 Permite realizar ajustes cuando cambian las condiciones de operación, por ejemplo, cuando la maquinaria trabaja en ambientes con exceso de polvo, barro o humedad.
            .row(numero="5" titulo="Documentado")
              .col-12.mb-0
                p.mb-0 Registra las actividades previstas, sus frecuencias, los recursos necesarios y los responsables, facilitando el seguimiento y control del mantenimiento.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-04.png', alt='')

      p.mb-0 La elaboración de un plan permite anticipar las necesidades de mantenimiento y organizar los recursos antes de que se requieran las intervenciones. Además, constituye la base para programar las actividades y estimar los costos asociados a su cumplimiento.

      Separador

      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.2. Tipos de planes de mantenimiento

      p.mb-4 Los planes de mantenimiento se pueden organizar de acuerdo con el criterio utilizado para establecer la frecuencia de las intervenciones. La elección depende de las características de la maquinaria, su intensidad de uso, las condiciones de operación y las recomendaciones del fabricante.
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Los principales tipos de planes de mantenimiento aplicables a la maquinaria agrícola son:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 7.
            span Tipos de planes de mantenimiento
          .tabla-a.color-acento-contenido.tabla-metodologias.tema3-tabla-planes
            table
              thead
                tr
                  th(data-aos="fade-down") Tipo de plan
                  th(data-aos="fade-down") Características
                  th(data-aos="fade-down") Ejemplo de aplicación
              tbody
                tr
                  td(data-aos="fade-down") Por horas de uso
                  td(data-aos="fade-down") Establece las actividades de mantenimiento según las horas de funcionamiento registradas en el horómetro de la máquina.
                  td(data-aos="fade-down") Programar el cambio de aceite del motor cada 250 horas de funcionamiento, según el manual del fabricante.
                tr
                  td(data-aos="fade-down") Por calendario
                  td(data-aos="fade-down") Define las intervenciones de acuerdo con periodos de tiempo determinados, independientemente de las horas de utilización del equipo.
                  td(data-aos="fade-down") Realizar una revisión general del tractor cada seis meses.
                tr
                  td(data-aos="fade-down") Por temporada
                  td(data-aos="fade-down") Organiza las actividades de mantenimiento antes, durante o después de los periodos de mayor actividad agrícola.
                  td(data-aos="fade-down") Revisar y alistar una cosechadora antes del inicio de la temporada de recolección.
                tr
                  td(data-aos="fade-down") Basado en la condición
                  td(data-aos="fade-down") Establece las intervenciones a partir de la evaluación del estado real de la maquinaria y de sus componentes.
                  td(data-aos="fade-down") Programar una revisión del motor a partir de los resultados del análisis de aceite.
                tr
                  td(data-aos="fade-down") Mixto
                  td(data-aos="fade-down") Combina dos o más criterios para determinar las frecuencias de mantenimiento, de acuerdo con las características y condiciones de operación del equipo.
                  td(data-aos="fade-down") Programar una revisión cada 250 horas de funcionamiento o cada seis meses, según la condición que se presente primero.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") La selección del tipo de plan debe responder a las necesidades de cada máquina y a las condiciones en las que desarrolla sus labores. En algunos casos, es conveniente combinar criterios para evitar que el mantenimiento dependa de un único factor y garantizar que las intervenciones se realicen oportunamente.
    
      Separador

      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3. Procedimiento para elaborar el plan de mantenimiento

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-05.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") La elaboración del plan de mantenimiento requiere recopilar y organizar información sobre las máquinas, sus condiciones de funcionamiento y las actividades necesarias para conservarlas en buen estado. Para ello, se deben considerar las recomendaciones del fabricante, las horas de utilización, las condiciones de trabajo y los recursos disponibles.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") El procedimiento comprende los siguientes pasos:
      
      .tarjeta.tarjeta--gris2.recurso-linea-pasos.p-4.mb-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row.align-items-start(titulo="A")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-06.png', alt='')
            .col-md-5
              h4 Identificar las máquinas y los equipos
              p Elaborar un inventario de la maquinaria que requiere mantenimiento, registrando datos como tipo de equipo, marca, modelo, número de identificación y horómetro.

          .row.align-items-start(titulo="B")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-07.png', alt='')
            .col-md-5
              h4 Consultar los manuales del fabricante
              p Revisar las recomendaciones técnicas, las actividades de mantenimiento, los intervalos de servicio, los lubricantes, los repuestos y las especificaciones requeridas para cada equipo.

          .row.align-items-start(titulo="C")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-08.png', alt='')
            .col-md-5
              h4 Determinar las necesidades de mantenimiento
              p Identificar las tareas que deben realizarse según las características de la máquina, su historial de funcionamiento, las fallas recurrentes y las condiciones en las que opera.

          .row.align-items-start(titulo="D")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-09.png', alt='')
            .col-md-5
              h4 Estimar la utilización de los equipos
              p Establecer las horas de funcionamiento previstas, las hectáreas que se trabajarán o los periodos de utilización, según corresponda. Esta información permite definir las frecuencias de las intervenciones.

          .row.align-items-start(titulo="E")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-10.png', alt='')
            .col-md-5
              h4 Considerar las condiciones de operación
              p Analizar factores como la presencia de polvo, barro, humedad, altas temperaturas y exigencias de trabajo, debido a que pueden influir en las necesidades de mantenimiento.

          .row.align-items-start(titulo="F")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-11.png', alt='')
            .col-md-5
              h4 Asignar los recursos y responsables
              p Determinar el personal requerido, las herramientas, los repuestos, los insumos y los recursos económicos necesarios para desarrollar las actividades.

          .row.align-items-start(titulo="G")
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-12.png', alt='')
            .col-md-5
              h4 Consolidar el plan de mantenimiento
              p Organizar la información en un documento que indique las actividades previstas, su frecuencia, los recursos necesarios y los responsables de su cumplimiento.

      p.mb-4 La elaboración del plan debe partir de información técnica confiable y ajustarse a las condiciones reales de la operación agrícola. Además, es necesario revisarlo y actualizarlo cuando cambien las condiciones de utilización de la maquinaria o se identifiquen nuevas necesidades de mantenimiento.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0(data-aos="fade-down") Este procedimiento permite establecer una base organizada para la programación de las intervenciones y la estimación de los recursos requeridos, evitando improvisaciones y favoreciendo la disponibilidad de los equipos.

      Separador

      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.4. Programación de actividades de mantenimiento

      .bloque-texto-g.bloque-texto-g--inverso.cajon.C03.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
        .bloque-texto-g__img.recurso-mantenimiento-img5
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La programación de actividades de mantenimiento consiste en organizar las intervenciones establecidas en el plan, definiendo cuándo se realizarán, quiénes serán responsables y qué recursos estarán disponibles para ejecutarlas. Su propósito es coordinar las actividades de mantenimiento con las necesidades de funcionamiento de la maquinaria y los tiempos de operación de la empresa agropecuaria.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Para realizar una programación adecuada, se deben considerar los siguientes aspectos:

      .cajon.cajon.C06.p-5.mb-4.tema3-slyder-programacion
        SlyderB(:key="slyderTecnicasKey" :datos="datosSlyder")

      p.mb-4 La programación puede apoyarse en diferentes herramientas que facilitan la organización de las actividades y el seguimiento de los tiempos establecidos:

      .row.mb-4.tema3-tarjetas-programacion
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Cronograma de mantenimiento
            p.text-center Presenta las actividades previstas y las fechas o periodos en los que deben realizarse.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Diagrama de Gantt
            p.text-center Permite representar las actividades mediante barras distribuidas en una escala de tiempo, facilitando la identificación de su duración, secuencia y posibles coincidencias.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Programación por horas de funcionamiento
            p.text-center Establece las intervenciones de acuerdo con las lecturas del horómetro de cada máquina.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Priorización por criticidad
            p.text-center Organiza las intervenciones considerando la importancia de los equipos y las consecuencias que tendría una falla en la operación.
      
      p.mb-4 Por ejemplo, una empresa agropecuaria puede programar la revisión de sus tractores antes de la temporada de siembra y reservar los periodos de menor actividad para realizar intervenciones que requieran mayor tiempo de inactividad.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") Una programación adecuada permite coordinar las actividades, el personal y los recursos disponibles, reducir interrupciones imprevistas y mantener la maquinaria en condiciones apropiadas para atender las necesidades de la producción agrícola.
      
      Separador

      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.5. Previsión de contingencias

      .row.justify-content-center.recurso-intro-sin-img-console.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-20.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p La previsión de contingencias consiste en identificar situaciones imprevistas que puedan afectar la programación del mantenimiento, la disponibilidad de la maquinaria o la continuidad de las actividades agropecuarias. Su propósito es establecer alternativas de respuesta y disponer oportunamente de los recursos necesarios para reducir las consecuencias de estos eventos.
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img-21.svg', alt='')
            .col-lg-10.col-12
              p En el mantenimiento de maquinaria agrícola pueden presentarse contingencias como fallas inesperadas, daños de componentes, retrasos en la entrega de repuestos, falta de personal técnico o indisponibilidad de los equipos durante periodos de alta demanda.
            p Para anticiparse a estas situaciones, es importante considerar las siguientes medidas:

      .row.justify-content-center.mb-3
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Disponibilidad de repuestos e insumos")
              .col-12.mb-0
                p.mb-0 Identificar los componentes necesarios para atender posibles fallas y mantener existencias de aquellos cuya ausencia pueda ocasionar la detención prolongada de equipos importantes.
            .row(numero="2" titulo="Tiempos de reserva")
              .col-12.mb-0
                p.mb-0 Contemplar márgenes de tiempo en la programación para atender retrasos o intervenciones que requieran más tiempo del previsto.
            .row(numero="3" titulo="Alternativas de asistencia técnica")
              .col-12.mb-0
                p.mb-0 Establecer acuerdos con talleres externos o proveedores especializados para contar con apoyo cuando la empresa no disponga del personal o los recursos necesarios.
            .row(numero="4" titulo="Maquinaria de reemplazo")
              .col-12.mb-0
                p.mb-0 Prever la disponibilidad de otros equipos o la posibilidad de alquilar maquinaria para evitar la interrupción de las labores agrícolas.
            .row(numero="5" titulo="Ajustes en la programación")
              .col-12.mb-0
                p.mb-0 Establecer prioridades y reorganizar las fechas de intervención cuando se presenten situaciones que requieran atención inmediata.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-22.png', alt='')

      p.mb-4 Por ejemplo, si una cosechadora presenta una avería durante la temporada de recolección, la empresa puede recurrir a un repuesto disponible en bodega, solicitar el apoyo de un taller externo o gestionar el alquiler de otra máquina para continuar las labores.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0(data-aos="fade-down") La previsión de contingencias permite reducir los tiempos de inactividad, limitar los costos derivados de situaciones imprevistas y mantener la continuidad de las actividades agropecuarias.

      Separador

      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.6. Presupuesto de mantenimiento

      .row.justify-content-center.mb-4
        .col-12
          .recurso-presupuesto
            .row.g-0.align-items-stretch
              .col-lg-7.col-12.recurso-presupuesto__contenido
                p.mb-4 El presupuesto de mantenimiento es una estimación anticipada de los recursos económicos necesarios para desarrollar las actividades de mantenimiento de la maquinaria agrícola durante un periodo determinado. Su elaboración permite prever los gastos, organizar la disponibilidad de dinero y garantizar que se cuente con los recursos necesarios para cumplir el plan de mantenimiento.

                .row.g-2
                  .col-auto
                    img.recurso-presupuesto__icono(src='@/assets/curso/temas/t3/img-24.svg', alt='')
                  .col
                    p.mb-0 Para establecerlo, se deben considerar las actividades previstas, las características de los equipos, las horas de funcionamiento estimadas y las necesidades de mantenimiento identificadas. También es necesario calcular los costos asociados a los diferentes recursos que se utilizarán.

              .col-lg-5.col-12.recurso-presupuesto__imagen
                img(src='@/assets/curso/temas/t3/img-23.png', alt='')

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Entre los principales rubros que conforman un presupuesto de mantenimiento se encuentran:

      .row.justify-content-center.align-items-center.mb-4.slyder-etapas-bg.tema3-slyder-rubros(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-25.svg' alt='')
            h4.text-center Repuestos
            p.text-center Comprende los recursos destinados a adquirir piezas y componentes necesarios para las intervenciones preventivas y correctivas.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-26.svg' alt='')
            h4.text-center Insumos
            p.text-center Incluye aceites, grasas, filtros, refrigerantes y demás materiales requeridos para las actividades de mantenimiento.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-27.svg' alt='')
            h4.text-center Mano de obra
            p.text-center Corresponde al costo del personal encargado de realizar las intervenciones.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-28.svg' alt='')
            h4.text-center Servicios externos
            p.text-center Contempla los gastos por asistencia técnica, análisis especializados y reparaciones realizadas por talleres o proveedores externos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-29.svg' alt='')
            h4.text-center Reserva para imprevistos
            p.text-center Considera recursos económicos para atender fallas inesperadas o reparaciones correctivas que no estaban contempladas inicialmente.

      .row.justify-content-center
        .col.col-lg-10.col-12
          p.mb-4 El presupuesto debe guardar correspondencia con el plan de mantenimiento y las condiciones reales de operación de la maquinaria. Por ello, es importante utilizar información de los registros históricos de gastos, consultar precios actualizados de repuestos e insumos y considerar las posibles variaciones en las necesidades de mantenimiento.
    
      .row.justify-content-center
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-30.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Una adecuada elaboración del presupuesto facilita la gestión de compras, la disponibilidad oportuna de recursos y el control de los gastos. Asimismo, proporciona información para evaluar los costos de mantenimiento y tomar decisiones relacionadas con la utilización y conservación de la maquinaria agrícola.

      Separador

      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.7. Tipos, clasificación y elaboración del presupuesto

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4.tema3-bloque-intro(data-aos="flip-down")
        .bloque-texto-g__img.img-bg-03
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El presupuesto de mantenimiento puede clasificarse de acuerdo con el periodo que comprende, los equipos que incluye y la naturaleza de los gastos que contempla. Esta clasificación permite organizar los recursos económicos según las necesidades de la empresa y facilitar la distribución y el control de los costos.
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") De acuerdo con estos criterios, se identifican las siguientes clasificaciones:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 8.
            span Clasificación del presupuesto de mantenimiento
          .tabla-a.color-acento-contenido.tabla-presupuesto
            table
              thead
                tr
                  th Criterio
                  th Tipo de presupuesto
                  th Características
              tbody
                tr
                  td(rowspan="3") Según el periodo
                  td Anual
                  td Estima los recursos económicos necesarios para las actividades de mantenimiento durante un año.
                tr
                  td Por temporada
                  td Prevé los gastos asociados al mantenimiento de la maquinaria durante un periodo de actividad agrícola específica, como la siembra o la cosecha.
                tr
                  td Mensual
                  td Distribuye los recursos económicos para atender las actividades de mantenimiento previstas en cada mes.
                tr
                  td(rowspan="3") Según el alcance
                  td Por máquina
                  td Estima los costos de mantenimiento de un equipo específico.
                tr
                  td Por flota
                  td Agrupa los gastos correspondientes a un conjunto de máquinas, como los tractores o las cosechadoras de una empresa.
                tr
                  td General
                  td Integra los recursos económicos destinados al mantenimiento de toda la maquinaria y los equipos de la empresa.
                tr
                  td(rowspan="2") Según la naturaleza del gasto
                  td Operación o rutinario
                  td Incluye los gastos habituales del mantenimiento, como lubricantes, filtros, repuestos de desgaste y mano de obra para servicios periódicos.
                tr
                  td Inversión o reparaciones mayores
                  td Contempla recursos destinados a intervenciones de mayor alcance, como reconstrucciones o reparaciones importantes de componentes y sistemas.

      p.mb-4 La elaboración del presupuesto parte del plan de mantenimiento y de las necesidades identificadas para cada equipo. Para ello, se deben considerar los siguientes pasos:

      .row.justify-content-center.mb-3
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Revisar el plan de mantenimiento")
              .col-12.mb-0
                p.mb-0 Identificar los componentes necesarios para atender posibles fallas y mantener existencias de aquellos cuya ausencia pueda ocasionar la detención prolongada de equipos importantes.
            .row(numero="2" titulo="Determinar los recursos necesarios")
              .col-12.mb-0
                p.mb-0 Establecer las cantidades de repuestos, insumos, herramientas y servicios requeridos para cumplir las actividades.
            .row(numero="3" titulo="Estimar los costos")
              .col-12.mb-0
                p.mb-0 Consultar precios actualizados de los materiales, calcular los costos de mano de obra y determinar el valor de los servicios externos.
            .row(numero="4" titulo="Incluir una reserva para imprevistos")
              .col-12.mb-0
                p.mb-0 Considerar recursos económicos para atender posibles fallas correctivas o gastos no contemplados inicialmente.
            .row(numero="5" titulo="Distribuir los recursos en el tiempo")
              .col-12.mb-0
                p.mb-0 Organizar los valores estimados de acuerdo con los periodos en los que se realizarán las actividades de mantenimiento.
            .row(numero="6" titulo="Consolidar el presupuesto")
              .col-12.mb-0
                p.mb-0 Reunir los costos identificados y establecer el valor total requerido para el periodo correspondiente.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-32.png', alt='')

      p.mb-0 El presupuesto debe revisarse periódicamente para identificar variaciones entre los gastos estimados y los ejecutados. Esta información facilita la gestión de compras, la negociación con proveedores, el cálculo del costo de mantenimiento por hora de funcionamiento y la toma de decisiones sobre la conservación o el reemplazo de la maquinaria agrícola.

      Separador

      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.8. Costos de mantenimiento y reparación durante la vida útil de la máquina

      .row.justify-content-center.mb-4.recurso-intro-sin-img-console
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-33.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p Los costos de mantenimiento y reparación de una máquina agrícola no permanecen constantes durante toda su vida útil. Generalmente, aumentan a medida que el equipo acumula horas de funcionamiento y sus componentes presentan desgaste. Durante los primeros años predominan las actividades de mantenimiento preventivo y la sustitución de piezas sometidas al uso. Posteriormente, pueden requerirse reparaciones de mayor alcance, como el cambio del embrague, la reparación de la bomba hidráulica o el reacondicionamiento del motor.
            .cajon.cajon.C02.color-primario.px-4.py-4
              p.mb-0 Esta evolución implica que los recursos destinados al mantenimiento deben ajustarse a la antigüedad y las condiciones de funcionamiento de cada equipo. Las estimaciones técnicas relacionan el costo acumulado de las reparaciones con el precio de adquisición de la máquina y las horas de utilización, mostrando una tendencia de incremento a medida que aumenta su tiempo de servicio (American Society of Agricultural and Biological Engineers [ASABE], 2011).

      p.mb-4 El seguimiento de los costos de mantenimiento y reparación permite tomar decisiones relacionadas con la administración de la maquinaria:

      .row.mb-4.recurso-caracteristicas-cortas
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t3/img-34.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Planificar el presupuesto
                p.text-center.mb-0 Ajustar los recursos destinados a reparaciones, considerando que los equipos con mayor tiempo de utilización pueden requerir intervenciones más costosas.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t3/img-35.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Calcular el costo de operación por hora
                p.text-center.mb-0 Determinar cuánto representa el mantenimiento y las reparaciones por cada hora de funcionamiento de la máquina.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t3/img-36.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Evaluar el reemplazo del equipo
                p.text-center.mb-0 Analizar si resulta económicamente conveniente continuar utilizando una máquina o sustituirla cuando los costos de propiedad y reparación por hora comienzan a aumentar.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-37.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Para realizar este análisis es fundamental conservar la hoja de vida de cada máquina, con los registros de horas de funcionamiento, intervenciones realizadas, repuestos utilizados y gastos asociados. Esta información permite conocer el comportamiento de los costos y sustentar las decisiones de mantenimiento y renovación de los equipos (Edwards, 2026).
      
      .recurso-evolucion-costos.mb-4

        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0.tema3-evolucion-icono-col
            figure
              img.tema3-icono-titulo(src='@/assets/curso/temas/t3/icono.svg', alt='').m-auto
          .col-lg-auto.col-9.titulo01.tema3-evolucion-titulo
            .p-1
              h3.mb-0.ms-3 Ejemplo de evolución de los costos de reparación

        p.mb-4 La siguiente tabla presenta cifras ilustrativas de los costos acumulados de reparación de un tractor a medida que aumenta su tiempo de utilización.

        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col.col-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9.
              span Costo de reparaciones acumulado de un tractor según sus horas de uso
            .tabla-a.color-acento-contenido.tabla-metodologias.tema3-tabla-costos
              table
                thead
                  tr
                    th(data-aos="fade-down") Horas acumuladas
                    th(data-aos="fade-down") Reparaciones acumuladas
                    th(data-aos="fade-down") Reparaciones por hora (promedio)
                    th(data-aos="fade-down") Tendencia
                tbody
                  tr
                    td(data-aos="fade-down") 2.000
                    td(data-aos="fade-down") $12.000.000
                    td(data-aos="fade-down") $6.000
                    td(data-aos="fade-down") Baja
                  tr
                    td(data-aos="fade-down") 4.000
                    td(data-aos="fade-down") $36.000.000
                    td(data-aos="fade-down") $9.000
                    td(data-aos="fade-down") Creciente
                  tr
                    td(data-aos="fade-down") 6.000
                    td(data-aos="fade-down") $72.000.000
                    td(data-aos="fade-down") $12.000
                    td(data-aos="fade-down") Creciente
                  tr
                    td(data-aos="fade-down") 8.000
                    td(data-aos="fade-down") $124.000.000
                    td(data-aos="fade-down") $15.500
                    td(data-aos="fade-down") Alta

        .row.justify-content-center.align-items-stretch.mb-4.g-0
          .col-lg-1.d-none.d-lg-flex.align-items-center.justify-content-center
            figure.recurso-valores-icono
              img(src='@/assets/curso/temas/t3/img-38.svg', alt='')

          .col-lg-9.col-12
            .recurso-valores-texto
              p.mb-0(data-aos="fade-down") Los valores reales dependen de las características del equipo, las condiciones de operación y el mantenimiento recibido.

        p.mb-4 Los datos permiten identificar que, a medida que el tractor acumula horas de funcionamiento, aumenta el costo promedio de las reparaciones por hora. Esta información es útil para estimar los gastos futuros y evaluar la conveniencia de conservar o reemplazar el equipo.

      .bloque-texto-g.bloque-texto-g--inverso.cajon.C03.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
        .bloque-texto-g__img.recurso-mantenimiento-img6
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") En consecuencia, el análisis de los costos durante la vida útil de la maquinaria permite mejorar la planificación financiera, fundamentar las decisiones de mantenimiento y aprovechar de manera más eficiente los recursos de la empresa.

</template>

<script>
import imgSlyder14 from '@/assets/curso/temas/t3/img-14.png'
import imgSlyder15 from '@/assets/curso/temas/t3/img-15.png'
import imgSlyder16 from '@/assets/curso/temas/t3/img-16.png'
import imgSlyder17 from '@/assets/curso/temas/t3/img-17.png'
import imgSlyder18 from '@/assets/curso/temas/t3/img-18.png'
import imgSlyder19 from '@/assets/curso/temas/t3/img-19.png'

export default {
  name: 'Tema3',

  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    slyderErroresKey: 0,
    slyderTecnicasKey: 0,

    datosSlyder: [
      {
        titulo: 'Actividades previstas',
        texto:
          'Identificar las tareas de mantenimiento establecidas en el plan, de acuerdo con las necesidades de cada máquina.',
        imagen: imgSlyder14,
      },
      {
        titulo: 'Frecuencia y fechas de intervención',
        texto:
          'Determinar cuándo debe realizarse cada actividad, teniendo en cuenta las horas de funcionamiento, los intervalos establecidos por el fabricante y los periodos de utilización.',
        imagen: imgSlyder15,
      },
      {
        titulo: 'Disponibilidad del personal',
        texto:
          'Asignar los responsables de las intervenciones, considerando sus conocimientos y disponibilidad.',
        imagen: imgSlyder16,
      },
      {
        titulo: 'Equipos, herramientas e insumos',
        texto:
          'Verificar que se cuente con los recursos necesarios para realizar las actividades en las fechas previstas.',
        imagen: imgSlyder17,
      },
      {
        titulo: 'Disponibilidad de la maquinaria',
        texto:
          'Coordinar las intervenciones para evitar que los equipos permanezcan fuera de servicio durante los periodos de mayor demanda agrícola.',
        imagen: imgSlyder18,
      },
      {
        titulo: 'Prioridad de atención',
        texto:
          'Considerar la criticidad de los equipos y las consecuencias que podría generar el retraso de una intervención.',
        imagen: imgSlyder19,
      },
    ],
  }),

  mounted() {
    this.$nextTick(() => {
      this.slyderErroresKey += 1
      this.slyderTecnicasKey += 1
      this.$aosRefresh()
    })
  },

  activated() {
    this.$nextTick(() => {
      this.slyderErroresKey += 1
      this.slyderTecnicasKey += 1
      this.$aosRefresh()
    })
  },

  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
