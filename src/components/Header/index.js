import React from 'react';
import Nav from '../nav';

const Header = (props) => 

{
    return (

      <header className="App-header">
      <Nav />
      {props.title}
      <div>
          {
              props.links && props.links.length > 0 && 
              props.links.map((item, index) => {
                  return (
                      <button
                      key={index}
                      onClick={() => props.handleClick(item.title)}
                      className={item.active ? 'active' : ' '}>
                          {item.title}
                      </button>
                  )
              })
          }
      </div>
      </header>
  )
};

export default Header

