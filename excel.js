// Total Sales: F = E * C
// Total Profit: G = E * D
console.log("Running");
// alert();

let unitCol = document.querySelector("#units");
console.log( unitCol );

// Adding an Event Listener on our Cell:
// Syntax: HTMLElement.addEventListener( EVENT:String, CALLBACK:Function );
unitCol.addEventListener( "input", handleClick );

function handleClick( e ){

    console.log( "The Input has been changed!" );

}

console.log("End of Code");
// END OF CODE