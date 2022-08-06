import React, { useState} from "react";


function useLocalStorage(dataSource, valueInitial=""){

    let data = localStorage.getItem(dataSource)
    
    if(data === null){
        localStorage.setItem(dataSource, JSON.stringify(valueInitial))
        data = localStorage.getItem(dataSource)
    }else{
        
    }

    data = JSON.parse(data)
    
    let [ localStorageResource, setLocalStorageResource ] = useState(data)

    function updateLocalStorageResource(value){
        localStorage.setItem(dataSource, JSON.stringify(value))
        setLocalStorageResource(value)
    }

    return {
        localStorageResource,
        updateLocalStorageResource
    }
}



export { useLocalStorage }

