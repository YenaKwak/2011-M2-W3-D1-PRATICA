/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/*

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}


let result1 = crazySum(1, 2);
console.log(result1); 

let result2 = crazySum(3, 3);
console.log(result2);  

*/





/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* 
    function boundary(number){
    return (number >=20 && number <=100  || number === 400);

 }
 
 console.log(boundary(30))

*/






/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* 

function reverseString(words){

//    문자열을 쪼개주세요
   let stringArray = words.split('');

//    쪼갠 문자열을 뒤집어주세요
   let reversedArray = stringArray.reverse();


//    뒤집어지고 쪼개진 문자열을 합쳐주세요
   let reversedString = reversedArray.join('');

//    결과를 출력해주세요
   return reversedString;
}


// epicode라는 문자열
let finalArray = "EPICODE";

let reverseResult = reverseString(finalArray);
console.log(reverseResult);


*/








/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* 

function upperFirst(string) {
// 주어진 문자열을 공백을 기준으로 나눠 배열로 만듦
  let wordsSplit = string.split(' ');

// 배열의 각 단어에 대해 반복
  for (let i = 0; i < wordsSplit.length; i++) {
    // 현재 반복 중인 단어를 가져옴
    let word = wordsSplit[i];

    // 만약 길이가 0보다 크다면, 즉 비어있지않다면.. 첫 글자를 대문자로 변환
    if (word.length > 0) {
    wordsSplit[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

// 각 단어의 첫 글자를 대문자로 변환한 배열을 다시 하나의 문자열로 합침
  let result = wordsSplit.join(' ');

// 최종 결과
  return result;
}

// 테스트를 위한 문자열
let thisString = "this is an example.";

// 함수를 호출하여 각 단어의 첫 글자를 대문자로 변환한 문자열을 얻음
let resultString = upperFirst(thisString);

// 결과를 콘솔에 출력
console.log(resultString);


*/










/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* 
function giveMeRandom(n){
   let randomArray = [];

// n번반복하는 반복문
for (let i = 0; i < n; i++){
 let randomNumber = Math.floor(Math.random() * 11);
        // Math.random()은 0 이상 1 미만의 난수를 생성
        // Math.random()에 11을 곱하면 0 이상 11 미만의 난수를 생성 그러면 0 부터 10
        // Math.floor()를 사용하여 소수점 이하 버림

   randomArray.push(randomNumber);
}

return randomArray;
}



let randomNumber = giveMeRandom(10);
console.log(randomNumber);
*/








//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1,  l2) e calcola l'area del rettangolo associato.
/* 

function area(l1, l2) {
// area의 넓이계산 길이*폭
let result = l1 * l2;

  return result;
}

// 길이와 폭 값 넣고 *계산
let length = 5;
let width = 10;
let result = area(length, width);


console.log("The area of the rectangle is " + result);
*/





/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(number) {
// 주어진 숫자와 19 사이의 절대 차이를 계산하고 그 값을 'difference'에 저장
let difference = Math.abs(number - 19);

// 계산된 차이가 19보다 큰지 확인
if (difference > 19) {

//차이가 19보다 크다면, 차이를 3으로 곱하여 업데이트
difference *= 3;
}

// 최종 결과인 차이를 반환
return difference;
}

//함수 호출하면서 숫자 25를 인자로 전달하고 결과를 'result'에 저장
let result = crazyDiff(25);

//  출력
console.log(result);  // 출력: 18 (차이는 6이므로 19보다 작아서 6 그대로 반환)

*/















/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
