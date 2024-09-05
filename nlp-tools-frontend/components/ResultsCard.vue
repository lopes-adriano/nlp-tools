<script setup>

const props = defineProps({
  results: String
});

const copyResults = () => {
  copyToClipboard(props.results);
};

</script>

<template>
  <div class="w-1/2 shadow-md  bg-gray-900 rounded-lg ">
    <p class="py-[10px] px-[14px] overflow-y-auto h-[308px] text-base" v-html="props.results"></p>
    <div class="flex items-center justify-end  w-full my-4">
      <UButton class="mr-4" icon="mingcute:copy-line" size="lg" variant="outline" :ui="{ rounded: 'rounded-xl' }"
        @click="copyResults">
        Copiar
      </UButton>
    </div>
  </div>
</template>
