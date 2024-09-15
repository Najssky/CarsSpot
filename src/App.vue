<template>
  <header-component></header-component>
  <gallery-component></gallery-component>
</template>

<script>
import GalleryComponent from './components/GalleryComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: "App",
  components: { HeaderComponent,GalleryComponent},
};
</script>

<style>
html, body {
  background-color: #f0f0f0;
  color: #1D1D1B;
  font-family: 'Roboto';
}
</style>
