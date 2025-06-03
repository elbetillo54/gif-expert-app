import React, { useState } from 'react'

function AddCategory({ onNewValue }) {

    const [word, setWord] = useState('');

    const onInputChange = (e) => {
        const { value } = e.target;
        setWord(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (word.trim().length <= 1) {
            return;
        }
        onNewValue(word.trim());
        setWord('');
        //setCategories([...categories, word])
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={word}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory;