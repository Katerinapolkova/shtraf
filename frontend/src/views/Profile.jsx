import { useEffect, useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'

function Profile() {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/order")
    .then(response => response.json())
    .then(data => {
      setItems(data)
    })
  },[])

  const handleInput = event => {
    setName(event.target.value);
  };

  const add = () => {
    let now = new Date("YYYY-MM-DD")
    let user = {
      'name': name,
      'date': now,
      'image': '/test.jpeg'
    }

    fetch("http://localhost:3000/order", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }, 
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      alert('Добавденно успешно')
    })

  }

  return (
    <>
      <div className="container" style={{position: "relative"}}>
        <Header />
        <div className='users'>
          <img src="/user.png" alt="" />
          <h2>Личный кабинет</h2>
        </div>
        <div className='inner view'>
          <img src="/card.png" width={400} height={300} alt="" />
          <div className="user_data">
            <h1>Полкова Екатерина Александровна</h1>
            <h1>+7 (999) 999-99-99</h1>
            <h1>polkovakaterina@gmail.com</h1>
          </div>
        </div>  
        <form className='order' action="">
            <h2>Оформление заявки</h2>
            <textarea onChange={handleInput} name="" id="" cols="30" rows="10"></textarea>
            <input type="file" />
            <button onClick={add}>Отправить</button>
          </form>
          <div className='orders' style={{marginTop: "40px"}}>
            <h1>Заявки</h1>
            <div className='inner'>
              {items.map((item) => {
                return <div className="item">
                <h2 className='date'>{item.date}</h2>
                <img src={item.image} width={150} height={100} alt="" />
                <p>{item.name}</p>
              </div>
              })}
            </div>
          </div>      
      </div>
    </>
  )
}

export default Profile
