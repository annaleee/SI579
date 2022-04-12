import React, {useState, useEffect} from 'react';
export const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/-BpNlGMvBE4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
export const description =
`Every time the page loads, a new 200x300 image should be fetched from Picsum and 
displayed below. When you refresh your browser, a new random image should appear.
The output should say "loading" prior to the image being loaded.

**IF YOU WOULD LIKE BUFFER CREDIT** *(you can't get over 100% on the exam, but this can 
offset lost points on prior problems)*:  Add a button that loads a new image from Picsum
everytime it is clicked, without having to refresh the browser.`;

export function Problem () {
    const [isLoad,setIsLoad] = useState(false);
    const[isRefresh,setRefresh] = useState(false);
    const [url, setURL]= useState(getImage());
    const [final,setFinal] = useState(<p>Loading...</p>);
    /**
     * TODO: ** uncomment the fetch() below. For it to work, it must be moved
     *   somewhere it will be executed after this component initializes.
     *
     * Tip - Aside from the TODO, the fetch call does not need to be changed...
     *    just moved somewhere slightly different.
     *
     * If you're unsure how to do this, maybe you can look through some
     * University of Michigan events and see if they're offering something that
     * might benefit you 🤔🤔🤔🤔🤔🤔.
     */
    function getImage(){
        if(isRefresh){
            return;
        }else{
            setRefresh(true);
        }
        fetch('https://picsum.photos/200/300')
        .then((response) => response.url)
        .then((returnedUrl) => {
            console.log('the image url', returnedUrl);
            // TODO: something needs to happen here with
            // returnedUrl.
            setURL(returnedUrl);
            setIsLoad(true);
        });
    }

    useEffect(() => {
        if(isLoad){
            setFinal(<img src={url} alt="this is a picture" />);
        }else{
            setFinal(<p>Loading...</p>);
        }
    },[isLoad,url])

    // TODO: if an image has been fetched, return an <img> that displays it.
    //  Otherwise show "loading..."
    // Tip - don't worry about setting image width/height. The image returned by
    //   the fetch request has the needed dimensions.
    return (
        <div>
            {final}
            <br></br>
            <button onClick={()=>{setIsLoad(false);setRefresh(false);getImage()}} className="btn btn-primary"> Refresh</button>
        </div>
    );
}
