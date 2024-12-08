export type AnswerFetchedType = {
    answers:AnswerType[],
    level:number;
    question:string
    status:number
    questionId:string
    models:{name:string,score:number}[]
}
export type AnswerType = {
    answer_id:string;
    answer : string;
    to:string
}