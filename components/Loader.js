import Image from 'next/image'

const Loader = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', backgroundColor: '#f6f6f6', height: '100vh' }}>
      <div style={{ width: '60vw', height: 'auto' }}>
        <Image
          src='https://media.giphy.com/media/Utrfj8quziX6XQ3Tc5/giphy.gif?cid=790b7611a03a4d5da18f9b1284c8efe61d68b9901c7f397d&rid=giphy.gif&ct=g'
          alt=''
          width='800'
          height='450'
        />
      </div>
    </div>
  )
}

export default Loader