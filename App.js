class ControlledForm extends React.Component {
  state = {
    firstName: "",
    secondName: "",
    password: "",
    rePassword: "",
    email: "",
    phoneNumber: "",
    checkbox: false,
  };

  handleChange = (e) => {
    const selectedField = e.target.id;
    if (e.target.type === "checkbox") {
      this.setState({
        [selectedField]: e.target.checked,
      });
    } else {
      this.setState({
        [selectedField]: e.target.value,
      });
    }
  };

  handleSubmit = () => {
    const props = this.state;
    const numberRegex = /^[0-9]+$/;
    if (props.password !== props.rePassword) {
      alert("Password fields doesn't match!");
    } else if (props.password.length < 6) {
      alert(
        "Your password is to short! Minimal length should contains at least 6 marks."
      );
    } else if (props.checkbox !== true) {
      alert("You have to accept our policy privacy!");
    } else if (props.phoneNumber.length < 9) {
      alert("Phone number is to short.");
    } else if (!props.email.includes("@")) {
      alert("Provieded adres email is wrong.");
    } else if (!numberRegex.test(props.phoneNumber)) {
      alert("Phone numbers only contains digits.");
    } else if (
      !(
        props.firstName !== "" &&
        props.secondName !== "" &&
        props.password !== "" &&
        props.rePassword !== "" &&
        props.email !== ""
      )
    ) {
      alert("You have left empty fields.");
    } else {
      console.log(props);
    }
  };

  render() {
    return (
      <div class="main-wrapper">
        <h1 class="title">Register account!</h1>

        <form class="form">
          <div class="line">
            <div class="column">
              <label class="label" for="first-name">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="first-name"
                value={this.state.firstName}
                onChange={this.handleChange}
              ></input>
            </div>
            <div class="column">
              <label class="label" for="second-name">
                Second Name
              </label>
              <input
                type="text"
                id="secondName"
                name="second-name"
                value={this.state.secondName}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div class="line">
            <div class="column">
              <label class="label" for="pass">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pass"
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>
            <div class="column">
              <label class="label" for="re-pass">
                Repeat password
              </label>
              <input
                type="password"
                id="rePassword"
                name="re-pass"
                value={this.state.rePassword}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div class="line">
            <div class="column">
              <label class="label" for="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </div>
            <div class="column">
              <label class="label" for="phone-number">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phone-number"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div class="line">
            <div class="column">
              <h2 class="checkbox-question">
                Do you accept our law and policy of this website?
              </h2>
              <div class="checkbox-wrapper">
                <label class="label" for="checkbox">
                  Yes, I accept!
                </label>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  checked={this.state.checkbox}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
          </div>

          <div class="line">
            <button class="button" type="button" onClick={this.handleSubmit}>
              Send!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ControlledForm />, document.getElementById("root"));
