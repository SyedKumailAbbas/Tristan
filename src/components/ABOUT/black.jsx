// src/components/ABOUT/black.jsx
export default function Black() {
  return (
    // full-bleed black band
    <section className="w-full bg-black text-white px-6 sm:px-10 lg:px-16 py-10">
      <p
        className="
          italic
          text-[33px]
          leading-[1.45]
          tracking-[0]
          [font-family:'Poppins',sans-serif]
          max-w-none
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

      {/* local styles for thick underline */}
      <style>{`
        .gold-word {
          color: #CFAF35;                 /* word color */
          background-image: linear-gradient(#FFAE00, #FFAE00); /* underline stroke */
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 100% 0.24em;   /* thickness of the stroke */
          padding-bottom: 0.08em;         /* tiny gap above the stroke */
        }
      `}</style>
    </section>
  );
}
