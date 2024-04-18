class ControlledForm extends React.Component {
  state = {};

  render() {
    return (
      <div class="main-wrapper">
        <h1 class="title">Register account!</h1>

        <form class="form">
          <div class="line">
            <div class="column">
              <label for="first-name">First Name</label>
              <input type="text" name="first-name"></input>
            </div>
            <div class="column">
              <label for="second-name">Second Name</label>
              <input type="text" name="second-name"></input>
            </div>
          </div>
          <div class="line">
            <div class="column">
              <label for="pass">Password</label>
              <input type="password" name="pass"></input>
            </div>
            <div class="column">
              <label for="re-pass">Repeat password</label>
              <input type="password" name="re-pass"></input>
            </div>
          </div>
          <div class="line">
            <div class="column">
              <label for="email">Email</label>
              <input type="email" name="email"></input>
            </div>
          </div>
          <div class="line">
            <div class="column">
              <h2 class="checkbox-question">
                Do you accept our law and policy of this website?
              </h2>
              <div class="checkbox-wrapper">
                <label for="checkbox">Yes, I accept!</label>
                <input type="checkbox" name="checkbox"></input>
              </div>
            </div>
          </div>

          <div class="line">
            <button class="button">Send!</button>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ControlledForm />, document.getElementById("root"));
