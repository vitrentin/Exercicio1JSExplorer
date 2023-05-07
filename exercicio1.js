/*
Bora praticar e rever tudo o que foi ensinado na aula? *💜*
Nesse desafio, você irá solicitar ao usuário que ele insira *dois números* e, a partir daí, calcular:

- [✓]  A soma dos dois números;
- [✓]  A subtração dos dois números;
- [✓]  A multiplicação dos dois números;
- [✓]  A divisão dos dois números;
- [✓]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [✓]  Verifique se a soma dos dois números é par ~(ou ímpar)~;
- [✓]  Verifique se os dois números inseridos são iguais ~(ou diferentes)~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/
alert('Digite dois números a seguir')
let number1 = Number(prompt('Digite o primeiro número: '))
let number2 = Number(prompt('Digite o segundo número: '))
let soma = number1 + number2
alert(`A soma dos dois números é: ${soma}`)
let sub = number1 - number2
alert(`A subtração dos dois números é: ${sub}`)
let multi = number1 * number2
alert(`A multiplicação dos dois números é: ${multi}`)
let div = number1 / number2
alert(`A divisão dos dois números é: ${div}`)
let rest = number1 % number2
alert(`O resto da divisão dos dois números é: ${rest}`)
if((number1+number2) % 2 == 0){
  alert(`A soma dois dois números é par: ${number1+number2}`)
}else{
  alert(`A soma dois dois números é impar: ${number1+number2}`)
}
if(number1 == number2){
  alert(`Os dois números inseridos são iguais: ${number1} = ${number2}`)
}else{
  alert(`Os dois números inseridos são diferentes: ${number1} != ${number2}`)
}
