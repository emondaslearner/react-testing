import React from "react";

// components
import {
  Dropdown as DropDowns,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const Dropdown = ({ variant, openButton, items, openButtonClass }) => {
  return (
    <DropDowns >
      <DropdownTrigger>
        <Button data-testid="dropdown" className={`${openButtonClass}`} variant={variant}>{openButton}</Button>
      </DropdownTrigger>
      <DropdownMenu data-testid="dropdown-menu" aria-label="Static Actions">
        {items.map((data) => {
          return (
            <DropdownItem key={data.key} className={`${data.key === 'delete' && '!text-danger'}`} onClick={data.onClick}>
              {data.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </DropDowns>
  );
};

Dropdown.prototype = {
  variant: PropTypes.string,
  openButton: PropTypes.node,
  items: PropTypes.array,
};

export default Dropdown;
