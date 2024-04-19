<template>
    <img v-bind:src="cover(mangaData)"/>
    <h2>{{title(mangaData)}}</h2>
    <p>Made by</p>
    <ul>
        <li v-for="author in authors(mangaData)">
            {{author}}
        </li>
    </ul>
    {{description(mangaData)}}
    <!-- {{mangaData}} -->
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
import { getMangaData, getTitle, getMangaCover, getAuthors, getDescription} from '@/services/api/mangaAPI';

export default{
    name: "MangaPage",

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
        },
        title(manga){
            return getTitle(manga);
        },
        cover(manga){
            return getMangaCover(manga);
        },
        authors(manga){
            return getAuthors(manga);
        },
        description(manga){
            return getDescription(manga)
        }
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        max-width: 20rem;
    }
</style>