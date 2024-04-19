<template>
    <div class="manga-card" @click="goToMangaPage">
        <div class="reversible">
            <img 
                v-bind:src= "mangaCover"
            />
            <div class="overlay">
                <div class="text">
                    <p v-if="mangasAuthors.length == 1">By: {{mangasAuthors[0]}}</p>
                    <p v-else>By:
                        <ul>
                            <li v-for="author in mangasAuthors">
                                {{author}}
                            </li>
                        </ul>
                    </p>
                    <p>Year: {{ mangaYear || "Unknown" }}</p>
                    <p>Status: {{ mangaStatus }}</p>
                    <p>{{ mangaDescription || "No description found" }}</p>
                </div>
            </div>
        </div>
    
        <h3>
            {{mangaTitle}}
        </h3>
    </div>
</template>

<script>
    export default{
        name: 'MangaCard',
        props: {
            mangaCover: String,
            mangaTitle: String,
            mangaDescription : String,
            mangaStatus: String,
            mangasAuthors: Array,
            mangaYear: Number,
            mangaID: String
        },
        methods: {
            goToMangaPage(){
                const id = this.mangaID;
                this.$router.push({ name: 'mangaPage', params: { id } })
            }
        }
    }
</script>

<style scoped>
    .manga-card {
        border-radius: 1rem;
        border: 0.1rem solid #3DF1CD ;

        padding: 2rem;
        width: 15rem;

        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    .reversible{
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

        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
    }

    .reversible img {
        width: 100%;
        height: auto;
        border-radius: 1rem;
        display: block;
    }
</style>