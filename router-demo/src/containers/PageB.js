import { Component } from "react";
import { Link } from 'react-router-dom';

class PageB extends Component{
    render() {
    return (
        <div> 
           <div>This is PageB.</div> 
           <hr/>
        <div> 
        <Link to="/">
              <button>App</button> 
          </Link>
          <Link to="/PageA">
              <button>PageA</button> 
          </Link>
          <Link to="/PageB">
              <button>PageB</button> 
          </Link>
          <Link to="/PageC">
              <button>PageC</button> 
          </Link>
        </div>
        </div>
    );
    }
}

export default PageB;