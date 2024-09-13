<template>
  <div class="grid grid-cols-1 gap-2">
    <span class="m-auto bg-blue-500 h-32 w-2/3 rounded-t cursor-grab"
          :class="model === true?'bg-blue-900':'hover:bg-blue-300'" @click="onClickItem"/>
    <label class="text-center">
      {{ month }}
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  month: string;
}>()
const model = defineModel<
    boolean
>();
const emit = defineEmits<{
  (event: "on-click-item", value: string): void;
}>();

function onClickItem() {
  model.value = true;
  emit("on-click-item", props.month)
}
</script>

<style scoped></style>