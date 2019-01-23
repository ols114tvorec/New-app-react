import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import UserList from './components/UserList';


const links = [
  {
    title: "Nav1",
    active: true,
  },
  {
    title: "Nav2",
  }
]
 const userList = [
  {
    id: 1,
    last_name: 'last_name',
    first_name: 'first_name',
    age: 123,
    img: 'http://echovis.tt.com.pl/images/img_avatar.png',
  },
  {
    id: 2,
    last_name: 'last_name',
    first_name: 'first_name',
    age: 123,
    img: 'http://echovis.tt.com.pl/images/img_avatar.png',
  },
];
class App extends Component {
  constructor (props){
  super (props);
  this.state = {
  isOpenList: false,
  activTab: 'firstTab'
  }
}

  toggleUsers = () => {
  this.setState({
  isOpenList: !this.state.isOpenList,
  });
}
  
toggleTab = (name) => {
  console.log(name, 'name')
    } 


  render() {

    console.log('RENDER', this);
    const {
      isOpenList,
    } = this.state;

    // const users = [
    //   {
    //     name: "A",
    //     age: 1,
    //     avatar: "#",
    //   },
    //   {
    //     name: "B",
    //     age: 2,
    //     avatar: "#",
    //   },
    //   {
    //     name: "C",
    //     age: 3,
    //     avatar: "#",
    //   }
    // ]



    let myName = 'Vadim'; 
    return (
      <div className="App">
      <Header
      title="Header"
      links = {links}
      handleClick={this.handleClick}
      />
        <button onClick={() => this.toggleTab ('firstTab')}>
          Button 1 
        </button>
        <div>
          <button onClick={() => this.toggleTab ('secondTab')}>
              Button 2
          </button>
        </div>


      <div className="App"></div>
      <Header
      title= 'Header 2'
      />
      <Sidebar />
      <Footer />
      { isOpenList &&
      <UserList
      userList = {userList}
      />}

      <div> Content 1</div>
      <div> Content 2</div>
</div>
    )
    }
  }

export default App
