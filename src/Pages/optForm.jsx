import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function OptOutForm() {

    const apiUrl = import.meta.env.VITE_API_URL;

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
    });

    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === 'email') {
            validateEmail(value);
        }
    };

    const validateEmail = (email) => {
        const genericDomains = [
            'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com',
            'yandex.com', 'gmx.com', 'zoho.com', 'mail.com', 'inbox.com', 'live.com', 'msn.com', 'qq.com',
            'naver.com', 'web.de', 'mail.ru', 'tutanota.com', 'pm.me', 'bk.ru', 'rambler.ru', 'rocketmail.com',
            'ymail.com', 'excite.com', 'lycos.com', 'rediffmail.com', 'hushmail.com', 'fastmail.com', 'bellsouth.net',
            'verizon.net', 'att.net', 'comcast.net', 'sbcglobal.net', 'charter.net', 'shaw.ca', 'cox.net',
            'earthlink.net', 'frontier.com', 'juno.com', 'netzero.net', 'aim.com', 'optonline.net', 'me.com', 'mac.com'
        ];
        
        const emailDomain = email.split('@')[1];

        if (genericDomains.includes(emailDomain)) {
            setEmailError('Please enter a company email address.');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(emailError) {
            toast.error(emailError);
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/optForm`, form);
            console.log(response.data);

            setForm({
                firstName: '',
                lastName: '',
                email: '',
                companyName: '',
            });

            toast.success("Form submitted successfully");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Error occurred while submitting form");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-purple-900 mb-4">Opt Out</h1>
                <p className="text-gray-600 mb-6">
                    Your privacy is important to us. Fill out the form below to opt out of the sale of
                    your personal data to third parties. For further information, see
                    <span 
                        className="text-purple-600 underline cursor-pointer ml-1"
                        onClick={() => navigate("/privacy-policy")}
                    >
                        TalentId’s Privacy Policy
                    </span>.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                            required
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                            placeholder="Company Name"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OptOutForm;
