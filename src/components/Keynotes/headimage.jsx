import image from "../../assets/Group 248.svg";
import playIcon from "../../assets/noto_play-button(2).svg";

export default function Headtristan() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <img
                src={image}
                alt="Background"
                style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover', // Ensures image scales to cover the container
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1, // Keeps image behind other content
                }}
            />

            {/* Button 1 - Top left */}
            <button
                className="group inline-flex items-center gap-2 rounded-full font-['Montserrat'] font-bold tracking-[0.5px]"
                style={{
                    background: '#ffae00',
                    color: '#ffffff',
                    boxShadow: '0 6px 18px rgba(247,126,0,.35)',
                    position: 'absolute',
                    top: '85%',
                    left: '5vw',
                    padding: '0.75rem 1.5rem',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                }}
            >
                <span>Click to learn more</span>
                <img src={playIcon} alt="Play Icon" style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>

            {/* Button 2 - Top center */}
            <button
                className="group inline-flex items-center gap-2 rounded-full font-['Montserrat'] font-bold tracking-[0.5px]"
                style={{
                    background: '#ffae00',
                    color: '#ffffff',
                    boxShadow: '0 6px 18px rgba(247,126,0,.35)',
                    position: 'absolute',
                    top: '85%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.75rem 1.5rem',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                }}
            >
                <span>Click to learn more</span>
                <img src={playIcon} alt="Play Icon" style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>

            {/* Button 3 - Bottom right */}
            <button
                className="group inline-flex items-center gap-2 rounded-full font-['Montserrat'] font-bold tracking-[0.5px]"
                style={{
                    background: '#ffae00',
                    color: '#ffffff',
                    boxShadow: '0 6px 18px rgba(247,126,0,.35)',
                    position: 'absolute',
                    bottom: '5%',
                    right: '5vw',
                    padding: '0.75rem 1.5rem',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                }}
            >
                <span>Click to learn more</span>
                <img src={playIcon} alt="Play Icon" style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>

            {/* Responsive styling */}
            <style jsx>{`
                /* Tablets and smaller laptops */
                @media (max-width: 1024px) {
                    button {
                        padding: 0.6rem 1.2rem;
                        font-size: clamp(12px, 1.8vw, 14px);
                    }
                    button:nth-child(1) {
                        top: 80%;
                        left: 4vw;
                    }
                    button:nth-child(2) {
                        top: 80%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    button:nth-child(3) {
                        bottom: 8%;
                        right: 4vw;
                    }
                    img {
                        width: 1.25rem;
                        height: 1.25rem;
                    }
                }

                /* Mobile devices */
                @media (max-width: 768px) {
                    button {
                        padding: 0.5rem 1rem;
                        font-size: clamp(10px, 1.5vw, 12px);
                    }
                    button:nth-child(1) {
                        top: 75%;
                        left: 3vw;
                    }
                    button:nth-child(2) {
                        top: 75%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    button:nth-child(3) {
                        bottom: 10%;
                        right: 3vw;
                    }
                    img {
                        width: 1rem;
                        height: 1rem;
                    }
                }

                /* Very small screens (e.g., phones in portrait) */
                @media (max-width: 480px) {
                    button {
                        padding: 0.4rem 0.8rem;
                        font-size: clamp(8px, 1.2vw, 10px);
                    }
                    button:nth-child(1) {
                        top: 70%;
                        left: 2vw;
                    }
                    button:nth-child(2) {
                        top: 70%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    button:nth-child(3) {
                        bottom: 12%;
                        right: 2vw;
                    }
                    img {
                        width: 0.8rem;
                        height: 0.8rem;
                    }
                }

                /* Large screens */
                @media (min-width: 1440px) {
                    button {
                        padding: 1rem 2rem;
                        font-size: clamp(16px, 2.5vw, 18px);
                    }
                    button:nth-child(1) {
                        top: 88%;
                        left: 6vw;
                    }
                    button:nth-child(2) {
                        top: 88%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    button:nth-child(3) {
                        bottom: 4%;
                        right: 6vw;
                    }
                    img {
                        width: 2rem;
                        height: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}