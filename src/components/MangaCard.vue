<template>
<!-- type ? -->
<!-- attributes -->
    <div class="manga-card">
        <img 
            v-bind:src= "'https://uploads.mangadex.org/covers/' +  mangaID + '/' +  mangaCoverID + '.256.jpg'"
        />
        <h2>[{{attributes.originalLanguage}}] {{attributes.title.en}}</h2>
        <!-- altTitles ? -->
        <p>Author</p>
        <p>Tag ?</p>

        <p>Status : {{ attributes.status }}</p>
        <!-- TODO nb de chapitres pas encore lu -->
        <p>Description : {{ attributes.description.en }}</p>
        <!-- TODO <p>Lien vers le dernier chapitre (lu ?)</p> -->
        <!-- TODO <p>Obligatoire : scanlation groups</p> -->
    </div>
</template>

<script>
    export default{
        name: 'MangaCard',
        props: {
            attributes: Object, // TODO ?
            mangaID: String,
            mangaCoverID: String
        }
    }
</script>

<style scoped>
    /* TODO columns class */
    .manga-card {
        /* display: flex; */
        /* TODO columns: 2; */
        border-radius: 1rem;
        /* background-color: transparent #003E73; */
        border: 0.2rem solid #3DF1CD ;
        padding: 2rem;
        margin-bottom: 2rem;
        text-align: center;
        width: 22rem;
        height: 30rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    img {
        width: 256px;
        max-height: 100%;
        /* TODO rounded */
    }
</style>