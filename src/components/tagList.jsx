import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const TagList = ({ label, tags, tagStyle }) => {
  if (tags.length === 0) {
    return null;
  }
  const tagClass = classNames("tag", tagStyle);
  return (
    <div className="tag-list">
      {label && (
        <p className="tag-list-label is-6">
          <strong>{label}</strong>
        </p>
      )}
      <div className="tags">
        {tags.map(tag => (
          <span key={btoa(tag)} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

TagList.propTypes = {
  label: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  tagStyle: PropTypes.string,
};

TagList.defaultProps = {
  label: null,
  tags: [],
  tagStyle: null,
};

export default TagList;
