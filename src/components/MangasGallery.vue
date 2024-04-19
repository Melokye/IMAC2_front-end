<template>
  <SearchMangas v-model:search="search"/>

  <GallerySort 
    v-model:mangasSortType="mangasSortType"
    :mangasOptions="mangasOptions"
  />

  <div class="mangasGallery">
    <MangaCard v-for="manga in mangasOrganizedData"
      :mangaCover="getMangaCover(manga)"
      :mangaTitle="manga.attributes.title.en"
      :mangaDescription="manga.attributes.description.en"
      :mangaStatus="manga.attributes.status"
      :mangasAuthors="getAuthors(manga)"
    />

    <!-- TODO à supp : -->

    <!-- {{ manga.attributes.originalLanguage }} -->
    <!-- TODO nb de chapitres pas encore lu -->

    <!-- TODO <p>Lien vers le dernier chapitre (lu ?)</p> -->
    <!-- TODO <p>Obligatoire : scanlation groups</p> -->

    <!-- TODO altTitle ? -> originalLanguage + selected -->
    <!-- TODO {{ manga.availableTranslatedLanguages }} -->
    <!-- TODO {{ manga.attributes.latestUploadedChapter }} -->

    <!-- TODO {{ manga.attributes.tags }} -->
  </div>
</template>

<script>
import { getMangasData } from '../services/api/mangaAPI';

import MangaCard from '@/components/MangaCard.vue';
import SearchMangas from './SearchMangas.vue';
import GallerySort from './GallerySort.vue';

export default {
  name: 'MangasGallery',
  components: {
    MangaCard,
    SearchMangas,
    GallerySort
  },
  created: function () {
    this.retrieveMangasData();
  },
  watch: {
    search: function(newSearch) {
      localStorage.setItem("search", newSearch); // ne fonctionnait pas directement sur l'enfant ...
      this.retrieveMangasData();
    },
  },
  computed: {
    mangasOrganizedData() {
      // const field = ["AZName", "ZAName"].includes(this.mangasSortType) ? "attributes.title.en" : "???";
      const reversed = ["ZAName"].includes(this.mangasSortType);
      const comparator = (a, b) => this.getTitle(a).localeCompare(this.getTitle(b));
      // a.attributes.title.localeCompare(b.attributes.title);
      // TODO attributes.title.en => à généraliser
      // TODO trier par un autre critère
      let data = this.mangasData.sort(comparator);      
      if (reversed) data = data.reverse();
      return data;

      // return this.mangasData
      // .filter((a) => a.attributes.title.en.toLowerCase().includes(this.search.toLowerCase()))
      // .sort((a, b) => a.attributes.title.en.localeCompare(b.attributes.title.en) * reversed)
    }
  },
  data() {
    return {
      mangasData: [],
      search: localStorage.getItem("search") || "",
      mangasOptions: [
        { text: 'A to Z', value: 'AZName' },
        { text: 'Z to A', value: 'ZAName' },
      ],
      mangasSortType: localStorage.getItem("mangasSortType") || "AZName",
    }
  },
  methods: {
    async retrieveMangasData() {
      this.mangasData = await getMangasData(this.search);
    },
    getTitle(manga){
      return manga.attributes.title[manga.attributes.originalLanguage] || manga.attributes.title.en;
    },
    goToManga() {
      this.$router.push('/manga/' + manga.id);
    },
    getMangaCover(manga){
      let mangaCoverId = manga.relationships
        .filter(data => data['type'] == 'cover_art')
        .map(data => data.attributes['fileName'])[0];
      return 'https://uploads.mangadex.org/covers/' +  manga.id + '/' +  mangaCoverId;
    },
    getAuthors(manga){
      return manga.relationships
        .filter(data => data['type'] == 'author')
        .map(data => data.attributes['name']);
    }
  },
}
</script>

<style>
.mangasGallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>