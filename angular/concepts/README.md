# ANGULAR CONCEPTS 

to read and take notes:

- https://jtearl188.medium.com/basic-concepts-of-angular-5ec4f4568e07
- https://medium.com/techmonks/angular-core-concepts-list-c337e3e84f5f
- https://angular.io/guide/architecture
- https://www.dottedsquirrel.com/things-to-learn-angular/

-----

módulo -> onde se faz a injeção/importação/declaração das dependências que são utilizados no componente. A ideia principal do módulo é o de responsabilidade única, o que permite o lazy loading.

metadata dos módulos:
- Declarations: declarar componentes, pipes ou diretivas;
- Imports: importar módulos que serão utilizados;
- Exports:  exportar componentes, pipes ou diretivas para que possam ser utilizadas em módulos que importem este;
- Providers: os serviços utilizados são adicionados aqui, e tornam-se conhecidos pelo componente, permitindo a injeção de dependências (depency injection);
- Boostrap: só existe no módulo root, contém a view da aplicação (root component).

lazy loading -> os módulos só são carregados quando são precisos em vez de serem logo quando a aplicação inicializa. Melhora a rapidez e a performance da aplicação.

-----

componentes -> é uma classe que interage com a view (componente e template - ficheiro html). O componente tem campos e métodos que suportam e alimentam a view.

data binding -> forma de comunicar (enviar/receber dados) entre o componente e o template.

tipos de data binding:

- interpolation: {{ value }}, para inserir dados do componente no template;
- property binding: [property]="value", semelhante à interpolation, mas mais forte, pois podemos atribuir valor a uma propriedade do template;
- event binding: (event)="handler", permite que eventos do HTML possam chamar métodos do componente;
- two way binding: [(ng-model)]="property" permite property e event binding na mesma frase.
- https://medium.com/techmonks/angular-core-concepts-list-c337e3e84f5f
- https://angular.io/guide/architecture
- https://www.dottedsquirrel.com/things-to-learn-angular/

