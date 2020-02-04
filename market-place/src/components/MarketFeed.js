import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

import {DataItems} from './DataItems';

const UserFeed = ({deleItem}) => {


  return (
    <>
      <div>
        <h1>Community Market</h1>
      </div>
      <div className='cardContainer'>
        {DataItems.map(item => (
              <Card className='card'>
                <Card.Body>
                {/* <Card.Img className="productPic" src={item.url} alt={item.name} /> */}
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.category_id}</Card.Text>
                  <Card.Text>Location: {item.country}</Card.Text>
                  <Card.Text>Price: {item.price}</Card.Text>
                  
                </Card.Body>
                <Button>Buy</Button>
              </Card>
            ))
          }
      </div>
    </>
  );
};

export default UserFeed;
