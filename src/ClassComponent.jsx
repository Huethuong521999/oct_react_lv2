import React from "react";

class ClassCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: "constructor", stateChange:""};
        console.log("Gọi đầu tiên " + this.state.show);
    }

    changeClassComponentState = () => {
        this.setState = ({stateChange: "Click change state"});
    }

    static getDerivedStateFromProps(props,state) {
        state = {show: "getDerivedStateFromProps", stateChange:"props.stateChange"};
        console.log("Constructor gọi đầu tiên, Gọi " + state.show + " trước khi render ra HTML");
        console.log(state.stateChange);
    }
 
    componentDidMount(state) {
        state = {show: "componentDidMount", stateChange:""};
        console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, Render ra HTML, hiển thị html xong sẽ nhìn thấy " + state.show);
    }

    componentDidUpdate() {
        console.log("Thấy dòng này sau khi thấy giao diện được render xong");
    }

    componentWillUnmount() {
        alert("Class component unmount!");
    }

    render(state) {
        state = {show: "Render", stateChange: ""};
        console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, " + state.show + " ra HTML");
        return (
            <div>
                <button type="button" onClick={this.changeClassComponentState}>Đổi Class Component props</button>
                <p>Xin chào ReactJS, hiển thị HTML bằng Class Component!</p>
            </div>
        );
    }
}

export default ClassCom;