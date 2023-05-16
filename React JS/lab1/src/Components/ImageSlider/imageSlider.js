import { Component } from "react";
import './imageSlider.css'

class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0,
            intervalTime: null,
            pauseDisabled: true,
            playDisabled: false,
            nextDisabled: false,
            prevDisabled: true,
        }
    }

    prevImage = () => {
        let { currentSlideIndex } = this.state;
        let slides = document.querySelectorAll(".slide");
        let newIndex = currentSlideIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        if (newIndex === 0) {
            this.setState({
                prevDisabled: true,
                nextDisabled: false,
                currentSlideIndex: newIndex,
            });
        } else {
            this.setState({
                prevDisabled: false,
                nextDisabled: false,
                currentSlideIndex: newIndex,
            });
        }
        slides.forEach((slide, index) => {
            if (index === newIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    };

    nextImage = () => {
        let { currentSlideIndex } = this.state;
        let slides = document.querySelectorAll(".slide");
        let newIndex = currentSlideIndex + 1;
        if (newIndex === slides.length) {
            newIndex = 0;
        }
        if (newIndex === slides.length - 1) {
            this.setState({
                nextDisabled: true,
                currentSlideIndex: newIndex,
            });
        } else {
            this.setState({
                prevDisabled: false,
                nextDisabled: false,
                currentSlideIndex: newIndex,
            });
        }
        slides.forEach((slide, index) => {
            if (index === newIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    };

    playImages = () => {
        let { currentSlideIndex } = this.state;
        let slides = document.querySelectorAll(".slide");
        let intervalTime = setInterval(() => {
            let newIndex = currentSlideIndex + 1;
            if (newIndex === slides.length) {
                newIndex = 0;
            }
            const prevDisabled = newIndex > 0 ? false : true;
            const nextDisabled = newIndex === slides.length - 1 ? true : false;
            this.setState({
                currentSlideIndex: newIndex,
                prevDisabled,
                nextDisabled,
            });
            this.nextImage();
        }, 1000);
        this.setState({
            intervalTime,
            pauseDisabled: false,
            playDisabled: true,
        });
    };

    pauseImages = () => {
        let { intervalTime } = this.state;
        clearInterval(intervalTime);
        this.setState({
            pauseDisabled: true,
            playDisabled: false,
        });
    };

    render() {
        let {
            prevDisabled,
            nextDisabled,
            playDisabled,
            pauseDisabled,
        } = this.state;

        return (
            <div className="container my-5 shadow-lg rounded-5 w-50 py-5 border mx-auto text-center">
                <div className="imageslider mb-5">
                    <div className="slide px-5 active">
                        <img
                            src="./images/nature1.jfif"
                            alt="nature1"
                            className="rounded-5"
                        />
                    </div>
                    <div className="slide px-5">
                        <img
                            src="./images/nature2.jfif"
                            alt="nature2"
                            className="rounded-5"
                        />
                    </div>
                    <div className="slide px-5">
                        <img
                            src="./images/nature3.png"
                            alt="nature3"
                            className="rounded-5"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-dark ms-3"
                    disabled={prevDisabled}
                    onClick={this.prevImage}
                >
                    <i className="bi bi-rewind"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-dark ms-3"
                    disabled={nextDisabled}
                    onClick={this.nextImage}
                >
                    <i className="bi bi-fast-forward"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-dark ms-3"
                    disabled={playDisabled}
                    onClick={this.playImages}
                >
                    <i className="bi bi-play"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-dark ms-3"
                    disabled={pauseDisabled}
                    onClick={this.pauseImages}
                >
                    <i className="bi bi-pause"></i>
                </button>
            </div>
        )
    }
}

export default ImageSlider