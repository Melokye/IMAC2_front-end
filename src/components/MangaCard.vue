<template>
<!-- type ? -->
<!-- attributes -->
    <div class="manga-card">
        <h2>[{{attributes.originalLanguage}}] {{attributes.title.en}}</h2>
        <!-- <img src="https://uploads.mangadex.org/covers/{{mangaID}}/{{getMangaCoverID()}}.jpg"> -->
    
        <p>IMG</p>
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
            // mangaCoverID: String
        },
        methods: {
            // getMangaCoverID(){
            //     for (const property in mangaCoverID){
            //     if(property[type] == "cover_art")
            //         return property[id];
            //     }

            //     // type == "artist"
            //     // type == "author"
            //     // type == "cover_art"
            // }
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
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>