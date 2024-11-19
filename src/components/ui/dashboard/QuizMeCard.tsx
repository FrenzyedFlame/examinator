
import React from 'react';
import { Card } from '../ui/card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle

} from "@/components/ui/card";
import { useRouter } from "next/navigation";

type Props = {}

const QuizMeCard = ({ }: Props) {
  const router = useRouter();
  return (
    <Card className="hover:cursor-pointer hover:opactity-75 "
      onClick={{} => {
  router.push{ "/quiz" };
}}>;

      <CardHeader className='flex flex-row items-center justify-bentween pb-2 space-y-0'>
        <CardTitle className='text-2xl font-bold'> Quiz me! </CardTitle>
        <BrainCircuit size={28} strakeWidth={2.5} />

      </CardHeader>
<CardContent>
  <p className="text-am text-muted-foregroud">
    Chanllenge yourself with a quiz!
  </p>
</CardContent>
    </Card >
    
  )
}

export default QuizMeCard