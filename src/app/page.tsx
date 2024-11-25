import SignInButton from "@/components/SignInButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await getAuthSession()
    if (session?.user) {
        return redirect('/dashboard')
    }
    return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle>Welcome to Examinator!</CardTitle>
                <CardDescription>
                    Examinator la mot nen tang ung dung cho phep nguoi dung cai thien kha nang hoc tap voi AI ho tro phan tich
                </CardDescription>
            </CardHeader>
            <CardContent>
                <SignInButton text="Dang nhap voi Google!" />
            </CardContent>
        </Card>
    </div>
    )
}