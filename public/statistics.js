function main(){
    var socket = io.connect('http://localhost:3000');
    function statistics(statistics){
        document.getElementById("Grass").style.width = statistics.Grass*7 + "px";
        document.getElementById("Sheep").style.width = statistics.Sheep*7 + "px";
        document.getElementById("Wolf").style.width = statistics.Wolf*7 + "px";
        document.getElementById("Human").style.width = statistics.Human*7 + "px";
        document.getElementById("Grass").title = statistics.Grass_t;
        document.getElementById("Sheep").title = statistics.Sheep_t;
        document.getElementById("Wolf").title = statistics.Wolf_t;
        document.getElementById("Human").title = statistics.Human_t;
        document.getElementById("Grass_t").innerText = statistics.Grass_t;
        document.getElementById("Sheep_t").innerText = statistics.Sheep_t;
        document.getElementById("Wolf_t").innerText = statistics.Wolf_t;
        document.getElementById("Human_t").innerText = statistics.Human_t;
        document.getElementById("oldest").innerHTML = "Leaderbord <br>" + statistics.old[1][0] + " . . . . . " + statistics.old[0][0] + "<br>" + statistics.old[1][1] + " . . . . . " + statistics.old[0][1] + "<br>" + statistics.old[1][2] + " . . . . . " + statistics.old[0][2] + "<br>" + statistics.old[1][3] + " . . . . . " + statistics.old[0][3] + "<br>" + statistics.old[1][4] + " . . . . . " + statistics.old[0][4] + "<br>" + statistics.old[1][5] + " . . . . . " + statistics.old[0][5] + "<br>" + statistics.old[1][6] + " . . . . . " + statistics.old[0][6] + "<br>" + statistics.old[1][7] + " . . . . . " + statistics.old[0][7] + "<br>" +statistics.old[1][8] + " . . . . . " + statistics.old[0][8] + "<br>" + statistics.old[1][9] + " . . . . . " + statistics.old[0][9] + "<br>";
        document.getElementById("ill").innerText = "Now there are " + statistics.ill_c + " ill characters, and " + statistics.ill_g + " ill grass";
        document.getElementById("grass_new").innerText = statistics.grass_new + " new and " + statistics.grass_old + " destroyed grass from the start of the game ";
        
    }
    socket.on("statistics", statistics);
}
window.onload = main;