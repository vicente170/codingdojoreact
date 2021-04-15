import React, { useRef,useState } from 'react';

const Comprobar = () => {

    const [iguales,setIguales]=useState(true);

    const input1 = useRef();
    const input2 = useRef();

    const onChange = () => {
        const ig= input1.current.value === input2.current.value;
        setIguales(ig);

    }


    return (


        <form>
            <input onChange={onChange} type='text' ref={input1} />
            <input onChange={onChange} type='text' ref={input2}/>
            <span> {iguales ? '' : 'tienen que ser iguales'} </span>
            
        </form>
    );
}

export default Comprobar;
