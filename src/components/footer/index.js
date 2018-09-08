import { h, Component } from 'preact'
import { route } from 'preact-router'

import style from './style.scss'

import svgLogo from '../../assets/branding/icon.svg'

export default class Footer extends Component {
  render () {
    return (
      <span class={style.footer}>
        <img class={style.logo} src={svgLogo} />
        <p class={style.labelLeft}>Copyright © 2018 L Distribution</p>

        <p>All Rights Reserved</p>
      </span>
    )
  }
}
