# Projeto de emissão de PDF

## Descrição geral
O projeto possui um servidor NodeJS com Express configurado para servir duas rotas GET: uma gera certificados de conclusão de curso (**/certificado**) e outra gera atestado de matrícula (**/atestado**).

Além do servidor, o projeto possui uma página **index.html** para um frontend de escolha de preenchimento de informações que serão enviadas ao servidor node e respondidas por meio do download de um pdf com os dados fornecidos.

## Instalação
Após instalar a última versão LTS do NodeJS em sua máquina e se certificar que as variáveis de ambiente estão declaradas (em uma terminal/Command Line você deve ser capaz de digitar os comando **node** e **npm**).

Após a instalação, baixar o projeto em sua máquina e realizar o comando **npm install** pelo terminal na dentro da pasta do projeto (no mesmo nível em que esteja o arquivo **package.json**).

Depois de instalado os pacotes, será possível executar o comando **npm start** e acessar as rotas dos projetos por meio do uso do arquivo **index.html**.