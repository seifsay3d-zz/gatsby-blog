import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div>
          <a href="https://twitter.com/seifsayed">twitter</a>&nbsp;&bull;&nbsp;
        </div>
        <div>
          <a href="https://github.com/seifsay3d">github</a>&nbsp;&bull;&nbsp;
        </div>
        <div>
          <a href="https://www.linkedin.com/in/seif-sayed/">linkedin</a>
          &nbsp;&bull;&nbsp;
        </div>
        <div>
          <a href="mailto:seifsayed@gmail.com">contact</a>
        </div>
      </div>
    )
  }
}

export default Footer
