import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, ot, reset } from "./CounterSlice";
import "./Counter.scss";


const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5 my-3">
                <div className="card text-center">
                    <div className="card-header text-center card-count"><h1>{count}</h1></div>
                    <div className="card-body">
                      <button className="btn btn-sm btn-danger" onClick={() => dispatch(decrement())}>--</button>&nbsp;
                      <button className="btn btn-sm btn-primary" onClick={() => dispatch(increment())}>++</button>&nbsp;
                      <button className="btn btn-sm btn-danger" onClick={() => dispatch(reset())}>Reset</button>&nbsp;
                      <button className="btn btn-sm btn-warning" onClick={() => dispatch(ot(1000))}>Osthir Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter