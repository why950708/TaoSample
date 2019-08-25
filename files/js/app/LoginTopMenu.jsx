class LoginTopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {list: [], language: "English"};
    }

    componentDidMount() {
        var me = this;

        ReactDOM.TAO.dataEngine({
            type: 'POST',
            url: '/api/Tao/API_PG.api?code=PGdatabases',
            data: {},
            dataType: 'JSON',
            timeout: (6 * 1000),
            success: function(resultData){
                me.setState({list : resultData.data, _TM : new Date().getTime()});
            },
            error : function(err) {
                console.log('err');
            },
            spinner : me
        });
    }

    componentDidUpdate(prevProps, prevState) {
        var me = this;
    }

    logoClick(){
        console.log("logo click");
    }

    taoSolutionClick(){
        console.log("tao-solution click");
    }

    signUpClick(){
        console.log("sign-up click");
    }

    translateToEnglish(){
        console.log("english click");
    }

    translateToChinese(){
        console.log("chinese click");
    }

    languageChange(me){
        console.log("select change");
        var changeLanguage = me.target.value;
        console.log(changeLanguage);
        this.setState({language: changeLanguage});
        console.log(this.state.language);
    }

    render(){
        var me = this;
        return (
            <div className="border border-success alert-success rounded  m-0 mt-3 mb-2 p-2">
                <img onClick={this.logoClick} alt = "logo"/>
                <span><a href = "javascript:void(0);" onClick={this.taoSolutionClick}>Tao Solution</a></span>
                <img alt = "icon" />
                <span><a href = "javascript:void(0);" onClick={this.signUpClick}>Sign Up</a></span>
                <select onChange={this.languageChange.bind(this)}>
                    <option value = "English">English</option>
                    <option value = "Chinese">Chinese</option>
                </select>
            </div>
        );
    }
}