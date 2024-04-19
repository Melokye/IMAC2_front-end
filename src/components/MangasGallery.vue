<template>
  <SearchMangas v-model:search="search"/>

  <GallerySort 
    v-model:mangasSortType="mangasSortType"
    :sortOptions="mangasOptions"
  />

  <div class="mangasGallery">
    <MangaCard v-for="manga in mangasOrganizedData"
      :mangaCover="getMangaCover(manga)"
      :mangaTitle="manga.attributes.title.en"
      :mangaDescription="manga.attributes.description.en"
      :mangaStatus="manga.attributes.status"
      :mangasAuthors="getAuthors(manga)"
      :mangaYear="manga.attributes.year"
      :mangaID="manga.id"
    />
  </div>
</template>

<script>
import { getMangasData } from '@/services/api/mangaAPI';

import MangaCard from '@/components/MangaCard.vue';
import SearchMangas from '@/components/SearchMangas.vue';
import GallerySort from '@/components/GallerySort.vue';

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
    // TODO ne fonctionnent pas directement sur l'enfant ...
    search: function(newSearch) {
      localStorage.setItem("search", newSearch); 
      this.retrieveMangasData();
    },
    mangasSortType: function(newMangasSortType) {
      localStorage.setItem("mangasSortType", newMangasSortType);
    }
  },
  computed: {
    mangasOrganizedData() {
      const comparator = ["AZName", "ZAName"].includes(this.mangasSortType) ? 
         (a, b) => this.getTitle(a).localeCompare(this.getTitle(b))
        : (a, b) => a.attributes.year > b.attributes.year;
      const reversed = ["ZAName", "91Year"].includes(this.mangasSortType);

      let data = this.mangasData.sort(comparator);      
      if (reversed) data = data.reverse();
      return data;
    }
  },
  data() {
    return {
      mangasData: [],
      search: localStorage.getItem("search") || "",
      mangasOptions: [
        { text: 'A to Z', value: 'AZName' },
        { text: 'Z to A', value: 'ZAName' },
        { text: 'Newest to oldest', value: '91Year'},
        { text: 'Oldest to newest', value: '19Year'}
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