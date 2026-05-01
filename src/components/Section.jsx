function Section({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;
