# Skills aplicadas

Cópias de trabalho em `vendor/skills/` (obtidas do GitHub em 06/10/2026; só leitura, não fazem parte do site).

| Fonte | O que foi lido | Decisão que orientou |
| --- | --- | --- |
| **Impeccable** (`~/.claude/skills/impeccable`) | `SKILL.md`, `reference/new-work.md`, `reference/craft-floor.md`; comandos `context`, `concept-seed` (direção sorteada: ciclorama, seed `247076c8`), `surface-brief`, `detect` | Fluxo principal: descoberta de mundo, rodada de direção com a escolha do usuário, contrato em `.impeccable/surfaces/index-html.md`, piso de qualidade (sem kicker, sem cards iguais, sem gradiente em texto, foco e seleção temados), detector e revisão final |
| **GSAP skills** (`greensock/gsap-skills`) | `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-performance` em `vendor/skills/gsap/` | Uma timeline com `scrub` e `pin` só no hero (anima os filhos, não o elemento fixado); ScrollTriggers criados na ordem da página; só `transform`/`opacity`; `matchMedia` para movimento reduzido |
| **Motion Design** (`lottiefiles/motion-design-skill`) | `SKILL.md`, `choreography.md`, `timing-easing-tables.md`, `quality-checklist.md` em `vendor/skills/motion/` | Arquétipo Premium (curva única, sem overshoot); fases setup/ação/resolução no hero; regra do terço; stagger com a mesma família de curva |
| **Taste Skill** (`leonxlnx/taste-skill`) | `skills/taste-skill/SKILL.md` (seção 0 e dials) em `vendor/skills/taste.md` | "Design Read" antes do código: landing de portfólio criativo, variância alta, densidade baixa; evitar hero centralizado sobre malha escura e três cards iguais; galeria assimétrica |
| **UI UX Pro Max** | `.claude/skills/ui-ux-pro-max/SKILL.md` em `vendor/skills/uiux.md` | Prioridades de acessibilidade e toque: alvos de 44 px, nada depende de hover, foco visível, sem rolagem horizontal; lightbox com swipe e botões |
| **Huashu Design** | `SKILL.md` em `vendor/skills/huashu.md` | Postura de exploração visual e storyboard (`MIDIAS-E-STORYBOARD.md`); escopo respeitado: o site final não é protótipo descartável |
| **Playwright** | Usado como ferramenta (instalado fora do projeto) | Roteiro de validação em `VALIDACAO.md` |

## Limitações

- Referências de interface (21st.dev, Anime.js, 60fps.design, Spline, Cocodly): **não abri demos nesta rodada**; usei só as descrições de `REFERENCIAS-E-SKILLS.md`. Nenhum componente foi copiado.
- Huashu e UI UX Pro Max foram lidos só no `SKILL.md`; scripts e bases de dados auxiliares não foram executados.
- Da Taste Skill foi lida apenas a variante principal.
- A rodada de direção usou a pergunta estruturada do ambiente, não a página de decisão do Impeccable, e não houve comps de imagem (sem geração de imagem disponível): o build seguiu o caminho guiado pelo contrato escrito, sem comp aprovado.
