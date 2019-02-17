const router = require('express').Router();
const axios  = require('axios');
const cheerio = require('cheerio');

// ATP URLS
const ATP_WIN_LOSS_URL = 'https://www.atptour.com/en/performance-zone/win-loss-index';

// WTA URLS
const WTA_PLAYER_INDEX_URL = 'https://www.wtatennis.com/players';

// ATP player win/loss index  API response
router.get('/atp/win-loss', function (req, res) {

  let rankings = [];
  let countries = [];
  let players = [];
  let index = [];
  let titles = [];
  let win_loss = [];
  let JSONResponse = [];

  axios.get(ATP_WIN_LOSS_URL).then((response) => {
    const $ = cheerio.load(response.data)

    console.log($('.win-loss-table-list-container'))

    // Scraping rankings
    $('.mega-table tbody tr .rank-cell').each((i, td) => {
      // console.log($(td).text())
      rankings.push($(td).text().trim());
      // console.log(rankings)
    });

    for (let i = 0; i < rankings.length; i++){
      JSONResponse.push({
        "ranking": rankings[i],
        "country": countries[i],
        "player": players[i],
      })
    }

    res.json(response.data)
    //res.json(JSONResponse);
  })
});

// WTA player index API response
router.get('/wta/index', function (req, res) {

  let rankings = [];
  let countries = [];
  let players = [];
  let JSONResponse = [];

  axios.get(WTA_PLAYER_INDEX_URL).then((response) => {
    const $ = cheerio.load(response.data);

    $('tbody tr .views-field-field-singles-ranking').each((i, td) => {
      rankings.push($(td).text().trim());
    });

    $('tbody tr span').each((i, span) => {
      countries.push($(span).data('tooltip'));
    });

    $('tbody tr .views-field-field-lastname').each((i, td) => {
      const lastFirst = $(td).text().trim().replace(/\s/g, '');
      const parts = lastFirst.split(',');
      players.push(parts[1] + ' ' + parts[0]);
    });

    for (let i = 0; i < rankings.length; i++){
      JSONResponse.push({
        "ranking": rankings[i],
        "country": countries[i],
        "player": players[i]
      })
    }

    res.json(JSONResponse);
  });
});

module.exports = router;