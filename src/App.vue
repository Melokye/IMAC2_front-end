<template>
  <Header /> 
  <!-- TODO header directement dans une page ? -->

  <!-- <div>  --> 
    <!-- TODO id = "parentComponent" ?-->
  <RouterView />
  <!-- <h2>Gallery</h2>
  <MangasGallery/> -->
  <!-- </div> -->

  <!-- TODO footer -->
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "MainComponent",
  components: {
    Header,
    Footer
  }
}
</script>