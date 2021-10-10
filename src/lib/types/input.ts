import { FieldErrors, FieldValues, RegisterOptions } from 'react-hook-form';
import { InputType as Type } from 'reactstrap/es/Input';

// eslint-disable-next-line no-unused-vars
export type InputType<TFieldValues extends FieldValues = FieldValues> = {
  name: string;
  type: Type;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  control: any;
  errors: FieldErrors<FieldValues>;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  maxLength?: number;
  width?: string;
  [k: string]:
    | string
    | boolean
    | undefined
    | number
    | any
    | FieldErrors<FieldValues>;
};

export type OptionsType = {
  value: string;
  label: string;
};

export type DropdownType = Omit<InputType, 'type' | 'control'> & {
  width?: string;
  control: any;
  options: OptionsType[];
};
