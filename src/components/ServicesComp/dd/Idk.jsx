import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Idk.css'

export default function Idk() {
  return (
    <>
    <div className="idkpar container-fluid">
      <div className="row">

        <div className="leftIdk col">
            <p>Meet our Hiring team</p>
            <p>Join our team of expert IT professionals </p>
            <p>and help shape the future of software solutions.</p>
            <button type="button" class="btn btn-info" style={{
                width:'30%', 
                marginTop:'2%', 
                padding:'1.5% 0',
                color:'black'
                }}>View Careers</button>
        </div>

        <div className="rightIdk col">
        <ImageList sx={{width: '70%', height: 'auto', overflowY: 'hidden'  }} variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      </div>
    </div>

    </>
  );
}

const itemData = [
  {img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
];