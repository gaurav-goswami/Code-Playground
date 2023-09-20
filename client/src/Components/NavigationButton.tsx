import React from 'react';
import {Link} from "react-router-dom";
import { INavigationButtonProps } from '../Interface/Interface';

const NavigationButton : React.FC <INavigationButtonProps> = (props) => {

    const {children, path, style} = props;

  return (
    <>
        <Link to={path}>
            <button className={style}>
                {children}
            </button>
        </Link>
    </>
  )
}

export default NavigationButton
