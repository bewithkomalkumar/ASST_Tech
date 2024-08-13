import Image from "next/image";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from "./Components/Navbar/Navbar";
export default function Home() {
  return (<>
   <ResponsiveAppBar/>
  </>
  );
}
