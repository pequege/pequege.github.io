import { SpeedDial, SpeedDialAction } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { grey } from "@mui/material/colors";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const FabChangeLanguage = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  /* boton lenguaje */
  const colorFabLenguaje = grey[900];
  const actions = [
    {
      icon: <Image src="./src/assets/arg.png" width={40} />,
      name: "Español",
      language: "es",
    },
    {
      icon: <Image src="./src/assets/usa.png" width={40} />,
      name: "English",
      language: "en",
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", bottom: 16, left: 16 }}
      icon={<TranslateIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          sx={{ background: `${colorFabLenguaje}` }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            console.log(action.language);
            changeLanguage(action.language);
          }}
        />
      ))}
    </SpeedDial>
  );
};
