<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="max-w-full px-2 sm:px-6 lg:px-8">
      <div class="max-w-[1600px] flex h-28 items-center justify-between mx-32">
        <div class="flex items-center">
          <img class="w-48 h-auto" src="../assets/images/logo.svg" alt="CarsSpot" />
        </div>
        <div class="hidden sm:flex sm:items-center sm:justify-center flex-1">
          <div class="flex space-x-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-black font-normal rounded-md px-3 py-2 text-xl">{{ item.name }}</a>
          </div>
        </div>
        <div class="relative hidden sm:block">
          <button type="button" class="text-white bg-button-blue focus:ring-4 font-medium rounded-lg text-lg px-8 py-4 me-2 mb-2 focus:outline-none">Zadzwoń do nas</button>
        </div>
        <div class="sm:hidden flex items-center">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
      <div class="px-2 pb-3 pt-2">
        <button type="button" class="text-white bg-button-blue focus:ring-4 font-medium rounded-lg text-lg px-8 py-4 w-full focus:outline-none">Zadzwoń do nas</button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    Disclosure, DisclosureButton, DisclosurePanel,
    Bars3Icon, XMarkIcon
  },
  name: "NavComponent",
  data() {
    return {
      navigation: [
        { name: 'Galeria zdjęć', href: '#', current: true },
        { name: 'FAQ', href: '#', current: false },
      ]
    }
  }
}
</script>

<style>
</style>
