import { getAuthSession } from '@/lib/nextauth';
import { redirect } from "next/navigation";
import React from 'react';

type Props = {};
export const metadata = {
    title: "Dashboard | Quizmify"
};

const Dashboard = async (props: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
        return redirect("/");

    }
    return {< main className = "p-8 mx-auto max-w-7xl" >
<div className="flex items-center">
<h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
</div> 
<div className="gird gap-4 mt-4 mid:gird-cols-2">
<QuizMeCard />
< HistoryCar />
</div>
<div className="gird gap-4 mt-4 md:gird-conls-2 lg:gird-cols-7"></div>
</main > 
}
return <div>Dashboard</div>;
  
};

export default Dashboard;