export  default function  getOptions () {    
    return [

        {
          label: "Resumir",
          description: "Faz um resumo do texto extraindo as frases mais importantes. (Resumo extrativo)",
        },
        {
          label: "Tokenização",
          description:
            "Separação de um texto em unidades menores (tokens)",
        },
        {
          label: "POS",
          description:
            "Identificação e etiquetagem de cada token de acordo com sua classe gramatical (substantivo, verbo, adjetivo, etc.).",
        },
        {
          label: "NER",
          description:
            "Extração de entidades como pessoas, organizações, etc., de um texto.",
        },
        {
          label: "Lematização",
          description:
            "Transformação de palavras em sua forma base ou raiz.",
        },
      ]
};
