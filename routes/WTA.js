const express = require('express');
const axios  = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

// URLS
const WTA_RANKINGS_URL = 'https://api.wtatennis.com/tennis/players/ranked?pageSize=100&type=rankSingles&sort=asc&metric=SINGLES';

/* WTA RANKINGS */
const WTA_PLAYER_INDEX_URL = 'https://www.wtatennis.com/players';
const WTA_COACHES_URL = 'https://www.wtatennis.com/coaches';

// WTA singles rankings API response
router.get('/rankings/singles', (req, res) => {
  const pageQueryParam = req.query?.page ?? 1;
  const page = Math.max(1, pageQueryParam) - 1;
  
  axios.get(`${WTA_RANKINGS_URL}&page=${page}`).then((response) => {
    const players = response.data;
    const normalizedPlayers = players.map((playerObj) => {
      let date = new Date(playerObj.rankedAt);
      let formattedDate = date.toISOString().split('T')[0];
      return {
        id: playerObj.player.id,
        ranking: playerObj.ranking,
        points: playerObj.points,
        playerName: playerObj.player.fullName,
        country: playerObj.player.countryCode,
        rankedAt: formattedDate,
        metadata: {
          firstName: playerObj.player.firstName,
          lastName: playerObj.player.lastName,
          dob: playerObj.player.dateOfBirth,
        }
      };
    });

    res.json(normalizedPlayers)
  });
});

// WTA doubles rankings API response
router.get('/wta/doubles', (req, res) => {
});

/* WTA STATISTICS */

/* WTA PLAYER INFORMATION */

// WTA player index API response
router.get('/players/index', (req, res) => {

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

// WTA coaches API response
router.get('/players/coaches', function (req, res) {

  let coaches = [];
  let countries = [];
  let players = [];
  let prev_players = [];
  let JSONResponse = [];

  axios.get(WTA_COACHES_URL).then((response) => {
    const $ = cheerio.load(response.data);

    $('tbody tr .profile__prev-name').each((i, div) => {
      const lastFirst = $(div).text().trim().replace(/\s/g, '');
      const parts = lastFirst.split(',');
      coaches.push(parts[1] + ' ' + parts[0]);
    });

    for (let i = 0; i < coaches.length; i++){
      JSONResponse.push({
        "coach": coaches[i]
      })
    }
    res.json(JSONResponse);
  })
})

// Export API routes
module.exports = router;