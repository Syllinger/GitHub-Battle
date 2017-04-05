var axios = require('axios');

var Config = require('../../config');

var id = Config.CLIENT_ID;
var sec = Config.SECRET_ID;
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  // Fetch username repos
}

function getTotalStars (stars) {
  // Calculate all of the stars that the user has
}

function getPlayerData (player) {
  // Get repos
  // Get total stars
  // Return object with that data
}

function calculateScores (Players) {
  // Implement algorithm to determine winner
  // Return array with scores
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      });
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err)
    });
  },
  battle: function(players) {

  }
};

module.exports = helpers;