<template>
  <footer class="w-full py-8 border-t border-white bg-[#282828] font-roboto-condensed text-xl px-32 text-white">
    <div class="flex justify-between items-center">
      <p class="text-semibold">
        Cars Spot
      </p>
      <button class="underline-btn flex items-center">
        Polityka prywatności
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.underline-btn {
  border-bottom: 4px solid #fff;
  padding-bottom: 4px;
  display: inline-flex;
  align-items: center;
}
</style>