function RenderCond(props){
    const x = 10;
    return (
        <div>
            {x > 5 && <p>X é maior que 5</p>}
                {/* // Segunda opção usando o operador ternario */}
                {x > 5 ? <p>X é maior que 10</p> : <p>X é menor que 10</p>}
                    {/* Terceira opção seria via props */}
                    {props.x > 5 ? <p>X é maior que 10</p> : <p>X é menor que 10</p>}
                    
        </div>
    )
}

export default RenderCond;