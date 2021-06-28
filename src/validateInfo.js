export default function validateInfo(values) {
    let errors = {};

    if(values.username.trim() === '111') {
        errors.username = "11111"
    }

    // if(!values.email) {
    //     errors.username = "User name required"
    // }
    //
    // if(!values.password) {
    //     errors.password = "Password required"
    // } else if (values.password.length < 6) {
    //     errors.password = "Password needs to be 6 "
    // }
    //
    // if(!values.password2) {
    //     errors.password2 = "Password is required"
    // } else if (values.password2 !== values.password) {
    //     errors.password2 = "Password do not match"
    // }

    return errors;
}