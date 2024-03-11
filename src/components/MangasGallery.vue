<template>  
  <h2>Gallery</h2>
  <div v-for="manga in mangasData">
      <MangaCard :title="manga.title.en" :summary="manga.description.en"/>

      <!-- TODO {{ manga.originalLanguage }} -->
      <!-- TODO img : https://api.mangadex.org/docs/03-manga/covers/-->
      <!-- TODO altTitle ? -> originalLanguage + selected -->
      <!-- TODO {{ manga.availableTranslatedLanguages }} -->
      <!-- TODO {{ manga.latestUploadedChapter }} -->
      <!-- TODO {{ manga.tags }} -->
  </div>   
</template>
  
<script>
  import { getMangasData } from '../services/api/mangaAPI';
  import MangaCard from '@/components/MangaCard.vue'

  export default {
    name: 'MangasGallery',
    components:{
      MangaCard
    },
    data(){
      return {
        mangasData: []
      }
    },
    created: function(){
      this.retrieveMangasData();
    },
    methods:{
      async retrieveMangasData(){
        this.mangasData = await getMangasData();
      }
    },
    
  }
  </script>