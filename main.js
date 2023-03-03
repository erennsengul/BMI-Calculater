function BMI(){

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let result = weight/Math.pow(height,2);


    document.getElementById('result').innerText = result.toFixed(2);

        if(result<=18.5){
            document.getElementById('result-statu').innerText = 'Under Weight';
        }else if(result>18.5 && result<=25){
            document.getElementById('result-statu').innerText = 'Normal';
        }else if(result>25 && result<=30){
            document.getElementById('result-statu').innerText = 'Over Weight';
        }else{
            document.getElementById('result-statu').innerText = 'Obese';
        }

}

function Reset(){

    let weight = document.getElementById('weight').value = '';
    let height = document.getElementById('height').value = '';

    document.getElementById('result').innerText = '0.00';
    document.getElementById('result-statu').innerText = 'Empty';
}
