import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fr } from 'date-fns/locale';

import "react-datepicker/dist/react-datepicker.css";

import Button from '../../components/button';

import { Root, ContainerForm, ItemForm, Select, Input, InputDatePicker, Option, Span, Svg,
      StyledDatePickerGeneral } from './formReservation.styled';

export default function FormReservation () {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Root onSubmit={handleSubmit(onSubmit)}>
      <ContainerForm>
        <ItemForm>
          <Select {...register("numberOfPeople", { required: true })} defaultValue="">
            <Option value="" disabled>Nombre de personnes</Option>
            {[...Array(10).keys()].map((num) => (
              <Option key={num + 1} value={num + 1}>{num + 1} personne{num === 0 ? '' : 's'}</Option>
            ))}
          </Select>
        </ItemForm>
        <ItemForm>
          <StyledDatePickerGeneral>
              <InputDatePicker 
                locale={fr}
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
              />
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></Svg>
          </StyledDatePickerGeneral>
        </ItemForm>
        <ItemForm>
          <Select {...register("timeSlot", { required: true })} defaultValue="">
            <Option value="" disabled>Heure du service</Option>
            <Option value="midi">Midi</Option>
            <Option value="soir">Soir</Option>
          </Select>
          {errors.name && <Span>Ce champ est requis</Span>}
        </ItemForm>
        <ItemForm>
          <Input type="text" {...register("name", { required: true })} placeholder="Nom"/>
          {errors.name && <Span>Ce champ est requis</Span>}
        </ItemForm>
        <ItemForm>
          <Input type="tel" {...register("phoneNumber", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Téléphone"/>
          {errors.phoneNumber && <Span>Le numéro de téléphone doit contenir 10 chiffres</Span>}
        </ItemForm>
        <ItemForm>
          <Input type="email" {...register("email", { required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}, })} placeholder="Email"/>
          {errors.email && <Span>Ce champ est requis</Span>}
        </ItemForm>
      </ContainerForm>
      <Button type="submit">Réserver une table</Button>
    </Root>
  );
};
