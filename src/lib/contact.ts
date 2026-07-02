// Dados de contato — altere aqui o número do WhatsApp do escritório.
export const WHATSAPP_NUMBER = "5551993049947"; // formato internacional, somente dígitos
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, preciso de ajuda para meu caso trabalhista.",
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const WHATSAPP_MESSAGE_BANCARIO = encodeURIComponent(
  "Olá, preciso de ajuda para meu caso trabalhista bancário.",
);
export const WHATSAPP_URL_BANCARIO = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE_BANCARIO}`;

export const LAWYER = {
  name: "Gabriel Callegaro de Souza",
  oab: "OAB/RS 142.158",
  area: "Advocacia Trabalhista",
  region: "Rio Grande do Sul",
};