Api Node.JS
============

![](https://img.shields.io/github/languages/count/PcFerreira/samplenodeAPI)
![](https://img.shields.io/github/last-commit/PcFerreira/samplenodeAPI)
![](https://img.shields.io/github/license/PcFerreira/samplenodeAPI)
![](https://img.shields.io/github/repo-size/PcFerreira/samplenodeAPI)

## 📝 Descrição

Api Node.JS atividade 06/11/2020

## 📄 Requisitos 

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com)

## 👨‍💻 Usando
### 🚩 No diretorio raiz, instale as dependências.

```bash
npm install
```
### 📡 Inicie o servidor
```bash
npm start
```


## 🌐 A aplicação será executada em: [http://localhost:3500](http://localhost:3500)




## 🔎 Exemplos de Requisição 

### Buscar Anime

**URL** : `http://localhost:3500/api/anime/:animeId`
**Method** : `GET`

#### Success Response

**Code** : `200 OK`

**Exemplo**

**URL** : `http://localhost:3500/api/anime/1`

```json
{
  "id": "1",
  "title": "Jujutsu Kaisen",
  "year": "2020",
  "synopsis": "In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoumen Sukuna were lost and scattered about. Should any demon consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the undead!"
}
```
#### Error Response
**Code** : `404 Not Found`

**Exemplo**

**URL** : `http://localhost:3500/api/anime/000`

```json
{
  "message": "Anime não encontrado!"
}
```

### Inserir Anime

**URL** : `http://localhost:3500/api/anime`

**Method** : `POST`

#### Success Response

**Code** : `200 OK`

**Exemplo Requisição**

```json
{
  "title": "Jujutsu Kaisen",
  "year": "2020",
  "synopsis": "In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoumen Sukuna were lost and scattered about. Should any demon consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the undead!"
}
```

**Exemplo Requisição**
```json
{
  "message": "Anime inserido com sucesso!"
}
```


#### Error Response
**Code** : `500 Internal Server Error`

**Exemplo**


```json
{
  "message": "Erro ao inserir novo anime!"
}
```





## 🛠 Feito com

- [Express](https://expressjs.com/)


## 👥 Autor
- Pedro César Ferreira
  - Github: [PcFerreira](https://github.com/PcFerreira)


## 📍 URL

- [https://github.com/PcFerreira/apinodejsaula](https://github.com/PcFerreira/apinodejsaula)
