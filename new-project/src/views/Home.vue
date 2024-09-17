<template>
  <Navbar/>
  <div class="w-full">
    <YearChart @on-click-column="openModalAfterClickEvent" class="m-auto"/>
  </div>
  <label v-for="item in users">{{item.name}}</label>
</template>

<script setup lang="ts">

import Navbar from "../components/Navbar.vue";
import YearChart from "../components/YearChart.vue";
import {Month} from "../types/MonthTypes.ts";
import {onMounted, ref} from "vue";
import {useDataApi} from "../composables/useDataApi.ts";

const monthToDisplay = ref<Month>()
const users = ref<TestResponse[]>()

const {getUsers} = useDataApi()
export type TestResponse = {
  name: string, description: string, id: number
}

function openModalAfterClickEvent(value: Month) {
  monthToDisplay.value = value;
}
onMounted(async () => {
  users.value = await  getUsers()
})
</script>

<style scoped>

</style>
