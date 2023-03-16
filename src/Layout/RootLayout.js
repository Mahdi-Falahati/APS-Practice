
import {NavLink,Outlet} from 'react-router-dom';
export default function RootLayout() {
  return (
    <>
        <header>Wellcome - I AM RC</header>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
