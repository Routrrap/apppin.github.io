# Configurando um Domínio Gratuito com GitHub Pages

Este guia irá ajudá-lo a configurar um domínio gratuito para o seu projeto usando GitHub Pages.

## Passo 1: Criar uma conta no GitHub

1. Acesse [GitHub](https://github.com) e crie uma conta gratuita se ainda não tiver uma.
2. Faça login na sua conta.

## Passo 2: Criar um repositório no GitHub

1. Clique no botão "+" no canto superior direito e selecione "New repository".
2. Nomeie o repositório como `seu-nome.github.io` (substitua "seu-nome" pelo seu nome de usuário do GitHub).
3. Deixe o repositório público.
4. Clique em "Create repository".

## Passo 3: Preparar o projeto para deploy

1. Certifique-se de que o arquivo `vite.config.ts` está configurado corretamente:
   ```typescript
   export default defineConfig({
     base: '/',
     // ... outras configurações
   });
   ```

2. O arquivo `CNAME` já foi criado com o domínio `seu-nome.github.io`.

## Passo 4: Deploy no GitHub Pages

1. Inicialize o Git no seu projeto (se ainda não estiver inicializado):
   ```bash
   git init
   ```

2. Adicione o repositório remoto:
   ```bash
   git remote add origin https://github.com/seu-nome/seu-nome.github.io.git
   ```

3. Crie uma branch gh-pages:
   ```bash
   git checkout -b gh-pages
   ```

4. Faça o build do projeto:
   ```bash
   npm run build
   ```

5. Adicione, commit e push os arquivos:
   ```bash
   git add .
   git commit -m "Initial deploy"
   git push origin gh-pages
   ```

## Passo 5: Configurar GitHub Pages

1. Vá para as configurações do seu repositório no GitHub.
2. Na seção "Pages", selecione a branch "gh-pages" como source.
3. Aguarde alguns minutos até que o GitHub Pages publique seu site.

Seu site estará disponível em `https://seu-nome.github.io`

## Observações Importantes

1. Substitua "seu-nome" pelo seu nome de usuário do GitHub em todas as URLs e comandos.
2. Após fazer alterações no projeto, sempre faça o build e deploy novamente.
3. O domínio gratuito será no formato `seu-nome.github.io`.
4. Se precisar de um domínio personalizado (como exemplo.com), você precisará comprá-lo separadamente e configurar os registros DNS.

## Suporte

Se encontrar problemas durante a configuração:
1. Verifique se todos os passos foram seguidos corretamente.
2. Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/pt/pages).
3. Verifique se o build do projeto está funcionando corretamente localmente.