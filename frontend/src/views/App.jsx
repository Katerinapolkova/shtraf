import { useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import { redirect } from "react-router-dom";

function App() {
  const [fio, setFio] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInput = event => {
    setFio(event.target.value);
  };
  const handleInput2 = event => {
    setPhone(event.target.value);
  };
  const handleInput3 = event => {
    setEmail(event.target.value);
  };
  const handleInput4 = event => {
    setPassword(event.target.value);
  };

  const adds = () => {
    localStorage.setItem("fio", fio)
    localStorage.setItem("phone", phone)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    alert('Успешно загеристровались')
  }

  const signin = () => {
    let phones = localStorage.getItem("phone")
    let passwords = localStorage.getItem("password")
    if(phone == phones && password == passwords) {
      redirect("/profile")
    }
  }
  return (
    <>
      <div className="container">
        <Header />    
        <div className="bg">
              <h2 className='text'>Для того, чтобы оставить заявку о нарушении<br/>
              войдите или зарегистрируйтесь</h2>
          <div className='sep'>
            <form action="/profile"> 
              <h2 className='vhod vhod1'>Вход</h2>
              <input onChange={handleInput2} type="text" placeholder='Введите номер телефона' />
              <input onChange={handleInput4} type="text" placeholder='Введите пароль' />
              <button onClick={signin} className='btn' style={{ fontSize: "20px"}}>Войти</button>
            </form>

          <div className="line"></div>

            <form action="">
              <h2 className='vhod'>Регистрация</h2>
              <input onChange={handleInput} type="text"placeholder='Введите ФИО' />
              <input onChange={handleInput2} type="text"placeholder='Введите номер телефона' />
              <input onChange={handleInput3} type="text"placeholder='Введите электронную почту' />
              <input onChange={handleInput4} type="text"placeholder='Введите пароль' />
              <button onClick={adds} style={{ fontSize: "20px"}}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
