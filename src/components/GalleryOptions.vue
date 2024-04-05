<template>
  <!-- <div> TODO class="gallery-options" -->
    <!-- TODO v-on:change="retrieveMangasData()" -->
    <!-- <input 
      type="text"
      :value="search"
      @change="onSearchChanged" 
      name="search" 
      placeholder="Chercher un manga">
    <label for="manga-sort">Trier par : </label> -->

    <select 
      :value="mangasSortType"
      @input="onMangasSortTypeChanged"
    >

      <!-- TODO a mettre dans un nouveau fichier ? -->
      <!-- TODO mettre les options dans un dico https://fr.vuejs.org/v2/guide/forms.html#Select -->
      <option value="AZName">Noms de A à Z</option>
      <option value="ZAName">Noms de Z à A</option>
    </select>
  <!-- </div> -->
  
  
</template>

<script>
  export default {
    name: 'GalleryOptions',
    emit: ["update:search", "update:mangasSortType"],
    watch: {
      search: function(newSearch) {
        localStorage.setItem("search", newSearch);
      },
      mangasSortType: function(newMangasSortType) {
        localStorage.setItem("mangasSortType", newMangasSortType);
      }
    },
    methods: {
      onSearchChanged(event) {
        this.$emit('update:search', event.target.value);
      },
      onMangasSortTypeChanged(event) {
        this.$emit('update:mangasSortType', event.target.value);
      },
    }
  }
</script>