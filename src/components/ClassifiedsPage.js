import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateClassifiedAd from './CreateClassifiedAd';

const Ads = (props) => (
	<div className="card-deck">
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">{props.ad.ad_title}</h4>
				<h3 className="card-price">{props.ad.ad_price}</h3>
				<p className="card-description">{props.ad.ad_description}</p>
				<p className="card-contact-name">
					<small className="text-muted">
						{props.ad.ad_contactName} 
					</small>
                </p>
                <p className="card-contact-phoneEmail">
								<small className="text-muted">
                                <span>{props.ad.ad_contactPhone}</span>						<span>{props.ad.ad_contactEmail}</span>
								</small>
                </p>
                <p>
					<Link to={'/edit/' + props.updateAd._id}>Edit</Link>
				</p>
			</div>
		</div>
	</div>

	/* // <tr>
	//     <td>{props.ad.ad_title}</td>
	//     <td>{props.ad.ad_price}</td>
	//     <td>{props.ad.ad_description}</td>
	//     <td>{props.ad.ad_contactName}</td>
	//     <td>{props.ad.ad_contactPhone}</td>
	//     <td>{props.ad.ad_contactEmail}</td>
	//     <td>
	//         <Link to={"/edit/"+props.updateAd._id}>Edit</Link>
	//     </td>
	// </tr> */
);

export default class ClassifiedsPage extends Component {
	constructor(props) {
		super(props);
		this.state = { classifiedAds: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/api/classifieds/')
			.then((response) => {
				this.setState({ classifiedAds: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	classifiedsList() {
		return this.state.classifiedAds.map(function(currentAds, i) {
			return <Ads ads={currentAds} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<div>
					<CreateClassifiedAd />
				</div>

				<h3>Classified Section</h3>
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<h3 className="card-price">$ </h3>
							<p className="card-description">
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-contact-name">
								<small className="text-muted">
									Contact: 
								</small>
                            </p>
                            <p className="card-contact-phoneEmail">
								<small className="text-muted">
									<span>Ph: </span>
									<span>Email: </span>
								</small>
							</p>
						</div>
					</div>
					{/* <div className="card">
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div> */}
				</div>

				{/* <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Contact Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.classifiedsList()}
                    </tbody>
                </table> */}
			</div>
		);
	}
}
