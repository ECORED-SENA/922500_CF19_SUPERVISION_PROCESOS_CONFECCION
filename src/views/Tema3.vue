<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Indicadores
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") Las empresas de confección se reconocen por tener índices de medición bien estructurados que permiten medir la productividad de área de la empresa y aumentar los estándares de calidad para así mismo satisfacer las necesidades de los clientes. Es así como dentro de la empresa los indicadores determinan el estado del proceso y permiten mejorar, identificar puntos críticos o áreas de oportunidad. 
        p(data-aos="fade-down") Los indicadores tienden a establecerse dependiendo los tipos de procesos que hay al interior de la empresa y así mismo se determinan los tipos de indicadores. Dentro de la metodología #[i Lean Six Sigma], construir indicadores que permitan medir el impacto de la mejora determina la viabilidad del proyecto y la continuidad de la implementación de las actividades.     
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')                      

    p(data-aos="fade-down").mb-5.text-center En relación con los indicadores, profundice en los aspectos y generalidades que se enuncian a continuación:

    .bg1(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-4.pt-3           
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')

        .col-lg-8.my-3
          .bgw.p-3 
            SlyderE(indicadores="derecha")
              .row.justify-content-center
                .col-md-11
                  h4.t1 ¿Qué es un indicador? 
                  p Los indicadores son instrumentos que producen información para analizar el desempeño de cualquier área de la organización y evaluar el cumplimiento de los objetivos en términos de resultados. Los indicadores son expresiones cualitativas o cuantitativas que permiten describir comportamientos de los procesos en términos precisos. Generalmente la magnitud de los indicadores puede ser, medidas, números, porcentajes, hechos, opiniones o percepciones que señalen condiciones o situaciones específicas. 
              .row.justify-content-center
                .col-md-11
                  h4.t1 Características de los indicadores  
                  p Los indicadores deben tener ciertas características que faciliten su comprensión y uso, por lo tanto, estos deben ser claros, prácticos, explícitos, deben permitir obtener información a tiempo y, por último, su resultado debe ser verificable. 
              .row.justify-content-center
                .col-md-11
                  h4.t1 Importancia de los indicadores  
                  p En la planta, conocer el avance de la producción es vital para reaccionar y tomar decisiones a tiempo ya que la confección de prendas tiene innumerables variables que podrían obstaculizar el cumplimiento ideal de los tiempos de entrega; estas variables se conocen al interior de la planta como tiempos muertos o tiempos improductivos, que se pueden generar por diferentes causas en el día a día. 
              .row.justify-content-center
                .col-md-11
                  h4.t1.pt-3 Los indicadores podrán 
                  ul.lista-ul.fa-ul(data-aos="fade-left")
                    li 
                      i.fas.fa-tshirt.c1
                      p.mb-0 Apoyar los procesos de planeación. 
                    li 
                      i.fas.fa-tshirt.c1
                      p.mb-0 Detectar oportunidades de mejora. 
                    li 
                      i.fas.fa-tshirt.c1
                      p.mb-0 Realizar ajustes a los procesos internos. 
                    li 
                      i.fas.fa-tshirt.c1
                      p.mb-0 Permitir asignar recursos fundamentados en información concreta. 
                    li 
                      i.fas.fa-tshirt.c1
                      p.mb-0 Ofrecer transparencia en la trazabilidad de los procesos. 
                    li 
                      i.fas.fa-tshirt.c1
                      p.mb-0 Ayudar a la generación de incentivos de las áreas o personas en concreto.                                                                        
    .row.justify-content-start.mb-3.pt-5     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Clasificación de indicadores según el nivel del proceso

    p(data-aos="fade-down").mb-5 Los indicadores dentro de la organización se pueden clasificar dependiendo el nivel del proceso que se quiere medir, generalmente los procesos están divididos en estratégicos, tácticos y operativos, así:                        
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='')
      .col-lg-6.my-3(data-aos="fade-left")       
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Nivel Estratégico")
            .col-md-12
              p Estos están atados directamente a la planificación estratégica de la empresa y marcan el futuro que se espera. Por esta razón, están relacionados a la misión y visión establecida, la misión es el propósito de la empresa para existir y explica las razones por las cuales fue creada. La visión retrata lo que la organización quiere ser en el futuro. Un ejemplo de estos podría ser un indicador relacionado con las ventas de prendas de vestir, en donde el objetivo de este seria aumentar en un 15 %.         
          .row.justify-content-center(titulo="Nivel Táctico")
            .col-md-12
              p Una vez que se sabe lo que la empresa quiere para los próximos 5 o 10 años, el siguiente paso es determinar cómo cada área contribuirá a lograr estos objetivos. La planificación táctica corresponde a un plan de acción que debe llevarse a cabo en un plazo de uno a tres años y debe estar completamente alineado con la planificación estratégica. Teniendo en cuenta el ejemplo anterior en donde se enmarcaba un objetivo estratégico sobre ventas, en este caso para aliñarse con este tendríamos que crear uno como la cantidad de locales comerciales para ofrecer los productos, así mismo el objetivo de este seria aumentarla. 
          .row.justify-content-center(titulo="Nivel Operativo")
            .col-md-12
              p Estos están estrechamente vinculados a los procesos y la operación de la empresa en su conjunto. Los indicadores operativos se asignan a los equipos de trabajo o a las personas directamente, involucrando a cada empleado de la empresa de tal manera que contribuyan activamente a los objetivos estratégicos de la organización, para seguir con nuestro ejemplo en este caso propondremos un indicador operativo como el número de productos fabricados por módulo o por persona, en donde también tendría como objetivo aumentar, para asegurar el cumplimiento de los indicadores tácticos y estratégicos.

    .row.justify-content-start.mb-3     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Clasificación de indicadores según el objetivo 

    p(data-aos="fade-down") En este caso esta clasificación tiene que ver con el objetivo del indicador dentro de la empresa, muchas veces confundimos los términos eficiente y eficaz, sin embargo, sus definiciones son distintas, su uso en conversaciones cotidianas se refiere muchas veces al desempeño de una persona o un líder.

    p(data-aos="fade-down").mb-5 Enseguida, detalle la diferencia en donde se muestra la escala de valoración cuando se es eficaz y cuando se es eficiente:
    .row.justify-content-center 
      .col-auto    
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Clasificación según objetivo     
        img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='Este esquema cruza los conceptos de eficacia y eficiencia, y sus niveles, en cuatro recuadros: Recuadro uno, muy eficiente y poco eficaz, cuando se administran bien los recursos pero no se llega a los objetivos. Recuadro dos, Muy eficiente y muy eficaz, cuando se llega a los objetivos y se administran bien los recursos. Recuadro tres, poco eficiente y poco eficaz, cuando no se llega a los objetivos ni se administran bien los recursos. Recuadro cuatro, poco eficiente y muy eficaz, cuando se llega a los objetivos sin medir los recursos para alcanzarlos.')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg8.p-4.brad 
          .row.justify-content-center.align-items-start        
            .col-lg-6.my-3
              p(data-aos="fade-down").mb-0 Dependiendo del objetivo, los indicadores se podrán clasificar en indicadores de eficacia, eficiencia, y efectividad, así:   
            .col-lg-6.my-3
              .titulo-sexto.color-acento-contenido
                h5 Figura 6.
                span Indicadores de eficacia, eficiencia y efectividad 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg', alt='Esquema que detalla los indicadores de eficiencia, eficacia y efectividad en tres columnas: Primer columna - Eficacia: se pregunta por el qué, en términos del cumplimiento de metas. Segunda columna - Eficiencia: se pregunta por el cómo, en términos del uso de los recursos. Tercer columna - Efectividad: se pregunta por el para qué, en términos del impacto de los resultados.')

    p(data-aos="fade-down").mb-5 Estas son las especificaciones de cada uno de los tres tipos de indicadores (eficacia, eficiencia y efectividad):

    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')                 

      .col-lg-8.my-3              
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg5")(data-aos="fade-right")
          .row.justify-content-center(titulo="De eficacia")
            .col-md-12
              p Eficacia es el grado en que se logran los objetivos y metas de la empresa, es decir, cuántos de los resultados esperados se alcanzaron. La eficacia consiste en concentrar los esfuerzos de una empresa en las actividades y procesos que realmente deben llevarse a cabo para el cumplimiento de los objetivos formulados. 

              p Algunos ejemplos en la empresa de confección tendremos:
              ul.lista-ul.my-3.fa-ul
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Satisfacción del cliente.
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Cumplimento en la entrega de pedidos.
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Disponibilidad de máquinas. 

              p En esta clasificación dentro de la planta de producción está el indicador de rendimiento, esta métrica permite medir que tanto se entregó, pero también que tanto se entregó bien, en buenas condiciones, es decir no solo mide cuanto recurso de tiempo se invirtió sino también si cumplió realmente con el objetivo.   
          .row.justify-content-center(titulo="De eficiencia")
            .col-md-12
              p Una definición de eficiencia es el logro de un objetivo al menor costo unitario posible. En este caso estamos buscando un uso óptimo de los recursos disponibles para lograr los objetivos deseados. Algunos ejemplos de este tipo de indicador son:
              ul.lista-ul.my-3.fa-ul
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Cobertura. 
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Horas-Hombre. 
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Costo.                 
          .row.justify-content-center(titulo="De efectividad")
            .col-md-12
              p Este tipo de indicadores involucran los indicadores de eficiencia y la eficacia, es decir, el logro de los resultados programados en el tiempo y con los costos más razonables posibles. Supone hacer lo correcto con gran exactitud y sin ningún desperdicio de tiempo o dinero.                                             
    p(data-aos="fade-down").mb-5.text-center Analice la siguiente tabla:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Descripción de Indicadores
        .tabla-a.color-acento-contenido
          table
            thead.bgh
              tr
                th Indicador
                th.w-80 Variables
                th Descripción
            tbody
              tr
                td(rowspan='4')
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='Fórmula de eficiencia: eficiencia es igual a unidades producidas, sobre unidades programadas, por cien.')                 

                td.w-80 Materiales
                td(rowspan='4') Dentro de la planta podemos ver diferentes mediciones, a nivel de planta, a nivel de producto, a nivel de módulo o línea, e incluso por operario.
              tr
                td.w-80 Maquinaria
              tr
                td.w-80 Medios 
              tr
                td.w-80 Logísticos

              tr
                td(rowspan='5')
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='Fórmula de eficacia: eficacia es igual a unidades producidas aceptadas, sobre unidades programadas, por cien.')                 

                td.w-80 Calidad
                td(rowspan='5')
                  | Es muy común dentro de la planta contrarrestar lo que puede entregar por jornada un módulo de trabajo, pero teniendo en cuenta el factor de calidad. Otros ejemplos tienen que ver con las entregas realizadas a tiempo y aceptadas por el cliente.
              tr
                td.w-80 Cumplimiento
              tr
                td.w-80 Costo
              tr
                td.w-80 Oportunidad
              tr
                td.w-80 Confiabilidad
              tr
                td(rowspan='2')
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='Fórmula de efectividad: efectividad es igual a eficiencia por eficacia.')                 

                td.w-80 Eficiencia
                td(rowspan='2')
                  br
              tr
                td.w-80 Eficacia 

    .row.justify-content-start.mb-3.pt-5     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Indicador de eficiencia global en la planta de confección  

    .row.justify-content-center.mb-4 
      .col-lg-7.my-3
        p(data-aos="fade-down") El cálculo del indicador de eficiencia dentro de la planta tiene gran relevancia debido a que muestra el comportamiento diario, o en tiempo real, de la producción. Dentro de su cálculo intervienen otros factores como los tiempos improductivos generados por diferentes causas, por ende, determinar la eficiencia de la planta no solo mide el rendimiento de los operarios, sino también el rendimiento de aquellos mandos medios que apoyan el proceso y que deberían velar porque no se generen tiempos improductivos.

        p(data-aos="fade-down") A continuación, se presentan algunos conceptos relacionados: 

        ul.lista-ul.my-3.fa-ul
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 #[b.t1 Indicador:] es una expresión matemática que muestra el comportamiento de alguna variable en el tiempo.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 #[b.t1 Indicador de gestión:] todas las actividades pueden medirse con parámetros monitoreando las operaciones para determinar cómo vamos respecto a unos objetivos, metas o responsabilidades, y así tomar decisiones. Un indicador de gestión es la expresión cuantitativa del comportamiento y desempeño de un proceso.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 #[b.t1 Tiempo Estándar (SAM):] tiempo otorgado a la realización de una prenda.          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='') 

    p(data-aos="fade-down").mb-5.text-center Preste atención a las siguientes consideraciones claves, para comprender y calcular este indicador:
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-8.my-3(data-aos="fade-left")       
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Eficiencia E%")
            .col-md-12
              p Es la medida del aprovechamiento de los recursos de una empresa. Para calcularla, se utiliza la siguiente fórmula: 

              h5 Eficiencia de la planta = Eficiencia Estándar × Eficiencia Fuera de estándar × Grado de asistencia

              p En este caso la multiplicación de los tres factores permite identificar que variable afecta en mayor medida la eficiencia global de la planta y así mismo tomar decisiones al respecto. 
          .row.justify-content-center(titulo="Eficiencia en Estándar – E.E%")
            .col-md-12
              p Es el rendimiento del operario o del módulo; mide el grado en que éste aprovecha el tiempo en condiciones normales o los minutos en estándar. Es responsabilidad del departamento de ingeniería diseñar métodos que permitan optimizar el tiempo de trabajo. 

              p Para calcularla se aplica la formula: 

              h5 Eficiencia en Estándar %=Minutos Estándares Producidos/ Minutos en Estándar ×100              
          .row.justify-content-center(titulo="Minutos Estándar Producidos – M.E.P")
            .col-md-12
              p Son los minutos producidos, es la producción realizada por el operario o por el módulo en minutos. 
              p Calcular los minutos estándares producidos:
              h5 Minutos Estándares Producidos=Tiempo Estándar × Unidades Producidas 
          .row.justify-content-center(titulo="Minutos en Estándar –M.E")
            .col-md-12
              p Son los minutos en condiciones normales que el operario, o el módulo, no tuvo problemas fuera de estándar como daño de máquina, falta de hilos o trabajo, inasistencia, etc.

              p Para  calcularlo se utiliza la fórmula: 

              h5 Minutos en Estándar = Minutos Teóricos - Minutos de Ausentismo- Minutos Fuera de Estándar  
          .row.justify-content-center(titulo="Minutos Fuera de Estándar – M.F.E")
            .col-md-12
              p Son los minutos perdidos por el operario por problemas ajenos a su voluntad, como por ejemplo daños de máquina, falta de programa o trabajo, corte de fluido eléctrico, etc. 
              p Calcular los minutos fuera de estándar: 
              h5 Minutos Fuera de Estándar = Minutos de daño mecánico + Minutos de falta de Material +…+… + …                              
    .row.justify-content-center.align-items-center
      .col-lg-8.my-3.order-1(data-aos="fade-left")       
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Eficiencia en Estándar –Eficiencia Fuera de Estándar - E.F.E% E.E%")
            .col-md-12
              p Es la eficiencia de los mandos medios del departamento de producción. Mide el grado en que el personal de producción mantiene ocupado y trabajando bajo condiciones normales al personal operativo.

              p Para calcular la Eficiencia Fuera de Estándar: 

              h5 Eficiencia fuera de Estándar = (1-(Minutos fuera de Estándar/ Minutos Presenciales)) × 100
          .row.justify-content-center(titulo="Minutos Presenciales – M.P")
            .col-md-12
              p Son los minutos que efectivamente estuvo el operario en la planta, o para el módulo, la suma de los minutos de cada uno de sus componentes.

              p Se calcula: 

              h5 Minutos Presenciales = Minutos Teóricos - Minutos de Ausentismo  
          .row.justify-content-center(titulo="Minutos Teóricos – M.T")
            .col-md-12
              p Son los minutos instalados. Son los minutos que teóricamente pueden trabajarse en la empresa. Son los minutos de la jornada laboral por el número de operarios.
              h5 Minutos Teóricos = Horas Laborales × 60 minutos × Numero de Operarios  
          .row.justify-content-center(titulo="Grado de Asistencia – G.A")
            .col-md-12
              p Mide el porcentaje de asistencia del personal operativo de la planta productiva. 

              p Para calcular el Grado de Asistencia:

              h5 Grado de Asistencia = (Minutos presenciales/ Minutos teóricos) × 100 
      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')                                                                        
</template>

<script>
export default {
  name: 'Tema3',
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
