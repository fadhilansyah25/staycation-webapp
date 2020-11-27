import React from 'react';
// import './MostPicked.scss';
import TagInfo from 'Component/TagInfo/TagInfo';
// import MetaDesc from 'Component/MetaDesc/MetaDesc';
import Button from 'Component/Button/Button';
import { dollarCurrency } from 'Function/FormatingNumber';


function MostPicked(props) {
    return (
        <section className="container mostpicked" ref={props.refMostPicked}>
            <h4>Most Picked</h4>
            <div className="container-grid">
                {/* {props.data.mostPicked.map((item, index) => {
                    return (
                        <div className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
                            <div className="card">
                                <TagInfo price={dolarCurrency(item.price)} desc={`per ${item.unit}`} />
                                <img src={item.imageUrl} alt={item.name} className="img-fluid" />
                                <Button type="link" className="streched-link d-block" href={`/properties/${item._id}`}>
                                    <MetaDesc name={item.name} city={item.city} country={item.country}></MetaDesc>
                                </Button>
                            </div>
                        </div>
                    )
                })} */}

                {
                    props.data.mostPicked.map((item, index) => {
                        return (
                            <div key={`mostPicked-${index}`}
                            className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        <TagInfo price={dollarCurrency(item.price)} desc={`Per ${item.unit}`}></TagInfo>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button type="link" className="streched-link d-block text-white" href={`/properties/${item._id}`}>
                                            <h5>{item.name}</h5>
                                        </Button>
                                        <span>{item.city}, {item.country}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MostPicked
