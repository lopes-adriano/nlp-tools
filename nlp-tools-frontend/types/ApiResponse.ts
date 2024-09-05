export default interface ApiResponse {
    tokens?: string[];
    lemmas?: string[];
    pos?: [string, string][];
    entities?: [string, string][];
    summary?: string;
    error?: string;
  }