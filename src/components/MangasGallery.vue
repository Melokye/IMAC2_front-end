<template>  
  <h2>Gallery</h2>
  <div>
      <MangaCard/>
    <!-- :title="mangasData[0].title"  -->
  </div>  
  
    
    <!-- <div v-for="manga in resp" >
    <p>{{ manga.attributes.title }}</p>
    </div> -->
  
</template>
  
<script>
  // import { getMangasData } from '../services/api/mangaAPI';
  // import { getMangasData } from './main';
  import MangaCard from '@/components/MangaCard.vue'
    
  export default {
    name: 'MangasGallery',
    components:{
      MangaCard
    },
  
  //   methods:{
  //     async retrieveMangasData(){
  //       // this.mangasData =
  //       // const test = await getMangasData();
  //       // console.log(test);
  //     }
  //   }
    
  }
  </script>