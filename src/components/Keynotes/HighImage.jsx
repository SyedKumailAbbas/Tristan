import image from "../../assets/HIGHCHOOL.svg";
import { Heading } from "../Heading/heading";
export default function High() {
  return (
    <div>
      <Heading imgSrc={image} altText={"Text img"} />
    </div>
  );
}
