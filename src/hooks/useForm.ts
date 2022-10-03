import { useEffect, useState } from 'react';
import { formValues } from '../interfaces/formValues';


export const useForm = (initialForm: formValues = {} ) => {

    const [formState, setFormState] = useState( initialForm ); 
    const [ isErrorState, setIsErrorState ] = useState( false );
    const { body, username, title } = formState;
    const [ isDisabled, setIsDisabled ] = useState( true );


    const setFormData = () => {
        setFormState(initialForm);
    }

    const onHandleChange = (target: HTMLInputElement | HTMLTextAreaElement) => {
        const { name, value } = target;
        setFormState(
            {
                ...formState,
                [name]: value
            }
        )
    };

    const toggleForm = (event: React.FormEvent) => {
        event.preventDefault();
        setIsDisabled( !isDisabled );
    }

    const resetData = ( event?: React.FormEvent ) => {
        event?.preventDefault();
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
    setFormData,
    onHandleChange,
    resetData,
    isErrorState,
    sendData,
    toggleForm,
    isDisabled
  }
}