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
    averageUserRating: PropTypes.number,
    userRatingCount: PropTypes.number,
  })),
};

const defaultProps = {
  list: [
    {
      id: '1403455040',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
      averageUserRating: 4.5,
      userRatingCount: 100,
    },
    {
      id: '1403455041',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
      averageUserRating: 5,
      userRatingCount: 100,
    },
    {
      id: '1403455042',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
      averageUserRating: 4,
      userRatingCount: 100,
    },
    {
      id: '1403455043',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
      averageUserRating: 3.5,
      userRatingCount: 100,
    },
    {
      id: '1403455044',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
      averageUserRating: 2,
      userRatingCount: 100,
    },
    {
      id: '1403455045',
      name: 'Hello Stars - Fastone Games',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/08/ec/49/08ec49a9-1715-80e0-41c4-7f40189e4cf2/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png',
      category: '遊戲',
      averageUserRating: 0.5,
      userRatingCount: 100,
    },
  ],
};

function TopList(props) {
  const { list } = props;
  return (
    <div className="top-list">
      <ul className="top-app-list">
        {
          list.map((app, index) => (
            <li key={app.id} data-rank={index + 1}>
              <AppBox
                app={app}
                vertical={false}
                isCircleIcon={index % 2 !== 0}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

TopList.propTypes = propTypes;
TopList.defaultProps = defaultProps;

export default TopList;
