import { useEffect, useState } from "react";
export default function LanguagesDropdown() {
  let [languageList, setLanguageList] = useState([]);
  let [value, setValue] = useState(localStorage.language ? localStorage.language : "en");

  useEffect(() => {
    fetch(`https://suttacentral.net/api/languages`)
      .then(response => response.json())
      .then(data => {
        setLanguageList(data);
      });
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
    localStorage.language = event.target.value;
  }

  return (
    <>
      <label htmlFor="languages" id="language-area-box-label">
        Language
      </label>
      Alternatives on SuttaCentral:
      <div className="option-descriptions dropdown-description">
        Choose a language to show alternatives to Bhikkhu Sujato's translation.
      </div>
      <select name="languages" id="languages" value={value} onChange={handleChange}>
        {languageList.map(language => {
          return (
            <option value={language.uid} key={language.uid}>
              {language.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
