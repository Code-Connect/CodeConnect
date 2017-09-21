import React, {Component} from "react";
import {Image, PageHeader} from "react-bootstrap";

class Logo extends Component {
    render() {
        return (
            <div className="center-block">
                <div className="center-block logo">
                    {/* <iframe className="img-responsive" src={"https://www.youtube.com/embed/qqVcPtWqagY?showinfo=0"}/> */}
                    <Image src="/img/Logo.png" responsive={true}/>
                </div>
                <PageHeader style={ {textAlign: 'center'} }>
                    <span style={ {fontSize: '150%'} }>
                        Code Connect
                    </span>
                </PageHeader>
            </div>
        )
    }
}
export default Logo;
