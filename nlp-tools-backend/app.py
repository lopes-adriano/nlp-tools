from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Carregando o modelo spaCy

nlp = spacy.load("pt_core_news_sm")


@app.route("/analyze", methods=["POST"])
def analyze_text():
    data = request.json
    text = data.get("text", "")
    option = data.get("option", "")

    try:
        # Processa o texto com o spaCy
        doc = nlp(text)

        response = {}

        # Utilizando match-case para selecionar a operação
        match option:
            case "Tokenização":
                response["tokens"] = [token.text for token in doc]

            case "Lematização":
                response["lemmas"] = [token.lemma_ for token in doc]

            case "POS":
                response["pos"] = [(token.text, token.pos_) for token in doc]

            case "NER":
                response["entities"] = [(ent.text, ent.label_) for ent in doc.ents]

            case "Resumir":
                # Resumir as frases mais relevantes (exemplo simples)
                sentences = list(doc.sents)
                # Extraindo frases com base na pontuação dos seus tokens (simples, pode ser customizado)
                sentences = sorted(
                    sentences,
                    key=lambda sent: sum(token.rank for token in sent),
                    reverse=True,
                )
                response["summary"] = " ".join(
                    [sent.text for sent in sentences[:3]]
                )  # Aqui pegamos as 3 frases mais relevantes

            case _:
                return jsonify({"error": "Operação inválida"}), 400

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001)
