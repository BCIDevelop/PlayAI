export type FetchedAIModelsType = {
    _id:string,
    name:string,
    description:string,
    isSupervised:boolean,
    tags:string[],
    typeAI:string,
    dataset:'large' | 'medium' | 'small',
    purpose : "classification" | 'prediction' | 'clustering'
}
