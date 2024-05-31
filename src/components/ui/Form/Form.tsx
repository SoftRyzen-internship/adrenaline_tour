import Checkbox from '@/components/ui/Checkbox';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
import form from '@/data/form.json';

const Form = () => {
  const {
    formProps: { inputs, textarea, checkbox },
  } = form;

  return (
    <>
      <form className='flex w-full flex-col gap-12 xl:w-1/2'>
        {inputs.map(({ name, placeholder, type, label, required }, index) => {
          return (
            <FormInput
              key={index}
              label={label}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
            />
          );
        })}
        <FormTextArea
          label={textarea.label}
          name={textarea.name}
          placeholder={textarea.placeholder}
        />
        <Checkbox name={checkbox.name} label={checkbox.label} />
      </form>
    </>
  );
};

export default Form;
