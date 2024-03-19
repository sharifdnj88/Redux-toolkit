
// Create Student Middleware
const StudentMiddleware = (store) => (next) => (action) => {
    console.log("I am from student Middleware");
    next(action);
}



// export
export default StudentMiddleware;