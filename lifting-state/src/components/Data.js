const Data=({data})=>{
    return(
        <>
        {data.map((item, index)=>{
            return <div key={index}><span>{item}</span></div>
        })}
        
        </>
    )
}

export default Data;