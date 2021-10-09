import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputType } from '../../../lib/types/input';
import { InputContainer, StyledInput } from './styles';

export const Input: FC<InputType> = ({
  control,
  defaultValue,
  errors,
  label,
  maxLength,
  name,
  type,
  placeholder,
  rules,
  width,
  ...rest
}) => (
  <InputContainer width={width}>
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field: { name: names, onChange, onBlur, ref } }) => (
        <>
          <span style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor={name}>{label}</label>
          </span>
          <StyledInput
            invalid={!!errors[name]}
            id={name}
            maxLength={maxLength}
            name={names}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...rest}
          />
        </>
      )}
      rules={rules}
    />
  </InputContainer>
);
