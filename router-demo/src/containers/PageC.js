import { Component } from "react";
import { Link } from 'react-router-dom';

class PageC extends Component{
    render() {
    return (
        <div> 
           <div>This is PageC.</div> 
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

export default PageC;