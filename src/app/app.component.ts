import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   array = [1,2,3,4,5,6,7,8];
   
// https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d
  constructor(){
     //this.methodMap();
     //this.methodFilter();
     //this.methodFind();
     //this.methodSort();
     //this.methodSome();

     //this.methodEvery();
     //this.methodConcat();
     //this.methodIncludes();
     //this.methodJoin();
     //this.methodReduce();

     //this.methodIndexOf();
     //this.methodFindIndex();
     //this.methodFill();
     //this.methodPush();
     //this.methodPop();

     //this.methodShift();
     //this.methodUnShift();
     //this.methodSlice();
     //this.methodReverse();
     //this.methodSplice();
     
  }

  methodMap(){  //map() : Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
      const resultArray = this.array.map(element =>{
        console.log('-> ',element)
        return element + 10;
      });

      console.log(resultArray)
  }

  methodFilter(){ // Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
     const resultArray = this.array.filter(element =>{
        return element == 3
     });
     console.log(resultArray)
  }

  methodFind(){ //Recorre el array y retorna la primera coincidencia del elemento que se busca.
    const resultArray = this.array.find(element =>{
      return element > 3
   });
   console.log(resultArray)
  }

  methodSort(){ // Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
    const resultArray = this.array.sort((a,b)=> a >b ? 1 :  -1);
    console.log(resultArray)
  }

  methodSome(){ // Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.
     const isgreaterThanFour = this.array.some(element => element > 4)
     console.log(isgreaterThanFour);
     
  }

  methodEvery(){ //Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
   const isgreaterThanFour = this.array.every(element => element > 4)
   console.log(isgreaterThanFour);
  }

  methodConcat(){ //Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
   const a1 = [1,2,3,4];
   const a2 = [5,6,7,8];
   const arrayFinal = a1.concat(a2);
   console.log(arrayFinal);
  }

  methodIncludes(){ //Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
     console.log(this.array.includes(2));
  }

  methodJoin(){ //Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
     console.log(this.array.join(''));
     console.log(this.array.join('-'));
  }

  methodReduce(){ //Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
   //https://www.youtube.com/watch?v=VVySn87s8Eo
  }

  methodIndexOf(){ //Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
   const resultArray = this.array.indexOf(7)
   console.log(resultArray);
  }

  methodFindIndex(){ //Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
     const resultArray = this.array.findIndex(element => element == 3);
     console.log(resultArray);
     
  }

  methodFill(){ //Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.
   console.log(this.array.fill(666,1));
  }
  
  methodPush(){ //Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
     console.log(this.array.push(569));
     console.log(this.array);
     
  }

  methodPop(){ //Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
      console.log(this.array);
      console.log(this.array.pop());
      console.log(this.array);  
  }

  methodShift(){ // Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
      console.log(this.array);
       console.log(this.array.shift());
       console.log(this.array);
       
  }

  methodUnShift(){ // Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
   console.log(this.array);
    console.log(this.array.unshift(45));
    console.log(this.array);
    
  }

  methodSlice(){//Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
   console.log(this.array);
   const resultArray = this.array.slice(1,4);
   console.log(resultArray);
  }

  methodReverse(){ //Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
    console.log(this.array.reverse());
  }

  methodSplice(){ //Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    let array = ['a','b','c','d']
    const arrayResult = array.splice(0,1);
    console.log(arrayResult);
  }

}
