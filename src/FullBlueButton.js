import BlueButton from './BlueButton'

const message = 'I am a child!'

// Hydrated button
export default function FullBlueButton () {
  return <BlueButton labelA='labelA?' labelB='labelB!!!!' >
    <img
      src='https://cli.vuejs.org/favicon.png'
      alt="a blue button with the vue logo"
    />

    {message}
  </BlueButton>
}