import "./SelectsStyles.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import KeyWest from "../../assets/keywest.jpg";

import SelectImg from "../selectImg/SelectImg";

const Selects = () => {
  return (
    <div className="selects" name='view'>
      <div className="container">
        <SelectImg bgImg={BoraBora} text="BoraBora" />
        <SelectImg bgImg={BoraBora2} text="Emerald Bay" />
        <SelectImg bgImg={Maldives} text="Maldives" />
        <SelectImg bgImg={Maldives2} text="Grenada" />
        <SelectImg bgImg={Maldives3} text="Barbados" />
        <SelectImg bgImg={KeyWest} text="Key West" />
      </div>
    </div>
  );
};

export default Selects;
