import Common from "./Common";
import about from "./images/about.jpg";
function About() {
  return (
    <>
    <Common text="Welcome to About page" btnText="Contact Now" visit="/contact" web={about}></Common>
    </>
  );
}

export default About;
