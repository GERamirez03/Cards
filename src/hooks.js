import { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

function useFlip() {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp)
    };
    return [isFacingUp, flipCard];
}

function useAxios(baseUrl) {
    const [data, setData] = useState([]);
    const fetchData = async (urlExt = undefined) => {
        let url;
        if (urlExt) url = baseUrl + urlExt;
        else url = baseUrl;
        // let url = (urlExt) ? `${baseUrl}${urlExt}` : baseUrl; //baseUrl + ext;
        console.log(baseUrl);
        console.log(urlExt);
        console.log(url);
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }
    return [data, fetchData];
}

export { useFlip, useAxios };