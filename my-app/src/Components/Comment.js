import founderImg from "../assets/image-jeremy-large.webp";
function Comment() {
  return (
    <section className="Comment">
      <div className="Comment-Img">
        <img src={founderImg} alt="Suite-CMO" className="CMO-Img" />
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
