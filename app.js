  window.onload = function(){
  var wordDiv = document.querySelector(".word")
  var strings = ["agjnft","xjsasb","cdeovd","ernvta","assyao","ereyua","dataiq"]
  var matriz = []
  var theForm = document.querySelector(".myForm")
  var posicion = document.querySelector(".posicion")
  var inputName = document.querySelector('input[name="word"]');
  var pri;
  var x;
  var y;
  var z;
  var pos = []

// Convierto el array de stings en una matriz, separando cada letra en una posicion
  for (var i = 0; i < strings.length; i++) {
    matriz[i] = Array.from(strings[i]);
  }
console.log(matriz);
// AL apretar el boton "buscar" ejecuto la funcion
  theForm.onsubmit = function(event) {
    // pregunto si es vacio
    if ( inputName.value == "" ) {
      event.preventDefault();
      inputName.classList.add("error");
      inputName.parentElement.querySelector(".b").innerText = "Campo Obligatorio";
    }
    //funcion que te devuelve un array con las posiciones en la matriz de la palabra buscada
    function search(palabra) {
      event.preventDefault();
      //transformo la palabra en un array de letras
      var word = Array.from(palabra)
      //recorro la matriz
      for (x in matriz) {
        for (y in matriz) {
          //recorro cada letra de la palabra buscada
          for (z in word) {
            if (word[z] == matriz[x][y]) {
              pri = "("+x+","+y+")";
              pos.push(pri);
            }
          }
        }
      }
      console.log(word);
      // imprimo las posiciones
      posicion.innerText = "posicion de "+inputName.value+" es "+ pos
    }
    // hago la busqueda con el valor del input
    search(inputName.value)
  }
  console.log(pos);
}
//PRUEBAS
// else if (matriz.indexOf("a") == 0) {
//   prii = "("+x+","+y+")";
//   console.log(prii);
//  }
// if (word[1] ==  matriz[x++][y++] ) {
// pri = "("+x+","+y+")";
// console.log(pri);
//  }
// function doSearch(key) {
//   // searches the string in the array, if found set true property of element
//   // and renders the table
//   if (key.which == 13) {
//     var s = search(this.value, letters);
//     if (s != -1) {
//       var startAt = s[0];
//       var direct = s[1];
//       var len = s[2];
//       for (var i = 0; i < len; i++) {
//         letters[startAt[0] + i * direct[0]][startAt[1] + i * direct[1]][
//           1
//         ] = true;
//       }
//       document.getElementById("found").innerHTML = "Encontrado en " + startAt;
//     } else document.getElementById("found").innerHTML = "No encontrado :(";
//     createTable(letters);
//   }
// }
//
// function search(string, matrix) {
//   // searches string in matrix if found returns the position, direction and length
//   var position = [];
//   var direction = [];
//   // var word = Array.from(string)
//   // console.log(word);
//   var allD = [
//     [0, 1],
//     [1, 1],
//     [1, 0],
//     [1, -1],
//     [0, -1],
//     [-1, -1],
//     [-1, 0],
//     [-1, 1]
//   ];
//   var length = string.length;
//   var rows = matrix.length;
//   var cols = matrix[0].length;
//   // string = string.toUpperCase();
//
//   for (var i = 0; i < rows; i++) {
//     for (var j = 0; j < cols; j++) {
//       if (string[0] == matrix[i][j][0]) {
//         for (var k = 0; k < 8; k++) {
//           if (
//             i + allD[k][0] * length >= 0 &&
//             i + allD[k][0] * length <= rows &&
//             j + allD[k][1] * length >= 0 &&
//             j + allD[k][1] * length <= cols
//           ) {
//             var chars = "";
//             for (var l = 0; l < length; l++) {
//               chars += matrix[i + allD[k][0] * l][j + allD[k][1] * l][0];
//             }
//             if (chars == string.toUpperCase()) {
//               return [[i, j], allD[k], length];
//             }
//           }
//         }
//       }
//     }
//     console.log(position);
//   }
//   return -1;
// }
//
// document.getElementById("search").addEventListener("keypress", doSearch);
// }
