// Import core
// Import third parts
// Import customs

function Contact() {
  return (
    <section className="flex relative z-20">
      <div className="space-y-10 sm:space-y-20">
        <h3 className="text-6xl sm:text-9xl font-bold">
          Maybe just drop me a line to grab a drink.
        </h3>
        <h4 className="text-2xl sm:text-4xl">
          If anything of those sounds interesting, just feel free to reach out
          to me. you are welcome.
        </h4>
        <ul className="space-y-2">
          <li className="contactitem">
            <a href="https://www.linkedin.com/in/kkratter/">Linkedin //</a>
          </li>
          <li className="contactitem">
            <a href="https://www.behance.net/kkratter">Behance //</a>
          </li>
          <li className="contactitem">
            <a href="https://www.instagram.com/kkratter/">Instagram //</a>
          </li>
          <li className="contactitem">
            <a href="mailto:kkratterf@gmail.com">kkratterf@gmail.com //</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
