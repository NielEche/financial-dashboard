import React, { useState } from 'react';
import EditProfile from '../components/settings/EditProfile';
import '../style/settings.css'

const Settings = () => {
    const [activeTab, setActiveTab] = useState('editProfile'); // State to manage the active tab

    return (

        <div className="bg-gray-100 mt-2 py-2">
            <div className="bg-white shadow-md rounded-2xl lg:m-8 m-4">
                <div className="flex space-x-4 border-b border-gray-100 px-2 pt-4">
                    <button
                        className={`cursor-pointer py-2 px-4 text-base ${activeTab === 'editProfile' ? 'text-black border-b-2 border-black' : 'lightbluetext'}`}
                        onClick={() => setActiveTab('editProfile')}
                    >
                        Edit Profile
                    </button>
                    <button
                        className={`cursor-pointer py-2 px-4 text-base ${activeTab === 'preferences' ? 'text-black border-b-2 border-black' : 'lightbluetext'}`}
                        onClick={() => setActiveTab('preferences')}
                    >
                        Preferences
                    </button>
                    <button
                        className={`cursor-pointer py-2 px-4 text-base ${activeTab === 'security' ? 'text-black border-b-2 border-black' : 'lightbluetext'}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Security
                    </button>
                </div>
                <div className="mt-4 p-4">
                    {activeTab === 'editProfile' && <EditProfile />} {/* Render EditProfile component */}
                    {activeTab === 'preferences' && (
                        <div>
                            <h3 className="text-lg font-bold">Preferences</h3>
                            <p>Manage your preferences here.</p>
                        </div>
                    )}
                    {activeTab === 'security' && (
                        <div>
                            <h3 className="text-lg font-bold">Security</h3>
                            <p>Manage your security settings here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
  