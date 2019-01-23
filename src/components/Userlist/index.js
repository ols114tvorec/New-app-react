// import React, {Component} from 'react';

// class Userlist extends React.Component {
   
//    itemUser= (user) => {
//       const {
//         id,
//         last_name,
//         first_name,

//       } = user;

//        console.log ('user', user)
//        return (
//            <div key={user.id}>
//            <img className = 'avatar'></img>
//            <p>{last_name}</p>
//            <p>{first_name}</p>
//            123
//              </div>
//        )
//    } 





//     render()
//      /* {  const {Userlist},
// } = this.props;
//          */{
//         return (
//             <div className="Userlist">
//                 {this.props.users.map((item, index) =>
//                     <div
//                     key={ index }
//                     onClick={ () => {this.props.updateStatus(item.name)} }
//                     className="userBlock">
//                         <img className="avatar" alt="logo" src ={item.avatar}>

//                         </img>
//                         <p>
//                             {item.name}
//                         </p>
//                         <p>
//                             {item.age}
//                             {' years'}
//                         </p>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// export default Userlist;
import React, { Component } from 'react';

class UserList extends Component {

  itemUser = (user) => {
    const {
      id,
      img,
      last_name,
      first_name,
    } = user;

    return (
      <div key={id}>
        <img
          alt=''
          src={img}
          className='avatarUser'
        />
        <p>{last_name}</p>
        <p>{first_name}</p>
      </div>
    )
  }

  render() {
    const {
      userList,
    } = this.props;

    return (
      <div>
        {userList.map(item => this.itemUser(item))}
      </div>
    );
  }
};

export default UserList;