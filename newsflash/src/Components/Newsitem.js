import logo from './unavailable.jpg'
import React, { Component } from 'react'
import '../App.css'

export class Newsitem extends Component {

    
  render() {

    let {title, description, imageUrl, newsUrl} = this.props;

    
    
    return (
        <div className="card my-3" style={{width: "18rem", margin: "0 auto"}}>
        <img src={imageUrl?imageUrl:logo} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary readMoreBtn">Read more</a>
        </div>
        </div>
    )
  }
}

export default Newsitem