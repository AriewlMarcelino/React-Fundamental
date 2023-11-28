import {useState, useEffect} from  'react';

function Hooks(){

    useEffect(()=>{
        console.log('eserEffort');
    })

    let age = 30;
    // newAge => A variavél atual
    // setAge => variavél a ser mudada ou setatada
    // useState(30) => valor padrão setado.
    const [newAge, setAge] = useState(30)

    function changeAge(){
        age = 31;
        console.log(age)
    }

    function changeNewAge(){
        setAge(50);
    }

    return(
        <div>
            <p>Age:{age}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Age:{newAge}</p>
            <button onClick={changeNewAge}>Mudar idade</button>
        </div>
    )
}

export default Hooks;
