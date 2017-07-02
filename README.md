## Projeto tosco de exemplo para composição de serviços ##

O objetivo desse projeto tosco é mostrar como um midleware pode comunicar com dois serviços distintos em sequencia enviando um input para o primeiro serviços, recebendo a resposta e enviado essa resposta para o serviço 2 que irá somar 1 no input e devolver para o midleware que irá exibir o valor - De maneira tosca é uma composição de serviços.


#### Instalar Nodejs ####

1- Abrir o terminal e navegar até o diretório do projeto
2- Executar 'npm start'
3- Instalar nodemon 'npm install nodemon'
4- Executar em terminals direfentes os três serviços
  nodemon serviceone.js
  nodemon servicetwo.js
  nodemon app.js
5- Executar no navegador 'http://localhost:3002/?value=15011'


Obs.: Não fiz uma conversão digna de XML para JSON, apenas peguei o valor e redirie as chaves :)
Sim, o ideal é ter outro midleware que trabalhe como uma camada de interoperabilidade.
