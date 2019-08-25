class Member extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{display:'inline-block'}}>
                <h3>{this.props.number}</h3>
            </div>
        );
    }
}