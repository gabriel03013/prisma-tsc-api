# Registro da atividade: Pipeline CI/CD

## Projeto

- Repositório: https://github.com/gabriel03013/prisma-tsc-api
- Aplicação: API Fastify com Bun, Prisma ORM 7 e Neon Postgres.
- Estratégia: GitHub Actions executa CI e aciona um deploy hook do Render depois que a CI passa na branch `main`. O Render executa a aplicação como container Bun.

## Prompts e evolução

### Prompt 1

> Analise este projeto e o PDF do laboratório. Quero que você configure um workflow de CI/CD com GitHub Actions seguindo os requisitos do enunciado. Inclua a execução da CI em cada `push` e `pull_request` direcionados à branch `main`, com as validações e os testes que fizerem mais sentido para esta API. Depois que a CI passar em um `push` para `main`, configure o deploy automático usando uma estratégia adequada ao projeto. Registre também as decisões tomadas e como posso validar o resultado.

**Resultado:** foram extraídos do enunciado os gatilhos de CI para `push` e `pull_request` em `main`, checkout, ambiente, instalação de dependências, validação/testes e CD somente após CI bem-sucedida. O projeto é uma API backend, então foi escolhida uma implantação em serviço web Render.

**Problema encontrado:** a aplicação não tinha testes, endpoint de saúde, comandos de teste/typecheck, ou configuração de deploy. As rotas acessavam serviços ligados ao Prisma diretamente, o que exigiria banco real para testá-las.

**Alterações realizadas:** a aplicação foi dividida em `buildApp()` para permitir testes Fastify em memória; o endpoint `/health` foi adicionado; as rotas aceitam handlers substituíveis para testar parâmetros e query strings sem Neon. Foram incluídos testes unitários de `parseBoolean` e testes das rotas; CI executa geração do Prisma Client, typecheck e testes. O deploy usa Docker/Bun e um secret de deploy hook Render.

## Testes e validações

- `bun run db:generate`: executado localmente com sucesso.
- `bun run typecheck`: executado localmente com sucesso.
- `bun run test`: executado localmente com sucesso (5 testes).
- O workflow também constrói a imagem Docker antes do deploy. A construção local não foi possível porque o Docker Desktop não estava iniciado neste ambiente; a imagem será construída pelo runner Ubuntu do GitHub Actions.
- Os testes não usam dados reais e não abrem conexão com Neon.
- A execução remota da GitHub Actions e o deploy ainda precisam ser comprovados após o commit/push e a configuração dos secrets e variáveis descritos abaixo.

## Passos manuais restantes e evidências

1. Criar/aplicar o Blueprint do `render.yaml` no Render e preencher `DATABASE_URL` e `DATABASE_URL_UNPOOLED` com os valores do projeto Neon.
2. Copiar o deploy hook do Render para o secret `RENDER_DEPLOY_HOOK_URL` em **GitHub > Settings > Secrets and variables > Actions**.
3. Fazer push desta branch para `main` e guardar evidências da execução CI e do serviço Render saudável em `/health`.
4. Anexar capturas da execução e do deploy ao PDF final exigido pelo enunciado.

Nenhum segredo de conexão foi copiado para o repositório ou para o workflow.
