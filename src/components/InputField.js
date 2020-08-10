import React from 'react';
import '../sass/components/InputField.scss';

const InputField = (props) => {
  const { name, label, type } = props;

  const renderTextInput = () => {
    const { value, id } = props;
    return (
    // conditionally add has-value class if value is not empty str
      <div id={id} className={`input-field ${value !== '' && 'has-value'}`}>
        <label htmlFor={name}>{label || 'Input'}</label>
        <input
          type={type || 'text'}
          name={name}
          value={value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    );
  };

  const renderNumInput = () => {
    const { value, id } = props;
    return (
      <div id={id} className={`input-field ${value !== 0 && 'has-value'}`}>
        <label htmlFor={name}>{label || 'Input'}</label>
        <input
          type={type || 'text'}
          name={name}
          value={value !== 0 && value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    );
  };

  // Renders different input based on props.type
  switch (type) {
    case 'text':
      return renderTextInput();
    case 'number':
      return renderNumInput();
    default:
      return <></>;
  }
};

export default InputField;
