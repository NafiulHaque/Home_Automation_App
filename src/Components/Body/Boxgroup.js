import axios from 'axios';
import React from 'react';
import Card from '../Card/Card';
import "./boxgroup.css";

class Boxgroup extends React.Component {
  state = {
    SW: []
  }


  componentDidMount() {
    axios.get(`https://home-automation-app-5a3d0-default-rtdb.asia-southeast1.firebasedatabase.app/sw.json`)
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