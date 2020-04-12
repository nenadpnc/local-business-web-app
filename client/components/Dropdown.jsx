import React from 'react';

function Dropdown ({title, selectedItem = {}, options = [], onItemChange}) {
  const onSelect = (id) => {
    const selectedItem = options.find((item) => item.id === id);
    onItemChange(selectedItem);
  }

  return (
    <div class="select">
      <label class="select__label" for="select">{title}</label>
      <div class="select__wrapper">
        <select
          class="select__element"
          name="select"
          id="select"
          onChange={(e) => onSelect(e.target.value)}
          value={selectedItem.id || '-1'}>
          {[{id: '-1', name: 'Choose an option'}, ...options].map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
