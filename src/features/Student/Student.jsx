import { useDispatch } from "react-redux"
import { addNewStudent } from "./StudentSlice";


const Student = () => {
    const dispatch = useDispatch();
    const devs = {
        name: "Shariful Islam",
        age: 23,
        skill: "React JS"
    };
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 my-3">
                    <div className="card">
                        <div className="card-header"><h3>Add extra payload data from Student Reducer </h3></div>
                        <div className="card-body">
                            <button onClick={() => dispatch(addNewStudent(devs))} className="btn btn-sm btn-primary">Add</button>
                        </div>
                        <div className="card-footer">
                            <p>Note: please check inspect Redux & console log</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Student