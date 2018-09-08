import { h, Component } from 'preact'

import style from './style.scss'

import { FaArrowLeft } from 'react-icons/fa'

export default class MediumButton extends Component {
  constructor () {
    super()

    this.state = {
      hover: false
    }
  }

  render (props, state) {
    return (
      <div class={style.container + ' fb-center'}>
        <FaArrowLeft class={style.icon} />
        <p>{props.text}</p>
      </div>
    )
  }
}
