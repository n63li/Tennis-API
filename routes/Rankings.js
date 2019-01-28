const router = require('express').Router();
const axios  = require('axios');
const cheerio = require('cheerio');

// ATP URLS
const ATP_SINGLES_URL = 'https://www.atptour.com/en/rankings/singles';
const ATP_RACE_TO_LONDON_URL = 'https://www.atptour.com/en/rankings/singles-race-to-london';
const ATP_RACE_TO_MILAN_URL = 'https://www.atptour.com/en/rankings/race-to-milan';
const ATP_DOUBLES_URL = 'https://www.atptour.com/en/rankings/doubles';

// WTA URLS
const WTA_RANKINGS_URL = 'https://www.wtatennis.com/rankings';

// ATP singles rankings API response
router.get('/atp/singles', function (req, res) {

  let rankings = [];
  let countries = [];
  let players = [];
  let ages = [];
  let points = [];
  let tournaments = [];
  let JSONResponse = [];

  axios.get(ATP_SINGLES_URL).then((response) => {
    const $ = cheerio.load(response.data);

    // Scraping rankings
    $('.mega-table tbody tr .rank-cell').each((i, element) => {
      rankings.push($(element).text().trim());
    });

    // Scraping countries
    $('.mega-table tbody tr .country-cell .country-inner .country-item img').each((i, element) => {
      countries.push($(element).attr('alt'));
    });

    // Scraping names
    $('.mega-table tbody tr .player-cell').each((i, element) => {
      players.push($(element).text().trim());
    });

    // Scraping ages
    $('.mega-table tbody tr .age-cell').each((i, element) => {
      ages.push($(element).text().trim());
    });

    // Scraping points
    $('.mega-table tbody tr .points-cell').each((i, element) => {
      points.push($(element).text().trim());
    });

    // Scraping tournaments played
    $('.mega-table tbody tr .tourn-cell').each((i, element) => {
      tournaments.push($(element).text().trim());
    });

    for (let i = 0; i < rankings.length; i++){
      JSONResponse.push({
        "ranking": rankings[i],
        "country": countries[i],
        "player": players[i],
        "age": ages[i],
        "points": points[i],
        "tournaments_played": tournaments[i]
      })
    }

    res.json(JSONResponse);
  });
});

// ATP Race to London API response
router.get('/atp/race-to-london', function (req, res) {

  let rankings = [];
  let countries = [];
  let players = [];
  let ages = [];
  let points = [];
  let tournaments = [];
  let JSONResponse = [];

  axios.get(ATP_RACE_TO_LONDON_URL).then((response) => {
    const $ = cheerio.load(response.data);

    // Scraping rankings
    $('.mega-table tbody tr .rank-cell').each((i, element) => {
      rankings.push($(element).text().trim());
    });

    // Scraping countries
    $('.mega-table tbody tr .country-cell .country-inner .country-item img').each((i, element) => {
      countries.push($(element).attr('alt'));
    });

    // Scraping names
    $('.mega-table tbody tr .player-cell').each((i, element) => {
      players.push($(element).text().trim());
    });

    // Scraping ages
    $('.mega-table tbody tr .age-cell').each((i, element) => {
      ages.push($(element).text().trim());
    });

    // Scraping points
    $('.mega-table tbody tr .points-cell').each((i, element) => {
      points.push($(element).text().trim());
    });

    // Scraping tournaments played
    $('.mega-table tbody tr .tourn-cell').each((i, element) => {
      tournaments.push($(element).text().trim());
    });

    for (let i = 0; i < rankings.length; i++){
      JSONResponse.push({
        "ranking": rankings[i],
        "country": countries[i],
        "player": players[i],
        "age": ages[i],
        "points": points[i],
        "tournaments_played": tournaments[i]
      })
    }

    res.json(JSONResponse);
  });
});

// ATP singles rankings API response
router.get('/atp/race-to-milan', function (req, res) {

  let rankings = [];
  let countries = [];
  let players = [];
  let ages = [];
  let points = [];
  let tournaments = [];
  let JSONResponse = [];

  axios.get(ATP_RACE_TO_MILAN_URL).then((response) => {
    const $ = cheerio.load(response.data);

    // Scraping rankings
    $('.mega-table tbody tr .rank-cell').each((i, element) => {
      rankings.push($(element).text().trim());
    });

    // Scraping countries
    $('.mega-table tbody tr .country-cell .country-inner .country-item img').each((i, element) => {
      countries.push($(element).attr('alt'));
    });

    // Scraping names
    $('.mega-table tbody tr .player-cell').each((i, element) => {
      players.push($(element).text().trim());
    });

    // Scraping ages
    $('.mega-table tbody tr .age-cell').each((i, element) => {
      ages.push($(element).text().trim());
    });

    // Scraping points
    $('.mega-table tbody tr .points-cell').each((i, element) => {
      points.push($(element).text().trim());
    });

    // Scraping tournaments played
    $('.mega-table tbody tr .tourn-cell').each((i, element) => {
      tournaments.push($(element).text().trim());
    });

    for (let i = 0; i < rankings.length; i++){
      JSONResponse.push({
        "ranking": rankings[i],
        "country": countries[i],
        "player": players[i],
        "age": ages[i],
        "points": points[i],
        "tournaments_played": tournaments[i]
      })
    }

    res.json(JSONResponse);
  });
});

// ATP doubles rankings API response
router.get('/atp/doubles', function (req, res) {

  let rankings = [];
  let countries = [];
  let players = [];
  let ages = [];
  let points = [];
  let tournaments = [];
  let JSONResponse = [];

  axios.get(ATP_DOUBLES_URL).then((response) => {
    const $ = cheerio.load(response.data);

    // Scraping rankings
    $('.mega-table tbody tr .rank-cell').each((i, element) => {
      rankings.push($(element).text().trim());
    });

    // Scraping countries
    $('.mega-table tbody tr .country-cell .country-inner .country-item img').each((i, element) => {
      countries.push($(element).attr('alt'));
    });

    // Scraping names
    $('.mega-table tbody tr .player-cell').each((i, element) => {
      players.push($(element).text().trim());
    });

    // Scraping ages
    $('.mega-table tbody tr .age-cell').each((i, element) => {
      ages.push($(element).text().trim());
    });

    // Scraping points
    $('.mega-table tbody tr .points-cell').each((i, element) => {
      points.push($(element).text().trim());
    });

    // Scraping tournaments played
    $('.mega-table tbody tr .tourn-cell').each((i, element) => {
      tournaments.push($(element).text().trim());
    });

    // console.log(names)

    for (let i = 0; i < rankings.length; i++){
      JSONResponse.push({
        "ranking": rankings[i],
        "country": countries[i],
        "player": players[i],
        "age": ages[i],
        "points": points[i],
        "tournaments_played": tournaments[i]
      })
    }

    res.json(JSONResponse);
  });
});

// WTA singles rankings API response
router.get('/wta/singles', function (req, res) {

});

// WTA doubles rankings API response
router.get('/wta/doubles', function (req, res) {
});

// Export API routes
module.exports = router;