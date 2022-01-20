import React from 'react';

const List = () => {
    return (
        <>
            <div className="process">
            <h3 className="process__title">Fonctionnement</h3>
            <div className="process__listcontainer">
                <ol className="process__list">
                    <li className="process__step">
                        <span className="process__counter">1</span>
                        <span className="process__icon"><i className="fas fa-mobile-alt"></i></span>
                        <span className="process__text">Choisissez un restaurant</span>
                    </li>
                    <li className="process__step">
                        <span className="process__counter">2</span>
                        <span className="process__icon"><i className="fas fa-list-ul"></i></span>
                        <span className="process__text">Composez votre menu</span>
                    </li>
                    <li className="process__step">
                        <span className="process__counter">3</span>
                        <span className="process__icon"><i className="fas fa-store"></i></span>
                        <span className="process__text">Dégustez au restaurant</span>
                    </li>
                </ol>
            </div>
        </div>
        </>
    );
};

export default List;