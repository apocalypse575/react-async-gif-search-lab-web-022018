import React from 'react'

class GifList extends React.Component{


  render(){
    return(
      <div>
        <ul>
          <b>{this.props.gif.title}</b>
          <img src={this.props.image} alt={this.props.gif.id}/>
        </ul>
      </div>
    )
  }
}

export default GifList
