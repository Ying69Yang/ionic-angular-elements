# ionic-angular-elements

npm i

Los componentes nuevos creados con el repositorio stencil-component se instalan con npm install --save ../stencil-component que crea una entrada en el package.json del tipo: "stencil-component": "file:../stencil-component"
Después añadir una entrada como esta en el angular.json:
              {
                "glob": "**/*",
                "input": "node_modules/stencil-component",
                "output": "stencil-component"
              },
              
Y otra como esta en el index.html:
  <script src="stencil-component/dist/stencil-component.js"></script> <!-- Mi componente creado con Stencil e importado con npm install --save ../stencil-component -->
  
Añadir CUSTOM_ELEMENTS_SCHEMA en el modulo.

Más info en: https://www.adictosaltrabajo.com/2019/01/31/reutilizando-web-components-generados-por-stencil/


Este repositorio contienen una implementación de Angular-Elements que de momento no va con el compilador Ivy de Angular ni se pueden importar los web components de Angular en otros Frameworks.
