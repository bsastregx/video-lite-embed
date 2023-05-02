const textContrast = (bgColor: string | null | undefined) => {
  let textColor = "white";
  switch (bgColor) {
    case "black":
      textColor = "white";
      break;
    case "white":
      textColor = "black";
      break;
    case "black-opacity":
      textColor = "white";
      break;
    case "dark-900":
      textColor = "white";
      break;
    case "dark-800":
      textColor = "white";
      break;
    case "dark-700":
      textColor = "white";
      break;
    case "dark-500":
      textColor = "black";
      break;
    case "dark-400":
      textColor = "black";
      break;
    case "dark-300":
      textColor = "black";
      break;
    case "dark-200":
      textColor = "black";
      break;
    case "dark-100":
      textColor = "black";
      break;
    case "green-900":
      textColor = "white";
      break;
    case "orange-400":
      textColor = "white";
      break;
    case "violet-500":
      textColor = "white";
      break;
    case "violet-300":
      textColor = "black";
      break;
    case "blue-400":
      textColor = "white";
      break;
    case "blue-900":
      textColor = "white";
      break;
    case "turquoise-200":
      textColor = "black";
      break;
    case "purple-400":
      textColor = "white";
      break;
    case "purple-900":
      textColor = "white";
      break;
    case "red-200":
      textColor = "black";
      break;
    case "red-400":
      textColor = "white";
      break;
    case "red-50":
      textColor = "black";
      break;
    case "fuchsia-500":
      textColor = "black";
      break;
    case "fuchsia-700":
      textColor = "white";
      break;
    case "violet-50":
      textColor = "black";
      break;
    case "blue-50":
      textColor = "black";
      break;
    case "orange-50":
      textColor = "-black";
      break;
    case "green-50":
      textColor = "black";
      break;
    //LIVE 2022
    case "--live-2022__color--yellow":
      textColor = "black";
      break;
    case "--live-2022__color--red":
      textColor = "black";
      break;
    case "--live-2022__color--gray":
      textColor = "black";
      break;
    case "--live-2022__color--purple":
      textColor = "black";
      break;
    case "--live-2022__color--blue":
      textColor = "black";
      break;
    case "--live-2022__color--green":
      textColor = "black";
      break;
    case "--live-2022__color--black":
      textColor = "white";
      break;
    default:
      textColor = "black";
  }
  return textColor;
};

export default textContrast;
