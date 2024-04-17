import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, Heading, Para} from './styledComponents'
import './App.css'

class App extends Component {
  state = {
    istext: false,
    isbold: false,
    isitalic: false,
    isunder: false,
    text: '',
  }

  entrText = event => {
    this.setState({
      text: event.target.value,
    })
  }

  bold = () => {
    this.setState(prevState => ({
      isbold: !prevState.isbold,
      istext: true,
    }))
  }

  italic = () => {
    this.setState(prevState => ({
      isitalic: !prevState.isitalic,
      istext: true,
    }))
  }

  uline = () => {
    this.setState(prevState => ({
      isunder: !prevState.isunder,
      istext: true,
    }))
  }

  render() {
    const {istext, isbold, isitalic, isunder, text} = this.state
    return (
      <div className="main">
        <div>
          <Heading>Text Editor</Heading>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt=" text editor"
          />
        </div>
        <div>
          <div>
            <ul className="lst">
              <li>
                <Button
                  type="button"
                  data-testid="bold"
                  onClick={this.bold}
                  outline={isbold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  data-testid="italic"
                  onClick={this.italic}
                  outline={isitalic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  data-testid="underline"
                  onClick={this.uline}
                  outline={isunder}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
          </div>
          {/* {istext ? (
            <Para isb={isbold} isi={isitalic} isu={isunder}>
              {text}
            </Para>
          ) : (
            <textarea
              rows="30"
              cols="90"
              type="text"
              id="y"
              onChange={this.entrText}
            />
          )} */}
          <Para
            rows="30"
            cols="90"
            type="text"
            isb={isbold}
            isi={isitalic}
            isu={isunder}
            onChange={this.entrText}
          />
        </div>
      </div>
    )
  }
}

export default App
