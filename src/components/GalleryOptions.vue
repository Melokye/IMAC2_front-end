<template>
  <!-- TODO <div> class="gallery-options" -->
    <input 
      type="text"
      :value="search"
      @change="onSearchChanged" 
      name="search" 
      placeholder="Chercher un manga">
    <label for="manga-sort">Trier par : </label>
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'GalleryOptions',
    emit: ["update:search"],
    watch: {
      search: function(newSearch) {
        localStorage.setItem("search", newSearch);
      },
    },
    methods: {
      onSearchChanged(event) {
        this.$emit('update:search', event.target.value);
      },
    }
  }
</script>