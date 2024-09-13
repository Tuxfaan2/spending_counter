<template>
  <fieldset class="grid grid-cols-12 gap-2 w-2/3 m-auto mt-36">
    <ChartBar month="Jan" @on-click-item="resetAllExcludedOwn" v-model="isActiveJanuary"/>
    <ChartBar month="Feb" @on-click-item="resetAllExcludedOwn" v-model="isActiveFebruary"/>
    <ChartBar month="Mar" @on-click-item="resetAllExcludedOwn" v-model="isActiveMarch"/>
    <ChartBar month="Apr" @on-click-item="resetAllExcludedOwn" v-model="isActiveApril"/>
    <ChartBar month="May" @on-click-item="resetAllExcludedOwn" v-model="isActiveMay"/>
    <ChartBar month="Jun" @on-click-item="resetAllExcludedOwn" v-model="isActiveJune"/>
    <ChartBar month="Jul" @on-click-item="resetAllExcludedOwn" v-model="isActiveJuly"/>
    <ChartBar month="Aug" @on-click-item="resetAllExcludedOwn" v-model="isActiveAugust"/>
    <ChartBar month="Sep" @on-click-item="resetAllExcludedOwn" v-model="isActiveSeptember"/>
    <ChartBar month="Oct" @on-click-item="resetAllExcludedOwn" v-model="isActiveOctober"/>
    <ChartBar month="Nov" @on-click-item="resetAllExcludedOwn" v-model="isActiveNovember"/>
    <ChartBar month="Dec" @on-click-item="resetAllExcludedOwn" v-model="isActiveDecember"/>
  </fieldset>
  <label class="w-full border-b border-black"/>
</template>

<script setup lang="ts">
import ChartBar from "./ChartBar.vue";
import {ref} from "vue";

const isActiveJanuary = ref<boolean>(false);
const isActiveFebruary = ref<boolean>(false);
const isActiveMarch = ref<boolean>(false);
const isActiveApril = ref<boolean>(false);
const isActiveMay = ref<boolean>(false);
const isActiveJune = ref<boolean>(false);
const isActiveJuly = ref<boolean>(false);
const isActiveAugust = ref<boolean>(false);
const isActiveSeptember = ref<boolean>(false);
const isActiveOctober = ref<boolean>(false);
const isActiveNovember = ref<boolean>(false);
const isActiveDecember = ref<boolean>(false);

function resetAllExcludedOwn(column: string) {
  switch (column) {
    case "Jan":
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Feb":
      isActiveJanuary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Mar":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Apr":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "May":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Jun":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveJuly.value = false;
      isActiveMay.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Jul":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Aug":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Sep":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Oct":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveNovember.value = false;
      isActiveDecember.value = false;
      break;
    case "Nov":
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveDecember.value = false;
      break;
    default:
      isActiveJanuary.value = false;
      isActiveFebruary.value = false;
      isActiveMarch.value = false;
      isActiveApril.value = false;
      isActiveMay.value = false;
      isActiveJuly.value = false;
      isActiveJune.value = false;
      isActiveAugust.value = false;
      isActiveSeptember.value = false;
      isActiveOctober.value = false;
      isActiveNovember.value = false;
      break;
  }
}
</script>

<style scoped></style>