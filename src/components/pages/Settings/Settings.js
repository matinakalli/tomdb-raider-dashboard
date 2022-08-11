import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { darkMode, purpleMode } from "../../../Colors";
import { useStores } from "../../../stores/useStores";
import Header from "../../common/Header";

function Settings() {
  const {
    themeStore: {
      theme: { name },
      setTheme,
    },
  } = useStores();

  const toggleSelected = () => {
    setTheme(name !== "dark" ? darkMode : purpleMode);
  };
  return (
    <SettingsContainer>
      <Header>
        <h2>Dark Theme</h2>
      </Header>
      <ToggleSwitch>
        <Button
          onClick={toggleSelected}
          className={`dialog-button ${name === "dark" ? "" : "disabled"}`}
        >
          {name === "dark" ? "ON" : "OFF"}
        </Button>
      </ToggleSwitch>
    </SettingsContainer>
  );
}

export default observer(Settings);

const SettingsContainer = styled.div`
  padding: 30px;
`;

const ToggleSwitch = styled.div`
  width: 100px;
  background-color: #e9e9e9;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  padding: 4px;
  height: 50px;
  position: relative;
  margin: 20px 0;
`;

const Button = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: #002b49;
  color: white;
  border-radius: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 86%;
  min-width: unset;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 49px;
  transition: all 0.3s ease;

  &.disabled {
    background-color: #707070;
    left: 2px;
  }
`;
