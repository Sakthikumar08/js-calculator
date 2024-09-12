
function Todisplay(input){
    (document.getElementById("display")).value += input;
}
function cleardisplay(){
    (document.getElementById("display")).value="";
}
function calculate(){
    (document.getElementById("display")).value = eval((document.getElementById("display")).value);

}