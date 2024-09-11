<template>
  <fieldset class="bg-blue-950 grid grid-cols-1 gap-5 rounded-xl">
    <label class="w-2/3 m-auto text-gray-300">
      E-Mail:
      <input type="text" placeholder="example@mail.com" id="mail-input"
             class="w-full border-2 border-blue-800 rounded items-center bg-blue-800"/></label>
    <label class="w-2/3 m-auto text-gray-300">
      Password:
      <input type="text" placeholder="********" id="password-input"
             class="w-full border-2 border-blue-800 rounded bg-blue-800"/></label>
    <RouterLink to="/home" class="border-2 size-fit m-auto px-2 rounded items-center text-gray-300 bg-blue-800">Login
    </RouterLink>
    <label class="m-auto text-xl text-gray-300">or</label>
    <RouterLink to="/home" class="border-2 size-fit m-auto px-2 rounded items-center text-gray-300 bg-blue-800">Continue
      as a Guest
    </RouterLink>
  </fieldset>
</template>

<script setup lang="ts">
</script>

<style scoped></style>