import {FC} from "react";



interface PROPS {
    title:string,
    description:string,
    image:string,
    link:string,
    speed:string,
    id:number,
}
const Card: FC<PROPS> = ({title,description,image,id,link,speed}) => {
    return (
        <div>
            <h1>card</h1>
        </div>
    );
};

export default Card;