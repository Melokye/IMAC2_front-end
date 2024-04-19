<template>
    <input 
      type="text"
      :value="search"
      name="searchManga" 
      @change="onSearchChanged" 
      placeholder="Search something to read"
    >
</template>

<script>
  export default {
    name: 'SearchMangas',
    emit: ["update:search"], 
    // watch: {
    //   search: function(newSearch) {
    //     localStorage.setItem("search", newSearch)
    //   },
    // },
    methods: {
      onSearchChanged(event) {
        this.$emit('update:search', event.target.value);
      },
    }
  }
</script>