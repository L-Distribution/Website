import { h, Component } from 'preact'

import style from './style.scss'

import AnimatedProfileBanner from '../animatedProfileBanner/index'
import WaypointComponent from '..//waypointComponent'

export default class Member extends Component {
  render (props, state) {
    return (
      <WaypointComponent class={style.container + ' fb-crow'} delay={props.delay}>
        <div class={style.imgContainer}>
          <AnimatedProfileBanner class={style.imgBanner} />
          <img class={style.img} src={require(`../../assets/images/members/${props.imgName}`)} />
        </div>

        <div className={style.labels}>
          <h3>{props.name}</h3>
          <p>{props.label}</p>
        </div>
      </WaypointComponent>
    )
  }
}
