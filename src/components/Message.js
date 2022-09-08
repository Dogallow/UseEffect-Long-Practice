
import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState('')
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    console.log('Message size', size);
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    // console.log(cname);
    setSizeClass(cname)
  }, [size]);

  useEffect(()=>{
    if(featherCount === 0){
      setMessage('There are no feathers')
    }
    if(featherCount < 10 && featherCount >0){
      setMessage('You have a good amount of feathers')
    }
    if(featherCount >= 10){
      setMessage('You have too many feathers')
    }
  },[featherCount])
  return (
    <div className={`message ${sizeClass}`}>
      {message}

    </div>
  );
};

export default Message;
