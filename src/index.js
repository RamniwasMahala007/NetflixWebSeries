import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';

const root = document.getElementById('root');
ReactDOM.render(<>

 <div className='heading_style'>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="animate-charcter"> These are the best web series of Ramniwas</h3>
        </div>
      </div>
    </div>
 </div>
<Card   sname ="The Witcher"
        imgsrc = "https://wallpapercave.com/w/wp4423069.jpg"
        title = "A Netflix Original Series"
        link = "https://www.netflix.com/in/title/80189685?source=35" />


<Card   sname = "Shadow and Bone"
        imgsrc = "https://wallpapercave.com/w/wp8781073.jpg"
        title = "A Netflix Original Series"
        link = "https://www.netflix.com/in/title/80236319?source=35"/>


<Card   sname = "Sweet Tooth"
        imgsrc = "https://wallpapercave.com/w/wp9313468.jpg"
        title = "A Netflix Original Series"
        link = "https://www.netflix.com/in/title/81221380?source=35"/>

<Card   sname = "1899"
        imgsrc = "https://wallpapercave.com/w/wp11766167.jpg"
        title = "A Netflix Original Series"
        link = "https://www.netflix.com/in/title/80214497?source=35" />

</>,root);


