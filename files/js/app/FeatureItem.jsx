class FeatureItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.src}/>
                </div>
                <h1>{this.props.name}</h1>
                <p>{this.props.tag}</p>
            </div>
        );
    }
}