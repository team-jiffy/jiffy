import React from 'react';
import './AccountInfo.css';
import {Avatar,Button} from 'antd';
import landmark from '../../assets/images/Vector.svg';
import axios from 'axios';
class AccountInfo extends React.Component{
 
  hammerAddress = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYZGBgaGRkcHBkcHRwdIxwZGh0ZHhgcHB4jJC4lHx8rHxgcJjgmLS8xNTU1HCQ7QDs0Py40NzEBDAwMDw8QHhISGjEhJCExNDQxNDQ0NDExNDE0NDE0NDQ0MTQ/NDQ0NDQxNDQ0OjExMTQ0PzQ0Pz80ND80MTExMf/AABEIAJ4BPwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUEBgcCAQj/xAA8EAABAwICBwUGBQMEAwAAAAABAAIRAyEEMQUSQVFhcYEGIpGhsQcTMkLB8FJi0eHxI4KSFDNyokPC0v/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAdEQEBAQEAAwEBAQAAAAAAAAAAARECEiExUXFB/9oADAMBAAIRAxEAPwDsyIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPiKux+maFGdeo0EfKLnwGXVa5pDtmbiiwC1nPmc/wj6lWc2pbG5lVGP7R4elYv1nfhZ3j45DqVoOL0lWrTrvc4TkLNEcBbyWKaZ3G8Cy3OP1L02bG9tKjh/SYGA5Od3j4ZDzVcztFimnW94XGbtcGxyytlsVfTonZ0/Yea9PpwDJGWS14xna6ph6wexrxk5oI5ESpVq/YbSAfRNPbTNv+LpI89byW0LlZlbj6iIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg+KDFYllNpe9wa0Zk5BTrRPaVWeG0WidQlzjG1zY1QehJj9FZNqVnY/ttTbIpMLzMBzpa3ptPktaxvaHEVfifqtM91vdHWJJ6qnp04M7xkcug+9iyvd5OO7lHFdZzIzbUbH8Ad5jndeqbdmfH76qI1BIiTvyiTGa8STAy5fqeqrLLpMAEE75M3Oy4A4BeqdRomGOzm5tcCY81BTETx2leQ+R98hbYeSDOfWcW5ARuEXi9991C+pnv3X325ryx5GfXmIg8vqvJaRJzOccPvzQWXZHGGlimgwGvBaebo1emtA6rqC4zUc4QRsg6w2GxB9f3XTOzWmRiKfeLfeNs9o8nAbj6yufc/wBb5q7REWGhERAREQEUbqrRm4DqEZVa74XA8iCgkREQEREBERAREQEREBERAREQEREBERAREQFr/bTA+9wlSBLmD3jebQZA5iVsC8kTYpBw2li5EtEAXFs8h1tZSa5OZPpc5Lzj8F/psRVw5HcDzqcWHvMHHumOiPGeUW/fiV3l1zSjbeOufXdeV9Ii8CYNzv4FY7BNvHiptbZ9xs9IRE05xGV7oW5i/wB5qFhgjOTnbhvU4fbps+qD1I2Eid8bMz1UjdbaPIAiMhBy2cVEOQvsPHgd6k1yb/FJGewb9+Xqg9OE2O3LiYtI3K17G1dXENBJDYcOBMHVB3D6wq5pAmM4mNafWYWBjK2rrag+JmRmCNo55HwTqbFjqmI7RYZjgx1VusTECXQeJEgKxo12vEtcHDeCCuDYfR9WsAZtNo3qx0hWr4drHFz2lwNwS0ktMHIrl4t67aqjTnaHD4Vs1ngE5MF3O5N+pgcVyHD9pMY8QcVUawmJ1r3/ADEg+alGIwjGGo9/vahNyTrOjeHOIBk8N/WYa2Kr2jxGMe1rWup0XWAbneQC9/0H7qj7SaCdhnA1X6weDDdZ4vbaJHQqjb2qqtaWsECTq8GnYBkLknqrPA0sVpEBhlxBkk5CcyTsABK16FRRDXu93TpuqvfIDcxrZAgLrHYXsk7CA1ahHvXtDS1karG2MT8zrCTlu3mw7L9laODYNUB1QiHVCL8QNzfXwjYlm1X1ERQEREBERAREQEREBERAREQEREBERAREQEREHIPaDpBj8cWMa5tSk1ocTEOkBzC3o6J5KrcAYcNsGb7sp8bK09rWBLMVRxA+GozUceLCM+jm/wCKocFWlpBvq7txJ+srrzfTHU9pW8tnipGun7F8yvrmXMR9+n8L1SYDE2kx0jdsWmUrH5dN1r7v2U1SMy0NmBnN42dV4YIyznePvIfez3AmRYxNwbZb98DwQfXE3vqkZGQTJEC1/P8An02pleYM7M9vL+FjtqNBuZdnt2gE2id1lkYeg90gtgQbuj6X2iyCGkxwnvT3nEDINBJj1vxXyuJaS2DG7dx+96sm4RonWM2yyz4buF1JTaw905QQYkWOxFeOxmoKbtYtDmuPUSY67PDep+2eLpYigGMu5neB8GuHWZ/tWlaZD6TtZpMAlruuR8vRVbMY8ua6SYIJ4jaud9NRJg9FVqzxTYCXOdqgDzXWezvs5w9JrXV/6rhfVPwNPEfMeduCyuweh2sYa5HefIafy/MepEdOK3JZtWK+nobDNENoUgODGfosqhh2MENaGjcAB6KZFFEREBERAREQEREBERAREQEREBERAREQEREBERB8XwmM1rfaDtlhsM099tSoMqbHAmfzESG9Vy3tT2xr4wNa5op05PcaXHWJiNe8OiLWGZU1ZNbR7UdN4OrSbQbUD6zXhw1AXACCHguHdBg5TNgtG0fWgt1hJBDb+APK8qnfhXEEjJtlludFKm+JD9ZhI/EwgtHA6rh4LfNZ6jZ3C5bGYt03n7z2Ly+II1vOLZWvly3Jg2l7GuvBA8RYkxeVL7pgzztM7tnHaurmio0w1uq1pOccOMnPwUwpk5ugRcNgbouI3ZKQEA223txXlxiPXLflnt47UEtAhsQL887nNZYqOsMj9i24LCpm19/lJzGVtqnY/wCHb055/sgyNWe9aAegyy6qRsb7cfvZkon1LZ5xa2z4vRfA6Ytfkc+aDC0zhdcEbHNA5bjzt5K17G9iKVWm2rUdLSXDUbn3XEd52zKYA25qCA8O2GLfx5Zqy7BOezF1Wa0sfS1yJ+drmtlo5OM8xwWep61rl0GjSaxoa0QGgAAbALAKVEXJsREQEREBERAREQEREBERAREQEREBERARUmk+1GEoSH1mlw+RvedyIbl1hahpT2kuiMPRA3OqH0a0/VB0lUmk+1GEoSH1m6w+Rp1ncoGXWFyPSGmsbiT36zy38Le4zlAieZWFTwAF3vA4C5KuDfsX7Ry46tCiROT3yf8Aq31lUGkcfjMSYfVc5s/A0Bo6gG6qmYpjPgBcd5zR2k3/ABTAm42wqMXSOjGt705Axtk53OSpqzrenPYrDS2KJEg58doBkWMfVUwqyPvNTprm4y3V7Gcntvz2eYUVKqdQsuRra7Y2PGZ6tBCkpaOrvA1KNR8zGqx7p5QL5qyHYrSDWOq/6d4YGlxJLA4AZ9wu18rxCnJ0ttD1zqFoNsxzP8DzVi8TnxJ57Atc7PYgQydh1D98o8FsVRurnOUcs8ty7z44o6jpuDsGVgTl6xwXx8AS6YiPLLf5L42N27+eSkpEZm3Tl+iIUwRqg5RI3wP2spXVCTJj7iRz/VR6k7bXtYXtN+vmvJdcbB67RPj6IMljrTI5ePopHtdbjneevqscEZkE8d1vHMc1l4bdfdE+XBB9wbNW52umfLwgKy0CW0sXT1r6zXNDp2vyHGSAN2W5Yb2fxlFp+wvmIYSyRYggjLZuSzVjqSLB0Ri/e0WP2ubf/kLO8wVnLg6CIiAiIgIiICIiAiIgIiiqVA0S4hoGZJAHiUEiLUtMdv8ABUJAf714+VmU/wDLLwlaDpf2oYh8ikG0mndd3+R+gCmrldjxOLp0xL3sYN7nAeq1XSPtDwlM2D6gBguaAB0kyfCOK5Bh8bVxFXWqvc8kxLnEyCWiJJ/MPFZukMO2NUwAWjlLoDT0ueilvvEbnpT2pF0jDUhH46n/AMjb1PRavjtP43EA+8e8g7CdRg/tbHnKp9DPZBGqNcbSSfC/PyWViMU/MkCPoIuN/gt4PLMGSQXvHIRYfRe6mKpss0a5AzN78DuVXica5xknyA52yXrB0atYhlNj3u2BoJPgFVZVfSTiAJjh+w+qxjXO059FtmiPZpi6kGqW0W/m7zujR9SFvGivZzg6UOeHVnDa4wOjR9SVByDCYepVdq02Pe7c0E+QW26L9nOLqDvltFp2uOs7o1v1IXXsLhWU26rGNYNzWgDwCyE1GmaJ9nWDpQagdXfvee70YLRwMrYaWhMM1we2hSa4AAODGAgDKDFlZIoC+L6iDgen9GDC4+pQiGP/AKlPk4G3GBrD+1WOHqucwWzMZ58tsWldC7W9kKeOdSeXupvpEw5oBlpzaZ2SPXeuc4drmPex1nAlpne2Q4SeIN105rHUZLmwSANnj+ykps1rAwYMcSPlM3vffkkCDbW+7HyUL6Zm1r538t2Q3LbL5UkO1TaAbGReLozMgAWtGXXLZ+qYh+sSXG+ettgCAvArid4sIzynvSEGdhqcmwnzkrLY5ozIgbI28es71T1Macm+PDgdmaie9xdnvzO6Iibc0FrVxgABBa47TmLZ2+81gYjHvdAiBPWCD48v0WKBfONsTMRmPAr2949EG9ez7G/7lAmYh7evdd6N8St2XP8AsPomp73372uYxrSAHNLS4uHH5QIM743W6AuPX10nx9REUUREQERQ1qzWNLnODWjMkgAcyUEy+LU9L9vcJRs1xrGP/HBaLgXdMbdkrStJ+1is7/YpMY0g3dLnTvGQtugqbFk119zgBJsAqDSvbLBUAS6s1xHys758rDqQuHaR0zi8R3qlZ7xMRrEAA/lHdHQLDZgnOn8QEgb94CmteP63/TXtWqOOrhqYYPxv7zuer8Lf+y0nH6XxOIJdUqPedsmw5DIdF8w1FhB3wdWd8ZHmomYoNN+IPEHYeMgeaf1cz4ibhTqB5MtJAngZg+IcObSvbGM1HxGu0tcOQIJ+vnwUP+sIa9nyu2bjYz4gHx3rBLiTtuEmJdWNOsQ6RaQXDnLSPQ+Sza7y8fEb3B57TybPisHRWCrVntZSY979Uw1omwm/AAyugdm/ZrXeAcQfcsB+AQ5zgMjubszk2ySzfbNaBhqNQv1GNc8n4Q0G88BmVuWiPZ7jqwGuG0W73Z8e6LzzhdU0H2Zw2Ek0qffIgvd3nkZxrbBOwQFdrSND0R7McJTg1S+u4fiOq3/EGfElblg8FTpN1adNrG7mtDR5LKRAREQEREBERAREQfFy3tzo/wB3i/eDutqN1pmO82A4eh/u4rqS1X2g6P8AeYUvHxUjriM9XJ/l3v7Vrm5Us9NGNdogTygZ7bqN+IN7DI/e5YGFqgj8zTO3iMtmZ8FI98wc5z6TaV1c3l7jAvNuluHXyUMbT97/AFV3o7s9iK8alNzWH53d1vOTc9JWz4DsAwQa9QvP4Wd0ctY3PkpepFkrQmHYLk2AG3grvA9lcVWA7hpt/E86uf5bk+C6VgND0KP+1Taw/iiXHm43PirBYvf414tI0f7P6YH9eq6odgaBTAG6RLjfbIWzYDQtCjHu6bWkfMe87/J0nzViizbauR9REUUREQEREGh9pvaC3D1HUaVPXe06pc4w0O3ADPdmFz3SnazE4x5p1HgU/iDGgAS0gySBJgSbnYou3GEczH4gHIvc4f3jX/8AZa2ypqPa8iwcQeINneRKl+Ku/cbSDxHXWI8dVvNyq6mHaxxbM/qLHpaeqs34g7TxJ4zJPidfo1VOkRBnIbt27yGr/YsxZcrNp4oarm2v6/yoHY7Iizm2PIZfoq7XLrjNXuhexuNxMPp0jqExruIa3xJuOQKv1rZFPXxMukWm8cdqYfC1Kr9VjHPcbgNBcTvsLldY0D7KGMIdiagfBnUZIB5uMGOQHNdB0bomhh26tGk1g26ouebjc9SmM+X44rob2aY2q0Oe1tME/wDkJaY36oBI5GFvmhvZjhKbR76azsz8rdkQB3rcSt9RaxNrDwGjqNFurSptYNzQBPM5nqs1ERBERAREQEREBERAREQEREBRVGBzS1wkEEEHaDYgqVEGl4j2fUC4Op1HsGRb3XW/KXC3WVc6M7MYWgdZtMF9u+7vG27Y3oArpFdqZH1ERRRERAREQEREBERAREQc29puiCHMxTRLSAypAygn3bzwuWnm1cp0tWDzAiBlvK/TOIoNe0se0Oa4EFpyINiCtDo+y7D+9LnVHupzLaYsQNznXkcgDxQcewNcxqkZQJ4DLwjyG5bboXsTiMWAdTUpn53SAR+UZuytsyvmux4HQmHosNOnRY1pzGqDrRkXEyXHnKslnJo1Lsx2Cw2EaZHv3nN72tIHBrMmjxPFbY0AWFl6RaBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=";

  oChangePassword = document.getElementById('ChangePass');
  oContent = document.getElementById('content');
  oAccountInfo = document.getElementById('AccountInfo');

  oldPara = {
    height1 : 455,
    height2 :230,
    block : 'none'
  }

  newPara = {
    height1 : 660,
    height2 :450,
    block :'block',
  }

  constructor(props){
    super(props);
    this.state ={ 
      Para: this.oldPara,
      User: null
    }
  }
  componentDidMount() {
    const UID = {UID: "1"};
    axios.get('http://localhost:8081/user/profile', {params:{
      UID: UID.UID
    }}).then(response => {
      console.log("User get success: ", response);
      this.setState({
        User:response.data.user
      });
      console.log(this.state.User)
      
    }).catch(err => {
      console.log("User get failed!")
    })
  }

  onChangePassword = e=>{
    this.setState({
      Para:this.newPara
    })
  }

  onSave = e=>{
    e.preventDefault();
    const password = document.getElementById("password1").value;

    axios({
      method:'post',
      url : "http://localhost:8081/user/updatePassword",
      data : {
        UID:localStorage.getItem("UID"),
        Password :  password
      }
    })
    .then( e=>{
      this.setState({Para: this.oldPara})
      } 
    )
    .catch(e=>{
      console.log(e);
    })

  }

  onCancel = e=>{
    e.preventDefault();
    console.log(this.oChangePasswor)
    console.log('cancel')
    this.setState({Para: this.oldPara})
  }

  render() {
    const nullTage = "null";
    console.log("render User: ",this.state.User)
    return (
      <div className="account" id="AccountInfo" style={{height:this.state.Para.height1}}>
        <Avatar size={98} icon="user" className="avatar" src={this.state.User?this.state.User.profilePictureURL:this.hammerAddress}/>
        <hr className="line"/>
        <br/>
        <div id="content" style={{height:this.state.Para.height2}}>
          <div id="UserPass"> 
            <p>
              <span className="text address">Location:</span>
              <span className="text address">{this.state.User?this.state.User.location:nullTage}</span>
              {/* <Avatar shape="square" size={40}  className='avatar-landmark' src ={landmark}/> */}
             <img src={landmark} id="landmark"/>
            </p>
            <p>
              <span className="text email">Email:</span>
              <span className="text email">{this.state.User?this.state.User.email:nullTage}</span>
              <a className="edit email">Edit</a>
            </p>
            <p>
              <span className="text password">Password</span>
              <a className="edit password" onClick={this.onChangePassword}>Change Password</a>
            </p>
          </div>
          <div id="ChangePass" style={{display:this.state.Para.block}}> 
            <span id="cptitle">Change Password</span>
            <form id="cpform">
              <label>Current Password</label><br/>
              <input type="password" 
              name="password1" 
              id="password1" 
              placeholder="New Password" />
              <label>Current Password</label><br/>
              <input type="password" 
              name="password2" id="password2" 
              placeholder="Repeat Password" />
              
              <button id="button1" type="primary" onClick={this.onSave}>Save</button>
              <button id="button2" type="text" onClick={this.onCancel}>Cancel</button>
              
            </form>
          </div>

          <div className="Rest divs">   
              <p>
                <span className="text dilever">My Deliver Address</span>
                <a className="edit dilever">Edit</a>
              </p>
              <p>
                <span className="text pick">My Pickup Address</span>
                <a className="edit pickup">Edit</a>
              </p>
              <p>
                <span className="text pament">My Payment</span>
                <a className="edit payment">Edit</a>
              </p>
          </div>
        </div>
      </div>
    )
  }
}
export default AccountInfo;
