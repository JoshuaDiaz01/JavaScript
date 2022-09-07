import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Error = (props) => {
    return (
        <h1>These arent the droids you are looking for</h1>
    )
}

export default Error;