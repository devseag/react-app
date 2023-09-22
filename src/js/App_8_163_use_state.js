import {Component, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const calcValue = () => {
    console.log('random');

    return Math.random() * (50 - 1) + 1;
}

const Slider = (props) => {

    // const slideStateArray = useState();
    // console.log(slideStateArray);
    // const [slide, setSlide] = useState(10);
    // const [slide, setSlide] = useState(0);
    // const [autoplay, setAutoplay] = useState(false);
    // const [state, setState] = useState({slide:0, autoplay: false});
    const [slide, setSlide] = useState(calcValue);
    const [autoplay, setAutoplay] = useState(false);

    function changeSlide(i) {
        // setSlide(5);
        // setSlide(slide + i); //oldvalue from slide + i
        // setSlide(slide + i);  //oldvalue from slide + i
        // setSlide(slide => slide + i); // async => callback
        // setSlide(slide => slide + i); // async => callback
        // setState(state => ({...state, slide: state.slide + i}));
        setSlide(slide => slide + i); 
    }

    function toggleAutoplay() {
        // setAutoplay(autoplay => !autoplay);
        // setState(state => ({...state, autoplay: !state.autoplay}));
        setAutoplay(autoplay => !autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                {/* <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null} </div> */}
                {/* <div className="text-center mt-5">Active slide {state.slide} <br/> {state.autoplay ? 'auto' : null} </div> */}
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        // onClick={() => this.changeSlide(-1)}>-1</button>
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        // onClick={() => this.changeSlide(1)}>+1</button>
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
