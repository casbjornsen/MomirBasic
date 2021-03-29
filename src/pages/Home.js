import React from 'react'
import PlayerSetup from '../components/PlayerSetup'
import '../css/Home.css'

function Home(props) {
    return (
        <div className="home">
            <h2>Welcome to Momir Basic</h2>
            <PlayerSetup />
        </div>
    );
}

export default Home;