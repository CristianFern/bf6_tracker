
async function  searchPlayer() {
    var text = document.getElementById("playerNameSearch").value.toLowerCase();
    console.log('button value ' + text);
    
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");

    const response = (await fetch(`https://api.gametools.network/bf6/player/?name=${text}`, {headers : myHeaders }));
    var textRequest = await response.json();

    console.log(textRequest['results'][0]);
    document.getElementById("playerNameSearch").value = '';

    document.getElementById("playerName").innerHTML = `Player Name: ${textRequest['results'][0].name1}`;
    document.getElementById("playerID").innerHTML = `Player ID: ${textRequest['results'][0].personaId}`;
    document.getElementById("playerStatus").innerHTML = `Player Status: ${textRequest['results'][0].status}`;
    document.getElementById("playerPlatform").innerHTML = `Player Platform: ${textRequest['results'][0].platformId}`;

    

}

document.getElementById("searchBtn").addEventListener("click",searchPlayer);

document.getElementById("playerNameSearch").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchPlayer();
    }
});