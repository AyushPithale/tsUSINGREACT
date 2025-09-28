import React, { useRef } from 'react'

export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todotextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todotextInputRef.current?.value;


        if (!enteredText || enteredText.trim().length === 0) {
            // throw an error
            return;
        }


        props.onAddTodo(enteredText)
        console.log(enteredText)


    }


    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>
                Todo text
            </label>
            <input type="text" ref={todotextInputRef} />
            <button type="submit">Add Todo</button>
        </form>
    )
}
