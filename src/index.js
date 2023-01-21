import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Animation from './Animation';
import SData from './SData';

// console.log(SData[0].sname);
const root = document.getElementById('root');
ReactDOM.render(<>

<Animation/>
 
<Card   sname = {SData[0].sname}
        imgsrc = {SData[0].imgsrc}
        title = {SData[0].title}
        link = {SData[0].link} 

        />


<Card   sname = {SData[1].sname}
        imgsrc = {SData[1].imgsrc}
        title = {SData[1].title}
        link = {SData[1].link}

        />


<Card   sname = {SData[2].sname}
        imgsrc = {SData[2].imgsrc}
        title = {SData[2].title}
        link = {SData[2].link}

        />

<Card  sname = {SData[3].sname}
        imgsrc = {SData[3].imgsrc}
        title = {SData[3].title}
        link = {SData[3].link}

        />

</>,root);


