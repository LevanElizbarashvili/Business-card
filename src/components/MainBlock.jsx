import mail from "../assets/envelope.svg";

export default function MainBlock() {
  return (
    <div className="container background-font-color">
      <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000" />
      <h1>Levan Elizbarashvili</h1>
      <h3>Frontend Developer</h3>
      <p>Portfolio</p>

      <button className="btn">
        <img className="email" src={mail} />
        <span>Email</span>
      </button>
    </div>
  );
}
