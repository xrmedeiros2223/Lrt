# Prompt de execução — LR7 Tattoo

Você vai criar a landing page profissional do **LR7 Tattoo**, do tatuador **Lucas Rafael**, nesta pasta:

`C:\Users\gabri\Documents\!Dev_Medeiros\For_Websites\Ir7tattoo`

Este é um projeto próprio. Não reutilize conteúdo, identidade, contato ou imagens do Parque Arena.

## 1. Comece pelo material existente

Leia integralmente, nesta ordem:

1. `PRODUCT.md` — fatos e limites do projeto.
2. `ANALISE-INSTAGRAM.md` — perfil, portfólio, contato e evidências.
3. `REFERENCIAS-E-SKILLS.md` — ferramentas, skills e referências enviadas pelo usuário.
4. `referencias/instagram/ORIGENS.json` e as cinco fotografias locais.

Inspecione a pasta e qualquer código existente antes de implementar. O antigo `BRIEFING-E-PROMPT-INICIAL.md` é um estudo histórico anterior ao acesso ao Instagram; os documentos acima o atualizam.

O perfil correto já foi confirmado: https://www.instagram.com/lr7tattoo/. A análise inicial já foi feita. Amplie a pesquisa somente onde isso resolver uma lacuna concreta; não reinicie pela busca do nome.

## 2. Skills: leitura e aplicação obrigatórias

Use **Impeccable como fluxo principal**. Localize e leia o SKILL.md real e suas referências aplicáveis antes da etapa correspondente. O usuário quer que você use suas skills efetivamente.

Consulte os seguintes repositórios e os arquivos pertinentes:

- https://github.com/alchaincyf/huashu-design
- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- https://github.com/leonxlnx/taste-skill
- https://github.com/microsoft/playwright
- https://github.com/greensock/gsap-skills
- https://github.com/lottiefiles/motion-design-skill

Use o mapa de papéis de `REFERENCIAS-E-SKILLS.md`. Leia as skills na fase em que serão aplicadas e mantenha uma única direção coerente. Huashu contribui com exploração visual/protótipo e storyboard; sua restrição de escopo não deve converter o site final em um protótipo descartável. Playwright é ferramenta de teste. Motion Design não obriga a instalar Lottie.

Se faltarem skills, consulte o método oficial de obtenção compatível com seu ambiente, preferindo o projeto e preservando seus arquivos auxiliares. Informe limitações reais sem fingir instalação ou leitura. Não altere configurações globais por conveniência.

Crie `SKILLS-APLICADAS.md` com um registro curto dos arquivos lidos e das decisões que cada skill orientou. A leitura deve aparecer no resultado: composição, movimento, implementação e testes, e não só em uma lista de nomes.

## 3. Resultado que eu espero

Uma landing page autoral, bem acabada e convincente, com qualidade percebida de um projeto de alto investimento. Quero uma apresentação que valorize as tatuagens, a personalidade do artista e o desejo de iniciar um projeto com ele.

A primeira tela deve deixar claro quem é o artista, mostrar trabalho real e oferecer uma ação legível. Portfólio e contato devem continuar fáceis de encontrar mesmo com uma experiência visual elaborada.

Não publique o valor de investimento citado neste briefing. Não escreva “site premium” como substituto de direção de arte. Demonstre qualidade por meio de imagens, composição, tipografia, ritmo e funcionamento.

## 4. Referências a estudar

- https://21st.dev/ — componentes e padrões selecionados.
- https://animejs.com/ — animação, timelines e exemplos.
- https://60fps.design/ — detalhes de movimento e continuidade.
- https://spline.design/ — possibilidades de cena 3D, se justificadas.
- https://www.cocodly.com/ — referência de apresentação indicada pelo usuário.

Abra exemplos concretos relevantes, observe seu comportamento e registre o princípio que será aplicado. Adapte tudo à marca e às tatuagens. Não copie uma página inteira nem acumule bibliotecas para demonstrar que visitou os links.

## 5. Direção visual antes da implementação completa

Use as obras locais como material central. A amostra contém realismo, composições extensas, contraste, preto e cinza e pequenos detalhes de cor. A marca existente apresenta monograma LR7 e acentos luminosos azuis/ciano/violeta; isso deve ser considerado sem transformar toda a página em um painel neon.

Explore direções realmente diferentes dentro do fluxo do Impeccable, incorporando o que for útil das demais skills em uma rodada coordenada. Mostre a primeira tela e a ideia da rolagem com clareza suficiente para escolher. Explique as consequências em celular e no peso das mídias. Aguarde a escolha da direção quando o fluxo aplicável pedir; depois avance até a versão funcional sem pedir confirmação para cada ajuste rotineiro.

Uma hipótese promissora, ainda não aprovada, é a galeria cinematográfica: o visitante começa em um detalhe de uma tatuagem real, acompanha a revelação da composição no corpo e entra no portfólio. Outra possibilidade é uma curta cena conceitual de atelier que abre espaço para as obras. Escolha com base no material, não no efeito mais chamativo de uma biblioteca.

Não invente um logotipo. Enquanto não houver original isolado, uma identificação tipográfica honesta é preferível a uma reconstrução inexata do monograma.

## 6. Animação faz parte do conceito

Escreva `MOTION-PLAN.md` antes de implementar os efeitos, com:

- Momento principal, função narrativa e mídia utilizada.
- Estados inicial, intermediário e final.
- Relação com a rolagem, duração/trecho de página e saída da sequência.
- Comportamento em computador, celular e movimento reduzido.
- Custo previsto, carregamento e alternativa quando a mídia falhar.

Use um momento principal bem dirigido e animações auxiliares coerentes. Inclua continuidade na abertura da galeria, feedback de botões, menu móvel e transições de estado. Não resolva tudo com a mesma entrada de opacidade e deslocamento em todas as seções.

GSAP + ScrollTrigger é um candidato natural para esse projeto; leia as skills de core, timeline, ScrollTrigger e performance se adotá-lo. Anime.js pode ser alternativa. Não instale os dois para controlar as mesmas propriedades. Use CSS nas interações simples.

Se adotar pinning, scrub, vídeo por scroll ou canvas, mantenha a rolagem natural, permita seguir sem esperar e carregue os recursos de forma progressiva. Pause renderização fora da tela. Não simule suavidade com uma rolagem artificial que atrapalhe toque, teclado ou navegação.

## 7. Fotos, imagens fictícias e Google Flow

Preserve os originais em `referencias/instagram/`; produza cópias responsivas e otimizadas em uma pasta própria. As cinco fotos locais representam quatro trabalhos. Não repita enquadramentos para inventar volume de portfólio.

Você está autorizado a criar imagens conceituais para completar a prévia: retrato de tatuador, ambiente de atelier, bancada, instrumentos, papel, tinta, luz e detalhes de processo. Quando a imagem puder ser confundida com o Lucas ou o local real, identifique-a como ilustrativa e mantenha sua substituição simples. Não gere tatuagens fictícias para apresentá-las como trabalhos dele.

Os traços, proporções e resultados nas tatuagens reais devem ser preservados. Não use geração para melhorar detalhes, reconstruir partes ocultas ou criar antes/depois inexistente.

Para vídeo, prepare `MIDIAS-E-STORYBOARD.md`: função de cada mídia, nome de arquivo, origem, enquadramento, proporções, prompt de imagem, prompt de vídeo, frames inicial/final, duração e fallback. Avalie Google Flow se estiver acessível. Não afirme que o utilizou se apenas escreveu um prompt.

Uma cena possível é a aproximação de luz sobre tinta e instrumentos em um atelier conceitual. Para destacar tatuagens reais, prefira movimento e recorte da própria fotografia a geração de movimento que deforme o desenho.

Teste vídeo comprimido versus sequência de frames antes de escolher. Não carregue centenas de imagens grandes para todos os dispositivos. Mantenha uma imagem de capa adequada e uma versão leve para celular. Evite áudio automático.

Se não tiver acesso a uma ferramenta de produção de vídeo, entregue a página com uma alternativa completa usando as fotos reais, e deixe o roteiro e os prompts prontos. Informe a dependência específica sem encerrar todo o trabalho por causa dela.

## 8. Conteúdo e conversão

Organize uma narrativa adequada à direção escolhida, cobrindo:

- Artista, proposta e obra de destaque.
- Portfólio real em uma galeria curada.
- Projetos personalizados e especialidades declaradas, usando exemplos compatíveis.
- Apresentação do Lucas com fatos confirmados.
- Processo de contato/orçamento sem inventar condições comerciais.
- Ambiente ilustrativo quando necessário e claramente identificado.
- Região de atendimento e contato público verificado.

O botão “Fale comigo” do link oficial da bio aponta para `https://wa.me/5583993180654`; é possível usar esse destino na prévia. Não enviar mensagens durante testes. Não prometer resposta imediata. O outro canal observado e as incertezas estão na análise.

Não invente depoimentos, número de clientes, prêmios, endereço, tabela de preço, agenda, garantias, certificações ou políticas de atendimento. Antes/depois e resultados cicatrizados só entram com evidência suficiente. Não transforme uma promoção antiga em preço atual.

Redija conteúdo de verdade em português brasileiro. Informações em aberto ficam registradas para o responsável e não viram texto fictício para o visitante. Não exiba instruções de implementação ou nomes de ferramentas no fluxo público da página.

## 9. Engenharia e qualidade

Inspecione a estrutura existente. Se a pasta continuar sem código, proponha uma tecnologia proporcional à landing page e resolva a escolha com o usuário conforme o fluxo aplicável; não crie backend, contas ou pagamentos sem necessidade.

Cuide de HTML semântico, títulos, descrições, legibilidade, contraste, foco, imagens com dimensões definidas, layout responsivo e carregamento. Evite usar canvas como único lugar onde existem informações importantes ou controles.

A galeria deve funcionar por toque e teclado, fechar com Escape, restaurar o foco e preservar o local da rolagem. No celular, não depender de hover nem de arraste sem alternativa. A versão com movimento reduzido deve ser composta com intenção, sem espaços vazios deixados pelas animações.

Não use carregamento infinito, contadores falsos, botões sem ação nem cenas 3D com URL inventada. Conteúdo deve permanecer visível se scripts ou recursos falharem.

## 10. Valide a versão funcionando e entregue

Use Playwright ou a ferramenta de navegador equivalente disponível. Faça uma rodada de inspeção em computador e celular, corrija o conjunto de problemas e confirme as correções dentro dos limites da skill.

Verifique no mínimo: abertura, rolagem completa, menu, galeria, teclado/Escape, foco, contato, imagens, ausência de overflow horizontal, movimento reduzido e console. Para movimento, interaja com a página; screenshots sozinhos não provam fluidez. Se só houver emulação de celular, diga isso em vez de afirmar teste em aparelho físico.

Registre em `VALIDACAO.md` o que foi testado, problemas corrigidos e limitações reais. Não confunda build bem-sucedido com aprovação visual.

Entregue uma prévia local navegável, instruções simples para abrir, documentos de direção/movimento/mídia necessários e lista curta de pendências. Mostre onde as skills influenciaram o resultado. Não publique nesta etapa.
