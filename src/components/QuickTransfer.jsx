import React, { useState, useRef } from 'react';

const QuickTransfer = () => {
    const [amount, setAmount] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [showPrev, setShowPrev] = useState(false); // State to manage visibility of the Previous button
    const contactListRef = useRef(null); // Reference to the contact list container

    // Sample data for frequent transfer contacts
    const contacts = [
        { id: 1, name: 'Livia Bator', role: 'CEO', profilePic: '/user.png' },
        { id: 2, name: 'Randy Press', role: 'Director', profilePic: '/user1.png' },
        { id: 3, name: 'Workman', role: 'Designer', profilePic: '/user3.png' },
        { id: 4, name: 'Bob Brown', role: 'Friend', profilePic: '/user1.png' },
        { id: 5, name: 'Randy Press', role: 'Director', profilePic: '/user1.png' },
        { id: 6, name: 'Workman', role: 'Designer', profilePic: '/user3.png' },
        { id: 7, name: 'Bob Brown', role: 'Friend', profilePic: '/user1.png' },

    ];

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };

    const handleSend = () => {
        if (!amount) {
            alert('Please enter an amount to send.');
        } else if (selectedContact) {
            alert(`Sending $${amount} to ${selectedContact.name}`);
            setAmount(''); 
            setSelectedContact(null); 
        } else {
            alert('Please select a contact to send money to.');
        }
    };

    const handleNext = () => {
        if (contactListRef.current) {
            contactListRef.current.scrollBy({ left: 200, behavior: 'smooth' }); 
            setShowPrev(true); 
        }
    };

    const handlePrev = () => {
        if (contactListRef.current) {
            contactListRef.current.scrollBy({ left: -200, behavior: 'smooth' }); 
            const currentScrollPosition = contactListRef.current.scrollLeft;
            if (currentScrollPosition <= 0) {
                setShowPrev(false); 
            }
        }
    };

    return (
        <>
            <h2 className="text-xl font-bold mb-4 bluetext">Quick Transfer</h2>
            <div className="bg-white shadow-md rounded-4xl p-4">     
                <div className="py-4 flex items-center justify-center">
                    {showPrev && ( // Conditionally render the Previous button
                    <a 
                        className=" text-white w-20 flex justify-center cursor-pointer"
                        onClick={handlePrev}>
                        <img src="/prev.png" alt="Previous" className="inline-block w-[50px] h-[50px]" />
                        </a>
                    )}
                    <div className="flex overflow-hidden" ref={contactListRef} style={{ width: '300px' }}>
                        <div className="flex">
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`p-2 w-35 cursor-pointer ${selectedContact?.id === contact.id ? ' rounded-2xl font-interBold ' : ''}`}
                                    onClick={() => handleContactSelect(contact)}>
                                    <img
                                        src={contact.profilePic}
                                        alt={contact.name}
                                        className="w-[70px] h-[70px] rounded-full mx-auto"/>
                                    <div className="text-center">
                                        <p>{contact.name}</p>
                                        <p className="text-sm lightbluetext">{contact.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <a 
                        className=" text-white w-20 flex justify-center cursor-pointer"
                        onClick={handleNext}>
                        <img src="/next.png" alt="Next" className="inline-block w-[50px] h-[50px] " />
                    </a>
                </div>

                <div className='flex py-4 items-center justify-between'>
                    <label className="block mb-1 text-sm lightbluetext">Write Amount</label>
                    <div className=' flex'>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="Enter amount"
                            className="bg-gray-100 rounded-l-4xl py-2 px-6 lightbluetext lg:w-40 w-50 focus:outline-none focus:ring-0"
                            min="0" // Ensures only positive amounts can be entered
                            step="0.01" // Allows for decimal values
                        />
                        <button
                            onClick={handleSend}
                            className="bg-gray-900 text-white rounded-l-4xl rounded-r-4xl pl-6 py-4 flex items-center -ml-6 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700">
                            Send
                            <img src="/arrow.png" alt="Arrow" className="inline-block w-6 h-6 ml-2 mr-8" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickTransfer;
