# Tip Calculator | React + TS + Tailwind
* Live project: [Click-here!](https://tip-calculator-one-tan.vercel.app/)

This project was a challenge from [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/).

### How the project works
It basically gets the value from a number input and calculates the tip based on the percentage picked in the select input. After that, it calculates the tip and adds it to the final bill value.

### What i've did
* Created 3 global states: 
* * billValue - original value of the bill
* * myService - the percentage i want to tip
* * friendService - the percentage the other person wants to tip in case you're with someone

* Divided the layout into 3 components:
* * InputSection -  A component that receives as prop the following and returns the input based on the inputType prop:
```typescript
interface InputSectionProps {
    labelText: string
    nameForLabel: string
    inputType: string
    valueState: number
    onChangeHandler: (value: number) => void
    options?: SelectOptionObj[]
}
```
and it also has 2 child-components which are NumberInput and SelectInput, so the code its a bit more cleaner
* * FinalPriceDisplay - A component that does the math with the value of the states received through props, so it displays the bills final value, the original bill value and the tip value
* * ResetButton - A component that simply receives a function to reset the whole App when clicked

# Calculadora de Gorjeta | React + TS + Tailwind
* Projeto ao vivo: (Clique-aqui!)(https://tip-calculator-one-tan.vercel.app/)

Este projeto foi um desafio do [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/).

### Como o projeto funciona
Basicamente, ele obtém o valor de um input de número e calcula a gorjeta com base na porcentagem escolhida no input de select. Em seguida, calcula a gorjeta e adiciona ao valor final da conta.

### O que eu fiz
* Criei 3 states globais: 
* * billValue - valor original da conta
* * myService - a porcentagem que eu quero dar de gorjeta
* * friendService - a porcentagem que a outra pessoa quer dar de gorjeta, caso esteja com alguém

* Dividi o layout em 3 componentes:
* * InputSection -  Um componente que recebe como prop o seguinte e retorna a entrada com base na prop inputType:
```typescript
interface InputSectionProps {
    labelText: string
    nameForLabel: string
    inputType: string
    valueState: number
    onChangeHandler: (value: number) => void
    options?: SelectOptionObj[]
}
```
e também possui 2 componentes filhos, que são NumberInput e SelectInput, tornando o código um pouco mais limpo.
* * FinalPriceDisplay - Um componente que faz as contas matemáticas com o valor dos sates recebidos através das props, exibindo o valor final da conta, o valor original da conta e o valor da gorjeta.
* * ResetButton - Um componente que simplesmente recebe uma função para reiniciar todo o App quando clicado.