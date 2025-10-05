const cel = document.getElementById('cel');
const result = document.getElementById('result');


function t_converter(){

    let Fahrenheit = 1.8 * cel.value + 32;
    result.value = Fahrenheit;

    console.log(Fahrenheit);

}