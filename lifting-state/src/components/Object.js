const Objects = ({list, setList})=>{
    const remove = (id)=>{
        const newList = list.filter((item)=>item.id !==id);
        console.log(newList);
        setList(newList);
    }
    return(
        <>
        {list.map((item)=>{
            const {name, age, complete, id} = item;
            return <div className="objects" key={id}><h3>{name}</h3><h3>{age}</h3><button type="button" onClick={()=>remove(id)}>{complete}</button></div>
        })}
        </>
    )
}

export default Objects;