

const baseStatsUrl = 'https://serenesforest.net/the-sacred-stones/characters/base-stats/'
export let baseStats = ''

fetch(baseStatsUrl)
    .then(res => res.json())
    .then(html =>{
            console.log(html);
            baseStats=html
    })