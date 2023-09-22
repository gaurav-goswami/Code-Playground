import React from 'react';
import {Link} from "react-router-dom";
import { INavigationButtonProps } from '../../Interface/Interface';

const NavigationButton : React.FC <INavigationButtonProps> = (props) => {

    const {children, path, style} = props;

  return (
    <>
        <Link to={path}>
            <button className={`${style} transition-all duration-150`}>
                {children}
            </button>
        </Link>
    </>
  )
}

export default NavigationButton
