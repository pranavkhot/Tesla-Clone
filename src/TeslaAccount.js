import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './TeslaAccount.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import Car from './Car'
import { auth } from './firebase'

function TeslaAccount({setIsMenuOpen, isMenuOpen}) {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()

    const logoutOfApp = () => {
        auth
      .signOut()
      .then(() => {
        dispatch(logout())
        history.push('/')
      })
      .catch((error) => alert(error.message))
    }

    return (
        <div className="">
            <div className="teslaAccount">
                <div className="teslaAccount__header">
                    <div className="teslaAccount__logo">
                        <Link>
                        <img src="https://tesla-view.thron.com/api/xcontents/resources/delivery/getThumbnail/tesla/1440x900/ed55fec1-2dd4-4c32-894b-2704b62f7250.jpg?v=12&dpr=200" alt="Net issue" />
                        </Link>
                    </div>
                    <div className="teslaAccount__links">
                    <Link to='/teslaaccount'>Model S</Link>
                    <Link to='/teslaaccount'>Model 3</Link>
                    <Link to='/teslaaccount'>Model X</Link>
                    <Link to='/teslaaccount'>Model Y</Link>
                    <Link to='/teslaaccount'>Solar Roof</Link>
                    <Link to='/teslaaccount'>Solar Panels</Link>
                    <Link to='/teslaaccount'>Shop</Link>
                    <Link to='/teslaaccount'>Tesla Account</Link>
                    <Link onClick= {logoutOfApp}t>Log Out</Link>
                    <div className="teslaAccount__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon className="teslaAccount__closeMenu"/> : <MenuIcon />}
                    </div>
                    </div>
                </div>
            </div>
            <div className="teslaAccount__info">
                <div className="teslaAccount__person">
                    <h4>{user?.displayName + "'s"} Tesla </h4>
                </div>
                <div className="teslaAccount__infoRight">
                    <Link>Home</Link>
                    <Link>Account</Link>
                    <Link>History</Link>
                    <Link onClick={logoutOfApp}>Sign Out</Link>
                </div>
            </div>
            <div className="teslaAccount__car">
                <Car imgSrc='https://static-assets.tesla.com/configurator/compositor?&options=$MTS10,$PPMR,$WS10,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&version=v0028d202105130416&crop=0,0,0,0&version=v0028d202105130416' model='model s' testDrive/>
                <Car imgSrc='https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PBSB,$W40B,$IBB1&view=STUD_SIDEVIEW&model=m3&size=1920&bkba_opt=1&version=v0028d202105130416&crop=0,0,0,0&version=v0028d202105130416' model='model 3' />
                <Car imgSrc='https://static-assets.tesla.com/configurator/compositor?&options=$MTX11,$PPSW,$WX20,$IBC00&view=SIDE&model=mx&size=1920&bkba_opt=1&version=v0028d202105130416&crop=0,0,0,0&version=v0028d202105130416' model='model x' testDrive />
                <Car imgSrc='https://static-assets.tesla.com/configurator/compositor?&options=$MTY05,$PMNG,$WY21P,$INPB1&view=SIDE&model=my&size=1920&bkba_opt=1&version=v0028d202105130416&crop=0,0,0,0&version=v0028d202105130416' model='model y' />
            </div>
        </div>
    )
}

export default TeslaAccount
