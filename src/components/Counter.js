import '../styles/counter.css';
import { COUNTER_INC, COUNTER_DECR } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count);
    console.log(counter);

    const increment = () => {
        dispatch(COUNTER_INC);
    }

    const decrement = () => {
        dispatch(COUNTER_DECR);
    }

    return(
        <div className="counter">
            <button className='btn_decr'
                onClick={decrement}
            >-</button>      
            <h1>{counter}</h1>
            <button className='btn_inc'
                onClick={increment}>+</button>
        </div>
    )

}

export default Counter;