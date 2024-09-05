<script setup>

const text = ref('')
const selected = ref('Resumir')
const results = ref('')

const handleSubmit = async (event) => {
  console.log(text.value, selected.value)
  text.value = event
  results.value = await useSpacy(text.value, selected.value)
}

const updateOption = (event) => {
  selected.value = event
}


</script>


<template>
  <div class="flex-row items-center  justify-center">
    <UContainer class="w-1/2 mt-10">
      <h1 class="text-4xl font-bold text-center">
        Explore diferentes recursos de <span
          class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">NLP</span>
      </h1>
    </UContainer>

    <div class="mx-40 mt-10  border bg-gray-900 border-gray-500 shadow-md rounded-lg">
      <div class="mb-4 px-4 py-2">
        <OptionChooser v-model="selected" @option-changed="updateOption" />
      </div>

      <div class="flex space-x-2 bg-gray-800 rounded-b-lg p-4 w-full">
        <InputCard v-model="text" @text-submited="handleSubmit" />
        <ResultsCard :results="results" />
      </div>
    </div>
  </div>
</template>
