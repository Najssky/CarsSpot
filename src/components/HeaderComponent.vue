<template>
  <div class="hero-bg">
    <nav-component></nav-component>
    <div class="max-w-full py-[120px] h-[1080px] px-2 sm:px-6 lg:px-8 ">
      <div class="max-w-[1600px] h-[343px] grid grid-cols-12 gap-4 mx-32">
        <div class="font-bebas text-custom-size font-normal leading-custom-line tracking-tight-custom text-left col-span-8 my-4">
          SPRZEDAJEMY SAMOCHODY Z EUROPY
        </div>
        <div class="col-span-4"></div>
        <div class="col-span-3">
          Kup komfortowyt pojazd, aby każda podróż<br>była wyjątkowym przeżyciem.
        </div>
        <div class="col-span-9"></div>
        <div class="col-span-4">
          <button type="button" class="text-white bg-button-blue focus:ring-4 font-normal rounded-lg text-base px-7 py-4 me-2 mb-2 focus:outline-none">Zobacz zdjęcia</button>
          <button type="button" class="text-button-blue bg-white border border-button-blue focus:ring-4 font-normal rounded-lg text-base px-7 py-4 me-2 mb-2 focus:outline-none">Zadzwoń do nas</button>
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