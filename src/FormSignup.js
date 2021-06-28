import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Заголовок</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input type="text"
                           name="username"
                           className="form-input"
                           placeholder="Enter your username"
                           id="username"
                           value={values.username}
                           onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                {/*<div className="form-inputs">*/}
                {/*    <label htmlFor="email" className="form-label">*/}
                {/*        Email*/}
                {/*    </label>*/}
                {/*    <input type="email"*/}
                {/*           name="email"*/}
                {/*           className="form-input"*/}
                {/*           placeholder="Enter your email"*/}
                {/*           id="email"*/}
                {/*           value={values.email}*/}
                {/*           onChange={handleChange}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="form-inputs">*/}
                {/*    <label htmlFor="password" className="form-label">*/}
                {/*        Password*/}
                {/*    </label>*/}
                {/*    <input type="password"*/}
                {/*           name="password"*/}
                {/*           className="form-input"*/}
                {/*           placeholder="Enter your password"*/}
                {/*           id="password"*/}
                {/*           value={values.password}*/}
                {/*           onChange={handleChange}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="form-inputs">*/}
                {/*    <label htmlFor="password2" className="form-label">*/}
                {/*        Confirm Password*/}
                {/*    </label>*/}
                {/*    <input type="password"*/}
                {/*           name="password2"*/}
                {/*           className="form-input"*/}
                {/*           placeholder="Confirm your password"*/}
                {/*           id="password2"*/}
                {/*           value={values.password2}*/}
                {/*           onChange={handleChange}*/}
                {/*    />*/}
                {/*</div>*/}
                <button className="form-input-btn" type="submit">
                    Sing up
                </button>
                {/*<span className="form-input-login">*/}
                {/*    Already have an account? Login <a href="#">here</a>*/}
                {/*</span>*/}

            </form>
        </div>
    )
}

export default FormSignup;