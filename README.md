# Pipoca Ágil

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) na versão 16.1.4.

**Tecnologias Utilizadas:**
- HTML
- CSS
- TypeScript
- Angular
- JSON Server
- ng2-mock-component

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/` em seu navegador. A aplicação será recarregada automaticamente se você modificar algum dos arquivos de origem.

Para simular a interação com uma API RESTful durante o desenvolvimento, você também pode iniciar o servidor JSON Server com o comando:

```bash
json-server --watch db.json
```

Certifique-se de ter um arquivo `db.json` configurado com seus dados simulados. O JSON Server estará disponível em `http://localhost:3000/`.

## Geração de Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Execução de Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Execução de Testes End-to-End

Execute `ng e2e` para executar testes end-to-end usando uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste end-to-end.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, utilize `ng help` ou consulte a [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).

Certifique-se de ler a seção anterior sobre o servidor JSON Server e a biblioteca ng2-mock-component para obter informações adicionais sobre como simular dados e componentes durante o desenvolvimento.
```
