class FeatureList extends React.Component{
    constructor(props){
        super(props);
        var names = ["Inspiring Fresh Ideas", "Promoting Innovation", "Building Global Network"];
        var tags = [".com creates an online business ecosystem to help entrepreneurs around the globe produce new ideas.",
                    ".com is also an innovative platform for promoting and sharing of new technologies, innovations and patent technologies.",
                    "TaoBase.com is designed for SMB owners to build a business network locally and globally -- both at the same time."];
        var srcs = ["../images/business1.jpg", "../images/business2.jpg", "../images/business3.jpg"];
        var items = [];
        for(var i = 0; i < names.length; i ++){
            items.push({
                name: names[i],
                tag: tags[i],
                src: srcs[i]
            });
        }
        this.state = {items};
    }

    render() {
        return (
            <div>
                {this.state.items.map((item, index) => {
                    return (<FeatureItem name={item.name} tag={item.tag} src={item.src}/>)
                })}
                {/*{this.state.mm.map(function (item, index) {*/}
                {/*    return (<FeatureItem  name={item.key} tag={item.value} />)*/}
                {/*})}*/}
                {/*<FeatureItem name="yw" tag={this.state.}/>*/}
                {/*<FeatureItem name="eric" />*/}
                {/*<FeatureItem name="oliver" />*/}
            </div>
        );
    }
}