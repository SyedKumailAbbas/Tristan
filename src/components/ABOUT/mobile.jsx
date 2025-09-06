import performance from "../../assets/Performance-Motivational.svg";
import video from "../../assets/Dance Video .MP4";
import border from "../../assets/mobile border.svg";

export default function Mobile() {
    return (
        <>
            {/* Background layer reversed: black to #FFAE00 */}
            <div
                className="fixed inset-0 bg-gradient-to-r from-black/25 to-[#FFAE00] -z-10"
                aria-hidden
            />

            {/* Foreground content */}
            <div className="relative z-10 min-h-screen w-screen p-8 flex flex-col items-start">
                {/* Top Heading */}
                <div className="flex items-baseline">
                    <h1 className="text-[55px] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
                        How
                    </h1>
                    <img
                        src={performance}
                        alt="Performance-Motivational"
                        className="ml-3 h-[55px] object-contain inline-block align-baseline"
                    />
                </div>

                {/* Keynote Speaking + Came About */}
                <div className="relative mt-4 inline-flex items-baseline">
                    <span className="relative text-[55px] font-bold font-[Montserrat] leading-tight tracking-wide text-white mr-4">
                        Keynote Speaking
                        <span className="absolute left-0 -bottom-3 w-full h-[7px] bg-[#FFAE00]" />
                    </span>

                    <span className="text-[55px] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
                        Came About:
                    </span>
                </div>

                {/* Paragraph + Video side by side */}
                <div className="mt-6 flex flex-col lg:flex-row gap-8 w-full">
                    {/* Paragraph Text Section */}
                    <div className="max-w-4xl text-white font-[Montserrat] text-[19px] font-semibold leading-relaxed tracking-normal">
                        <p className="mb-4">
                            “Tristan’s journey began in high school, during one of the darkest chapters of his
                            life. The pandemic left him battling anxiety, depression, intense emotions, and
                            constant overthinking. He hit rock bottom. But in that struggle, he discovered
                            something unexpected: <span className="text-[#FFAE00]">hope</span>—and a quiet refusal
                            to let things stay the same.
                        </p>

                        <p className="mb-4">
                            That moment sparked his personal development journey. Through journaling for 1,088
                            days (and counting), meditating daily for over 1,000 days, and consistently pushing
                            beyond his comfort zone, Tristan began to rebuild—not just his mindset, but his sense
                            of <span className="text-[#FFAE00]">purpose</span>.
                        </p>

                        <p className="mb-4">
                            One of the turning points came in Grade 11, when a teacher discovered he was a dancer
                            and invited him to perform for the class. Tristan was terrified, but said yes. That
                            performance changed everything. For the first time, he connected with what he was
                            meant to do—not just perform, but truly connect. To move people through movement, and
                            then through message.
                        </p>

                        <p>
                            Since then, Tristan has blended performance with motivational keynote speaking,
                            delivering talks at schools, conferences, and events of all sizes. Dance became more
                            than movement—it became a <span className="text-[#FFAE00]">bridge</span>. A way to
                            open hearts before opening minds. It’s how he creates space for meaningful
                            conversations around growth, resilience, and rediscovering what’s possible.”
                        </p>
                        {/* Button below paragraphs */}
                        <button
                            className="mt-8 bg-[#ffae00] text-white font-bold text-base px-7 py-3 rounded-full shadow-[0_5px_10px_rgba(255,174,0,0.4)] transition-transform duration-200 ease-in-out hover:-translate-y-1"
                        >
                            Book Tristan
                        </button>
                    </div>

                    {/* Video Section */}
                    <div className="flex justify-center items-start">
                        <video
                            src={video}
                            controls={false}
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="object-contain"
                        />
            
                    </div>
                </div>
            </div>
        </>
    );
}
