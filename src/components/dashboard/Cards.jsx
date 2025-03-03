import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; // Importing Modal from react-modal

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    useEffect(() => {
        // Set the app element for accessibility
        Modal.setAppElement('#root'); // Replace '#root' with the ID of your app's root element

        // Mocking API call to fetch card details
        const fetchCardDetails = async () => {
            // Simulating an API response
            const response = [
                { id: 1, cardholder: 'Daniel Eche', cardNumber: '3778 **** **** 1234', balance: '$2,500.00', valid: '12/22', type: 'gold' },
                { id: 2, cardholder: 'Daniel Eche', cardNumber: '6883 **** **** 5678', balance: '$3,450.00', valid: '12/22', type: 'regular'},
                { id: 3, cardholder: 'Daniel Eche', cardNumber: '3923 **** **** 9012', balance: '$6,000.00', valid: '12/22', type: 'regular' },
            ];
            setCards(response);
        };

        fetchCardDetails();
    }, []);

    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
    <>
        <div className='flex justify-between'>
            <h2 className="text-xl bluetext font-bold">My Cards</h2>
            <button className="bg-transparent bluetext font-semibold text-black px-4 hover:underline cursor-pointer" onClick={openModal}>
                See All
            </button>
        </div>

        <div className="mt-4 md:w-[700px] w-[350px]">
            <div className="overflow-x-auto whitespace-nowrap">
                 {/*My cards*/}
                {cards.map(card => (
                    <div key={card.id} className=" inline-block rounded-4xl border-1 border-gray-200 pt-6 m-2"
                        style={{
                            backgroundImage: card.type === 'gold' 
                                ? "url('/RectangleBG.svg')" 
                                : "url('/RectangleW.svg')",
                            backgroundSize: 'cover'
                        }}>
                        <div className={`flex justify-between px-8 ${card.type === 'gold' ? 'text-white' : 'text-Darkblue'}`}>
                            <div>
                                <p className='text-xs'>Balance</p>
                                <p className="text-lg font-bold">{card.balance}</p>
                            </div>
                            <div>
                                <img 
                                    src={card.type === 'gold' ? "/WChip_Card.svg" : "/BChip_Card.svg"}
                                    alt="Chip" 
                                    className="mx-auto"
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </div>

                        <div className={`flex px-8 py-6 ${card.type === 'gold' ? 'text-white' : 'text-Darkblue'}`}>
                            <div>
                                <p className='text-xs opacity-50'>CARD HOLDER</p>
                                <h3 className="text-sm font-bold">{card.cardholder}</h3>
                            </div>
                            <div className='px-12'>
                                <p className='text-xs opacity-50'>VALID THRU</p>
                                <p className="text-sm font-bold">{card.valid}</p>
                            </div>
                        </div>

                        <div className={`flex justify-between px-8 mt-6 py-4 border-t-1 border-gray-100 rounded-b-4xl ${card.type === 'gold' ? 'text-white border-gray-600' : 'text-Darkblue'} mt-auto`} 
                            style={card.type === 'gold' ? { background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))' } : {}}>
                            <div>
                                <p className='font-bold'>{card.cardNumber}</p>
                            </div>
                            <div>
                                <img 
                                    src={card.type === 'gold' ? "/Group17.svg" : "/Group18.svg"}
                                    alt="Logo" 
                                    className="mx-auto"
                                    width={44}
                                    height={30}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal for displaying all cards */}
        <Modal 
            isOpen={isModalOpen} 
            onRequestClose={closeModal} 
            contentLabel="Card Details" 
            className="max-w-3xl mx-auto "
            overlayClassName="fixed inset-0 bg-gray-200 pt-10 px-6 z-[1000]">
            <h2 className="text-xl font-bold p-6">All Cards</h2>
            <button onClick={closeModal} className="absolute top-2 right-2 p-6 cursor-pointer">Close</button>
            <div className="overflow-auto h-9/10 flex flex-wrap">
            {cards.map(card => (
                    <div key={card.id} className=" inline-block rounded-4xl border-1 border-gray-200 pt-6 m-2"
                        style={{
                            backgroundImage: card.type === 'gold' 
                                ? "url('/RectangleBG.svg')" 
                                : "url('/RectangleW.svg')",
                            backgroundSize: 'cover'
                        }}>
                        <div className={`flex justify-between px-8 ${card.type === 'gold' ? 'text-white' : 'text-Darkblue'}`}>
                            <div>
                                <p className='text-xs'>Balance</p>
                                <p className="text-lg font-bold">{card.balance}</p>
                            </div>
                            <div>
                                <img 
                                    src={card.type === 'gold' ? "/WChip_Card.svg" : "/BChip_Card.svg"}
                                    alt="Chip" 
                                    className="mx-auto"
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </div>

                        <div className={`flex px-8 py-6 ${card.type === 'gold' ? 'text-white' : 'text-Darkblue'}`}>
                            <div>
                                <p className='text-xs opacity-50'>CARD HOLDER</p>
                                <h3 className="text-sm font-bold">{card.cardholder}</h3>
                            </div>
                            <div className='px-12'>
                                <p className='text-xs opacity-50'>VALID THRU</p>
                                <p className="text-sm font-bold">{card.valid}</p>
                            </div>
                        </div>

                        <div className={`flex justify-between px-8 mt-6 py-4 border-t-1 border-gray-100 rounded-b-4xl ${card.type === 'gold' ? 'text-white border-gray-600' : 'text-Darkblue'} mt-auto`} 
                            style={card.type === 'gold' ? { background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))' } : {}}>
                            <div>
                                <p className='font-bold'>{card.cardNumber}</p>
                            </div>
                            <div>
                                <img 
                                    src={card.type === 'gold' ? "/Group17.svg" : "/Group18.svg"}
                                    alt="Logo" 
                                    className="mx-auto"
                                    width={44}
                                    height={30}
                                />
                            </div>
                        </div>
                    </div>
            ))}
        
            </div> 
        </Modal>
    </>
    );
};

export default Cards; 