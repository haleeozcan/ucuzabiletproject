import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {faMoon, faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Helmet from 'react-helmet';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {formatDate, parseDate} from 'react-day-picker/moment';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import tr from "../images/trflag.png";

const options = [

    {label: 'Adana'},
    {label: 'Adıyaman'},
    {label: 'Afyon'},
    {label: 'Ağrı'},
    {label: 'Amasya'},
    {label: 'Ankara'},
    {label: 'Antalya'},
    {label: 'Artvin'},
    {label: 'Aydın'},
    {label: 'Bilecik'},
    {label: 'Adana'},
    {label: 'Balıkesir'},
    {label: 'Bingöl'},
    {label: 'Bitlis'},
    {label: 'Bolu'},
    {label: 'Burdur'},
    {label: 'Bursa'},
    {label: 'Çanakkale'},
    {label: 'Çankırı'},
    {label: 'Çorum'},
    {label: 'Denizli'},
    {label: 'Diyarbakır'},
    {label: 'Edirne'},
    {label: 'Elazığ'},
    {label: 'Erzincan'},
    {label: 'Eskişehir'},
    {label: 'İstanbul'},
    {label: 'İzmir'},
    {label: 'Muğla'},
    {label: 'Mersin'},

];
const data = [
    {label: '1 Oda'},
    {label: '2 Oda'},
    {label: '3 Oda'},
];


export default class Arama extends React.Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = {
            from: undefined,
            to: undefined,
        };
    }

    showFromMonth() {
        const {from, to} = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }

    handleFromChange(from) {
        this.setState({from});
    }

    handleToChange(to) {
        this.setState({to}, this.showFromMonth);
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        const diffInMs = new Date(to) - new Date(from)
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);


        function filterBy(option, state) {
            if (state.selected.length) {
                return true;
            }
            return option.label.toLowerCase().indexOf(state.text.toLowerCase()) > -1;
        }

        return (
            <Container style={{padding: 20}}>
                <Row>
                    <Col xs={6} md={3}>
                        <Typeahead
                            filterBy={filterBy}
                            id="toggle-example"
                            options={options}
                            placeholder="Şehir  ">
                        </Typeahead>
                    </Col>
                    <Col xs={6} md={4} lg={5} className="vertical-line">
                        <div className="InputFromTo">
                            <DayPickerInput
                                value={from}
                                placeholder={"Giriş Tarihi"}
                                format="LL"
                                formatDate={formatDate}
                                parseDate={parseDate}
                                dayPickerProps={{
                                    selectedDays: [from, {from, to}],
                                    disabledDays: {after: to},
                                    toMonth: to,
                                    modifiers,
                                    numberOfMonths: 2,
                                    onDayClick: () => this.to.getInput().focus(),
                                }}
                                onDayChange={this.handleFromChange}
                            />{' '}
                            <span className="InputFromTo-to">
          <DayPickerInput className="vertical-line"
              ref={el => (this.to = el)}
              value={to}
              placeholder="Çıkış Tarihi"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                  selectedDays: [from, {from, to}],
                  disabledDays: {before: from},
                  modifiers,
                  month: from,
                  fromMonth: from,
                  numberOfMonths: 2,
              }}
              onDayChange={this.handleToChange}
          />
        </span>

                            <Helmet>
                                <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }

`}</style>
                            </Helmet>
                        </div>
                    </Col>
                    <Col xs={4} md={1} lg={1} className="night-number">
                        <FontAwesomeIcon icon={faMoon}/>
                        <div style={{fontSize: 12}}>{diffInDays > 0 ? diffInDays + " Gece" : ""}</div>
                    </Col>
                    <Col xs={6} md={2} lg={1}  className="vertical-line">
                        <Typeahead
                            filterBy={filterBy}
                            id="toggle-example"
                            options={data}
                            placeholder="Oda">
                        </Typeahead>
                    </Col>
                    <Col xs={6} md={1} lg={1}>
                        <Button className="ara-button"><b>ARA</b></Button>{' '}
                    </Col>
                </Row>
            </Container>


        );
    }
}
