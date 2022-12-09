import React from 'react';

const FormRowSelect = ({name, value, options, handleChange, labelText}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className={'form-label'}>
                {labelText || name}
            </label>
            <select name={name} id={name}
                    value={value}
                    onChange={handleChange}
                    className={'form-select'}
            >
                {
                    options.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>
        </div>
    );
};

export default FormRowSelect;