// Total Sales: F = E * C
// Total Profit: G = E * D
console.log("Running");
// alert();

let unitCol = document.querySelector("#units");
console.log( "unitCol:", unitCol );

// Adding an Event Listener on our Cell:
// Syntax: HTMLElement.addEventListener( EVENT:String, CALLBACK:Function );
if ( unitCol ){
    unitCol.addEventListener( "input", handleClick );
}

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

    // 5) Calculate E * D and update cell G
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    console.log( "valE: ", valE, typeof valE );
    console.log( "valD: ", valD, typeof valD );
    console.log( Number.isNaN(valE) );
    if ( Number.isNaN(valE) ){
        G.textContent = "";
    } else {
        G.textContent = valE * valD;
    }

}

//>> HANDLE JSON DATA <<//
let data = JSON.parse( jsonText );
console.log( data );

// What? Inject <tr> into HTML > tbody
// 1) Get tbody
const tbody = document.querySelector("#excel-table tbody");
// 2) append element to tbody

// What? Iterate over JSON list. Append tr + data to tbody.innerHTML
// 1) Loop over entries
// 2) inject tr
function addRow( rowData, index ){
    let tr = `
        <tr>
            <td>${index+2}</td>
            <td>${rowData.product}</td>
            <td>${rowData.cost}</td>
            <td>${rowData.price}</td>
            <td>${rowData.profit}</td>
            <td>${rowData.units_projected}</td>
            <td>${rowData.total_sales}</td>
            <td>${rowData.total_profit}</td>
        </tr>
    `;
    tbody.innerHTML += tr;
}
// addRow( data.entries[0] );
data.entries.forEach(addRow);

console.log("End of Code");
// END OF CODE