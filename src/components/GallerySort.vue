<template>
  <div>
    <label for="manga-sort">Sort by: </label>

    <select 
      :value="mangasSortType"
      @input="onMangasSortTypeChanged"
    >

    <!-- TODO mettre les options dans un dico https://fr.vuejs.org/v2/guide/forms.html#Select -->
      <option value="AZName">Noms de A à Z</option>
      <option value="ZAName">Noms de Z à A</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'GallerySort',
    emit: ["update:mangasSortType"],
    watch: {
      mangasSortType: function(newMangasSortType) {
        localStorage.setItem("mangasSortType", newMangasSortType);
      }
    },
    methods: {
      onMangasSortTypeChanged(event) {
        this.$emit('update:mangasSortType', event.target.value);
      },
    }
  }
</script>