import React, { useState } from 'react';

import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import { findMoreOut, vodafone, certain } from '../utils/data';

import { FaArrowAltCircleRight } from "react-icons/fa";


const Home = () => {
    const [card, setCard] = useState('');
    const [cardType, setCardType] = useState([]);
    const [inputText, setInputText] = useState('');
    const [inputValues, setInputValues] = useState([]);
    const [count, setCount] = useState(0);


    const handleCard = (cardType) => {
        setCard(cardType);

        setCardType(prev => (
            [...prev, cardType]
        ));
    }

    const handleChange = (e) => {
        const val = e.target.value;

        setInputText(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputText) return;

        handleCard('submitted');

        setInputValues(prev => (
            [...prev, inputText]
        ));

        setCount(prev => prev + 1);

        setInputText('');
    }


    return (
        <div className='w-full py-[1rem] flex justify-center'>
            <div className='w-3/5 h-[85dvh] flex flex-col gap-2 overflow-y-scroll scroll-content'>
                <Card1 />
                <Card2 text='Do you have a VAT number?' />
                <div className='text-[12px] font-semibold ml-[60px]'>CLICK ON A ⬇ BUTTON</div>
                {
                    cardType?.length === 0 ? (
                        <div className='ml-[60px] flex gap-2'>
                            <Card3
                                title='Certain!  👍'
                                text1='Tell me'
                                text2='everything!'
                                type='left'
                                className='pointer'
                                handleCard={handleCard}
                            />
                            <Card3
                                title='NO'
                                text1="I don't have a VAT"
                                text2='number'
                                type='right'
                                className='pointer'
                                handleCard={handleCard}
                            />
                        </div>
                    ) : (
                        <>
                            {
                                cardType.includes('left') ? (
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex justify-end'>
                                            <Card3
                                                title='Certain!  👍'
                                                text1='Tell me everything!'
                                                type='left'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Card2
                                                text='With SUPER OFFICE ONE you have unlimited internet and calls with 👇 ▪️ Secure Web service to browse safely ✔️ Wifi 6 modem included'
                                                text2='✔️ Activation included'
                                                className='font-semibold'
                                            />
                                            <Card2 text='⏰ Now on promotion starting from €20.99 /month for the first two months 👉 from the 3rd month €28.99/month' />
                                            <Card2 text='Check the coverage in your area now with the help of an operator 👇' />
                                        </div>
                                        {
                                            !certain.some(item => cardType.includes(item)) && (
                                                <div className='flex flex-col gap-2'>
                                                    <div className='text-[12px] font-semibold ml-[60px]'>CLICK ON A ⬇ BUTTON</div>
                                                    <div className='flex flex-wrap gap-2 ml-[60px]'>
                                                        <Card4 title='Activate now' type='activateNow' className='true' handleCard={handleCard} />
                                                        <Card4 title='Free Call' type='freeCall' className='true' handleCard={handleCard} />
                                                        <Card4 title='Check coverage' type='checkCoverage' className='true' handleCard={handleCard} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex justify-end'>
                                            <Card3
                                                title='NO'
                                                text1="I don't have a VAT number"
                                                type='right'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Card2 text='This offer is only for VAT registered customers.' />
                                            <Card2 text='Do you want to know our FIBER for HOME offer instead? 🏠' />
                                        </div>
                                        <div className='text-[12px] font-semibold ml-[60px]'>CLICK ON A ⬇ BUTTON</div>
                                        <div className='ml-[60px]'>
                                            <Card4 title='Find out more 😎' className='true' type='findOutMore' handleCard={handleCard} />
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                }

                {
                    cardType.includes('findOutMore') && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-end'>
                                <Card4 title='Find out more 😎' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Card2
                                    text='Here it is! You have everything included 👇'
                                    text2="FAST fiber up to 1 Gigabit per second 🟠 Wi-Fi 6 modem included 📲 UNLIMITED GB on your family's WindTre numbers"
                                />
                                <Card2 text="Which operator do you have on your cell phone? 📱" />
                            </div>
                            {
                                !findMoreOut.some(item => cardType.includes(item)) && (
                                    <div className='flex flex-col gap-2'>
                                        <div className='text-[12px] font-semibold ml-[60px]'>CLICK ON A ⬇ BUTTON</div>
                                        <div className='flex flex-wrap gap-2 ml-[60px]'>
                                            <Card4 title='WindTree' type='WindTree' className='true' handleCard={handleCard} />
                                            <Card4 title='TIM' type='TIM' className='true' handleCard={handleCard} />
                                            <Card4 title='Vodafone' type='Vodafone' className='true' handleCard={handleCard} />
                                            <Card4 title='Fastweb' type='Fastweb' className='true' handleCard={handleCard} />
                                            <Card4 title='Iliad' type='Iliad' className='true' handleCard={handleCard} />
                                            <Card4 title='Other' type='Other' className='true' handleCard={handleCard} />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

                {
                    findMoreOut?.length > 0 && (
                        findMoreOut.map((item, i) => (
                            cardType.includes(item) && (
                                <div className='flex flex-col gap-2' key={i}>
                                    <div className='flex justify-end'>
                                        <Card4 title={card} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Card2
                                            text='👉 Exclusively online from € 22.99 /month instead of €26.99.'
                                            text3="Activation cost of €39.99."
                                        />
                                        <Card2
                                            text='⏰ Last days of promotion!'
                                            text2="Check coverage in your area now 👇"
                                        />
                                    </div>
                                    {
                                        !vodafone.some(item => cardType.includes(item)) && (
                                            <div className='flex flex-col gap-2'>
                                                <div className='text-[12px] font-semibold ml-[60px]'>CLICK ON A ⬇ BUTTON</div>
                                                <div className='flex flex-wrap gap-2 ml-[60px]'>
                                                    <Card4 title='Activate now' type='activateNow' className='true' handleCard={handleCard} />
                                                    <Card4 title='Free Call' type='freeCall' className='true' handleCard={handleCard} />
                                                    <Card4 title='Check coverage' type='checkCoverage' className='true' handleCard={handleCard} />
                                                    <Card4 title='More information' type='moreInformation' className='true' handleCard={handleCard} />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        ))
                    )
                }

                {
                    cardType.includes('activateNow') && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-end'>
                                <Card4 title='Active now' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Card2
                                    text="Perfect! Activating the offer is very simple 👌 We'll take care of everything 😎"
                                />
                                <Card2
                                    text="Write me your MOBILE number below 👇"
                                />
                            </div>
                            {
                                !cardType.includes('submitted') && (
                                    <>
                                        <div className='flex flex-wrap gap-2 ml-[60px]'>
                                            <div className='w-[320px] bg-orange-500 p-0.5 flex justify-between items-center'>
                                                <input
                                                    type="text"
                                                    value={inputText}
                                                    placeholder='es. 3456677888'
                                                    onChange={handleChange}
                                                    className='w-[250px] py-3 px-3 outline-0 text-[12px]'
                                                />
                                                <div className='mx-5 cursor-pointer' onClick={handleSubmit}>
                                                    <FaArrowAltCircleRight className='text-white' size={30} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] font-semibold ml-[60px]'>PRESS THE ARROW OR ENTER</div>
                                    </>
                                )
                            }
                        </div>
                    )
                }

                {
                    cardType.includes('checkCoverage') && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-end'>
                                <Card4 title='Check Coverage' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Card2
                                    text="Perfect! You will check the coverage in your area with the help of an operator"
                                />
                                <Card2
                                    text="👍 The call is free and without obligation"
                                />
                                <Card2
                                    text="What mobile number can we contact you on? 📲"
                                />
                            </div>
                            {
                                !cardType.includes('submitted') && (
                                    <>
                                        <div className='flex flex-wrap gap-2 ml-[60px]'>
                                            <div className='w-[320px] bg-orange-500 p-0.5 flex justify-between items-center'>
                                                <input
                                                    type="text"
                                                    value={inputText}
                                                    placeholder='es. 3456677888'
                                                    onChange={handleChange}
                                                    className='w-[250px] py-3 px-3 outline-0 text-[12px]'
                                                />
                                                <div className='mx-5 cursor-pointer' onClick={handleSubmit}>
                                                    <FaArrowAltCircleRight className='text-white' size={30} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] font-semibold ml-[60px]'>PRESS THE ARROW OR ENTER</div>
                                    </>
                                )
                            }
                        </div>
                    )
                }

                {
                    cardType.includes('freeCall') && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-end'>
                                <Card4 title='Free call' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Card2
                                    text="Perfect! What mobile number can we contact you on? 📲"
                                />
                                <Card2
                                    text="👍 The call is free and without obligation"
                                />
                            </div>
                            {
                                !cardType.includes('submitted') && (
                                    <>
                                        <div className='flex flex-wrap gap-2 ml-[60px]'>
                                            <div className='w-[320px] bg-orange-500 p-0.5 flex justify-between items-center'>
                                                <input
                                                    type="text"
                                                    value={inputText}
                                                    placeholder='es. 3456677888'
                                                    onChange={handleChange}
                                                    className='w-[250px] py-3 px-3 outline-0 text-[12px]'
                                                />
                                                <div className='mx-5 cursor-pointer' onClick={handleSubmit}>
                                                    <FaArrowAltCircleRight className='text-white' size={30} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] font-semibold ml-[60px]'>PRESS THE ARROW OR ENTER</div>
                                    </>
                                )
                            }
                        </div>
                    )
                }

                {
                    cardType.includes('moreInformation') && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-end'>
                                <Card4 title='More information' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Card2
                                    text="Okay! What is your mobile number? 📲"
                                />
                            </div>
                            {
                                !cardType.includes('submitted') && (
                                    <>
                                        <div className='flex flex-wrap gap-2 ml-[60px]'>
                                            <div className='w-[320px] bg-orange-500 p-0.5 flex justify-between items-center'>
                                                <input
                                                    type="text"
                                                    value={inputText}
                                                    placeholder='es. 3456677888'
                                                    onChange={handleChange}
                                                    className='w-[250px] py-3 px-3 outline-0 text-[12px]'
                                                />
                                                <div className='mx-5 cursor-pointer' onClick={handleSubmit}>
                                                    <FaArrowAltCircleRight className='text-white' size={30} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] font-semibold ml-[60px]'>PRESS THE ARROW OR ENTER</div>
                                    </>
                                )
                            }
                        </div>
                    )
                }

                {
                    cardType.includes('submitted') && (
                        <div className='flex flex-col gap-2'>
                            {
                                count > 0 && (
                                    new Array(count).fill().map((_, i) => (
                                        <div key={i} className='flex flex-col gap-2'>
                                            <div className='flex justify-end'>
                                                <Card4 title={inputValues[i]} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Card2
                                                    text="Perfect! Activating the offer is very simple 👌 We'll take care of everything 😎"
                                                />
                                                <Card2
                                                    text="Write me your MOBILE number below 👇"
                                                />
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                            <div className='flex flex-wrap gap-2 ml-[60px]'>
                                <div className='w-[320px] bg-orange-500 p-0.5 flex justify-between items-center'>
                                    <input
                                        type="text"
                                        value={inputText}
                                        placeholder='es. 3456677888'
                                        onChange={handleChange}
                                        className='w-[250px] py-3 px-3 outline-0 text-[12px]'
                                    />
                                    <div className='mx-5 cursor-pointer' onClick={handleSubmit}>
                                        <FaArrowAltCircleRight className='text-white' size={30} />
                                    </div>
                                </div>
                            </div>
                            <div className='text-[12px] font-semibold ml-[60px]'>PRESS THE ARROW OR ENTER</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home