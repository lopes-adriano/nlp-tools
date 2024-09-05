export default function copyToClipboard(text: string) {
  // Create a new DOMParser instance
  const parser = new DOMParser();
  const toast = useToast();

  // Parse the HTML string into a Document
  const doc = parser.parseFromString(text, 'text/html');

  // Extract the text content from the Document
  const textContent = doc.body.textContent || '';

  // Copy the text content to the clipboard
  navigator.clipboard.writeText(textContent)
    .then(() => {
      toast.add({ description: 'Texto copiado!', timeout: 1500 });
    })
    .catch(err => {
      console.error('Falha ao copiar texto: ', err);
    });
}
