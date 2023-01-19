import "./style.css";
import Image from "react-bootstrap/Image";
import pic from "../../assets/Personal-Pic.jpg"

export default function AboutMe() {
  return (
    <section id="About-Me" class="section">



      <div class="leftBody">
        <h2>About Me</h2>
      </div>


      <div class="rightBody" id="aboutMe">

        <div class="aboutworkBox">
          <img src={pic} alt="Picture of Allen" class="allenPic" />

        </div>
        <div class="aboutworkBox" id="about">
          <p>
            I'm currently enrolled in a web developement course with the University Of Utah. I get a lot of fulfillment
            from the puzzle-solving aspect of coding. It is extremely satisfying to be presented with a problem and work to
            solve it.
          </p>
          <p></p>
          <p>I enjoy many other hobbies as well! There is nothing quite like going camping and sitting around the fire
            with good company,
            campstyle dinner and a glass of whiskey. Just being able to break that technological tether for even a
            moment really gives me great satisfaction.</p>
            <p></p>
          <p>Saxophone is another one of my passions. Jamming out with friends is one of my favorite ways to let loose and
            feed my soul. I love to dabble in whatever other
            instruments I can get my hands on</p>




        </div>

      </div>


    </section>
  );
}