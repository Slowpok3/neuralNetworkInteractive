const inputWindow = document.getElementById("inputWindow");
const nodeInputWindow = document.getElementById("nodeInputs");
const inputButton = document.getElementById("h");

inputWindow.appendChild(nodeInputWindow);


const button1 = inputButton.addEventListener('click', function (){
    
    console.log(nodeInputWindow.children);

    nodeInputWindow.removeChild(nodeInputWindow.firstChild);
    
    const parent =  document.createElement("div");
    parent.setAttribute("id", "parent");
    
    
    
    const layers = document.getElementById("layerInput").value;
    
    const bigLabel = document.createElement("label");
    bigLabel.innerText = "Nodes in Each Layer: ";

    const nodeButton = document.createElement("button");
    nodeButton.type = "submit";
    nodeButton.setAttribute("id", "nodeButton");
    nodeButton.innerText = "Confirm Number of Nodes in Each Layer";

    parent.appendChild(bigLabel);
    parent.appendChild(nodeButton);


    for(i = 1; i<=layers; i++){
        const x = document.createElement("label");
        x.innerText = "Layer " + i + ":";
        parent.appendChild(x);

        const y = document.createElement("input");
        y.type = "number";
        y.setAttribute("id", "layer" + i +"");
        
        parent.appendChild(y);


        
    }

    nodeInputWindow.appendChild(parent);
    const nodes = new Array(layers);
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

        const weightsDisplay = document.createElement('h1');
        var weight = 1;
        for (i = 0; i<nodes.length; i++){
            weight*= nodes[i];
        }
        weightsDisplay.innerText = "Number of weights: " + weight;

        displayParent.appendChild(weightsDisplay);
        
     
        


        

    })

    
});


function setup() {
    const myCanvas = createCanvas(1000, 1000);
    myCanvas.parent("content");
    background(220);
}
  
function draw() {
    
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}





