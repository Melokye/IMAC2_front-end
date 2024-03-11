<template>
<!-- type ? -->
<!-- attributes -->
    <div class="manga-card">
        <h2>Title : {{title}}</h2>
        <p>Drapeau d'origine ?</p>
        <p>IMG</p>
        altTitles ?
        <p>Author</p>
        <p>Tag ?</p>

        <p>Status : nb de chapitres pas encore lu</p>
        <p>Description rapide</p>
        <p>Lien vers le dernier chapitre (lu ?)</p>
        <p>Obligatoire : scanlation groups</p>
    </div>
</template>

<script>
    export default{
        name: 'MangaCard',
        props: {
            title: String,
            // description: String
        }
    }
</script>

<style scoped>
    .manga-card {
        /* display: flex; */
        columns: 2;
        border-radius: 1rem;
        background-color: #003E73;
        border: 0.2rem solid #3DF1CD ;
        padding: 1rem;
    }

    h2 {
        font-size: 20px;
    }
</style>