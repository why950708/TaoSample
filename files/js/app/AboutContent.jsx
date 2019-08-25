class AboutContent extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.contents.map((item, index) => {
                    return (<p>{item}</p>);
                })}
            </div>
        );
    }
}