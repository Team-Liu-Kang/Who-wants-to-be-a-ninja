(function() {
    var LEADERBOARD_KEY = 'key';

    var leaderboard = {
        0: {
            name: 'unknown',
            score: 0
        },
        1: {
            name: 'unknown',
            score: 0
        },
        2: {
            name: 'unknown',
            score: 0
        },
        3: {
            name: 'unknown',
            score: 0
        },
        4: {
            name: 'unknown',
            score: 0
        }
    }

    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));

    function getLeaderboard() {
        var leaderboardString = localStorage.getItem(LEADERBOARD_KEY);
        var leaderboardJson = JSON.parse(leaderboardString);
        return leaderboardJson;
    }

    function addScore(name, score) {
        var currPlayer = {
            name: name,
            score: score
        };

        var playerArr = [];
        playerArr.push(currPlayer);

        var leaderboard = getLeaderboard();

        for (var player in leaderboard) {
            playerArr.push(leaderboard[player]);
        }

        playerArr.sort(function(a, b) {
            return b.score - a.score;
        });

        playerArr.pop();

        var i;
        var newLeaderboard = {};
        for (i = 0; i < 5; i += 1) {
            newLeaderboard[i] = {};
            newLeaderboard[i].name = playerArr[i].name;
            newLeaderboard[i].score = playerArr[i].score;
        }

        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(newLeaderboard));
    }
})();