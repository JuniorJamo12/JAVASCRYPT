let vector = [1 , 2 , 3 , 4 , 5]
vector.push(3,2.2)
vector.unshift(-1)

// for( i = 0 ; i < vector.length ; i++ ) {
//        console.log( `o numero na posicao ${i} e' ${vector[i]}`)
// }

 for ( let i in vector){
       console.log(`na posicao ${i} tem o valor ${vector[i]}`)
 }
// console.log(`o tamanho do array e de ${vector.length}`) 
// console.log (`o array de forma ordena  fica [ ${vector.sort()} ]`)
 let indice = (vector.indexOf(0))
if (indice == -1){
       console.log(`o valor nao existe no array`)
}  
else{
       console.log(indice)
}