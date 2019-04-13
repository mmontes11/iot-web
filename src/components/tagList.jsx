import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const TagList = ({ label, tags, tagStyle }) => {
  if (tags.length === 0) {
    return null;
  }
  const tagClass = classNames("tag", tagStyle);
  return (
    <div className="tag-list">
      {label && (
        <p className="tag-list-label is-6">
          <FormattedMessage id={label}>{txt => <strong>{txt}</strong>}</FormattedMessage>
        </p>
      )}
      <div className="tags">
        {tags.map(tag => (
          <FormattedMessage key={tag} id={tag} defaultMessage={tag}>
            {txt => <span className={tagClass}>{txt}</span>}
          </FormattedMessage>
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
