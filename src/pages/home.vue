<template>
    <!-- <SearchMangas v-model:search="search"/> -->
    <!-- TODO dans le header directement ? -->
    <h2>Want new suggestions ?</h2>
    <MangasGallery/>
</template>

<script>
import MangasGallery from '@/components/MangasGallery.vue';
import SearchMangas from '@/components/SearchMangas.vue';

export default{
    name: "Home",
    components: {
        MangasGallery,
        SearchMangas
    }
}
</script>