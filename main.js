let counter = 0;
function changeCount(num){
    counter += num;

    document.getElementById('number').innerHTML = counter;
}