import React from 'react';
import HistoryItem from '../components/historyItem.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridAutoRows: 'minmax(80px, auto)',
    textAlign: 'center',
    gridGap: '4px',
    padding: '4px'
  },
}

const HistoryStack = (props) => {
  return (
    <div style={s.wrap}>
      {props.userHistory.map((entry, index) => 
        <HistoryItem entry={entry} key={index}/>
      )}
    </div>
  )
};

export default HistoryStack;