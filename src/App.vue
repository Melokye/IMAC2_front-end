<template>
  <h1>MangaTime</h1>
  <!-- TODO header -->
  <!-- <div>  -->
    <!-- TODO id = "parentComponent" ?-->
    <RouterView />
  <!-- <h2>Gallery</h2>
  <MangasGallery/> -->
  <!-- </div> -->

  <!-- TODO footer -->
  <div>
    Créé avec l'API MangaDex par
    <a href="https://melokye.github.io/">Melokye</a>
  </div>
</template>

<script>
import MangasGallery from './components/MangasGallery.vue';

export default {
  name: "MainComponent",
  components: {
    MangasGallery
  }
}
</script>