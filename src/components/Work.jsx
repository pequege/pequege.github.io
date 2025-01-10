import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

/* asd */
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Typography from "@mui/material/Typography";

export const Work = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#5be6ba" }}>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className="work-title" variant="h6" component="span">
              {t("certificados")}
            </Typography>
            <ul>
              <li>
                <strong>Git & Github</strong> <br />
                Insignia
              </li>
              <li>
                <strong>Full Stack Web Dev.</strong> <br />
                Rolling Code 2023
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#6479d6" }}>
              <DeveloperModeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className="work-title" variant="h6" component="span">
              {t("proyectos")}
            </Typography>
            <ul>
              <li>
                <strong>Kani</strong> <br />
                Front End Development
              </li>
              <li>
                <strong>Separapp</strong> <br />
                Prototipos Alta Fidelidad en Figma
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#7e2df1" }}>
              <WorkHistoryIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className="work-title" variant="h6" component="span">
              {t("experiencia")}
            </Typography>
            <ul>
              <li>
                <strong>
                  Analista - Dirección de Proyectos Informáticos (UTN FRT)
                </strong>
                <br />
                Abril 2022 - Diciembre 2023
              </li>
              <li>
                <strong>Web Developer - Freelance</strong> <br />
                2023 - Actualidad
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
