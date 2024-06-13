import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex flex-wrap gap-1 '>
      <Button name='All'/>
      <Button name='Music'/>
      <Button name='Cricket'/>
      <Button name='Ravi Teja'/>
      <Button name='Beauty'/>
      <Button name='Mixes'/>
      <Button name='Mashala Films'/>
      <Button name='Landing Pages'/>
      <Button name='Arjit Singh'/>
      <Button name='Live'/>
      <Button name='Pouplar'/>
      <Button name='Recently Uploaded'/>
      {/* <Button name='You Watched'/>
      <Button name='For You'/> */}
    </div>
  )
}

export default ButtonList