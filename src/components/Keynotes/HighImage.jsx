import image from "../../assets/HIGHCHOOL.svg";
export default function High() {
    return (
        <div>
            <img src={image} alt="HighHool" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    );
}
