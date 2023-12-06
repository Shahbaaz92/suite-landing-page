import founderImg from "../assets/image-jeremy-large.png";
import curve2 from "../assets/pattern-curved-line-2.svg";
import blurEffect from "../assets/pattern-blur.svg";
function Comment() {
  return (
    <section className="Comment">
      <div className="Comment-Img">
        <img
          src={blurEffect}
          alt="blur effect behind the CMO"
          className="Comment-Blur-Effect"
        />
        <img src={founderImg} alt="Suite-CMO" className="Comment-CMO-Img" />
        <img
          src={curve2}
          alt="curved line in Comment section"
          className="Comment-Curve"
        />
      </div>
      <article className="Comment-Quote">
        <h2>
          <span>It just</span> works.
        </h2>
        <q>
          I really like how it is an all-in-one solution that handle many of the
          tasks that you would normally need separate tools to do the same job.
          This thing is a miracle worker.
        </q>
        <div className="CMO-Details">
          <h3>Jeremy Robinson</h3>
          <h4>CMO, Fylo</h4>
        </div>
      </article>
    </section>
  );
}
export default Comment;
