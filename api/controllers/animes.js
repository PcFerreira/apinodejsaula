let animes = require('../data/animes')

const fs = require('fs');


async function getAnime(req, res, next){
    const { animeId, } = req.params;
    let objAnime = animes.data.find(anime => anime.id === animeId);
    if(!objAnime){
        res.status(404).json({message: 'Anime não encontrado!' });
    }
    
    res.status(200).json(objAnime);
}
module.exports.getAnime = getAnime


async function addAnime(req, res, next){
    const novoId = Object.keys(animes.data).length + 1;
    
    novoAnime = {
        "id": novoId.toString(),
        "title": req.body.title,
        "year": req.body.year,
        "synopsis": req.body.synopsis
    }
    
    animes.data.push(novoAnime);
    fs.writeFile('./api/data/animes.json', JSON.stringify(animes, null, 2), 'utf8', (err) => {
        if (err) {
            res.status(500).json({message: 'Erro ao inserir novo anime!' });
        }
        
        res.status(200).json({message: 'Anime inserido com sucesso!' });
    })
}
module.exports.addAnime = addAnime