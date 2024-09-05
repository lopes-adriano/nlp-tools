import type ApiResponse from "~/types/ApiResponse";

export const useSpacy = async (text: string, option: string) => {
  const toast = useToast();

  if (!text || !option) {
    throw new Error('Text and option parameters are required.');
  }

  try {
    const data : ApiResponse = await $fetch('http://127.0.0.1:5001/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, option }),
    });

    const result = formatResponse(data);
    return result;
  } catch (error) {
    console.error('Error processing text:', error);
    toast.add({ description: 'Ocorreu um erro ao processar o texto. Tente novamente mais tarde.' });
    throw error; // Re-lança o erro se for necessário lidar com ele em outro lugar
  }
};