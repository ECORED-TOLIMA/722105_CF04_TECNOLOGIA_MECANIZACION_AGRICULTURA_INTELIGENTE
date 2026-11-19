<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
      .row.justify-content-center.mb-4.recurso-intro-sin-img-console
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-01.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p El mantenimiento de la maquinaria agrícola es fundamental para garantizar su funcionamiento, prolongar su vida útil y contribuir al desarrollo eficiente de las actividades agropecuarias. Para lograrlo, es necesario conocer los principios que orientan su gestión, identificar las condiciones de los equipos y planificar oportunamente las actividades y los recursos requeridos.
            .cajon.cajon.C01.color-secundario.px-4.py-4
              p.mb-0 En este componente formativo se abordarán los fundamentos del mantenimiento, los tipos y metodologías aplicables, el diagnóstico y reconocimiento de fallas, la planificación de actividades y la elaboración de presupuestos. Asimismo, se estudiarán los recursos necesarios para el mantenimiento, entre ellos equipos, herramientas, insumos, repuestos y documentación técnica, así como los criterios para organizar su disponibilidad y gestionar oportunamente su adquisición.
      
      p Estos conocimientos permitirán al aprendiz fortalecer sus capacidades para planificar y gestionar los recursos destinados al mantenimiento de maquinaria agrícola, optimizar su utilización y contribuir a la conservación de los equipos, de acuerdo con los manuales técnicos y la normativa aplicable.
      p.mb-4 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.

      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/VTSxDLKwXM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
