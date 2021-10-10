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
  isOpen,
  toggle,
  ...rest
}) => (
  <DropdownContainer width={width}>
    <Controller
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange } }) => (
        <StyledDropdown
          id={name}
          // onChange={(e, { _, value }) => onChange(value)}
          {...rest}
          isOpen={isOpen}
          toggle={toggle}
        >
          <DropdownToggle caret>{placeholder}</DropdownToggle>
          <DropdownMenu>
            {options.map((option) => (
              <DropdownItem key={option.value} value={option.value}>
                {option.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </StyledDropdown>
      )}
      name={name}
    />
  </DropdownContainer>
);
