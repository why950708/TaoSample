class Members extends React.Component{
    constructor(props){
        super(props);
        var MembersStyle = {
            display: 'inline-blick'
        };
        this.state = {numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                     styles: MembersStyle};
    }

    render() {
        return (
            <div style={this.state.styles}>
                <button>left</button>
                {this.state.numbers.map((item, index) => {
                    return (<Member number={item}/>);
                })}
                <button>right</button>
            </div>
        );
    }
}