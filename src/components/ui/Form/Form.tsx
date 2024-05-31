import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import ArrowRightDownIcon from '@/../public/icons/arrow-right_up.svg';
import Checkbox from '@/components/ui/Checkbox';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
import form from '@/data/form.json';
import { schema } from '@/utils/schema';

import Button from '../Button';

import { formDataType } from './Form.types';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<formDataType>({ resolver: yupResolver(schema) });

  const {
    formProps: { inputs, textarea, checkbox },
  } = form;

  const onSubmit = (data: formDataType) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-12 xl:w-1/2'
      >
        {inputs.map(({ name, placeholder, type, label, required }, index) => {
          return (
            <FormInput
              key={index}
              label={label}
              type={type}
              placeholder={placeholder}
              required={required}
              {...register(name as keyof formDataType)}
              errorMessage={errors.name?.message}
            />
          );
        })}
        <FormTextArea
          label={textarea.label}
          placeholder={textarea.placeholder}
          {...register(textarea.name as keyof formDataType)}
          errorMessage={errors.name?.message}
        />
        <Controller
          name={checkbox.name as keyof formDataType}
          control={control}
          render={({ field }) => (
            <Checkbox
              label={checkbox.label}
              checked={!!field.value}
              onChange={field.onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Button
          variant='main'
          type='submit'
          iconPosition='after'
          icon={
            <ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />
          }
        >
          {form.buttonText}
        </Button>
      </form>
    </>
  );
};

export default Form;
