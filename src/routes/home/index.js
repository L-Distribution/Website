import { h, Component } from 'preact'

import { FaChevronDown } from 'react-icons/fa'

import Header from '../../components/header/index'

import svgBanner from '../../assets/branding/banner.svg'

const SectionHero = () => {
  return (
    <div class='home__hero fb-center'>
      <img src={svgBanner} width='800' />
      <FaChevronDown class='home__hero__indicator' size='30px' />
    </div>
  )
}

const SectionAbout = () => {
  return (
    <div class='home__about fb-center'>
      <div class='home__about__container fb-crow'>
        <div class='home__about__container--left'>
          <h3>ABOUT THE TEAM</h3>
          <h1>Who Are We?</h1>

          <div />

          <p>Lorem...</p>

        </div>

        <div class='home__about__container--right'>
          <img class='home__about__container--right__bg' src='../../assets/images/group-picture.jpg' />
        </div>
      </div>
    </div>
  )
}

export default class Home extends Component {
  render () {
    return (
      <div class='home fb-ccolumn'>
        <Header />
        <SectionHero />
        <SectionAbout />
      </div>
    )
  }
}
