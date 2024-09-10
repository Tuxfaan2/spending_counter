<template>
  <div>
    <fieldset class="bg-gray-200 grid grid-cols-1">
      <PlayArea class="absolute size-fit m-auto"/>
      <div :class="'left-['+bla+ 'rem] -top-['+bla2+'px]'" class="size-10 bg-red-500 relative"
      />
    </fieldset>
  </div>
</template>
<script setup lang="ts">
import PlayArea from "../components/PlayArea.vue";
import {ref} from "vue";

const bla = 10;
const bla2 = 20;
const playerPositionX = ref<number>(80);
const playerPositionY = ref<number>(48);

function getCssDataForPlayerPosition() {
  return "left-[" + playerPositionX.value.toString() + "rem] top-[" + playerPositionY.value.toString() + "rem]";
}

</script>
<style scoped></style>