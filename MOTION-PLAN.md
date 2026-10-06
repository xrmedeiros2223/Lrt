# Plano de movimento — LR7 Tattoo

Personalidade de movimento (Motion Design, uma só): **Premium**. Curvas longas de desaceleração (`expo.out`, `power2.inOut`), sem overshoot, durações de 350 a 1100 ms. A mesma curva serve a quase tudo, para a página ter uma voz.

Motor: **GSAP 3.13 + ScrollTrigger**, hospedados em `assets/js/`. CSS puro nas interações simples. Anime.js, Lottie e Spline não entram: nenhum conteúdo ou ganho claro os justifica.

## Momento principal: "Noite → Primeira luz" (hero)

- **Função narrativa:** o visitante começa num detalhe do olhar da obra mulher-lobo, no escuro, e a rolagem abre a composição inteira no braço enquanto a luz sobe (faixa cobalto, brasa rosa). É a tese do ciclorama: a luz revela a tatuagem.
- **Mídia:** a própria fotografia real (`mulher-lobo-1600.webp`, cópia otimizada). Movimento por escala e recorte, sem vídeo gerado e sem alterar traços.
- **Estados:**
  - Inicial: escala 2.7 (desktop) ou 2.1 (celular), véu preto a 50%, horizonte quase fechado.
  - Intermediário: escala ~1.7, véu abrindo, faixa cobalto a meio, brilho rosa chegando.
  - Final: escala 1, véu 0, faixa cheia e rosa visível; a obra inteira aparece.
- **Rolagem:** hero fixado (`pin`) por 150% da altura da janela no desktop e 110% no celular, com `scrub: 0.7`. Na saída o pin solta e a seção Obras sobe; nada fica preso. Sem snap e sem rolagem suavizada artificial: toque, teclado e roda continuam nativos.
- **Computador:** coluna do texto parada; a imagem anima na coluna direita.
- **Celular:** imagem em tela cheia atrás do texto, com véu de legibilidade na base; mesma sequência, zoom menor.
- **Movimento reduzido:** sem pin e sem scrub. O hero nasce no estado final, composto (obra inteira, horizonte e brilho visíveis, texto legível), sem espaço vazio.
- **Custo e alternativa:** só `transform` e `opacity`; uma imagem de ~83 KB no desktop e 21–47 KB no celular (srcset). Sem JS, ou com falha do GSAP, o CSS já define o estado final.

## Animações auxiliares

| Onde | Efeito | Função |
| --- | --- | --- |
| Galeria | Cada obra "acende" (brilho de 22% a 100%) e uma linha cobalto corre na base, ambos presos à rolagem; paralaxe de ±4% | Repetir a ideia de luz que revela, em escala menor |
| Legendas da galeria | Entrada única (`expo.out`) ao chegar a 60% da janela | Leitura depois da imagem |
| Títulos de Alvorada, Lucas e Dia | Máscara por `clip-path` que desce | Variar da entrada do hero, sem repetir fade + deslocamento |
| Passos "Como começa" | Stagger de 0,14 s, uma vez | Ordem de leitura |
| Trilho de cues (desktop) | Item ativo ganha linha e cor; rótulo abre no hover/foco | Navegação e orientação |
| Cabeçalho e trilho | Trocam para tinta escura ao entrar no Dia | Contraste sobre o fundo claro |
| Botões | Preenchimento cobalto→rosa varre da esquerda; `:active` encolhe a 97% | Feedback |
| Menu móvel | `clip-path` abre de cima, links entram em cascata; Escape fecha e devolve o foco | Continuidade da abertura |
| Abas Realismo/Cobertura/Florais | Linha de seleção desliza; imagem troca por `clip-path` | Mudança de estado clara |
| Galeria ampliada | `<dialog>` com entrada de 500 ms | Abertura contínua a partir da galeria |

## Comparador de antes e depois ("Uma nova história na pele")

- **Manipulação direta:** a divisória segue o ponteiro no mesmo quadro, sem interpolação nem easing; só `--pos` muda e o recorte é feito por `clip-path`, então as fotos nunca se movem nem mudam de tamanho.
- **Toque:** espera intenção horizontal (dx > 6 px e maior que dy) antes de capturar; um gesto vertical é devolvido à rolagem da página (`touch-action: pan-y`). Um toque curto leva a divisória ao ponto.
- **Feedback:** o botão circular cresce para 1.06 no hover; ao arrastar, encolhe para 0.94 e ganha preenchimento cobalto (180 ms, curva Premium). O foco do teclado aparece como anel cobalto no botão.
- **Entrada:** o quadro abre de baixo para cima por `clip-path` (1,2 s, `expo.out`) e os casos sobem em sequência. Depois, um único vai e vem curto (50 → 40 → 58 → 50, cerca de 1,8 s) mostra que a divisória se move. Esse vai e vem é cancelado no primeiro gesto do visitante e nunca se repete.
- **Troca de caso:** as camadas somem em 220 ms, as fotos novas são decodificadas, voltam e a divisória recentra em 0,5 s. Qualquer gesto durante o recentro o interrompe.
- **Movimento reduzido:** sem entrada, sem vai e vem, sem recentro animado; a troca de caso é instantânea e a divisória começa em 50%.

## Regras gerais

- Nenhum loop infinito, contador ou áudio.
- ScrollTriggers de estado criados depois do pin do hero, para que o `refresh` conte o espaço do pin; `refresh` extra após fontes e imagens preguiçosas.
- Em `prefers-reduced-motion: reduce` o `gsap.matchMedia` não cria nenhuma animação, e as transições CSS caem para ~0 ms.
