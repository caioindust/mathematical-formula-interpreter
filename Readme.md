#### Requirement
+ [Node Js v8.x.x or newer](https://nodejs.org/)
#### Development Dependencies
+ [ChaiJs](https://www.chaijs.com/);
+ [MochaJs](https://mochajs.org/).
#### Install development dependencies
```
$ npm install
```
##### To perform the tests
```
$ npm test
```
#### Quick test
Edit index.js file and execute command  below.
```
$ npm start
```
#### Example of use
```javascript
const calculator = require('./modules/calculator/index.js');

const exp = "150-6*800+300";

let posFix = calculator.InfixToPosFix(exp);
let value = calculator.Calc(exp);
```
#### References
+ [http://www.vision.ime.usp.br/~pmiranda/mac122_2s14/aulas/aula13/aula13.html](http://www.vision.ime.usp.br/~pmiranda/mac122_2s14/aulas/aula13/aula13.html);
+ [https://pt.wikipedia.org/wiki/Notação_polonesa_inversa](https://pt.wikipedia.org/wiki/Notação_polonesa_inversa);
+ [https://www.npmjs.com/package/gulp-define-module](https://www.npmjs.com/package/gulp-define-module);
+ [http://desenvolvimentoparaweb.com/javascript/javascript-iife-conteiner-de-codigos/](http://desenvolvimentoparaweb.com/javascript/javascript-iife-conteiner-de-codigos/);
+ [http://desenvolvimentoparaweb.com/javascript/javascript-module-pattern-padrao-modulo/](http://desenvolvimentoparaweb.com/javascript/javascript-module-pattern-padrao-modulo/).
