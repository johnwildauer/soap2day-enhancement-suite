var divs = document.getElementsByClassName("col-sm-12 col-lg-12");

var seasons = $(document.getElementsByClassName("col-sm-12 col-lg-12")[4]);
var season = seasons.children('div');
seasons.append(season.get().reverse());

for (var i = 6; i < (divs.length - 2); i += 2) {

    var episodes = $(document.getElementsByClassName("col-sm-12 col-lg-12")[i]);
    var episode = episodes.children('div');
    episodes.append(episode.get().reverse());

}