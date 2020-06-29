function getnumber(num)
{
    var result = document.getElementById("result");
    result.value += num;
}

function clrscr()
{
    var result = document.getElementById("result");
    result.value = "";
}
function getresult(){
    
    var result = document.getElementById("result");
    if(result.value=="+")
    {
        alert("First Enter Number Then"+"\n"+"Perform Operation","Hello Coder...!");
        result.value = "";
    }
    else{
        result.value = eval(result.value);
    }
}
    

    

