<template>
  <Navbar/>
  <div class="w-full">
    <YearChart @on-click-column="openModalAfterClickEvent" class="m-auto"/>
  </div>
  <ExpensesModal :isOpen="isOpen" class="mt-36" :text="monthToDisplay"/>
  <ExpensesModal :isOpen="isOpen" class="mt-36" :text="monthToDisplay"/>
</template>

<script setup lang="ts">

import Navbar from "../components/Navbar.vue";
import YearChart from "../components/YearChart.vue";
import {useModal} from "../composables/useModal.ts";
import ExpensesModal from "../components/ExpensesModal.vue";
import {Month} from "../types/MonthTypes.ts";
import {ref} from "vue";

const monthToDisplay = ref<Month>()

const {isOpen, openModal} = useModal();

function openModalAfterClickEvent(value: Month) {
  openModal();
  monthToDisplay.value = value;
}
</script>

<style scoped>

</style>
