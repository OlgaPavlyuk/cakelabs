import React from 'react';

const TagsLine = (props) => {
  if (!props.tags) return false;
  const renderTags = (tag) => <li className="tag" key={tag}>{tag}</li>;

  return (
    <ul className='tags'>
      {props.tags.map(renderTags)}
    </ul>
  );
};

export default TagsLine;
