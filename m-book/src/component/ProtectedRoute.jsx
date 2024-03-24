import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = Cookies.get('token'); 

                if (token) {
                    const res = await axios.get(
                        "http://localhost:4000/v1/user/profile",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                    if (res.data.success) {
                        setUser(res.data.data);
                    } else {
                        console.error("Failed to fetch user data:", res.data.message);
                    }
                } else {
                    console.log("Token not found in the cookie.");
                }
            } catch (err) {
                console.error("Error occurred while fetching user data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        getUser();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        // Redirect to login page if token is not present or user data couldn't be fetched
        return <Navigate to="/login" />;
    }

    // Render protected route content here if user is authenticated
    return (
        <div>
            <p>Welcome, {user.username}!</p>
            {/* Your protected route content goes here */}
        </div>
    );
};

export default ProtectedRoute;
