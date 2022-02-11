const Header = ({text, children})=>{
    return(
        <>
             <h3>This is text in input: {text}</h3>
             {children}

        </>
    )
}
export default Header;