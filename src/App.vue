<template>
  <Header /> 
  <RouterView />
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