<template>
  <header-component></header-component>
  <gallery-component></gallery-component>
  <seo-component></seo-component>
</template>

<script>
import GalleryComponent from './components/GalleryComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import SeoComponent from './components/SeoComponent.vue';
export default {
  name: "App",
  components: { HeaderComponent,GalleryComponent, SeoComponent},
};
</script>

<style>
html, body {
  background-color: #f0f0f0;
  color: #1D1D1B;
  font-family: 'Roboto';
}
</style>
