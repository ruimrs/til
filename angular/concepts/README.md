# ANGULAR CONCEPTS 

to read and take notes:

- https://jtearl188.medium.com/basic-concepts-of-angular-5ec4f4568e07
- https://medium.com/techmonks/angular-core-concepts-list-c337e3e84f5f
- https://angular.io/guide/architecture
- https://www.dottedsquirrel.com/things-to-learn-angular/


módulo-> onde se faz a injeção/importação/declaração das dependências que são utilizados no componente. A ideia principal do módulo é o de responsabilidade única, o que permite o lazy loading.
    metadata dos módulos:
      - Declarations: declarar componentes, pipes ou diretivas;
      - Imports: importar módulos que serão utilizados;
      - Exports:  exportar componentes, pipes ou diretivas para que possam ser utilizadas em módulos que importem este;
      - Providers: os serviços utilizados são adicionados aqui, e tornam-se conhecidos pelo componente, permitindo a injeção de dependências (depency injection);
      - Boostrap: só existe no módulo root, contém a view da aplicação (root component).

lazy loading -> os módulos só são carregados quando são precisos em vez de serem logo quando a aplicação inicializa. Melhora a rapidez e a performance da aplicação.

