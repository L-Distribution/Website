import { h, Component } from 'preact'

import { FaChevronDown } from 'react-icons/fa'

import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import AnimatedLogo from '../../components/animatedLogo/index'
import Member from '../../components/member/index'

const SectionHero = () => {
  return (
    <div class='home__hero fb-center'>
      <AnimatedLogo />
      <FaChevronDown class='home__hero__indicator' size='30px' />
    </div>
  )
}

const SectionAbout = () => {
  return (
    <div class='home__about fb-center'>
      <div class='home__about__container fb-crow'>
        <div class='home__about__container--left'>
          <div class='home__about__container--left__text'>
            <h3 class='text text--subtitle'>ABOUT THE TEAM</h3>
            <h1 class='text text--title'>Who are we?</h1>

            <div class='separator--large' />

            <div class='text text--paragraph'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc tellus, dignissim pharetra ante a, lobortis finibus turpis. Sed aliquam, turpis elementum ornare placerat, dui erat imperdiet purus, eu aliquet ante ex ut turpis. Curabitur eu libero urna. Sed placerat, orci at congue vehicula, enim ex mattis nulla, non bibendum eros tortor vitae est. Donec ultrices neque dui, consequat mollis elit congue vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi non aliquam risus. Nunc ullamcorper ex vitae neque sagittis elementum. Etiam massa nulla, facilisis id iaculis quis, gravida vitae eros.
              </p>

              <p>
                Mauris pharetra id dui interdum sollicitudin. Cras eget lacus sed ex aliquam porttitor. In eu dui ipsum. Aenean a nunc imperdiet elit rhoncus luctus. Curabitur malesuada sed odio sit amet finibus. Ut sit amet neque sit amet nibh condimentum tempor. Cras maximus diam et eros facilisis auctor. Donec semper sapien eu ultrices aliquam. Aenean placerat est nec enim mollis, lobortis placerat elit tempor. Etiam non posuere sem, quis consectetur purus. Sed augue libero, dictum vel ligula in, condimentum aliquet urna. Quisque ultrices nisi mi, eu consectetur felis congue eget. Phasellus luctus nisl leo, ut commodo urna sollicitudin non.
              </p>
            </div>
          </div>
        </div>

        <div class='home__about__container--right'>
          <img class='home__about__container--right__bg' src='../../assets/images/group-picture.jpg' />
        </div>
      </div>
    </div>
  )
}

const SectionMembers = () => {
  return (
    <div class='home__members fb-center'>
      <div class='home__members__header fb-ccolumn'>
        <h3 class='text text--subtitle'>MEET THE TEAM</h3>
        <h1 class='text text--title'>MEMBERS</h1>
        <div class='separator--large' />

        <Member imgName='cf12.png' name='CF12' label='Testing!' />
      </div>
    </div>
  )
}

const SectionContact = () => {
  return (
    <div class='home__contact fb-ccolumn'>
      <h3 class='text text--subtitle'>CHAT WITH US</h3>
      <h1 class='text text--title'>CONTACT</h1>
      <div class='separator--large' />


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
        <SectionMembers />
        <SectionContact />
        <Footer />
      </div>
    )
  }
}
