<template>
  <h1>MangaTime</h1>

  <div>
    <MangaCard
     
    />
 <!-- :title="mangasData[0].title" -->
  </div>

  
  <!-- <div v-for="manga in resp" >
  <p>{{ manga.attributes.title }}</p>
  </div> -->

  Créé avec l'API MangaDex (si ça marche :,)) par
  <a href="https://melokye.github.io/">Melokye</a>
</template>

<script>
// import { getMangasData } from '../services/api/mangaAPI';
// import { getMangasData } from './main';
import MangaCard from '@/components/MangaCard.vue'

// TOOD deplacer MangaCard.vue dans un dossier components

export default {
  name: 'MangasGallery',
  components:{
    MangaCard
  },

  data: function() {
    return {
      mangasData: []
    }
  },

  methods:{
    async retrieveMangasData(){
      // this.mangasData =
      // const test = await getMangasData();
      // console.log(test);
    }
  }
  
}
</script>