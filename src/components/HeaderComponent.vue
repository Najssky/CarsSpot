<template>
  <div class="hero-bg">
    <nav-component></nav-component>
    <div class="max-w-full py-36 h-[1080px] px-2 sm:px-6 lg:px-8 ">
      <div class="max-w-[1600px] h-[343px] grid grid-cols-14 gap-4 mx-32">
        <h1 class="font-bebas text-[6.5rem] font-normal leading-[1.1] tracking-tight-custom text-left col-span-1 my-4">
          SPRZEDAJEMY SAMOCHODY<br> Z EUROPY
        </h1>
        <div class="col-span-9"></div>
        <h2 class="col-span-4 my-6 text-xl font-normal">
          Kup komfortowyt pojazd, aby każda podróż<br>była wyjątkowym przeżyciem.
        </h2>
        <div class="col-span-10"></div>
        <div class="col-span-1 ">
          <button type="button" class="text-white bg-button-blue focus:ring-4 font-medium rounded-lg text-lg px-10 py-5 me-2 mr-8 focus:outline-none">Zobacz zdjęcia</button>
          <button type="button" class="text-button-blue border border-button-blue focus:ring-4 font-medium rounded-lg text-lg px-10 py-5 me-2 focus:outline-none">Zadzwoń do nas</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComponent from "./NavComponent.vue"
export default {
  components: { NavComponent },
  name: "HeaderComponent",
  props: {},
}
</script>

<style>

</style>