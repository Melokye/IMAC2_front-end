<template>
<!-- type ? -->
<!-- attributes -->
    <div class="manga-card">
        <h2>{{attributes.title.en}}</h2>

        <p>Drapeau d'origine ?</p>
        <p>IMG</p>
        altTitles ?
        <p>Author</p>
        <p>Tag ?</p>

        <p>Status : nb de chapitres pas encore lu</p>
        <p>Description : {{ attributes.description.en }}</p>
        <p>Lien vers le dernier chapitre (lu ?)</p>
        <p>Obligatoire : scanlation groups</p>
    </div>
</template>

<script>
    export default{
        name: 'MangaCard',
        props: {
            attributes: []
        }
    }
</script>

<style scoped>
    /* TODO columns class */
    .manga-card {
        /* display: flex; */
        columns: 2;
        border-radius: 1rem;
        /* background-color: transparent #003E73; */
        border: 0.2rem solid #3DF1CD ;
        padding: 2rem;
        margin-bottom: 2rem;
    }
</style>