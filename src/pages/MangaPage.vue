<template>
    <h2>{{mangaData}}</h2>
    <!-- TODO à supp : -->

    <!-- {{ manga.attributes.originalLanguage }} -->
    <!-- TODO nb de chapitres pas encore lu -->

    <!-- TODO <p>Lien vers le dernier chapitre (lu ?)</p> -->
    <!-- TODO <p>Obligatoire : scanlation groups</p> -->

    <!-- TODO altTitle ? -> originalLanguage + selected -->
    <!-- TODO {{ manga.availableTranslatedLanguages }} -->
    <!-- TODO {{ manga.attributes.latestUploadedChapter }} -->

    <!-- TODO {{ manga.attributes.tags }} -->
    <RouterLink to="/">Return to Home Page</RouterLink>
</template>

<script>
// import MangasGallery from '@/components/MangasGallery.vue';
// import SearchMangas from '@/components/SearchMangas.vue';
import { getMangaData } from '@/services/api/mangaAPI';

export default{
    name: "MangaPage",
    // components: {
    //     MangasGallery,
    //     SearchMangas
    // }
    data() {
        return{
            mangaData: [],
            mangaID: String
        }
    },
    created() {
        this.mangaID = this.$route.params.id;
        this.retrieveMangaData(this.mangaID);
    },
    methods:{
        async retrieveMangaData(id){
            this.mangaData = await getMangaData(id);
        }
    }
}
</script>