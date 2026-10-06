# Validação — LR7 Tattoo

Data: 06/10/2026. Ferramentas: **Playwright (Chromium headless)**, roteiros em scripts temporários fora do projeto, e o navegador embutido do app. Os testes de celular são **emulação** (390×844, toque e DPR 2), não um aparelho físico.

Observação: o navegador embutido roda com `prefers-reduced-motion: reduce` (configuração do sistema), então lá aparece a versão estática. A animação foi validada no Playwright com movimento ativo.

## O que foi testado

| Área | Como | Resultado |
| --- | --- | --- |
| Abertura (desktop 1440, celular 390) | Captura do primeiro viewport | Artista, região, obra real e "Fale comigo" visíveis sem rolar |
| Cena principal (pin + scrub) | Leitura do `transform` da imagem em 0, 700 e 1500 px de rolagem | Escala 2.7 → 1.76 → 1; véu, horizonte e brilho acompanham; o pin solta e a rolagem segue nativa |
| Rolagem completa | Varredura da página inteira em passos de 250–400 px | Sem erros; imagens preguiçosas carregam; gatilhos recalculados |
| Trilho de cues e cabeçalho | Estado em cada seção | Noite, Primeira luz, Alvorada e Dia corretos; tinta escura só no Dia |
| Menu móvel | Toque abre; Escape fecha e devolve o foco ao botão; link leva à seção e fecha | OK; com o menu aberto o resto da página fica `inert` e o Tab não sai do menu para o conteúdo |
| Galeria ampliada | Enter abre, foco vai para "Fechar", setas navegam, Escape fecha, foco volta ao card, posição de rolagem preservada | OK; no celular, botões e swipe |
| Abas de especialidades | Clique e setas/Home/End | OK; cada aba mostra só a sua prova; Cobertura mostra o convite para enviar foto |
| Contato | `href` de todos os botões | `https://wa.me/5583993180654`; **nenhuma mensagem foi enviada** |
| Overflow horizontal | 320, 375, 768, 1024, 1280, 1920 | 0 px em todas |
| Movimento reduzido | `reducedMotion: 'reduce'` | 0 pins, nenhum elemento escondido ou recortado, hero composto no estado final |
| Sem JavaScript | Contexto com JS desligado | Conteúdo e imagens visíveis |
| Console e rede | Erros de página, console e requisições falhas | 0 em todas as rodadas |
| Detector do Impeccable | `impeccable detect` uma vez | Imagem sem `src` no lightbox corrigida; os demais avisos são intencionais (aba oculta, linhas de horizonte, listas encostadas em fios) |

## Problemas encontrados e corrigidos

1. Gatilhos de estado (trilho, cabeçalho) calculados antes do pin do hero apontavam para a seção errada. Agora são criados depois do pin.
2. O trilho fixo sobrepunha o título do Dia e o card 3 da galeria (a 1280 px). Conteúdo recuado; medido: trilho termina em 117 px, card começa em 153 px.
3. A imagem do hero ficava suave no zoom inicial. O `sizes` agora pede a versão de 1600 px.
4. A emenda entre o gradiente de Alvorada e o esmaecimento para o Dia tinha um degrau. O gradiente foi separado num bloco próprio.
5. O lightbox no celular deixava um vão entre a foto e a legenda. Centralizado.
6. O cabeçalho nunca trocava para tinta escura no Dia porque a página terminava antes. O Dia agora ocupa a tela inteira.
7. **Revisão final (6 itens):**
   - frases operacionais não confirmadas suavizadas;
   - recorte da mulher-lobo sob o nome do Lucas trocado por um detalhe de outra obra, com legenda;
   - acentos dos títulos protegidos no `clip-path`;
   - colisão do trilho resolvida;
   - aba Cobertura sem foto de outra especialidade;
   - foco contido no menu móvel.

## Segunda rodada: material enviado pelo responsável

Retrato, estúdio fictício, coberturas, lettering, novo WhatsApp, Bananeiras/PB e orçamento. Mesma bateria de testes, mais:

| Área | Resultado |
| --- | --- |
| Links de contato | Todos os botões levam a `https://wa.me/558393248063`; nenhum link antigo restou; nenhuma mensagem foi enviada |
| Coberturas (desktop e celular) | Três pares com Antes e Agora; as linhas cobalto e as linhas de Antes alinhadas; o Agora acende com a rolagem |
| Galeria | 5 trabalhos e 6 fotos no lightbox, incluindo o lettering |
| Trilho de cues | Coberturas marca "Primeira luz"; Lucas marca "Alvorada" também ao rolar de baixo para cima |
| Cabeçalho | No celular, fundo opaco depois de rolar; tinta escura só no Dia; menu aberto sempre com tinta clara |
| Overflow | 0 px em 320, 375, 768, 900, 1000, 1100, 1280 e 1920; o cabeçalho com 5 links não quebra nem colide |
| Console e rede | 0 erros e 0 requisições falhas; movimento reduzido sem pins e sem elementos escondidos |

Corrigido nesta rodada:
- Menu móvel aberto sobre o Dia deixava logo e X invisíveis (tinta escura sobre fundo escuro).
- O texto passava visível por trás do logo no celular.
- As três fotos de cobertura tinham alturas diferentes, então as linhas do horizonte desalinhavam.
- Sobras da foto no topo do recorte do lettering.
- Fragmento do letreiro de terceiros na foto de estúdio.
- Textos alternativos que afirmavam mais do que a imagem mostra: o "1949" e "traços apagados".
- PRODUCT.md, o contrato de direção e o DESIGN.md atualizados com os fatos novos.

## Terceira rodada: comparador de antes e depois

Testado no Playwright (Chromium) com movimento ativo, em desktop 1440 e celular emulado 390. O toque foi testado com eventos reais via CDP (`Input.dispatchTouchEvent`), não com cliques simulados.

| Verificação | Resultado |
| --- | --- |
| Arraste com mouse | Divisória acompanha o ponteiro sem atraso: alvo 45/35/25/18% → divisória 45/35/25/18% no mesmo quadro; trava em 0 e 100 |
| Fotos durante o arraste | Retângulos das duas fotos idênticos antes, durante e depois do arraste, e iguais entre si (nada é redimensionado nem deslocado) |
| Toque horizontal (celular) | Divisória foi a 20% e a página não rolou |
| Toque vertical sobre o comparador | A página rolou 249 px e a divisória não se moveu |
| Toque curto | Divisória vai ao ponto tocado (80%) |
| Teclado | Tab chega à divisória; setas ±2%, Shift+setas ±10%, Home 0, End 100, PageDown −10; anel de foco cobalto visível |
| Acessibilidade | `input type=range` com nome "Divisória entre antes e depois" e valor "Antes X%, depois Y%"; casos em `tablist` com setas, Home e End |
| Troca de caso | Por clique, toque e teclado; fotos, proporção, legenda e `aria-labelledby` atualizam; divisória volta a 50% |
| Movimento reduzido | Sem entrada animada, sem vai e vem de dica; troca instantânea |
| Regressão da página | Galeria com 6 trabalhos e 8 fotos no lightbox; menu, abas, trilho e cabeçalho OK; overflow 0 de 320 a 1920; 0 erros |

Alinhamento dos pares: a perna está alinhada pelo "1949" e pela silhueta da panturrilha; o relógio, pelo mostrador. Uma busca por correlação de bordas confirmou a escala e a posição. O antebraço do relógio muda de ângulo entre as fotos; isso é real e está indicado na nota da seção.

## Limitações reais

- Nenhum teste em aparelho físico, Safari ou Firefox; só Chromium.
- A fluidez foi verificada por estados intermediários e interação, não por medição de FPS em hardware fraco.
- Os links do WhatsApp e do Instagram não foram seguidos.
- Referências externas (21st.dev, Anime.js, 60fps.design, Spline, Cocodly) não foram abertas nesta rodada.
