// home.jsx
import JANU from "../components/Keynotes/HEADER";
//import High from "../components/Keynotes/HighSchool";
import High from "../components/Keynotes/HighImage";
import Secondary from "../components/Keynotes/secondaryimage";
import CORPORATION from "../components/Keynotes/CorpImage";
import Headtristan from "../components/Keynotes/headimage";
export default function Keynote() {
  return (
    <>
      <Headtristan/>
      {/* <JANU /> */}
      <High/>
      <Secondary/>
      {/* <Corp /> */}
      <CORPORATION/>
    </>
  );
}
