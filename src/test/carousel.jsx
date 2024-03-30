import {ButtonNext, ButtonPrevious, Container, Controls, Root, Slider} from "./carousel.styled";
import {useEffect, useState} from "react";
import Item from "./item";

const data = [
    {id: 1, title: 'aaa'},
    {id: 1, title: 'bb'},
    {id: 1, title: 'ccc'},
    {id: 1, title: 'ddd'},
    {id: 1, title: 'eee'},

]

function Carousel() {

    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransition, setIsTranstion] = useState(true)

    useEffect(() => {
        let newSlides = data

        if (newSlides.length > 1) {
            newSlides = [
                data[data.length - 1],
                ...data,
                data[0]
            ]
        }

        setSlides(newSlides)
    }, []);

    const handleClick = (direction) => {
        let newCurrentSlide = currentSlide

        if (direction === 'previous') {
            newCurrentSlide = currentSlide - 1
        }

        if (direction === 'next') {
            newCurrentSlide = currentSlide + 1
        }
        setIsTranstion(true)
        setCurrentSlide(newCurrentSlide)

        if (newCurrentSlide === slides.length - 1) {
            setTimeout(() => {
                setIsTranstion(false)
                setCurrentSlide(1)
            }, 500)

        }
        if (newCurrentSlide === 0) {
            setTimeout(() => {
                setIsTranstion(false)
                setCurrentSlide(slides.length - 2)
            }, 500)
        }

    }

    return <Root>
        <Container>
            <Slider xPosition={currentSlide * 940}
                    className={isTransition && 'isTransition'}>
                {slides.map((item, index) => <Item isCurrentSlide={index === currentSlide}
                                                   key={`slide-${item.id}`} {...item}/>)}
            </Slider>

            {slides.length > 1 && <Controls>
                <ButtonPrevious onClick={() => handleClick('previous')}>Précédent</ButtonPrevious>
                <ButtonNext onClick={() => handleClick('next')}>Suivant</ButtonNext>
            </Controls>}

        </Container>
    </Root>
}

export default Carousel;
