import React from 'react';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export default function MoonCard({ body }) {
  if (body.bodyType === 'Moon') {
    return (
      <Card className="  col-md-3 mx-3 my-3 m-3" style={{ margin: '10px' }}>
 <Card.Header>{body.englishName}</Card.Header>
        <Link to={`/moons/${body.englishName}`} style={{display: 'inline-block'}}>Details</Link>
        <Button variant="primary" style={{display: 'inline-block'}}>Favorite</Button>
      </Card>
    );
  }
}