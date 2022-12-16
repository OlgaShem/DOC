function List ({className}) {

    const items = [
        {id: 1, text: "Curabitur blandit tempus"},
        {id: 2, text: "Curabitur blandit tempus"},
        {id: 3, text: "Curabitur blandit tempus"},
        {id: 4, text: "Curabitur blandit tempus"},
        {id: 5, text: "Curabitur blandit tempus"},
    ];

    let list = items.map((item) =>(
        <li key={item.id}>
            {item.text}
        </li>
    ));

    return <ul className={className}>{list}</ul>
}

export default List;