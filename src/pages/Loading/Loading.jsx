import React from 'react'
import Lottie from "react-lottie";
import loadingAnimation from './../../assets/animation/animation_lk93rryi.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='fixed h-screen w-full items-center bg-white' style={{zIndex : '9999'}}>
    {/* redux làm thêm 1 state, overFlowY: hidden  */}
      <Lottie options={defaultOptions} height={500} width={700} />
    </div>
  )
}

export default Loading