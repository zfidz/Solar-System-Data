import React from 'react';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "./MoonCard.css"

export default function MoonCard({ body }) {
  if (body.bodyType === 'Moon') {
    return (
      <div className="moonCard">
            <div className="moon-title-big">{body.englishName}</div>
        <Button className="button"  variant="primary" href={`/moons/${body.englishName}`}>Details</Button>
        <Button className="button" variant="warning">Favorite</Button>

      </div>
    );
  }
}