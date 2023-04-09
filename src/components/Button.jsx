import React, { useState } from 'react';
import '../styles/Button.css';

export default function Button(Props) {
  
  return (
    <button
      className='button'
      onClick={() => {
        Props.onClick();
      }}
    >
      {Props.titulo}
    </button>
  );
}
