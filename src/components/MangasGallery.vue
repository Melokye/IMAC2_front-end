<template>  

  <div> 
    <!-- TODO class="gallery-options" -->
    <input 
      type="text" 
      v-model="search"
      name="search" 
      placeholder="Chercher un manga">
    <label for="dog-sort">Trier par : </label>
    <select v-model="mangasSortType" id="manga-sort">
      <!-- TODO id="manga-sort" => pas nécessaire ? -->
      <!-- TODO mettre les options dans un dico https://fr.vuejs.org/v2/guide/forms.html#Select -->
      <option value="AZName">Noms de A à Z</option>
      <option value="ZAName">Noms de Z à A</option>
      <option value="AZBreed">Espèces de A à Z</option>
      <option value="ZABreed">Espèces de Z à A</option>
    </select>
    <button v-on:click="doStuff">My button</button>  
    <!-- TODO v-on:change dans input-->
  </div>
  
  <!-- TODO a mettre dans un nouveau fichier -->

  <div class="mangasGallery" v-for="manga in mangasData">
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
      mangasOrganizedData: function() {
        const field = ["AZName", "ZAName"].includes(this.mangasSortType) ? "name" : "breed";
        const reversed = ["ZAName", "ZABreed"].includes(this.mangasSortType);
      // TODO const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
        const comparator = (a, b) => a[field].localeCompare(b[field]);
      // TODO toLowerCase() au moment du tri ?
        let data = this.mangasData.sort(comparator);
      // TODO à mettre avant : this.dogsData.filter(filterFunc)
        if (reversed) data = data.reverse();
        return data;
        
        // return this.mangasData
        // .filter((a) => a.name.toLowerCase().includes(this.search.toLowerCase()))
        // .sort((a, b) => a[field].localeCompare(b[field]) * reversed)
      }
    },
    data(){
      return {
        mangasData: [],
        search: "",
        mangasSortType: "AZName"
      }
    },
    created: function(){
      this.retrieveMangasData();
    },
    methods:{
      async retrieveMangasData(){
        this.mangasData = await getMangasData();
      },
      doStuff : function(event) {
        // console.log("clicked");
        event.target.text = "My Button Clicked"
      }
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