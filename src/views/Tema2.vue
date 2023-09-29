<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Metodología #[i Lean Six Sigma]
    p(data-aos="fade-down") #[i Lean Six Sigma] acoge la metodología #[i Six Sigma], una combinación de herramientas #[i Lean Manufacturing] y estadísticas. Los proyectos que acogen esta filosofía se basan en un procedimiento estructurado para solucionar problemas.

    p(data-aos="fade-down").mb-5 La siguiente figura le muestra los pasos de aplicación de esta metodología:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Pasos para implementar #[i Lean Six Sigma]      
        img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg', alt='Se muestran cinco puntos que enuncian los pasos para implementar Lean Six Sigma, los cuales son: Definir, medir, analizar, mejorar y controlar.')
        figcaption Nota: tomado de García, M. (2019).

    .row.justify-content-start.mb-3     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Definir
            
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        p(data-aos="fade-down") En este paso se establecen las oportunidades de mejora, los requerimientos del cliente que son críticos, también se documentarán los procesos para entenderlos y se establecerán equipos de trabajo que estarán en el proyecto.

        p(data-aos="fade-down") Es importante, en esta etapa, definir el alcance del proyecto, es decir, enmarcar el inicio y final del proceso que se desea mejorar.
      .col-lg-8.my-3                                      
        .row.justify-content-center   
          .col-lg-4.my-3.p-0 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')                 
          .col-lg-8.my-3.p-0
            .bg4.p-3.h-100.j1    
              h4(data-aos="fade-down") ¡Atención!
              p(data-aos="fade-down").mb-0 Para esto es importante usar herramientas como un diagrama de flujo, un diagrama SIPOC y un plan de acción, a manera de cronograma, que facilite la identificación de actividades, tiempos y responsables. 

    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')                 

      .col-lg-8.my-3              
        p(data-aos="fade-down") Sobre los diagramas de flujo a utilizar, vale tener en cuenta aspectos como:               
        ul.lista-ul.my-5.fa-ul(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 El diagrama de flujo ayudará a entender las actividades y tareas inmersas dentro del proceso.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Hay diferentes tipos de diagramas, dependiendo el alcance que se quiera dar en el proyecto.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Se pueden analizar diagramas de proceso para entender la transformación de un producto, o analizar un diagrama de flujo, por bloques, para entender las actividades de un proceso macro dentro de una empresa.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 El diagrama SIPOC por sus siglas en inglés #[i Supplier – Inputs- Process- Outputs – Customers], ayudará a realizar un análisis de Proveedores, Entradas, Procesos, Salidas y Clientes.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 El diagrama SIPOC permite analizar, en el contexto en que se desarrollan las actividades, quiénes son los responsables de los resultados, en cada fase del proyecto.
            
    p(data-aos="fade-down").mb-5 Preste atención al siguiente ejemplo de diagrama SIPOC, para analizar los subprocesos de una empresa de confección:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ejemplo diagrama SIPOC  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='Esquema que muestra un diagrama SIPOC de una empresa textil. Columna 1, los proveedores: clientes, proveedores de materia prima e insumos, proveedores de servicios y proveedores de mano de obra. Columna 2, las entradas: solicitudes de los clientes. Columna 3, los procesos aplicados a las prendas: diseños, cortes, confección, control de calidad y empaquetado, almacenamiento, distribución. Columna 4, las salidas: mermas de corte, prendas reprocesadas, prendas terminadas. Columna 5, los clientes: atención al cliente, recepción y compra de prendas.')
        figcaption Nota: adaptada de Crisóstomo y Sánchez (2018).

    .row.justify-content-start.mb-3     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Medir 
    p(data-aos="fade-down").mb-5 En este paso se realiza una medición de la eficiencia del proceso. Es clave su realización en el proyecto ya que permite conocer con certeza el estado actual del mismo y así determinar la causa raíz del problema. Se utilizan herramientas estadísticas como, histogramas, diagrama causa efecto, diagramas de Pareto, entre otras.
                                    
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')
      .col-lg-7.my-3
        p(data-aos="fade-down") También dentro del paso de medición, es común escuchar que se usan diagramas #[i VSM Value Stream Mapping] en español conocido como mapa de flujo de valor. En su realización se encontrarán oportunidades de mejora, eliminando desperdicios en el proceso de producción, reduciendo costos y mejorando la eficiencia.
        p(data-aos="fade-down") #[b ¡Nota!] Los diagramas VSM, son reconocidos por las industrias en general, como el diagrama para visualizar y tomar decisiones con respecto a las problemáticas encontradas. 
        p(data-aos="fade-down") La simbología usada para representar el flujo del inventario e información se divide en 4 grupos: 

        ul.lista-ul.my-5.fa-ul(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Símbolos de procesos.
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Símbolos de materiales.
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Símbolos de información.
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Símbolos generales.     

    p(data-aos="fade-down").mb-5 Dentro de los pasos para realizar un mapa de flujo de valor VSM, están:

    .bg1(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-4.pt-3           
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')

        .col-lg-8.my-3
          .bgw.p-3 
            SlyderE(indicadores="derecha")
              .row.justify-content-center
                .col-md-11
                  h4.t1 Identificar familia de productos  
                  p Se identifica la familia de productos por analizar, en donde lo que se pretende es detectar aquel producto o productos representativos dentro de la empresa; ello permite visibilizar de manera general los problemas que más afectan a la empresa.
              .row.justify-content-center
                .col-md-11
                  h4.t1 Estado actual y flujo de material y de la información    
                  p Dibujar el estado actual, identificando el flujo de material y de la información, en términos generales, se representará el flujo calculando indicadores claves del proceso como inventario en días, entre proceso y proceso, tiempo de ciclo, tiempo de alistamiento y eficiencia global entre otras. 
              .row.justify-content-center
                .col-md-11
                  h4.t1 Estado futuro  
                  p Analizar y visualizar el estado futuro; en este paso se pretende validar cuáles podrían ser mejoras a realizar en el proceso. En el análisis se debe responder ¿Cuál es la capacidad del sistema de producción? ¿Cuáles son los cuellos de botella del proceso? ¿Cuál es la tasa de compra del cliente? ¿Cuál es la capacidad disponible y cuál su utilización? ¿Cuáles son las restricciones del proceso? ¿Estas son internas o externas? ¿Cómo podemos mejorar el proceso para cumplir con los objetivos del negocio?                                         
              .row.justify-content-center
                .col-md-11
                  h4.t1 Mejoras   
                  p Por último, dibujar el estado futuro con las posibles mejoras. Se requiere experiencia en la implementación de herramientas #[i Lean] como #[b Kanban, Kaizen y SMED], entre otras.


    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") En el mapa de flujo de valor se puede observar dónde finaliza el flujo en la parte superior derecha. Generalmente, esta parte del diagrama es de donde se relaciona la cantidad de producción entregada mensualmente (en este caso 480 unidades), también cómo se relaciona con la caja de control de producción a través de un flujo de información que se realiza mediante los datos de pedidos o pronósticos que generan las compras de las redes sociales. Acto seguido se mostrará también cómo se enlaza esta información con los requerimientos enviados al proveedor de materia prima, en este caso a través llamada y correo electrónico.
        .row.justify-content-center.align-items-center.mb-3.bg5.p-0           
          .col-auto.p-0.pb-3
            img(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')
          .col
            .p-2
              p(data-aos="fade-down").mb-2 Luego de esto, se muestra el transporte que se usa para enviar el material - en este caso tela-, desde los proveedores hasta la fábrica y posterior a esto la secuencia de operaciones, estableciendo la cantidad de personas, el tiempo de ciclo, la disponibilidad, los turnos de trabajo disponibles y los inventarios entre proceso y proceso. También se muestra cómo se transporta el producto hacia al cliente.
        p(data-aos="fade-down") Por último, mediante una escalera, los tiempos de ciclo de cada operación (valor agregado) en la parte de abajo de los escalones; y el tiempo que no agrega valor en los escalones superiores. Los inventarios deben registrarse en función del tiempo y forman parte de lo que no agrega valor en el proceso.                                           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')

    .row.justify-content-start.mb-3     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Analizar 

    p(data-aos="fade-down") En este paso se analiza la información recopilada, con el objetivo de detectar las causas raíz de los problemas encontrados. En esta parte se usan, nuevamente, herramientas estadísticas como diagramas de Pareto, diagramas causa efecto, gráficos de control y hojas de verificación, pero más específicos.  
    p(data-aos="fade-down").mb-5 La siguiente figura relaciona un ejemplo de una hoja de verificación de defectos en una empresa de confecciones: 

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span  Ejemplo de Hoja de Verificación en Auditoria de Control de Calidad     
    img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='Este es un formato con diferentes campos para llevar registro de los aspectos clave de la auditoría de control de calidad, tales como: telas, insumos, trazos y cortes, tallas, diseño y patronaje, entre otros aspectos posibles por auditar. El formato incluye campos para registrar los resultados de la auditoría como defectos de maquinaria, defectos de patrones, calibración. Incluye, finalmente, campos para observaciones y recomendaciones generales y visto bueno del supervisor.') 
    p(data-aos="fade-down").my-5 Por otro lado, se puede emplear la herramienta FMEA por sus siglas en inglés #[i Failure Modes Effects Analysis], el mismo que permite priorizar las posibles fuentes de variación, variaciones, fallas, defectos en el producto o proceso.

    .bg7
      .row.justify-content-start.mb-3     
        .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v.svg', alt='')
            .list__txt
              h4.mb-0 Mejorar 

      .row.justify-content-center.align-items-center.mb-4           
        .col-lg-7.my-3
          p(data-aos="fade-down") En este paso se pretende proponer un plan de acción con la selección y desarrollo de las mejoras orientadas a eliminar o mitigar las causas raíz de los problemas encontrados; aquí se pretende hacer uso de las herramientas #[b #[i Lean Manufacturing]].
          .bg6.p-4.mb-3
            p(data-aos="fade-down").mb-0 En este punto de la implementación de la metodología se deberá describir las actividades detalladamente para llevar a cabo las herramientas seleccionadas, las cuales deben ser coherentes con las oportunidades de mejora identificadas. Dentro de la industria se pueden ver muchas intenciones de aplicación de herramientas #[i lean] que bajo #[b #[i Lean Six Sigma]] dan como resultado mayor resultado debido al seguimiento y aplicación herramientas estadísticas.  
          p(data-aos="fade-down") Es común proponer la herramienta debido a las ventajas que ofrece, sin embargo, en esta etapa la propuesta debe estar sustentada con una evaluación costo beneficio y de ahí la viabilidad de su aplicación. 
                    
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')            

      p.mb-5(data-aos="fade-down") La siguiente figura detalla las herramientas de la metodología #[i Lean Manufacturing]:     
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span  Herramientas #[i Lean Manufacturing]   
          img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='Esquema que enuncia las 8 herramientas de la metodología Lean Manufacturing, la cuales son: Herramienta TPM Herramienta 5S Herramienta SMED Herramienta KANBAN Herramienta KAIZEN Herramienta HEIJUNKA Herramienta JIDOKA Herramienta JIT')
          figcaption.bgw Nota: adaptado de Sánchez M (2020).

    .row.justify-content-start.mb-3     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Controlar

    .row.justify-content-center.align-items-center         
      .col-lg-6.my-3
        p(data-aos="fade-down") Por último, se deben establecer mecanismos para medir el impacto de la mejora y así controlar si funcionaron o no las herramientas implementadas. Esto se hará a través de la construcción de indicadores claves dentro del proceso que se mejoró, la documentación y estandarización del proceso mejorado. 
        .bg6.p-4.mb-4
          p(data-aos="fade-down").mb-0 En esta fase se usan herramientas estadísticas como gráficos de control, para saber si la variabilidad del proceso ha cerrado la brecha, también procedimientos y listas de chequeo y verificación.                    
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')                      
</template>

<script>
export default {
  name: 'Tema2',
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
