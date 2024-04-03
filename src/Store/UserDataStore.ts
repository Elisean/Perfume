import { action, makeAutoObservable, observable } from "mobx";

export class UserData{

    

    @observable countryletter:string = "" // отдельный символ в строке 
    @observable countries:[] = [] // массив стран
    @observable isDisabled:boolean = true // предикат на разблокирование input
    @observable isOpenChange:boolean = false // предикат на открытие select у input
    @observable countryId = [] // id конкретной страны

    @observable areaLetter:string = "" // отдельный символ в строке 
    @observable areas:[] = [] // массив областей
    @observable isOpenChangeArea:boolean = false // предикат на открытие select у input
    @observable areaId = [] // id конкретной области

    @observable cityLetter:string = "" // отдельный символ в строке 
    @observable cities:[] = [] // массив областей
    @observable isOpenChangeCity:boolean = false // предикат на открытие select у input
    @observable cityId = [] // id конкретной области

    
    constructor(){
        makeAutoObservable(this)
    }
    
    //  получение буквы страны пользователя
    @action openAllCountries = (letterCountry:any) => {
        this.countryletter = letterCountry
        fetch(`https://api.hh.ru/areas/countries/`)
             .then((res) => res.json())
             .then((countriesData) => {
                this.countries = countriesData.filter((country:any)=>{
                    return(
                        country.name &&
                        country.name.toLowerCase().includes(letterCountry)
                    )    
                });       
                this.isOpenChange = true           
                this.isDisabled = false
          
        });
    
    }
    @action insertUserCountry = (country:any) =>{
        this.countryletter = country
        this.isOpenChange = false    
        this.isDisabled = false

        this.countries?.filter((countryName:any)=>{
            return countryName.name === country 
        }).filter((selectedCountry:any) => {
            this.countryId = selectedCountry.id
        })
    }
    @action openAllAreas = (lettersArea:any) =>{
        this.areaLetter = lettersArea
        fetch(`https://api.hh.ru/areas/${this.countryId}/`)
        .then((res) => res.json())
        .then((areasData) => {
            
            this.areas = areasData.areas.filter((area:any)=>{
                return(
                    area.name &&
                    area.name.toLowerCase().includes(lettersArea)
                )  
            })
            
            this.isOpenChangeArea = true   
        });
        

    }
    @action insertUserArea = (area:any) =>{
        this.areaLetter = area
        this.isOpenChangeArea = false 

        this.areas?.filter((areaName:any)=>{
            return areaName.name === area 
        }).filter((selectedCountry:any) => {
            this.areaId = selectedCountry.id
        })

    }
    @action openAllCities = (lettersCity:any) =>{
        this.cityLetter = lettersCity
     
        fetch(`https://api.hh.ru/areas/${this.areaId}/`)
        .then((res) => res.json())
        .then((citiesData) => {
           
            this.cities = citiesData.areas.filter((city:any)=>{
                return(
                    city.name &&
                    city.name.toLowerCase().includes(lettersCity)
                )  
            })
            
            this.isOpenChangeCity = true   
        });
    
    }
    @action insertUserCity = (city:any) =>{
        this.cityLetter = city
        this.isOpenChangeCity = false 
    }

} 

