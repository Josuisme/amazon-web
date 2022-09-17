import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className='home_row'>
          <Product
          id="516484985" 
          title='The Lean Startup' 
          price={29.99} 
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
          rating={5}
          />
          <Product
          id="1212156825" 
          title='Kenwood kMix standard Mixer for breaking' 
          price={239.0} 
          image='https://dam.kenwoodworld.com/562x468/assets/144447'
          rating={4}
          />
        </div>
        <div className='home_row'>
        <Product
          id="648949055" 
          title='Samsung lc49rg90ssuxen' 
          price={149.99} 
          image='https://www.displaydb.com/assets/images/700/samsung-c49rg90.jpg'
          rating={5}/>
          <Product
          id="558888955" 
          title='Amazon echo 3rd generation' 
          price={98.99} 
          image='http://mobileimages.lowes.com/productimages/8481d3d8-ced8-4aab-a5e1-d05dce3f9375/12025269.jpg'
          rating={4}/>
          <Product
          id="998566555" 
          title='Ipad pro 12.9' 
          price={239.0} 
          image='https://res-1.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1623320152/ytf7czthce0fzljg3pxn.png'
          rating={4}/>
        </div>
        <div className='home_row'>
        <Product
          id="987810568" 
          title='Samsung Watch 5' 
          price={239.0} 
          image='https://cdn.vox-cdn.com/thumbor/6i-81PD9HfTuwrzrkeKRN4TZic8=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/71055579/ezgif_1_b643bcaaab.5.jpg'
          rating={4}/>
        </div>
        </div>
    </div>
  )
}

export default Home