import { h, Component } from 'preact'
import ReactQuill from 'react-quill'

import MediumButton from '../../components/_buttons/mediumButton/index.js'

import 'react-quill/dist/quill.snow.css'

import { FaChevronDown } from 'react-icons/fa'

import firebase from '../../modules/firebaseFirestore'

const db = firebase.firestore()
db.settings({
  timestampsInSnapshots: true
})

export default class Editor extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)

    this.state = {
      name: '',
      value: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    db.collection('posts').add({
      name: this.state.name,
      value: this.state.value
    })
    .then((res) => {
      console.log('Post uploaded successfully. ID: ' + res.id)
    })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEdit (value) {
    this.setState({ value: value })
  }

  render (props, state) {
    return (
      <div class='editor fb-ccolumn'>
        <form class='editor__form' onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name='name' onChange={this.handleChange}></input>

          <ReactQuill
            className='editor__form__editor'
            value={state.value}
            onChange={this.handleEdit} />

          <MediumButton
            text='SUBMIT'
            onClick={this.handleSubmit}
            iconName='FaPaperPlane'
            iconPos='right' />
        </form>
      </div>
    )
  }
}
