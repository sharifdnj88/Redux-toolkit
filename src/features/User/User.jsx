import { useDispatch, useSelector } from "react-redux";
import "./User.scss";
import { useEffect, useState } from "react";
import { createUser, deleteUser, fetchAllUserData } from "./UserApi";
import { getAllUserData } from "./UserSlice";

const User = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector(getAllUserData);
    const [ input, setInput ] = useState({
        name: "",
        email: ""
    });

    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    const handleUserCreate = (e) => {
        e.preventDefault();
        dispatch(createUser(input));
        setInput({
            name: "",
            email: ""
        });
    }

    useEffect(() => {
        dispatch(fetchAllUserData());
    },[dispatch]);
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 my-5">
                    <div className="card">
                        <div className="card-header text-center"><h1>All Users</h1></div>
                        <div className="card-body">
                            { loading && <button className="btn btn-outline-dark d-block m-auto" type="button">
                                <span className="">Loading</span>&nbsp;
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button> }
                            <table className="table table-striped table-light table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.length > 0 ? users.map((item, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <button onClick={() => dispatch(deleteUser(item.id))} className="btn btn-sm btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    }) : "No data found" }                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer bg-info">
                            <form onSubmit={handleUserCreate}>
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <input onChange={handleInputChange} value={input.name} className="form-control w-50" name="name" placeholder="name" type="text" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Email</label>
                                    <input onChange={handleInputChange} value={input.email} className="form-control w-50" placeholder="email" name="email" type="text" />
                                </div>
                                <div className="my-3">
                                    <button className="btn btn-sm btn-dark w-50">Create User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default User