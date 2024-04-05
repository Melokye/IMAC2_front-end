<template>  
  <input 
    type="text" 
    v-on:change="retrieveMangasData()"
    v-model="search"
    name="search" 
    placeholder="Chercher un manga"
  >

  <GalleryOptions v-model:search="search" v-model:mangasSortType="mangasSortType"/>

  <div class="mangasGallery" v-for="manga in mangasOrganizedData">
    <!-- mangasOrganizedData() -->
      <MangaCard 
        :attributes="manga.attributes" 
        :mangaID="manga.id"
        :mangaCoverID="manga.relationships"
      />
      <!-- TODO à supp : -->
      <!-- TODO {{ manga.relationships }} -->
      <!-- TODO img : https://api.mangadex.org/docs/03-manga/covers/-->
      <!-- TODO altTitle ? -> originalLanguage + selected -->
      <!-- TODO {{ manga.availableTranslatedLanguages }} -->
      <!-- TODO {{ manga.latestUploadedChapter }} -->
      <!-- TODO {{ manga.tags }} -->
  </div>   
</template>
  
<script>
  import { getMangasData } from '../services/api/mangaAPI';

  import MangaCard from '@/components/MangaCard.vue';
  import GalleryOptions from './GalleryOptions.vue';

  export default {
    name: 'MangasGallery',
    components:{
      MangaCard, 
      GalleryOptions
    },
    created: function() {
      this.retrieveMangasData();
    },
    computed:{
      mangasOrganizedData() {
        // const field = ["AZName", "ZAName"].includes(this.mangasSortType) ? "attributes.title.en" : "???";
        const reversed = ["ZAName"].includes(this.mangasSortType);
        const comparator = (a, b) => a.attributes.title.en.localeCompare(b.attributes.title.en);
          // TODO attributes.title.en => à généraliser
        
        let data = this.mangasData.sort(comparator);      
        if (reversed) data = data.reverse();
        return data;
        
        // return this.mangasData
        // .filter((a) => a.attributes.title.en.toLowerCase().includes(this.search.toLowerCase()))
        // .sort((a, b) => a.attributes.title.en.localeCompare(b.attributes.title.en) * reversed)
      }
    },
    data(){
      return {
        mangasData: [],
        search: localStorage.getItem("search") || "",
        mangasSortType: localStorage.getItem("mangasSortType") || "AZName"
      }
    },
    methods:{
      async retrieveMangasData(){
        this.mangasData = await getMangasData(this.search);
      },      
    },
  }
  </script>

<style>
.mangasGallery {
  display: flex;
}

h2 {
   font-size: 20px;
}
</style>