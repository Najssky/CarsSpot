<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="max-w-full px-2 sm:px-6 lg:px-8">
      <div class="max-w-[1600px] flex h-[79px] items-center justify-between">
        <!-- Logo po lewej stronie -->
        <div class="flex items-center" style="margin-left: 50px;">
          <img class="h-[32.61px] w-[152.79px]" src="../assets/images/logo.svg" alt="Your Company" />
        </div>

        
        <!-- Elementy menu wyśrodkowane -->
        <div class="flex flex-1 justify-center items-center">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'text-black' : 'text-black hover:text-gray', 'rounded-md px-3 py-2 text-sm font-medium font-sans']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="relative">
          <button type="button" class="text-white bg-button-blue focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Zadzwoń do nas</button>
        </div>
        <!-- Button po prawej stronie -->
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden" style="margin-right: 50px;">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Panel rozwijanego menu dla wersji mobilnej -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
 <script>
 import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    export default {
    components: {
      Disclosure, DisclosureButton, DisclosurePanel
    },
    name: "NavComponent",
    props: {},
    data(){
      return{
        navigation:[
          { name: 'Galeria zdjęć', href: '#', current: true },
          { name: 'FAQ', href: '#', current: false },
        ]
      }
    }
    };
  </script>

<style>

</style>