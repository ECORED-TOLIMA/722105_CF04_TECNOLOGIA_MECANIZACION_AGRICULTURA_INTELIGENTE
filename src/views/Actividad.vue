<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Mantenimiento en marcha',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprobar la comprensión de los fundamentos del mantenimiento de maquinaria agrícola, el diagnóstico de fallas, la planificación de actividades y la gestión de los recursos necesarios para su ejecución, de acuerdo con los temas abordados en el componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del mantenimiento de maquinaria agrícola?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar exclusivamente la compra de repuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar el funcionamiento y las condiciones de los equipos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar únicamente el número de máquinas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar solamente los costos de operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes opciones corresponde a un tipo de mantenimiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenimiento administrativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantenimiento comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantenimiento financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantenimiento predictivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes actividades forma parte de las funciones del mantenimiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programación de actividades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comercialización de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseño de campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Selección de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes corresponde a una metodología de mantenimiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Análisis de mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantenimiento productivo total (TPM).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Planeación publicitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué aspecto debe considerarse al analizar la criticidad de un equipo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El impacto de su falla en la producción y la seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La ubicación de las oficinas administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de publicidad de su fabricante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes situaciones corresponde a una contingencia en la gestión del mantenimiento?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La actualización del diseño de una oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La elaboración de material publicitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La programación de vacaciones administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El retraso en la entrega de repuestos necesarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es uno de los propósitos del diagnóstico de mantenimiento?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar las condiciones y posibles fallas de la maquinaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar el precio de venta de los productos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir la imagen comercial de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer los horarios del personal administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes opciones corresponde a un tipo de diagnóstico de mantenimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagnóstico financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagnóstico instrumental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diagnóstico publicitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes situaciones representa un síntoma que puede orientar la detección de una falla?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La actualización del inventario de oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La elaboración de un presupuesto anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La asignación de un responsable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La presencia de vibraciones anormales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué documento permite dejar constancia de los resultados obtenidos durante el diagnóstico de una máquina?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Catálogo comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reporte del diagnóstico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Plan de compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cronograma de capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué documento organiza las actividades que se deben realizar para atender las necesidades de mantenimiento de una máquina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lista de precios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Catálogo de partes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plan de mantenimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ficha de proveedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes criterios puede utilizarse para programar las actividades de mantenimiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La disponibilidad del personal y de los recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La decoración de las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de publicaciones institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño de los uniformes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la finalidad de elaborar un presupuesto de mantenimiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir la imagen corporativa de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer las estrategias de publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar exclusivamente los datos de los operarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estimar y organizar los recursos económicos requeridos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué información resulta pertinente para analizar los costos de mantenimiento durante la vida útil de una máquina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de anuncios del fabricante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los gastos acumulados de mantenimiento y reparación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de reuniones comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de documentos de capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de los siguientes elementos pertenece a los recursos físicos utilizados en el mantenimiento?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El informe de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cronograma de reuniones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las herramientas de medición.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El plan de mercadeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué información se consulta principalmente en un catálogo de partes de maquinaria agrícola?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los despieces y números de parte de los componentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los horarios de los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las metas comerciales de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las actividades recreativas del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el propósito de utilizar técnicas de codificación para equipos y herramientas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar las especificaciones del fabricante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar los manuales técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los registros de inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar la identificación y el control de los recursos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de los siguientes elementos se clasifica como insumo para el mantenimiento de maquinaria agrícola?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un cronograma de actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aceite lubricante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una lista maestra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un reporte de diagnóstico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué aspecto debe comprobarse al seleccionar un repuesto para una máquina agrícola?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La compatibilidad con el equipo y el número de parte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color del empaque exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ubicación de la oficina de compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de publicidad del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es uno de los criterios para evaluar a los proveedores de repuestos e insumos?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La decoración de sus instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de empleados administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tiempo de entrega de los productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La ubicación de sus campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos relacionados con el mantenimiento de maquinaria agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
