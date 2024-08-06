
function reflex_agent(location, state){
    if (state=="SUCIO") return "LIMPIO";
    else if (location=="A") return "DERECHA";
    else if (location=="B") return "IZQUIERDA";
}

function test(states){
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("log").innerHTML+="<br>Ubicacion: ".concat(location).concat(" | Accion: ").concat(action_result);
       if (action_result == "LIMPIO"){
         if (location == "A") states[1] = "LIMPIO";
          else if (location == "B") states[2] = "LIMPIO";
       }
       else if (action_result == "DERECHA") states[0] = "B";
       else if (action_result == "IZQUIERDA") states[0] = "A";		
 setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","SUCIO","SUCIO"];
test(states);