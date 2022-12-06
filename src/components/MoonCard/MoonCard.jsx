import React from 'react';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';


export default function MoonCard({ body }) {
  if (body.bodyType === 'Moon') {
    return (
      <Card className="  col-md-3 mx-3 my-3 m-3" style={{ margin: '10px' }}>
 <Card.Header>{body.englishName}</Card.Header>
        <Card.Link href="{`/moons/${body.englishName}`}">Details</Card.Link>
      </Card>
    );
  }
}