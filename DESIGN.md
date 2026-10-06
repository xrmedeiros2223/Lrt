---
name: LR7 Tattoo
description: Ciclorama de luz para o portfólio de Lucas Rafael; a tatuagem é revelada pela luz que sobe do preto ao dia.
colors:
  cyc: "#05070b"
  cyc-2: "#0a1430"
  cobalt: "#2f5bff"
  cobalt-hi: "#9db8ff"
  rose: "#d9788f"
  day: "#eceff5"
  ink: "#f2f4f8"
  ink-2: "#b7bfd0"
  ink-dawn: "#d6dbe8"
  caption-dawn: "#aab3c8"
  hairline-cobalt: "rgba(157,184,255,.35)"
  veil-cyc: "rgba(5,7,11,.8)"
  ink-idle: "#8b94ad"
  dawn-ember: "#5d3346"
  ink-day: "#0b1022"
  ink-day-soft: "#2b3550"
  ink-day-muted: "#3b4562"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 8.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.005em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "0.005em"
  title-sm:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.01em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
    fontFeature: "\"tnum\""
  nav:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.6
  caption:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0"
  hairline: "2px"
  sm: "4px"
  pill: "999px"
  round: "50%"
spacing:
  gut: "clamp(20px, 4vw, 56px)"
  indent: "clamp(0px, 9vw, 150px)"
  container: "1240px"
  section-y: "clamp(80px, 11vw, 170px)"
  head-gap: "clamp(50px, 8vw, 110px)"
  column-gap: "clamp(30px, 6vw, 100px)"
  compare-panel: "min(40vw, 480px)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-primary-sm:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "42px"
  button-primary-lg:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 40px"
    height: "64px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  link-underline:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    padding: "12px 2px"
  link-underline-day:
    textColor: "{colors.ink-day}"
    typography: "{typography.nav}"
    padding: "12px 2px"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.nav}"
    padding: "6px 0"
  nav-link-day:
    textColor: "{colors.ink-day-muted}"
    typography: "{typography.nav}"
    padding: "6px 0"
  tab:
    textColor: "{colors.ink}"
    padding: "10px 0 14px"
  cue-item:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  cue-item-active:
    textColor: "{colors.cobalt-hi}"
    typography: "{typography.label}"
  compare-tag-after:
    backgroundColor: "{colors.veil-cyc}"
    textColor: "{colors.cobalt-hi}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "7px 11px 6px"
  compare-tag-before:
    backgroundColor: "{colors.veil-cyc}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "7px 11px 6px"
  compare-knob:
    backgroundColor: "rgba(5,7,11,.85)"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "56px"
  compare-knob-dragging:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "56px"
  compare-case:
    textColor: "{colors.ink-idle}"
    typography: "{typography.title-sm}"
    padding: "12px 0"
  compare-case-active:
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    padding: "12px 0"
  artist-portrait:
    rounded: "{rounded.none}"
    size: "112px"
  artist-portrait-mobile:
    rounded: "{rounded.none}"
    size: "84px"
---

# Design System: LR7 Tattoo

## Overview

**Creative North Star: "O Ciclorama"**

A página é um estúdio de luz contínuo: começa no preto de ciclorama, sobe uma faixa de cobalto no horizonte, ganha uma brasa rosa acima dela, atravessa uma alvorada violeta e termina num dia frio e claro. A luz é a estrutura; não há cards, grades de miniaturas nem painéis com sombra. Cada seção é uma faixa horizontal de fundo inteiro, e a tatuagem aparece porque a luz sobe sobre ela (escala, véu, brilho e recorte), nunca porque um container a emoldura.

A densidade é baixa e editorial: muito preto, títulos condensados em caixa-alta como cartelas de plano de luz, corpo em Hanken Grotesk com colunas curtas (44 a 52ch) e um recuo lateral fixo que guarda espaço para o trilho de cues no desktop. O movimento é de uma voz só (desaceleração longa, sem overshoot) e sempre serve à revelação da obra ou à orientação.

O mundo é reconhecível sem conteúdo: faixas escuras horizontais, uma linha cobalto espessa na base das coisas e um trilho numerado na margem esquerda.

**Key Characteristics:**
- Fundo em faixas de cor inteira que seguem a ordem preto, cobalto, alvorada, dia; nunca voltam atrás, exceto o rodapé.
- Linha cobalto de 2 a 3px como horizonte recorrente (hero, topo das Obras, base de cada foto da galeria, base do palco do comparador antes/depois, base do retrato do Lucas, nota do Dia, aba ativa).
- Títulos em Big Shoulders Display 800, caixa-alta, entrelinha abaixo de 1.
- Controles em pílula; fotografias com cantos retos.
- Imagens entram por luz (brilho, véu, clip-path), não por fade com deslocamento genérico.

## Colors

Paleta fria de palco: um preto azulado como chão, um cobalto saturado como única fonte de luz e um rosa usado apenas como calor residual.

### Primary
- **Cobalto de Horizonte** (cobalt): a luz. Preenchimento dos botões, linhas de horizonte (2–3px), barra de progresso das fotos da galeria, borda inferior do palco do comparador, borda inferior do retrato do Lucas, borda de destaque da nota do Dia, cor de seleção de texto. É a única cor saturada em superfície.
- **Cobalto Alto** (cobalt-hi): o cobalto visto de perto no escuro. Anel de foco (2px, offset 3px), item ativo do trilho, sublinhado da aba ativa, "TATTOO" da marca, hover das legendas da galeria, etiqueta "Depois" e borda do puxador do comparador. Com alfa vira o fio de divisão (hairline-cobalt) e as bordas dos controles da galeria ampliada.

### Secondary
- **Brasa Rosa** (rose): calor acima do horizonte. Aparece como brilho radial no hero (rgba(217,120,143,.38) em `screen`), como cauda do gradiente que varre o botão no hover (#6f93ff → rose) e, escurecida, como o fim da alvorada (dawn-ember). Nunca é cor de texto nem fundo chapado.

### Neutral
- **Preto de Ciclorama** (cyc): chão da página, hero, Obras, comparador antes/depois, menu móvel, galeria ampliada, rodapé.
- **Véu de Ciclorama** (veil-cyc): fundo das etiquetas Antes/Depois sobre a foto; o puxador usa o mesmo preto a 85%.
- **Noite Cobalto** (cyc-2): primeiro passo da alvorada (22% do gradiente).
- **Ameixa de Alvorada** (dawn-ember): último passo do gradiente da alvorada, de onde parte a transição para o dia.
- **Dia Frio** (day): fundo exclusivo da seção de contato. Um branco azulado, não branco puro.
- **Tinta** (ink): títulos e texto principal sobre o escuro.
- **Tinta Secundária** (ink-2): lede, legendas, links de navegação em repouso, rótulos do trilho, etiqueta "Antes".
- **Tinta Ociosa** (ink-idle): rótulos não selecionados das abas de especialidade e dos casos do comparador.
- **Tinta de Alvorada** (ink-dawn) e **Legenda de Alvorada** (caption-dawn): texto de corpo e legendas de figura sobre o gradiente da alvorada.
- **Tinta do Dia** (ink-day), **Tinta do Dia Suave** (ink-day-soft) e **Tinta do Dia Apagada** (ink-day-muted): título, lead, nota, legenda da foto ilustrativa e navegação sobre o fundo dia.

O gradiente da alvorada é um material próprio, não um token: `linear-gradient(180deg, cyc 0%, cyc-2 22%, #17194a 52%, #352445 78%, dawn-ember 100%)`, seguido de uma faixa de 36vh que vai de dawn-ember por #b58a9d até day.

### Named Rules
**The Horizon Line Rule.** O cobalto marca o horizonte: linhas horizontais de 2–3px na base ou no topo de um elemento. Não use cobalto em contornos verticais, molduras completas ou fundos de seção.

**The Ember Rule.** O rosa só existe como luz (brilho, gradiente, cauda de varredura) e sempre depois ou acima do cobalto. Nunca como texto, borda ou fundo chapado.

**The Day Is Last Rule.** O fundo day pertence apenas ao fechamento e só é alcançado pela alvorada. Ao entrar no dia, cabeçalho e trilho trocam para tinta escura (ink-day, ink-day-muted) e o cobalto alto vira cobalto pleno.

## Typography

**Display Font:** Big Shoulders Display 700–900, auto-hospedada (fallback Arial Narrow)
**Body Font:** Hanken Grotesk 400–600, auto-hospedada (fallback system-ui)

**Character:** Uma condensada alta e industrial, lida como cartela de plano de luz, contra uma grotesca neutra e calorosa que carrega a explicação. O contraste é de largura e de caixa, não de família serifada.

### Hierarchy
- **Display** (800, clamp(3.4rem, 8.4vw, 6rem), 0.9): só o título do hero. No celular, clamp(3rem, 15vw, 4.6rem). O título do Dia usa clamp(3rem, 8vw, 6rem) como segundo display.
- **Headline** (800, clamp(2.6rem, 6.4vw, 5.2rem), 1): títulos de seção (Obras, comparador antes/depois, Projetos, Lucas).
- **Title** (800, clamp(2rem, 4vw, 3rem), 0.94): subtítulo de bloco ("Como começa").
- **Title-sm** (800, 1.6–1.7rem, 1.05): nome da obra na galeria, nome de cada caso do comparador (1.25rem no celular), nome do passo. As abas usam a mesma voz maior, clamp(1.9rem, 3.6vw, 2.7rem).
- **Body** (400, 1.0625rem, 1.6): texto corrido, em colunas de 44ch a 52ch.
- **Body-lead** (400, 1.15–1.2rem): lead de Projetos e do Dia, máximo 46ch.
- **Nav** (500, 0.95rem): links do cabeçalho, links sublinhados; botões em 600, 1rem.
- **Label** (700, 0.85rem, 0.14em, caixa-alta, numerais tabulares): trilho de cues, etiquetas Antes/Depois do comparador e contador da galeria ampliada (0.16em).
- **Caption** (400, 0.85–0.95rem): legendas de figura, legenda e nota do comparador (nota em 0.88rem, caption-dawn), legenda da foto ilustrativa e rodapé.

### Named Rules
**The Lighting Cue Rule.** Todo título é Big Shoulders 800 em caixa-alta, com `text-wrap: balance` e entrelinha entre 0.9 e 1.05. Texto corrido nunca vai em caixa-alta.

**The Tabular Count Rule.** A voz de label (display 700, tracking largo, numerais tabulares) é reservada a orientação e estado: os numerais 01–04 do trilho, o contador da galeria ampliada e as etiquetas Antes/Depois, que dizem em que estado está a foto. Não é usada como chamada acima de títulos nem como enfeite.

## Layout

Página única em faixas de largura total. O conteúdo vive num container de até 1240px com margens laterais fluidas (gut). Dentro dele, um recuo esquerdo fixo (indent, até 150px) alinha títulos, cópias, a coluna de texto e casos do comparador e a lista de passos à direita do trilho de cues; o hero leva o mesmo recuo somado ao gut.

- **Hero (Noite):** duas colunas, texto à esquerda e palco de imagem à direita com largura min(46vw, 76svh) e altura 100svh. Abaixo de 900px, a foto vira fundo de tela cheia e o texto desce para a base sobre um véu de cyc.
- **Obras:** grade de 12 colunas com seis obras deslocadas (2/5, 7/6 com 7vw de descida, 2/6, 9/4 com 4vw, 2/4, 8/4 com 9vw); ritmo assimétrico, sem linhas alinhadas. Abaixo de 900px vira coluna única: a quarta e a sexta obras com 84% de largura alinhadas à direita, a quinta com 76% à esquerda.
- **Comparador ("Uma nova história na pele"):** continua no chão cyc de Obras (ainda Primeira luz; não tem cue próprio). Grade de duas colunas: à esquerda, título com lead e, abaixo, a lista de casos, ambos com o recuo do trilho; à direita, o painel com largura compare-panel ocupando as duas linhas. Abaixo de 900px vira uma coluna na ordem texto, painel, casos (casos em duas colunas, sem recuo).
- **Projetos e Lucas:** duas colunas assimétricas (1.1fr/0.9fr e o inverso), gap clamp(30px, 6vw, 100px). Passos em três colunas separadas por fios.
- **Dia:** altura mínima de 100svh, grade 1.3fr/0.7fr alinhada pela base; a coluna lateral empilha a foto ilustrativa e a nota.
- **Ritmo vertical:** seções com padding clamp(80–90px, 11–14vw, 170–190px) no topo; espaço entre cabeçalho de seção e conteúdo clamp(40–50px, 6–8vw, 80–110px).
- **Pontos de quebra:** 640px (galeria ampliada), 899px (colunas viram uma, menu hambúrguer, cabeçalho opaco), 1100px (trilho some), 1600px (rótulo do cue ativo fica aberto).

**The Rail Gutter Rule.** O recuo à esquerda pertence ao trilho de cues. Entre 900px e 1100px o trilho está oculto, mas o recuo permanece; abaixo de 900px o recuo zera.

## Elevation & Depth

Sistema plano. A profundidade vem de luz e de camadas de cor (véus de cyc, brilho rosa em `screen`, gradiente cobalto subindo da base), nunca de cartões elevados. Sombras existem só em controles, nunca em superfícies: o halo cobalto do botão e o contorno e a sombra suave do puxador do comparador, que precisam se separar de qualquer foto por baixo.

### Shadow Vocabulary
- **Halo de Cobalto** (`box-shadow: 0 10px 30px -10px rgba(47,91,255,.7)`): só no hover dos botões principais, como luz refletida sob a pílula.
- **Sombra do Puxador** (`box-shadow: 0 8px 20px -8px rgba(0,0,0,.7)`): sob o botão circular do comparador, para que ele se leia sobre fotos claras ou escuras.
- **Contorno da Divisória** (`box-shadow: 0 0 0 1px rgba(5,7,11,.35)`): fio escuro de 1px em volta da linha de 2px em ink.

### Named Rules
**The Light Not Lift Rule.** Nenhuma superfície, foto ou painel se eleva com sombra para ganhar destaque; sombra só serve a um controle que precisa se ler sobre imagem. Para destacar, aumente a luz: véu que abre, brilho que sobe, linha cobalto que corre.

## Shapes

Duas famílias de forma, sem meio-termo. Controles interativos são pílulas (999px) ou círculos (50%: navegação da galeria ampliada, puxador do comparador). Fotografias, painéis e seções têm cantos retos: o retrato do Lucas, o palco do comparador, as miniaturas dos casos e as etiquetas não têm raio nenhum; o máximo é 2px (foto de detalhe da seção Lucas, foto ilustrativa do Dia, anel de foco). Divisões são fios de 1px em hairline-cobalt; destaques são linhas de 2–3px em cobalto. O palco do comparador assume a proporção registrada de cada caso (padrão 3/4), com as duas fotos em `object-fit: cover`; as miniaturas dos casos são 3/4 (60x80px); o retrato é um quadrado. Revelações usam `clip-path: inset()` de cima para baixo (menu, imagens das abas, foto de Lucas, títulos; o palco do comparador sobe de baixo).

## Components

### Buttons
Pílulas de cobalto cheias, firmes e luminosas.
- **Shape:** pílula (999px).
- **Primary:** fundo cobalt, texto branco, 600 a 1rem, altura 52px e padding horizontal 28px. Variantes pequena (42px, 20px, 0.92rem) no cabeçalho e grande (64px, 40px, 1.125rem) no Dia.
- **Hover / Focus:** um gradiente de #6f93ff a rose varre da esquerda em 600ms (`cubic-bezier(.16,1,.3,1)`) e aparece o Halo de Cobalto; o foco aciona a mesma varredura e o anel cobalt-hi. `:active` reduz para 97%.
- **Ghost:** borda de 1px em cobalt-hi a 50%, fundo transparente, altura 44px, preenchimento a 15% no hover. Usado só no "Fechar" da galeria ampliada; as setas são círculos de 48px com o mesmo tratamento e ícones SVG de traço 2px.

### Links sublinhados
- Texto 500 com fio de 1px a 8px da base. No hover o fio se recolhe para 35% a partir da esquerda (é o link que encolhe, o botão que preenche). Variante escura em ink-day no Dia.

### Navigation
- **Cabeçalho:** fixo. Atrás dele, um gradiente de cyc opaco até 50% da altura que se dissolve numa cauda de 18px abaixo da barra (opacidade 0.92). Marca "LR7" 900 + "TATTOO" 700 com tracking 0.32em em cobalt-hi. Cinco links em ink-2 (gap 26px) com fio que cresce da esquerda no hover. No Dia o mesmo gradiente passa a ser de day, a tinta escurece e "TATTOO" vira cobalt.
- **Celular (<900px):** depois de 24px de rolagem o fundo fica totalmente opaco (cyc, ou day dentro do Dia) até 18px antes da borda. Hambúrguer de duas linhas que viram X; menu de tela cheia em cyc que abre por clip-path de cima, links em display 800 clamp(3rem, 16vw, 5rem) entrando em cascata de 50ms. Com o menu aberto o cabeçalho volta à tinta da noite (ink, cobalt-hi) e o fundo some, qualquer que seja a seção.

### Tabs (Especialidades)
- Rótulos em display 800 caixa-alta sobre um fio hairline-cobalt; inativos em #8b94ad, ativo em ink com sublinhado de 3px em cobalt-hi que cresce da esquerda. Painel entra com subida de 10px; um link sublinhado pode fechar o painel (Cobertura leva a "Ver antes e agora"). A imagem associada troca por clip-path de cima; a foto de cobertura, mais estreita, fica limitada a 405px.

### Trilho de cues (assinatura)
- Fixo à esquerda, centralizado na vertical, só acima de 1100px. Quatro itens numerados 01–04 (Noite, Primeira luz, Alvorada, Dia) com um traço de 18px antes do número. Repouso: ink-2 a 55%. Ativo: cobalt-hi, traço de 34px. O nome da seção se abre (max-width 0 → 12ch) no hover/foco e fica aberto no item ativo acima de 1600px. No Dia troca para tinta escura e cobalto pleno.

### Galeria (Primeira luz)
- Seis obras. Botões sem estilo que envolvem foto e legenda. Fundo de espera #0b0e16, linha cobalto de 3px na base que corre com a rolagem, imagem que acende de brightness(.22) a 1 e paralaxe de ±4%. Legenda: nome em title-sm (cobalt-hi no hover) e descrição em ink-2.
- **Galeria ampliada:** `<dialog>` em tela cheia sobre cyc, backdrop rgba(5,7,11,.92), entrada de 500ms com escala de 0.985. Oito quadros (o religioso em dois enquadramentos; o espartano do braço com o trabalho pronto e o "antes" identificado como outro ângulo). Contador tabular, botão Fechar fantasma e setas circulares.

### Comparador antes/depois (assinatura)
Duas fotos registradas no mesmo quadro, uma sobre a outra, com uma divisória que o visitante arrasta. É a única peça que o visitante manipula diretamente.
- **Palco:** proporção vinda dos dados do caso, fundo de espera #0b0e16, borda inferior de 3px em cobalt (o horizonte), `touch-action: pan-y` (a rolagem vertical continua nativa) e cursor ew-resize.
- **Camadas:** "Depois" embaixo e "Antes" em cima, cada uma isolada; o "Antes" é revelado por `clip-path: inset(0 calc(100% - var(--pos)) 0 0)`. As fotos nunca se movem nem mudam de tamanho; só o recorte muda.
- **Etiquetas:** dentro da própria camada, na voz de label sobre veil-cyc, sem raio: "Antes" em ink-2 no canto superior esquerdo, "Depois" em cobalt-hi no canto superior direito. Cada etiqueta some junto com a sua metade.
- **Divisória e puxador:** linha de 2px em ink com contorno escuro de 1px. O puxador é um círculo de 56px em preto a 85%, borda de 2px em cobalt-hi, ícone SVG de seta dupla (traço 1.8). Hover: escala 1.06. Arrastando: escala 0.94, preenchimento e borda em cobalt. Foco: anel de 2px em cobalt-hi com offset de 4px, aceso por um `input[type=range]` nativo visualmente oculto (setas movem 2%, Shift+setas 10%).
- **Espaço reservado:** sem foto, cada metade mostra um texto identificado ("Espaço para: foto real do caso (antes/depois)") sobre #1b2133 (antes) e #121726 (depois), mantido dentro da sua metade.
- **Casos:** abas geradas a partir dos dados. Miniatura de 60x80px (44x59px no celular) apagada com brightness(.45) e grayscale(.4) quando não selecionada; nome em title-sm caixa-alta em ink-idle, ink quando selecionado; fio inferior de 2px que vira cobalt na seleção. Sem foto, a miniatura é um bloco "Sem foto" em #1b2133.
- **Texto:** nota em 0.88rem na cor caption-dawn; legenda em ink-2 sob o palco, com o nome do caso em ink 600.
- **Movimento:** o palco entra por recorte de baixo para cima (1.2s, expo.out) e os casos em cascata (0.1s). Depois, uma única dica de vaivém da divisória (50 → 40 → 58 → 50, cerca de 1.8s) que é cancelada a qualquer gesto. Na troca de caso as camadas somem em 220ms e a divisória recentra em 0.5s, a menos que o visitante já tenha agido. O arraste é manipulação direta, sem interpolação. Com movimento reduzido nada disso acontece.

**The Same-Frame Rule.** Um antes/depois só sobrepõe duas fotos registradas no mesmo enquadramento. Pares que não se alinham ficam lado a lado, como quadros separados da galeria ampliada, e nunca entram no comparador.

### Identidade do artista
- Retrato quadrado de 112px (84px no celular), `object-fit: cover`, sem raio, com borda inferior de 3px em cobalt, ao lado do H2 com o nome (gap clamp(16px, 2vw, 26px)).

### Imagem ilustrativa
- Foto de ambiente que não é do artista, na coluna lateral do Dia: largura min(100%, 320px), min(55%, 240px) no celular, raio de 2px, legenda visível em caption (0.85rem, ink-day-muted). O rodapé repete que a foto de ambiente é ilustrativa.

**The Illustrative Label Rule.** Toda imagem ilustrativa leva uma legenda visível dizendo que é ilustrativa e o que ela não retrata, e nunca fica junto do nome ou do retrato do artista. Ela não recebe a linha de horizonte nem os efeitos de revelação reservados às obras.

### Movimento
Uma única curva para quase tudo: `cubic-bezier(.16,1,.3,1)` no CSS e `expo.out` no GSAP, 350 a 1300ms, sem overshoot nem loop. O hero é a sequência principal (pin, scrub 0.7, escala 2.7 → 1). A galeria repete a ideia em escala menor (brilho e linha presos à rolagem); o comparador é o único ponto em que a revelação passa para a mão do visitante. Em `prefers-reduced-motion: reduce` nenhum ScrollTrigger é criado, as transições caem para 0.01ms e o hero nasce no estado final.

## Do's and Don'ts

### Do:
- **Do** separar seções por mudança de fundo inteiro na ordem cyc → alvorada → day.
- **Do** marcar destaque com uma linha cobalto horizontal de 2–3px, não com caixa ou sombra.
- **Do** revelar imagens por luz: brilho, véu de cyc, clip-path de cima, escala que desce.
- **Do** usar a curva `cubic-bezier(.16,1,.3,1)` / `expo.out` em toda transição de estado.
- **Do** manter o anel de foco em cobalt-hi de 2px com offset de 3px (6px na galeria) em todo controle.
- **Do** trocar para tinta escura (ink-day) ao colocar qualquer elemento sobre o fundo day.
- **Do** mostrar antes e depois no comparador só quando as duas fotos estão registradas no mesmo quadro, com as duas metades etiquetadas.

### Don't:
- **Don't** usar rosa como texto, borda ou fundo chapado; ele é só brasa.
- **Don't** emoldurar fotografias em cards com borda, raio acima de 2px ou sombra; elas ficam retas e soltas na faixa.
- **Don't** usar o fundo day fora do fechamento nem antes da alvorada.
- **Don't** colocar texto corrido em caixa-alta ou títulos fora da Big Shoulders Display.
- **Don't** usar sombra em superfícies, fotos ou painéis; ela fica restrita ao Halo de Cobalto do botão e ao puxador do comparador.
- **Don't** criar movimento em loop, bounce ou overshoot.
- **Don't** publicar imagem ilustrativa sem legenda visível ou ao lado do nome ou do retrato do artista.
