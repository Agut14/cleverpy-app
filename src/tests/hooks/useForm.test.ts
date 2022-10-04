import { renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

export{};

describe('useForm tests', () => { 

    const initialForm = {
        title: 'Hola Mundo',
        body: 'Gracias por la oportunidad'
    }

    test('return default object', () => {

        const { result } = renderHook(() => useForm( initialForm ));
        console.log( result.current)
        expect( result.current ).toEqual({
            title: initialForm.title,
            body: initialForm.body,
            setFormData: expect.any( Function ),
            onHandleChange: expect.any( Function ),
            resetData: expect.any( Function ),
            isErrorState: false,
            sendData: expect.any( Function ),
            toggleForm: expect.any( Function ),
            isDisabled: true
          });
    })
 })