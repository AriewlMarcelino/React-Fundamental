function ButtomComponent(){

    function HandleClick(){
        console.log('cliquei')
    }


    return(
        <button onClick={HandleClick}>click</button>
    )
}

export default ButtomComponent;