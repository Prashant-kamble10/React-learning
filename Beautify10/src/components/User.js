

const User = ({name, location}) =>{
    return(
        <>
        <div className="m-4 p-4 bg-gray-50 rounded-lg">
           <h1>Name : {name}</h1>  
           <h1>Location : {location}</h1>
           <h1>Contact: @Prashant-kamble10</h1>  
        </div>
        </>
    )
}

export default User;