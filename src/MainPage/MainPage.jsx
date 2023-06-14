import React, { useState } from 'react';
import { useEffect } from 'react';
import './MainPage.css';
import heart from './Images/heart.png';
import pencil from './Images/pencil.png';
import searchImg from './Images/search.png'
import Places from '../Places/Places';
import AOS from "aos";
import "aos/dist/aos.css";
import Sending from '../Sending/Sending';

const MainPage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [openFolow, setOpenFollow] = useState(false);
    const [openMain, setOpenMain] = useState(true)
    const [openPlace, setOpenPlace] = useState(true)
    const [search, setSearch] = useState('');
    const [openSending, setOpenSending] = useState(false)
    const [items, setItems] = useState([])
    const addToFollow = (card) => {
        setItems([...items, card])
        console.log(items)

    }

    const UnFollow = (card) => {
        let deleteCard = items.filter((item) => item.id != card.id);
        setItems(deleteCard);

    }
    const OpenFollow = () => {
        setOpenFollow(true)
        setOpenMain(false)
        setOpenPlace(false)

    }
    const CloseFollow = () => {
        setOpenFollow(false)
        setOpenMain(true)
        setOpenPlace(true)

    }
    const OpenSending = () => {
        setOpenSending(true);
        setOpenMain(false)
        setOpenPlace(false)
    }
    const CloseSending = () => {
        setOpenSending(false);
        setOpenMain(true)
        setOpenPlace(true)

    }
    const Search = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className='MainPage'>
            {
                openMain &&
                <div className="Header">
                    <div className="Logo" data-aos='fade-left'>Happy Places</div>
                    <div className="navbar">
                        <input type="text" className='HeaderInput' placeholder='Шукайте цікаві місця для відпочинку' value={search} onChange={Search} data-aos='fade-right' />
                        <img src={searchImg} alt="" className='SearchImg' data-aos='fade-right' />
                        <div className="SendingBtn">
                            <img src={pencil} alt="" className='SendingImg' onClick={OpenSending} />
                        </div>

                        <div className='FollowBtn' onClick={OpenFollow} data-aos='fade-up'>
                            <img src={heart} alt="" className='FollowImg' />
                        </div>
                    </div>
                </div>



            }
            {
                openPlace && (
                    <Places addToFollow={addToFollow} search={search} />

                )
            }
            {
                openSending && (
                    <Sending CloseSending={CloseSending} />
                )
            }
            {
                openFolow && (

                    <div className="FollowContainer">
                        <div className="FollowContainerHead">
                            <button onClick={CloseFollow} className='FollowClose'>Close</button>
                        </div>
                        <div className="FollowCardContainer">
                            {
                                items.map((item) => (
                                    <div className='FollowCard' key={item.id}>
                                        <div className="CardImageContainer">
                                            <img src={item.img} alt="" className='MainImage' />
                                            <div className="AdditionImages">
                                                <img src={item.firstImg} alt="" className='AdditionImg' />
                                                <img src={item.secondImg} alt="" className='AdditionImg' />
                                                <img src={item.thirdImg} alt="" className='AdditionImg' />
                                            </div>
                                        </div>
                                        <div className="CardTextContainer">
                                            <h3 className='Name'>{item.name}</h3>
                                            <div className="text">


                                                <p>{item.text}</p>
                                                <h4> Локація: <span>{item.location}</span></h4>
                                                <h4> Адреса: <span>{item.adress}</span></h4>
                                                <h4> Ціна: <span>{item.price}грн</span></h4>
                                                <h4> Час роботи: <span>{item.time}</span></h4>
                                                <h4> Телефон: <span>{item.phone}</span></h4>
                                                <a href={item.site}> Cайт: <span>{item.site}</span></a>
                                                <button onClick={() => UnFollow(item)} className='UnFollow'>Unfollow</button>
                                            </div>
                                        </div>


                                    </div>
                                ))
                            }
                        </div>

                    </div>

                )
            }




        </div>
    );
};

export default MainPage;
