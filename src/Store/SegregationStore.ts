import { action, makeAutoObservable, observable } from "mobx";

import { createContext } from "react";


class SegregationStore {
    @observable segregatioProducts:any = [] // массив всех товаров
    @observable currentCategory: any = [] // массив для промежуточных данных
    @observable currentProduct: any = [] // массив с активным параметром фильтрации
    @observable isLoading:boolean = true // предикат для проверки прогрузки карточек
    @observable isFilters:boolean = false // предикат для смены состояния catalogLayout
    @observable isNotProduct: boolean = false // предикат для отображения оповещения если продукт не найден
    @observable brands: string = '' // глобальная переменная brands
    @observable genders: string = '' // глобальная переменная genders
    @observable notes: string = '' // глобальная переменная notes
    @observable price: number = 500

        constructor(){
            makeAutoObservable(this) 
        }

      // сортировка
         @action priceDescending = async (sortMethod: string) => {
          
        // сортировка от того что придет в sortMethod
        switch (sortMethod) {
    
          case 'Цена по возрастанию':
           await fetch( 
              'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?' // получаем все товары
            )
              .then((res) => res.json()) // переводим ответ в объект json
              .then((data) => { // получаем объект json
                this.segregatioProducts = data; // отправляем товары в массив
              });
           
              this.segregatioProducts = this.segregatioProducts.sort((a:any, b:any) => a.price - b.price); // отправляем в массив отсортированные товары от меньшего к большему
              this.currentProduct = this.segregatioProducts // присваиваем отсортированный мсассив
            break;
    
          case 'Цена по убыванию':
            await fetch(
              'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?' // получаем все товары
            )
              .then((res) => res.json()) // переводим ответ в объект json
              .then((data) => { // получаем объект json
                this.segregatioProducts = data; // отправляем товары в массив  
              });

            this.currentProduct = this.segregatioProducts.sort((a:any, b:any) => b.price - a.price); // отправляем в массив отсортированные товары от большего к меньшему
            this.segregatioProducts = [...this.currentProduct]; // присваиваем к отсортированный массив к массиву что отображается на данный момент 
            break;
    
            case 'Сортировка от последнего':
              await fetch(
                'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
              )
                .then((res) => res.json()) // получаем все товары
                .then((data) => { // переводим ответ в объект json
                  this.segregatioProducts = data; // отправляем товары в массив  
                });
              this.currentProduct = this.segregatioProducts.sort((a:any, b:any) => b.id - a.id); // отправляем в массив отсортированные товары в обратном порядке
              this.segregatioProducts = [...this.currentProduct]; // присваиваем к отсортированный массив к массиву что отображается на данный момент 
            break;
    
            case 'По рейтингу':
              await fetch(
                'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
              )
                .then((res) => res.json()) // получаем все товары
                .then((data) => { // переводим ответ в объект json
                  this.segregatioProducts = data; // отправляем товары в массив  
                });
                this.currentProduct = this.segregatioProducts.sort((a:any, b:any) => a.title.length - b.title.length); // отправляем в массив отсортированные товары по размеру title
                this.segregatioProducts = [...this.currentProduct]; // присваиваем к отсортированный массив к массиву что отображается на данный момент 
          
            break;
    
            case 'По популярности':
              await fetch(
                'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
              )
                .then((res) => res.json()) // получаем все товары
                .then((data) => { // переводим ответ в объект json
                  this.segregatioProducts = data; // отправляем товары в массив  
                });
              this.currentProduct = this.segregatioProducts.sort((a:any, b:any) => a.id - b.id); // стандартное значение 
              this.segregatioProducts = [...this.currentProduct]; // присваиваем к отсортированный массив к массиву что отображается на данный момент 
            break;
        }
          // сортировка от того что придет в sortMethod
        };
      // сортировка

      // фильтрация
        @action setFilters = (filters:boolean) =>{
            this.isFilters = filters;
      
            if(this.isFilters){
                fetch(
                    'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      this.segregatioProducts = data;      
                      this.currentProduct = [...this.segregatioProducts]
                    });
            }else{
                this.segregatioProducts = []            
            }
               
        }
        
        @action getBrands = (brand:string) =>{
            this.brands = brand // присваивай к глобальной переменной локальную переменную
            if(this.segregatioProducts.length !== 0){ // если в массиве что то есть то запускай фильтрацию
                this.currentProduct = [...this.segregatioProducts].filter((product:any) => product.brand === this.brands) // фильтрация товара от бренда
            }else{
                this.segregatioProducts = [] // если массив пустой то присваивай пустой массив
            }
            if(this.genders !== ''){
                this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.notes !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.note === this.notes)
            }
        } 
    
        @action getGender = (gender:string) =>{
         this.genders = gender // присваивай к глобальной переменной локальную переменную
          if(this.brands === ''){
            this.currentProduct = this.segregatioProducts.filter((product:any) => product.type === this.genders)
          }else{
            this.currentCategory = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            this.currentProduct = [...this.currentCategory]
             if(this.currentProduct.length === 0){
                this.currentProduct = [...this.segregatioProducts]
                .filter((product:any) => product.brand === this.brands) // фильтрация товара от бренда
                .filter((product:any) => product.type === this.genders) // фильтрация товара от гендера
             }
          }
          if(this.notes !== ''){
            this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
          }
        
          if(this.brands !== '' && this.notes !== ''){
            this.currentCategory = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            this.currentProduct = [...this.currentCategory]
          }
          if(this.brands !== '' && this.notes !== '' && this.price !== 500){
            this.currentCategory = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            this.currentProduct = [...this.currentCategory]
          }
        }
        @action getNotes = (notes:string) =>{
            this.notes = notes // присваивай к глобальной переменной локальную переменную

            if(this.segregatioProducts.length !== 0){ // если в массиве что то есть то запускай фильтрацию
              this.currentProduct = [...this.segregatioProducts].filter((product:any) => product.note === this.notes) // фильтрация товара от бренда
           
            }else{
              this.segregatioProducts = [] // если массив пустой то присваивай пустой массив
            }
            if(this.brands !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.brand === this.brands)
            }
            if(this.genders !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.genders !== '' && this.brands !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.genders !== '' && this.brands !== '' && this.price !== 500){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
        }

        @action getPrice = (price: number) => {
            this.price = price;
            if(this.segregatioProducts.length !== 0){
              this.currentProduct = [...this.segregatioProducts].sort((a:any, b:any) => a.price - b.price)
              .filter((product:any) => product.price > +this.price)
            }else{
              this.segregatioProducts = [] // если массив пустой то присваивай пустой массив
            }
            if(this.brands !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.brand === this.brands)
            }
            if(this.genders !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.notes !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.note === this.notes)
            }
            if(this.brands !== '' && this.notes !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.price === this.price)
            }
            if(this.genders !== '' && this.brands !== ''){
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.price === this.price)
            }
        }
      // фильтрация
   
}
// фикс фильтров 
export default createContext(new SegregationStore()) 
