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
