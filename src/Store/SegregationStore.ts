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
      // когда происходит открытие фильтрации подрузи все данные из массива с товарами
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
            if(this.genders !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
                this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.notes !== ''){ // если переменная не пустая то фильтруй по notes то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.note === this.notes)
            }
            if(this.genders !== '' && this.brands !== ''){ // если переменные не пустые то фильтруй по brads то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.brand === this.brands)
            }
            if(this.genders !== '' && this.price !== 500){ // если переменные не пустые то фильтруй по brands то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.brand === this.brands)
            }
        } 
    
        @action getGender = (gender:string) =>{
         this.genders = gender // присваивай к глобальной переменной локальную переменную
          if(this.brands === ''){ // если в то время как переменная brands пустая в переменную gender приходит значение
            this.currentProduct = this.segregatioProducts.filter((product:any) => product.type === this.genders) // фильтруй по переменной gender
          }else{
            this.currentCategory = [...this.currentProduct].filter((product:any) => product.type === this.genders) // если переменная brand не пустая то присвой данные из актуального массива в промежуточный массив
            this.currentProduct = [...this.currentCategory] // так же уже отфильтрованный промежуточный массив присвой в актуальный массив
             if(this.currentProduct.length === 0){ // если актуальный массив равен нулю
                this.currentProduct = [...this.segregatioProducts] // то присвой к актуальному массиву массив со всеми товарами
                .filter((product:any) => product.brand === this.brands) // фильтрация товара от бренда
                .filter((product:any) => product.type === this.genders) // фильтрация товара от гендера
             }
          }
          if(this.notes !== ''){ // если переменная не пустая
            this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders) // то присвой к актуальному массиву, отфильтрованный актуальный массив
          }
        
          if(this.brands !== '' && this.notes !== ''){ // если переменные не пустая
            this.currentCategory = [...this.currentProduct].filter((product:any) => product.type === this.genders) // то отфильтруй актуальный масси в и присвой его в промежуточный 
            this.currentProduct = [...this.currentCategory] // так же присвой промежуточный массив в актуальный
          }
          if(this.brands !== '' && this.notes !== '' && this.price !== 500){ // если переменные не пустые
            this.currentCategory = [...this.currentProduct].filter((product:any) => product.type === this.genders) // к промежуточному массиву присвой актуальный отфильтрованный
            this.currentProduct = [...this.currentCategory] // к актуальному массиву присвой промежуточный
          }
        }
        @action getNotes = (notes:string) =>{
            this.notes = notes // присваивай к глобальной переменной локальную переменную

            if(this.segregatioProducts.length !== 0){ // если в массиве что то есть то запускай фильтрацию
              this.currentProduct = [...this.segregatioProducts].filter((product:any) => product.note === this.notes) // фильтрация товара от бренда
           
            }else{
              this.segregatioProducts = [] // если массив пустой то присваивай пустой массив
            }
            if(this.brands !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.brand === this.brands)
            }
            if(this.genders !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.genders !== '' && this.brands !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.genders !== '' && this.brands !== '' && this.price !== 500){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
        }

        @action getPrice = (price: number) => {
            this.price = price; 
            if(this.segregatioProducts.length !== 0){ // если в массиве что то есть запускай фильтрацию
              this.currentProduct = [...this.segregatioProducts].sort((a:any, b:any) => a.price - b.price) 
              .filter((product:any) => product.price > +this.price) // присваиваем общий отсортированый массив к актуальному массиву
            }else{
              this.segregatioProducts = [] // если массив пустой то присваивай пустой массив
            }
            if(this.brands !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.brand === this.brands)
            }
            if(this.genders !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.type === this.genders)
            }
            if(this.notes !== ''){ // если переменная не пустая то фильтруй по type то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].filter((product:any) => product.note === this.notes)
            }
            if(this.brands !== '' && this.notes !== ''){ 
              this.currentProduct = [...this.currentProduct].sort((a:any, b:any) => a.price - b.price)
              .filter((product:any) => product.price > +this.price)
            }
            if(this.genders !== '' && this.price === 500){ // если переменные не пустые то фильтруй по price то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].sort((a:any, b:any) => a.price - b.price)
              .filter((product:any) => product.price > +this.price)
            }
            if(this.genders !== '' && this.brands !== ''){ // если переменные не пустые то фильтруй по price то что находится в массиве на данный момент 
              this.currentProduct = [...this.currentProduct].sort((a:any, b:any) => a.price - b.price)
              .filter((product:any) => product.price > +this.price)
            }
           
        }
      // фильтрация
}
// фикс фильтров 
export default createContext(new SegregationStore()) // експортируем контекст из стора
