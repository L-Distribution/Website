import { h, Component } from 'preact'

import style from './style.scss'

import Fa from 'react-icons/fa'

export default class MediumButton extends Component {
  constructor () {
    super()

    this.state = {
      hover: false
    }
  }

  render (props, state) {
    const Icon = Fa[props.iconName]
    const iconPos = props.iconPos

    console.log(Icon)

    if (iconPos === 'left') {
      return (
        <div class={style.container + ' fb-center'} onClick={props.onClick}>
          <Icon class={style.icon} />
          <p>{props.text}</p>
        </div>
      )
    } else if (iconPos === 'right') {
      return (
        <div class={style.container + ' fb-center'} onClick={props.onClick}>
          <p>{props.text}</p>
          <Icon class={style.icon} />
        </div>
      )
    } else {
      return (
        <div class={style.container + ' fb-center'} onClick={props.onClick}>
          <p>{props.text}</p>
        </div>
      )
    }
  }
}
