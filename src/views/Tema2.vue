<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.tema2-rv.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Diagnóstico de mantenimiento y reconocimiento de fallas

      .row.justify-content-center
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p El diagnóstico de mantenimiento es un proceso fundamental para conocer las condiciones de funcionamiento de la maquinaria agrícola, identificar posibles anomalías y determinar las necesidades de intervención de sus diferentes sistemas y componentes. Su finalidad es establecer el estado técnico de los equipos, reconocer las posibles causas de las fallas y proporcionar información para decidir las acciones de mantenimiento requeridas.
            .cajon.cajon.C02.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") En la maquinaria agrícola, el diagnóstico requiere observar su comportamiento durante la operación, identificar cambios en el funcionamiento, reconocer señales de desgaste y analizar la información disponible sobre su historial de mantenimiento. Para ello, se consideran aspectos como los ruidos inusuales, las vibraciones, las fugas de fluidos, el aumento de temperatura, las pérdidas de potencia y las variaciones en el desempeño de los sistemas.
            .col-lg-auto.d-none.d-lg-block.svg-podcast-console
              figure
                img(src='@/assets/curso/temas/t2/img-02.svg', alt='')
            .col-lg-10.col-12
              p.mb-4 El reconocimiento de fallas también permite establecer prioridades para la atención de los equipos, estimar los recursos necesarios y organizar las intervenciones de acuerdo con la importancia de la máquina y las condiciones en las que se utiliza. Por esta razón, es necesario conocer los diferentes tipos de diagnóstico, las características de las fallas, los métodos para identificar sus síntomas y las técnicas aplicables a los sistemas de la maquinaria agrícola.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-01.png', alt='')

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1. Tipos de diagnóstico de mantenimiento

      .bloque-texto-g.color-primario.tema2-bloque-intro.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
        .bloque-texto-g__img.img-bg-02
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El diagnóstico de mantenimiento puede realizarse mediante diferentes métodos, según las características de la maquinaria, el sistema que se desea evaluar y las señales identificadas. Para ello, se utilizan técnicas de observación, instrumentos de medición, herramientas electrónicas y análisis de fluidos que permiten obtener información sobre las condiciones de funcionamiento de los equipos.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Los principales tipos de diagnóstico aplicables a la maquinaria agrícola son los siguientes:

      SlyderB.tema2-slyder.mb-4(:datos="datosSlyder2")

      p.mb-0 La selección del método de diagnóstico depende de la anomalía que se desea investigar, las características de la máquina y los recursos técnicos disponibles. En algunos casos, es necesario combinar varios métodos para obtener información más completa sobre el estado del equipo.

      Separador
      
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.2. Clasificación y características de las fallas

      .row.justify-content-center.mb-5
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .cajon.cajon.C01.color-secundario.px-4.py-3.mb-4
            p.mb-0 Una falla es una condición en la que una máquina o alguno de sus componentes pierde la capacidad de cumplir adecuadamente la función para la cual fue diseñado. En la maquinaria agrícola, puede afectar el funcionamiento de uno o varios sistemas, disminuir el rendimiento del equipo o impedir que continúe operando.
          p Las fallas pueden clasificarse de acuerdo con su origen, comportamiento y consecuencias. Reconocer sus características permite comprender cómo se presentan, identificar su posible impacto y establecer prioridades para el diagnóstico y la gestión del mantenimiento. A continuación, se presenta su clasificación:
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-08.png', alt='')

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 5.
            span Clasificación y características de las fallas en maquinaria agrícola
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down") Clasificación
                  th(data-aos="fade-down") Características
                  th(data-aos="fade-down") Ejemplo
              tbody
                tr
                  td(data-aos="fade-down") Mecánicas
                  td(data-aos="fade-down") Se relacionan con el desgaste, la deformación, la rotura o el deterioro de componentes que transmiten movimiento o soportan cargas.
                  td(data-aos="fade-down") Desgaste de engranajes, rotura de correas o daño en rodamientos.
                tr
                  td(data-aos="fade-down") Eléctricas
                  td(data-aos="fade-down") Se presentan por interrupciones, cortocircuitos, conexiones defectuosas o deterioro de componentes del sistema eléctrico.
                  td(data-aos="fade-down") Batería descargada, fusible quemado o cable deteriorado.
                tr
                  td(data-aos="fade-down") Hidráulicas
                  td(data-aos="fade-down") Se originan por fugas, pérdida de presión, contaminación del fluido o deterioro de los componentes del circuito hidráulico.
                  td(data-aos="fade-down") Fuga en una manguera o pérdida de fuerza en el sistema de elevación.
                tr
                  td(data-aos="fade-down") Térmicas
                  td(data-aos="fade-down") Se relacionan con temperaturas de funcionamiento superiores o inferiores a las condiciones normales del equipo.
                  td(data-aos="fade-down") Sobrecalentamiento del motor por fallas en el sistema de refrigeración.
                tr
                  td(data-aos="fade-down") Operativas
                  td(data-aos="fade-down") Se producen por condiciones inadecuadas de utilización, sobrecargas, operación incorrecta o incumplimiento de las recomendaciones del fabricante.
                  td(data-aos="fade-down") Utilizar un tractor por encima de su capacidad de trabajo o con una presión inadecuada en los neumáticos.

      p.mb-4 Además de su clasificación, las fallas pueden presentar diferentes comportamientos durante la vida útil de la maquinaria:

      .row.justify-content-center.mb-4(data-aos="flip-down")
        .col-xl-4.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-09.svg", alt="").img80.m-auto
            h4.text-center Fallas iniciales
            p.text-center Aparecen durante las primeras etapas de funcionamiento y pueden estar relacionadas con defectos de fabricación, montaje, instalación o ajustes inadecuados.
        .col-xl-4.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-10.svg", alt="").img80.m-auto
            h4.text-center Fallas aleatorias
            p.text-center Se presentan de manera imprevista durante la operación y no siguen necesariamente un patrón definido.
        .col-xl-4.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-11.svg", alt="").img80.m-auto
            h4.text-center Fallas por desgaste
            p.text-center Aparecen progresivamente como consecuencia del uso, el envejecimiento de los componentes y la exposición a condiciones de trabajo exigentes.

      p La identificación de la clasificación y las características de las fallas facilita el reconocimiento de sus posibles causas y orienta la selección de los métodos de diagnóstico. Esta información también contribuye a determinar los recursos y la atención que requiere cada equipo.

      Separador

      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3. Identificación de síntomas y detección de fallas

      p.mb-4 La identificación de síntomas es una etapa fundamental del diagnóstico de mantenimiento, ya que permite reconocer señales que indican posibles alteraciones en el funcionamiento de la maquinaria agrícola. Estos síntomas pueden manifestarse durante la operación, en el encendido del equipo o mediante la inspección de sus diferentes sistemas y componentes.

      .row.justify-content-center.mb-4
        .col-12
          .recurso-funciones-mantenimiento
            figure.recurso-funciones-mantenimiento__imagen
              img(src='@/assets/curso/temas/t2/img-12.png', alt='')

            .recurso-funciones-mantenimiento__texto
              p.mb-0 Un síntoma no necesariamente confirma la existencia de una falla específica; constituye un indicio que debe analizarse para determinar su posible origen. Por ejemplo, una pérdida de potencia del motor puede estar relacionada con dificultades en la alimentación de combustible, obstrucciones en la admisión de aire o problemas en otros componentes.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Entre los principales síntomas que pueden presentarse en la maquinaria agrícola se encuentran:
      
      .row.justify-content-center.align-items-center.mb-4.slyder-etapas-bg(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-13.svg' alt='')
            h4.text-center Ruidos inusuales
            p.text-center Golpes, zumbidos, chirridos o sonidos diferentes a los habituales, que pueden indicar desgaste, desajustes o daños en componentes.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-14.svg' alt='')
            h4.text-center Vibraciones excesivas
            p.text-center Movimientos anormales que pueden relacionarse con desbalance, piezas flojas o deterioro de elementos mecánicos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-15.svg' alt='')
            h4.text-center Aumento de temperatura
            p.text-center Calentamiento por encima de las condiciones normales de funcionamiento, que puede estar asociado con problemas de refrigeración, lubricación o sobrecarga.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-16.svg' alt='')
            h4.text-center Fugas de fluidos
            p.text-center Presencia de aceite, combustible o refrigerante en lugares donde no deberían encontrarse, lo que puede indicar deterioro de mangueras, conexiones o sellos.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-17.svg' alt='')
            h4.text-center Pérdida de potencia o rendimiento
            p.text-center Disminución de la capacidad de trabajo del motor o de otros sistemas, que puede afectar el desempeño de la máquina.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-18.svg' alt='')
            h4.text-center Dificultades de arranque
            p.text-center Problemas para encender el motor, relacionados con posibles anomalías en los sistemas eléctrico o de alimentación de combustible.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-19.svg' alt='')
            h4.text-center Humo anormal
            p.text-center Cambios en el color o la cantidad de humo expulsado por el motor, que pueden indicar alteraciones en la combustión o en el funcionamiento de sus sistemas.

      p.mb-4 La detección de fallas requiere recopilar y analizar información sobre el comportamiento de la máquina. Para ello, se consideran las siguientes acciones:

      .row.justify-content-center.mb-3
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Revisar el funcionamiento del equipo")
              .col-12.mb-0
                p.mb-0 Reconocer cambios en el comportamiento de la maquinaria, ruidos, vibraciones, fugas o señales de advertencia.
            .row(numero="2" titulo="Consultar los antecedentes")
              .col-12.mb-0
                p.mb-0 Revisar los registros de mantenimiento, las fallas anteriores y las condiciones de operación del equipo.
            .row(numero="3" titulo="Comprobar los síntomas")
              .col-12.mb-0
                p.mb-0 Utilizar métodos sensoriales o instrumentos de medición para verificar las anomalías identificadas.
            .row(numero="4" titulo="Relacionar los síntomas con los sistemas")
              .col-12.mb-0
                p.mb-0 Analizar qué componentes podrían estar asociados con la condición detectada, teniendo en cuenta las especificaciones del fabricante.
            .row(numero="5" titulo="Documentar los hallazgos")
              .col-12.mb-0
                p.mb-0 Registrar los síntomas, las condiciones en que se presentan y los resultados de las comprobaciones realizadas.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-20.png', alt='')

      p La identificación oportuna de los síntomas permite reconocer posibles fallas antes de que ocasionen daños mayores o interrumpan las actividades agrícolas. Además, proporciona información para orientar el diagnóstico, establecer prioridades y determinar los recursos necesarios para atender las condiciones identificadas.

      Separador

      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4. Diagnóstico de los sistemas de la maquinaria agrícola

      .bloque-texto-g.bloque-texto-g--inverso.cajon.C03.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
        .bloque-texto-g__img.recurso-mantenimiento-img4
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El diagnóstico de los sistemas de la maquinaria agrícola permite relacionar los síntomas identificados con los componentes que podrían presentar alguna anomalía. Para realizarlo, es necesario conocer la función de cada sistema, observar su comportamiento, efectuar las comprobaciones correspondientes y comparar los resultados con las especificaciones del fabricante.

      p.mb-4 En los tractores agrícolas, las fallas pueden presentarse en los sistemas auxiliares del motor, el sistema eléctrico, el hidráulico, la transmisión, la dirección y el rodaje. Cada uno presenta señales particulares que orientan el proceso de diagnóstico:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 6.
            span Síntomas y posibles causas de fallas en los sistemas de la maquinaria agrícola
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down") Sistema
                  th(data-aos="fade-down") Síntomas identificados
                  th(data-aos="fade-down") Posibles causas
              tbody
                tr
                  td(data-aos="fade-down") Admisión de aire y alimentación de combustible
                  td(data-aos="fade-down") Pérdida de potencia, humo negro, dificultades de arranque o apagado del motor.
                  td(data-aos="fade-down") Filtro de aire obstruido, exceso de carga, problemas en los inyectores o suministro inadecuado de combustible.
                tr
                  td(data-aos="fade-down") Escape
                  td(data-aos="fade-down") Ruido excesivo, humo o gases que salen por lugares no habituales.
                  td(data-aos="fade-down") Fugas, obstrucciones o deterioro de los componentes del sistema.
                tr
                  td(data-aos="fade-down") Lubricación
                  td(data-aos="fade-down") Presión de aceite baja, consumo elevado de aceite o ruidos metálicos.
                  td(data-aos="fade-down") Nivel insuficiente, aceite diluido, filtro obstruido o desgaste interno del motor.
                tr
                  td(data-aos="fade-down") Refrigeración
                  td(data-aos="fade-down") Sobrecalentamiento o temperatura de funcionamiento inferior a la habitual.
                  td(data-aos="fade-down") Radiador sucio, bajo nivel de refrigerante, correa floja o problemas en el termostato.
                tr
                  td(data-aos="fade-down") Sistema eléctrico
                  td(data-aos="fade-down") El motor de arranque no gira, gira lentamente, se enciende la luz de carga o la batería se descarga.
                  td(data-aos="fade-down") Batería descargada, bornes sulfatados, conexiones deficientes, relé defectuoso o problemas en el alternador.
                tr
                  td(data-aos="fade-down") Sistema hidráulico
                  td(data-aos="fade-down") Levantamiento lento de implementos, pérdida de fuerza, movimientos irregulares o fugas de aceite.
                  td(data-aos="fade-down") Bajo nivel de aceite, filtro obstruido, contaminación del fluido, desgaste de la bomba o fugas internas.
                tr
                  td(data-aos="fade-down") Transmisión
                  td(data-aos="fade-down") Dificultad para seleccionar velocidades, ruidos anormales o pérdida de capacidad de tracción.
                  td(data-aos="fade-down") Problemas en el embrague, desgaste de componentes o nivel inadecuado de lubricante.
                tr
                  td(data-aos="fade-down") Dirección
                  td(data-aos="fade-down") Volante duro, juego excesivo, desviación del tractor o dificultad para girar hacia un lado.
                  td(data-aos="fade-down") Nivel bajo de aceite, desgaste de rótulas o barras, presión desigual de los neumáticos o fugas en el sistema.
                tr
                  td(data-aos="fade-down") Rodaje
                  td(data-aos="fade-down") Desgaste irregular de neumáticos, pérdida de tracción o deslizamiento excesivo.
                  td(data-aos="fade-down") Presión de inflado inadecuada, distribución incorrecta del peso o condiciones deficientes de los neumáticos.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") La información de la tabla permite establecer una relación inicial entre los síntomas y los sistemas que podrían estar afectados. Sin embargo, un mismo síntoma puede tener diferentes causas; por ejemplo, la pérdida de potencia puede estar relacionada con la admisión de aire, la alimentación de combustible o las condiciones de operación de la máquina.

      p Por ello, el diagnóstico no debe basarse únicamente en una señal observada. Es necesario realizar las comprobaciones pertinentes, utilizar los instrumentos adecuados cuando se requiera y consultar los manuales técnicos para contrastar los resultados. Esta información permite identificar las necesidades de intervención y determinar los recursos, repuestos, insumos y personal que podrían requerirse para atender la anomalía.

      Separador

      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.5. Reporte del diagnóstico

      .row.justify-content-center.recurso-intro-sin-img-console.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-22.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            .cajon.cajon.C01.color-secundario.px-4.py-4.mb-4
              p.mb-0 El reporte del diagnóstico es un documento que permite registrar de manera organizada las condiciones identificadas durante la evaluación de una máquina agrícola. Su propósito es conservar la información sobre los síntomas observados, las comprobaciones realizadas, los resultados obtenidos y las posibles causas de las anomalías detectadas.
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img-23.svg', alt='')
            .col-lg-10.col-12
              p Este registro facilita la comunicación entre el operario, el personal técnico y el responsable del mantenimiento. Además, proporciona información para determinar la prioridad de atención, estimar los recursos necesarios y planificar las intervenciones correspondientes.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-12
          .cajon.C04.cajon-metodologias.px-3.py-2.mb-0
            p.mb-0.text-center(data-aos="fade-down") Un reporte de diagnóstico debe contener, como mínimo, los siguientes datos:

      .row.justify-content-center.align-items-center.mb-4.slyder-etapas-bg(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-24.svg' alt='')
            h4.text-center Identificación del equipo
            p.text-center Tipo de máquina, marca, modelo, código o número de identificación y lectura del horómetro.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-25.svg' alt='')
            h4.text-center Información del diagnóstico
            p.text-center Fecha, lugar y nombre de la persona responsable.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-26.svg' alt='')
            h4.text-center Descripción de la anomalía
            p.text-center Síntoma reportado y condiciones en las que se presenta.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-27.svg' alt='')
            h4.text-center Comprobaciones realizadas
            p.text-center Inspecciones, mediciones o pruebas efectuadas.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-28.svg' alt='')
            h4.text-center Resultados obtenidos
            p.text-center Datos y hallazgos identificados durante el diagnóstico.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-29.svg' alt='')
            h4.text-center Causas probable
            p.text-center Posibles razones que explican la anomalía.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-30.svg' alt='')
            h4.text-center Recomendaciones
            p.text-center Acciones sugeridas y prioridad de atención, según la condición encontrada.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-31.svg' alt='')
            h4.text-center Registro de responsables
            p.text-center Nombre y firma de quien realiza el diagnóstico y de quien recibe el reporte, cuando corresponda.

      .tarjeta.tarjeta--gris.anexo-chequeo.p-4.p-md-5.mb-4
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img.anexo-chequeo__imagen(src="@/assets/curso/temas/t2/img-32.svg", alt="")

          .col-md.col-lg-6.anexo-chequeo__contenido
            h3.anexo-chequeo__titulo Anexo 01: Lista de chequeo diagnostico maquinaria agrícola

            p.mb-4 La lista de chequeo, constituye un formato de apoyo para registrar la información obtenida durante la inspección de los equipos. Su diligenciamiento puede adaptarse de acuerdo con el tipo de maquinaria, los sistemas evaluados y los formatos establecidos por cada empresa.

            a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_01_Lista_de_chequeo_diagnostico_maquinaria_agricola.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
import imgSlyder04 from '@/assets/curso/temas/t2/img-04.png'
import imgSlyder05 from '@/assets/curso/temas/t2/img-05.png'
import imgSlyder06 from '@/assets/curso/temas/t2/img-06.png'
import imgSlyder07 from '@/assets/curso/temas/t2/img-07.png'

export default {
  name: 'Tema2',

  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    slyderErroresKey: 0,
    slyderTecnicasKey: 0,

    datosSlyder2: [
      {
        titulo: 'Diagnóstico sensorial',
        texto:
          'Se basa en la observación y el uso de los sentidos para reconocer señales anormales durante el funcionamiento de la máquina. Permite identificar indicios como ruidos inusuales, olores, presencia de humo, temperaturas elevadas y fugas visibles de fluidos.',
        imagen: imgSlyder04,
      },
      {
        titulo: 'Diagnóstico instrumental',
        texto:
          'Utiliza equipos de medición para comprobar el comportamiento de determinadas variables y comparar los resultados con los valores técnicos de referencia. Entre los instrumentos empleados se encuentran los manómetros, multímetros, termómetros infrarrojos y compresímetros.',
        imagen: imgSlyder05,
      },
      {
        titulo: 'Diagnóstico electrónico',
        texto:
          'Consiste en consultar la información registrada por las unidades de control electrónico de la maquinaria mediante escáneres o monitores. Permite identificar códigos de falla relacionados con sistemas como el motor y la transmisión.',
        imagen: imgSlyder06,
      },
      {
        titulo: 'Diagnóstico por análisis de fluidos',
        texto:
          'Consiste en examinar muestras de aceite o refrigerante para identificar elementos o sustancias que puedan indicar desgaste, contaminación o alteraciones en las condiciones de funcionamiento. Estos análisis pueden realizarse mediante pruebas específicas o en laboratorios especializados.',
        imagen: imgSlyder07,
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
