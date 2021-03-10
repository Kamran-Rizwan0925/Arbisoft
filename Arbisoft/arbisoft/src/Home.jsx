import Common from './Common';
import web from "../src/images/img2.svg";
function Home() {
  return (
    <>
    <Common text="Grow your business with" btnText="Get Started" visit="/service" web={web}></Common>
     </>
  );
}

export default Home;
