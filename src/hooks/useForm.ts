import { useState } from 'react';
import { formValues } from '../interfaces/formValues';
export const useForm = (initialForm: formValues = {} ) => {

    const [formState, setFormState] = useState( initialForm ); 
    const [ isErrorState, setIsErrorState ] = useState( false );

    const { body, username, title } = formState;

    const onHandleChange = (target: HTMLInputElement | HTMLTextAreaElement) => {
        const { name, value } = target;
        setFormState(
            {
                ...formState,
                [name]: value
            }
        )
    };

    const resetData = ( event: React.FormEvent ) => {
        event.preventDefault();
        setFormState( initialForm );
        setIsErrorState( false );
    };

    const sendData = ( event: React.FormEvent ) => {
        event.preventDefault();
        if( !username ) {
            setIsErrorState( true );
        }else {
            setIsErrorState( false );
        }
    };

  return {
    ...formState,
    onHandleChange,
    resetData,
    isErrorState,
    sendData
  }
}