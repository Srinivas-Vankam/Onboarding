import React from 'react';
import './input.scss';

function Input({ value, onChange, type = 'text', placeholder, id,
    label, minLength, maxLength }) {

    return (
        <div className='formInput'>
        {
            label &&
                id === "workspaceURL" ?
                 (  <div className='tabTwoLabel'>
                     <label className='FormInput__label' htmlFor={id}>
                         {label}
                     </label>
                    <span style={{ fontSize: '1rem', marginLeft:'.2rem',
                        color:'var(--color-primary-text-medium)'}}>
                        (optional)
                    </span>
                    </div>
                 ) :
                (
                    <label className='FormInput__label' htmlFor={id}>
                        {label}
                    </label>
                )
        }
        {
            id === "workspaceURL" ?
                <div className='workspaceURL'>
                    <div className='workspaceURL__default'>
                        www.eden.com/
                    </div>
                    <input
                        className='workspaceURL__input'
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        type={type}
                        id={id}
                        minLength={minLength}
                        maxLength={maxLength}
                        autoComplete='off'
                    />
                </div> 
            :
                <input
                    className='FormInput__input'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    type={type}
                    id={id}
                    minLength={minLength}
                    maxLength={maxLength}
                    required
                    autoComplete='off'
                />
        }
         </div>
    );
};


export default Input;