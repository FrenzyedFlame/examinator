import SignInButton from "@/components/SignInbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle

} from "@/components/ui/card";
import { redirect } from 'next/navigation';
import { getAuthSession } from "@/lib/nextauth";
export default async function Home() {
  const sesssion = await getAuthSession()
  if (session?.user) {
    //that means the user is logged in
    return redirect('/dashboard')
  }
  return (

    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle> Welcome to Quizmify!</CardTitle>
          <CardDescription>
            Quizmify is a quiz app that allows you to create and share quizzwith your firends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignTnButton text="Sign In with Google!" />
        </CardContent>
      </Card>
    </div>

  );
}
