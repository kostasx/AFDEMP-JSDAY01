// Total Sales: F = E * C
// Total Profit: G = E * D
console.log("Running");
// alert();

let unitCol = document.querySelector("#units");
console.log( unitCol );
// Change Style:
// CSS: background-color: red;
unitCol.style.backgroundColor = "red";
// CSS: border: 2px solid black;
unitCol.style.border = "2px solid black";
// Change Content:
unitCol.textContent = "595959";

// run();

try {

    run();

} catch(error) {

    console.log( error, error.message );

}

console.log("End of Code");
// END OF CODE