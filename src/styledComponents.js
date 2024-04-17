import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.outline ? '#faff00' : ' #f1f5f9')};
`
export const Heading = styled.h1`
  color: #f8fafc;
`
export const Para = styled.textarea`
  background-color: #25262c;
  border-width: 0px;
  color: #f8fafc;
  font-weight: ${props => (props.isb ? 'bold' : 'normal')};
  font-style: ${props => (props.isi ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isu ? 'underline' : 'normal')};
`
