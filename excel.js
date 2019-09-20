// Total Sales: F = E * C
// Total Profit: G = E * D
console.log("Running");
// alert();

let unitCol = document.querySelector("#units");
console.log( unitCol );

// Adding an Event Listener on our Cell:
// Syntax: HTMLElement.addEventListener( EVENT:String, CALLBACK:Function );
unitCol.addEventListener( "input", handleClick );

// 1) When Cell E has been changed: 
function handleClick( e ){

    // 2) Get value of E
    let unitsProjected = e.target;
    let valE = unitsProjected.textContent;
    valE = parseFloat( valE );  // Convert the text we got from the textContent into a floaring Number

    // 4) Get value of cell D 
    let D = unitsProjected.previousElementSibling;
    let valD = D.textContent;
    valD = parseFloat( valD );
    console.log( valD, typeof valD );

}

console.log("End of Code");
// END OF CODE