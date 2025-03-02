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
        { id: 3, name: 'Alice Johnson', role: 'Family', profilePic: '/user3.png' },
        { id: 4, name: 'Bob Brown', role: 'Friend', profilePic: '/user1.png' },
    ];

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };

    const handleSend = () => {
        if (selectedContact) {
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
            <h2 className="text-xl font-bold mb-4">Quick Transfer</h2>
            <div className="bg-white shadow-md rounded-lg p-4">     
                <div className="mb-4 flex items-center justify-between">
                    {showPrev && ( // Conditionally render the Previous button
                    <a 
                        className=" text-white mx-2 w-1/6"
                        onClick={handlePrev}>
                        <img src="/prev.png" alt="Next" className="inline-block w-[50px] h-[50px]" />
                        </a>
                    )}
                    <div className=" flex overflow-x-auto" ref={contactListRef}>
                        <div className="flex">
                            {contacts.map(contact => (
                                <div
                                    key={contact.id}
                                    className={`p-2 w-30 cursor-pointer ${selectedContact?.id === contact.id ? 'bg-gray-200' : ''}`}
                                    onClick={() => handleContactSelect(contact)}>
                                    <img
                                        src={contact.profilePic}
                                        alt={contact.name}
                                        className="w-[70px] h-[70px] rounded-full mx-auto"/>
                                    <div className="text-center">
                                        <p className="font-semibold text-base">{contact.name}</p>
                                        <p className="text-sm text-gray-500">{contact.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <a 
                        className=" text-white mx-2 w-1/6"
                        onClick={handleNext}>
                        <img src="/next.png" alt="Next" className="inline-block w-[50px] h-[50px] mr-1" />
                    </a>
                </div>

                <div className='mb-4'>
                    <label className="block mb-1">Write Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white rounded px-4 py-2">
                    Send
                </button>
            </div>
        </>
    );
};

export default QuickTransfer;
