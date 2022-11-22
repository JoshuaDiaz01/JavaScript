export const User = (props) => {
    const {user} = props;
    if (!user){
        return null
    }


const {email, firstName, lastName, userName} = user;

//this user card will be displayed in the mapping on app.js
return (
    <div>
        <h2>
            {firstName} {lastName} ({userName})
        </h2>
        <p>{email}</p>
    </div>
)
}
