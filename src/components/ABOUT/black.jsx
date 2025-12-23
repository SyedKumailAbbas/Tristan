// src/components/ABOUT/black.jsx
export default function Black() {
  return (
    <section className="w-full bg-black text-white  px-3 sm:px-10 lg:px-16 py-6 sm:py-16 min-h-[150px] md:min-h-[250px] flex items-center justify-center">
      <p
        className="
          italic
          text-[12px] sm:text-[18px] md:text-[24px] lg:text-[26px] 
          leading-relaxed
          text-center
          max-w-[70ch]   /* consistent line length column */
          mx-auto   
          [font-family:'Poppins',sans-serif]
        "
      >
        Many are just scratching the surface of what is possible for their life,
        but I believe everyone is called to something greater than themselves...
        My{" "}
        <span className="gold-word">mission</span>{" "}
        is to inspire and help people discover their{" "}
        <span className="gold-word">truth</span>{" "}
        and{" "}
        <span className="gold-word">purpose</span>{" "}
        from within.
      </p>

      <style>{`
        .gold-word {
          color: #CFAF35;
          background-image: linear-gradient(#FFAE00, #FFAE00);
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 100% 0.24em;
          padding-bottom: 0.08em;
        }
      `}</style>
    </section>
  );
}
