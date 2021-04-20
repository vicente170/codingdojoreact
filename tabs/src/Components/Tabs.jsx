import React, {useState} from 'react';
import './Tabs.css';


const Tabs = (props) => {

    const tabs = props.children;

    const [states,setStates]=useState(
        {
        tab1state: tabs[0].props.state,
        tab2state: tabs[1].props.state,
        tab3state: tabs[2].props.state,

    });

    const changeActive=(i)=>{

        console.log('llegue');
        console.log(1);
        if(i===0){
            setStates({
                tab1state:'active',
                tab2state: '',
                tab3state: '',
            })
        }
        if(i===1){
            setStates({
                tab1state:'',
                tab2state: 'active',
                tab3state: '',
            })
        }
        if(i===2){
            setStates({
                tab1state:'',
                tab2state: '',
                tab3state: 'active',
            })
        }

    }

    const showActive = () =>{
        if(states.tab1state==='active'){
            return tabs[0].props.content
        }
        if(states.tab2state==='active'){
            return tabs[1].props.content
        }
        if(states.tab3state==='active'){
            return tabs[2].props.content
        }
    }


    
    console.log(tabs);

    return (
        <div className='tabcontainer'>

            <div className="titles">
            <a className={states.tab1state} onClick={()=>changeActive(0)} > {tabs[0].props.title} </a>
            <a className={states.tab2state} onClick={()=>changeActive(1)} > {tabs[1].props.title} </a>
            <a className={states.tab3state} onClick={()=>changeActive(2)} > {tabs[2].props.title} </a>
            {/* {tabs.map((item,i)=><a key={i} className={item.props.state} onClick={()=>changeActive(item,i)} > {item.props.title} </a>)} */}
            </div>
            <div className="content">
               {/*  {tabs.filter(item=>item.props.state==='active').map((item,i)=><p key={i}> {item.props.content} </p>)} */}
               <p> {showActive()} </p>
            </div>

            
            
        </div>
    );
}

export default Tabs;
