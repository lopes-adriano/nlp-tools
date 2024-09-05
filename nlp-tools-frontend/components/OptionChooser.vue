<script setup>
const options = getOptions();

const selected = ref(options[0])

const emit = defineEmits(['option-changed'])

const handleChange = () => {
  console.log(selected.value.label)
  emit('option-changed', selected.value.label)
}


</script>

<template>
  <div class="flex justify-between w-full">
    <div class="space-y-2">
      <p class="text-xl font-bold">{{ selected.label }}</p>
      <p class="text-xs max-w-[350px] text-justify">{{ selected.description }}</p>
    </div>
    <div class="flex items-center justify-center">
      <USelectMenu size="lg" v-model="selected" @change="handleChange" :options="options" />
    </div>
  </div>
</template>
