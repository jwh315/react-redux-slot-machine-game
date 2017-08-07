import React from 'react';


import { Random } from '../helpers/helpers';

class Trump extends React.Component {
  constructor(props) {
    super(props);
    
    var urls = [
      'http://i.imgur.com/ChAAG55.png',
      'http://i.imgur.com/QjdXvA4.png',
      'http://i.imgur.com/EOw729B.png'
    ];
    
    var imgs = urls.map(url => {
      var img = new Image()
      img.src = url;
      
      return img;
    });
    
    this.state = {imgs};
    
  }
    
  render() {
    return (
      <img className="trump" src={Random(this.state.imgs).src} />
    )
  }
}

export default Trump;