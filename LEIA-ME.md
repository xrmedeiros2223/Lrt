# LR7 Tattoo — prévia local

Landing page estática (HTML, CSS e JS, sem build) com GSAP + ScrollTrigger hospedados em `assets/js/`. Não foi publicada.

## Como abrir

Na pasta do projeto, rode um servidor local:

```bash
python -m http.server 8077
```

Depois abra http://localhost:8077/ no navegador. Um duplo clique em `index.html` também funciona, mas o servidor reproduz melhor o comportamento real (fontes e imagens preguiçosas).

Para ver a animação de rolagem, o sistema não pode estar com "reduzir movimento" ligado (no Windows: Configurações › Acessibilidade › Efeitos visuais › Efeitos de animação). Com ele ligado, a página mostra a versão estática composta; isso é intencional.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página única |
| `assets/css/style.css` | Estilos e tokens de cor e tipografia |
| `assets/js/main.js` | Menu, abas, galeria ampliada e cena de rolagem |
| `assets/img/` | Cópias otimizadas (WebP) das fotos reais; cada uma tem um `.json` com a origem |
| `assets/fonts/` | Big Shoulders Display e Hanken Grotesk (OFL), hospedadas localmente |
| `referencias/instagram/` | Originais intocados |
| `vendor/skills/` | Cópias de leitura das skills consultadas (não fazem parte do site) |
| `.impeccable/` | Contrato de direção, capturas de revisão e sistema de design |

## Como editar o comparador de antes e depois

Os casos da seção "Uma nova história na pele" ficam num bloco JSON no `index.html`, logo depois da seção (`<script type="application/json" id="casos-antes-depois">`). Cada caso tem:

- `titulo`, `resumo` (aparece no botão) e `legenda` (aparece sob a foto);
- `proporcao`, o formato do quadro (por exemplo `"3/4"` ou `"359/479"`);
- `miniatura`, a imagem do botão;
- `antes` e `depois`, cada um com `src`, `largura`, `altura`, `alt` e `foco` (ponto focal, como em `"50% 40%"`).

As duas fotos de um caso precisam ter **o mesmo tamanho e o mesmo enquadramento**: a divisória só recorta, não reposiciona nem estica. Se um caso ficar sem `src`, aparece um espaço identificado ("Espaço para: foto real do caso"); sem `miniatura`, o botão mostra "Sem foto". Para um caso novo, basta copiar um bloco do JSON e ajustar os campos: o botão do caso é criado sozinho. O primeiro caso também está escrito direto no HTML, para quem abre a página sem JavaScript; ao trocar o primeiro caso, troque ali também.

## Documentos

- `MOTION-PLAN.md`: momento principal, estados, celular, movimento reduzido e custo.
- `MIDIAS-E-STORYBOARD.md`: mídias em uso e roteiro e prompts para o Google Flow (nada gerado).
- `SKILLS-APLICADAS.md`: o que foi lido de cada skill e o que cada uma decidiu.
- `VALIDACAO.md`: testes feitos, problemas corrigidos e limitações.
- `DESIGN.md`: sistema visual registrado a partir da página pronta.

## Já resolvido com o material enviado

- WhatsApp do site: +55 83 9324-8063 (`wa.me/558393248063`) em todos os botões.
- Cidades: Solânea e Bananeiras/PB.
- Valores: só por orçamento no WhatsApp (o botão final diz "Pedir orçamento no WhatsApp").
- Retrato real do Lucas na seção "Lucas Rafael".
- Seção "Uma nova história na pele": comparador de antes e depois com dois casos reais de cobertura e correção, alinhados pela própria tatuagem. A aba Cobertura mostra foto real.
- O terceiro par (espartano sobre a carpa) foi para a galeria, com as duas fotos na ampliação: o antes foi fotografado de outro ângulo e não dá para sobrepor de forma honesta.
- Fechamento de perna em lettering na galeria.
- Foto de estúdio fictícia na seção de contato, sempre com o aviso "Imagem ilustrativa. Não retrata o estúdio do Lucas."

Os originais enviados estão em `referencias/usuario/`, com `ORIGENS.json`.

## Pendências

1. **Quatro trabalhos novos** (pescoço em lettering, Zeus de olhos azuis, gueixa, Coringa no peito): chegaram só como prévia no chat e não viraram arquivo. Salve as fotos, de preferência as originais em alta, em `referencias/usuario/novas/` e eu coloco na galeria.
2. **Número do WhatsApp:** o número informado tem 8 dígitos depois do DDD (9324-8063). Se o link não abrir a conversa certa, talvez falte o 9 inicial (9 9324-8063). Vale testar no celular.
3. **Retrato em alta:** o retrato enviado tem só 150 px, então aparece pequeno. Uma versão maior permite destacá-lo.
4. **Foto real do estúdio**, para substituir a imagem ilustrativa.
5. **Logo:** arquivo original ou vetor do monograma LR7. Hoje há uma identificação tipográfica provisória.
6. **Coberturas em alta:** os antes e depois vêm de prints de stories, com cerca de 360 px de largura por foto. Por isso o comparador fica limitado a 480 px no computador. Com as fotos originais, de preferência tiradas do mesmo ângulo antes e depois, o quadro pode crescer e alinhar ainda melhor.
7. **Endereço e horários:** só entram na página se o Lucas confirmar.
8. **Mídia conceitual (opcional):** vídeo de atelier no Google Flow, seguindo `MIDIAS-E-STORYBOARD.md`.
9. **Publicação:** escolher hospedagem e domínio. Não foi feita nesta etapa.
