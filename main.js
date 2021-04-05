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
    nodeButton.innerText = "yew";

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




    

    nodeButton.addEventListener('click',function(){
        const nodes = new Array(layers);

    for(i = 1; i<=layers; i++){
        const x = document.getElementById("layer"+i+"");
        nodes[i-1] = (x.value);
    }

    console.log(nodes);
    })

    
});








// function setup() {
//     const myCanvas = createCanvas(1000, 1000);
//     myCanvas.parent("content");
// }
  
// function draw() {
//     if (mouseIsPressed) {
//       fill(0);
//     } else {
//       fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }