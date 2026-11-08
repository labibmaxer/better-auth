import { auth } from '@/lib/auth';
import React from 'react';
import { headers } from 'next/headers';

const Dashboard = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    }); 
    console.log('Session data in dashboard', session);
    const user = session?.user;
    if(!user) {
        return (
            <div>
                <h1>You are not signed in</h1>
                <p>Please sign in to access the dashboard.</p>
            </div>
        );
    }
    return (
        <div>
            <h1>This is a dashboard</h1>
        </div>
    );
};

export default Dashboard;