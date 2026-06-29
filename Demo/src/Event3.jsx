function Event3() {
    const doubleClickHandler = (e) => {
        alert("TMKC")
    }
    const inputChangeHandler = (e) => {
        console.log(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        alert("Submit Nai Hoga TMKC")
    }
    return (
        <>
        <input type="text" onChange={inputChangeHandler}/>
        <button onDoubleClick={doubleClickHandler}>Double Click</button>
        <form action="" onSubmit={submitHandler}>
            <button type="submit" >Submit</button>
        </form>
        </>
    )
}
export default Event3;