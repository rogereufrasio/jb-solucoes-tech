# JB Soluções Tech

Landing page institucional focada em contato pelo WhatsApp.

## Execução

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

Copie `.env.example` para `.env` e informe `VITE_SITE_URL` antes da publicação. O build usa essa URL para gerar `robots.txt`, `sitemap.xml` e a URL canônica.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` valida e publica o conteúdo de `dist` quando há push para `main` ou `master`, além de permitir execução manual. `main` é a branch recomendada para o repositório definitivo.

1. Confirme que o repositório remoto se chama `jb-solucoes-tech`.
2. Use `main` como branch principal.
3. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.
4. Faça commit e push somente depois de revisar os dados e autorizar a publicação.

Durante o workflow, `VITE_BASE_PATH` e `VITE_SITE_URL` são derivados automaticamente do proprietário e do nome do repositório. Isso mantém assets, canonical, `robots.txt` e `sitemap.xml` corretos no subdiretório do GitHub Pages. Para domínio próprio futuro, ajuste essas variáveis no workflow.

## Arquitetura e privacidade

- Não há backend, banco de dados, autenticação ou armazenamento do diagnóstico.
- Os cliques de conversão emitem eventos internos; nenhuma ferramenta externa de métricas é carregada.
- Avaliações reais possuem estrutura e feature flag, mas permanecem ocultas enquanto não houver conteúdo comprovado.
- Informações comerciais ainda não confirmadas ficam em configuração interna e não são exibidas.

## Pendências antes da publicação

- Revisar a Política de Privacidade e os Termos de Uso com o responsável. Os textos são informativos e não constituem parecer jurídico.
- Confirmar URL pública e demais dados marcados como pendentes antes de exibi-los.
- A integração de métricas é opcional e permanece desativada. O site apenas emite eventos internos de conversão.
