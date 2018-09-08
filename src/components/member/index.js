import { h, Component } from 'preact'
import { bind, memoize, debounce } from 'decko'

import style from './style.scss'

import AnimatedProfileBanner from '../animatedProfileBanner/index'

export default class Member extends Component {
  constructor () {
    super()

    this.state = {
      hover: false
    }
  }

  @bind
  handleMouseEnter () {
    this.setState({ hover: true })
  }

  @bind
  handleMouseLeave () {
    this.setState({ hover: false })
  }

  @bind
  getActiveClass (name) {
    if (this.state.hover) return `${style[name]} ${style[name + '--active']}`
    else return style[name]
  }

  render (props, state) {
    return (
      <div
        class={style.container + ' fb-crow'}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave} >



        <div class={style.imgContainer}>
          {
            (state.hover)
              ? <AnimatedProfileBanner class={style.imgBanner} />
              : ''
          }
          <img class={this.getActiveClass('img')} src={require(`../../assets/images/members/${props.imgName}`)} />
        </div>


        <div className={this.getActiveClass('labels')}>
          <h3>{props.name}</h3>
          <p>{props.label}</p>
        </div>
      </div>
    )
  }
}
