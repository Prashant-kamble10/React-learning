

const User = ({name, location}) =>{
    return(
        <>
        <div className="user-card">
           <h1>Name : {name}</h1>  
           <h1>Location : {location}</h1>
           <h1>Contact: @Prashant-kamble10</h1>  
        </div>
        </>
    )
}

export default User;