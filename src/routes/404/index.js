import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import MediumButton from '../../components/_buttons/mediumButton'

import svgNotFoundLogo from '../../assets/branding/notfound.svg'

export default class NotFound extends Component {
  render () {
    return (
      <div class='notfound fb-ccolumn'>
        <img class='notfound__logo' src={svgNotFoundLogo} />
        <h3 class='notfound__title'>404 - NOT FOUND</h3>

        <Link
          class='notfound__button'
          href='/'
          activeClassName=''
          style={{ textDecoration: 'none' }} >

          <MediumButton text='BACK TO HOME' href='/' />
        </Link>
      </div>
    )
  }
}
