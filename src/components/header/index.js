import { h, Component } from 'preact'
import { route } from 'preact-router'

import style from './style.scss'

import logoSvg from '../../assets/branding/icon.svg'

export default class Header extends Component {
  render () {
    return (
      <div class={style.header}>
        <img src={logoSvg} class={style.logo} />

        <span class={style.links}>
          <a>ABOUT</a>
          <a>CONTACT</a>
          <a>PROJECTS</a>
          <a>BLOG</a>
        </span>
      </div>
    )
  }
}
