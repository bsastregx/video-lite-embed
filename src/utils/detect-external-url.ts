export default function linkTarget(url: string) {
  const tmp = document.createElement("a");
  tmp.href = url;
  const isExternalLink = tmp.host !== window.location.host;
  if (isExternalLink) {
    return "_blank";
  } else {
    return "_self";
  }
}
