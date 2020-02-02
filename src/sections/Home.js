import React from 'react'
import Underlined from '../components/Underlined'

import '../sass/sections/home.scss'



const Home = () => {


    return( 
        <div className='section home'>
            <div className='home-p'>
                <Underlined
                    marginLeft = '-10%'
                >
                    <h1>Bussiness Club. <br/>Lorem ipsum dolor sit.</h1>
                </Underlined>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore</p>

            </div>
            <div className='home-p second-home-p'>
                <Underlined
                    marginLeft='30%'
                >
                    <h1>What we do</h1>
                </Underlined>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore</p>

            </div>

            
        </div>
    )

}


export default Home