import axios from 'axios';
import React from 'react';
import Card from '../Card/Card';
import "./boxgroup.css";

class Boxgroup extends React.Component {
  state = {
    SW: []
  }


  componentDidMount() {
    axios.get(`https://esp32-69129-default-rtdb.firebaseio.com/sw.json`)
      .then(res => {
        const SW = res.data;
        console.log(SW);
        this.setState({ SW });
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='mainbox'>
          {
            this.state.SW.map(sw =>
              <Card key={sw.id} name={sw.name} fawesome={sw.fawesome} level={sw.level} id={sw.id} />
            )
          }

        </div>
      </div>
    )
  }

}

export default Boxgroup;