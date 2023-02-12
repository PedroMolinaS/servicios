import React, { useState } from 'react'
import '../styles/style.css'

const Home = () => {

  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <main className={dark ? 'dark': ''}>
      <header>
        <a href="#" className='header__logo'>Logo</a>
        <div className="header__right">
          <div onClick={() => setDark(!dark)} className="header__btns header__daynight">
            <svg className={dark ? 'inactive': ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <svg className={dark ? '': 'inactive'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Sunny</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
            
          </div>
          <div onClick={()=>setMenu(!menu)} className="header__btns header__menutoggle">
            <svg className={menu ? 'inactive': ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Menu</title><path  stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
            <svg className={menu ? '': 'inactive'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
          </div>
        </div>
      </header>
      
      <section className='main'>
        <video src="assets/team2.mp4" autoPlay loop muted type='mp4'></video>
        <img className='main__mask' src="assets/mask.webp" alt="imagend de fondo" />
        <h2>Ahora Pues</h2>
      </section>

      <ul className={`navegacion ${menu ? '':'inactive'}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

    </main>
  )
}

export default Home