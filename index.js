map = new Array(3);
map[0] = new Array(3);
map[1] = new Array(3);
map[2] = new Array(3);

map[0][0] = 1;
map[0][1] = 1;
map[0][2] = 1;

map[1][0] = 0;
map[1][1] = 1;
map[1][2] = 2;

map[2][0] = 0;
map[2][1] = 1;
map[2][2] = 2;

adventurerRow = 1;
adventurerCol = 1;

function drawMap() {

    output = "<table>";
    
    for (row=0; row < 3; row++)
    {
        output = output + "<tr>";
        for (col=0; col < 3; col++) {

            if (adventurerRow == row && adventurerCol == col) {
                output = output+ "<td style='border:solid 2px #060'>";                
            } else {
                output = output+ "<td>";                
            }
            
            switch(map[row][col]) {
                case 2:
                    output = output + "<img src='grass.png'/>";
                    break;
                case 1:
                    output = output + "<img src='floor.png'/>";
                    break;
                case 0:
                    output = output + "<img src='nothing.png'/>";
                    break;
                default:
                    output = "bad map data";
            }

            output = output+ "<td>";
        }
        output = output + "<tr>";
    }


    output = output + "</table>";

    return output;
}

function moveLeft() {
    adventurerCol--;
    redraw();
}

function moveRight() {
    adventurerCol++;
    redraw();
}

function moveUp() {
    adventurerRow--;    
    redraw();
}

function moveDown() {
    adventurerRow++;
    redraw();
}

function redraw() {
    var mapElement = document.getElementById("map").innerHTML = drawMap();    
}

redraw();