function Courselist(){
    let courses = ["java","python","aws","react.js","spring"];

    //table vala array
    let clist = [
        {cname : "java" , fees : 50000.0},
        {cname : "react" , fees : 21000.0}
    ]
    return (
        <>
        <h1>Course map in single line</h1>
        {
            courses.map((cr,index) =><h2 key={index}>{index} :{cr}</h2>)
        }

        <h1>Course details show in table</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Course Fees</th>
                </tr>
            </thead>
            <tbody>
                {
                    clist.map((crs,i) => <tr key={i}>
                        <td>{crs.cname}</td>
                        <td>{crs.fees}</td>
                    </tr>)
                }
            </tbody>
        </table>
        </>
    )
}
export default Courselist;