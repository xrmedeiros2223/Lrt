# Mídias e storyboard

## Estado atual (nada gerado)

Não tive acesso ao Google Flow nem a outra ferramenta de geração de imagem ou vídeo nesta sessão. **Nenhum vídeo ou imagem conceitual foi produzido.** O site usa só as fotos reais, com movimento por escala e recorte, que é o que o briefing prefere para as tatuagens.

## Mídias em uso

| Função | Arquivos | Origem | Enquadramento |
| --- | --- | --- | --- |
| Hero (cena de luz) | `assets/img/mulher-lobo-{640,1080,1600}.webp` | `referencias/instagram/05-mulher-lobo.jpg` | 3:4; começa no olhar (origem 56% 44%) |
| Galeria (4 trabalhos, 5 fotos) | `oriental`, `religioso-a`, `religioso-b`, `leao-caveira-lobo`, `mulher-lobo` | fotos 01–05 | proporção original |
| Detalhes de Projetos e Lucas | `crop-realismo`, `crop-florais`, `crop-leao` | recortes de 01, 03 e 04 | recorte sem retoque |
| Galeria (5º trabalho) | `lettering-perna.webp` | recorte de `referencias/usuario/story-fechamento-lettering-perna.webp` | sem a interface do story, adesivo e marcação de cliente |
| Comparador (2 casos) | `ba-perna-{antes,depois,mini}.webp`, `ba-relogio-{antes,depois,mini}.webp` | painéis dos prints de stories em `referencias/usuario/` | o "depois" é recorte direto; o "antes" foi só escalado e deslocado (perna 1,27×, relógio 1,04×; sem rotação nem retoque) para ficar no mesmo quadro, alinhado pelo "1949" e pela panturrilha, ou pelo mostrador do relógio; os parâmetros estão nos `.json` |
| Galeria: espartano no braço | `cob-espartano-braco-agora.webp`, `cob-espartano-braco-antes.webp` | print do story da carpa | o antes é de outro ângulo, então aparece só na ampliação, identificado |
| Retrato do Lucas | `lucas-retrato.webp` | `referencias/usuario/lucas-retrato.png` (150 px) | sem edição |
| Ambiente (ilustrativo) | `estudio-ilustrativo.webp` | `referencias/usuario/estudio-ficticio.png`, **fictícia**, enviada pelo usuário | 22 px cortados à esquerda para tirar o fragmento de um letreiro de terceiros; sempre com o aviso de imagem ilustrativa |

Cada arquivo tem sua origem registrada num `.json` ao lado (`embed-prompt`). Os originais continuam intactos em `referencias/instagram/` e `referencias/usuario/`.

## Vídeo comprimido × sequência de frames

Não foi preciso decidir: a cena é uma foto real escalada por GSAP (uma imagem de ~83 KB), mais leve que qualquer vídeo ou sequência de frames. Rever só se for escolhido um vídeo de atelier.

## Roteiro opcional: "Atelier ao amanhecer" (conceitual, para Google Flow)

Uso: abertura alternativa ou transição antes da galeria. **Não representa o estúdio real**; rotular como ilustrativo.

- **Frame inicial (imagem):** bancada de tatuador à noite, quase preta; frasco de tinta, copinhos de pigmento e máquina fora de foco; sem pessoas e sem tatuagem visível. Prompt: "dark tattoo studio workbench at night, near-black, a small ink bottle, pigment caps and a tattoo machine, shallow depth of field, cobalt rim light from low left, no people, no text, no skin, photographic".
- **Frame final (imagem):** a mesma bancada com a luz cobalto subindo e um tom rosado ao fundo; instrumentos nítidos. Prompt: "same workbench, cobalt light rising across the surface, faint rose glow in the background, instruments sharp, no people, no text".
- **Vídeo (Flow, geração entre frames):** 5–6 s, 16:9 (e 9:16 para celular), dolly lento de 5%, luz subindo, sem áudio. Prompt: "slow push-in, the room light rises from black to cobalt and rose dawn, dust in the beam, no people, no text, no logos".
- **Alternativa se falhar:** o hero atual (foto real). Poster do vídeo = frame final; versão móvel 9:16 de até ~1,5 MB; `preload="none"`, sem autoplay com áudio, pausa fora da tela.
- **Dependência:** acesso ao Google Flow. Não afirmar uso até existir arquivo gerado.

## Retrato do Lucas e ateliê real

O retrato real chegou, mas só em 150 px; pedir uma versão maior. A foto de estúdio em uso é fictícia e está rotulada; substituir pela foto real do local quando houver. Basta trocar o arquivo `assets/img/estudio-ilustrativo.webp` e remover a legenda de aviso.
