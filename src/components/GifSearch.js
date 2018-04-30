import React from 'react'

class GifSearch extends React.Component{

  state = {
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchFunc(this.state.searchTerm)
      this.setState({
        searchTerm: "",
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="searchTerm" placeholder="Search GIFs" value={this.state.searchTerm} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
