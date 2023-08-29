
let arr = []
let num = 0

function add(input) {
    let temp = []
        temp.push(input)
        temp.push(1000)
        arr.push(temp)
    return arr
}

function update_num(){
    num = Math.round(Math.random() * (arr.length-2))
    return num
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
    update()
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
var inp_2 = document.getElementById("remove_to_list");
var out_1 = document.getElementById("1_name");
var subin = document.getElementById("1_name");
var myTable = document.getElementById('myTable').getElementsByTagName('tbody')[0];
var bt_1 = document.getElementById("btn_1")
var bt_2 = document.getElementById("btn_2")
var up = document.getElementById("upp");

function upper(){
    document.getElementById("btn_1").innerHTML = arr[num][0]
    document.getElementById("btn_2").innerHTML = arr[num + 1][0]
}

function update() {
    myTable.innerHTML = ""
    for (let i = 0; i < arr.length; i++ ){
        arr.sort(([a, b], [c, d]) =>  d - b);
        var row =`
        <tr>
            <td>${i + 1 + "."}</td>
            <td>${arr[i][0]}</td>
            <td>${arr[i][1]}</td>
        </tr>
        `
        myTable.innerHTML += row
    }
    update_num()
}

function submitted_good(){
    add(inp_1.value);
    update()
    upper()
}

function le_out(){
    remove(inp_2.value);
    update()
    upper()
}

function left_click(){
    [arr[num][1], arr[num + 1][1]] = change_the_score(arr[num][1], arr[num + 1][1], 0);
    update()
    update_num()
    document.getElementById("btn_1").innerHTML = arr[num][0]
    document.getElementById("btn_2").innerHTML = arr[num + 1][0]
}

function right_click(){
    [arr[num][1], arr[num + 1][1]] = change_the_score(arr[num][1], arr[num + 1][1], 1);
    update()
    update_num()
    document.getElementById("btn_1").innerHTML = arr[num][0]
    document.getElementById("btn_2").innerHTML = arr[num + 1][0]  
}


