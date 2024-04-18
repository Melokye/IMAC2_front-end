<template>
  <SearchMangas v-model:search="search"/>
  <GallerySort v-model:mangasSortType="mangasSortType" />

  <div class="mangasGallery">
    <MangaCard v-for="manga in mangasOrganizedData"
      :attributes="manga.attributes" 
      :mangaID="manga.id"
      :mangaCoverID="manga.relationships.filter(data => data['type'] == 'cover_art').map(data => data.attributes['fileName'])[0]" 
    />
    <!-- TODO mangaCoverID => dans une fct-->
    <!-- TODO attributes -->

    <!-- TODO à supp : -->

    <!-- <div v-for="data in manga">
        <p>{{ data }}</p>
      </div> -->

    <!-- TODO altTitle ? -> originalLanguage + selected -->
    <!-- TODO {{ manga.availableTranslatedLanguages }} -->
    <!-- TODO {{ manga.attributes.latestUploadedChapter }} -->
    <!-- () -->
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
    search: function() {
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
      mangasSortType: localStorage.getItem("mangasSortType") || "AZName"
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

h2 {
  font-size: 20px;
}
</style>