import React from 'react';
import './App.css';
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      data: null,
      bgImageUrl: require('./bg.jpeg')
    }
  }
  
  componentDidMount() {
    const data = require('./data.json');
    this.setState({
      data: data,
    })
  
    setTimeout(() => {
      this.backgroundImage()
    }, 2000)
  }
  
  backgroundImage(){
    fetch(`https://source.unsplash.com/random/1920x1080/?people,wallpapers`).then((response) => {
      this.preloadImage(response.url);
    })
  }
  
  preloadImage(url) {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      this.setState({
        bgImageUrl: url
      });
      setTimeout(() => {
        this.backgroundImage()
      }, 3000)
    }
  }
  
  render() {
    return (
      <div className="App" style={({'background': `url(${this.state.bgImageUrl}) no-repeat`})}>
        <div className='container'>
          <svg className="github" onClick={() => window.open('https://github.com/AngusYang9')} focusable="false" viewBox="0 0 24 24" aria-hidden="true"
               role="presentation">
            <path
              d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
          </svg>
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
