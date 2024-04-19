<template>
  <div>
    <label for="manga-sort">Sort by: </label>

    <select 
      :value="mangasSortType"
      @input="onMangasSortTypeChanged"
    >
      
    <option 
      v-for="option in mangasOptions" 
      :value="option.value"
    >
      {{ option.text }}
    </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'GallerySort',
    emit: ["update:mangasSortType"],
    methods: {
      onMangasSortTypeChanged(event) {
        this.$emit('update:mangasSortType', event.target.value);
      },
    },
    props:{
      mangasOptions: []
    }
  }
</script>