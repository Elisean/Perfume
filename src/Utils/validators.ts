
const validators: {[key:string]: any}  = {

  name:  (value : string) => {
    if (!value) return "Field is required";

    const regexText = /^[^!>?<_\-$№#@]+$/;

    if (!regexText.test(value)) return "Text should not contain !>?<_-$№#@ symbols";

    return null;
  },
  surName: (value : string) => {
    if (!value) return "Field is required";

    const regexText = /^[^!>?<_\-$№#@]+$/;

    if (!regexText.test(value)) return "Text should not contain !>?<_-$№#@ symbols";

    return null;
  },

  address: (value : string) => {
    if (!value) return "Field is required";

    const regexText = /^[^!>?<_\-$№#@]+$/;

    if (!regexText.test(value)) return "Text should not contain !>?<_-$№#@ symbols";

    return null;
  },
  locality:(value : string) => {
    if (!value) return "Field is required";

    const regexText = /^[^!>?<_\-$№#@]+$/;

    if (!regexText.test(value)) return "Text should not contain !>?<_-$№#@ symbols";

    return null;
  },

  email: (value : string) => {
    if (!value) return "Field is required";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Invalid email";

    return null;
  },
 
  phone: (value : string) => {
    if (!value) return "Field is required";

    if (!/^\+?[0-9-]+$/.test(value)) return "Invalid phone number";
    if(value.length >= 15) return "Incorrect phone number"
    return null;
  },

  password: (value : string) => {
    if (!value) return "Field is required";

    if (value.length < 8) return "Password must be at least 8 characters long";

    return null;
  },

  number: (value : number) => {
   
    if (!value) return "Field is required";

    if (isNaN(value)) return "Must be a number";
  
    return null;
  },
  
} ;


export function validateForm(formData : {}){
  // Объект для хранения сообщений об ошибках
  const validationErrors: {[key: string]: string} = {};

  // Итерация по каждому полю формы
  Object.entries(formData).forEach(([fieldName, value]) => {

    
    // Получение валидатора для текущего поля
    const validator = validators[fieldName];
    

    // Если валидатор существует, выполняем проверку
    if (validator) {
      // Вызов валидатора для текущего значения поля
      const errorMessage = validator(value, fieldName);

      // Если есть сообщение об ошибке, добавляем его в объект ошибок
      if (errorMessage) {
        validationErrors[fieldName] = errorMessage;
      }
    }
  });

  // Возвращаем объект с сообщениями об ошибках
  return validationErrors;
}

