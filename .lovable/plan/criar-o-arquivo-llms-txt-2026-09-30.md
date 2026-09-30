# Criar o arquivo llms.txt

## Objetivo
Publicar um arquivo `llms.txt` no site (servido em `https://callegaroadvocacia.com.br/llms.txt`) seguindo o padrão do llmstxt.org: um "currículo" do site em Markdown que orienta assistentes de IA (ChatGPT, Gemini, Perplexity etc.) sobre quem é o advogado, o que oferece e quais páginas são importantes.

## O que será feito

1. **Criar `public/llms.txt`** (arquivo estático, servido na raiz sem código novo), com a estrutura do padrão:
   - Título H1: `Gabriel Callegaro de Souza — Advogado Trabalhista e Previdenciário (RS)`
   - Bloco de resumo (blockquote): descrição direta de quem ele é, OAB/RS 142.158, atendimento online e presencial em todo o Rio Grande do Sul.
   - Seções com listas de links e descrições curtas:
     - `Serviços`: principais áreas de atuação (verbas rescisórias, horas extras, vínculo empregatício, acidente de trabalho, assédio moral, rescisão indireta, FGTS, insalubridade/periculosidade, aposentadorias e benefícios do INSS).
     - `Páginas principais`: home (`/`), página para bancários (`/bancario`), página previdenciária (`/previdencia`), blog (`/blog`).
     - `Artigos`: os 5 artigos atuais do blog com link e descrição de uma linha (rescisão indireta, reconhecimento de vínculo, estabilidade gestante, insalubridade/periculosidade, direitos na demissão).
     - `Contato`: WhatsApp, Instagram e e-mail, com o público atendido (trabalhadores do RS).
   - Tudo em português, tom factual, sem promessas de resultado (conformidade OAB).

2. **Manutenção**: o arquivo é estático; quando um novo artigo for publicado, basta incluir uma linha a mais na seção `Artigos` (posso fazer isso junto de cada novo artigo).

## Não será feito
- Nenhuma mudança visual ou de código além da criação do arquivo.
- Não é garantia de citação pelas IAs — é um sinal; SEO tradicional (schema.org já presente, conteúdo, links) continua sendo a base.

## Verificação
- Confirmar que `https://callegaroadvocacia.com.br/llms.txt` responde 200 após publicação.
