import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import confusionMatrix from '../images/confusion-matrix.jpg'

export default function FAQ() {
    return (
        <div>
            <div className="main-faq">
                <Nav />
            </div>
            <div className="faq-body">
                <div className="title faq">Frequently Asked Questions</div>


                <div className="question">
                    What is the project about?
                </div>
                <div className="ans">
                    <p>Educational data mining describes a research field concerned with the application of data mining, machine learning and statistics to information generated from educational settings.</p> 
                    <p>Classification is usually applied in educational data mining that can predicts groups in a data set. It is used by scholars in academic arena to better comprehend behaviors of student, to improve their ability, and to deliver alternate solution for problems. Classification model is used for predicting academic performance of student to identify students at risk.</p>
                </div>

                <div className="question">
                    What algorithms do we use?
                </div>
                <div className="ans">
                    <p><b>Naive Bayes algorithm</b> is a classification technique based on Bayes’ Theorem with an assumption of independence among predictors. In simple terms, a Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature.</p>
                    <br/>
                    <p><b>Linear regression</b> is a linear model that assumes a linear relationship between the input variables (x) and the single output variable (y). y can be calculated from a linear combination of the input variables (x).</p>
                </div>


                <div className="question">
                    How do we predict your future grade and score?
                </div>
                <div className="ans">
                    <p>Student performance is predicted using a data mining technique called classification rules. The naïve Bayes classification algorithm is used by the administrator to predict student performance based on performance detail. The algorithm is a simple probabilistic classifier that calculates a set of probabilities by counting the frequency and combinations of values in a given dataset. The algorithm uses the Bayes theorem and assumes that all attributes are independent given the value of the class variable. This conditional independence assumption rarely holds true in real-world applications, hence the characterization as naïve. However, the algorithm tends to perform well and learn rapidly in various supervised classification problems</p>
                    <br/>
                    <p>Following is the <b>Confusion Matrix</b> of the Machine learning model.</p>
                    <img src={confusionMatrix} style={{"width":"100%", "maxWidth":"600px"}} alt=""/>
                </div>

            </div>
            <Footer />
        </div>
    )
}
