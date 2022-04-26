import React from 'react';

function Links(props) {
    const forLinks = (links) => {
        let code = [], counter=0
        for (const key in links) {
          code.push(<a key={counter} href={links[key]}>{links[key]}</a>)
          counter++;
        }
        return code;
      }
    return (
        <>
            <h3>Links</h3> 
            {forLinks(props.links)}
        </>
    );
    
}

export default Links;