import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownContainer, StyledDropdown } from './styles';
import { DropdownType } from '../../../lib/types/input';

export const Dropdown: FC<DropdownType> = ({
  control,
  defaultValue,
  errors,
  label,
  name,
  options,
  rules,
  width,
  placeholder,
  ...rest
}) => (
  <DropdownContainer width={width}>
    {/* <label htmlFor={name}>{label}</label> */}
    <Controller
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange } }) => (
        <StyledDropdown
          error={!!errors[name]}
          id={name}
          // onChange={(e, { _, value }) => onChange(value)}
          {...rest}
        >
          <DropdownToggle caret>{placeholder}</DropdownToggle>
          <DropdownMenu>
            {options.map((option) => (
              <DropdownItem value={option.value}>{option.label}</DropdownItem>
            ))}
          </DropdownMenu>
        </StyledDropdown>
      )}
      name={name}
    />
  </DropdownContainer>
);
