 # **Aplicação de Assinatura Digital**

Esta é uma aplicação simples que permite que os usuários façam assinaturas digitais em um elemento canvas utilizando o mouse. Além disso, a aplicação permite que o usuário escolha para qual endpoint a assinatura em formato de imagem será enviada.

![image](https://user-images.githubusercontent.com/30128774/232161922-f6bbcc2e-6910-4f70-b0cb-5c228a86f0d2.png)
 

## **Como utilizar a aplicação**

- 1ª Opção: Acessar a aplicação online

  - A aplicação foi hospedada online no link a seguir: https://minha-assinatura-digital.mateusschverz.repl.co


- 2ª Opção: Clonando o projeto
  - Para utilizar a aplicação, basta clonar o repositório em seu ambiente local e abrir o arquivo **`index.html`** em um navegador web.
  - Ao abrir a aplicação, você verá um elemento canvas onde pode fazer sua assinatura utilizando o mouse. Para limpar o canvas e começar novamente, basta clicar no botão "Limpar".
  - Ao terminar de fazer a assinatura, você pode escolher para qual endpoint ela será enviada. Para fazer isso, basta clicar no botão "Enviar" e digitar o endpoint desejado no texto de input.

## **Como configurar os endpoints**

Os endpoints para envio da assinatura em formato de imagem são configurados no campo de texto. Basta digitar a URL dos endpoints desejados no campo ilustrado abaixo: 

![image](https://user-images.githubusercontent.com/30128774/232162896-353194ce-1164-4410-82ea-9be7477113f2.png)

 

Ao clicar no botão "Enviar", a aplicação irá enviar a assinatura para o endpoint digitado no input de texto. Se nenhum endpoint estiver selecionado, a aplicação irá enviar para um site que permite verificar as requisições feitas encontrado em: `https://mateus.requestcatcher.com/`

## **Tecnologias utilizadas**

- HTML5
- CSS3
- JavaScript

## **Licença**

Este projeto não tem licença. 
