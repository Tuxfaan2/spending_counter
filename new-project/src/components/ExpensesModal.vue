<template>
  <div class="fixed top-16 w-full max-w-sm px-4">
    <Popover v-on="isOpen" class="relative">
      <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
            class="bg-blue-600 absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
        >
          <div class="overflow-hidden rounded-lg">
            {{ text }}
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import {Popover, PopoverPanel} from '@headlessui/vue'
import {Month} from "../types/MonthTypes.ts";
import {text} from "@fortawesome/fontawesome-svg-core";


const props = defineProps<{
  isOpen: boolean;
  text?: Month
}>()

</script>

<style></style>