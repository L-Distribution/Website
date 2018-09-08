import { h, Component } from 'preact'

import style from './style.scss'

const AnimatedProfileBanner = (props) => {
  return (
    <div class={style.banner + ' ' + props.class}>
      <svg version='1.1' baseProfile='basic' id='Layer_1' x='0px' y='0px' viewBox='0 0 426 198' xmlSpace='preserve'>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='1.5' y1='99.5' x2='100' y2='1'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='98.5' y1='196.5' x2='197' y2='98'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='1.5' y1='98' x2='100' y2='196.5'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='98.5' y1='1' x2='197.3' y2='99.8'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='30.5' y1='30.5' x2='30.5' y2='168.5'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='168.5' y1='167.5' x2='29.5' y2='167.5'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='167.5' y1='30.5' x2='167.5' y2='168.5'/>
        <line fill='none' stroke='#DFC17A' stroke-width='3' stroke-miterlimit='10' x1='168' y1='31.5' x2='29.5' y2='31.5'/>
      </svg>
    </div>
  )
}

export default AnimatedProfileBanner
