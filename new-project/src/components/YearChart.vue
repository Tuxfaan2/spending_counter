<template>
  <fieldset class="grid grid-cols-12 gap-2 w-2/3 m-auto mt-36">
    <ChartBar month="January" @on-click-item="resetAllExcludedOwn" v-model="isActiveJanuary"/>
    <ChartBar month="February" @on-click-item="resetAllExcludedOwn" v-model="isActiveFebruary"/>
    <ChartBar month="March" @on-click-item="resetAllExcludedOwn" v-model="isActiveMarch"/>
    <ChartBar month="April" @on-click-item="resetAllExcludedOwn" v-model="isActiveApril"/>
    <ChartBar month="May" @on-click-item="resetAllExcludedOwn" v-model="isActiveMay"/>
    <ChartBar month="June" @on-click-item="resetAllExcludedOwn" v-model="isActiveJune"/>
    <ChartBar month="July" @on-click-item="resetAllExcludedOwn" v-model="isActiveJuly"/>
    <ChartBar month="August" @on-click-item="resetAllExcludedOwn" v-model="isActiveAugust"/>
    <ChartBar month="September" @on-click-item="resetAllExcludedOwn" v-model="isActiveSeptember"/>
    <ChartBar month="October" @on-click-item="resetAllExcludedOwn" v-model="isActiveOctober"/>
    <ChartBar month="November" @on-click-item="resetAllExcludedOwn" v-model="isActiveNovember"/>
    <ChartBar month="December" @on-click-item="resetAllExcludedOwn" v-model="isActiveDecember"/>
  </fieldset>
  <label class="w-full border-b border-black"/>
</template>

<script setup lang="ts">
import ChartBar from "./ChartBar.vue";
import {ref} from "vue";
import {Month} from "../types/MonthTypes.ts";

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

const emit = defineEmits<{
  (event: "on-click-column", value: Month): void;
}>()

function resetAllExcludedOwn(column: Month) {
  emit("on-click-column", column);
  switch (column) {
    case "January":
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
    case "February":
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
    case "March":
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
    case "April":
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
    case "June":
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
    case "July":
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
    case "August":
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
    case "September":
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
    case "October":
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
    case "November":
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