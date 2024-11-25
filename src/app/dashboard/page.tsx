import Exam from '@/components/dashboard/Exam';
import HistoryCard from '@/components/dashboard/HistoryCard';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from "next/navigation";
import React from 'react';

type Props = {};

export const metadata = {
    title: "Dashboard | Examinator"
};

const Dashboard = async (props: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
        return redirect("/");
    }
    return <main className='p-8 mx-auto max-w-7x1'>
        <div className='flex items-center'>
            <h2 className='mr-2 text-3x1 font-bold tracking-tight'></h2>
        </div>

        <div className='grid gap-4 mt-4 md:grid-cols-2'>
            <Exam />
            <HistoryCard />
        </div>

        <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7'></div>
    </main>
};

export default Dashboard;