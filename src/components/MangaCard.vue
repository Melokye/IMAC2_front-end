<template>
<!-- type ? -->
<!-- attributes -->
    <div class="manga-card">
        <div class="rectoVerso">
            <img 
                v-bind:src= "'https://uploads.mangadex.org/covers/' +  mangaID + '/' +  mangaCoverID"
            />

            <div class="overlay">
                <div class="text">
                    <!-- altTitles ? -->
                    <p>Author</p>
                    <!-- <p>Tag ?</p> -->

                    <p>Status : {{ attributes.status }}</p>
                    <!-- TODO nb de chapitres pas encore lu -->
                    <p>Description : {{ attributes.description.en }}</p>
                    <!-- TODO <p>Lien vers le dernier chapitre (lu ?)</p> -->
                    <!-- TODO <p>Obligatoire : scanlation groups</p> -->
                </div>
            </div>
        </div>

        <!-- TODO overflow ? -->
        <h2>[{{attributes.originalLanguage}}] {{attributes.title.en}}</h2>

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
    .manga-card {
        border-radius: 1rem;
        /* background-color: transparent #003E73; */
        border: 0.2rem solid #3DF1CD ;

        padding: 2rem;
        margin-bottom: 2rem;

        width: 50%;
        /* width: 22rem; */
        /* height: 30rem; */

        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    .rectoVerso{
        position: relative;
    }
    .manga-card:hover .overlay {
        opacity: 1;
    }
    .manga-card:hover img {
        opacity: 0.1;
    }

    .overlay{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .7s ease;
    }

    .text {
        position: absolute;

        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;

        /* TODO class à part ? */
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 1rem;
        display: block;
    }
</style>