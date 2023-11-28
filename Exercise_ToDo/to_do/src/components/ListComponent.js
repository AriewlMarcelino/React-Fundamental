function ListComponent(){
    const items = [
        {
            id:1,
            name:'Matheus',
        },
        {
            id:2,
            name:'Rogerio',
        },
        {
            id:3,
            name:'Paulo',
        },
    ];

    return( <div>
        {items.map((item) => (
            <p key={item.id}>{item.id} - {item.name}</p>
        ))}
    </div>
    )
}

export default ListComponent;