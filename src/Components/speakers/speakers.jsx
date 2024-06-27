import React, { useRef, useState } from 'react';
import './speakers.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';

const Speakers = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);

    const slideForward = () => {
        if (tx >-66.66) { // Adjust according to the total slides and visible slides
            setTx(tx - 33.33);
        }
    }

    const slideBackward = () => {
        if (tx < 0) {
            setTx(tx + 33.33);
        }
    }

    return (
        <div className='speakers' id='speakers'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p1} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Dr. Pramod Kumar Maurya </h3>
                                <span>Principal Scientist <br /> CSIR-NIO </span>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p2} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Prof. Aakash Arora </h3>
                                <span>Assistant Professor <br /> IIT Delhi  </span>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p3} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Dr. Amit Ray  </h3>
                                <span>Naval Architect  <br /> Indian Navy  </span>
                            </div>
                           
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p4} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Sutti Omnath Dinesh Babu  </h3>
                                <span>Director <br /> K.U.M. India Private Limited 

</span>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p5} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Samrat K.  </h3>
                                <span>Regional Sales Manager  <br /> Norbit </span>
                            </div>
                        
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p6} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>V. K. Rai </h3>
                                <span>Ex-Scientist F & Project Head @TDB-DST, Founding Program<br /> Director iDEX-DIO  </span>
                            </div>
                           
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p7} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Milind Kulshreshtha  </h3>
                                <span>Founder and CEO <br />AiKairos Pvt Ltd </span>
                            </div>
                           
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={p8} alt="" className='speaker-image' />
                            </div>
                            <div>
                                <h3>Dr. Rashi Mehrotra </h3>
                                <span>Technical (Cofounder) <br /> AiKairos Pvt Ltd </span>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Speakers;
