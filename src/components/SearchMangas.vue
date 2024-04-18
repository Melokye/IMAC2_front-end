<template>
    <input 
      type="text"
      :value="search"
      @change="onSearchChanged" 
      name="search" 
      placeholder="Chercher un manga">
</template>

<script>
  export default {
    name: 'SearchMangas',
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