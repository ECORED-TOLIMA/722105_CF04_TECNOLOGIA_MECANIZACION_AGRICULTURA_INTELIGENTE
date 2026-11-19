<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El contenido aborda la gestión integral del mantenimiento de maquinaria agrícola, desde sus fundamentos, tipos, funciones, metodologías y normativa aplicable, hasta el diagnóstico y reconocimiento de fallas mediante la identificación de síntomas y la evaluación de los diferentes sistemas de los equipos. Asimismo, desarrolla la planificación y programación de las actividades de mantenimiento, la previsión de contingencias y la elaboración de presupuestos, considerando los costos durante la vida útil de la maquinaria. Finalmente, comprende la gestión de los recursos necesarios, como equipos, herramientas, insumos, repuestos y documentación técnica, así como los procesos de verificación y compra, con el propósito de organizar y gestionar el mantenimiento de acuerdo con las necesidades de los equipos, los manuales técnicos y la normativa aplicable.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la gestión del mantenimiento de maquinaria agrícola, organizada en cuatro aspectos principales: fundamentos del mantenimiento, diagnóstico y reconocimiento de fallas, planificación y presupuesto, y gestión de los recursos necesarios para su ejecución.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
