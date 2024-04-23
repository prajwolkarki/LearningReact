import PropTypes from 'prop-types';
import { useState } from 'react';
function User(props){
    // let name = "Prajwol";
       let [name,setName] = useState("Prajwol");
       let [age,setAge] = useState("22");
    function changeName(){
        // name = "Johnny Deep";
        setName(props.name);
        console.log(name);
    }
    function changeAge(){
        // name = "Johnny Deep";
        setAge(props.age);
        console.log(name);
    }
    function doSomething(name,age){
        console.log(`Hello ${name},${age}`);
    }
    return (
        <div>
            <h1 className='header'>{name} {age}</h1>

            <button onClick={changeName}>Click Me</button>
            <button onClick={changeAge}>Click Me</button>
            {/* <button onClick={doSomething.bind(this,"Prajwol",21)}>Click Me</button> */}
            <button onClick={()=>{
                doSomething("Prajwol","22");
            }}>Click Me</button>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};
export default User;