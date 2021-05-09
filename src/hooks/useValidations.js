import { useState} from 'react'

export const useValidations = (form, formvalidator) => {
    const [errors, setErrors] = useState({});
    const [formHook, setFormHook] = useState(form);
    const [resp, setResp] = useState(null);

    const handleChange=e=>{
        const {name, value} = e.target
        setFormHook({
            ...formHook, [name]:value
        });
    };

    const handleBlur = e => {
        setErrors(formvalidator(formHook));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(formvalidator(formHook));
        setResp(formHook);
    };

    

    return { errors, formHook, resp, handleChange, handleBlur, handleSubmit }
}
