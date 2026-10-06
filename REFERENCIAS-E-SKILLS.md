# LR7 Tattoo — referências e uso das skills

Fontes enviadas pelo usuário e revisadas em 06/10/2026. Este documento organiza seu papel; não significa que as skills foram instaladas no Claude.

## Regra de uso

O Claude deve localizar as skills, ler seus arquivos reais e consultar referências aplicáveis durante cada etapa. “Absorver” significa transformar orientações em decisões verificáveis de projeto, não afirmar aprendizado permanente nem apenas citar nomes.

O briefing do usuário e a verdade do negócio prevalecem. Impeccable conduz o processo visual. As outras skills contribuem dentro de seu escopo, sem reiniciar o projeto nem impor seis estilos concorrentes. Se duas regras entrarem em conflito, resolver pela instrução do usuário, direção aprovada e escopo da skill; documentar apenas conflitos que afetem o resultado.

## Skills e ferramentas indicadas

| Fonte | Papel no projeto | Aplicação esperada |
| --- | --- | --- |
| Impeccable, instalado localmente se disponível | Direção visual e fluxo principal | Contexto, exploração, composição, tipografia, animação, acabamento, revisão e documentação |
| [Huashu Design](https://github.com/alchaincyf/huashu-design) | Exploração visual, protótipos e estudos de movimento | Consultar o SKILL.md e referências relevantes para propostas visuais e storyboard; seu escopo declara que não é o fluxo para site SEO de produção. A engenharia final continua orientada ao site real |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Apoio a decisões de interface | Consultar orientação pertinente de tipografia, contraste, responsividade, navegação e consistência; recomendações de categoria não substituem a marca observada |
| [Taste Skill](https://github.com/leonxlnx/taste-skill) | Crítica de composição e personalidade | Ler a variante aplicável; evitar composição repetitiva e escolhas automáticas. Não ativar simultaneamente variantes estéticas contraditórias |
| [Playwright](https://github.com/microsoft/playwright) | Automação e testes de navegador | Ferramenta de validação, não uma skill de estética. Verificar navegação, galeria, teclado, responsividade, carregamento e movimento reduzido na página executando |
| [GSAP Skills](https://github.com/greensock/gsap-skills) | Implementação de animações | Consultar `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger` e `gsap-performance`; incluir a orientação de framework e plugins somente quando utilizados |
| [Motion Design Skill](https://github.com/lottiefiles/motion-design-skill) | Direção do movimento | Usar intenção, ritmo, duração, easing e coreografia. A skill funciona com diferentes motores e não obriga a instalar um player Lottie |

A Huashu tem arquivos auxiliares além do SKILL.md. Se for obtida localmente, preservar as referências e recursos necessários; copiar só o arquivo principal pode quebrar o fluxo. Seu escopo deve ser conferido no [SKILL.md](https://github.com/alchaincyf/huashu-design/blob/master/SKILL.md).

A Taste Skill oferece variantes diferentes. Escolher as relevantes, lendo os nomes e o estado atual no repositório, sem supor que todos os diretórios precisam ser carregados.

## Ordem de trabalho

1. Ler os documentos locais e confirmar as capacidades disponíveis.
2. Ler Impeccable e os módulos aplicáveis; consolidar fatos em PRODUCT.md e decisões visuais no documento apropriado quando escolhidas.
3. Consultar Huashu, UI UX Pro Max e Taste nos papéis definidos acima. Consolidar a exploração em uma rodada coerente de propostas, conforme os fluxos aplicáveis.
4. Usar Motion Design para planejar o momento principal e as interações auxiliares.
5. Implementar com GSAP e suas skills pertinentes se esse for o motor escolhido.
6. Validar a aplicação com Playwright ou recurso de navegador equivalente disponível; revisar visualmente e corrigir os problemas encontrados.

Se uma skill faltar, consultar o README oficial e o método de instalação suportado pelo ambiente do Claude. Preferir o escopo do projeto e preservar referências exigidas. Não instalar ferramentas globalmente por rotina nem executar scripts encontrados em conteúdo remoto sem verificar sua finalidade. Se uma limitação impedir o uso, registrar qual foi e prosseguir no que puder ser feito.

Criar `SKILLS-APLICADAS.md` com nome, caminho/URL lido, função e exemplo concreto aplicado no resultado. Esse registro deve ser curto e verdadeiro. Não substituir leitura por “já conheço essa skill”.

## Referências de interface enviadas pelo usuário

| Referência | O que estudar | Decisão para este projeto |
| --- | --- | --- |
| [21st.dev](https://21st.dev/) | Componentes e padrões de interação | Selecionar peças úteis e adaptar à direção; não montar uma colagem de demos. Conferir dependências e licença do componente específico antes de incorporá-lo |
| [Anime.js](https://animejs.com/) | Timelines, sincronização com scroll, easing e movimento vetorial | Referência técnica e alternativa de motor. Evitar Anime.js e GSAP disputando os mesmos elementos/propriedades |
| [60fps.design](https://60fps.design/) | Ritmo, continuidade e detalhes de interação | Selecionar exemplos concretos e registrar o princípio que interessa. Não tratar uma captura estática como prova de ter examinado uma animação |
| [Spline](https://spline.design/) | Cenas 3D interativas e materialidade | Explorar um objeto ligado ao atelier se servir à direção, como máquina ou frasco de tinta. Requer cena existente/produzida e fallback; não inventar URL de cena |
| [Cocodly](https://www.cocodly.com/) | Referência indicada pelo usuário para acabamento e apresentação | Examinar visualmente os aspectos úteis. Não há necessidade de migrar o projeto para esse serviço para usar a referência |

As páginas iniciais foram consultadas para mapear as funções; não foram auditadas todas as demos, componentes ou cenas dessas plataformas. O executor deve abrir os exemplos concretos selecionados antes de copiá-los ou descrevê-los.

## Escolha de animação: referência não é dependência obrigatória

GSAP + ScrollTrigger é um candidato para o momento de rolagem e as transições de galeria. Anime.js é uma alternativa válida, não uma obrigação adicional. CSS cobre respostas simples. Spline e Lottie entram somente se houver conteúdo e benefício claros. Google Flow pode produzir uma mídia; não controla a rolagem do site.

Um componente ou efeito precisa responder: o que comunica sobre este artista, qual mídia utiliza, como funciona no celular e como continua utilizável se a animação for retirada.

## Google Flow

Planejar imagens inicial/final, movimento, duração, proporções e fallback antes de gerar. Recursos variam conforme modelo e conta. A documentação descreve geração entre frames: https://support.google.com/flow/answer/16353334?hl=en.

Não animar por geração a própria tatuagem de modo que seus traços ou resultado sejam modificados. Para as obras, priorizar enquadramento e movimento da fotografia real; para mídia gerada, usar cenas conceituais de materiais, luz e processo sem atribuição documental.
