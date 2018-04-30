import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component{


  state = {
    gifs: []
  }

  fetch = (query) => {
    let url = 'http://api.giphy.com/v1/gifs/search?q='
    const key = '&api_key=dc6zaTOxFJmzC'
    console.log(url+query+key);
      fetch(url+query+key)
      .then(response => response.json())
      .then(response => this.setState({
        gifs: response.data.slice(0, 3)
      })
    )
  }

  componentDidMount(){
    this.fetch()
  }

  searchFunc = (term) => {
    console.log(term);
    this.fetch(term)
  }

  render(){

    console.log(this.state.gifs);

    const gifs = this.state.gifs.map((gif, index) =>
      <GifList gif={gif} index={index} key={gif.id} image={gif.images.downsized_medium.url} />
    )

    return(
      <div>
        <GifSearch searchFunc={this.searchFunc}/>
        { gifs }
      </div>
    )
  }


}

export default GifListContainer
