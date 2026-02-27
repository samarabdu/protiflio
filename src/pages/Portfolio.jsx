import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Graphic Design');
  const [showMore, setShowMore] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'Yellow Design',
      category: 'Graphic Design',
      image: '',
      color: 'yellow',
    },
    {
      id: 2,
      title: 'Red Design',
      category: 'Graphic Design',
      image: '',
      color: 'red',
    },
    {
      id: 3,
      title: 'Green Design',
      category: 'Apps',
      image: '',
      color: 'green',
    },
    {
      id: 4,
      title: 'Gray Design',
      category: 'Software',
      image: '',
      color: 'gray',
    },
    {
      id: 5,
      title: 'Yellow Design 2',
      category: 'Graphic Design',
      image: '',
      color: 'yellow',
    },
    {
      id: 6,
      title: 'Red Design 2',
      category: 'Graphic Design',
      image: '',
      color: 'red',
    },
  ];

  const categories = ['Graphic Design', 'Apps', 'Software'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const displayedItems = showMore ? filteredItems : filteredItems.slice(0, 4);

  return (
    <div className="section">
      <p className="section-label">MY WORK</p>
      <h2 className="section-title">RECENT WORK</h2>

      <div className="portfolio-filters">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => {
            setActiveFilter('all');
            setShowMore(false);
          }}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(category);
              setShowMore(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {displayedItems.map((item) => (
          <div key={item.id} className={`portfolio-item ${item.color}`}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>

      {filteredItems.length > 4 && !showMore && (
        <button className="show-more-btn" onClick={() => setShowMore(true)}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Portfolio;
