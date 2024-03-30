import { Root } from "./item.styled";

function Item ({id, title, isCurrentSlide}) {
    return <Root className={isCurrentSlide && 'active'}>
        {title}
    </Root>
}

export default Item;
