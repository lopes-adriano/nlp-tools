<script setup>

const text = ref('')
const toast = useToast()

const emit = defineEmits(['text-submited'])


const handleSubmit = () => {
  if (!text.value.trim()) {
    toast.add({description:'Por favor, digite um texto.', timeout: 2500})
    return
  }

  emit('text-submited', text.value)

}

</script>



<template>
  <div class="relative w-1/2 bg-gray-900 shadow-md rounded-lg">
    <UTextarea
      :rows="12"
      placeholder="Digite ou cole seu texto..."
      size="xl"
      v-model="text"
      class="w-full"
    ></UTextarea>
    <div class="flex items-center justify-center w-full my-4">
      <UButton
        @click="handleSubmit"
        icon="uil:processor"
        size="lg"
        :ui="{ rounded: 'rounded-xl' }"
        class=""
      >
        Processar
      </UButton>
    </div>
    <UButton
      @click="text = ''"
      size="lg"
      color="red"
      icon="material-symbols-light:delete-outline"
      variant="outline"
      :ui="{ rounded: 'rounded-xl' }"
      class="absolute right-4 bottom-4"
    >
    </UButton>
  </div>
</template>




