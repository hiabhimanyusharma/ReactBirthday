import React, { useState } from "react";
import ReactDom from 'react-dom';
import './index.css'

const data = [
  {
    id : 1,
    name : "Reindeer",
    bDay : "16 January",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWhXIZYZLfOxlcRMDaj_0B2y_BIP0g5aNrg&usqp=CAU'
  },
  {
    id : 2,
    name : "Lion",
    bDay : "26 July",
    image : 'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-cute-lion-cartoon-vector-png-image_1788198.jpg'
  },
  {
    id : 3,
    name : "Tiger",
    bDay : "31 August",
    image : 'https://previews.123rf.com/images/tigatelu/tigatelu1306/tigatelu130600046/20219464-cute-tiger-cartoon-with-blank-sign.jpg'
  },
  {
    id : 4,
    name : "Panda",
    bDay : "4 December",
    image : 'https://image.shutterstock.com/image-vector/panda-baby-260nw-593772539.jpg'
  }
];

const Content = ({people}) => {
  return <>
    {people.map((person) => {
      const {id,name,bDay,image} = person;
      return(
        <article key={id}>
          <img src={image}/>
          <div className="contentDiv">
            <h3>{name}</h3>
            <p>Birthday : {bDay}</p>
          </div>
        </article>
      );
    })}
  </>
}

function Birthday() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <h3>{people.length} Birthdays</h3>
      <Content people={people}/>
      <button onClick={() => {
        setPeople([]);
      }}> <h4>Remove All </h4></button>
    </main>
  );
}

ReactDom.render(<Birthday/>,document.getElementById('root'));
