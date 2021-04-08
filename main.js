const inputWindow = document.getElementById("inputWindow");
const nodeInputWindow = document.getElementById("nodeInputs");
const inputButton = document.getElementById("h");

inputWindow.appendChild(nodeInputWindow);

var layers = 3;
var nodes = [2,3,2];

const q = document.createElement('canvas');
q.setAttribute("id", "defaultCanvas0");
inputWindow.appendChild(q);

const button1 = inputButton.addEventListener('click', function (){
    
    console.log(nodeInputWindow.children);

    nodeInputWindow.removeChild(nodeInputWindow.firstChild);
    
    const parent =  document.createElement("div");
    parent.setAttribute("id", "parent");
    
    
    
    layers = document.getElementById("layerInput").value;
    
    const bigLabel = document.createElement("label");
    bigLabel.innerText = "Number of Nodes in Each Layer: ";

    const nodeButton = document.createElement("button");
    nodeButton.type = "submit";
    nodeButton.setAttribute("id", "nodeButton");
    nodeButton.innerText = "Draw!";

    parent.appendChild(bigLabel);
    parent.appendChild(nodeButton);


    for(i = 1; i<=layers; i++){
        const x = document.createElement("label");
        x.innerText = " Layer " + i + ":";
        parent.appendChild(x);

        const y = document.createElement("input");
        y.type = "number";
        y.setAttribute("id", "layer" + i +"");
        
        parent.appendChild(y);


        
    }

    nodeInputWindow.appendChild(parent);
    nodes = new Array(layers);
    const displayParent = document.createElement('div');
    parent.appendChild(displayParent);
    displayParent.appendChild(document.createElement('h1'));
    
    nodeButton.addEventListener('click',function(){
        displayParent.removeChild(displayParent.firstChild);

        for(i = 1; i<=layers; i++){
            const x = document.getElementById("layer"+i+"");
            nodes[i-1] = (x.value);
        }
        console.log(nodes);

        const weightsDisplay = document.createElement('label');
        var weight = 1;
        for (i = 0; i<nodes.length; i++){
            weight*= nodes[i];
        }
        weightsDisplay.innerText = "Number of weights: " + weight;

        displayParent.appendChild(weightsDisplay);
        
        document.getElementById("defaultCanvas0").remove();
        startSketch();
        //console.log(document.children);
        


        

    })

    
});

function startSketch(){
    

    var sketch = function (p){
        var canvasHeight = 500;
        var canvasWidth = 500;

        var cLayers = layers;
        var cNodes = nodes;

        var x = canvasWidth/layers;

        console.log(cLayers);
        console.log(cNodes);

        var gap = 25;
        var circleRadius = canvasHeight/Math.max(...cNodes)  - gap;

        if (x < circleRadius){
            circleRadius = x-gap;
        }

        circleRadius /= 2;


        p.setup = function(){
            p.createCanvas(canvasWidth,canvasHeight);
            
            p.noLoop();
        };
        p.draw = function(){
            //p.ellipse(0, 0, 80, 80);
            var i  = 0;
            var network = [];
            for ( xCoord  = x/2; xCoord< canvasWidth; xCoord+= x){
                var y = canvasHeight/cNodes[i];
                var layer = [];
                for(yCoord = y/2; yCoord < canvasHeight; yCoord+= y){
                    let c = p.color(60, 171, 209);
                    p.fill(c);
                    p.stroke(0);
                    p.strokeWeight(2);                   
                    p.ellipse(xCoord,yCoord,circleRadius,circleRadius);
                    const node = [xCoord, yCoord];

                    layer.push(node);
                }
                network.push(layer);
                i++;
            }

            for(l = 0; l<layers-1; l++){
                for(n = 0; n<network[l].length; n++){
                    var iCoordX = network[l][n][0];
                    var iCoordY = network[l][n][1];
                    for (n2 = 0; n2<network[l+1].length; n2++){
                        var fCoordX = network[l+1][n2][0];
                        var fCoordY = network[l+1][n2][1];
                        p.stroke(0);
                        p.strokeWeight(2);
                        p.line(iCoordX + (circleRadius/2) ,iCoordY,fCoordX-circleRadius/2,fCoordY);
                    }
                    
                }
            }

            console.log( network[0][0][1]);

            

        };
    };
    var myp5 = new p5(sketch);


}






