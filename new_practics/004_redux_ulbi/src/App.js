import './App.css';
import {fetchCustomers} from "./asyncActions/customers";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CASH, GET_CASH} from "./constants/actions";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";


function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state)=>state.cash.cash);
  const customers = useSelector((state)=>state.customers.customers);
  const addCash = (cash) => {
      dispatch({type: ADD_CASH, payload: cash})
  }
  const getCash = (cash) => {
        dispatch({type: GET_CASH, payload: cash})
  }
  const addCustomer = (name) => {
      const customer = {
          id: Date.now(),
          name,
      }
      dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
      dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
        <div>
            {cash}
        </div>
        <div>
            <button onClick={()=>getCash(Number(prompt('Введите сумму;')))}>Снять</button>
            <button onClick={()=>addCash(Number(prompt('Введите сумму;')))}>Пополнить</button>
            <button onClick={()=>addCustomer(prompt('Имя?'))}>Добавить клиента</button>
            <button onClick={()=>dispatch(fetchCustomers)}>Получить список клиентов</button>
        </div>
        {customers.length > 0 ?
            <div>
                {customers.map(customer =>
                    <div key={customer.id} onClick={()=>removeCustomer(customer)}>{customer.name}</div>
                )}
            </div>
            :
            <div>
                Клиенты отсутствуют!
            </div>
        }

    </div>
  );
}

export default App;
