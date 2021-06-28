import {useState} from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        // email: '',
        // password: '',
        // password2: ''
    });


    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name,value} = e.target;
        console.log(name, value)
        setValues ({
            ...values,
            [name] : value
        })


        console.log(values)
        setErrors(validate(values));
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return {handleChange,values, handleSubmit, errors}

}

export default useForm;