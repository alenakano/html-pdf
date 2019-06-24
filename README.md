# Export PDF project

### Team Members:
* Alexandre Nakano Marques (https://github.com/alenakano)
* Guilherme Maia Lobato
* Kaleby Barbosa Jaun Rodrigues (https://github.com/KalebyJaun)
* Naomi Cristina Tabata (https://github.com/na8na10)
* Thiago Pena Guedes (https://github.com/kensaither)


## Overview
This project is composed of a NodeJS and Express server configured with two GET routes: the first one generates course certification  (**/certificado**) e other one generates enrollment certification(**/atestado**).

Besides the server, this project has an **index.html** that is a frontend with forms that will fill the informations of the chosen certificate. This form will be sent to the node server and will be responded with a downloadable PDF file.

## Set Up
After installing the latest LTS NodeJS version and check the node environment variables (check in a command line the commands **node** and **npm**).

Clone this project to your device and execute the command **npm install** in a command line inside the folder of the project (same level that is the file **package.json**).

After the download of the dependencies, you will be able to execute the command **npm start** and access the routes using the file **index.html** of this project.




# Projeto de emissão de PDF

### Membros da Equipe:
* Alexandre Nakano Marques (https://github.com/alenakano)
* Guilherme Maia Lobato
* Kaleby Barbosa Jaun Rodrigues (https://github.com/KalebyJaun)
* Naomi Cristina Tabata (https://github.com/na8na10)
* Thiago Pena Guedes (https://github.com/kensaither)


## Descrição geral
O projeto possui um servidor NodeJS com Express configurado para servir duas rotas GET: uma gera certificados de conclusão de curso (**/certificado**) e outra gera atestado de matrícula (**/atestado**).

Além do servidor, o projeto possui uma página **index.html** para um frontend de escolha de preenchimento de informações que serão enviadas ao servidor node e respondidas por meio do download de um pdf com os dados fornecidos.

## Instalação
Após instalar a última versão LTS do NodeJS em sua máquina e se certificar que as variáveis de ambiente estão declaradas (em uma terminal/Command Line você deve ser capaz de digitar os comando **node** e **npm**).

Após a instalação, baixar o projeto em sua máquina e realizar o comando **npm install** pelo terminal na dentro da pasta do projeto (no mesmo nível em que esteja o arquivo **package.json**).

Depois de instalado os pacotes, será possível executar o comando **npm start** e acessar as rotas dos projetos por meio do uso do arquivo **index.html**.
