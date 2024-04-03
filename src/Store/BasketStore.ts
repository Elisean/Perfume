import { action, makeAutoObservable, observable } from "mobx";
import { createContext } from "react";


class BasketStore {

    @observable cardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]')  
    
  
   
    constructor(){
        makeAutoObservable(this)
    }
    @action getCardsData(card:any){
        this.cardsData = card;
    }    
    
    @action deleteCard(id:string){ // прилетает индекс нужного элемента
      const findObject = this.cardsData.find((obj:{ volume:number, id:string, price:number })=> obj.id === id) // поиск нужного элемента
      this.cardsData.splice(this.cardsData.indexOf(findObject), 1) // удаление нужного элемента
   
    if(findObject){
        localStorage.removeItem(findObject.id) //удаляем элемент по id 
        localStorage.setItem("basketProduct", JSON.stringify(this.cardsData)) // фиксируем изменение 
    }
    }

    @action decrease(id:string){ // прилетает индекс нужного элемента
        const priceCardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]')  // Неизменяемый price
        const findObject = this.cardsData.find((obj:{ volume:number, id:string, price:number })=> obj.id === id) // поиск нужного элемента
        findObject.volume--; // функция уменьшения
        if(findObject.volume <= 0){ // если меньше 0 присвой к переменной 1
            findObject.volume = 1
        }

        const priceFind = priceCardsData.find((obj:{ volume:number, id:string, price:number })=> obj.id === id) // изменяемый price
        const newNum = Number.parseInt(findObject.price) - Number.parseInt(priceFind.price);  // вычитание 
        findObject.price = newNum // присвоение нового значения

        if(findObject.price <= 0){  // если <= нуля 
            findObject.price = Number.parseInt(priceFind.price) // то присвой изменяемому price неизменяемый price
        }
        
    }
    @action increase(id:string){ // прилетает индекс нужного элемента

        const priceCardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]') // Неизменяемый price

        const findObject = this.cardsData.find((obj:{ volume:number, id:string, price:number })=> obj.id === id) // поиск нужного элемента
        findObject.volume++; // функция добавления
        if(findObject.volume >= 100){ // если больше 100 присвой к переменной 100
            findObject.volume = 100
        }

        const priceFind = priceCardsData.find((obj:{ volume:number, id:string, price:number })=> obj.id === id) // изменяемый price
        const newNum = Number.parseInt(findObject.price) + Number.parseInt(priceFind.price);  // сложение  
        findObject.price = newNum // присвоение нового значения
     
    }   
}

export default createContext(new BasketStore()) 

