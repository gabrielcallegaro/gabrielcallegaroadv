// Dados de contato — altere aqui o número do WhatsApp do escritório.
export const WHATSAPP_NUMBER = "5551999999999"; // formato internacional, somente dígitos
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Dr. Gabriel, gostaria de uma análise do meu caso trabalhista.",
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const LAWYER = {
  name: "Gabriel Callegaro de Souza",
  oab: "OAB/RS 142.158",
  area: "Advocacia Trabalhista",
  region: "Rio Grande do Sul",
};