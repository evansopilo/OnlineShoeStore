<template>
  <div class="about">
    <About/>
    <div class="container jumbotron bg-light my-4">
      <h1 class="text-center">About page</h1>
      <p class="text-danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum quis, illum delectus quos
        beatae? Maiores neque voluptatem 
        aspernatur eveniet, illo sed, facere ipsam libero incidunt eligendi natus, corrupti magnam.
      </p>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum quis, illum delectus quos
        beatae? Maiores neque voluptatem 
        aspernatur eveniet, illo sed, facere ipsam libero incidunt eligendi natus, corrupti magnam.
      </p>
      <p class="text-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum quis, illum delectus quos
        beatae? Maiores neque voluptatem 
        aspernatur eveniet, illo sed, facere ipsam libero incidunt eligendi natus, corrupti magnam.
      </p>
    </div>
    <Footer/>
  </div>
</template>


<script>
import About from "../../components/NavBar.vue"
import Footer from "../../components/Footer.vue"
export default {
  components:{
    About,
    Footer,
  }
}
</script>