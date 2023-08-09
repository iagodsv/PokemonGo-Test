
<!-- Logo -->
<p align="center">
  <h1  align="center" alt="Pokemon Go Test" title="Pokemon Go Test">PokemonGo Test</h1>
</p>

<!-- Badges -->
<p align="center">
  <a href="https://iagodsv.github.io/pokemongo-test/" target="_blank">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/iagodsv/pokemongo-test?color=F4516D">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/iagodsv/pokemongo-test?color=F4516D">
  <img alt="GitHub package.json version badge" src="https://img.shields.io/github/downloads/iagodsv/pokemongo-test/total?color=F4516D">
</p>

<!-- Indice-->
<p align="center">
 <a href="#computer-sobre">Sobre</a> •
 <a href="#gear-funcionalidades">Funcionalidades</a> •
 <a href="#wrench-tecnologias-utilizadas">Tecnologias</a> •
 <a href="#rocket-executando-o-projeto">Executando</a> •
</p>

## :computer: Sobre

O **PokemonGo Test** foi um teste desenvolvido para RemOpt que funciona com um botão na tela inicial para ativar a câmera para ler o QRCode. Através deste QRCode, será passada uma ID que irá retornar o Pokemon daquele determinado QRCode.

## :gear: Funcionalidades

- [x] Tela contendo um botão para ativar o leitor QRCode.
- [x] Ativação da câmera para ler o QRCode. 
- [x] Pokemon gerado através da ID do QRCode.
  

## :wrench: Tecnologias Utilizadas

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/iagodsv/technologies-icons/master/react-native.png" width='50' alt="React-Native">
        <p>React-Native</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/iagodsv/technologies-icons/master/git.png" width='50' alt="Git">
        <p>Git</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/iagodsv/technologies-icons/master/javascript.png" width='50' alt="Javascript">
        <p>Javascript</p>
      </td>
    </tr>
  </tbody>
</table>


## :rocket: Executando o projeto

### Pré-requisitos

Para executar o projeto é necessário ter instalado as seguintes ferramentas:

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href='https://git-scm.com/downloads' target='_blank'>
          <img src="https://raw.githubusercontent.com/iagodsv/technologies-icons/master/git.png" width='50' alt="React">
          <p>GIT</p>
        </a>
      </td>
      <td>
        <a href='https://git-scm.com/downloads' target='_blank'>
          <img src="https://raw.githubusercontent.com/iagodsv/technologies-icons/master/node.png" width='50' alt="React">
          <p>Node.js</p>
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Rodando aplicação web

```bash
# Clone este repositório
$ git clone https://github.com/iagodsv/PokemonGo-Test.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd pokemongotest
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ expo start --tunnel
```
