
let arr = []
function add(input) {
    let temp = []
        temp.push(input)
        temp.push(1000)
        arr.push(temp)
    return arr
}

function remove(input){
    for (let i = 0; i < arr.length; i++){
        if ( arr[i][0] == input){
            arr.splice(i,1)
        }
    }
}

function empty() {
    arr = []
    return arr
}

function change_the_score(input_1, input_2, winner){
    let dife_1 = 1 / (Math.pow(10, (input_2 - input_1) / 400) + 1);
    let dife_2 = 1 / (Math.pow(10, (input_1 - input_2) / 400) + 1);
    if (winner == 1){
        input_2 = input_2 - (20 * (1-dife_1));
        input_1 = input_1 + (20 * (1-dife_1));
    } else {
        input_2 = input_2 + (20 * (1-dife_2));
        input_1 = input_1 - (20 * (1-dife_2));
    }
    return [input_1, input_2];
}

var inp_1 = document.getElementById("add_to_list");
var out_1 = document.getElementById("1_name");
var subin = document.getElementById("1_name");


function submitted_good(){
    add(inp_1);
    document.getElementById("1_name").innerHTML = arr[1][0]
    document.getElementById("1_score").innerHTML = arr[1][1]
    document.getElementById("2_name").innerHTML = arr[2][0]
    document.getElementById("2_score").innerHTML = arr[2][1]

}

document.getElementById("1_name").innerHTML = arr[1][0]
document.getElementById("1_score").innerHTML = arr[1][1]

document.getElementById("2_name").innerHTML = arr[2][0]
document.getElementById("2_score").innerHTML = arr[2][1]
