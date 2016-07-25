function receivesAFunction(lalaFunction){
  lalaFunction();
}

function returnsANamedFunction(){
  function lala(){
  }
  return lala;
}

function returnsAnAnonymousFunction(){
  var la = function(){
  }
  return la;
}
