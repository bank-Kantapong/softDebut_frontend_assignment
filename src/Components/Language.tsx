import { LANGUAGE } from "../constantType";
import SOne_index_iconeng from "../Assets/SOne_index_iconeng.jpg";
import SOne_index_iconthai from "../Assets/SOne_index_iconthai.jpg";

interface LanguageType {
  selectedLanguage: LANGUAGE;
  onChangeLanguage: (lang: LANGUAGE) => void;
}

const Language = ({ selectedLanguage, onChangeLanguage }: LanguageType) => {
  return (
    <div className="flex gap-1">
      <img
        src={SOne_index_iconthai}
        alt="th"
        width={25}
        className={
          selectedLanguage === LANGUAGE.TH
            ? "cursor-pointer"
            : `grayscale hover:grayscale-0 cursor-pointer`
        }
        onClick={() => onChangeLanguage(LANGUAGE.TH)}
      />
      <img
        src={SOne_index_iconeng}
        alt="en"
        width={25}
        className={
          selectedLanguage === LANGUAGE.EN
            ? "cursor-pointer"
            : `grayscale hover:grayscale-0 cursor-pointer`
        }
        onClick={() => onChangeLanguage(LANGUAGE.EN)}
      />
    </div>
  );
};

export default Language;
