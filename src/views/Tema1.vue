<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Orígenes de #[i Lean Six Sigma]
      
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-8.my-3
        p(data-aos="fade-down") Entre los objetivos de las empresas en general está la reducción de costos, hacer los procesos más productivos, aumentar los niveles de calidad y la variedad de los productos para, así mismo, aumentar la lista de clientes y el nivel de ventas; esto se puede resolver mediante el uso de la metodología #[b.t1 #[i Lean Six Sigma]]. Esta no es más que la fusión de dos metodologías que se concibieron por aparte pero que ha generado unos resultados inesperados.                   
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='') 
    p(data-aos="fade-down").text-center.mb-5 Las dos metodologías que configuran la naciente #[i Lean Six Sigma], son:

    .bg1(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-4.pt-3           
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')

        .col-lg-8.my-3
          .bgw.p-3 
            SlyderE(indicadores="derecha")
              .row.justify-content-center
                .col-md-11
                  h4.t1 #[i Lean Manufacturing]
                  p Tiene sus orígenes en el Justo a tiempo; nace a raíz de las visitas de los japoneses a Estados Unidos, después de la segunda guerra mundial. En estas visitas los japoneses no encontraron nada nuevo en las fábricas porque en esta época estaban dedicados a la producción en masa, a diferencia de Estados Unidos, los japoneses no tenían esa capacidad productiva, por lo que fue, sólo hasta las visitas a un supermercado, cuando entendieron que la variedad de los productos, podría ser la clave para la mejora. Para lograr esto se dieron cuenta que tenían que trabajar en eliminar 7 desperdicios, que estaban presentes en, prácticamente, todos los procesos. De este modo se fueron acuñando varias herramientas #[b.t1 #[i Lean Manufacturing].]   
              .row.justify-content-center
                .col-md-11
                  h4.t1 #[i Six Sigma] 
                  p Tiene unos orígenes muy distintos: en 1979 Robert Galvin CEO de Motorola en una entrevista dijo literalmente “Nuestra calidad apesta”, lo que esto representó para la bolsa de Estados Unidos no tiene precedente, a raíz de esto Michael Harris un militar retirado, con una maestría en Control Estadístico de Procesos propone implementar procesos de control en Motorola para aumentar su calidad, al iniciar la meta era aumentar su calidad a un nivel 4 Sigma, que equivale a 6200 defectos por cada 1000000 de oportunidades, sin embargo, esta meta en 10 años sobrepasó los límites aumentando 100 veces más su nivel de calidad, hasta lograr niveles 6 Sigma esto equivale a 3,4 defectos por cada millón de oportunidades, estos logros los hicieron acreedores al premio Nacional de Calidad Malcolm Baldrige, por lo cual ahorró millones de dólares por conceptos de calidad, tal fue el éxito que muchas empresas comenzaron a implementar este modelo entre ellas General Electric. 

    .row.justify-content-center.mb-4          
      .col-lg-9.my-3.up.order-1
        .bg2.p-4.h-100.j1
          h4(data-aos="fade-down") ¿Por qué #[i Lean] y #[i Six Sigma] se llevan tan bien? 
          p(data-aos="fade-down").mb-0 Pues #[i Lean] se dedica a entregar con menor costo y a tiempo y #[i Six Sigma] ayuda a que lo anterior no afecte la calidad.                
      .col-lg-3.my-3.up.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')   

    .row.justify-content-start.mb-3     
      .col-auto.bg3.p-0.pe-4.up(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h4.mb-0 Métricas #[i Six Sigma] 

    .row.justify-content-center.align-items-start
      .col-lg-4.my-3.up 
        p(data-aos="fade-down") La metodología #[i Six Sigma], por sí sola, tiene métricas que ayudan a controlar las entradas y salidas de los procesos. Estas métricas se refieren a la información que utiliza el departamento de producción. Son los indicadores que establecen los límites para llevar a cabo las diferentes operaciones de planta.
      .col-lg-8.my-3.up
        .row.justify-content-center   
          .col-lg-4.my-3.p-0 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')                 
          .col-lg-8.my-3.p-0
            .bg4.p-3.h-100.j          
              p(data-aos="fade-down") Todo proyecto de mejora #[i Six Sigma] se basa en esta información para llevar a cabo los procesos de Medición (#[i Measure]), Análisis (#[i Analyses]), Mejora (#[i Improvement]), y Control de la metodología DMAIC.
    .row.justify-content-center
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')                 

      .col-lg-8.my-3              
        p(data-aos="fade-down") Estos son los elementos y aspectos más importantes de las métricas de sigma, los cuales son tenidos en cuenta para cualificar los procesos: 
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg5")(data-aos="fade-right")
          .row.justify-content-center(titulo="Defectos")
            .col-md-12
              p.mb-0 Es cualquier desviación de una característica del proceso que se considere fuera de especificación.   
          .row.justify-content-center(titulo="Unidades")
            .col-md-12
              p.mb-0 Es la unidad básica de medida para el cálculo de la desviación. Puede ser un producto, un lote o #[i batch], una muestra, transacción o un servicio prestado a clientes internos o externos.  
          .row.justify-content-center(titulo="Oportunidades de defecto")
            .col-md-12
              p.mb-0 Se trata de toda aquella posibilidad circunstancial, infraestructural o de operación, que pueda generar un defecto.  
          .row.justify-content-center(titulo="Rendimiento")
            .col-md-12
              p.mb-0 Supone todo resultado positivo o ganancia que se obtenga de las operaciones y de los procesos productivos.  
          .row.justify-content-center(titulo="Defectos por unidad")
            .col-md-12
              p.mb-0 Son los potenciales defectos que deben ser prevenidos y sobre los cuales se dirigen todas las acciones de mejora, ya que afectan directamente el rendimiento de la empresa.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
