<template>
  <SearchMangas v-model:search="search"/>

  <GallerySort 
    v-model:mangasSortType="mangasSortType"
    :sortOptions="mangasOptions"
  />

  <div class="mangasGallery">
    <MangaCard v-for="manga in mangasOrganizedData"
      :mangaCover="cover(manga)"
      :mangaTitle="title(manga)"
      :mangaDescription="description(manga)"
      :mangaStatus="manga.attributes.status"
      :mangasAuthors="authors(manga)"
      :mangaYear="manga.attributes.year"
      :mangaID="manga.id"
    />
  </div>
</template>

<script>
import { getAuthors, getDescription, getMangaCover, getMangasData, getTitle} from '@/services/api/mangaAPI';

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
         (a, b) => this.title(a).localeCompare(this.title(b))
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
      return getDescription(manga);
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