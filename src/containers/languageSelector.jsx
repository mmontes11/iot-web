import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as localizationActions from "actions/localization";
import LanguageItem from "components/languageItem";

const LanguageSelector = ({ selectedLanguage, languages, updateLanguage }) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link" rel="noopener noreferrer">
      <LanguageItem language={selectedLanguage} />
    </a>
    <div className="navbar-dropdown">
      {languages
        .filter(lang => lang !== selectedLanguage)
        .map(lang => (
          <a key={lang} className="navbar-item" onClick={() => updateLanguage(lang)} rel="noopener noreferrer">
            <LanguageItem language={lang} />
          </a>
        ))}
    </div>
  </div>
);

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    selectedLanguage: state.localization.selectedLanguage,
    languages: state.localization.languages,
  }),
  { ...localizationActions },
);

export default withConnect(LanguageSelector);
