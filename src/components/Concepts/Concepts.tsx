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
           
                <ConceptCard text={"A model is a mathematical function derived from the patterns observed in data related to an event. This function can be used for predictions, classifications, or associations, helping to make better decisions when addressing real-world problems."} title={"Models"}>
                    <></>
                </ConceptCard>
               <ConceptCard text={"This refers to the type of training your AI model undergoes. Training helps the model learn patterns in the data to make accurate predictions. It’s worth mentioning that there are other types of learning, such as semi-supervised learning."} title={"Supervised / Unsupervised Learning"}>
                    <ul>
                        <li className="concept-card-element-list">Supervised Learning: The model is provided with data points (observations) along with their corresponding "solutions," often called labels or target variables.</li>
                        <li className="concept-card-element-list">Unsupervised Learning: The model is trained with data points that do not include labels.</li>
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
