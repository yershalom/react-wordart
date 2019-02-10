import React, { Component } from 'react'
import axios from 'axios'

class Chuck extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    this.getChuck()
  }

  getChuck = async () => {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random')
    this.setState({ data })
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.data).length > 0 ? <span>{this.state.data['value']}</span> : null}
      </div>
    )
  }
}

export default Chuck
