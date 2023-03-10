import React ,{useState,useEffect} from 'react'
import { useAppContext } from '../context/appContext';

export default function GetPoint({handleClick, clicked, children}) {
  let [newChildren, setNewChildren] = useState(undefined)
  const {width}= useAppContext();

  function makeNewChildren() {
    let firstChild;
    let newChildren = React.Children.map(children, (child,i) => {
      let newChild;
    //   if (React.isValidElement(child)) {
        // console.log('fired')

      const {...props} = child.props

      if (i===1) {
        firstChild = <path {...props} fill='transparent' stroke='transparent' key={`transparentChild${i}`} className='' style={{transform:`scale(${width>480?2:1.1})`, transformOrigin: "center", transformBox: 'fill-box'}}/>
      }

      newChild = <path {...props} className='transition-all duration-500' style={{transform:`scale(${width>480?(clicked?i===0?1.5:0.8:1):(clicked?i===0?2:1.2:1.5)})`, transformOrigin: "center", transformBox: 'fill-box'}}/>
    //   }
      return newChild
    })

    // let firstChild = newChildren[0];


    newChildren = [firstChild, ...newChildren]
    // console.log('test')
    return newChildren
  }

  useEffect(() => {
    setNewChildren(makeNewChildren)
  }, [clicked])
  
  
  // useEffect(()=>{
  //   const newChildren = makeNewChildren()

  // },[])


  return (
    <g id="OdourPoint" fill='transparent'
    className='cursor-pointer transition-all rounded-full focus-within:border-white focus-visible:border-white'
      tabIndex={0}
      onClick={() => handleClick(!clicked)}
      onKeyDown={(e) => { if (e.code === 'Enter') { handleClick(!clicked) } }}
    >
      {newChildren}

      {/* <path className='transition-all duration-500' style={{transform:`scale(${clicked?1.5:1})`,transformOrigin: "center", transformBox: 'fill-box'}} d="M602.77 236.541C604.853 236.541 606.541 234.853 606.541 232.771C606.541 230.688 604.853 229 602.77 229C600.688 229 599 230.688 599 232.771C599 234.853 600.688 236.541 602.77 236.541Z" fill="white" /> */}
      {/* <path className='transition-all duration-500' style={{transform:`scale(${clicked?0.8:1})`,transformOrigin: "center", transformBox: 'fill-box'}} d="M602.535 245.103C609.476 245.103 615.103 239.476 615.103 232.535C615.103 225.594 609.476 219.967 602.535 219.967C595.594 219.967 589.967 225.594 589.967 232.535C589.967 239.476 595.594 245.103 602.535 245.103Z" stroke="white" strokeWidth="1.90136" /> */}
    </g>
  )
}
