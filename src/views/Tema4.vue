<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Tableros de control

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')      
    .row.justify-content-center.align-items-center
      .col-10.img-text.d-none.d-lg-block(data-aos="flip-down")
        p.p-3.mb-0 También conocidos como #[i Dashboard], son utilizados en la metodología #[b.t1 #[i Lean Six Sigma]] con el objetivo de visibilizar en comportamiento de los procesos en general, a través de la generación de información en tiempo real de los indicadores clave de desempeño de las diferentes áreas de la empresa y, así, determinar los puntos críticos de control de la empresa y dónde es necesario la intervención oportuna de la metodología. 
    p.bg-p1.p-3.mb-0.d-block.d-lg-none También conocidos como #[i Dashboard], son utilizados en la metodología #[b.t1 #[i Lean Six Sigma]] con el objetivo de visibilizar en comportamiento de los procesos en general, a través de la generación de información en tiempo real de los indicadores clave de desempeño de las diferentes áreas de la empresa y, así, determinar los puntos críticos de control de la empresa y dónde es necesario la intervención oportuna de la metodología.

    .row.justify-content-center.align-items-center
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')                          
      .col-lg-7.my-3
        p(data-aos="fade-down") Los tableros de control consolidan la información global de los indicadores clave de la empresa desde indicadores financieros, de ventas, de producción, de mercadeo, entre otros. La clave es determinar cuáles son los indicadores que pueden generar la información fundamental del negocio que permitirá identificar las oportunidades de mejora y tomar decisiones por las partes interesadas de los procesos a tiempo.
        .bg6.p-4.mb-3
          h4.t1(data-aos="fade-down") ¡Atención!

          p(data-aos="fade-down").mb-0 Realizar el tablero de control tiene que ver inicialmente con establecer primero aquellos indicadores clave de desempeño por área, para así hacer seguimiento del comportamiento de los procesos dentro de la empresa. Luego también se deberá determinar los mecanismos para recolectar la información necesaria y así poderla publicar en los tableros y que no sean asíncronos entre sí para dar información errada.
                  


</template>

<script>
export default {
  name: 'Tema4',
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
