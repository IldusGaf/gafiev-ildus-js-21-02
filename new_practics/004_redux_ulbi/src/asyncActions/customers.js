import {addManyCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => {
    return dispatch => {
        console.log('I`m in fetchCustomer callback!')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}
