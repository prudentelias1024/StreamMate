import * as yup  from 'yup'

const schema = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(.{6,20})$/,{message: 'Password Must Contain Uppercase, Lowercase and a Number'}).required()
})
export default schema;