const Input = ({input, setInput, setText, data, setData, list, setList, input2, setInput2}) => {
    const submit=(e)=>{
        e.preventDefault();
        setText(input)
        //data array - mellom lagre fungerer!
        const newData = [...data, input];
        console.log(newData);
        setData(newData);
        setInput('')
        //object array
        const newList = [...list, {name: input,age:input2, complete: 'Complete', id: new Date().getTime().toString()}];
        console.log(newList);
        setList(newList);
        setInput2('');
    }
    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder='write name here'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                /><br/>
                <input
                    type="number"
                    placeholder='write age here'
                    onChange={(e) => setInput2(e.target.value)}
                    value={input2}
                /><br/>
                <button type="submit">Change</button>
            </form>
        </>
    )
}

export default Input;