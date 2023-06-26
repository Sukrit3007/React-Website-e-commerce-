import React from 'react'
import './LandingPage.css';
import plant from './pot-in-hand.png'
import { MagnifyingGlass ,ArrowRight} from 'phosphor-react'
import { PROUDUCTS } from '../../Products';
import { Card } from '../../components/Product-card/Card';
import { Button } from '../../components/Button/ Button';


function LandingPage() {
  return (
   <>
    <div className="main">
        <div className="main-top">
            <div className="poster">
                <div className="poster-left">
                    <div className="text">
                        <div className="text-top">
                            <h1>Buy your dream plants</h1>
                        </div>
                        <div className="text-bottom">
                            <div className="text-bottom-left">
                                <h1>50+</h1>
                                <h2>Plant Species</h2>
                            </div>
                            <div className="text-bottom-right">
                                <h1>100+</h1>
                                <h2>Customers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <form action="" className='form' id='form1'>
                            <input type="text" name="user" placeholder="What are you looking for?" className='form-input'/>                           
                        </form>
                        <button type="submit" form="form1" value="Submit" className='form-button'><MagnifyingGlass size={24}  className='form-search-icon'/> </button>
                    </div>
                </div>
                <div className="poster-right">
                    <div className="plant-bg"></div>
                    <img src={plant} alt="" />
                </div>
            </div>
        </div>


        <div className="main-bottom">
            <div className="main-bottom-left">
                <div className="main-bottom-text">
                    <h1>Best Selling Plants</h1>
                    <h3>Easiest way to healthy life by buying your favorite plants </h3>
                </div>
                <div className="main-bottom-button">
                    <Button title = 'See more' bg ='#266C0482' />
                </div>
            </div>
            <div className="products">
                {PROUDUCTS.map((plants) => <Card data={plants} /> )}
            </div>
        </div>
    </div>
   
   </>
  );
}

export default LandingPage
