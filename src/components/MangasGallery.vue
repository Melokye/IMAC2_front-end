<template>  

  <div> 
    <!-- TODO class="gallery-options" -->
    <input 
      v-on:change="retrieveMangasData()"
      type="text" 
      v-model="search"
      name="search" 
      placeholder="Chercher un manga">
    <label for="manga-sort">Trier par : </label>
    <select v-model="mangasSortType" id="manga-sort">
      <!-- TODO id="manga-sort" => pas nécessaire ? -->
      <!-- TODO mettre les options dans un dico https://fr.vuejs.org/v2/guide/forms.html#Select -->
      <option value="AZName">Noms de A à Z</option>
      <option value="ZAName">Noms de Z à A</option>
    </select>
  </div>
  
  <!-- TODO a mettre dans un nouveau fichier -->

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
  import MangaCard from '@/components/MangaCard.vue'

  export default {
    name: 'MangasGallery',
    components:{
      MangaCard
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
    watch: {
      search: function(newSearch) {
        localStorage.setItem("search", newSearch)
      },
      mangasSortType: function(newMangasSortType) {
        localStorage.setItem("mangasSortType", newMangasSortType)
      }
    },
    data(){
      return {
        mangasData: [],
        search: localStorage.getItem("search") || "",
        mangasSortType: localStorage.getItem("mangasSortType") || "AZName"
      }
    },
    created: function(){
      this.retrieveMangasData();
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