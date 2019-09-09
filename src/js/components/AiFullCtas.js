import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

export default class AiFullCtas extends Component {

	static propTypes = {
		ctas: PropTypes.array,
		currentTime: PropTypes.number,
		jumpToScene: PropTypes.func,
		
	}

	constructor() {
		super();
	}



	handleClick = (e, href, onclick) => {
		
		let val;
		console.log(e.currentTarget.firstChild.nextSibling.innerHTML)
		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product") {
			window.open("http://www.torrid.com/product/floral-heart-sunglasses/10265338.html");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product ") {
			window.open("http://www.cadillac.com/preceding-year/escalade-suv.html");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product  ") {
			window.open("https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product   ") {
			window.open("https://us.lkbennett.com/product/CONTSCFLORETEPATENTLEATHERBlackBlack~Floret-Patent-Leather-Heel-Black");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song") {
			window.open("https://open.spotify.com/track/65wx71brAmEQz66GXXF8gI");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song ") {
			window.open("https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song  ") {
			window.open("https://open.spotify.com/track/6taFIgW5YE94x1icBh5vTg");

		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio") {

			this.props.fullAiCardShow('character', {key: "4", characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.", "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]});
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio ") {

			this.props.fullAiCardShow('character', {key: "2", characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).", "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]});
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio  ") {

			this.props.fullAiCardShow('character', {key: "12",characterName:"Mr. Robot",actorName:"Christian Slater",characterImage:"assets/img/mr-robot.jpg",actorImage:"assets/img/christain-slater.jpg",characterBio:"Christian Michael Leonard Slater was born on August 18, 1969 in New York City, to Michael Hawkins, a well-known soap actor, and Mary Jo Slater (née Lawton), a casting agent. Christian started in show business early, appearing on the soap opera The Edge of Night (1956) in 1976 at the age of 7. He went on to star in many Broadway shows in the early-1980s. He rose to fame in Hollywood after landing the role of Binx Davey in The Legend of Billie Jean (1985). He moved to Los Angeles in 1987 to pursue a further acting career after dropping out of high school. After having a starring role in the cult classic Heathers (1988), he became somewhat known as the Hollywood bad-boy, having many run-ins with the law. He is also well-known for having dated stars such as Winona Ryder, Christina Applegate, Samantha Mathis and was at one time engaged to actress/model Nina Huang. In 2000, he married Ryan Haddon, the daughter of 1970s model Dayle Haddon. The couple have two children, Jaden Christopher (b. 1999) and Eliana Sophia (b. 2001). As of early 2005, they separated and later divorced, but remain dedicated to bring up their children.",actorBio: 'Christian Michael Leonard Slater was born on August 18, 1969 in New York City, to Michael Hawkins, a well-known soap actor, and Mary Jo Slater (née Lawton), a casting agent. Christian started in show business early, appearing on the soap opera The Edge of Night (1956) in 1976 at the age of 7. He went on to star in many Broadway shows in the early-1980s. He rose to fame in Hollywood after landing the role of Binx Davey in The Legend of Billie Jean (1985). He moved to Los Angeles in 1987 to pursue a further acting career after dropping out of high school. After having a starring role in the cult classic Heathers (1988), he became somewhat known as the Hollywood bad-boy, having many run-ins with the law. He is also well-known for having dated stars such as Winona Ryder, Christina Applegate, Samantha Mathis and was at one time engaged to actress/model Nina Huang. In 2000, he married Ryan Haddon, the daughter of 1970s model Dayle Haddon. The couple have two children, Jaden Christopher (b. 1999) and Eliana Sophia (b. 2001). As of early 2005, they separated and later divorced, but remain dedicated to bring up their children.', "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]});
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio   ") {

			this.props.fullAiCardShow('character', {key: "13", characterName:"Angela Moss",actorName:"Portia Doubleday",characterImage:"assets/img/angela-moss.jpg",actorImage:"assets/img/portia-doubleday.jpg",characterBio: 'As an Allsafe account executive, Angela has over five years of marketing innovation experience with hands-on knowledge of go-to-market routes, business strategy and the ability to connect marketing to sales growth. She is ambitious but lacks confidence, savvy but lacks technological skills. She relies on her childhood friend and colleague, Elliot Alderson, for assistance in critical situations -- in both business and her personal life. Angelas mother died when she was young, from cancer which developed after her exposure to toxic chemicals at a factory owned by Evil Corp. She has a strong relationship with her father, Don, though events at Allsafe begin to strain their relationship. As Angela navigates corporate politics, Don worries that his daughter approaches moral compromise.',actorBio:'Portia Doubleday was born on June 22, 1988 in Los Angeles, California, USA as Portia Ann Doubleday. She is an actress and producer, known for Carrie (2013), Youth in Revolt (2009) and Her (2013).', "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]});
			
		}


		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio    ") {

		this.props.fullAiCardShow('character', {key: "14", characterName:"Trenton",actorName:"Sunita Mani",characterImage:"assets/img/trenton-lg.jpg",actorImage:"assets/img/sunita-mani-lg.jpg",
		characterBio: 'Trenton, known only by her hacker name, is a member of fsociety. Her parents are Iranian immigrants who came to America for freedom. Her father works 60-hour weeks to find tax loopholes for a millionaire art dealer. Her mother ran up a five-figure debt earning an online degree. She has a young brother named Mohammed. The family lives together in Brooklyn and she is a student at a nearby university. In her first face-to-face meeting with the other members of fsociety Trenton uses a Stagefright exploit to own Mobley\'s Android phone.',
		actorBio: 'Sunita Mani is an actress, dancer, and comedian most commonly recognized for her gyrations in the viral music video \"Turn Down for What\" (dir. The Daniels) and as part of the Cocoon Central Dance Team. She also appears in \"Don\'t Think Twice\" as Amy, \"Mr. Robot\" as Trenton, and in the Netflix original series, G.L.O.W as Arthie. Sunita has also guest starred on network television shows including \"Broad City\" on Comedy Central, Search Party on TBS, and The Good Place on NBC.',
         "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]}) 	
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Bio") {

		this.props.fullAiCardShow('character', {key: "15",characterName:"Mobley",actorName:"Azhar Khan",characterImage:"assets/img/mobley-lg.jpg",actorImage:"assets/img/azhar-khan-lg.jpg",
		characterBio: 'Mobley, known only by his hacker name, is a member of fsociety. Mobley was born on January 2, 1984. He lives in Brooklyn. He is a fan of an obscure DJ from whom he took his hacker name. He even created an Angelfire page in DJ Mobley\'s honor. He secures the abandoned Fun Society Arcade as Fsociety\'s base, while also recruiting experienced hacker, Leslie Romero. He meets Elliot some time in between these events. He works at Bank of E and often visits Romero at his home.',
		actorBio: 'Azhar Khan was born on January 7th, 1984 in Mumbai, India and raised in New York City. He is an actor, writer, visual artist, legerdemain enthusiast, and frustrated inventor. A peculiar blend of training and influences have led to him working in an assortment of venues and across various media platforms, from radio plays and video installations to live comedy and primetime television.',
         "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]})
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Bio") {

		this.props.fullAiCardShow('character', {key: "16",characterName:"Romero",actorName:"Ron Cephas Jones",characterImage:"assets/img/romero-lg.jpg",actorImage:"assets/img/ron-cephas-jones-lg.jpg",
		characterBio: 'Leslie Romero is a computer criminal, engineer, and biologist, specializing in phone phreaking and marijuana husbandry. He lives with his elderly mother, Nell Romero, and has a history with Mobley. Though Romero is highly knowledgeable, his thirst for fame and lack of commitment leads to conflict with other members of fsociety.',
		actorBio: 'Ron Cephas Jones is an actor, known for Half Nelson (2006), Sweet and Lowdown (1999) and This Is Us (2016). Jones has also performed in several theatrical productions with the Steppenwolf Theatre Company in Chicago, Illinois; appeared as the title character of Shakespeare\'s Richard III with The Public Theater in New York City, New York, as well as other Off Broadway productions. Jones has served as an understudy or standby in several Broadway theatre productions.',
         "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]}) 
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Bio") {

			this.props.fullAiCardShow('character', {key: "35",characterName:"Salesman",
				actorName:"Eric Martin Brown",
				characterImage:"assets/img/salesman-lg.jpg",
				actorImage:"assets/img/eric-martin-brown-lg.jpg",
				actorBio: 'Eric Martin Brown was born on May 20, 1968 in Syracuse, New York, USA. He is an actor, known for The First Wives Club (1996), One Life to Live (1968) and 30 Rock (2006).',
				characterBio: 'A shoe salesman who is appalled by Angela’s choice to come in to buy shoes following the E-Corp EVP of Technology committing suicide on live TV. He expresses further disgust for Angela\'s willingness to keep her job working for E-Corp following the Fsociety hack fallout.',
				 "otherWorks": [
                                          {
              "image": "assets/img/busters-mal-heart.jpg",
              "link": "https://www.rottentomatoes.com/m/busters_mal_heart/",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "55%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "71%"
            },
            {
              "image": "assets/img/short-term-12.jpg",
              "link": "https://www.rottentomatoes.com/m/short_term_12_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "93%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "99%"
            },
            {
              "image": "assets/img/aint-them-bodies-saints.jpg",
              "link": "https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "61%",
              "tomatometer": "assets/img/fresh.png",
              "tomatometerScore": "79%"
            },
            {
              "image": "assets/img/da-sweet-blood-of-jesus.jpg",
              "link": "https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus",
              "rottenaudience": "assets/img/greenpopcorn.png",
              "rottenaudienceScore": "17%",
              "tomatometer": "assets/img/rotten.png",
              "tomatometerScore": "44%"
            },
            {
              "image": "assets/img/mr-robot-extra.jpg",
              "link": "https://www.rottentomatoes.com/tv/mr_robot",
              "rottenaudience": "assets/img/popcorn.png",
              "rottenaudienceScore": "92%",
              "tomatometer": "assets/img/tomato.png",
              "tomatometerScore": "94%"
            }

                                        ]});
			
		}
		
		

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene") {

			val = 1;
			this.props.jumpToScene(val);
			
		}


		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene ") {
			val = 2;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML ==" Go To Scene") {
            val = 3;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene ") {

	        val = 4;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene  ") {

	         val = 5;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene   ") {

	        val = 6;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene    ") {

	        val = 7;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene     ") {

	         val = 8;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene      ") {

	         val = 9;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene       ") {

	        val = 10;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene") {

	        val = 11;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Scene") {

	        val = 12;
			this.props.jumpToScene(val);
		}


		if(e.currentTarget.firstChild.nextSibling.innerHTML == "       Go To Scene ") {

	        val = 13;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene  ") {

	         val = 14;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene ") {

	        val = 15;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene  ") {

			val = 16;
			this.props.jumpToScene(val);
		   
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene   ") {
            val = 17;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene    ") {
            val = 18;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene    ") {
            val = 19;
			this.props.jumpToScene(val);
		}
		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Scene    ") {
            val = 20;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "    Go To Scene    ") {
            val = 21;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene        ") {
            val = 22;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "    Go To Scene") {
            val = 23;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "     Go To Scene  ") {
            val = 24;
			this.props.jumpToScene(val);
		}

		

		

		else {
			console.log("no target")
		}
	
	
	}

	render() {
		const { ctas, jumpToScene, currentTime, fullAiCardShow } = this.props;
		let buttons;


	

		if (this.props.ctas) {
			buttons = ctas.map((cta, index) =>
				<a key={index} onClick={ (e) => this.handleClick(e, cta[2], cta[3]) }>
					<i className={cta[1]}></i>
					<span>{cta[0]}</span>
				</a>
			);
		}

		return (
			<div className="ctas">
				{buttons}	
			</div>
		)
	}
}