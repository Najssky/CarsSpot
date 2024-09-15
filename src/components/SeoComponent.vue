<template>
  <div class="max-w-full min-h-[481px] bg-[#282828] px-32 py-24 text-white grid grid-cols-2 gap-8">
    <!-- Pierwsza kolumna -->
    <div class="col-span-1 px-4">
      <h1 class="font-bebas text-4xl pb-8">
        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
      </h1>
      <p class="font-roboto-condensed text-xl pb-8">
        Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]
      </p>
      <button class="underline-btn font-roboto-condensed text-xl flex items-center">
        Rozwiń 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 ml-2">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- Druga kolumna -->
    <div class="col-span-1 px-4">
      <h1 class="font-bebas text-4xl pb-8">
        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
      </h1>
      <p class="font-roboto-condensed text-xl pb-8">
        Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]
      </p>
      <button class="underline-btn font-roboto-condensed text-xl flex items-center">
        Rozwiń 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 ml-2">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeoComponent",
}
</script>

<style scoped>
.underline-btn {
  border-bottom: 4px solid #fff;
  padding-bottom: 4px;
}

</style>
