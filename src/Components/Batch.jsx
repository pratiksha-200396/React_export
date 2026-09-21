function Batch(){
    let batch = ["java","python","aws","react.js","spring"];
    return(
        <>
        <h1>Batch component</h1>
        {
            batch.map((b,i) => <h2 key={i}>{b}</h2>)
        }
        </>
    )
}
export default Batch;