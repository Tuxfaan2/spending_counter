<template>
  <div class="grid grid-cols-1 gap-2">
    <span class="m-auto bg-blue-500 h-32 w-2/3 rounded-t cursor-grab"
          :class="model === true?'bg-blue-900':'hover:bg-blue-300'" @click="onClickItem"/>
    <label class="text-center overflow-clip text-ellipsis">
      {{ month }}
    </label>
  </div>
</template>

<script setup lang="ts">
import {Month} from "../types/MonthTypes.ts";

const props = defineProps<{
  month: Month;
}>()
const model = defineModel<
    boolean
>();
const emit = defineEmits<{
  (event: "on-click-item", value: Month): void;
}>();

function onClickItem() {
  model.value = true;
  emit("on-click-item", props.month)
}
</script>

<style scoped></style>