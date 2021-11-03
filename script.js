var cont = 0;
function insert(num)
{
    if(cont <= 15)
    {
        var numero = document.getElementById("result").innerHTML;
        document.getElementById("result").innerHTML = numero + num; 
        cont = cont + 1;
    }
    else
    {
        document.getElementById("result").innerHTML = 'Limite Atingido';
        return;
    }
}
function clean()
{
    document.getElementById("result").innerHTML = "";
    cont = 0;
}
function back()
{
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length -1);
}
function calc()
{
    var result = document.getElementById("result").innerHTML;

    if(result)
    {
        document.getElementById('result').innerHTML = eval(result)
    }
    else
    {
        document.getElementById('result').innerHTML = '00'
    }
   
}
    
