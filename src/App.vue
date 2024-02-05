<template>
  Hello world
  <div>
    <MangaCard/>
  </div>
  <!-- <div v-for="manga in resp" >
  <p>{{ manga.attributes.title }}</p>
  </div> -->
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