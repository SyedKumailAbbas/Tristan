import image from "../../assets/Group 248.svg";
import playIcon from "../../assets/noto_play-button(2).svg";

export default function Headtristan() {
    return (
        <div style={{ position: 'relative' }}>
            <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
            {/* Button 1 - Positioned on top left */}
            <button
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-['Montserrat'] text-[18px] font-bold tracking-[0.5px]"
                style={{
                    background: "#ffae00",
                    color: "#ffffff",
                    boxShadow: "0 6px 18px rgba(247,126,0,.35)",
                    position: 'absolute',
                    top: '90%',
                    left: '7.5%',
                }}
            >
                <span>Click to learn more</span>
                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
            </button>

            {/* Button 2 - Positioned on top center */}
            <button
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-['Montserrat'] text-[18px] font-bold tracking-[0.5px]"
                style={{
                    background: "#ffae00",
                    color: "#ffffff",
                    boxShadow: "0 6px 18px rgba(247,126,0,.35)",
                    position: 'absolute',
                    top: '90%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <span>Click to learn more</span>
                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
            </button>

            {/* Button 3 - Positioned on bottom right */}
            <button
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-['Montserrat'] text-[18px] font-bold tracking-[0.5px]"
                style={{
                    background: "#ffae00",
                    color: "#ffffff",
                    boxShadow: "0 6px 18px rgba(247,126,0,.35)",
                    position: 'absolute',
                    bottom: '5%',
                    right: '7.5%',
                }}
            >
                <span>Click to learn more</span>
                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
            </button>

            {/* Mobile responsive styling */}
            <style jsx>{`
                @media (max-width: 768px) {
                    /* For smaller screens */
                    button {
                        font-size: 14px; /* Reduce font size on mobile */
                        padding: 10px 14px; /* Reduce padding */
                    }

                    /* Position buttons for mobile */
                    button:nth-child(1) {
                        top: 80%;
                        left: 5%;
                    }

                    button:nth-child(2) {
                        top: 80%;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    button:nth-child(3) {
                        bottom: 10%;
                        right: 5%;
                    }
                }

                @media (max-width: 480px) {
                    /* For very small screens like phones in portrait mode */
                    button {
                        font-size: 12px; /* Further reduce font size */
                        padding: 8px 12px; /* Reduce padding more */
                    }

                    /* Adjust button positioning further */
                    button:nth-child(1) {
                        top: 75%;
                        left: 5%;
                    }

                    button:nth-child(2) {
                        top: 75%;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    button:nth-child(3) {
                        bottom: 15%;
                        right: 5%;
                    }
                }
            `}</style>
        </div>
    );
}
