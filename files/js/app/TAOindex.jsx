$(document).ready(function() {
	// id, Tag, elementId
	ReactDOM.TAO.load('topMenu', <LoginTopMenu param={{}} />, document.getElementById('topMenu'));
	// ReactDOM.TAO.load('topMenu', <TopMenu param={{}} />, document.getElementById('topMenu'));
	// ReactDOM.TAO.load('leftBox', <LeftBox param={{}} />, document.getElementById('leftBox'));
	// ReactDOM.TAO.load('rightBox', <TaoContent param={{}} />, document.getElementById('rightBox'));
	ReactDOM.TAO.load('loginMenu', <LoginMenu param={{}} />, document.getElementById('loginMenu'));
	ReactDOM.TAO.load('about', <About param={{}} />, document.getElementById('about'));
	ReactDOM.TAO.load('ourMission', <OurMission param={{}} />, document.getElementById('ourMission'));
	ReactDOM.TAO.load('footer', <Footer param={{}} />, document.getElementById('footer'));
	ReactDOM.TAO.load('featureList', <FeatureList param={{}} />, document.getElementById('featureList'));
	ReactDOM.TAO.load('members', <Members param={{}} />, document.getElementById('members'));
});

