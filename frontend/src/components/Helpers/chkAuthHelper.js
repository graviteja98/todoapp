export default function chkAuthHelper() {
  return "true" === localStorage.getItem("isLogged");
}
