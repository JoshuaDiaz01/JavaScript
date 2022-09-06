import React, {useState} from 'react';

const Tabs = (props) => {
    const {itemArray} = props;

    //setting useState at array 0 for replacememt
    const [content, setContent] = useState(itemArray[0].content);

    // setting the change tabs to see the content
    const changeTabs = (value) => {
        setContent(value.content)
    }

    //each item is {tab: tab1, content: content1}
    //want to change state when appropriate tab is clicked on, need callback function

    return(
        <div>
            <div style = {{
                width: '700px',
                margin: '0 auto',
                paddingRight: '235px',
            }}>
            {itemArray.map((item, index) => {
                return <div key = {index} style = {{
                            display: 'inline-block',
                            margin: '10px',
                            }}>
                            <h1 style = {{
                                width: '150px',
                                border: '1px solid black',
                                borderRadius: '3px',
                                }}
                                onClick = {(e) => changeTabs(item)}>
                                {item.tab}
                            </h1>
                        </div>                      
                })
            }
            </div>
            <div style = {{
                height: '200px',
                width: '700px',
                border: '1px solid black',
                margin: '0 auto',
                textAlign: 'left',
                fontSize: '1.7em',
                padding: '15px'
            }}>
                {content}
            </div>
        </div>
    )
}

export default Tabs;