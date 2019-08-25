class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contents: [
                'We envision a future where commerce between the U.S. and China is seamless, value-driven, and based on trust. TaoBase brings to fruition these goals as a one-stop shop business solution platform for US and China small and medium technology-related companies, distributors, and manufacturers.',
                'Taobase is an innovative commercial platform based on removing cross-border barriers to information flow. We make value by tapping talent, entrepreneurs and SMB demand, linking each as well as international counterparts in a seamless business environment. Built on an AI and block-chain powered platform, users can easily search and match resources, find service providers and secure transactions based on user search queries in a plug-and-play manner. Taobase connects people with resources.'
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>About Taobase.com</h1>
                <AboutContent contents={this.state.contents} />
                <button>Learn more!</button>
            </div>
        );
    }
}