import type ApiResponse from "~/types/ApiResponse";

const colors = ['text-blue-500', 'text-green-500', 'text-yellow-500', 'text-pink-500', 'text-purple-500', 'text-gray-500']

let prevTag = '';
let prevColor = '';

function getColor(tag: string): string {
  const index = tag.charCodeAt(0) % colors.length;
  
  // Se a cor calculada é igual à cor da palavra anterior, ajuste o índice
  let color = colors[index];
  if (color === prevColor) {
    color = colors[(index + 1) % colors.length];
  }

  // Atualize os registros da cor e da tag anterior
  prevTag = tag;
  prevColor = color;
  
  return color;
}


export default function formatResponse(apiResponse: ApiResponse): string {
  let response = '';

  if (apiResponse.error) {
    return `Error: ${apiResponse.error}`;
  }

  if (apiResponse.tokens) {
    response += 'Tokens:<br>';
    for (const token of apiResponse.tokens) {
      response += `<span class="${getColor(token)}">${token}</span> `;
    }
    response += '\n\n';
  }

  if (apiResponse.lemmas) {
    response += 'Lemmatização:<br>';
    for (const lemma of apiResponse.lemmas) {
      response += `<span class="${getColor(lemma)}">${lemma}</span> `;
    }
    response += '\n\n';
  }

  if (apiResponse.pos) {
    response += 'POS:\n';
    for (const [word, tag] of apiResponse.pos) {
      response += `<br>- <span class="${getColor(tag)}">${word}</span>: ${tag}\n`;
    }
    response += '\n';
  }

  if (apiResponse.entities) {
    response += 'NER:\n';
    for (const [entity, label] of apiResponse.entities) {
      response += `<br>- <span class="${getColor(label)}">${entity}</span> (${label})\n`;
    }
    response += '\n';
  }

  if (apiResponse.summary) {
    response += `Resumo:<br>${apiResponse.summary}\n\n`;
  }

  return response.trim();
}


