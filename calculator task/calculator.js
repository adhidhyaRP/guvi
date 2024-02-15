

let input = document.getElementById('result')

 function display(num){
    input.value += num
    
  }

  function clearinp(){
    input.value = '';
  }

  function calculate(){
try{
    input.value = eval(input.value)
}
catch(error){
    alert("invalid")
    input.value = ''
    
}
    
  }


  