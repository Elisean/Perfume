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
    @observable prices: any = []

        constructor(){
            makeAutoObservable(this) 
        }

      // сортировка
         @action priceDescending = (sortMethod: string) => {
          
          console.log(sortMethod)
        // сортировка от того что придет в sortMethod
        switch (sortMethod) {
    
          case 'Цена по возрастанию':
            fetch(
              'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?sortBy=price'
            )
              .then((res) => res.json())
              .then((data) => {
                this.segregatioProducts = data;      
                
              });
            break;
    
          case 'Цена по убыванию':
            fetch(
              'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?sortBy=price&order=desc'
            )
              .then((res) => res.json())
              .then((data) => {
                data.sort((a:any, b:any) => b.price - a.price); // сортируем данные в обратном порядке
                this.segregatioProducts = data;      
              });
            break;
    
            case 'Сортировка от последнего':
            fetch(
              'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
            )
              .then((res) => res.json())
              .then((data) => {
                data.sort((a:any, b:any) => b.id - a.id); // сортируем данные в обратном порядке
                this.segregatioProducts = data;      
              });
            break;
    
            case 'По рейтингу':
                fetch(
                  'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
                )
                  .then((res) => res.json())
                  .then((data) => {
                    this.segregatioProducts = data;      
                  });
            break;
    
            case 'По популярности':
                fetch(
                    'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
                )
                .then((res) => res.json())
                .then((data) => {
                    this.segregatioProducts = data;      
                    });
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
                window.location.reload()
                
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
        }

        @action getPrice = (price:any) =>{
          this.prices = price
             console.log(this.currentProduct)

             this.currentProduct = [...this.currentProduct].filter((product:any) => +this.prices[0] <= +product.price)
             this.currentProduct = [...this.currentProduct].filter((product:any) => +this.prices[1] >= +product.price)
             if(this.currentProduct.length === 0){
              this.currentProduct = [...this.segregatioProducts]
              .filter((product:any) => product.brand === this.brands) // фильтрация товара от бренда
              .filter((product:any) => product.type === this.genders) // фильтрация товара от гендера
             }
        }
      // фильтрация
      
}
// фикс фильтров 
export default createContext(new SegregationStore()) 
