import { h, Component } from 'preact'
import Waypoint from 'preact-waypoint'
import { bind, memoize, debounce } from 'decko'


export default class WaypointComponent extends Component {
  constructor () {
    super()

    this.state = { load: false }
  }

  @bind
  handleEnter () {
    setTimeout(() => {
      this.setState({ load: true })
    }, this.props.delay || 0)
  }

  render (props, state) {
    if (state.load) {
      return (
        <div class={props.class}>
          {props.children}
        </div>
      )
    }
    else return <Waypoint class={props.class} onEnter={ this.handleEnter } />
  }
}
