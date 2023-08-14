function Contact() {
  return (
    <section className="contact_container">
      {" "}
      <div>
        <div className="title">Newsletter</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eius.
        </p>
      </div>
      <form>
        <div className="inputs">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <button>Send</button>
      </form>
    </section>
  );
}
export default Contact;
