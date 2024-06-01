'use client';

import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import ArrowRightDownIcon from '@/../public/icons/arrow-right_up.svg';
import Checkbox from '@/components/ui/Checkbox';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
import form from '@/data/form.json';
import { schema } from '@/utils/schema';

import Button from '../Button';
import FormModal from '../FormModal/FormModal';

import { formDataType } from './Form.types';

const Form = () => {
  const {
    formProps: { inputs, textarea, checkbox },
    successMessage,
    errorMessage,
    modalButtonText,
  } = form;

  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm<formDataType>({ resolver: yupResolver(schema) });

  useFormPersist('formData', {
    watch,
    setValue,
    exclude: ['privacyPolicy'],
  });

  const onSubmit = async (data: formDataType) => {
    try {
      console.log(data);
      reset();
      setOpenSuccessModal(true);
    } catch (error) {
      setOpenErrorModal(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-12 xl:w-1/2'
      >
        {inputs.map(({ name, placeholder, type, label }, index) => {
          return (
            <FormInput
              key={index}
              label={label}
              type={type}
              placeholder={placeholder}
              {...register(name as keyof formDataType)}
              errorMessage={errors[name as keyof formDataType]?.message}
            />
          );
        })}
        <FormTextArea
          label={textarea.label}
          placeholder={textarea.placeholder}
          {...register(textarea.name as keyof formDataType)}
          errorMessage={errors[textarea.name as keyof formDataType]?.message}
        />
        <Controller
          name={checkbox.name as keyof formDataType}
          control={control}
          render={({ field }) => (
            <Checkbox
              label={checkbox.label}
              checked={!!field.value}
              onChange={field.onChange}
              errorMessage={
                errors[checkbox.name as keyof formDataType]?.message
              }
            />
          )}
        />
        <Button
          variant='main'
          type='submit'
          iconPosition='after'
          className='md:max-w-[286px]'
          icon={
            <ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />
          }
        >
          {form.buttonText}
        </Button>
      </form>
      <FormModal
        open={openSuccessModal}
        handleClose={() => setOpenSuccessModal(false)}
        title={successMessage.title}
        text={successMessage.text}
        buttonText={modalButtonText}
      />
      <FormModal
        open={openErrorModal}
        handleClose={() => setOpenErrorModal(false)}
        title={errorMessage.title}
        text={errorMessage.text}
        buttonText={modalButtonText}
        error={true}
      />
    </>
  );
};

export default Form;
