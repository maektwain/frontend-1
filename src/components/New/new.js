import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import Button from 'components/Template/customButton';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';
import { validatewebsite } from 'components/Common/function';
import { createCampaign } from 'ducks/campaign';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

function validate(campaignname, website) {
  // true means invalid, so our conditions got reversed
  return {
    name: campaignname.length === 0,
    email: !validatewebsite(website)
  };
}

export class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      campaignname: '',
      website: '',
      status: {},
      errorName: '',
      errorWebsiteUrl: ''
    }
    this.handleNextButton = this.handleNextButton.bind(this)
  }

  handleCampaignNameChange(evt) {
    this.setState({campaignname: evt.target.value, errorName:'' });
  }

  handleWebsiteChange(evt) {
    this.setState({website: evt.target.value, errorWebsiteUrl: ''});
  }

  handleCampaignAuth(evt) {
    if (evt.target.value == '')
      this.setState({errorName: "Enter campaign name"})
  }

  handleWebsiteAuth(evt) {
    if(evt.target.value) {
      this.setState({errorWebsiteUrl: "Enter website url"})
    } else if(!validatewebsite(evt.target.value)) {
      this.setState({errorWebsiteUrl: "Enter a valid website url"});
    }
  }

  canBeSubmitted() {
    const errors = validate(this.state.campaignname, this.state.website);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleCheckCookie() {
    var usertoken = localStorage.getItem("authToken");
    if (usertoken != "") {
      return usertoken;
    } else {
      this.setState({render: false});
      browserHistory.push('/login');
    }
  }

  handleNextButton(evt) {
    evt.preventDefault();
    var tokenverify = this.handleCheckCookie();
    const data = {
      campaignName: this.state.campaignname,
      websiteUrl: this.state.website,
      profile: this.props.profile._id
    };
    return this.props.createCampaign(data)
  }

  componentWillMount() {
    if(this.props.campaign && Object.keys(this.props.campaign).length !== 0 && this.props.campaign.constructor === Object)
      this.props.callbackFromParent({'active': 2});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.campaign != this.props.campaign)
      this.props.callbackFromParent({'active': 2});
  }


  render() {
    const errors = validate(this.state.campaignname, this.state.website);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const { errorName, errorWebsiteUrl, campaignname, website } = this.state;
    return (<div className="content fill">
      <Grid fluid="fluid">
        <Row>
          <Col md={12}>
            <CardHeader title="Website" content={
              <form onSubmit={this.handleNextButton}>
                <Row>
                  <div className="col-md-6">
                    <FormGroup>
                      <ControlLabel>Name</ControlLabel>
                      <FormControl
                        type="text"
                        bsClass="form-control"
                        id="campaignname"
                        placeholder="example: Acme Co, Blog, Online Store"
                        onChange={this.handleCampaignNameChange.bind(this)}
                        onBlur={this.handleCampaignAuth.bind(this)}
                        value={campaignname}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorName}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <ControlLabel>Website URL</ControlLabel>
                      <FormControl
                        type="text"
                        bsClass="form-control"
                        placeholder="http://"
                        id="website"
                        onChange={this.handleWebsiteChange.bind(this)}
                        onBlur={this.handleWebsiteAuth.bind(this)}
                        value={website}
                        required={true}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorWebsiteUrl}</p>
                      </HelpBlock>
                    </FormGroup>
                  </div>
                </Row>
                <Button
                  bsStyle="info"
                  pullRight
                  fill
                  type="submit"
                  disabled={isDisabled}
                  >
                  Next >
                </Button>
                <div className="clearfix"></div>
              </form>
            }/>
          </Col>
        </Row>
      </Grid>
      <ToastContainer hideProgressBar={true}/>
    </div>);
  }
}
const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  campaign: state.getIn(['campaign', 'campaign'])
});

const mapDispatchToProps = {
  createCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
