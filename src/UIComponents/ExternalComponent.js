import { useEffect, useRef } from "react";

const WrapperComponent = () => {
   
const wrapperDivRef = useRef(null)
    useEffect(() => {
      const loadScript = async () => {
        if (wrapperDivRef.current) {
          const script = document.createElement('script');
          script.src = 'http://localhost:50506';
          script.onload = () => console.log('Script loaded');
          script.onerror = (event) => console.error('Script failed to load', event);
          wrapperDivRef.current.appendChild(script);
        }
      };
  
      loadScript();
    }, []);
  
    return <div ref={wrapperDivRef}> </div>;
      
  
    }


    export default WrapperComponent