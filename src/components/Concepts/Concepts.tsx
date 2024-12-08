import ConceptCard from "../ConceptCard/ConceptCard"
import './concepts.css'
import NavigationCard from "../NavigationCard/NavigationCard"
const Concepts = () => {
  return (
    <div className="concept-main-container">
        <div className="concept-main-container__title-container concept-title-container">
            <svg className="concept-title-container__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <p className="concept-title-container__title"> Concepts</p>  
        </div>
        <section className="concept-main-container__section">
           
                <ConceptCard text={"Mathematic Function obtained from the patterns presented in observations of an event, this function can make prediction or classification or association to help you to take better decisions of a real world problem"} title={"Models"}>
                    <></>
                </ConceptCard>
               <ConceptCard text={"This is refer to the type of training that your AI model will have, the training of a model helps to learn the patterns of the observations in order to have good predictions, is good to mention that there are other types of Learning that AI model can have like Semi SUpervised Learning"} title={"Supervised / Unsupervised Learning"}>
                    <ul>
                        <li className="concept-card-element-list">Supervised Learning: You give the model observations with its "solutions" this solution is often call labels, this attribute is also called target variable</li>
                        <li className="concept-card-element-list">Unsupervised Learning: You only have the observations but without the labels</li>
                    </ul>
               </ConceptCard>
                <ConceptCard text={"Is a part of the Machine Learning area, where you use Neural Networks that is based on the perceptron unit. Perceptron is say that is the representation of how a real neuron in a person works. There are three widely used architectures"} title={"Deep Learning"}>
                    <ul>
                        <li className="concept-card-element-list">Convolutional Neural Network(CNN): Commonly used for image processing</li>
                        <li className="concept-card-element-list">Recurrent Neural Network(RNN): Commonly used for audio or text processing</li>
                        <li className="concept-card-element-list">Fully Connected Neural Networks(FCNN): Used for simple classificaiton or prediction</li>
                    </ul>
                </ConceptCard>
                <NavigationCard to={"/playground"}></NavigationCard>  
        </section>
    </div>
  )
}

export default Concepts
