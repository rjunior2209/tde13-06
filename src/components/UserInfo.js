const UserInfo = ({users}) => {
    return (

        <div>
         {users.map(User=>(<p>nome: {User.name} ,
         data de nascimeto: {User.birthday},
         email: {User.email}</p>))}
        </div>
        
    );
}

export default UserInfo;