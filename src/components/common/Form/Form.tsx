'use client';

import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';
import CircleIcon from '/public/icons/circle.svg';

import { IFormState } from '@/@types';
import AnimationContainer from '@/components/common/AnimationContainer';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
import { form } from '@/data';
import { formSchema } from '@/utils';
import { sendingEmail } from '@/utils';

const FormModal = dynamic(() => import('@/components/ui/FormModal'));

const Form = () => {
  const {
    formProps: { inputs, textarea, checkbox },
    successMessage,
    errorMessage,
    modalButtonText,
  } = form;

  const [modalOpen, setModalOpen] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm<IFormState>({ resolver: yupResolver(formSchema) });

  useFormPersist('formData', {
    watch,
    setValue,
    exclude: ['privacyPolicy'],
  });

  const onSubmit = async (data: IFormState) => {
    setSendError(false);
    const sanitizedData = {
      ...data,
      name: data.name.trim(),
      phone: data.phone.replace(/[\s()-]/g, ''),
      email: data.email.trim(),
      message: data.message ? data.message.trim() : '',
    };
    try {
      setIsSending(true);
      await sendingEmail(sanitizedData);
      reset();
    } catch (error) {
      setSendError(true);
    } finally {
      setModalOpen(true);
      setIsSending(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto flex w-full flex-col gap-12 md:w-[624px]'
      >
        {inputs.map(({ name, placeholder, type, label }, index) => {
          return (
            <FormInput
              key={index}
              label={label}
              type={type}
              placeholder={placeholder}
              {...register(name as keyof IFormState)}
              errorMessage={errors[name as keyof IFormState]?.message}
            />
          );
        })}
        <AnimationContainer className='xl:[--x-hidden:80px]'>
          <FormTextArea
            label={textarea.label}
            placeholder={textarea.placeholder}
            {...register(textarea.name as keyof IFormState)}
            errorMessage={errors[textarea.name as keyof IFormState]?.message}
          />
        </AnimationContainer>

        <AnimationContainer className='xl:[--x-hidden:80px]'>
          <Controller
            name={checkbox.name as keyof IFormState}
            control={control}
            render={({ field }) => (
              <Checkbox
                label={checkbox.label}
                checked={!!field.value}
                onChange={field.onChange}
                errorMessage={
                  errors[checkbox.name as keyof IFormState]?.message
                }
              />
            )}
          />
        </AnimationContainer>

        <AnimationContainer className='xl:[--x-hidden:80px]'>
          <Button
            variant='main'
            type='submit'
            iconPosition='after'
            className='md:max-w-[286px]'
            disabled={isSending}
            icon={
              isSending ? (
                <CircleIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 animate-spin'
                />
              ) : (
                <ArrowRightDownIcon
                  width={24}
                  height={24}
                  className='h-6 w-6'
                />
              )
            }
          >
            {form.buttonText}
          </Button>
        </AnimationContainer>
      </form>
      <FormModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title={sendError ? errorMessage.title : successMessage.title}
        text={sendError ? errorMessage.text : successMessage.text}
        buttonText={modalButtonText}
        error={sendError}
      />
    </>
  );
};

export default Form;
