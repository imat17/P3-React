import React, { Component } from 'react';

class Restaurant extends Component {
	render() {
       let {name, info, picture, alt} = this.props.item;
		return (
            <article className="restaurant__card">
                <a href="" className="restaurant__link">
                    <img src={picture} className="restaurant__img"/>
                    <span className="restaurant__new">Nouveau</span>
                    <div className="restaurant__footer">
                        <div className="restaurant__info">
                            <h4 className="restaurant__name">{name}</h4>
                            <p className="restaurant__text">{info}</p>
                        </div>
                        <div className="restaurant__anim">
                            <span className="restaurant__icon"><i className="far fa-heart"></i></span>
                            <span className="restaurant__icon--animation"><i className="fas fa-heart"></i></span>
                        </div>    
                    </div>
                </a>
            </article>
        );
	}
}

export default Restaurant;
