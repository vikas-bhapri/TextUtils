import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {


    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false 
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0e24cf9cfde241399aeb1e9d00dbadbc";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
        console.log(parsedData)

    }

  render() {

    
    return (
      <div className='container my-3'>
          <h1 className='my-4'>
              NewFlash - Top Headlines
          </h1>
          
          <div className="row">
          {this.state.articles.map((ele)=>{
              return <div className="col-md-4" key={ele.url}>
              <Newsitem  title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} />
            </div>
          })}
              
          </div>
          
      </div>
    )
  }
}

export default News