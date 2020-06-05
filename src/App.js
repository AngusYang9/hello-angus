import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      colors: ['rgb(83, 143, 107)', 'rgb(39, 137, 113)', 'rgb(150, 155, 89)', 'rgb(200, 60, 97)', 'rgb(193, 75, 45)', 'rgb(184, 114, 45)', 'rgb(170, 147, 14)', 'rgb(184, 98, 133)', 'rgb(28, 100, 150)', 'rgb(62, 85, 50)', 'rgb(56, 174, 157)', 'rgb(48, 108, 66)', 'rgb(183, 133, 69)', 'rgb(239, 169, 56)'],
      // randomColor: '#' + Math.floor(Math.random() * (2 << 23)).toString(16),
      randomColor: '#fff',
      data: null
    }
  }
  
  componentDidMount() {
    const data = require('./data.json');
    this.setState({
      data: data,
      randomColor: this.state.colors[Math.floor(Math.random() * 14)]
    })
  }
  
  render() {
    return (
      <div className="App" style={({'backgroundColor': this.state.randomColor})}>
        <div className='container'>
          <div className='header-wrapper'>
            <h2>杨勇的个人网站</h2>
            <h5>Angus Yang's Personal Website</h5>
          </div>
          <div className='content-wrapper'>
            {
              this.state.data && Object.values(this.state.data.categories).map(category => {
                return (
                  <div className='category-wrapper' key={category.key}>
                    <div className='category-title'>
                      <h3>{category.name}</h3>
                    </div>
                    {
                      category.list.map(item => {
                        return (
                          <div className='item-wrapper' key={item.key}>
                            <span>>></span>
                            <a href={item.url} target='_blank' rel='noopener noreferrer'>{item.name}</a>
                            {item.description && <span className='item-description'>{item.description}</span>}
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
