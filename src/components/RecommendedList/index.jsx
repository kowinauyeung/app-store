import React from 'react';
import PropTypes from 'prop-types';
import AppBox from '../AppBox';
import './index.css';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
  })),
};

const defaultProps = {
  list: [
    {
      id: '1403455040',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
    },
    {
      id: '1403455041',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
    },
    {
      id: '1403455042',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
    },
    {
      id: '1403455043',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
    },
    {
      id: '1403455044',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
    },
    {
      id: '1403455045',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
    },
  ],
};

function RecommendedList(props) {
  const { list } = props;
  return (
    <div className="recommended-list">
      <h3>
        推介
      </h3>
      <div className="recommended-app-list-wrap">
        <ul className="recommended-app-list">
          {
            list.map(app => (
              <li key={app.id}>
                <AppBox app={app} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

RecommendedList.propTypes = propTypes;
RecommendedList.defaultProps = defaultProps;

export default RecommendedList;
