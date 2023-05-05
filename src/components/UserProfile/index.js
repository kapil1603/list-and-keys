import "./index.css"


// here we add user components
const UserProfile = (props) => (
    // access the props
    // we have passed as key props but its not accessible in the components
    const {userDetails,key} = props
    console.log(key); // it give undefined in console
    // from user details we access imageUrl
    const {imageUrl,name,role} = userDetails
    // convert into fun block by using return
  return (<div className= "user-card-container">
    <img src={imageUrl} className = "avatar" alt="avatar"/>
    <div className = "user-details-container">
        <h1 className= "user-name">{name}</h1>
        <p className="user-designation">{role} </p>
    </div>
  </div>)
)

// here modules are ES6 modules but files estension is .js so due ES6 we use export default
export default UserProfile