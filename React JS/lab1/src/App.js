import DynamicInput from './Components/DynamicInput/dynamicInput'
import ImageSlider from './Components/ImageSlider/imageSlider';


function App(){
    return(
        <div className="container-fluid">
            <div className="app d-flex flex-column justify-content-around align-items-center">
                <DynamicInput />
                <ImageSlider/>
            </div>
        </div>
    )
}

export default App;