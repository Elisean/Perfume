import React, { useState } from "react";
import { validateForm } from "../Utils/validators";


export const useForm = (initialState : {}) =>{
  // Состояние формы, хранит значения полей
  const [formData, setFormData] = useState(initialState);
  

  // Состояние для отслеживания ошибок валидации
  const [errors, setErrors] = useState({});


  // Обработчик при смене данных на элементе формы
  const handleChange = (e : any) => {
    // Извлекаем имя поля и его новое значение из события
    const { name, value } : { name : string; value : string} = e.target;

    setFormData({
      ...formData,
      [name]: value, // Обновляем значение поля в state формы
    });

    // Обновляем состояние формы для текущего поля
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Валидируем только текущее поле
    const validationErrors = {
      ...errors,
      [name]: validateForm({ [name]: value })[name],
    };

    // Обновляем состояние ошибок
    setErrors(validationErrors);
  };

  // Обработчик при отправке данных
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Проверка наличия пустых полей
    const isEmptyField = Object.values(formData).some(
      (value:any) => value.trim()  === ""
    );

    if (isEmptyField) {
      console.log("Все поля обязательны к заполнению");
    } else {
      // Данные формы не содержат пустых полей, выполняем отправку
      console.log("Отправленные данные:", formData);
      // Очистить форму
      resetForm();
    }
  };

  /**
   * Функция для сброса состояния формы.
   */
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}


