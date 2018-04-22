function main(){
    var socket = io.connect('http://localhost:3000');
    function statistics(statistics){
        document.getElementById("Grass").style.width = statistics.Grass + "%";
        document.getElementById("Sheep").style.width = statistics.Sheep + "%";
        document.getElementById("Wolf").style.width = statistics.Wolf + "%";
        document.getElementById("Human").style.width = statistics.Human + "%";
        document.getElementById("Grass").title = statistics.Grass_t;
        document.getElementById("Sheep").title = statistics.Sheep_t;
        document.getElementById("Wolf").title = statistics.Wolf_t;
        document.getElementById("Human").title = statistics.Human_t;
        document.getElementById("Grass_t").innerText = statistics.Grass_t;
        document.getElementById("Sheep_t").innerText = statistics.Sheep_t;
        document.getElementById("Wolf_t").innerText = statistics.Wolf_t;
        document.getElementById("Human_t").innerText = statistics.Human_t;
        document.getElementById("oldest").innerText = "Now the oldest character is " + statistics.old[1] + ": " + statistics.old[0] + " years old";
        document.getElementById("ill").innerText = "Now there are " + statistics.ill_c + " ill characters, and " + statistics.ill_g + " ill grass";
        
    }
    socket.on("statistics", statistics);
}
window.onload = main;