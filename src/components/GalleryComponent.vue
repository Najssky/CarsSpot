<template>
  <div class="max-w-full min-h-[1180px] sm:px-6 lg:px-8">
    <div class="max-w-[1760px] min-h-[276px] pt-[106px] grid grid-cols-6 gap-4 mx-20">
      <p class="col-span-2 text-2xl text-button-blue font-normal font-roboto-condensed mb-1">Prezentacja firmy</p>
      <div class="col-span-4"></div>
      <h1 class="col-span-4 font-bebas text-6xl font-normal leading-tight">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h1>
      <div class="col-span-2"></div>
      <div class="col-span-3 text-lg">
        <button class="mr-12 text-button-blue font-semibold underline underline-offset-[7px] decoration-2">Samochody osobowe</button>
        <button>Samochody dostawcze</button>
      </div>
    </div>

    <div class="max-w-full pt-[106px] min-h-[904px] ml-20">
    <div class="relative swiper-container">
      <swiper
        :slidesPerView="2.1"
        :spaceBetween="60"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper pb-[100px]"
        style="--swiper-pagination-color: #0147FF; 
        --swiper-pagination-bullet-size: 12px;
        --swiper-pagination-bullet-width: 12px;
        --swiper-pagination-bullet-height: 12px;
        --swiper-pagination-bottom: 0;
        --swiper-pagination-width: 95%;
        --swiper-pagination-bullet-vertical-gap: 6px;"

        >
        <swiper-slide v-for="(photo, index) in photos" :key="index">
          <img :src="photo.itemImageSrc" :alt="photo.alt" class="w-full h-full object-cover shadow-md">
        </swiper-slide>
      </swiper>
    </div>
  </div>
  </div>
</template>

<script>
import { PhotoService } from '@/services/PhotoService';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: "GalleryComponent",
  components: {
      Swiper,
      SwiperSlide,
    },
  data() {
    return {
      photos: [],
      modules: [ Pagination],
    };
  },
  created() {
    this.loadPhotos();
  },
  methods: {
    async loadPhotos() {
      try {
        const data = await PhotoService.getImages();
        this.photos = data;
      } catch (error) {
        console.error('Error loading photos:', error);
      }
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    }
  }
}
</script>

<style scoped>
.swiper-container {
  overflow:visible; 
}

.mySwiper {
  position: relative;
  width:100%;
}

.swiper-pagination{
  width:95%;
}
</style>