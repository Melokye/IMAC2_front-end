<template>
  <h1>MangaTrack</h1>

  <div>
    <MangaCard/>
  </div>
  <!-- <div v-for="manga in resp" >
  <p>{{ manga.attributes.title }}</p>
  </div> -->

  Créé avec l'API MangaDex (si ça marche :,)) par
  <a href="https://melokye.github.io/">Melokye</a>
</template>

<script>
import MangaCard from '@/MangaCard.vue'
// TOOD deplacer MangaCard.vue dans un dossier components
export default {
  name: 'MangasGallery',
  components:{
    MangaCard
  }
}
</script>