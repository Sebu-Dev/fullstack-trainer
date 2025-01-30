import { cssQuestions } from "./css/cssQuestions";
import { dockerBuildingQuestions } from "./docker/dockerBuildingQuestions";
import { dockerComposeQuestions } from "./docker/dockerComposeQuestions";
import { dockerFileQuestions } from "./docker/dockerFileQuestions";
import { dockerLayerQuestions } from "./docker/dockerLayerQuestions";
import { dockerMultistageQuestions } from "./docker/dockerMultistageQuestions";
import { dockerQuestions } from "./docker/dockerQuestions";
import { dockerVolumeQuestions } from "./docker/dockerVolume";
import JavaScriptQuestions from "./javascript/javaScriptQuestion";
import { reactHookQuestions } from "./react/reactHooks";
import reactQuestions from "./react/reactQuestion";
import { terminalQuestions } from "./terminal/terminalQuestions";
import typeScriptQuestions from "./typescript/typeScriptQuestions";

export default [
  ...cssQuestions,
  ...dockerBuildingQuestions,
  ...dockerComposeQuestions,
  ...dockerFileQuestions,
  ...dockerLayerQuestions,
  ...dockerMultistageQuestions,
  ...dockerQuestions,
  ...dockerVolumeQuestions,
  ...JavaScriptQuestions,
  ...reactHookQuestions,
  ...reactQuestions,
  ...terminalQuestions,
  ...typeScriptQuestions,
];
