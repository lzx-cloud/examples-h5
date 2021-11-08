import React, { PureComponent } from 'react'

class Layout extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          <a href="/#/Layout/A">A页面</a> &nbsp;&nbsp;
          <a href="/#/Layout/B">B页面</a>
        </div>
        &nbsp;
        {this.props.children}
        &nbsp;
        <div><a href="/">返回</a></div>
      </div>
    )
  }
}

export default Layout