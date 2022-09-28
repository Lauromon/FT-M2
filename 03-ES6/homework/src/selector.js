var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];//cada vuelta vuelve a estar vacia, se vuelve a llenar con el push dentro del if.

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {//startEL = document.body;
    resultSet.push(startEl);
  }
  //resultSet = [document.body]
  for (let i = 0; i < startEl.children.length; i++){
    let result = traverseDomAndCollectElements(matchFunc,startEl.children[i])
    //Recursion, StartEL = document.body.h1
    resultSet = [...resultSet, ...result];
    //resultSet = document.body.h1
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '.'){
    return "class"
  }
  else if(selector[0] === '#'){
    return "id";
  }
  else {
    for(const i in selector) {
      if(selector[i] === "."){
      return "tag.class";
      }
    }
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { //selector =
    var idName = selector.substring(1); //esto seria que idName = 
    matchFunction = (el) => el.id === idName;

  } else if (selectorType === "class") {
    var clase = selector.substring(1)
    matchFunction = (el) => el.classList.contains(clase);

  } else if (selectorType === "tag.class") {
    var [tag,clase] = selector.split(".");
    matchFunction = (el) => el.classList.contains(clase) && (el.tagName.toLowerCase() === tag.toLowerCase());

  } else if (selectorType === "tag") {
    matchFunction = function (el){
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
