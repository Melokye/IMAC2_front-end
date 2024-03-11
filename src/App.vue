<template>
  <h1>MangaTime</h1>
  <div> 
    <!-- TODO id = "parentComponent" ?-->
    <MangasGallery/>
  </div>
  Créé avec l'API MangaDex par
  <a href="https://melokye.github.io/">Melokye</a>
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