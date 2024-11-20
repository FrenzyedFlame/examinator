import React from 'react'
import { Question } from "@prisma/client"
import { Table , TableCaption, TableCell , TableBody, TableHead, TableHeader , TableRow,} from "../ui/table";

type Props = {
questions: Question[];   
}

const QuestinList = ({questions} : Props) => {
  let gameType = questions[0].questionType;
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">no.</TableHead>
          <TableHead>Question & Correct Answer</TableHead> 
          <TableHead>Your Answer</TableHead>
          {gameType === "open_ended"&&(
            <TableHead className="w-[10px] text-right">Accuracy</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
          <>
          {questions.map((question, index) => {
            return (
            <TableRow key={question.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {question.question}
                <br/>
                <br/>
                <span className="font-semibold">{question.answer}</span>
              </TableCell>
              {gameType === "mcq"&&(
                <TableCell className={cn({
                  "text-green-600:":question.isCorret,
                  "text-red-600": !question.isCorret,
                })}
                >
                  {question.userAnswer}
                </TableCell>
              )}
              {gameType === "opend_ended" &&(
                <TableCell>{question.userAnswer}</TableCell>
              )}
              {gameType === "open_ended" &&(
                <TableCell className="text-right">
                  {question.userAnswer}</TableCell>
              )}
            </TableRow>
            );
          })}
          </>
      </TableBody>
    </Table>
    
  );
}

export default QuestinList