import React, { useState, useEffect } from 'react';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [presentAddress, setPresentAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [errors, setErrors] = useState({}); // State to hold validation errors
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    useEffect(() => {
        // Fetch user details from local storage or dummy API
        const fetchUserDetails = () => {
            const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
            if (storedUserDetails) {
                setName(storedUserDetails.name);
                setUsername(storedUserDetails.username);
                setEmail(storedUserDetails.email);
                setDob(storedUserDetails.dob);
                setPresentAddress(storedUserDetails.presentAddress);
                setPermanentAddress(storedUserDetails.permanentAddress);
                setCity(storedUserDetails.city);
                setPostalCode(storedUserDetails.postalCode);
                setCountry(storedUserDetails.country);
                setProfilePicture(storedUserDetails.profilePicture);
            } else {
                // Fallback to dummy API if no data in local storage
                fetch('https://jsonplaceholder.typicode.com/users/1')
                    .then(response => response.json())
                    .then(data => {
                        setName(data.name);
                        setUsername(data.username);
                        setEmail(data.email);
                        setDob('2000-01-01');
                        setPresentAddress('123 Main St');
                        setPermanentAddress('456 Elm St');
                        setCity(data.address.city);
                        setPostalCode(data.address.zipcode);
                        setCountry('Nigeria');
                    })
                    .catch(error => console.error('Error fetching user details:', error));
            }
        };

        fetchUserDetails();
    }, []);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file)); // Preview the image
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]{8,}$/; // Updated password regex

        if (!name) newErrors.name = 'Name is required';
        if (!username) newErrors.username = 'Username is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(password)) {
            newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number';
        } else {
            console.log('Password is valid:', password); // Debugging line
        }
        if (!dob) newErrors.dob = 'Date of Birth is required';
        if (!presentAddress) newErrors.presentAddress = 'Present Address is required';
        if (!permanentAddress) newErrors.permanentAddress = 'Permanent Address is required';
        if (!city) newErrors.city = 'City is required';
        if (!postalCode) newErrors.postalCode = 'Postal Code is required';
        if (!country) newErrors.country = 'Country is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSave = () => {
        if (!validateForm()) {
            return; // Stop if validation fails
        }

        // Create an object with the updated user details
        const updatedUserDetails = {
            name,
            username,
            email,
            password,
            dob,
            presentAddress,
            permanentAddress,
            city,
            postalCode,
            country,
            profilePicture,
        };

        // Save the updated user details to local storage
        localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails));

        alert('Profile updated successfully!'); // Temporary alert for demonstration
    };

    return (
        <div className="bg-white lg:flex justify-between editProfile">
            <div className='lg:w-1/5 px-10'>
                <div className="mb-4 h-32 w-32 lg:mx-1 mx-auto relative">
                    <img 
                        src={profilePicture || '/profile.png'} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover" 
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="hidden"
                        id="profilePictureInput"
                    />
                    <label 
                        htmlFor="profilePictureInput" 
                        className="absolute inset-0 cursor-pointer flex items-center justify-center"
                    >
                        <span className="absolute bottom-1 right-1">
                            <img src="/edit.svg" alt="Edit" className="w-8 h-8" />
                        </span>
                    </label>
                </div>
            </div>

            <div className='w-full px-4'>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">User Name</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your username"
                    />
                    {errors.username && <p className="text-red-500">{errors.username}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-xl p-4 w-full"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                            {showPassword ? (
                                <img src="https://img.icons8.com/material-outlined/24/000000/visible.png" alt="Hide" className="w-6 h-6" />
                            ) : (
                                <img src="https://img.icons8.com/material-outlined/24/000000/invisible.png" alt="Show" className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Date of Birth</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="rounded-xl p-4 w-full"
                    />
                    {errors.dob && <p className="text-red-500">{errors.dob}</p>}
                </div>
            </div>

            <div className='w-full px-4'>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Present Address</label>
                    <input
                        type="text"
                        value={presentAddress}
                        onChange={(e) => setPresentAddress(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your present address"
                    />
                    {errors.presentAddress && <p className="text-red-500">{errors.presentAddress}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Permanent Address</label>
                    <input
                        type="text"
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your permanent address"
                    />
                    {errors.permanentAddress && <p className="text-red-500">{errors.permanentAddress}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your city"
                    />
                    {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Postal Code</label>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your postal code"
                    />
                    {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-base">Country</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="rounded-xl p-4 w-full"
                        placeholder="Enter your country"
                    />
                    {errors.country && <p className="text-red-500">{errors.country}</p>}
                </div>

                <div className='flex justify-end py-4'>
                    <button
                        onClick={handleSave}
                        className="bg-gray-900 text-white w-full rounded-2xl px-8 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
