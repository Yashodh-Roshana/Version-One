const display = document.getElementById('display')

function think(){
    setTimeout(()=>display.value = 'Still thinking???', 1000)
    setTimeout(()=>display.value = '', 2000)
}
function clearDisplay(){
    display.value = ''
}

function appendToDisplay(input){
    display.value += input
}


function calculate(){
    try{display.value = eval(display.value)}
    catch (error){display.value = "ERROR", setTimeout(()=>display.value = '', 1000)}
    
}